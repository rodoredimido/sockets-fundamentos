var socket = io();
socket.on('connect', function() {

    console.log('Conectado con el servidor');

});
// escuchar 
socket.on('disconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});

// emitir informacion o enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Rodolfo',
    mensaje: 'Hola Rodolfo'
}, function(mensaje) {
    console.log('Respuesta Server: ', mensaje);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})