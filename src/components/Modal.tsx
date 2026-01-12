import { useState } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
    const [hidden, setHidden] = useState(false);
    return (
        <>
            <button onClick={() => setHidden(true)}>
                Åbn Modal
            </button>
            {hidden && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "80vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    {children}
                    <button onClick={() => setHidden(false)} >
                            Luk
                        </button>
                </div>
            )}
        </>
    )
}

// Opgaven sagde intet med at det skulle se godt ud :shrug: