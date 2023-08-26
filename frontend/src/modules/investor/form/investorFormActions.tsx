import InvestorService from 'src/modules/investor/investorService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'INVESTOR_FORM';

const investorFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: investorFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await InvestorService.find(id);
      }

      dispatch({
        type: investorFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: investorFormActions.INIT_ERROR,
      });

      getHistory().push('/investor');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: investorFormActions.CREATE_STARTED,
      });

      await InvestorService.create(values);

      dispatch({
        type: investorFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.investor.create.success'),
      );

      getHistory().push('/investor');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: investorFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: investorFormActions.UPDATE_STARTED,
      });

      await InvestorService.update(id, values);

      dispatch({
        type: investorFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.investor.update.success'),
      );

      getHistory().push('/investor');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: investorFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default investorFormActions;
