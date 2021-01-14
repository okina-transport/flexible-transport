import { KeycloakTokenParsed } from 'keycloak-js';

export const getFlexibleOrgsForUser = (
  token: KeycloakTokenParsed | undefined
): string[] =>
  token?.roles
    ?.map((role) => JSON.parse(role))
    .filter((role) => role.r === 'editFlexibleTransport')
    .map((role) => role.o as string) ?? [];
