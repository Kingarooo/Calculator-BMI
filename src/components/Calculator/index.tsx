    import { useState, useEffect } from "react";
    import { evaluate } from "mathjs";
    import './style.css';

    function Calculator(): JSX.Element {
        const [conta, setConta] = useState("");


        function handleButtonClick(value: string) {
            setConta((prev) => {
                // Se for igual o mathjs resolve a conta
                if (value === "=") {
                    try {
                        const result = evaluate(prev);
                        return result.toString();
                    } catch {
                        return "Error";
                    }
                }
                //Senão aumento a string
                return prev + value;
            });
        }


        useEffect(() => {
            function handleKeyPress(event: KeyboardEvent) {
                if (event.key === "Backspace") {
                    setConta((prev) => prev.slice(0, -1));
                } else if (/^[0-9+\-*/.()]$/.test(event.key)) {
                    setConta((prev) => prev + event.key);
                } else if (event.key === "Enter") {
                    setConta((prev) => {
                        try {
                            const result = evaluate(prev);
                            return result.toString();
                        } catch {
                            return "Error";
                        }
                    });
                }
            }
            window.addEventListener("keydown", handleKeyPress);

            return () => {
                window.removeEventListener("keydown", handleKeyPress);
            };
        }, []);


        const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

        return (
            <div className="calculator-container">
                <div className="grid">
                    <div className="grid-row display">{conta || "0"}</div>
                    {buttons.map((item) => (
                        <div
                            key={item}
                            className="grid-item"
                            onClick={() => handleButtonClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    export default Calculator;
