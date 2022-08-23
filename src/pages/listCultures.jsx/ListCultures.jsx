import React, { useEffect, useState } from "react";
import Datatable from "../../components/datatable/Datatable";
import { deleteCulture, getCultures } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import "react-toastify/dist/ReactToastify.css";
import "./listcultures.scss";

const ListCultures = () => {
    const dispatch = useDispatch();

    const { cultures, isFetching } = useSelector((state) => state.cultures);

    useEffect(() => {
        getCultures(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteCulture(id, dispatch, toast);
    };

    const cultureColumns = [
        // { field: "_id", headerName: "ID", minWidth: 100, flex: 1 },
        {
            field: "name",
            headerName: "Nama Permainan",
            minWidth: 150,
            flex: 1,

            renderCell: (params) => {
                return params.row.name;
            },
        },
        {
            field: "province",
            headerName: "Provinsi",
            minWidth: 150,
            flex: 1,
            renderCell: (params) => {
                return params.row.province.name;
            },
        },
        {
            field: "year",
            headerName: "Tahun",
            minWidth: 60,
            flex: 1,
            renderCell: (params) => {
                return params.row.year || "-";
            },
        },
        {
            field: "desc",
            headerName: "Deskripsi",
            minWidth: 150,
            flex: 1,
            renderCell: (params) => {
                return params.row.desc || "-";
            },
        },
        // {
        //     field: "reg_num",
        //     headerName: "No. Regist",
        //     minWidth: 100,
        //     flex: 1,

        //     renderCell: (params) => {
        //         return params.row.reg_num || "-";
        //     },
        // },
        // {
        //     field: "imgs",
        //     headerName: "Foto",
        //     minWidth: 50,
        //     flex: 1,

        //     renderCell: (params) => {
        //         return params.row.imgs.length > 0
        //             ? params.row.imgs.length
        //             : "-";
        //     },
        // },
        // {
        //     field: "videos",
        //     headerName: "Video",
        //     minWidth: 50,
        //     flex: 1,

        //     renderCell: (params) => {
        //         return params.row.videos.length > 0
        //             ? params.row.videos.length
        //             : "-";
        //     },
        // },
    ];

    return (
        <div className="listCultures">
            {isFetching ? (
                <CircularProgress />
            ) : (
                <>
                    <Datatable
                        rows={cultures}
                        columns={cultureColumns}
                        handleDelete={handleDelete}
                    />
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </>
            )}
        </div>
    );
};

export default ListCultures;
