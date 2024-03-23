var globalSocket : any = null;

const setGlobalToken = (socketIO: any) => {
  globalSocket = socketIO
};

export {
    globalSocket
}
export default setGlobalToken;
