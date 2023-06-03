import React from "react";
import './Resume.css';

import ResSectionTitle from "./ResumeSectionTitle";

export default function ResumeTechnicalSkills({ Skills, Title }){
    return(

        <div className="Resume Container">
            <ResSectionTitle Title={Title} />
            <div className="Resume Normal">
                {Skills.map(({Type, List}) => (
                    <div>
                        <p>
                            <strong>{Type}</strong>: {List}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}