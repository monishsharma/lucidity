import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import User from "./component.js";
import { getInventoryData } from "../../store/inventory/action.js";

const mapStateToProps = ({
    inventory: {
        data
    }
}) => ({data});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getInventoryDataConnect: getInventoryData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);
