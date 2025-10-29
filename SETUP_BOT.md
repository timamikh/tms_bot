# Инструкция по настройке Telegram Mini App

## Информация о боте

- **Имя бота**: @Prospase_test_bot
- **Bot Token**: `8406287846:AAEDeB5cOzsRrvCCMunzUHGqNI8W_LkwhnE`

⚠️ **ВАЖНО**: Не делитесь токеном бота! Храните его в безопасности.

## Шаг 1: Настройка для локальной разработки

### Установка ngrok

1. Скачайте ngrok с официального сайта: https://ngrok.com/download
2. Распакуйте архив
3. (Опционально) Зарегистрируйтесь на ngrok.com и получите authtoken для стабильных URL

### Запуск локального сервера

Откройте 2 терминала:

**Терминал 1 - Frontend**:
```bash
cd frontend
npm run dev
```
Frontend будет доступен на `http://localhost:5173`

**Терминал 2 - Backend**:
```bash
cd backend
npm run start:dev
```
Backend будет доступен на `http://localhost:3000`

### Запуск ngrok

Откройте 3-й терминал и запустите:
```bash
ngrok http 5173
```

Вы увидите что-то вроде:
```
Forwarding   https://xxxx-xx-xx-xxx-xxx.ngrok-free.app -> http://localhost:5173
```

Скопируйте HTTPS URL (например: `https://xxxx-xx-xx-xxx-xxx.ngrok-free.app`)

## Шаг 2: Настройка Mini App в BotFather

1. Откройте Telegram и найдите [@BotFather](https://t.me/BotFather)

2. Отправьте команду:
   ```
   /mybots
   ```

3. Выберите вашего бота: `@Prospase_test_bot`

4. Нажмите **"Bot Settings"**

5. Нажмите **"Menu Button"**

6. Нажмите **"Configure menu button"**

7. Отправьте **URL вашего приложения**:
   - Для разработки: вставьте URL из ngrok (например: `https://xxxx-xx-xx-xxx-xxx.ngrok-free.app`)
   - Для production: вставьте ваш домен

8. Отправьте **название кнопки**:
   ```
   Открыть TMS
   ```
   или
   ```
   Перевозки
   ```

9. BotFather подтвердит: "Success! Menu button configured."

## Шаг 3: Тестирование Mini App

1. Откройте бота в Telegram: https://t.me/Prospase_test_bot

2. Нажмите кнопку **"Menu"** (☰) в поле ввода сообщений

3. Нажмите на кнопку **"Открыть TMS"** или как вы её назвали

4. Откроется ваше Mini App!

## Структура приложения

### Страница 1: Авторизация (/)
- Поле для ввода номера телефона
- Кнопка "Отправить код"
- При нажатии → переход на страницу верификации

### Страница 2: Верификация (/verify)
- Поле для ввода кода подтверждения
- Три кнопки: "Отправить", "Отправить код повторно", "Назад"
- При успешной верификации → переход на дашборд

### Страница 3: Дашборд (/dashboard)
- Список активных рейсов с полной информацией
- Отображаются 2 тестовых рейса

## API Endpoints (текущие заглушки)

- `POST /api/auth/send-code` - Отправка кода подтверждения
  ```json
  {
    "phone": "79991234567"
  }
  ```

- `POST /api/auth/verify-code` - Верификация кода
  ```json
  {
    "phone": "79991234567",
    "code": "1234"
  }
  ```

- `GET /api/shipments` - Получение списка рейсов

## Команды для разработки

### Запуск Frontend
```bash
cd frontend
npm run dev
```

### Запуск Backend
```bash
cd backend
npm run start:dev
```

### Запуск обоих одновременно (из корня проекта)
```bash
npm run dev
```

### Билд для production

**Frontend**:
```bash
cd frontend
npm run build
```
Результат будет в `frontend/dist/`

**Backend**:
```bash
cd backend
npm run build
```
Результат будет в `backend/dist/`

## Деплой на production

### Вариант 1: Vercel (для Frontend) + Railway (для Backend)

**Frontend на Vercel**:
1. Зарегистрируйтесь на https://vercel.com
2. Подключите GitHub репозиторий
3. Укажите директорию: `frontend`
4. Vercel автоматически определит Vite

**Backend на Railway**:
1. Зарегистрируйтесь на https://railway.app
2. Создайте новый проект из GitHub
3. Укажите директорию: `backend`
4. Добавьте переменные окружения
5. Railway автоматически определит Nest.js

### Вариант 2: VPS (DigitalOcean, AWS, etc.)

1. Установите Node.js на сервер
2. Клонируйте репозиторий
3. Настройте Nginx как reverse proxy
4. Используйте PM2 для запуска приложений
5. Настройте SSL сертификат (Let's Encrypt)

### После деплоя

1. Получите production URL вашего frontend
2. Откройте [@BotFather](https://t.me/BotFather)
3. Обновите URL Mini App на production URL
4. Готово!

## Troubleshooting

### Проблема: Mini App не открывается

**Решение**:
- Проверьте, что ngrok запущен
- Проверьте, что frontend запущен на порту 5173
- Проверьте URL в BotFather - он должен быть HTTPS
- Попробуйте очистить кэш Telegram (Settings → Data and Storage → Clear Cache)

### Проблема: API запросы не работают

**Решение**:
- Проверьте, что backend запущен на порту 3000
- Проверьте настройки CORS в `backend/src/main.ts`
- Проверьте консоль браузера на ошибки
- Проверьте proxy настройки в `frontend/vite.config.js`

### Проблема: Telegram SDK не инициализируется

**Решение**:
- Убедитесь, что приложение открыто через Telegram, а не напрямую в браузере
- Проверьте консоль на ошибки инициализации
- Для тестирования вне Telegram используйте Telegram Web или Desktop

## Дополнительные ресурсы

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [BotFather Commands](https://core.telegram.org/bots#botfather)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Vite Documentation](https://vitejs.dev/)
- [Nest.js Documentation](https://docs.nestjs.com/)

## Следующие шаги

1. ✅ Настроить Mini App в BotFather
2. ✅ Протестировать все страницы
3. 🔄 Подключить реальное API вместо заглушек
4. 🔄 Добавить аутентификацию через Telegram
5. 🔄 Добавить базу данных
6. 🔄 Реализовать отправку SMS кодов
7. 🔄 Добавить больше функционала для управления рейсами

**Last Updated**: 29-10-2025

---

**Контакты для поддержки**:
- Repository: https://github.com/timamikh/tms_bot
- Bot: @Prospase_test_bot

