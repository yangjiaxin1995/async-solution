import runSaga from './runSaga';

const createSagaMiddleware = () => {
  let boundRunSaga;

  // redux-thunk logger promise
  function sagaMiddleware({ getState, dispatch }) {
    boundRunSaga = runSaga.bind(null, { getState, dispatch });

    return (next) => (action) => {
      let result = next(action);
      return result;
    };
  }

  sagaMiddleware.run = (...args) => boundRunSaga(...args);

  return sagaMiddleware;
};

export default createSagaMiddleware;
