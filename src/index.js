import React from "react"
import ReactDom from "react-dom"
import App from "./component/App"
import "./css/style.css"
import store from "./Store/index"
import {Provider} from "react-redux"
ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
)