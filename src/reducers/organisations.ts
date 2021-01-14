import {
  RECEIVE_ORGANISATIONS,
  ReceiveOrganisations,
} from 'actions/organisations';
import { ORGANISATION_TYPE } from 'model/enums';
import Provider from 'model/Provider';

type ContactInfo = {
  url: string;
  email: string;
  phone: string;
};

export type OrganisationState = Organisation[] | null;

export type Organisation = {
  id: string;
  name: string;
  privateCode: string;
  legalName: string | null;
  types: ORGANISATION_TYPE[];
  contact: ContactInfo | null;
  customerContact: ContactInfo | null;
  logo: string | null;
  version: number;
};

const organisationsReducer = (
  state: OrganisationState = null,
  action: ReceiveOrganisations
) => {
  switch (action.type) {
    case RECEIVE_ORGANISATIONS:
      return action.organisations;

    default:
      return state;
  }
};

export const filterAuthorities = (
  organisations: Organisation[],
  activeProvider: Provider | null
) =>
  organisations.filter(
    (org) => org.privateCode === activeProvider?.codespace?.xmlns
  );

export const filterNetexOperators = (
  organisations: Organisation[],
  activeProvider: Provider | null
) =>
  organisations.filter(
    (org) => org.privateCode === activeProvider?.codespace?.xmlns
  );

export default organisationsReducer;
