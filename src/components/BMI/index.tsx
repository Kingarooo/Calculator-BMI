import { useState } from "react"
import axios from 'axios';

function BMI(): JSX.Element {

    const [bmiResult, setBmiResult] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const sendBMItoServer = async () => {
        if (height && weight) {
            try {
                const response = await axios.post("http://localhost:8080/calculate-bmi", {
                    height,
                    weight,
                });
                setBmiResult(`Your BMI is ${response.data.bmi}`);
            } catch (error) {
                console.error("Error calculating BMI:", error);
                setBmiResult("Failed to calculate BMI.");
            }
        } else {
            alert("Please provide valid height and weight!");
        }
    };

    return (
        <div className="BIM-container" >
            {bmiResult ?
                //if i have a BMI
                <>
                    <p>{bmiResult}</p>
                </>
                //else
                :
                <>
                    <div className="stats">
                        <input placeholder="Insert weight in kg" type="number" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} ></input>
                        <input placeholder="Insert height in cm" type="number" value={height} onChange={(e) => setHeight(parseFloat(e.target.value))} ></input>

                    </div>
                    <button onClick={sendBMItoServer}>Calculate BMI</button>
                </>
            }
        </div>
    );
};
export default BMI;