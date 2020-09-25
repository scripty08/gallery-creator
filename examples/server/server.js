import { Server, IndexController } from '@scripty/server';
import BoardController from '@scripty/board';
import dotenv from 'dotenv'
import { mongo } from '@scripty/mongo';

const init = async () => {
    dotenv.config();

    let server = new Server();

    const mongoConfig = {
        server: "mongo.garic.biz",
        db: "cms",
        user: "cms",
        password: ".Konace3m",
        port: 27017,
        options: {
            "encrypt": true
        }
    }

    //await server.addController(new BoardController());
    await server.addController(new IndexController({ title: '@scripty/react-board' }));

    //const mongoose = await mongo(mongoConfig);
    //await server.setDatabase(mongoose);
    server.start(3014);
};

init().catch((err) => {
    console.error(err.message);
});
