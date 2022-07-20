import React from "react";
import "./widget.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

import AddLocationIcon from "@mui/icons-material/AddLocation";
import PublicIcon from "@mui/icons-material/Public";

const Widget = ({ type, value }) => {
    let data;

    switch (type) {
        case "culture":
            data = {
                title: "Permainan",
                isMoney: false,
                link: "lihat semua permainan",
                icon: <PublicIcon className="icon" />,
                path: "/cultures",
            };
            break;
        case "province":
            data = {
                title: "PROVINSI",
                isMoney: true,
                link: "lihat semua provinsi",
                icon: <AddLocationIcon className="icon" />,
                path: "/provinces",
            };
            break;
        case "admin":
            data = {
                title: "ADMIN",
                isMoney: false,
                link: "lihat semua admin",
                icon: <PersonOutlineOutlinedIcon className="icon" />,
                path: "/users",
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{value}</span>
                <span className="link">
                    <a href={data.path}>{data.link} </a>
                </span>
            </div>
            <div className="right">
                {/* <div className="percentage positive">
                    <ArrowUpwardOutlinedIcon /> {diff}%
                </div> */}
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
