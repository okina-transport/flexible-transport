import { Config } from './ConfigContext';
import { getEnvironment } from './getEnvironment';

interface ConfigProps {
  mode?: string;
  apiUrl?: string;
  authServerUrl?: string;
}

export const fetchConfig = async ({
  mode,
  apiUrl,
  authServerUrl,
}: ConfigProps): Promise<Config> => {
  const env = getEnvironment();
  const { default: config } = await import(`./environments/${env}.json`);

  const overrides: Config = {};

  if (mode === 'prod') {
    overrides.uttuApiUrl = apiUrl;
    overrides.authServerUrl = authServerUrl;
  }

  if (mode === 'dev') {
    if (process.env.REACT_APP_UTTU_API_URL) {
      overrides.uttuApiUrl = process.env.REACT_APP_UTTU_API_URL;
    }
    if (process.env.REACT_APP_AUTH_SERVER_URL) {
      overrides.authServerUrl = process.env.REACT_APP_AUTH_SERVER_URL;
    }
  }

  return Object.assign({}, config, overrides);
};
