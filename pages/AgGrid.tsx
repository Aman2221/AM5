import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { AgGridReact } from "ag-grid-react"; 
import "ag-grid-community/styles/ag-theme-alpine.css"; 
import "ag-grid-community/styles/ag-grid.css"; //
import 'ag-grid-enterprise';

const AgGrid = () => {

    // const gridRef = useRef(null); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
    const [columnDefs, setColumnDefs] = useState([
        { field: "make", filter: true },
        { field: "model", filter: true },
        { field: "price" },
        { field: "make" }
    ]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(() => ({
        sortable : true,
        enablePivot: true,
    }), []);

    // Example of consuming Grid Event
    const cellClickedListener = useCallback((event : any) => {
        console.log("cellClicked", event);
    }, []);

    // Example load data from sever
    useEffect(() => {
        fetch("https://www.ag-grid.com/example-assets/row-data.json")
        .then((result) => result.json())
        .then((rowData) => {
            setRowData(rowData);
            console.log("Data :",rowData); 
        });
    }, []);

    const gridRef:any = useRef(); 

    

    // Example using Grid's API
    const buttonListener = useCallback((e : any) => {
        if(gridRef && gridRef.current) {
            gridRef.current.api.deselectAll()
        }
    }, [gridRef]);


  return (
    <div className={styles.container}>
        <Head>
            <title>Ag Grid Example</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <button onClick={buttonListener}>Push Me</button>
        <div className="ag-theme-alpine" style={{ width: "100%", height: "100vh" }}>
            <AgGridReact
                ref={gridRef} // Ref for accessing Grid's API
                rowData={rowData} // Row Data for Rows
                columnDefs={columnDefs} // Column Defs for Columns
                defaultColDef={defaultColDef} // Default Column Properties
                animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                rowSelection="multiple" // Options - allows click selection of rows
                onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                sideBar={true}
            />
        </div>
      
    </div>
  )
}

export default AgGrid
