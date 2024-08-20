import React from "react";

import Contact from '../Webpages/Contact';
import Home from '../Webpages/Home';
import Resources from '../Webpages/Resources';
import CS360Grade from '../Webpages/CalculatorWebpages/360';
import Resume from '../Webpages/Resume';
import CS170Grade from "../Webpages/CalculatorWebpages/170";
import CS104Grade from "../Webpages/CalculatorWebpages/104";
import AboutMe from "../Webpages/About";
import MemoryModels from "../Webpages/ProgrammingGuides/MemoryModels";
import AWSSummit2024 from "../Webpages/ResourcesOthers/AWSSummit2024";
import ArxivClassification from "../Webpages/Projects/arxivClassification";
import WebpageArchitecture from "../Webpages/ResourcesOthers/WebpageArchitecture";
import Bootloader from "../Webpages/ProgrammingGuides/BootLoader_Firmware"
import GeneralRecruiter from "../Webpages/Recruiters/GeneralRecruiters";
import PiazzaDatabase360 from "../Webpages/Projects/360PiazzaDatabase";

export const Pages = [
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/Me",
        element: <AboutMe />
    },

    {
        path: '/Home',
        element: <Home />
    },

    {
        path: '/Contact',
        element: <Contact />
    },

    {
        path: '/Resources',
        element: <Resources />
    },

    {
        path: '/Resources/360Grade',
        element: <CS360Grade />
    },

    // {
    //     path: '/Resources/170Grade',
    //     element: <CS170Grade />
    // },

    // {
    //     path: '/Resources/104Grade',
    //     element: <CS104Grade />
    // },

    {
        path: '/Resources/memorymodels',
        element: <MemoryModels />
    },

    {
        path: '/Resources/arxivClassification',
        element: <ArxivClassification />
    },

    {
        path: '/Resources/AWSSummit2024',
        element: <AWSSummit2024 />
    },

    {
        path: '/Resume',
        element: <Resume />
    },

    {
        path: 'Resources/WebpageCloudArchitecture',
        element: <WebpageArchitecture />
    },

    {
        path: 'Resources/Bootloader',
        element: <Bootloader />
    },

    {
        path: 'Resources/GRecruiters',
        element: <GeneralRecruiter />
    },

    {
        path: 'Resources/360PiazzaDatabase',
        element: <PiazzaDatabase360 />
    }
];