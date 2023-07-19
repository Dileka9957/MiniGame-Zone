import React from "react";
import MaterialTable from 'material-table'
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import {useState, useEffect } from 'react';
import { getUserAction , postUserAction , deleteUserAction ,updateUserAction } from "store/actions/user.action";


function UserTable(){


  const [tableData, setTableData] = useState([]);
  const [ tableColumns,setTableColumns] =useState();
  const [deletedColumn, setDeletedData] = useState();
  const [updatedColumn, setUpdatedData] = useState();


  const columns = [

      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'User Points', field: 'points' }
      
  ];

useEffect(()=>{
  getUserAction().then((data) => {
  setTableData(data);
});
},[])

useEffect(()=>{
  if(tableColumns){
    postUserAction(tableColumns.name,tableColumns.email,tableColumns.points)
  }
},[tableColumns])

useEffect(()=>{
  if(deletedColumn){
    deleteUserAction(deletedColumn._id)
 }
},[deletedColumn])

useEffect(()=>{
  
  if(updatedColumn){
    //console.log(updatedColumn._id)
    updateUserAction(updatedColumn._id,updatedColumn.name,updatedColumn.email,updatedColumn.points)
}
},[updatedColumn])

return(
    <div>

    <MaterialTable 
        columns={columns} 
        data={tableData}         

        editable = {{

          onRowAdd: (newRow) =>
          new Promise((resolve) => {
          setTableColumns(newRow)  
          setTimeout(() => {
          setTableData([...tableData,newRow ]) 
          resolve()}, 1000)         
        }),

        onRowDelete: selectedRow =>
        new Promise((resolve)=>{
           const index = selectedRow.tableData.id;
           const updatedData = [...tableData]
           updatedData.splice(index, 1)
           setDeletedData(selectedRow)
           //console.log(selectedRow)
            setTableData(updatedData)
        }),

        onRowUpdate:(newRow,oldRow)=>
        new Promise((resolve)=>{
          const updatedData=[...tableData]
          updatedData[oldRow.tableData.id]=newRow
          setUpdatedData(newRow)   
          setTableData(updatedData) 
                                     
      })

        }}
        title="User List"
        options={{
           actionsColumnIndex: -1,
           addRowPosition: "first",
           pageSize:20,
           headerStyle: {
              backgroundColor: '#6fc9fa',
              color: '#FFF',
              height: 10,
              zIndex:0,

          }
          }}
          icons={{
            Add: () => <AddBoxIcon style={{ color: "green" }} />,
           Edit: () => <EditIcon style={{ color: "orange" }} />,
           Delete: () => <DeleteIcon style={{ color: "red" }} />,
           Search:() =><SearchIcon style={{ color: "purple" }} />

         }}
    />

</div>
)

}

export default UserTable