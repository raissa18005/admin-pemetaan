import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ConfirmDialog from "../confirmDialog/ConfrmDialog";
import { fieldName, pathName, setDataPage, tahun } from "../../utils/naming";
import CustomFilter from "../fields/customFilter/CustomFilter";
import { getProvinces } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Datatable = ({ rows, columns, handleDelete }) => {
    const [inputSearch, setInputSearch] = useState("");
    const [list, setList] = useState([]);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [deleteVal, setDeleteVal] = useState({});
    const [province, setProvince] = useState("");
    const [year, setYear] = useState("");
    const [pageSize, setPageSize] = useState(9);

    const dispatch = useDispatch();
    const { provinces } = useSelector((state) => state.provinces);

    useEffect(() => {
        getProvinces(dispatch);
    }, []);

    useEffect(() => {
        setList(rows);
    }, [rows]);

    useEffect(() => {
        const applyFilters = () => {
            let updatedList = rows;

            if (year) {
                updatedList = updatedList.filter((item) => item.year === year);
            }
            if (province) {
                updatedList = updatedList.filter(
                    (item) => item.province._id === province
                );
            }
            if (inputSearch) {
                updatedList = updatedList.filter(
                    (item) =>
                        setDataPage(item.name, item.name, item.username)
                            .toLowerCase()
                            .search(inputSearch.toLowerCase().trim()) !== -1
                );
            }

            setList(updatedList);
        };
        applyFilters();
    }, [inputSearch, province, year, rows]);

    // console.log(limits.includes("628da4a3a1d34e9b6e71eff0"));
    // console.log(limits.some((e) => e._id === "628da4a3a1d34e9b6e71eff0"));

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            minWidth: 100,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to={`./${params.row._id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="viewButton">Edit</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => {
                                setOpenConfirm(true);
                                setDeleteVal(fieldName(params.row));
                            }}
                        >
                            Hapus
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="top">
                <div className="searchFilters">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    setInputSearch(event.target.value);
                                }
                            }}
                        />
                        <SearchOutlinedIcon />
                    </div>
                    {window.location.pathname === "/cultures" && (
                        <div className="filter-container">
                            <div className="filter-title">
                                <FilterAltIcon />
                                Filter :
                            </div>
                            <CustomFilter
                                options={provinces}
                                label="Provinsi"
                                value={province}
                                setValue={setProvince}
                            />
                            <CustomFilter
                                options={tahun(2012, 2021)}
                                label="Tahun"
                                value={year}
                                setValue={setYear}
                            />
                            {(province || year) && (
                                <div
                                    className="reset"
                                    onClick={() => {
                                        setProvince("");
                                        setYear("");
                                    }}
                                >
                                    Reset filter
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <Link to={`./new`} style={{ textDecoration: "none" }}>
                    <div className="addButton">
                        <AddRoundedIcon />
                        Tambah {pathName()}
                    </div>
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                getRowId={(row) => row._id}
                rows={list}
                columns={columns.concat(actionColumn)}
                rowsPerPageOptions={[9, 20, 50, 100]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                pagination
            />
            <ConfirmDialog
                open={openConfirm}
                setOpen={setOpenConfirm}
                deleteVal={deleteVal}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default Datatable;
