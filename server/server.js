import Express from 'express';
import compression from 'compression';
import path from 'path';
import { json as bodyParserJson } from 'body-parser';
import { logger, ajaxLogger } from './middleware/logger';
import renderApp from './middleware/renderApp';
import serverConfig from './config';

const { port } = serverConfig;

const app = new Express();
app.use(compression());
app.use('/static', Express.static(path.join('.', 'static'), { fallthrough: false }));
app.use(bodyParserJson());
app.post('*.logger', ajaxLogger);
app.use(renderApp);

app.listen(port, (error) => {
  if (error) {
    logger.error(error);
    return;
  }
  logger.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
});
