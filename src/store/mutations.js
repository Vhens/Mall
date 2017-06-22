import *as types from './mutation-type'

import * as storage from '../utils/storage'

export default {
    [types.SHOW_FOOT] (state){
        state.foot=true;
        storage.local.set(state)
    },
    [types.HIDE_FOOT] (state){
        state.foot=false;
        storage.local.set(state)
    }
}