import * as constans from './constans';

export const add = (info) => {
    return {
        type: constans.ADD_COUNTER,
        info: info
    }
}

export const del = (info) => {
    return {
        type: constans.DEL_COUNTER,
        info: info
    }
}