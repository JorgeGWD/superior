import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageWrapper from './components/commons/page-wrapper/page-wrapper'

function App() {

    return (
        <>
            <BrowserRouter>
                <PageWrapper />
            </BrowserRouter>
        </>
    )
}

export default App
