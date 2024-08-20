import React from "react";

export default function AboutMe(){
        return (
            <>
            <div className="ImageCover" style={{backgroundImage: "url(/SidBackground.jpg)"}}>
            </div>
            <div className="Background">
                <div className="Bio">
                    <h1> Hello! I'm Sid Bansal</h1>
                    <br />
                    <p>
                        I am a Computer Science student at USC.
                        <br />
                        <br />
                        {/* <h5>Bio: </h5> */}
                        <br /> 
                        Here's the rundown, I am a CP for CSCI-360, and was previously for CSCI-102. I love skiing, music, and cooking amongst other things. I've
                        only been to Mammoth Mountain, Mounatin High, and Mount Baldy so far (The classic SoCal Combo). I will definitely be making it up to 
                        Mammoth again this winter. Besides Mammoth, I want to explore other ski resorts. So far, Whistler-Blackcomb is number 1 on my list, with 
                        Copper Mountain number 2. If you have any advice about either of these places, I would love to hear it!
                        <br />
                        <br />
                        <h5>What have I been up to?</h5>
                        <br />
                        Its summer, so I've had very few commitments. Without classes and assignments every day, I've been doing a lot
                        of cooking, catching up with friends, as well as learning many new things. One of my favorite things that I've 
                        made is a fresh tomato soup with freshly baked focaccia bread. More on the technical side this website 
                        you are currently looking at was designed by me! I was definitely not
                        capable of making a ReactJS app at the start of summer. ReactJS is a relatively small todo list, so here is
                        what else I am up to:
                        <br />
                        <br />
                        <ul>
                            <li>
                                Machine Learning Learning Place on AWS SkillBuilder
                            </li>
                            <li>
                                Developer Learning Plan on AWS SkillBuilder
                            </li>
                            <li>
                                Leetcode!!
                            </li>
                            <li>
                                GoLang?
                            </li>
                            <li>
                                Catching up with friends
                            </li>
                            <li>
                                Vibing to music
                            </li>
                        </ul>
                        <br />
                        Wanna talk? Let me know <a href="/Contact" >here!</a>
                    </p>
                </div>
            </div>
            </>
    );
};