import { getFlexibleOrgsForUser } from './tokenParser';

describe('tokenParser.getFlexibleOrgsForUser', () => {
  it('should return ORG name when the token grants access for this org', () => {
    expect(
      getFlexibleOrgsForUser({
        roles: [
          '{"r":"editFlexibleTransport","o":"TUT"}',
          '{"r":"editRouteData","o":"POU"}',
        ],
      })
    ).toStrictEqual(['TUT']);
  });

  it('should return empty array when user hasnt any flexible access', () => {
    expect(getFlexibleOrgsForUser(undefined)).toStrictEqual([]);
    expect(getFlexibleOrgsForUser({ roles: undefined })).toStrictEqual([]);
    expect(getFlexibleOrgsForUser({ roles: [] })).toStrictEqual([]);
    expect(
      getFlexibleOrgsForUser({
        roles: [
          '{"r":"someOtherGrant","o":"TUT"}',
          '{"r":"editRouteData","o":"POU"}',
        ],
      })
    ).toStrictEqual([]);
  });
});
