import React from 'react';
import "../Webpages.css";

const WebpageArchitecture = () => {

    const centeredDiv = {
        margin: "auto", 
        display: "flex",
        justifyContent: "center"
    }

    return (
        <div className='PageContainer'>
            <h1>SidHub.net Backend Architecture</h1>
            <p>
                Initially, I designed SidHub.net to be a simple static webpage 
                to elaborate on some of my projects and experiences. However, I realized
                I wanted the port my projects to this website and play with my them in real-time, requiring
                a server to host the functionality.
                <br /><br />
                At the beginning, I considered hosting a webserver on my local desktop. 
                Given security concerns and unreliability, I decided to build my backend on
                the AWS/Google Cloud. I deployed individual components of my backend to 
                different cloud providers depending on the cost and free-tier services offered.
                Currently, I am using AWS Lambda and API Gateway to host API calls and communicate
                with a web server running on a Google Cloud VM. 
                <br /><br />
                Why Lambda? Lambda has a very generous free-tier plan that allows 
                1 million free API calls a month. This is much more than I need for my personal use
                and it is by far the cheapest option for hosting a server. Also, by nature, the serverless
                architecture leaves very little for me to manage.
                <br /><br />
                So why is there a server running on Google Cloud? I wanted to host a machine learning model
                that could classify arxiv papers (<a href="/Resources/arxivClassification">more details</a>).
                Initially, I tried hosting my Lambda function as a Docker container containing all files. However,
                I realized that the severless architecture had latent response times due to the fact that 
                the container would be built and destroyed for each API call (Given API calls are spaced by 15 minutes).
                As a result, Lambda required approxiamtely 1-2 minutes to respond to the API call.
                An always-on server, on the other hand, takes appropriximately 15 seconds to classify a short prompt.
                <br /><br />
                The indirection from Lambda to the Google Cloud server also offers security benefits. No one has 
                direct access to my VM, keeping it secure and isolated from the internet.
                <br /><br />
                Here is a diagram of the backend:
            </p>
            <div style={centeredDiv}>
                <img 
                    src="/Cloud_Arch.png" 
                    alt="Image showing the cloud architecture of SidHub.net"
                    style={{"maxHeight":"400px"}}
                />
            </div>
        </div>
    );
};

export default WebpageArchitecture;