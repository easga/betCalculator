const isClient = (typeof window !== 'undefined');
const envVariables = isClient ? window.__ENV__ : process.env;
export default {
  logLevel: envVariables.LOG_LEVEL,
};
