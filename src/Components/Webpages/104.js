import React from "react";
import './Webpages.css';
import Calculator from "../Calculator/Calculator";
import { CS104Calculator } from "../PageManager/Calculators/CS104Calculator";

export default function CS104Grade(){

    return (
        <div className="PageContainer">
            <h1>CSCI 104 Grade Calculator</h1>
            <p>
                This form is not conclusive of the final grade that you will recieve. Treat this form as an <em><strong>ESTIMATE. </strong></em>
                Input your percent grade on each assignment.
            </p>
            <br />
            <p>
                This calculator does not take into account dropping of lowest Grades. If you would like to see an estimate 
                with lowest scores dropped, just set your grade for that assignment as 100.
            </p>
            <br />
            <Calculator CalcObj={CS104Calculator} />
        </div>
    );
}