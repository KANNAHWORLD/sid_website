import React, { useEffect, useState } from "react";
import "./Video.css";


function VideoScroll({ id, path='', videoType='video/mp4', pages=1, offset=100, frameRate=30, playBackSpeed=1 }){

    let [change, setChange] = useState(0);
    let last = 0

    const handleScroll = (event) => {
        setChange(window.scrollY-last + (Math.random()%64*.01));
        last = window.scrollY;
    };

    useEffect(() => {
        const video = document.getElementById(id);
        const offsetTop = window.scrollY - video.offsetTop;
        if(offsetTop > offset || offsetTop < -offset){
            return;
        }
        video.currentTime += ((change)/frameRate) * (playBackSpeed);
    }, [change]);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <div style={{"height": `${pages*100}vh`}} className="Video-Container">
            <video id={id}>
                <source src={path} type={videoType} />
            </video>
        </div>
    );
}


export default VideoScroll;