import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PublicIcon from "@mui/icons-material/Public";
import {
    getCalculate,
    getCultures,
    getProvinces,
    getUsers,
} from "../../redux/apiCalls";
import "./home.scss";

const Home = () => {
    const dispatch = useDispatch();
    const [calc, setCalc] = useState({});
    const { provinces } = useSelector((state) => state.provinces);
    const { users } = useSelector((state) => state.users);
    const { cultures } = useSelector((state) => state.cultures);

    console.log(cultures);
    useEffect(() => {
        getProvinces(dispatch);
        getUsers(dispatch);
        getCultures(dispatch);
        getCalculate(setCalc);
    }, [dispatch]);

    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="culture" value={cultures.length} />
                    <Widget type="province" value={provinces.length} />
                    <Widget type="admin" value={users.length} />
                </div>
                <div className="charts">
                    <Featured calc={calc} />
                    {/* <Chart title="Last 6 Months Revenue" aspect={2 / 1} /> */}
                    <div className="listContainer">
                        <div className="listTitle">Cara Penggunaan</div>
                        <div className="list-wrapper">
                            <div className="list-item">
                                <PublicIcon />
                                Halaman permainan rakyat digunakan untuk
                                mengelola data permainan rakyat seperti add,
                                edit dan delete. Perhitungan klasifikasi akan
                                dilakukan otomatis dari sistem.
                            </div>
                            <div className="list-item">
                                <AddLocationIcon />
                                Halaman provinsi digunakan untuk mengelola data
                                provinsi seperti tambah, hapus dan mengubah
                                daerah provinsi maupun titiknya.
                            </div>
                            <div className="list-item">
                                <PersonOutlineOutlinedIcon />
                                Halaman admin digunakan untuk mengelola data
                                admin seperti menambah akun admin, menghapus dan
                                mengedit info akun admin.
                            </div>
                        </div>
                        {/* <Table /> */}
                    </div>
                </div>
                {/* <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div> */}
            </div>
        </div>
    );
};

export default Home;
