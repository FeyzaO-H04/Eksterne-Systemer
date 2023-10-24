import { LayoutBase } from "./pages/LayoutBase"
import { LandingPage } from "./pages/LandingPage"
import './App.css'
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutBase />} >
          <Route index element={<LandingPage />} />
          <Route path='*' element={<h1 className="not-found">404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}