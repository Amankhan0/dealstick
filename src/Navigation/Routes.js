import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../WebView/Home/Home'

export default function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
        </Routes>
    )
}
