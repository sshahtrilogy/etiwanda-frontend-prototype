import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Order {
  id: number
  waveNo: string
  poNumber: string
  shipTo: string
  status: string
}

const Orders: React.FC = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterBy, setFilterBy] = useState('All Columns')

  const orders: Order[] = [
    { id: 4, waveNo: 'WAVE-001', poNumber: 'PO-12345', shipTo: '123 Warehouse Street, NY', status: 'Pick Complete' },
    { id: 5, waveNo: '32', poNumber: 'sad', shipTo: '4e', status: 'Pick Complete' },
    { id: 6, waveNo: '2312', poNumber: 'ds', shipTo: 'dsafdfsf', status: 'Pick Release' },
    { id: 7, waveNo: 'dead', poNumber: 'sds', shipTo: 'asdas', status: 'Pick Complete' },
    { id: 8, waveNo: 'salsa', poNumber: 'sada', shipTo: 'sad sad', status: 'Pick Release' },
    { id: 9, waveNo: 'asdas', poNumber: 'dad', shipTo: '2213', status: 'Staged' },
  ]

  const handleViewDetails = (id: number) => {
    navigate(`/orders/${id}`)
  }

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <div className="logo">🚚</div>
          <div>
            <div className="company-name">Etiwanda Logistics</div>
            <div className="system-name">Order Management System</div>
          </div>
        </div>
        <div className="header-right">
          <span className="user-email">ritinbhardwaj339@gmail.com</span>
          <button className="btn btn-link">LOGOUT →</button>
        </div>
      </div>

      <div className="container">
        <div style={{ margin: '24px 0', fontSize: '20px', fontWeight: 700, textDecoration: 'underline' }}>
          ORDERS
        </div>

        <div className="search-filter-bar">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search all columns..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="filter-dropdown"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option>All Columns</option>
            <option>Wave No</option>
            <option>PO Number</option>
            <option>Status</option>
          </select>
          <button className="btn btn-primary">+ NEW ORDER</button>
        </div>

        <div className="table-container">
          <table className="table">
            <thead className="table-header">
              <tr>
                <th>ID ↑</th>
                <th>Wave No</th>
                <th>PO Number</th>
                <th>Ship To</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.waveNo}</td>
                  <td>{order.poNumber}</td>
                  <td>{order.shipTo}</td>
                  <td>{order.status}</td>
                  <td>
                    <div className="table-actions">
                      <button 
                        className="icon-btn" 
                        onClick={() => handleViewDetails(order.id)}
                      >
                        👁
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer">
        <div className="footer-logo">T</div>
        <span>Powered by Trilogy</span>
      </div>
    </div>
  )
}

export default Orders


