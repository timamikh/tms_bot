import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './VerifyPage.css'

function VerifyPage() {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isResending, setIsResending] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const phone = location.state?.phone || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!code || code.length < 4) {
      alert('Пожалуйста, введите код подтверждения')
      return
    }

    setIsLoading(true)
    
    try {
      // Заглушка API - в будущем здесь будет реальный запрос
      await fetch('/api/auth/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, code }),
      })
      
      // Переход на дашборд
      setTimeout(() => {
        navigate('/dashboard')
      }, 500)
    } catch (error) {
      console.error('Error verifying code:', error)
      alert('Неверный код. Попробуйте снова.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsResending(true)
    
    try {
      // Заглушка API
      await fetch('/api/auth/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      })
      
      alert('Код отправлен повторно')
    } catch (error) {
      console.error('Error resending code:', error)
      alert('Ошибка при повторной отправке кода')
    } finally {
      setIsResending(false)
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="verify-container">
      <div className="verify-card">
        <div className="verify-header">
          <h1>🔐 Верификация</h1>
          <p>Введите код, который был отправлен на номер</p>
          {phone && <p className="phone-number">+{phone}</p>}
        </div>
        
        <form onSubmit={handleSubmit} className="verify-form">
          <div className="form-group">
            <label htmlFor="code">Код подтверждения</label>
            <input
              id="code"
              type="text"
              placeholder="XXXX"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="form-input code-input"
              disabled={isLoading}
              maxLength={6}
              autoFocus
            />
          </div>
          
          <div className="button-group">
            <button 
              type="submit" 
              className="btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Проверка...' : 'Отправить'}
            </button>
            
            <button 
              type="button" 
              className="btn-secondary"
              onClick={handleResendCode}
              disabled={isResending || isLoading}
            >
              {isResending ? 'Отправка...' : 'Отправить код повторно'}
            </button>
            
            <button 
              type="button" 
              className="btn-link"
              onClick={handleBack}
              disabled={isLoading}
            >
              ← Назад
            </button>
          </div>
        </form>
        
        <div className="verify-footer">
          <p className="help-text">
            Код действителен в течение 5 минут
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerifyPage

