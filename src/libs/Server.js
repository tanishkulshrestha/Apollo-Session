import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Express from 'express';
import helmet from 'helmet';
import { ApolloServer } from 'apollo-server-express';
import { errorHandlerRoute, notFoundRoute } from './routes';

export default class Server {
    constructor(config) {
    this.config = config;
    this.app = new Express();
    this.run = this.run.bind(this);
  }

  get application() {
    return this.app;
  }

  /**
   * To enable all the setting on our express app
   * @returns -Instance of Current Object
   */
  bootstrap() {
    this.initHelmet();
    this.initCompress();
    this.initCookieParser();
    this.initCors();
    this.initJsonParser();
    return this;
  }

  /**
   * This will run the server at specified port after opening up of Database
   *
   * @returns -Instance of Current Object
   */
  run() {
    const { port, env } = this.config;
    const serverr = this.app.listen(port, () => {
        console.info(`server started on port ${port} (${env})`); // eslint-disable-line no-console
    });
      this.server.installSubscriptionHandlers(serverr);
    return this;
  }

  async setupApollo(data) {
    const { app } = this;
    this.server = new ApolloServer(data);
    this.server.applyMiddleware({ app });
    this.run();
  }

  /**
   * This will Setup all the routes in the system
   *
   * @returns -Instance of Current Object
   * @memberof Server
   */
  setupRoutes() {
    this.app.use('/health-check', (req, res) => {
      res.send('I am OK');
    });

    // catch 404 and forward to error handler
    this.app.use(notFoundRoute);

    // error handler, send stacktrace only during development
    this.app.use(errorHandlerRoute);
  }

  /**
   * Compression of the output
   */
  initCompress() {
    this.app.use(compress());
  }

  /**
   * Parse Cookie header and populate req.cookies with an object keyed by the cookie names
   */
  initCookieParser() {
    this.app.use(cookieParser());
  }

  /**
   *
   * Lets you to enable cors
   */

  initCors() {
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

    this.app.use(cors(corsOptions));
  }

  /**
   *
   * Helmet helps you secure your Express apps by setting various HTTP headers.
   */
  initHelmet() {
    this.app.use(helmet());
  }

  /**
   *  - Parses urlencoded bodies & JSON
   */
  initJsonParser() {
    this.app.use(bodyParser.json({
      limit: '50mb',
    }));
    this.app.use(bodyParser.urlencoded({
      extended: true,
      limit: '50mb',
      parameterLimit: 100000,
    }));
  }
}
