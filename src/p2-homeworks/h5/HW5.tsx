import React from 'react'
import Header from './Header'
import Routes2 from './Routes'
import {HashRouter} from "react-router-dom";





export const HW5 = () => {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes2/>

            </HashRouter>
        </div>
    )
}

