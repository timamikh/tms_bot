import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { initMiniApp } from '@telegram-apps/sdk'
import AuthPage from './pages/AuthPage'
import VerifyPage from './pages/VerifyPage'
import DashboardPage from './pages/DashboardPage'
import './App.css'

function App() {
  useEffect(() => {
    // Инициализация Telegram Mini App (только если запущено в Telegram)
    if (window.Telegram?.WebApp) {
      try {
        const [miniApp] = initMiniApp()
        miniApp.ready()
        miniApp.setHeaderColor('#6366F1')
        miniApp.setBackgroundColor('#F3F4F6')
        console.log('Telegram Mini App initialized')
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
      </Routes>
    </div>
  )
}

export default App

