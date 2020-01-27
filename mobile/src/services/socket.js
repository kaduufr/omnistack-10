import socketio from 'socket.io-client'

const socket = socketio('http://192.168.1.106:3333',{
    autoConnect: false
})

function connect(latitude, longitude, techs) {

    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }

    socket.connect()
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

function subscriveToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction)
}

export {
    connect,
    disconnect,
    subscriveToNewDevs
 }