import listActions from 'src/modules/reward/list/rewardListActions';
import RewardService from 'src/modules/reward/rewardService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'REWARD_DESTROY';

const rewardDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: rewardDestroyActions.DESTROY_STARTED,
      });

      await RewardService.destroyAll([id]);

      dispatch({
        type: rewardDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.reward.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/reward');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: rewardDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: rewardDestroyActions.DESTROY_ALL_STARTED,
      });

      await RewardService.destroyAll(ids);

      dispatch({
        type: rewardDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.reward.destroyAll.success'),
      );

      getHistory().push('/reward');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: rewardDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default rewardDestroyActions;
