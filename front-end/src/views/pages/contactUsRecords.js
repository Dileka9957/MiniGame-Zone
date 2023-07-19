import React from 'react';
import MaterialTable from 'material-table';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { useState ,useEffect} from 'react';
import { deleteContactUsAction, getContactUsRecords } from 'store/actions/user.action';


function ContactUsRecords() {

    const [tableData, setTableData] = useState([]);
    const [deletedColumn, setDeletedData] = useState();

    const columns = [

        { title: 'First Name', field: 'firstName' },
        { title: 'Last Name', field: 'lastName' },
        { title: 'Email', field: 'email' },
        { title: 'Message', field: 'message' }
        
    ];

    useEffect(() => {
        getContactUsRecords().then((data) => {
          setTableData(data);
          });
      }, []);

      useEffect(()=>{
        if(deletedColumn){
          deleteContactUsAction(deletedColumn._id)
    }
  },[deletedColumn])


    return(
        <div>
            <MaterialTable
              columns={columns} 
              data={tableData}         
              editable={{

                    onRowDelete: selectedRow =>
                    new Promise((resolve)=>{
                       const index = selectedRow.tableData.id;
                       const updatedData = [...tableData]
                       updatedData.splice(index, 1)
                       setDeletedData(selectedRow)
                       //console.log(selectedRow)
                        setTableData(updatedData)
                   

                    })

                  }}
              title="Messages List"
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
                 Delete: () => <DeleteIcon style={{ color: "red" }} />,
                 Search:() =><SearchIcon style={{ color: "purple" }} />
      
               }}
                  
            />
        </div>
    )

}


export default ContactUsRecords