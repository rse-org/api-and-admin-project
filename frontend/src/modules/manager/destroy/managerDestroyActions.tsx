import listActions from 'src/modules/manager/list/managerListActions';
import ManagerService from 'src/modules/manager/managerService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MANAGER_DESTROY';

const managerDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: managerDestroyActions.DESTROY_STARTED,
      });

      await ManagerService.destroyAll([id]);

      dispatch({
        type: managerDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.manager.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/manager');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: managerDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: managerDestroyActions.DESTROY_ALL_STARTED,
      });

      await ManagerService.destroyAll(ids);

      dispatch({
        type: managerDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.manager.destroyAll.success'),
      );

      getHistory().push('/manager');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: managerDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default managerDestroyActions;
