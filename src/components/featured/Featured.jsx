import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Featured = ({ calc }) => {
    console.log(calc);
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#ff4242", "#AF19FF"];
    const pieData = [
        {
            name: "Provinsi Tinggi",
            value: calc.highProvinces,
            color: "#82ca9d",
        },
        {
            name: "Provinsi Sedang",
            value: calc.midProvinces,
            color: "#FFBB28",
        },
        {
            name: "Provinsi Rendah",
            value: calc.lowProvinces,
            color: "#ff4242",
        },
    ];
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Perhitungan Klasifikasi</h1>
                <MoreVertIcon />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <PieChart width={140} height={140}>
                        <Pie
                            data={pieData}
                            color="#000000"
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius="100%"
                            fill="#8884d8"
                        >
                            {pieData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className="legend-container">
                    {calc.highProvince &&
                        pieData.map((entry, index) => (
                            <div className="legend" key={index}>
                                <div
                                    className="color"
                                    style={{ backgroundColor: entry.color }}
                                ></div>
                                <p className="desc">{`${entry.name} : ${entry.value}`}</p>
                            </div>
                        ))}
                </div>
                <p className="title">Nilai Perhitungan</p>
                {calc.average && (
                    <div className="calculate-info">
                        <p className="desc">{`Jumlah Budaya : ${calc.jumlahBudaya}`}</p>
                        <p className="desc">{`Jumlah Provinsi : ${calc.jumlahProvinsi}`}</p>
                        <p className="desc">{`Rata-rata : ${calc?.average.toFixed(
                            2
                        )}`}</p>
                        <p className="desc">{`Standar Deviasi : ${calc?.standarDeviasi.toFixed(
                            2
                        )}`}</p>
                        <p className="desc">{`n : ${calc?.n}`}</p>
                        <p className="desc">{`Rata-rata - : ${calc?.lowBound.toFixed(
                            2
                        )}`}</p>
                        <p className="desc">{`Rata-rata + : ${calc?.highBound.toFixed(
                            2
                        )}`}</p>
                    </div>
                )}

                {/* <div className="summary">
                    <div className="item ">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Featured;
