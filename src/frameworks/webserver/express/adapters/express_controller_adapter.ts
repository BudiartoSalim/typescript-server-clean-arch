import IController from "../../../../configs/interfaces/IController";
import { INext, IRequest, IResponse } from "../interfaces";
import dependencies from '../../../../configs/dependencies';

function expressAdapter(controller: IController) {
  return async (req: IRequest, res: IResponse, next: INext) => {
    try {
      const response = await controller({
        headers: req.headers,
        queryParams: req.query,
        urlParams: req.params,
        body: req.body,
      },
        dependencies
      );
      res.status(response.httpStatus).json(response.body);
    } catch (err) {
      next(err);
    }
  }
}

export default expressAdapter;