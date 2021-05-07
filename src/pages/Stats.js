import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/data.json";
import { columns } from "../data/data.js";
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
  useBlockLayout,
} from "react-table";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";
import "./Players.scss";
import Chart from "chart.js/auto";
import { render } from "@testing-library/react";

function Stats() {
  // ================================ useState===================================================
  const [playerStats, setPlayerStats] = useState([]);
  const [stats, setStats] = useState([]);
  const [col, setCol] = useState("");

  //================================ Axios calls ==============================================
  // Extract lebron's data
  const axiosGetAllPlayerRegStats = () => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/stats/regularseasontotals";
    axios.get(apiUrl).then(function (response) {
      setPlayerStats(response.data);
    });
  };
  const handleClick = (id) => {
    {
      axiosGetPlayerRegStats(id);
    }
  };

  const axiosGetPlayerRegStats = (id) => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/stats/regular/" + id;
    axios.get(apiUrl).then(function (response) {
      setPlayerStats(response.data);
    });
  };

  const axiosGetStatTotal = (column) => {
    const apiUrl =
      "https://goat-pitonmarquise819185.codeanyapp.com/api/stats/player/regular/" +
      column;
    axios.get(apiUrl).then(function (response) {
      setStats((previousStats) => {
        let arr = [];
        for (let item of response.data) {
          arr.push(Object.values(item)[0]);
        }
        console.log(arr);
        return arr;
      });
    });
  };

  const handleStats = (acc, col) => {
    axiosGetStatTotal(acc);
    setCol(col.Header);
  };
  const data = {
    labels: ["Lebron James", "Kobe Bryant", "Micheal Jordan"],
    datasets: [
      {
        label: col,
        data: stats,
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const memoedColumns = React.useMemo(() => columns);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    useResizeColumns,
    rows,
    prepareRow,
  } = useTable({ columns: memoedColumns, data: playerStats });

  // ================================ useEffect==================================================
  useEffect(axiosGetAllPlayerRegStats, []);
  useEffect(axiosGetPlayerRegStats, []);
  //useEffect(axiosGetStatTotal, []);

  return (
    <div>
      
        <Nav />
        <Header data={Data.players} />

        <Bar data={data} width={100} height={50} />

        <div className="text-center">
          <div className="filter-bar">
            <li onClick={axiosGetAllPlayerRegStats}>All</li>
            <li value="1" onClick={() => handleClick(1)}>
              Lebron
            </li>
            <li value="2" onClick={() => handleClick(2)}>
              Kobe
            </li>
            <li value="2" onClick={() => handleClick(3)}>
              Micheal
            </li>
          </div>
        </div>
        <table ClassName="table-board" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  const accessor = columns.find(
                    (c) => c.Header === column.Header
                  ).accessor;
                  return (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: "solid 3px red",
                        background: "aliceblue",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      <button onClick={() => handleStats(accessor, column)}>
                        {column.render("Header")}
                      </button>
                    </th>
                  );
                })}
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
      </div>
   
  );
}

export default Stats;
