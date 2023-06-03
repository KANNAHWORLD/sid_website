import React, { useEffect, useState } from "react";
import './Webpages.css';
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, FadeOut, MoveIn, MoveOut, Sticky, StickyIn, ZoomOut, StickyOut } from "react-scroll-motion";
import { Parallax } from "react-scroll-parallax";
import VideoScroll from "../VideoScroll/VideoScroll";
// import video from 'TestVideo.mp4';

function Home(){


    const ZoomInScrollOut = batch(StickyOut(), FadeOut(1, -2), ZoomOut(1, 8));

    return (
        <>
        <VideoScroll id="Video1" path='/TestVideo.mp4' offset={50} pages={1.4} playBackSpeed={1} />
        <div className="Background">
            {/* <VideoScroll path='/TestVideo.mp4' offset={250} pages={1.4} playBackSpeed={1} /> */}
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(ZoomInScrollOut, MoveOut(0, -200))}>
                        <h1 className="CenterScroll">Welcome to Sid Hub</h1>
                        <h6 className="CenterScroll">Scroll down &#8595;</h6>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(FadeIn(-3, 1), FadeOut(1, -2), MoveIn(0, 300), MoveOut(0, -300), Sticky())} >
                        <p className="CenterScroll">
                            Since I am a CP, check resources for a 360 grade calculator, or conveniently
                        </p>
                        <a href={"/Resources/360Grade"} className="Button Link">The Grade Calc</a>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(FadeIn(-2, 1), FadeOut(1, -3.5), Sticky())} >
                            <p className="CenterScroll">
                                My website is currently under more development <br/> Pardon the bugs!
                            </p>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </div>
        </>
    );
}



export default Home;
