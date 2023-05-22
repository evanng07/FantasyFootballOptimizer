import '../chart.css';
import Data from '../utils/Data.json'
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

const StatPage = () => {
    const data = useMemo(() => Data, []);
    const columns = useMemo(() => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Team",
        accessor: "team",
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "Number",
        accessor: "number",
      },
      {
        Header: "Proj. Fantasy Score",
        accessor: "fantasy_score",
      },
      

    ], [] );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    }, useSortBy);

    return (
        <div className="App">
          <div className='text-white text-3xl mt-8 font-bold' style={{ marginLeft: "500px"}}>
            Fantasy PPR Projections for the week
          </div>
          <div className='container'>
            
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (column.isSortedDesc ? '⬇' : '⬆') : ''}
                        </span>
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
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default StatPage;