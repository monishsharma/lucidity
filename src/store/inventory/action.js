import { commonService } from "../../services";
import  Types from './actionTypes';


export const setData = (data) => ({
    type: Types.SET_INVENTORY_DATA,
    data
});



export const getInventoryData = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        commonService.getInventoryData()
        .then((res) => {
            const dataWithUniqueId = res.data.map((item, index) => ({
                ...item,
                isDisabled: false,
                hashId: item.id || `item-${index}-${Date.now()}`
            }));
            dispatch(setData(dataWithUniqueId));
            resolve(dataWithUniqueId);
        })
        .catch((err) => {
            reject(err);
        })
    })
}
