import IController from "../configs/interfaces/IController";
class UserController {
  static testEndpoint: IController = async (req, dependencies) => {
    try {
      return {
        httpStatus: 200,
        body: { req }
      }
    } catch (err) {
      throw err;
    }
  }
}

export default UserController;