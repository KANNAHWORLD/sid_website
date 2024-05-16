import React from "react";
import './Resume.css';

export default function ResHeader({ Title }){

    return(
            <div className="Resume Title">
                <h1>{Title.name}</h1>
                <div>
                    <ul className="Resume Header List">
                        {Title.data.map((val) => (
                            <li>{val}</li>
                        ))}
                    </ul>
                    <ul className="Resume Header List">
                        {Title.Links.map(({name, link}) => (
                            <li>
                                <a href={link}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
    );
}