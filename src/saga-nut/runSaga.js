import proc from './proc';

const runSaga = ({ channel, getState, dispatch }, saga, ...args) => {
  const iterator = saga(...args);
  proc({ channel, getState, dispatch }, iterator);
};

export default runSaga;
