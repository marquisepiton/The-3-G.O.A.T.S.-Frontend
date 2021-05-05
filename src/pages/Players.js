import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/data.json";
import { columns } from "../data/data.js";
import { useTable } from "react-table";
import axios from "axios";
import "./Players.scss";

function Player() {
  // ================================ useState===================================================
  const [allPlayerRegStats, setAllPlayerRegStats] = useState([]);
  const [allPlayerPostStats, setAllPlayerPostStats] = useState([]);
  //================================ Axios calls ==============================================
  // Extract lebron's data
  const axiosGetAllPlayerRegStats = () => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/stats/regular-season-averages";

    axios.get(apiUrl).then(function (response) {
      setAllPlayerRegStats(response.data);
    });
  };
  const axiosGetAllPlayerPostStats = () => {
    const apiUrl =
      "";

    axios.get(apiUrl).then(function (response) {
      setAllPlayerRegStats(response.data);
    });
  };
  
  console.log(columns);
  const memoedColumns = React.useMemo(() => columns);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: memoedColumns, data: allPlayerRegStats });

  // ================================ useEffect==================================================
  useEffect(axiosGetAllPlayerRegStats, []);
  return (
    <div>
      <Nav />
      <Header data={Data.players} />
      <div className="Container">
        <div className="text-center">
          <div className="filter-bar">
            <li>All</li>
            <li>Lebron</li>
            <li>Kobe</li>
            <li>Micheal</li>
          </div>
        </div>
      </div>
      <table ClassName= "table" {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <button>{column.render("Header")}</button>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      )
      <Footer />
    </div>
  );
}

export default Player;
