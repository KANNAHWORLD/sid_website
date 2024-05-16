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
            {resourceLinks.map((target) => (
                <h4>
                    <a href={target.url}>{target.title}</a>
                </h4>
            ))}
        </div>
    );
}