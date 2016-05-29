import commonConfig from '../common/config';

const { env } = process;
const config = {
  ...commonConfig,
  port: env.VGW_PORT || env.npm_package_config_port
};

export default config;
