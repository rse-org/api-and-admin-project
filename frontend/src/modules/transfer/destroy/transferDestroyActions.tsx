import listActions from 'src/modules/transfer/list/transferListActions';
import TransferService from 'src/modules/transfer/transferService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TRANSFER_DESTROY';

const transferDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: transferDestroyActions.DESTROY_STARTED,
      });

      await TransferService.destroyAll([id]);

      dispatch({
        type: transferDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.transfer.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/transfer');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: transferDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: transferDestroyActions.DESTROY_ALL_STARTED,
      });

      await TransferService.destroyAll(ids);

      dispatch({
        type: transferDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.transfer.destroyAll.success'),
      );

      getHistory().push('/transfer');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: transferDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default transferDestroyActions;
