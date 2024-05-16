import React from "react";
import './Webpages.css';
import ResumeBody from "../ResumeDisplay/ResumeBody";
import ResHeader from "../ResumeDisplay/ResumeTitle";
import ResumeEducation from "../ResumeDisplay/ResumeEducation";
import ResumeTechnicalSkills from "../ResumeDisplay/ResumeTechnical";

// Content Shown by default in Resume page

import { ShownWorkExperience } from "../PageManager/ResumeContents/Shown/WorkExperience";
import { ShownLeadership } from "../PageManager/ResumeContents/Shown/Leadership_Involvment";
import { ShownProjects } from "../PageManager/ResumeContents/Shown/Projects";
import { ResumeHeader } from "../PageManager/ResumeContents/Shown/Header";
import { Education } from "../PageManager/ResumeContents/Shown/Education";
import { Technical } from "../PageManager/ResumeContents/Shown/Technical";

//Content hidden by Show More button

import { HiddenWorkExperience } from "../PageManager/ResumeContents/Hidden/WorkExperience";
import { HiddenLeadership } from "../PageManager/ResumeContents/Hidden/Leadership_Involvment";
import { HiddenProjects } from "../PageManager/ResumeContents/Hidden/Projects";

export default function Resume(){
    return(
        <div className="Resume Background">
            <ResHeader Title={ ResumeHeader } />
            <ResumeEducation Contents={Education} />
            <ResumeTechnicalSkills Skills={Technical} Title="Technical Skills" />

            <ResumeBody Section={ShownWorkExperience} 
            HiddenSection={HiddenWorkExperience} 
            MoreButton={false} />

            <ResumeBody Section={ShownLeadership}
            HiddenSection={HiddenLeadership}
            MoreButton={true} />

            <ResumeBody Section={ShownProjects}
            HiddenSection={HiddenProjects}
            MoreButton={true}
            dash={false} 
            LinkThird={true} />
            <div className="Resume Container" style={{alignItems: "center"}}>
                <p>
                    Last updated May 15th, 2024
                </p>
            </div>

        </div>
    );
}