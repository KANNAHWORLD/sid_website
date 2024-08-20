import React from 'react';
import { useState } from 'react';
import '../Webpages.css';

const LAMBDA_BASE_URL = "https://1rsmqld5fg.execute-api.us-west-2.amazonaws.com/prod";
const ARXIV_CLASSIFICATION_URL = LAMBDA_BASE_URL + "/Projects/arxivClassification";

const ArxivClassification = () => {

    const [classification, setClassification] = useState('');

    function classify(e){
        
        e.preventDefault();

        setClassification('Loading...');
        const text = document.getElementById('classification_textbox').value;

        // Call the model to classify the text
        fetch(ARXIV_CLASSIFICATION_URL, {
            method: 'POST',
            body: JSON.stringify({
                'data': text
            })
        }).then(response => 
            response.json()
        ).then((data) =>{
            console.log(data['classification'])
            setClassification(data['classification']);
        }).catch((error) => {
            setClassification('Error Loading the classification. Network/Server Error.');
        });
    }

    const style = {
        'fontSize': '15px',
    };

    return (
        <div className='PageContainer'>

            <h1>Arxiv Classification</h1>
            <p>
                During the Spring 2024 semester, Aryan Gulati, Aditya Kumar, and I worked on 
                a project to classify Math and CS papers into 11 disciplines: Commutative Algebra, 
                Computer Vision and Pattern Recognition, Artificial Intelligence, Systems and Control,
                Group Theory, Data Structures and Algorithms, Computer Engineering and Science, 
                Programming Languages, Information Theory, Neural and Evolutionary Computing, and Statistics Theory.
                <br /><br />
                We fine-tuned transformer models, such as BERT, on a dataset of 33,000 Arxiv Papers. 
                We ended with 3 final methods: (1) a BERT-based classifier on the first 512 tokens, (2) a 
                BERT-based classifier on the first 512 tokens and 512 random tokenized sentence, (3)
                a <span>Longformer-based</span> classifier on the first 4096 tokens. 
                <br /><br />
                Out of all experiments, method 2 performed the best with an F1 score of approximately 0.86.
                However, for this webpage, I am hosting classifier created by method 1 because its F1 score is 
                approximately the same as method 2 (~0.85) and I am expecting users on this webpage to 
                classify shorter texts.
                <br /><br />
                Note on Hallucinations: This model was created to ONLY classify the 11 disciplines mentioned above.
                As a result, it is possible to obtain weird results like "CS: Systems and Control" for texts like 
                "There are submarines flying in the sky."
                <br /><br />
                <a href='https://github.com/KANNAHWORLD/csci-467-Arxiv-project'>Repo here</a>.
                <br /><br />
                Enjoy!

            </p>
            <br />
            
            <textarea type="text" placeholder="Enter Text to Classify" id="classification_textbox" 
                style={style} 
                rows={8} 
                cols={100} />

            <br /><br />

            <button className='Button' onClick={classify} style={{'fontSize': '20px', 'borderRadius':'5px'}}>
                Classify!
            </button>

            <br /><br />
            <p>
                Prediction: {classification}
            </p>
        
        </div>
    );
};

export default ArxivClassification;