import React from "react";
import { menuItems } from "../PageManager/menuItems";
import "./Webpages.css";
import { Wikiedits } from "../PageManager/Resources/WikiEdits";
import { ProgGuides } from "../PageManager/Resources/ProgGuides";
import { GradeCalculators } from "../PageManager/Resources/Calculators";
import { ProjectDemos } from "../PageManager/Resources/ProjectDemos";
import { otherPage } from "../PageManager/Resources/OtherPages";

// Paths that should use traditional routing
const TRADITIONAL_ROUTES = [
  '/Resources/360PiazzaDatabase',
  // Add blog paths here
];

export default function Resources(){
    var resourceLinks;
    menuItems.map((target) => {
        if (target.title === "Resources") {
            resourceLinks = target.submenu;
        }
        return null;
    });

    const handleLinkClick = (e, path) => {
        e.preventDefault();
        
        // Check if this is a path that should use traditional routing
        if (TRADITIONAL_ROUTES.some(route => path.startsWith(route))) {
            window.location.href = path;
            return;
        }
        
        // Otherwise use the SPA navigation
        window.navigateTo(path);
    };

    // Special renderer for project demos to handle the PiazzaDatabase differently
    const renderProjectDemos = () => {
        return ProjectDemos.map((demo, index) => (
            <div key={index}>
                <a 
                    href={demo.link} 
                    onClick={(e) => {
                        if (demo.link === "/Resources/360PiazzaDatabase") {
                            // Don't prevent default for PiazzaDatabase
                            // Let the browser handle it normally
                        } else {
                            // For other demos, use SPA navigation
                            e.preventDefault();
                            window.navigateTo(demo.link);
                        }
                    }}
                >
                    {demo.title}
                </a>
                <br />
            </div>
        ));
    };

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
                        {GradeCalculators.map((calc, index) => (
                            <div key={index}>
                                <a 
                                    href={calc.link} 
                                    onClick={(e) => handleLinkClick(e, calc.link)}
                                >
                                    {calc.title}
                                </a>
                                <br />
                            </div>
                        ))}
                    </h3>
                </div>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Programming Notes:
                    </h2>
                    <h3 className="Content">
                        {ProgGuides.map((guide, index) => (
                            <div key={index}>
                                <a 
                                    href={guide.link} 
                                    onClick={(e) => handleLinkClick(e, guide.link)}
                                >
                                    {guide.title}
                                </a>
                                <br />
                            </div>
                        ))}
                    </h3>
                </div>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Edits to Wikipedia:
                    </h2>
                    <h3 className="Content">
                        {Wikiedits.map((edit, index) => (
                            <div key={index}>
                                <a 
                                    href={edit.link} 
                                    onClick={(e) => handleLinkClick(e, edit.link)}
                                >
                                    {edit.title}
                                </a>
                                <br />
                            </div>
                        ))}
                    </h3>
                </div>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Projects Demos!
                    </h2>
                    <h3 className="Content">
                        {renderProjectDemos()}
                    </h3>
                </div>
                <div className="ContentSection" style={{paddingRight: "10px", paddingLeft: "10px"}}>
                    <h2>
                        Others:
                    </h2>
                    <h3 className="Content">
                        {otherPage.map((other, index) => (
                            <div key={index}>
                                <a 
                                    href={other.link} 
                                    onClick={(e) => handleLinkClick(e, other.link)}
                                >
                                    {other.title}
                                </a>
                                <br />
                            </div>
                        ))}
                    </h3>
                </div>
            </div>
        </div>
    );
}