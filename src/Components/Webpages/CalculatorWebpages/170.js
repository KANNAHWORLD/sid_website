import React from "react";
import '../Webpages.css';
import Calculator from "../../Calculator/Calculator";
import { CS170Calculator } from "../../PageManager/Calculators/CS170Calculator";

export default function CS170Grade(){

    return (
        <div className="PageContainer">
            <h1>CSCI 170 Grade Calculator</h1>
            <p>
                This form is not conclusive of the final grade that you will recieve. Treat this form as an <em><strong>ESTIMATE. </strong></em>
                Input your percent grade on each assignment.
            </p>
            <br />
            <p>
                This calculator does not take into account dropping of Grades. If you would like to see an estimate 
                with lowest scores dropped, just set your grade for that assignment as 100.
            </p>
            <br />
            <Calculator CalcObj={CS170Calculator} />
        </div>
    );
}