import AssetService from 'src/modules/asset/assetService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ASSET_VIEW';

const assetViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assetViewActions.FIND_STARTED,
      });

      const record = await AssetService.find(id);

      dispatch({
        type: assetViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assetViewActions.FIND_ERROR,
      });

      getHistory().push('/asset');
    }
  },
};

export default assetViewActions;
