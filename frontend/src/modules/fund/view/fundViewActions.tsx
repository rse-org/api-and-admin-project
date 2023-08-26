import FundService from 'src/modules/fund/fundService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FUND_VIEW';

const fundViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: fundViewActions.FIND_STARTED,
      });

      const record = await FundService.find(id);

      dispatch({
        type: fundViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: fundViewActions.FIND_ERROR,
      });

      getHistory().push('/fund');
    }
  },
};

export default fundViewActions;
