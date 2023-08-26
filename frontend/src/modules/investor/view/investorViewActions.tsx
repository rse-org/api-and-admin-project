import InvestorService from 'src/modules/investor/investorService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'INVESTOR_VIEW';

const investorViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: investorViewActions.FIND_STARTED,
      });

      const record = await InvestorService.find(id);

      dispatch({
        type: investorViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: investorViewActions.FIND_ERROR,
      });

      getHistory().push('/investor');
    }
  },
};

export default investorViewActions;
