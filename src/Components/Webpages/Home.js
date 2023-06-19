import React from "react";
import './Webpages.css';
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, FadeOut, MoveIn, MoveOut, Sticky, StickyIn, ZoomOut, StickyOut } from "react-scroll-motion";
import VideoScroll from "../VideoScroll/VideoScroll";

function Home(){


    const ZoomInScrollOut = batch(StickyOut(), FadeOut(1, -2), ZoomOut(1, 8));

    return (
        <>

        <div className="Background">
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
                            Since I am a 360 CP, check resources for a 360 grade calculator, or conveniently
                        </p>
                        <a href={"/Resources/360Grade"} className="Button Link">The Grade Calc</a>
                        <br />
                        <p>
                            There are other grade calculators still available, simply check resources and you
                            can browse through
                        </p>
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
