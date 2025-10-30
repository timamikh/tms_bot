import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import VerifyPage from './pages/VerifyPage'
import DashboardPage from './pages/DashboardPage'
import TestPage from './pages/TestPage'
import './App.css'

function App() {
  const location = useLocation()
  const [debugInfo, setDebugInfo] = useState('')

  useEffect(() => {
    // Диагностика
    const info = {
      pathname: location.pathname,
      hash: window.location.hash,
      fullUrl: window.location.href,
      isTelegram: !!window.Telegram?.WebApp,
      timestamp: new Date().toISOString()
    }
    setDebugInfo(JSON.stringify(info, null, 2))
    console.log('🔍 App Debug Info:', info)

    // Инициализация Telegram Mini App (используем нативный API)
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      
      try {
        tg.ready()
        tg.expand()
        
        // Настройка цветов
        tg.setHeaderColor('#6366F1')
        tg.setBackgroundColor('#F3F4F6')
        
        console.log('✅ Telegram Mini App initialized', {
          version: tg.version,
          platform: tg.platform,
        })
      } catch (error) {
        console.error('❌ Failed to initialize Telegram Mini App:', error)
      }
    } else {
      console.log('🌐 Running in browser mode (not in Telegram)')
    }
  }, [location])

  return (
    <div className="app">
      {/* Временная диагностическая информация - видна только в dev */}
      {import.meta.env.DEV && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          fontSize: '10px',
          zIndex: 9999,
          maxHeight: '100px',
          overflow: 'auto'
        }}>
          <pre>{debugInfo}</pre>
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/test" element={<TestPage />} />
        {/* Fallback для неизвестных маршрутов */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App

