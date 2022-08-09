import proc from './proc';

const runSaga = ({ getState, dispatch }, saga, ...args) => {
  const iterator = saga(...args);
  proc({ getState, dispatch }, iterator);
};

export default runSaga;
