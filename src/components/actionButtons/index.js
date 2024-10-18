import { IconButton } from '@mui/material'
import React, { useState } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const ActionButton = ({
    isAdmin,
    rowData,
    edit,
    delete: deleteHandler,
    disable
}) => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const disableHandler = () => {
        setToggleIcon(!toggleIcon);
        disable(rowData, !toggleIcon);
    }

    const ICON_CONSTANT = [
        {
            icon: EditIcon,
            onClick: edit,
            color: "primary",
            canDisable: true
        },
        {
            icon: toggleIcon ? VisibilityOffIcon : VisibilityIcon,
            onClick: disableHandler,
            color: "primary",
            canDisable: isAdmin() ? false : true
        },
        {
            icon: DeleteIcon,
            onClick: deleteHandler,
            color: "secondary",
            canDisable: true
        },
    ]

    const getDisabledState = (icon) => {
        return icon.canDisable ? !isAdmin() || rowData.isDisabled : false;
    }

    return (
        <React.Fragment>
            {
                ICON_CONSTANT.map((icon, idx) => (
                    <IconButton key={idx} color={icon.color} onClick={() => icon.onClick(rowData)} disabled={getDisabledState(icon)}>
                        <icon.icon />
                    </IconButton>
                ))
            }
        </React.Fragment>
    )
}

export default ActionButton