import React from 'react';
import MaterialTable from 'material-table';
import {useState, useEffect } from 'react';
import { getAllcategories } from 'store/actions/Game Actions/game.action';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Description } from '@mui/icons-material';
import { width } from '@mui/system';
import { deleteGameCategoryAction, postGameCategoryAction, UpdateGameCategoryAction } from 'store/actions/Game Actions/postGame.action';



function CategoryTable() {

  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState();
  const [deletedColumn, setDeletedData] = useState();
  const [updatedColumn,setUpdatedData] = useState();



  const columns = [

      { title: 'Category Name', field: 'categoryName' },
      
  ];

  //use effect for get categories
  useEffect(() => {
    getAllcategories().then((data) => {
      setTableData(data);
      });
  }, []);


  useEffect(()=>{
      if(tableColumns){
        //console.log(tableColumns.categoryName,tableColumns.description)
        postGameCategoryAction(tableColumns.categoryName)
    }
  },[tableColumns])

  useEffect(()=>{
      if(deletedColumn){
        //console.log(deleteRow.categoryName)
        deleteGameCategoryAction(deletedColumn._id)
  }
},[deletedColumn])

useEffect(()=>{
  
  if(updatedColumn){
    console.log(updatedColumn._id)
    UpdateGameCategoryAction(updatedColumn._id,updatedColumn.categoryName)
}
},[updatedColumn])


  return (
      <div>

          <MaterialTable 
              columns={columns} 
              data={tableData}         
              editable={{

                      onRowAdd: (newRow) =>
                      new Promise((resolve)=> {
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
                      new Promise((resolve )=>{
                        const updatedData=[...tableData]
                        updatedData[oldRow.tableData.id]=newRow
                        setTableData(updatedData) 
                        setUpdatedData(newRow)                              
                    })

                  }}
              title="Category List"
              options={{ 
                 actionsColumnIndex: -1,
                 addRowPosition: "first",
                 pageSize:20,
                 headerStyle: {
                  backgroundColor: '#6fc9fa',
                  color: '#FFF',
                  height: 10,
                  zIndex:0
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
  );

}

export default CategoryTable;