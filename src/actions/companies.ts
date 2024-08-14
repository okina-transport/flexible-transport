import { GlobalState } from 'reducers';
import { UttuQuery } from 'api';
import { getCompaniesQuery } from 'api/uttu/queries';
import { sentryCaptureException } from 'store';
import { CompanyState } from '../reducers/companies';

export const RECEIVE_COMPANIES = 'RECEIVE_COMPANIES';

export type ReceiveCompanies = {
  type: typeof RECEIVE_COMPANIES;
  companies: CompanyState;
};

export const receiveCompanies = (
  companies: CompanyState
): ReceiveCompanies => ({
  type: RECEIVE_COMPANIES,
  companies,
});

export const getCompanies =
  () =>
  async (
    dispatch: (receiveCompanies: ReceiveCompanies) => void,
    getState: () => GlobalState
  ) => {
    try {
      const activeProvider = getState().providers.active?.code ?? '';
      if (!activeProvider) {
        return;
      }
      const { companies } = await UttuQuery(
        getState().config.uttuApiUrl,
        activeProvider,
        getCompaniesQuery,
        {},
        await getState().auth.getAccessToken()
      );
      dispatch(receiveCompanies(companies));
    } catch (e) {
      sentryCaptureException(e);
    }
  };
