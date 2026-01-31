import { useState } from "react";
import { Github } from "lucide-react";

const Hero = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Hero</h1>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <h1 className="font-bold underline">
                Hello world!
            </h1>
            <Github />
        </div>
    )
}

export default Hero