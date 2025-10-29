import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AuthPage.css'

function AuthPage() {
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!phone) {
      alert('Пожалуйста, введите номер телефона')
      return
    }

    setIsLoading(true)
    
    try {
      // Заглушка API - в будущем здесь будет реальный запрос
      await fetch('/api/auth/send-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      })
      
      // Переход на страницу верификации
      setTimeout(() => {
        navigate('/verify', { state: { phone } })
      }, 500)
    } catch (error) {
      console.error('Error sending code:', error)
      alert('Произошла ошибка. Попробуйте снова.')
    } finally {
      setIsLoading(false)
    }
  }

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '')
    return cleaned
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>🚚 TMS</h1>
          <p>Система управления перевозками</p>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="phone">Введите номер телефона</label>
            <input
              id="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
              className="form-input"
              disabled={isLoading}
              maxLength={15}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary"
            disabled={isLoading}
          >
            {isLoading ? 'Отправка...' : 'Отправить код'}
          </button>
        </form>
        
        <div className="auth-footer">
          <p className="help-text">
            На указанный номер будет отправлен код подтверждения
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthPage

