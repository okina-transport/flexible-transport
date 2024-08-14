type MultilingualString = {
  lang: string;
  value: string;
};

type ContactDetails = {
  email: string;
  phone: string;
  url: string;
};

type KeyValue = {
  key: string;
  value: string;
};

type KeyList = {
  keyValue?: KeyValue[];
};

export type Company = {
  id: string;
  name: MultilingualString;
  legalName: MultilingualString;
  contactDetails: ContactDetails;
  keyList?: KeyList;
};

export const getAuthorities = (companies: Company[]) =>
  companies?.filter((comp) => comp.id?.includes(':Authority:'));

export const getOperators = (companies: Company[]) =>
  companies?.filter((comp) => comp.id?.includes(':Operator:'));
