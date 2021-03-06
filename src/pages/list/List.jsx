import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ListProvince from "../listProvince/ListProvince";
import { useLocation } from "react-router-dom";
import "./list.scss";
import ListUsers from "../listUsers/ListUsers";
import { pathName, setDataPage } from "../../utils/naming";
import ListCultures from "../listCultures.jsx/ListCultures";

const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <div className="listWrapper">
                    {setDataPage(
                        <ListCultures />,
                        <ListProvince />,
                        <ListUsers />
                    )}
                </div>
            </div>
        </div>
    );
};

export default List;
