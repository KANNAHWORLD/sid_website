import React from 'react';



export default function AWSSummit2024() {

    const linkAStyles = {textDecoration: "None"}

    return (
        <div className='PageContainer'>
            <h1>My Experience at AWS Summit 2024</h1>
            <p>
                On May 22nd, one of AWS's Global Summits was hosted in LA. While the event was geared towards working 
                professionals, I learned a lot about new cloud technologies such as AWS Kendra and Retrieval 
                Augemented Generation (RAG) as well as upcoming services offered
                by AWS and their partners. Everyone I met at the summit was very friendly and willing to share their knowledge
                with a student. I visited 12 booths setup by AWS & partners in the span of 7 hours,
                and I participated in the interactive labs and builder sessions offered by AWS, all of which were very informative 
                and fun. I also shopped around for possible solutions to host backend functionality for my personal website.
                Here is everything I did. Quick links to some of my favorite experiences: <br /> 
                <div>
                    <a href="#QAChatBot" style={linkAStyles}>
                        AWS Q&A Chat Bot
                    </a>
                    <br />
                    <a href="#CloudWAN" style={linkAStyles}>
                        AWS Transit Gateway and cloudWAN
                    </a>
                    <br />
                    <a href="#BedrockRAG" style={linkAStyles}>
                        AWS Bedrock RAG
                    </a>
                </div>
            </p>
            <br />
            <br />
            <div>
                <h2>
                    Coffee Station <p>8:52 A.M.</p>
                </h2>
                <p>
                    I visited the free coffee station sponsored by Aiven and had a free Capuccino. I was surprised that the coffee
                    was well made!
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: ServerlessGurus
                </h2>
                <p>
                    The first booth I visited was hosted by ServerlessGurus. They are a company that specializes in 
                    migrating existing cloud archeitecutres to serveless cloud archeitecutres, saving clients money. 
                    Since I am adding features to my personal website, I was trying to find cloud solutions
                    that are both cost efficient and simple.
                    <br /><br />
                    I learned that AWS Lambda is a great solution for a RestAPI backend and hosting the machine learning
                    model on huggingface is the quickest way to have it available on AWS Lambda. Due to the 250MB limit on 
                    Lambda, it is infeasible to host the model weights on AWS Lambda. While AWS S3 is also a great
                    option to host the model weights, it turns out to be costlier than huggingface.
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: Panther
                </h2>
                <p>
                    Panther is a cloud security company. Many modern websites use 2FA through Duo, Panther provides a clean 
                    integration of this technology with AWS. In addition, they provide log monitoring services and threat detection.
                    <br /><br />
                    While I do not plan to use panther in my personal projects soon, it is amazing to see the amount of work
                    being done to secure cloud infrastructure.
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: AWS SageMaker
                </h2>
                <p>
                    SageMaker is AWS's cutting edge machine learning platform. It is a great tool to visually train and 
                    deploy your machine learning models. A developer could choose some of the best models, such as
                    Claude 3 Sonnet from Anthropic, depending on the task at hand, such as text summarization or image generation.
                    You could use the pre-trained models or even fine-tune some of the available models.
                    <br /><br />
                    SageMaker is very expensive for any personal project I am willing to undertake, but overall, it is a great
                    tool for enterprise applications. However, in a free lab/builder's session offered by AWS, 
                    I was given free credit to use SageMaker to implement a Q&A Chat Bot (more about this down below).
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: AWS Drone Inspector, Edge Computing
                </h2>
                <p>
                    AWS's Drone Inspector game was by far one of the most interesting booths I visited at the summit. In short, 
                    the developers connected a language model to the DJI drone's remote controller allowing the use of natural 
                    language commands to control the drone. Pilots can give commands as simple as "Move to (1,0)" and 
                    the drone would find it's current location, plan a flight path, and finally, give a list of actions 
                    for the pilot to approve. Then, the drone would execute each of the commands and fly to the desired location.
                    <br /><br />
                    Surprisingly, the model was running on top of DJI's standard software, and the AI models controlling the drone
                    were running on local hardware, completely isolated from the internet and the cloud. Using Amazon ECS Anywhere,
                    the developers were able to run the models on the edge. This computing model has many use cases, such as deploying
                    surveying drone in remote locations where real-time communication is essential.
                    <br /><br />
                    For my current projects, I do not see a use case for edge computing. However, I believe that edge computing will
                    become more standard in the future, especially with the rise of driverless cars and their needs of
                    real-time and low-latency computing.
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: AWS PartyRock
                </h2>
                <p>
                    PartyRock was a cool concept -- a playground for AWS Bedrock. I was able to create a description of 
                    an app and PartyRock designed a template for the app. I described an app that took a list of animals
                    and returned car names based on those animals and generated images of these cars. 
                    <br /><br />
                    It was funny to watch PartyRock generate car names like "Lion Roar Convertible" while generating
                    an image of a car with a tail and ears. 
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: AWS Bedrock
                </h2>
                <p>
                    I was impressed by PartyRock and decided to visit the booth powering its backend. Bedrock is 
                    a serverless cloud service that house ready-to-use AI models. A simple query to Bedrock's API 
                    allows developers to use the model to generate text, images, or even code. I was surprised that 
                    developers can create databases and Bedrock can interact with those databases to reply to queries.
                    <br /><br />
                    AWS sponsored a Builder's session where I was able to use Bedrock to create a Q&A Chat Bot using a 
                    Retrieval Augmented Generation (RAG) archeitecutre (More on session below!). Bedrock seems to be a low-cost
                    solution, it is something I want to experiment with in the future. I would like to create a chatbot that
                    replies semantically similar to me in the future.
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: AWS DeepRacer
                </h2>
                <p>
                    DeepRacer was another exhibit I was surprised by. AWS provides a virtual car and a developer can define a 
                    reward function for the reinforcement learning model. The model learns to drive around a track using the 
                    reward function and the developer can compete to have the least lap time.
                    I tested DeepRacer with a custom reinforcement model and was able to get a lap time of around 1:45 seconds
                    (not the best).
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: AMD
                </h2>
                <p>
                    AMD was showcasing their new line of EPYC CPUs which are being integrated into AWS's server system. One of
                    the employees had one of the EPYC CPUs and I was surprised by how small the CPU was. However, AMD designed CPU 
                    cache that is structured vertically, increasing the total L3 cache size. 
                    <br /><br />
                    I was surprised by performance of the CPU. I am planning to build a PC in the future, hopefully the new EPYC
                    technology makes it to the Ryzen series processors.
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2 id="QAChatBot">
                    Lab Session: AWS Q&A Chat Bot
                </h2>
                <p>
                    One of the labs offered by AWS guided you to create a Q&A Chat Bot. I used AWS SageMaker, Lambda, Lex V2, S3, 
                    and Kendra. I used SageMaker to define a machine learning model to power the chat bot. Kendra was able to search
                    through an index (custom data) stored in S3 to find the most relevant answer to the specific question. 
                    Lex V2 was used to create a an interface to converse with the chat bot, and finally, Lambda was used to 
                    connect all of the cloud services together.
                    <br /><br />
                    Creating a Chat Bot in this lab was a great experience. In the past, I viewed all AWS services as individual
                    building blocks but it was enlightening to see all of the Legos fit together to create a cohesive product. 
                    I am definitely exploring more of Kendra and SageMaker in the future. I believe it would be very cool
                    to see a personal chat bot that can answer questions about my projects and experience.
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: Fortinet
                </h2>
                <p>
                    Fortinet was another cloud security company that was showcasing their new line of products. One of the services
                    that caught my eye were API security tests and dependency vulnerability detection. This website was built
                    with ReactJS and naturally, I used node modules. It was scary to see Fortinet's node module scanner detect
                    hundreds of vulnerabilities in modules included indirectly. I was also surprised by the capabilities of Fortinet's 
                    software to penetrate through API calls. It shows the amount of insecure code that is publicly available.
                    <br /><br />
                    For projects using RestAPI's, I would am very interested to see if the software would be capable of penetrating
                    through the end points. 
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Booth: Harness.IO & Dynatrace
                </h2>
                <p>
                    I made a brief stop at Harness.IO and Dynatrace since I was running short on time to the builder's workshops.
                    From speaking to an employee at Harness.IO, they provide a CI/CD pipeline powered and services to test 
                    software reliability and performance. Many of their servcies rival GitLab's. One of the distinguisihing features
                    about Harness.IO is that they provide free certificate courses and traning to use their sources. I am definitely
                    planning on exploring more of their developer tools.
                    <br /><br />
                    Dynatrace provided security solutions for software. I was not able to get much information on their products
                    but the employees seemed very excited to work at the company.
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2 id="CloudWAN">
                    Builder's Session: Connecting Virtual Clouds using Peering, Transit Gateway, and CloudWAN
                </h2>
                <p>
                    The first builder's session I attended taught developers to connect virtual private clouds on AWS. 
                    When 2 seperate cloud environments are created, either in different regions or with different VPC environments,
                    programs running in separate environments are unable to communicate with each other unless developers configure
                    the environment. AWS currently has 3 ways to connect VPCs: Peering, Transit Gateway, and CloudWAN.
                    <br /><br />
                    Peering was the original solution to connect VPCs. It is as simple as adding the VPC ID and IP address of the 
                    VPC you want to enable connections to. However, peering is not a scalable practice since a connection 
                    needs to be made from one VPC to all other VPCs. As a result, if there are N VPCs, there would be (N*(N-1))/2 
                    total connections, or O(N^2) connections. The issue is if one configuration changes, someone will need to
                    manually change all other VPCs. Given 4 VPCs, I was able to connect the VPCs together using peering. The task
                    of connecting all VPCs too eachother was tedious and I was able to see the scalability issue first hand.
                    <br /><br />
                    A more scalable practice would be to use Transit Gateways. Transit Gateways are similar to internet routers,
                    multiple VPCs can connect to a router and then the VPC can access all other VPCs connected to the router. 
                    Transit Gateways can also connect to other transit gateways and other regional networks. Once again, 
                    Transit Gateways are a great solution to connect VPCs but they still present a scalability issue similar
                    to peering. Each transit gateway would need to be connected to all other transit gateways, or a change in 
                    a VPC's configuration would require the reconfiguration of all other VPCs. In the builder's session, I
                    created a Transit Gateway and connected 3 VPCs together. While easier than peering, AWS released a better solution.
                    <br /><br />
                    The most recent solution to connect VPCs is Cloud Wide Area Network (CloudWAN). CloudWAN allows each VPC to connect
                    to a central hub. The central hub then manages the connections between VPCs. Overall, this simplifies the 
                    network routes and allows connections with a single configuration. The CloudWAN manages the routing between 
                    VPCs and the VPCs can mention their connections using a connection configurations. In the builder's session,
                    I did not get enough time to fully connect the CloudWAN but I was able to see the immense simplification
                    of network flow using CloudWAN.
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2 id="BedrockRAG">
                    Builder's Session: Retrieval Augmented Generation (RAG) using AWS Bedrock
                </h2>
                <p>
                    The second builder's session taught us about the RAG archeitecutre and how it is implemented using AWS services.
                    Overall, the RAG archeitecutre generates answers by using an LLM to find the most relevant information in
                    a custom knowledge base defined by the developer. Then, the LLM generates a resposne based on the information retrieved.
                    Since context retrieval and generation are separate tasks, different models can be used for each task depending
                    on the strength of the model.
                    <br /><br />
                    In the builder's session, the LLM retrieved information from Wikipedia if the response from the
                    knowledge base was not relevant enough to answer the question. 
                    <br /><br />
                    AWS Bedrock's pretrained models were a perfect solution to implement the RAG archeitecutre. Bedrock's 
                    Claude 3 Haiku model was used to generate the response with the information retrieved from the knowledge base.
                    If the response was not relevant, AWS Bedrock was connected to a Lambda function that queried Wikipedia
                    for the answer. Finally, the information from Wikipedia was sent to the Claude 3 Haiku model to generate an 
                    intuitive response.           
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2>
                    Conclusion
                </h2>
                <p>
                    The 2024 AWS Summit was a great experience. I learned a lot about the cloud technologies offered by AWS and 
                    their partners. I believe the most valuable aspect was learning how different AWS services fit together to
                    create a cohesive program. The labs and builder sessions were very informative and I enjoyed making 
                    quick applications with tools provided by AWS. I hope to integrate some of these technologies into my
                    personal projects in the near future. 
                </p>
            </div>
        </div>
    );
};

