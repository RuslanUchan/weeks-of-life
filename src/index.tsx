import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(<App name="Uchan" diedAge={27} birth="July 18, 1997" />, document.getElementById(
  "root"
) as HTMLElement)
registerServiceWorker()
