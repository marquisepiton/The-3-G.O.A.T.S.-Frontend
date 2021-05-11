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
  usePagination,
  useBlockLayout,
} from "react-table";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import axios from "axios";
import "./Stats.scss";
import Chart from "chart.js/auto";
import { render } from "@testing-library/react";

function Stats() {
  let player = ["All", "Lebron James", "Kobe Bryant", "Micheal Jordan"];

  // ================================ useState===================================================
  const [playerStats, setPlayerStats] = useState([]);
  const [stats, setStats] = useState([]);
  const [col, setCol] = useState("");
  const [showName, setShowName] = useState("");

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

  const currentTab = () => {};

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
        color: "white",
        backgroundColor: [
          "blue",
          "yellow",
          "red",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 3,
        
      },
    ],
  };

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return <input type="checkbox" ref={resolvedRef} {...rest} />;
    }
  );

  const memoedColumns = React.useMemo(() => columns);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    allColumns,
    getToggleHideAllColumnsProps,

    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: memoedColumns,
      data: playerStats,
    },
    useResizeColumns,
    // useFlexLayout,
    // useBlockLayout,
    usePagination
  );

  // ================================ useEffect==================================================
  useEffect(axiosGetAllPlayerRegStats, []);
  useEffect(axiosGetPlayerRegStats, []);

  return (
    <div>
      <Header data={Data.players} />
      <div className="row">
        <div className="col">
          <Bar data={data} width={100} height={50} style={{color:"white"}}/>
        </div>
        <div className="col">
          <Pie data={data} width={100} height={50} />
        </div>
        <div className="col">
          <Line data={data} width={100} height={50} />
        </div>
      </div>

      <div className="row">
        <div className="col"></div>

        <div className="col">
          <div className="text-center">
            <div className="filter-bar">
              <li value="1" onClick={() => handleStats("pts", "Total Points")}>
                Points
              </li>
              <li value="2" onClick={() => handleStats("reb", "Rebounds")}>
                Rebounds
              </li>
              <li value="2" onClick={() => handleStats("ast", "Assist")}>
                Assist
              </li>
              <li value="2" onClick={() => handleStats("blk", "Blocks")}>
                Blocks
              </li>
              <li value="2" onClick={() => handleStats("stl", "Steals")}>
                Steals
              </li>
              <li value="2" onClick={() => handleStats("pf", "Fouls")}>
                Fouls
              </li>
              <li value="2" onClick={() => handleStats("to", "Turnovers")}>
                Turnovers
              </li>
            </div>

            <div className="text-center">
              <div className="filter-bar">
                <li onClick={axiosGetAllPlayerRegStats}>
                  {" "}
                  <div className={currentTab}>All</div>
                </li>
                <li value="1" onClick={() => handleClick(1)}>
                  <div className={currentTab}>Lebron</div>
                </li>
                <li value="2" onClick={() => handleClick(2)}>
                  <div className={currentTab}>Kobe</div>
                </li>
                <li value="3" onClick={() => handleClick(3)}>
                  <div className={currentTab}>Micheal</div>
                </li>
              </div>
            </div>
          </div>

          <div>
            <div className="toggle">
              <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
              All
            </div>
            {allColumns.map((column) => (
              <div className="toggle" key={column.id}>
                <label>
                  <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
                  {column.id}
                </label>
              </div>
            ))}
            <br />
          </div>

          <div className="text-center"></div>

          <h2 onClick={handleClick}>{showName}</h2>
          
        
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
                          
                          border: "solid 5px gray",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
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
                            
                            "text-align": "center",
                            
                          
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
         
       
          <div className="filter-page">
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              | Go to page:{" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" ,
                         color: "black",
                }}
              />
            </span>{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
}

export default Stats;
