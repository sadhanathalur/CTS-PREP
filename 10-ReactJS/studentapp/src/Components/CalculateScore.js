import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const average = props.total / props.goal;

    return (
        <div className="box">
            <h2>Student Details</h2>

            <p><b>Name :</b> {props.name}</p>
            <p><b>School :</b> {props.school}</p>
            <p><b>Total Marks :</b> {props.total}</p>
            <p><b>Subjects :</b> {props.goal}</p>
            <p><b>Average :</b> {average}</p>
        </div>
    );
}

export default CalculateScore;