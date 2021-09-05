import expressApp from "./frameworks/webserver/express/app";
if (process.env.NODE_ENV !== 'production') { require('dotenv').config() };

class Server {
  static start(PORT: number) {
    expressApp.listen(PORT, () => {
      console.log(`App is running at port ${PORT}`);
    })
  }

  static webServer() {
    return expressApp;
  }
}
export default Server;