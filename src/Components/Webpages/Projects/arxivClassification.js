import React from 'react';
import { useState } from 'react';

const LAMBDA_BASE_URL = "https://1rsmqld5fg.execute-api.us-west-2.amazonaws.com/prod";
const ARXIV_CLASSIFICATION_URL = LAMBDA_BASE_URL + "/Projects/arxivClassification";

const ArxivClassification = () => {

    const [classification, setClassification] = useState('');

    function classify(){
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
        });
    }

        return (
            <div className='PageContainer'>
                <h1>Arxiv Classification</h1>
                <p>
                    During the Spring 2024 semester, Aryan Gulati, Aditya Kumar, and I worked on 
                    a project to classify Math and CS papers into 11 disciplines. We used a variety
                    of machine learning models to classify the papers. We experimented with Naive
                    Bayes, fine-tuning BERT, and fine-tuning Longformer.

                    More explanation and styling in the works.....
                </p>
                
                
                <input type="text" placeholder="Enter Text" id="classification_textbox"/>
                <button onClick={classify}>
                    Classify!
                </button>
                <div>
                    <p>
                        Prediction: {classification}
                    </p>
                </div>
            </div>
        );
};

export default ArxivClassification;