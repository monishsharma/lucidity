import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Admin from "./component.js";
import { getInventoryData,setData} from "../../store/inventory/action.js";

const mapStateToProps = ({
    inventory: {
        data
    }
}) => ({data});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getInventoryDataConnect: getInventoryData,
    setDataConnect: setData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
