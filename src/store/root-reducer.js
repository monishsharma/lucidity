import { combineReducers } from "redux";
import InventoryReducer from "./inventory/reducer";

const rootReducer = combineReducers({
    inventory: InventoryReducer
});


export default rootReducer;
