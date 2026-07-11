import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
    return (
        <div>
            <CalculateScore
                name="Sadhana"
                school="RMK College of Engineering and Technology"
                total={475}
                goal={5}
            />
        </div>
    );
}

export default App;