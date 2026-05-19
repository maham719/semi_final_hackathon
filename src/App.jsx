import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import UserDashboard from "./pages/UserDashboard.jsx"
import PublicRoute from "./components/PublicRoute.jsx"
import Notes from "./pages/Notes.jsx"
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
    <Route path="/register" element={<PublicRoute><Signup/></PublicRoute>}/>
    <Route path="/" element={<UserDashboard/>}/>
    <Route path="/notes" element={<Notes/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
