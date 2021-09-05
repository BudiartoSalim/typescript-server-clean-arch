import IDependencies from './IDependencies';
interface IController {
  (params: IParams, dependencies: IDependencies): Promise<IControllerResponse>;
}

//might refactor later after response structure is well defined.
interface IControllerResponse {
  httpStatus: number;
  body: any;
  error?: any;
}

interface IParams {
  ['queryParams']: any, ['urlParams']: any
}

export default IController;