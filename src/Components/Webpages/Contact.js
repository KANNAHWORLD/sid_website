import React, {useState} from 'react';
import './Webpages.css';

function Contact(){

    let [form, setForm] = useState(false);

    return (
        <>
            <div>
                <h1 className='Title'>
                    Contact Me!
                </h1>
            </div>
            <div className='PageContainer'>
                <p className='Content'>
                    Maybe something caught your eye or maybe you would like to see a grade calculator for another class, feel free to text me at <br />
                    (323) 391-8668 <br /><br />
                    Alternatively, click the button to fill out a form and I will get back to ASAP. <br />
                    Cheers! <br /><br />
                    <button className='Button' onClick={()=>setForm((prev) => !prev)}>
                        {form ? "Hide Form" : "Show Form"}
                    </button>
                    <br />
                    <br />
                </p>
                {form && <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfcKZYZwkXiGLY-Cbv_yaV1RaYRcYFpsSq6Wtrid7HDFOC7EQ/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>}
            </div>
        </>
    );
}

export default Contact;