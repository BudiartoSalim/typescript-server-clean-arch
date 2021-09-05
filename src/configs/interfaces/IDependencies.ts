import IRepository from './IRepository';
interface IDependencies {
  userRepository: IRepository;
  todoRepository: IRepository;
}


export default IDependencies;