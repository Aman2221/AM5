import React, { useMemo,  useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { API } from '../interfaces/data';

const GridTest = ({data} : { data : API[] | undefined}) => {
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [columnDefs, setColumnDefs] = useState([
    { field: 'bussinessDescription', filter: 'agTextColumnFilter', minWidth: 180 },
    { field: 'bussinessName' ,minWidth: 10},
    { field: 'id', minWidth: 150 },
    { field: 'industry' },
    { field: 'location' },
  ]);

  //all the customizations for the grid
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      // allow every column to be aggregated
      enableValue: true,
      // allow every column to be grouped
      enableRowGroup: true,
      // allow every column to be pivoted
      enablePivot: true,
      sortable: true,
      filter: true,
    };
  }, []);
    
  console.log(data,"Pivot Table")

  return (
    <div style={{ width: '100%', height: '100vh'}}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          sideBar={true}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default GridTest;