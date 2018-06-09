// import Vue from 'vue'

const getters = {
  getSocketDataSent: state => state.socket.tx,
  getSocketDataReceived: state => state.socket.rx
}

export default getters
