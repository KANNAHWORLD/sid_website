import React from 'react';
import "../Webpages.css";

const GeneralRecruiter = () => {

    const noUnderline = {
        'textDecoration': "none",
        paddingBotton: "40px",
    }

    return (
        <div  className='PageContainer'>
            <h1>Hello Recruiters!</h1>
            <p>
                If you are here, you likely found my webpage through my resume or job application.
                <br /><br />
                A little about me: I am an undergraduate and graduate student at the University of Southern California studying
                Computer Science. 
                <br /><br />
                I've worked on various projects throughout my life, from Web Dev ={'> '}
                <a href="Resources/arxivClassification">
                    Machine Learning
                </a> ={'> '} 
                Operating Systems, all of which I enjoyed. I am always looking for new projects to work on, leading 
                new teams, and making contributions (Wikipedia and potentially to Linux).
                <br /><br />
                One of my favorite projects is the website you are currently on: SidHub.net.
                I believe a personal page is a better reflection of me compared to generic resumes and LinkedIn, which 
                is why I plan to keep this website updated throughout time. Also, this webpage grants freedom to play around
                with new technologies such as {" "}
                <a href="Resources/WebpageCloudArchitecture">
                    AWS and Google Cloud.
                </a>
                <br /><br />
                I really enjoy learning about forthcoming technologies. I was fortunate to attend the {" "}
                <a href='Resources/AWSSummit2024'>AWS Summit 2024</a> in Los Angeles. I have also signed up 
                for MongoDB's SoCal Developer Day (looking forward!).
                <br /><br />
                What else? I am currently learning about the Linux Kernel and hoping to contribute to a few patches before
                September of this year, patch review and webpage updates coming soon! I also got the chance to learn about 
                options trading from Akuna Capital. I am also working through MongoDB University's Developer Pathway.
                <br /><br />
                TL;DR: I am seizing the opportunity to learn, contribute, and grow as a developer.
                Feel free to check out the rest of m website! Besides the links above, 
                I have a few more projects and notes to check out.
                <br/><br/>
                Fight On!
                <br /><br />
                <img src="https://mma.prnewswire.com/media/2033253/University_of_Southern_California_Logo.jpg?p=facebook" 
                style={{height: "300px"}}/>
            </p>
        </div>
    );
};

export default GeneralRecruiter;