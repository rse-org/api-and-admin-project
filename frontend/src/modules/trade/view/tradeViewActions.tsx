import TradeService from 'src/modules/trade/tradeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TRADE_VIEW';

const tradeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tradeViewActions.FIND_STARTED,
      });

      const record = await TradeService.find(id);

      dispatch({
        type: tradeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tradeViewActions.FIND_ERROR,
      });

      getHistory().push('/trade');
    }
  },
};

export default tradeViewActions;
