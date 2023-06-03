import React from "react";
import './Resume.css';

export default function ResSectionTitle({ Title }){
    return(
        <div className="Resume Container">
            <h2>
                {Title}
            </h2>
        </div>
    );
};