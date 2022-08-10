import { MATCH } from './symbol';

const stdChannel = () => {
  const currentTakers = [];

  function take(cb, matcher) {
    cb[MATCH] = matcher;
    currentTakers.push(cb);
  }

  // action
  function put(input) {
    const takers = currentTakers;
    for (let i = 0, len = takers.length; i < len; i++) {
      const taker = takers[i];
      if (taker[MATCH](input)) {
        taker(input);
      }
    }
  }

  return { take, put };
};

export { stdChannel };
