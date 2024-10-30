import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return (): Promise<boolean> =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'oauth2',
        clientId: 'oauth2'
      },
      initOptions: {
        onLoad: 'login-required',
      },
    });
}