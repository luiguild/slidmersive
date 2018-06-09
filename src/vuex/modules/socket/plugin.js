import io from 'socket.io-client'

const mirrorX = ({
  host,
  rx,
  tx
}) => {
  const socket = io(host)

  return store => {
    rx.forEach(elm =>
      socket.on(elm.event, data =>
        store.commit(elm.mutation, data)
      )
    )

    store.subscribe(mutation => {
      tx.forEach(elm => {
        if (mutation.type === elm.mutation) {
          return socket.emit(elm.event, mutation.payload)
        }
      })
    })
  }
}

export default mirrorX
