// Тестовая страница для диагностики
function TestPage() {
  const info = {
    location: window.location.href,
    pathname: window.location.pathname,
    hash: window.location.hash,
    isTelegram: !!window.Telegram?.WebApp,
    telegramData: window.Telegram?.WebApp ? {
      version: window.Telegram.WebApp.version,
      platform: window.Telegram.WebApp.platform,
      initData: window.Telegram.WebApp.initData ? 'present' : 'missing'
    } : null
  }

  return (
    <div style={{
      padding: '20px',
      background: 'white',
      borderRadius: '10px',
      margin: '20px',
      maxWidth: '500px'
    }}>
      <h1>🔍 Диагностика</h1>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '10px', 
        borderRadius: '5px',
        fontSize: '12px',
        overflow: 'auto'
      }}>
        {JSON.stringify(info, null, 2)}
      </pre>
      <button 
        onClick={() => window.location.hash = '#/'}
        style={{
          padding: '10px 20px',
          background: '#6366F1',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginTop: '10px',
          cursor: 'pointer'
        }}
      >
        Перейти на главную
      </button>
    </div>
  )
}

export default TestPage

