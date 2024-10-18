import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const CustomTable = ({ cols = [], data }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cols.map((column, index) => (
                <TableCell align="center" key={`header_${column.title}_${index}`}>
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, rowIndex) => {
              return (
                <TableRow hover key={`rowData_${rowIndex}`} >
                  {cols.map((col, colIndex) => (
                    <TableCell  style={{background: item.isDisabled ? "grey" : "white"}} align="center" key={`colData_${rowIndex}_${colIndex}`}>
                      {col.render({ ...item, id: rowIndex + 1 })}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomTable;
