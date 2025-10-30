import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import VerifyPage from './pages/VerifyPage'
import DashboardPage from './pages/DashboardPage'
import './App.css'

function App() {
  useEffect(() => {
    // Инициализация Telegram Mini App (используем нативный API)
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      
      try {
        tg.ready()
        tg.expand()
        
        // Настройка цветов
        tg.setHeaderColor('#6366F1')
        tg.setBackgroundColor('#F3F4F6')
        
        console.log('Telegram Mini App initialized', {
          version: tg.version,
          platform: tg.platform,
        })
      } catch (error) {
        console.error('Failed to initialize Telegram Mini App:', error)
      }
    } else {
      console.log('Running in browser mode (not in Telegram)')
    }
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Fallback для неизвестных маршрутов */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App

