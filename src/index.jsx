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

const renderIndex = async (kc) => {
  const config = await fetchConfig(props);

  render(
    <AuthContext.Provider value={kc}>
      <ConfigContext.Provider value={config}>
        <Main keycloak={kc} />
      </ConfigContext.Provider>
    </AuthContext.Provider>,
    node
  );
};

const config = require('./config/keycloak.json');

//if (process.env.REACT_APP_UTTU_API_URL) {
//  config.uttuApiUrl = process.env.REACT_APP_UTTU_API_URL;
//}

let kc = new Keycloak(config);
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
      renderIndex(kc);
    }
  }
);
