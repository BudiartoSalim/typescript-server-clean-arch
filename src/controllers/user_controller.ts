import IController from "../configs/interfaces/IController";
class UserController {
  static testEndpoint: IController = async (params, dependencies) => {
    try {
      return {
        httpStatus: 200,
        body: { params }
      }
    } catch (err) {
      throw err;
    }
  }
}

export default UserController;