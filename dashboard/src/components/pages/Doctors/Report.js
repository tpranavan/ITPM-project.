import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
// import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useRef } from "react";
import Button from "@mui/material/Button";

export default function Report() {
  const [doctors, setDoctors] = useState([]);

  const getRequest = () => {
    axios.get("http://localhost:4000/doctors").then((response) => {
      console.log(response.data);
      setDoctors(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [doctors]);

  const PDFExportComponent = useRef(null);
  const pdfonclick = (e) => {
    PDFExportComponent.current.save();
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Button
        variant="outlined"
        onClick={pdfonclick}
        style={{ padding: "5px 700px 5px 700px" }}
      >
        Export
      </Button>
      <PDFExport ref={PDFExportComponent}>
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
            <div className="column" style={{ float: "left", width: "50%" }}>
              <img src="/images/logo.png" width="40%" />
            </div>
            <div
              className="column"
              style={{ float: "left", width: "50%", textAlign: "right" }}
            >
              <span>info@Healistry.com</span>
              <br />
              <span style={{ color: "#4ad7d1" }}>WWW.Healistry.com</span>
              <br />
              <span>011 1111 543</span>
            </div>
          </div>
          <div style={{ textAlign: "center", background: "#b6b7b8" }}>
            <div style={{ paddingBottom: "100px" }}>
              <span style={{ fontSize: "70px" }}>
                <span style={{ fontWeight: "bold", color: "#03807b" }}>
                  Annual Report
                </span>
                <br />
                Healistry Doctors Report
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <center>
                <img src="/images/report.png" width="50%" />
              </center>
            </div>
          </div>
        </div>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Full Name</TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Specialization
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  SLMC
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Experience
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Gender
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Current Position
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Working Hospital
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Working History
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "bold" }}>
                  Created At
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.DName}
                  </TableCell>
                  <TableCell align="right">{item.Speci}</TableCell>
                  <TableCell align="right">{item.SLNC}</TableCell>
                  <TableCell align="right">{item.Exper}</TableCell>
                  <TableCell align="right">{item.Gender}</TableCell>
                  <TableCell align="right">{item.CPosistion}</TableCell>
                  <TableCell align="right">{item.WHospital}</TableCell>
                  <TableCell align="right">{item.WHistory}</TableCell>
                  <TableCell align="right">{item.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PDFExport>
    </Paper>
  );
}
