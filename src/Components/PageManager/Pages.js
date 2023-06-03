import React from "react";

import Contact from '../Webpages/Contact';
import Home from '../Webpages/Home';
import Resources from '../Webpages/Resources';
import AIGradeCalc from '../Webpages/AIGradeCalc';
import Resume from '../Webpages/Resume';

export const Pages = [
    {
        path: "/",
        element: <Home />
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
        element: <AIGradeCalc />
    },

    {
        path: '/Resume',
        element: <Resume />
    }
];