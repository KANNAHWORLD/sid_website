import React from "react";

import Contact from '../Webpages/Contact';
import Home from '../Webpages/Home';
import Resources from '../Webpages/Resources';
import CS360Grade from '../Webpages/CalculatorWebpages/360';
import Resume from '../Webpages/Resume';
import CS170Grade from "../Webpages/CalculatorWebpages/170";
import CS104Grade from "../Webpages/CalculatorWebpages/104";
import AboutMe from "../Webpages/About";

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

    {
        path: '/Resources/170Grade',
        element: <CS170Grade />
    },

    {
        path: '/Resources/104Grade',
        element: <CS104Grade />
    },

    {
        path: '/Resume',
        element: <Resume />
    }
];