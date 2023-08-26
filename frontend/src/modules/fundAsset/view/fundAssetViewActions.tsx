import FundAssetService from 'src/modules/fundAsset/fundAssetService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FUNDASSET_VIEW';

const fundAssetViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: fundAssetViewActions.FIND_STARTED,
      });

      const record = await FundAssetService.find(id);

      dispatch({
        type: fundAssetViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: fundAssetViewActions.FIND_ERROR,
      });

      getHistory().push('/fund-asset');
    }
  },
};

export default fundAssetViewActions;
