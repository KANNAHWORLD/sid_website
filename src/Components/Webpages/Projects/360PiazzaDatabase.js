import React from 'react';
import { useState } from 'react';
import '../Webpages.css';
import DropDownComponent from '../../DropDownComponent/DropDownComponent';

const LAMBDA_BASE_URL = "https://1rsmqld5fg.execute-api.us-west-2.amazonaws.com/prod";
const PIAZZA_DATABASE_URL = LAMBDA_BASE_URL + "/Projects/360PiazzaDatabase";

const PiazzaDatabase360 = () => {

    const [databaseRows, setDatabaseRows] = useState([]);
    const [message, setMessage] = useState('');

    function dbQuery(e){
        // setDatabaseRows([]);
        e.preventDefault();
        setMessage('Loading...');
        const text = document.getElementById('classification_textbox').value;

        // Call the model to classify the text
        fetch(PIAZZA_DATABASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                'data': text
            })
        }).then(response => 
            response.json()
        ).then((data) =>{
            if(data['response'].length == 0){
                setMessage('No posts match request');
            } else {
                setDatabaseRows(data['response']);
            }
            console.log(databaseRows);
        }).catch((error) => {
            setMessage('Network Error, coudl not load from database');
        });
    }


    const renderRows = () => {
        const elements = [];
    
        databaseRows.forEach((row, index) => {
            const arg = {
                title: row['post_title'],
                question_content: row['post_content'],
                instructor_answer: row['instructor_answer'],
                student_answer: row['student_answer'],
                post_id: row['post_id'],
                semester_id: row['semester_id'],
                similarity: row['similarity'],
            };
            
            if (row && row.post_title && row.post_content) {
                elements.push(
                    <DropDownComponent json={arg}/>
                );
            }
        });
    
        return elements;
    };

    const style = {
        'fontSize': '15px',
    };

    return (
        <div className='PageContainer'>

            <h1>360 Piazza Database</h1>
            <p>
                Hello, if you are seeing this, then either you are checking out my website or you are Isabel<br/>
                This section is still under works, but a preview of the functionality is here.<br/>
                Enter a question and the system will try to find the most relevant answer from the database.<br/>
                To test, try "Back Propogation and Gradient Descent"
            </p>
            <br />
            <textarea type="text" placeholder="Enter Text to Query" id="classification_textbox" 
                style={style} 
                rows={8} 
                cols={100} />
            <br /><br />

            <button className='Button' onClick={dbQuery} style={{'fontSize': '20px', 'borderRadius':'5px'}}>
                Retrieve!
            </button>

            <br /><br />
            <div style={{alignContent: 'center', justifyContent: 'center', margin: 'auto'}}>
                {Array.isArray(databaseRows) && databaseRows.length > 0 && (
                    renderRows()
                )}
                {databaseRows.length === 0 && (message)}
            </div>
        </div>
    );
};

export default PiazzaDatabase360;
