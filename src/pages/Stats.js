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
import { Bar, Line, Pie, Doughnut,} from "react-chartjs-2";
import axios from "axios";
import "./Stats.scss";
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



  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return <input type="checkbox" ref={resolvedRef} {...rest} />
    }
  )

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
    data: playerStats 
  },
  useResizeColumns,
  // useFlexLayout,
  // useBlockLayout,
  usePagination,
  );
  


  // ================================ useEffect==================================================
  useEffect(axiosGetAllPlayerRegStats, []);
  useEffect(axiosGetPlayerRegStats, []);
  //useEffect(axiosGetStatTotal, []);

  return (
    <div>
     
      <Header data={Data.players} />


      <div class="container">
  <div class="row">
    <div class="col">
    <Bar data={data} width={100} height={50} />
    </div>
    <div class="col">
    <Pie data={data} width={100} height={50} />
    </div>
    <div class="col">
    <Line data={data} width={100} height={50} />
    </div>
  </div>
</div>


<div class="container">
  <div class="row">
    <div class="col">
    
    </div>
    <div class="col">
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

      <div>
        <div className='toggle'>
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle
          All
        </div>
        {allColumns.map(column => (
          <div   className='toggle'  key={column.id}>
            <label>
              <input  type="checkbox" {...column.getToggleHiddenProps()} />{' '}
              {column.id}
            </label>
          </div>
        ))}
        <br />
      </div>
      <p>Click on stats to render information into the chart</p>
      <table ClassName="table-board" {...getTableProps()}>

        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                const accessor = columns.find((c) => c.Header === column.Header)
                  .accessor;
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
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div class="col">
      
    </div>
  </div>
</div>

      
      
      
      
      {/* Be able to filter between players */}
    
    </div>
  );
}

export default Stats;
