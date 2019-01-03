const { io } = require('../server')

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    // escuchar el Cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //asi solo retorna el mensaje a un solo cliente al que lo envia
        //client.emit('enviarMensaje', data);

        // asi se enviam a todos lo sque estan conectdos
        client.broadcast.emit('enviarMensaje', data);
        // console.log(data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL'
        //     });
        // }
    });
})