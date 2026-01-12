import React from "react"
export function SendEnHilsen(){
    const [navn, setNavn] = React.useState("");
    return (
        <>
            <h1>Send en hilsen til {navn}</h1>
            <input
                type="text"
                value={navn}
                onChange={(e) => setNavn(e.target.value)}
                placeholder="Indtast navn"
            />
        </>
    )}