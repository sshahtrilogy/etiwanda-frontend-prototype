import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const [email, setEmail] = useState('ritinbhardwaj339@gmail.com')
  const [password, setPassword] = useState('')
  const [showSuccess, setShowSuccess] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/orders')
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '32px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="logo" style={{ margin: '0 auto 16px' }}>🚚</div>
        <div>
          <div className="company-name">Etiwanda Logistics</div>
          <div className="system-name">Order Management System</div>
        </div>
      </div>

      <div style={{ 
        width: '100%', 
        maxWidth: '400px', 
        background: 'white', 
        borderRadius: '16px', 
        padding: '32px', 
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)' 
      }}>
        <div className="nav-tabs">
          <button className="nav-tab active">LOGIN</button>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button className="nav-tab">SIGN UP</button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
          <div className="input-group">
            <label className="input-label">Email*</label>
            <input 
              type="email" 
              className="input-field" 
              placeholder="Email*" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password*</label>
            <input 
              type="password" 
              className="input-field" 
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {showSuccess && (
            <div className="input-group">
              <div className="success-message">
                ✔ Password reset successfully! Please log in with your new password.
              </div>
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            SIGN IN
          </button>
        </form>
      </div>

      <div className="footer">
        <div className="footer-logo">T</div>
        <span>Powered by Trilogy</span>
      </div>
    </div>
  )
}

export default Login


