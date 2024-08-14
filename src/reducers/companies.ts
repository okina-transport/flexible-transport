import { RECEIVE_COMPANIES, ReceiveCompanies } from '../actions/companies';
import { Company } from '../model/Company';

export type CompanyState = Company[] | null;

const companyReducer = (
  state: CompanyState = null,
  action: ReceiveCompanies
) => {
  switch (action.type) {
    case RECEIVE_COMPANIES:
      return action.companies;

    default:
      return state;
  }
};

export default companyReducer;
