import * as constans from './constans';

const defaultValue = {
    'first': 0,
    'second': 10,
    'third': 20
}

export default (state = defaultValue, action) => {
    const { info } = action;
    
    switch (action.type) {
        case constans.ADD_COUNTER:
            return {...state, [info]: state[info] + 1 };
        case constans.DEL_COUNTER:
            return {...state, [info]: state[info] - 1 };
        default :
            return state;
    }
}