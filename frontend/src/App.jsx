import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeBody } from './components/HomeBody'
import { NetworkList } from './components/NetworkList'
import { NuevaRed } from './components/NuevaRed'
import { Home } from './Home'
import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient();
export const App = () => {
    return <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<HomeBody></HomeBody>}></Route>
                    <Route path="/contact" element="contactar"></Route>
                    <Route path="/whoami" element="nosotros"></Route>
                    <Route path="/networkList" element={<NetworkList />}></Route>
                    <Route path="/nuevaRed" element={<NuevaRed />}></Route>
                    <Route path="*" element="not found"></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
}