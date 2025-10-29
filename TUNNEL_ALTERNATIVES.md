# 🌐 Альтернативы ngrok для России

Если ngrok недоступен, используйте эти альтернативы для создания публичного URL.

## ⚡ Вариант 1: LocalTunnel (Самый простой)

### Установка
```bash
npm install -g localtunnel
```

### Использование
```bash
# Запустите Frontend на порту 5173
cd frontend
npm run dev

# В новом терминале:
lt --port 5173
```

**Результат**: Получите URL типа `https://funny-cat-12.loca.lt`

При первом открытии может попросить нажать кнопку "Continue" - это нормально.

### Фиксированный subdomain (опционально)
```bash
lt --port 5173 --subdomain mytmsbot
```
Получите: `https://mytmsbot.loca.lt`

---

## 🔵 Вариант 2: Cloudflare Tunnel (Рекомендуется)

### Установка

#### Windows
1. Скачайте: https://github.com/cloudflare/cloudflared/releases/latest
2. Найдите `cloudflared-windows-amd64.exe`
3. Скачайте и переименуйте в `cloudflared.exe`
4. Поместите в `C:\Windows\System32\` или добавьте в PATH

#### Или через Chocolatey
```bash
choco install cloudflared
```

### Использование
```bash
cloudflared tunnel --url http://localhost:5173
```

**Результат**: Получите URL типа `https://random-words-123.trycloudflare.com`

**Преимущества**:
- ✅ Быстро и стабильно
- ✅ Работает в России
- ✅ Не требует регистрации
- ✅ Поддерживает WebSocket

---

## 🔑 Вариант 3: Serveo (через SSH)

### Использование (без установки!)
```bash
ssh -R 80:localhost:5173 serveo.net
```

**Результат**: Получите URL в консоли

### С custom subdomain
```bash
ssh -R mytmsbot:80:localhost:5173 serveo.net
```
Получите: `https://mytmsbot.serveo.net`

**Преимущества**:
- ✅ Не требует установки
- ✅ Работает через SSH
- ✅ Поддержка custom subdomain

**Примечание**: Нужен SSH клиент (на Windows 10/11 уже встроен)

---

## 🌍 Вариант 4: localhost.run (через SSH)

### Использование
```bash
ssh -R 80:localhost:5173 nokey@localhost.run
```

**Результат**: URL появится в консоли

**Преимущества**:
- ✅ Не требует установки
- ✅ Не требует ключи SSH
- ✅ Быстрая настройка

---

## 🎯 Вариант 5: Tailscale Funnel (для постоянного использования)

### Установка
1. Скачайте Tailscale: https://tailscale.com/download
2. Установите и авторизуйтесь

### Использование
```bash
tailscale funnel 5173
```

**Преимущества**:
- ✅ Стабильное постоянное соединение
- ✅ Высокая безопасность
- ✅ Работает в России

---

## 📊 Сравнение

| Сервис | Установка | Скорость | Стабильность | Custom Domain |
|--------|-----------|----------|--------------|---------------|
| **LocalTunnel** | npm | ⚡⚡⚡ | ⭐⭐ | ✅ |
| **Cloudflare** | Скачать | ⚡⚡⚡⚡ | ⭐⭐⭐⭐ | ❌ |
| **Serveo** | Нет | ⚡⚡⚡ | ⭐⭐⭐ | ✅ |
| **localhost.run** | Нет | ⚡⚡⚡ | ⭐⭐⭐ | ❌ |
| **Tailscale** | Скачать | ⚡⚡⚡⚡ | ⭐⭐⭐⭐⭐ | ✅ |

---

## 🤖 Настройка Telegram Bot

После получения публичного URL:

### 1. Откройте [@BotFather](https://t.me/BotFather) в Telegram

### 2. Настройте Menu Button
```
/mybots
→ Выберите @Prospase_test_bot
→ Bot Settings
→ Menu Button
→ Configure menu button
```

### 3. Вставьте ваш URL
Например:
- `https://funny-cat-12.loca.lt` (LocalTunnel)
- `https://random-123.trycloudflare.com` (Cloudflare)
- `https://mytmsbot.serveo.net` (Serveo)

### 4. Введите название кнопки
```
Открыть TMS
```
или
```
Перевозки
```

### 5. Готово!
BotFather ответит: "Success! Menu button configured."

---

## 🧪 Тестирование

1. Откройте бота: https://t.me/Prospase_test_bot
2. Нажмите кнопку меню (☰) внизу
3. Нажмите "Открыть TMS"
4. Должно открыться ваше приложение!

---

## 🛠️ Troubleshooting

### LocalTunnel показывает "Click Continue"

Это нормально. При первом посещении lt показывает предупреждение. Нажмите "Continue".

Чтобы избежать этого в Telegram, используйте custom subdomain:
```bash
lt --port 5173 --subdomain mytmsbot
```

### Cloudflare Tunnel: "ERR_CONNECTION_REFUSED"

Убедитесь что:
1. Frontend запущен на порту 5173
2. URL начинается с `http://localhost:5173` (не https)
3. Не используете VPN одновременно с cloudflared

### SSH туннели: "Permission denied"

Убедитесь что SSH клиент установлен:
```bash
ssh -V
```

Если нет, установите:
```bash
# Windows (через PowerShell от администратора)
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
```

### Telegram не открывает приложение

1. Проверьте что URL HTTPS (не HTTP)
2. Очистите кэш Telegram: Settings → Data and Storage → Clear Cache
3. Попробуйте открыть URL в браузере сначала
4. Убедитесь что туннель запущен

---

## 💡 Рекомендации

### Для разработки
**LocalTunnel** или **Cloudflare Tunnel** - быстро и просто

### Для демонстрации клиентам
**Cloudflare Tunnel** - стабильно и без лишних страниц

### Для постоянного использования
**Tailscale Funnel** - надежно и безопасно

### Для быстрого теста (без установки)
**Serveo** или **localhost.run** - работает через SSH

---

## 🔒 Безопасность

⚠️ **Важно**: Эти туннели делают ваш локальный сервер доступным из интернета!

**Рекомендации**:
- Используйте только для разработки
- Не храните реальные данные пользователей
- Не используйте production API ключи
- Останавливайте туннель когда не используете

---

## 📚 Дополнительные ссылки

- [LocalTunnel GitHub](https://github.com/localtunnel/localtunnel)
- [Cloudflare Tunnel Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
- [Serveo Documentation](https://serveo.net/)
- [Tailscale Funnel](https://tailscale.com/kb/1223/tailscale-funnel/)

---

**Last Updated**: 29-10-2025

**Полезные файлы**:
- [QUICKSTART.md](./QUICKSTART.md) - быстрый старт
- [SETUP_BOT.md](./SETUP_BOT.md) - детальная настройка бота
- [README.md](./README.md) - основная документация

