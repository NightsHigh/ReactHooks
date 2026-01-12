import {useState} from "react"

export function Counter(){
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Du har klikket på knappen {count} antal gange.</h1>
            <button
                onClick={() => setCount(count + 1)}
            >
                Klik Mig!
            </button>
            </>
    )
}