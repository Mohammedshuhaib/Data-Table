import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from 'react-redux'

import './List.scss'
function List() {
    
    let datas = useSelector((state) => state.graphData)
    let filterd = useSelector((state) => state.filterd)
    console.log(filterd)
    let data = filterd ? filterd : datas.dataChart
  const columns = [
    { field: "S_no", headerName: "SL-No", width: 100 },
    { field: "acv", headerName: "Acv", width: 100 },
    { field: "line_of_business", headerName: "Line of business", width: 100 },
    { field: "month", headerName: "Month", width: 100 },
    { field: "product", headerName: "Product", width: 130 },
    { field: "revenue", headerName: "Revenue", width: 100 },
    { field: "revenue_type", headerName: "Revenue type", width: 150 },
    { field: "tcv", headerName: "Tcv", width: 100 },
    { field: "year", headerName: "Year", width: 100 },
    
  ];

  return (
    <div className="listContainer">
      <div style={{ height: 400, width: "80%" }}>
        {Array.isArray(data) && (
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            getRowId={(row) => row.S_no}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
}

export default List;
