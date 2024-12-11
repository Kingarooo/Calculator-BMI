import express, { json } from "express";
import cors from "cors";

const app = express();

//cenas porcausa do browser
app.use(cors());
app.use(json());


app.post("/calculate-bmi", (req, res) => {
    const { height, weight } = req.body;
    if (!height || !weight) {
        return res.status(400).json({ error: "Height and weight are required." });
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    res.json({ bmi: bmi.toFixed(2) }); // Send BMI rounded to 2 decimals
});

// Start the Server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
