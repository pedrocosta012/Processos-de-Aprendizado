import { mongoHelper } from '../../tests/infra/db/mongodb/helper/mongoHelper';
import app from './config/app';
import 'dotenv/config';

mongoHelper.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`)
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => console.log(`Server running at: http://localhost:${process.env.SERVER_PORT}`));
    })
    .catch(console.error);
