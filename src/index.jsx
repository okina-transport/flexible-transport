import React from 'react';
import { render } from 'react-dom';

import './styles/index.scss';
import Keycloak from 'keycloak-js';
import { fetchConfig } from 'config/fetchConfig';
import { ConfigContext } from 'config/ConfigContext';
import { AuthContext } from 'config/AuthContext';
import Main from './Main';

const node = document.getElementById('root');
const props = node.dataset.react
  ? JSON.parse(node.dataset.react)
  : { mode: 'dev' };

const renderIndex = async (kc, config) => {
  render(
    <AuthContext.Provider value={kc}>
      <ConfigContext.Provider value={config}>
        <Main keycloak={kc} />
      </ConfigContext.Provider>
    </AuthContext.Provider>,
    node
  );
};

async function init(props) {
  const config = await fetchConfig(props);

  const keycloakConfig = {
    realm: 'Mobi-iti',
    url: config.authServerUrl,
    clientId: 'neti-frontend',
  };

  let kc = new Keycloak(keycloakConfig);
  kc.init({ onLoad: 'login-required', checkLoginIframe: false }).then(
    async (authenticated) => {
      if (authenticated) {
        const roles = kc.tokenParsed.roles.map((r) => JSON.parse(r).r);
        const userInfo = await kc.loadUserInfo();
        //console.log(userInfo);
        console.log(roles); // ['adminEditRouteData', 'editStops', 'deleteStops']
        kc = {
          ...kc,
          getAccessToken: function () {
            return kc.token;
          },
          isAuthenticated: authenticated,
          isLoading: false,
          roleAssignments: roles,
          user: { name: userInfo.preferred_username },
        };
        renderIndex(kc, config);
      }
    }
  );
}

init(props);
