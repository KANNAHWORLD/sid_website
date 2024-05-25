import React from "react";
import { menuItems } from "../PageManager/menuItems";
import "./Webpages.css";
import { Wikiedits } from "../PageManager/Resources/WikiEdits";
import { ProgGuides } from "../PageManager/Resources/ProgGuides";
import { GradeCalculators } from "../PageManager/Resources/Calculators";
import { AWSSummit2024 } from "./ResourcesOthers/AWSSummit2024";
import { otherPage } from "../PageManager/Resources/OtherPages";

export default function Resources(){

    var resourceLinks;
    menuItems.map((target) => {
        if (target.title == "Resources") {
            resourceLinks = target.submenu;
        }
    });

    return (
        <div className="PageContainer">
            <h1 className="Title">
                Resources, Projects, All else
            </h1>
            <div style={{flexWrap: "wrap", display: "flex", justifyContent: "space-between"}}>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Grade Calculators:
                    </h2>
                    <h3 className="Content">
                        {GradeCalculators.map((calc) => ( <div><a href={calc.link}>{calc.title}</a><br /></div>))}
                    </h3>
                </div>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Programming Guides:
                    </h2>
                    <h3 className="Content">
                        {ProgGuides.map((guide) => ( <div><a href={guide.link}>{guide.title}</a><br /></div>))}
                    </h3>
                </div>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Edits to Wikipedia:
                    </h2>
                    <h3 className="Content">
                        {Wikiedits.map((edit) => ( <div><a href={edit.link}>{edit.title}</a><br /></div>))}
                    </h3>
                </div>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Projects Demos!
                    </h2>
                    <h3 className="Content">
                        {Wikiedits.map((edit) => ( <div><a href={edit.link}>{edit.title}</a><br /></div>))}
                    </h3>
                </div>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Others:
                    </h2>
                    <h3 className="Content">
                        {otherPage.map((other) => ( <div><a href={other.link}>{other.title}</a><br /></div>))}
                    </h3>
                </div>
            </div>
        </div>
    );
}