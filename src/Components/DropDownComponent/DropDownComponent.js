import React from 'react';
import { useState } from 'react';
import {Card} from 'react-bootstrap';
import '..//Webpages/Webpages.css';

function DropDownComponent({ json }) {
    const [expandRow, setExpandRow] = useState(false);
    
    const rowStyle = {
        "justifyContent": "space-between",
        "display": "flex",
        padding: '0px 10px 0px 20px'
    };

    return (
        <div style={{
            'maxWidth':'80%',
            padding: '10px',
        }}>
            <Card style={{
                    borderWidth: '0px', 
                    borderStyle: 'solid', 
                    padding: '10px', 
                    borderRadius: '10px',
                    boxShadow: '1px 1px 2px #888888'
                }}>
                <div style={rowStyle}>
                    <Card.Header style={{
                            'fontSize': '25px',
                            margin: 'auto 0px',
                        }}>
                        <div dangerouslySetInnerHTML={{ __html: json.title }} />
                    </Card.Header>
                    <button style={{
                                border:'none', 
                                background: 'none',
                                fontSize: '20px',
                                padding: '20px',
                            }} 
                            onClick={() => setExpandRow(!expandRow)}>
                        {expandRow ? '-' : '+'}
                    </button>
                </div>
                <div>
                {expandRow &&
                    <Card.Body>
                        <Card.Text>
                            {
                                json.question_content ? 
                                (<div dangerouslySetInnerHTML={{ __html: json.question_content }} />) :
                                "No question content given"
                            }
                        </Card.Text>
                        <br />
                        <Card.Text>
                            Instructor Answer:
                            <br />
                            {
                                json.instructor_answer ? 
                                (<div dangerouslySetInnerHTML={{ __html: json.instructor_answer }} />) :
                                "No answer given"
                            }
                        </Card.Text>
                        <br />
                        <Card.Text>
                            Student Answer:
                            <br />
                            {
                                json.student_answer  ? 
                                (<div dangerouslySetInnerHTML={{ __html: json.student_answer  }} />) :
                                "No answer given"
                            }
                        </Card.Text>
                        <br/>
                        {/* <div style={{display:"flex"}}> */}
                            <Card.Text>
                                Semester: {json.semester_id} &nbsp; &nbsp;
                                Post: {json.post_id} &nbsp; &nbsp; 
                                Cosine Similarity: {json.similarity.toFixed(3)}
                            </Card.Text>
                        {/* </div> */}
                    </Card.Body>
                }
                </div>
            </Card>
        </div>
    );
}

export default DropDownComponent;
