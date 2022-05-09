import { App } from './app';

const bootstrap = async () => {
    const app: App = App.getInstance();

    app.Listen();
    app.RunApi();
}

bootstrap();