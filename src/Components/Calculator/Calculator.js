import React, { useEffect, useState } from "react";
import './Calculator.css';

export default function Calculator({ CalcObj }){

    let [grades, setGrades] = useState({'Hello': 0});
    let [total, setTotal] = useState(0);

    const handleChange = (weight) => (event) => {
        if(event.target.value > 100){
            event.target.value = 100
        }
        else if(event.target.value < 0){
            event.target.value = 0
        }
        setGrades((prev) => ( {...prev, [event.target.id]: ((event.target.value /100) * weight)} ));
    }

    useEffect(() => {
        let subTotal = 0;
        Object.entries(grades).map( ([key, value]) => (subTotal += value));
        setTotal(subTotal);
    }, [grades]);



    return (
        <div className="Container">
            <p>
                This calculator calculates how much of your grade you have earned. This means that if you have only done 1 assignment, it will show you 
                how much of your overall grade you have earned (The weight of the assignment on your overall grade). Because of this, it is totally  
                <strong> OK</strong> to see a very small number. If you would like to see your overall grade, simply set all of the other fields as 100%
                <br />
                <br />
                As always, this is just an Estimate and your real class grade can differ!
            </p>
            <div className="Calc">
                <form>
                    {CalcObj.map(({ section, totalWeight, subSections }) => {
                        return (
                            <div className="Form">
                                <h2>{section}</h2>
                                <div className="Calc">
                                    {subSections.map(({ name, weight }) => (
                                        <div className="Field">
                                            <h3>{name} ({weight}%)</h3>
                                            <input defaultValue={0} id={name} type="number" min={0} max={100} onChange={handleChange(weight)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </form>
            </div>
            <h3> Your Grade is: {total}%</h3>
            <p>Grading scale/letter grades to be added...</p>
        </div>
    );
}