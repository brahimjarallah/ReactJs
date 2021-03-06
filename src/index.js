import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import rootReducer from "./reducers"
import { Provider } from "react-redux"
import { createStore } from "redux"
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

reportWebVitals()
