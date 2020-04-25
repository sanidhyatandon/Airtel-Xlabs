const MOCK_SERVICE = 'http://localhost:3004';

const defaultValues = {
  retry: 0,
  interval: 0,
  timeout: 2000
};

const localConfig = {
  // Current User
  getFoodList: {
    ...defaultValues,
    url: `${MOCK_SERVICE}/dishes`
  }
};

const config = localConfig;
export default config;
