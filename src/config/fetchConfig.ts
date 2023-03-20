import { Config } from './ConfigContext';
import { getEnvironment } from './getEnvironment';

interface ConfigProps {
  mode?: string;
  apiUrl?: string;
}

export const fetchConfig = async ({
  mode,
  apiUrl,
}: ConfigProps): Promise<Config> => {
  const env = getEnvironment();
  const { default: config } = await import(`./environments/${env}.json`);

  const overrides: Config = {};

  if (mode === 'prod') {
    overrides.uttuApiUrl = apiUrl;
  }

  if (mode === 'dev' && process.env.REACT_APP_UTTU_API_URL) {
    overrides.uttuApiUrl = process.env.REACT_APP_UTTU_API_URL;
  }

  return Object.assign({}, config, overrides);
};
