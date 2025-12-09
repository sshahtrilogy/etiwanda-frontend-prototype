import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Orders from './pages/Orders'
import OrderDetails from './pages/OrderDetails'
import ResetPassword from './pages/ResetPassword'
import VerifyOTP from './pages/VerifyOTP'
import SetPassword from './pages/SetPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/set-password" element={<SetPassword />} />
      </Routes>
    </Router>
  )
}

export default App


