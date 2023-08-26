import RewardService from 'src/modules/reward/rewardService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REWARD_VIEW';

const rewardViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: rewardViewActions.FIND_STARTED,
      });

      const record = await RewardService.find(id);

      dispatch({
        type: rewardViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: rewardViewActions.FIND_ERROR,
      });

      getHistory().push('/reward');
    }
  },
};

export default rewardViewActions;
