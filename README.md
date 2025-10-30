# TMS Bot - Telegram Mini App для Системы Управления Перевозками

Telegram Mini App для управления транспортными перевозками с интуитивным интерфейсом.

## 🌐 Живая версия

**Production**: https://timamikh.github.io/tms_bot/#

**Telegram Bot**: https://t.me/Prospase_test_bot

✅ Работает в Telegram Mini App  
✅ Адаптивный дизайн  
✅ 3 страницы: авторизация, верификация, дашборд  
✅ Автоматический деплой при каждом push

## Структура проекта

```
tms_bot/
├── frontend/          # React + Vite приложение
├── backend/           # Nest.js API сервер
└── README.md
```

## Технологии

- **Frontend**: React 18, Vite, React Router, Telegram Mini App SDK
- **Backend**: Nest.js, TypeScript
- **Bot**: Telegram Bot API

## Требования

- Node.js (версия 18 или выше)
- npm или yarn
- Telegram аккаунт для тестирования

## Быстрый старт

🚀 **Деплой на GitHub Pages**: [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md) - Рекомендуется!

📚 **Для локальной разработки**: [QUICKSTART.md](./QUICKSTART.md)

📖 **Полная инструкция по настройке бота**: [SETUP_BOT.md](./SETUP_BOT.md)

## 📦 Версия

**Текущая версия**: 1.0.0 (Production Ready)

См. [CHANGELOG.md](./CHANGELOG.md) для полной истории изменений

## Установка

### 1. Установите зависимости для Frontend

```bash
cd frontend
npm install
```

### 2. Установите зависимости для Backend

```bash
cd backend
npm install
```

## Запуск проекта

### Разработка

Запустить Frontend и Backend одновременно:

```bash
npm run dev
```

Или запустить отдельно:

```bash
# Frontend (будет доступен на http://localhost:5173)
npm run dev:frontend

# Backend (будет доступен на http://localhost:3000)
npm run dev:backend
```

### Production Build

```bash
npm run build:frontend
npm run build:backend
```

## Настройка Telegram Bot

### Информация о боте

- **Бот**: @Prospase_test_bot
- **Token**: `8406287846:AAEDeB5cOzsRrvCCMunzUHGqNI8W_LkwhnE`

### Шаги настройки Mini App

1. Откройте [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/mybots`
3. Выберите ваш бот (@Prospase_test_bot)
4. Выберите "Bot Settings" → "Menu Button"
5. Выберите "Configure menu button"
6. Введите URL вашего приложения:
   - Для разработки: `https://your-ngrok-url.ngrok.io`
   - Для production: `https://your-domain.com`
7. Введите название кнопки (например: "Открыть TMS")

### Вариант 1: Деплой на GitHub Pages (Рекомендуется)

1. Включите GitHub Pages: https://github.com/timamikh/tms_bot/settings/pages
2. Выберите источник: **GitHub Actions**
3. Запустите workflow: https://github.com/timamikh/tms_bot/actions
4. Используйте URL: `https://timamikh.github.io/tms_bot/` в BotFather

Подробнее: [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md)

### Вариант 2: Локальная разработка с туннелем

См. [TUNNEL_ALTERNATIVES.md](./TUNNEL_ALTERNATIVES.md) для альтернатив ngrok

## Структура страниц

### 1. Авторизация (`/`)
- Поле для ввода номера телефона
- Кнопка "Отправить код"

### 2. Верификация (`/verify`)
- Поле для ввода кода подтверждения
- Кнопки: "Отправить", "Отправить код повторно", "Назад"

### 3. Дашборд (`/dashboard`)
- Список рейсов с информацией:
  - Номер перевозки
  - Маршрут
  - ФИО водителя
  - Номер тягача/прицепа
  - Номер контейнера
  - Номер пломбы
  - Дата/время погрузки
  - Место погрузки

## API Endpoints (заглушки)

- `POST /api/auth/send-code` - Отправка кода подтверждения
- `POST /api/auth/verify-code` - Верификация кода
- `GET /api/shipments` - Получение списка рейсов

## Разработка

Backend использует порт `3000`, Frontend использует порт `5173`.
Frontend проксирует API запросы на Backend через Vite proxy.

## Безопасность

⚠️ **ВАЖНО**: Не публикуйте Bot Token в публичных репозиториях!
- Храните токен в переменных окружения
- Используйте `.env` файлы (они уже добавлены в `.gitignore`)

**Last Updated**: 29-10-2025

