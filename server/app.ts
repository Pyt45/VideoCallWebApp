import express, { Application, Request, Response } from "express";


export class App {
    private static app: App;
    private serverApp: Application;

    private constructor() {
        this.serverApp = express();
    }
    public static getInstance(): App {
        if (!App.app)
            App.app = new App();
        return App.app;
    }
    public Listen() {
        this.serverApp.listen(8080);
    }

    public RunApi() {
        this.serverApp.get('/', (req: Request, res: Response) => {
            res.send("Hello")
        });
    }
}