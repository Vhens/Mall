import * as storage from '../utils/storage'

const curLocal = storage.local.get()

export default{
    foot:curLocal ? curLocal.foot : true
}