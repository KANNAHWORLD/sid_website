import React from "react";

import Contact from './Contact';
import Home from './Home';
import Resources from './Resources';
import AIGradeCalc from './AIGradeCalc';
import Resume from './Resume';

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