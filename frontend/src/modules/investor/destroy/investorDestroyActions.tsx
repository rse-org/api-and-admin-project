import listActions from 'src/modules/investor/list/investorListActions';
import InvestorService from 'src/modules/investor/investorService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'INVESTOR_DESTROY';

const investorDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: investorDestroyActions.DESTROY_STARTED,
      });

      await InvestorService.destroyAll([id]);

      dispatch({
        type: investorDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.investor.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/investor');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: investorDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: investorDestroyActions.DESTROY_ALL_STARTED,
      });

      await InvestorService.destroyAll(ids);

      dispatch({
        type: investorDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.investor.destroyAll.success'),
      );

      getHistory().push('/investor');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: investorDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default investorDestroyActions;
