import { mongoHelper } from '../../tests/infra/db/mongodb/helper/mongoHelper';
import app from './config/app';
import env from './config/env';

mongoHelper.connect(env.mongoUrlConnection)
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => console.log(`Server running at: http://localhost:${process.env.SERVER_PORT}`));
    })
    .catch(console.error);
