const { Usuarios } = require('../classes/usuarios');
const usuarios = new Usuarios();

module.exports = {
    start: function (io) {
        io.on("connect", (client) => {


            client.on("notif", (data) => {
                console.log(data)
                io.to(data.userid).emit('notif', data);
            })
            client.on("chat", (data) => {
                console.log(data)
                io.to(data.userid).emit('chat', data);
            })
            client.on("disconnect", () => {
                console.log("Usuario desconectado")
            })

            client.on("conectado", (data) => {
                client.join(data.userid);
                console.log(data)
                usuarios.agregarPersona(client.id, data.userid);



            })

        });
    }
}