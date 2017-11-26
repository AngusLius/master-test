import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore'
import RouteMap from './router/routeMap'

import './static/css/common.less'
import './static/css/font.css'
// import RouterMap from "../../stage8-star-2/app/router/routeMap";

const store = configureStore()

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)

