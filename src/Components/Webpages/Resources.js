import React from "react";
import { menuItems } from "../PageManager/menuItems";
import "./Webpages.css";

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
            <div className="ContentSection">
                <h2>
                    Grade Calculators:
                </h2>
                <h3 className="Content">
                    <a href={"Resources/360Grade"}>360 Grade Calculator</a>
                </h3>
            </div>
            <div className="ContentSection">
                <h2>
                    Programming Guides
                </h2>
                <h3 className="Content">
                    <a href={"Resources/MemoryModels"}>C++ Memory Models</a>
                </h3>
            </div>
            <div className="ContentSection">
                <h2>
                    Edits I have made to Wikipedia
                </h2>
                <h3 className="Content">
                    {/* <a href={"Resources/MemoryModels"}>C++ Memory Models</a> */}
                </h3>
            </div>

            
        </div>
    );
}