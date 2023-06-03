import React from "react";
import ResSectionTitle from "./ResumeSectionTitle";
import './Resume.css';

export default function ResumeEducation({ Contents }){

    return(
        <div className="Resume Container">
            <ResSectionTitle Title={"Education"} />
            {Contents.map(({School, Grad_Date, Major, GPA}) => (
                <>
                <div className="Resume Education Large">
                    <h6><strong>{School}</strong></h6>
                    <h6>{Grad_Date}</h6>
                </div>
                <div className="Resume Education Small">
                    <h6>{Major}</h6>
                    <h6>Cumulative GPA: {GPA}</h6>
                </div>
                </>
            ))}
        </div>
    );
}