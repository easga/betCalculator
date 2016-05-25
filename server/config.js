import commonConfig from '../common/config';

const { env } = process;
const config = {
  ...commonConfig,
  port: env.VGW_PORT || env.npm_package_config_port,
  aws_access_key: env.AWS_ACCESS_KEY || '',
  aws_secret_key: env.AWS_SECRET_KEY || ''
};

export default config;
