import React from "react";
import ActionButton from "../components/actionButtons";



// This is the table constant/settings which will render table elements
export const constant = ({
    edit,
    deleteItem,
    location,
    disableItem
}) => {

    const isAdmin = () => location.pathname === "/admin";

    const editHandler = (selectedRow) => {
        edit(selectedRow)
    }

    const deleteHandler = (selectedRow) => {
        deleteItem(selectedRow)
    }

    const disableHandler = (selectedRow, isDisabled) => {
        disableItem(selectedRow ,isDisabled)
    }


  return [
    {
      title: "ID",
      render: (rowData) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      title: "Name",
      render: (rowData) => {
        return <span>{rowData.name}</span>;
      },
    },
    {
      title: "Category",
      render: (rowData) => {
        return <span>{rowData.category}</span>;
      },
    },
    {
      title: "Price",
      render: (rowData) => {
        return <span>{rowData.price}</span>;
      },
    },
    {
      title: "Quantity",
      render: (rowData) => {
        return <span>{rowData.quantity}</span>;
      },
    },
    {
      title: "Value",
      render: (rowData) => {
        return <span>{rowData.value}</span>;
      },
    },
    {
      title: "Action",
      render: (rowData) => {
        return (
          <React.Fragment>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <ActionButton
                        rowData={rowData}
                        isAdmin={isAdmin}
                        edit={editHandler}
                        disable={disableHandler}
                        delete={deleteHandler}
                    />
                </div>
          </React.Fragment>
        );
      },
    },
  ];
};
