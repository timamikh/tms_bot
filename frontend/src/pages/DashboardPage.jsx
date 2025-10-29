import { useState, useEffect } from 'react'
import './DashboardPage.css'

function DashboardPage() {
  const [shipments, setShipments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Заглушка - получение данных о рейсах
    const fetchShipments = async () => {
      setIsLoading(true)
      try {
        // В будущем здесь будет реальный API запрос
        const mockData = [
          {
            id: 1,
            number: 'TMS-2024-001',
            route: 'Москва → Санкт-Петербург',
            driver: 'Иванов Иван Иванович',
            truck: 'А123АА77',
            trailer: 'ВС456ВС77',
            container: 'MSCU1234567',
            seal: 'SL-789456',
            loadingDate: '30.10.2024 10:00',
            loadingPlace: 'Склад №5, г. Москва, ул. Промышленная, д. 10',
            status: 'В пути',
            statusColor: '#10b981'
          },
          {
            id: 2,
            number: 'TMS-2024-002',
            route: 'Екатеринбург → Новосибирск',
            driver: 'Петров Петр Петрович',
            truck: 'В789ВВ66',
            trailer: 'СМ123СМ66',
            container: 'TCLU9876543',
            seal: 'SL-123789',
            loadingDate: '30.10.2024 14:30',
            loadingPlace: 'Терминал "Восток", г. Екатеринбург, Объездная дорога, д. 25',
            status: 'Ожидает погрузки',
            statusColor: '#f59e0b'
          }
        ]
        
        setTimeout(() => {
          setShipments(mockData)
          setIsLoading(false)
        }, 800)
      } catch (error) {
        console.error('Error fetching shipments:', error)
        setIsLoading(false)
      }
    }

    fetchShipments()
  }, [])

  if (isLoading) {
    return (
      <div className="dashboard-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Загрузка рейсов...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>🚚 Активные рейсы</h1>
          <p className="subtitle">Система управления перевозками</p>
        </header>

        <div className="shipments-list">
          {shipments.map((shipment) => (
            <div key={shipment.id} className="shipment-card">
              <div className="card-header">
                <div className="card-title">
                  <h2>{shipment.number}</h2>
                  <span 
                    className="status-badge" 
                    style={{ backgroundColor: shipment.statusColor }}
                  >
                    {shipment.status}
                  </span>
                </div>
              </div>

              <div className="card-body">
                <div className="info-row route">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <span className="info-label">Маршрут</span>
                    <span className="info-value">{shipment.route}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">👤</div>
                  <div className="info-content">
                    <span className="info-label">Водитель</span>
                    <span className="info-value">{shipment.driver}</span>
                  </div>
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Тягач</span>
                    <span className="info-value">{shipment.truck}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Прицеп</span>
                    <span className="info-value">{shipment.trailer}</span>
                  </div>
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Контейнер</span>
                    <span className="info-value">{shipment.container}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Пломба</span>
                    <span className="info-value">{shipment.seal}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">🕐</div>
                  <div className="info-content">
                    <span className="info-label">Дата/время погрузки</span>
                    <span className="info-value">{shipment.loadingDate}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-icon">📦</div>
                  <div className="info-content">
                    <span className="info-label">Место погрузки</span>
                    <span className="info-value">{shipment.loadingPlace}</span>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button className="btn-details">Подробнее</button>
                <button className="btn-track">Отследить</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage

