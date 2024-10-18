import React, { useState } from "react";
import PageLoader from "../../components/page-loader";
import CustomTable from "../../components/table";
import { InventoryConstant } from "../../tableConstants";
import Modal from "../../components/modal";
import { Box, DialogContentText, TextField } from "@mui/material";
import { EDITABLE_ITEMS } from "./constant";
import { useLocation } from 'react-router-dom';
import WidgetContainer from "../../components/widgetContainer";

const Admin = ({ data, getInventoryDataConnect, setDataConnect }) => {

  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [editableItem, setEditableItem] = useState(data || []);
  const [isOpen, setIsOpen] = useState(false);
  const [actionRowData, setActionRowData] = useState(null);

  React.useEffect(() => {
    if (!data.length) {
      setIsLoading(true);
      getInventoryDataConnect()
        .then((res) => {
          setEditableItem(res);
          setIsLoading(false);
        })
        .catch(() => {
          setEditableItem([]);
          setIsLoading(false);
        });
    }
  }, []);

  React.useEffect(() => {
    setDataConnect(editableItem);
  }, [editableItem]);

  const updateSelectedOption = (selectedRow) => {
    setActionRowData({
        ...selectedRow,
      });
  }

  const edit = (selectedRow) => {
    updateSelectedOption(selectedRow);
    setIsOpen(true);
  };

  const onChange = ({target}, key) => {
    setActionRowData({
        ...actionRowData,
        [key]: target.value
    });
  }

  const onSubmit= () => {
    setEditableItem((prevItems) =>
        prevItems.map((item) => (item.hashId === actionRowData.hashId ? actionRowData : item))
    );
    setIsOpen(false);
  }

  const deleteItem = (selectedRow) => {
    updateSelectedOption(selectedRow)
    setEditableItem((prevItems) =>
        prevItems.filter(item => item.hashId !== selectedRow.hashId)
    );
  }

  const disableItem = (selectedRow, isDisabled) => {
    updateSelectedOption(selectedRow)
    console.log(editableItem)
    setEditableItem((prevItems) =>
        prevItems.map((item) => (item.hashId === selectedRow.hashId ? {
            ...selectedRow,
            isDisabled
        } : item))
    );
  }

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <h1>Admin</h1>
      <Modal
        open={isOpen}
        title={"Edit Product"}
        onSubmit={onSubmit}
        onClose={() => setIsOpen(false)}
      >
        <DialogContentText>{actionRowData?.name}</DialogContentText>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ padding: 2 }}
        >
          {
            EDITABLE_ITEMS.reduce((rows, item, index) => {
                // Create a new row every two fields
                if (index % 2 === 0) rows.push([]);
                rows[rows.length - 1].push(item);
                return rows;
            }, []).map((row, rowIndex) => (
                <Box key={`row_${rowIndex}`} display="flex" gap={2}>
                {
                    row.map((item, colIndex) => (
                        <TextField
                            key={`field_${rowIndex}_${colIndex}`}
                            fullWidth
                            onChange={(e) => onChange(e, item.key)}
                            label={item.itemName}
                            variant="outlined"
                            value={actionRowData?.[item.key]}
                            InputLabelProps={{
                                shrink: true // Ensures label does not overlap
                            }}
                        />
                    ))
                }
                </Box>
            ))
          }
        </Box>
      </Modal>

        <WidgetContainer
            inventoryData={editableItem}
        />
        <CustomTable cols={InventoryConstant({ edit, deleteItem, location, disableItem })} data={editableItem} />
    </div>
  );
};

export default Admin;
