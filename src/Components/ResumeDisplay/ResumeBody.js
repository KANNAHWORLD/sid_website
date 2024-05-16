import React, { useState } from "react";
import './Resume.css';
import ResSectionTitle from './ResumeSectionTitle'



function mapDisplay(Section, dash, thirdAsLink){

    return (
        <>
            {Section.data.map(({ First, Second, Third, LinkName, Location, Date, Exp }) => 
                (
                <>
                    <div className="Resume Experience Title">
                        <h6><strong>{First}</strong> {dash && '–'} {Second} {thirdAsLink(Third, LinkName)} <i>{Location}</i></h6>
                        <h6>{Date}</h6>
                    </div>
                    <div className="Resume Bullet">
                        <ul className="Resume List">
                            {Exp.map((value) => (
                                <li>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ))}
        </>
        );
}


export default function ResumeBody({ Section, HiddenSection, dash=true, LinkThird=false, MoreButton=false}){
    var thirdAsLink = '';
    if(LinkThird){
        thirdAsLink = (val, name) => (<a href={val}>{name}</a>);
    }
    else
    {
        thirdAsLink = (val, name) => (val);
    }

    const [show, setShow] = useState(false);

    return(
        <>
            <div className="Resume Container">
                <ResSectionTitle Title={Section.title} />

                {mapDisplay(Section, dash, thirdAsLink)}

                {show && mapDisplay(HiddenSection, dash, thirdAsLink)}
                {MoreButton && 
                    <button className="Resume Button" onClick={()=>setShow((prev) => !prev)}>
                        {show ? "show less" : "show more"}
                    </button>
                }


            </div>
        </>
    );
};
