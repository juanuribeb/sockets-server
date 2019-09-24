import Server from './clases/server';
import router from './clases/routes/router';
import bodyParser from 'body-parser';

const server = new  Server();

//bodyParser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use( bodyParser.json());

server.app.use( '/', router)


server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ server.port}`);
});