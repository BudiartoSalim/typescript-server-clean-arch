import IDependencies from './IDependencies';
interface IController {
  (payloads: IPayload, dependencies: IDependencies): Promise<IControllerResponse>;
}

//might refactor later after response structure is well defined.
interface IControllerResponse {
  httpStatus: number;
  body: any;
  error?: any;
}

interface IPayload {
  ['queryParams']?: any,
  ['urlParams']: any,
  ['body']: any,
  ['headers']: any
}

export default IController;