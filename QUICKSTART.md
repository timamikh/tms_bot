# 🚀 Быстрый старт - TMS Bot

## Минимальные шаги для запуска

### 1. Установка зависимостей

```bash
# Установка зависимостей Frontend
cd frontend
npm install

# Установка зависимостей Backend
cd ../backend
npm install
```

### 2. Запуск приложения

Откройте **2 терминала**:

**Терминал 1 - Frontend**:
```bash
cd frontend
npm run dev
```
✅ Frontend: http://localhost:5173

**Терминал 2 - Backend**:
```bash
cd backend
npm run start:dev
```
✅ Backend: http://localhost:3000

### 3. Настройка ngrok для Telegram

```bash
# Установите ngrok: https://ngrok.com/download
ngrok http 5173
```

Скопируйте HTTPS URL (например: `https://xxxx-xx-xx.ngrok-free.app`)

### 4. Настройка бота в Telegram

1. Откройте [@BotFather](https://t.me/BotFather)
2. Отправьте: `/mybots`
3. Выберите: `@Prospase_test_bot`
4. Bot Settings → Menu Button → Configure menu button
5. Вставьте URL из ngrok
6. Название кнопки: `Открыть TMS`

### 5. Тестирование

Откройте бота: https://t.me/Prospase_test_bot

Нажмите кнопку меню (☰) → "Открыть TMS"

## Готово! 🎉

Подробная инструкция: см. [SETUP_BOT.md](./SETUP_BOT.md)

