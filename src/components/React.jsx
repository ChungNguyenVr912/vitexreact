import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

function React() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex justify-center items-center">
            <div className="items-center text-center">
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo box-content inline" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react box-content inline" alt="React logo"/>
                    </a>
                </div>
                <h1>React</h1>
                <div className="card">
                    <div className="card-background">
                    </div>
                    <div className="button-wrap">
                        <button onClick={() => setCount((count) => count + 1)}>
                            count is {count}
                        </button>
                    </div>
                </div>
                <p className="read-the-docs">
                    Click on the React logo to learn more
                </p></div>
        </div>
    )
}

export default React
