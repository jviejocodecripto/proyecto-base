import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeBody } from './components/HomeBody'
import { Home } from './Home'
export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<HomeBody></HomeBody>}></Route>
                <Route path="/contact" element="contactar"></Route>
                <Route path="/whoami" element="nosotros"></Route>
                <Route path="*" element="not found"></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}