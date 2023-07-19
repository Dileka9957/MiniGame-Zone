import { useState, useEffect } from 'react';
import MaterialTable, { MTableBodyRow } from 'material-table';
import Select from '@mui/material/Select';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItem, FormControl, InputLabel } from '@mui/material';
import { getAllcategories, getGamesForAdmin } from 'store/actions/Game Actions/game.action.js';
import { postGameAction, UpdateGameAction, deleteGameAction } from 'store/actions/Game Actions/postGame.action';

function GameUpload() {
    const [tableData, setTableData] = useState([]);
    const [tableColumns, setTableColumns] = useState();
    const [UpdatedColumn, setUpdateData] = useState();
    const [deletedColumn, setDeleteColumn] = useState();
    const [categoryData, setCategoryData] = useState([]);
    const [category, setCategory] = useState({ categories: '' });
    console.log('category 👎', category);
    // console.log(' 👍 ', categoryData[0].categoryName);

    //use effect for get games
    useEffect(() => {
        getGamesForAdmin().then((data) => {
            console.log('data', data);
            setTableData(data);
        });
    }, []);

    //use effect for get categories
    useEffect(() => {
        getAllcategories().then((data) => {
            // console.log('data ', data);
            setCategoryData(data);
        });
    }, []);

    //use effect for post games
    useEffect(() => {
        if (tableColumns) {
            // console.log('sendCategoryName 👍', tableColumns.name);
            postGameAction(
                tableColumns.name,
                tableColumns.description,
                tableColumns.imgUrl,
                category.categories,
                tableColumns.isRewardGame,
                tableColumns.gameUrl
            );
        }
    }, [tableColumns]);

    //use effect for Update categories
    useEffect(() => {
        if (UpdatedColumn) {
            UpdateGameAction(
                UpdatedColumn._id,
                UpdatedColumn.name,
                UpdatedColumn.description,
                UpdatedColumn.imgUrl,
                category.categories,
                UpdatedColumn.isRewardGame,
                UpdatedColumn.gameUrl
            );
        }
    }, [UpdatedColumn]);

    //use effect for delete categories
    useEffect(() => {
        if (deletedColumn) {
            console.log('deletedColumn 👍', deletedColumn._id);
            deleteGameAction(deletedColumn._id);
        }
    }, [deletedColumn]);

    const columns = [
        { title: 'Game Name', field: 'name', filterPlaceholder: 'Search Category Name', style: { width: '20%' } },
        {
            title: 'Game Description',
            field: 'description',
            filtering: false,
            render: (rowData) => {
                return <div style={{ width: '400px' }}>{rowData.description.slice(0, 50)}...</div>;
            }
        },

        {
            title: 'Thumbnail',
            field: 'imgUrl',
            filtering: false,

            render: (rowData) => <img src={rowData.imgUrl} alt="thumbnail" style={{ width: '80px', height: '60px', borderRadius: 10 }} />
        },
        {
            title: 'Game url',
            field: 'gameUrl',
            filtering: false,
            render: (rowData) => {
                return <div style={{ width: '400px' }}>{rowData.gameUrl}</div>;
            }
        },

        {
            title: 'Is Rewarded Game',
            field: 'isRewardGame',
            filtering: false,
            style: { width: 300, maxwidth: 300, minwidth: 300 },
            lookup: { true: 'Yes', false: 'No' },
            style: { placeholder: 'Search Category Name' },
            render: (rowData) => {
                return(
                <>
                 { rowData.isRewardGame === "true"?(
                        <div
                            style={{
                                backgroundColor: 'green',
                                color: 'white',
                                padding: 5,
                                width: 60,
                                textAlign: 'center',
                                borderRadius: 10
                            }}
                        >
                            Yes
                        </div>
                    ):(   
                         <div
                        style={{
                            backgroundColor: 'red',
                            color: 'white',
                            padding: 5,
                            width: 60,
                            textAlign: 'center',
                            borderRadius: 10
                        }}
                    >
                        No
                    </div>
                    )   
                }
                </>)
                
            }
        },

        {
            title: 'Category',
            field: 'categories',
            filtering: false,
            variant: 'standard',
            style: { width: 400 },
            emptyValue: 'Null',
            editComponent: (tableData, value, onChange) => (
                <FormControl style={{ width: 200 }}>
                    <InputLabel>Categories</InputLabel>
                    <Select onChange={(e) => setCategory({ ...category, categories: e.target.value })} value={category.categories}>
                        {categoryData.map((result) => (
                            <MenuItem value={result.categoryName} key={result._id}>
                                {result.categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )
        }
    ];

    return (
        <div>
            {/* <h1>Game Upload</h1> */}
            <MaterialTable
                style={{ padding: 20, borderRadius: 10 }}
                columns={columns}
                data={tableData}
                //create table add row function
                editable={{
                    onRowAdd: (newRow) =>
                        new Promise((resolve) => {
                            // console.log('newRow 🚀', newRow);
                            setTableData([...tableData, newRow]);
                            setTableColumns(newRow);

                            // SendGamedetails();
                            setTimeout(() => resolve(), 500);
                        }),
                    //create table update row function
                    onRowUpdate: (newRow, oldRow) =>
                        new Promise((resolve) => {
                            const updatedData = [...tableData];
                            updatedData[oldRow.tableData.id] = newRow;
                            setUpdateData(newRow);
                            // console.log(' ❎', 'new row :', newRow, 'old row:', oldRow);
                            setTableData(updatedData);
                            setTimeout(() => resolve(), 500);
                        }),
                    //create table delete row function
                    onRowDelete: (selectedRow) =>
                        new Promise((resolve) => {
                            const updatedData = [...tableData];
                            updatedData.splice(selectedRow.tableData.id, 1);
                            // console.log('selected row id', selectedRow._id);
                            setDeleteColumn(selectedRow);
                            // console.log('selectedRow 🚀', selectedRow);
                            setTimeout(() => resolve(), 500);
                        })
                }}
                title="Game List"
                options={{
                    search: true,
                    filtering: true,
                    addRowPosition: 'first',
                    actionsColumnIndex: -1,
                    pageSize:20,
                    headerStyle: {
                        backgroundColor: '#6fc9fa',
                        color: '#FFF',
                        height: 10,
                        zIndex: 0
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

export default GameUpload;
