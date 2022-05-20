import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { padding } from "@mui/system";
import Button from "@mui/material/Button";

export default function C_Report() {
  const [cleaning, setCleaning] = useState([]);
  const getRequest = () => {
    axios.get("http://localhost:4000/cleaning").then((response) => {
      setCleaning(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [cleaning]);

  // const PDFExportComponent = useRef(null);
  // const pdfonclick = (e) => {
  //   PDFExportComponent.current.save();
  // };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {/* <Button primary={true} onClick={pdfonclick}>Browse</Button> */}
      <Button
        variant="outlined"
       // onClick={pdfonclick}
        style={{ padding: "5px 700px 5px 700px" }}
      >
        Export
      </Button>
      {/* <PDFExport ref={PDFExportComponent}> */}
        <div>
          <div
            className="row"
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >

          </div>
          <div style={{ textAlign: "center", background: "#b6b7b8" }}>
            <div style={{ paddingBottom: "100px" }}>
              <span style={{ fontSize: "70px" }}>
                <span style={{ fontWeight: "bold", color: "#03807b" }}>
                  Annual Report
                </span>
                <br />
                 Cleaning Company Report
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
             
            </div>
          </div>
        </div>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>
                  Company Name
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Location
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Number of Employees
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Contact Numeber
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Since
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Description
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Created At
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cleaning.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.CName}
                  </TableCell>
                  <TableCell align="right">{item.Location}</TableCell>
                  <TableCell align="right">{item.NOE}</TableCell>
                  <TableCell align="right">{item.CNumber}</TableCell>
                  <TableCell align="right">{item.Since}</TableCell>
                  <TableCell align="right">{item.Description}</TableCell>
                  <TableCell align="right">{item.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      {/* </PDFExport> */}
    </Paper>
  );
}
