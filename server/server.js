import Express from 'express';
import compression from 'compression';
import path from 'path';
import { json as bodyParserJson } from 'body-parser';
import { logger, ajaxLogger } from './middleware/logger';
import renderApp from './middleware/renderApp';
import serverConfig from './config';

const { port, version } = serverConfig;

logger.info(`App version: ${version || 'UNKNOWN'}.`);


const app = new Express();
app.use(compression());
app.use('/static', Express.static(path.join('.', 'static'), { fallthrough: false }));
app.use(bodyParserJson()); // This is required for jsnlog_nodejs
app.post('*.logger', ajaxLogger); // Handle client-side logs
app.use(renderApp);

app.listen(port, (error) => {
  if (error) {
    logger.error(error);
    return;
  }
  logger.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
