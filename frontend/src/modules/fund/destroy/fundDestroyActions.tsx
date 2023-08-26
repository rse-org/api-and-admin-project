import listActions from 'src/modules/fund/list/fundListActions';
import FundService from 'src/modules/fund/fundService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'FUND_DESTROY';

const fundDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: fundDestroyActions.DESTROY_STARTED,
      });

      await FundService.destroyAll([id]);

      dispatch({
        type: fundDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.fund.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/fund');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: fundDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: fundDestroyActions.DESTROY_ALL_STARTED,
      });

      await FundService.destroyAll(ids);

      dispatch({
        type: fundDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.fund.destroyAll.success'),
      );

      getHistory().push('/fund');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: fundDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default fundDestroyActions;
