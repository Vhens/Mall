import * as types from './mutation-type'

export default{
    showFoot:({commit,state})=>{
        commit(types.SHOW_FOOT)
    },
    hideFoot:({commit,state})=>{
        commit(types.HIDE_FOOT)
    }
}