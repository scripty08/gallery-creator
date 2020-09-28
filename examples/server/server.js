import { Server, IndexController } from '@scripty/server';
import dotenv from 'dotenv'

const init = async () => {
    dotenv.config();
    let server = new Server();
    await server.addController(new IndexController({ title: '@scripty/gallery-creator' }));
    server.start(3014);
};

init().catch((err) => {
    console.error(err.message);
});
