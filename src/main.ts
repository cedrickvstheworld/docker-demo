import express, {
  Application,
  Request,
  Response,
  Router,
} from "express";
import morgan from "morgan"

class Main {
  private app: Application
  private port: string | number
  private router: Router

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.router = Router({mergeParams: true});
    this.appConfig();
  }

  public listen() {
    this.app.listen(this.port, (): void => { 
      console.log(`*** Server is listening on port ${this.port}`);
    });
  }

  private loadRouters() {
    const index = (request: Request, response: Response) => {
      response.status(200).json({msg: "hey y'all"});
    };
    this.app.use('', this.router.get('/', index)); 
  }

  private appConfig() {
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: false }));
    this.loadRouters();
  }
}

const main = new Main();
main.listen();
