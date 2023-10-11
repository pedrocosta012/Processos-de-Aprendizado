import { mongoHelper } from '../infra/db/helper/mongoHelper';
import app from './config/app';
import env from './config/env';

mongoHelper.connect(env.mongoUrlConnection)
    .then(() => {
        app.listen(env.serverPort, () => console.log(`Server running at: http://localhost:${env.serverPort}`));
    })
    .catch(console.error);
