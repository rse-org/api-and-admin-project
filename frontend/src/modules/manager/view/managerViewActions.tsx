import ManagerService from 'src/modules/manager/managerService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MANAGER_VIEW';

const managerViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: managerViewActions.FIND_STARTED,
      });

      const record = await ManagerService.find(id);

      dispatch({
        type: managerViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: managerViewActions.FIND_ERROR,
      });

      getHistory().push('/manager');
    }
  },
};

export default managerViewActions;
