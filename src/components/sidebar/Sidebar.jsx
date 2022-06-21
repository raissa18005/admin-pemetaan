import React, { useContext } from "react";
import "./sidebar.scss";
import { useDispatch } from "react-redux";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";
import { logout } from "../../redux/userRedux";

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const SidebarData = [
        {
            id: 1,
            title: "Dashboard",
            icon: <DashboardIcon className="icon" />,
            path: "/",
        },
        {
            id: 2,
            title: "Budaya",
            icon: <PublicIcon className="icon" />,
            path: "/cultures",
        },
        {
            id: 3,
            title: "Provinsi",
            icon: <AddLocationIcon className="icon" />,
            path: "/provinces",
        },
        {
            id: 4,
            title: "Pengguna",
            icon: <PersonOutlineOutlinedIcon className="icon" />,
            path: "/users",
        },
        {
            id: 5,
            title: "Keluar",
            path: "/login",
            icon: <LogoutOutlinedIcon className="icon" />,
        },
    ];

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Mappin Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    {SidebarData.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            style={{ textDecoration: "none" }}
                        >
                            <li
                                id={
                                    window.location.pathname.split("/")[1] ===
                                    item.path.split("/")[1]
                                        ? "active"
                                        : ""
                                }
                                onClick={
                                    item.title === "Keluar" ? handleLogout : ""
                                }
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
