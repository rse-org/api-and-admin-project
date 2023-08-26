import listActions from 'src/modules/fundAsset/list/fundAssetListActions';
import FundAssetService from 'src/modules/fundAsset/fundAssetService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'FUNDASSET_DESTROY';

const fundAssetDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: fundAssetDestroyActions.DESTROY_STARTED,
      });

      await FundAssetService.destroyAll([id]);

      dispatch({
        type: fundAssetDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.fundAsset.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/fund-asset');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: fundAssetDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: fundAssetDestroyActions.DESTROY_ALL_STARTED,
      });

      await FundAssetService.destroyAll(ids);

      dispatch({
        type: fundAssetDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.fundAsset.destroyAll.success'),
      );

      getHistory().push('/fund-asset');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: fundAssetDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default fundAssetDestroyActions;
