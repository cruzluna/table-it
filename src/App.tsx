import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { Stuff: "Tesla", Description: "Model X" },
    { Stuff: "Tesla", Description: "Model Y" },
    { Stuff: "Tesla", Description: "Model Z" },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Stuff", editable: true, rowDrag: true },
    { field: "Description", editable: true },
  ]);

  // TODO: Input

  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowDragManaged={true}
      />
      <div>
        <input />
      </div>
    </div>
  );
}

export default App;
