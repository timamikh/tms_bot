# 🚀 Деплой на GitHub Pages

Ваше приложение настроено для автоматического деплоя на GitHub Pages!

## 📋 Что уже настроено

✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
✅ Vite конфигурация для GitHub Pages
✅ Автоматическая сборка при push в main
✅ HTTPS из коробки

## 🔧 Настройка (один раз)

### Шаг 1: Включите GitHub Pages в репозитории

1. Откройте: https://github.com/timamikh/tms_bot/settings/pages
2. В разделе **"Source"** выберите: **GitHub Actions**
3. Сохраните

### Шаг 2: Запустите деплой

Деплой запустится автоматически при следующем push в main, или запустите вручную:

1. Откройте: https://github.com/timamikh/tms_bot/actions
2. Выберите workflow **"Deploy to GitHub Pages"**
3. Нажмите **"Run workflow"** → **"Run workflow"**

### Шаг 3: Дождитесь завершения

- ⏳ Сборка займёт 1-2 минуты
- ✅ Когда появится зелёная галочка - готово!

## 🌐 URL вашего приложения

После деплоя ваше приложение будет доступно по адресу:

**https://timamikh.github.io/tms_bot/**

## 🤖 Настройка Telegram Bot

### 1. Откройте [@BotFather](https://t.me/BotFather)

### 2. Настройте Menu Button

```
/mybots
→ @Prospase_test_bot
→ Bot Settings
→ Menu Button
→ Configure menu button
```

### 3. Вставьте URL

```
https://timamikh.github.io/tms_bot/
```

### 4. Название кнопки

```
Открыть TMS
```

### 5. Готово! 🎉

BotFather ответит: "Success! Menu button configured."

## 📱 Тестирование

1. Откройте бота: https://t.me/Prospase_test_bot
2. Нажмите кнопку меню (☰)
3. Нажмите "Открыть TMS"
4. Приложение откроется из GitHub Pages!

## 🔄 Автоматическое обновление

Каждый раз когда вы делаете `git push` в main:

1. ✅ GitHub Actions автоматически запускается
2. ✅ Собирает Frontend
3. ✅ Деплоит на GitHub Pages
4. ✅ Приложение обновляется!

Просто пушьте код - всё остальное автоматически!

```bash
git add .
git commit -m "feat: add new feature"
git push
```

Через 1-2 минуты изменения будут на https://timamikh.github.io/tms_bot/

## 📊 Мониторинг деплоя

Следите за статусом: https://github.com/timamikh/tms_bot/actions

- 🟡 Жёлтый кружок = деплой в процессе
- ✅ Зелёная галочка = успешно
- ❌ Красный крестик = ошибка (смотрите логи)

## ⚙️ Технические детали

### Что происходит при деплое

1. **Checkout** - скачивается код из main
2. **Setup Node.js** - устанавливается Node.js 18
3. **Install dependencies** - `npm ci` в frontend
4. **Build** - `npm run build` (создаёт frontend/dist)
5. **Upload** - загружает dist на GitHub Pages
6. **Deploy** - публикует на https://timamikh.github.io/tms_bot/

### Конфигурация

- Workflow: `.github/workflows/deploy.yml`
- Vite base: `/tms_bot/` (название репозитория)
- Build output: `frontend/dist`
- Node version: 18

## 🐛 Troubleshooting

### Деплой не запускается

1. Проверьте что GitHub Pages включен в настройках
2. Убедитесь что выбран источник "GitHub Actions"
3. Проверьте есть ли разрешения у Actions

### 404 при открытии страниц

GitHub Pages настроен на SPA (Single Page Application):
- Главная страница: https://timamikh.github.io/tms_bot/
- React Router обрабатывает внутреннюю навигацию

### Старая версия не обновляется

1. Очистите кэш браузера
2. Или откройте в режиме инкогнито
3. GitHub Pages кэширует на 10 минут

### Ошибка Build failed

Проверьте логи Actions:
1. Откройте: https://github.com/timamikh/tms_bot/actions
2. Кликните на последний запуск
3. Посмотрите что пошло не так

## 🔐 Backend API

⚠️ **Важно**: GitHub Pages - это только статический хостинг (Frontend)

Для Backend нужен отдельный хостинг:

### Варианты для Backend:

1. **Render.com** (рекомендую)
   - Бесплатно для старта
   - Простой деплой из GitHub
   - https://render.com

2. **Railway.app**
   - $5/месяц, но очень удобно
   - https://railway.app

3. **Vercel Serverless**
   - Бесплатный tier
   - https://vercel.com

### Настройка API URL

После деплоя Backend, обновите в Frontend:

```javascript
// В AuthPage.jsx, VerifyPage.jsx, DashboardPage.jsx
// Замените '/api/...' на полный URL:
fetch('https://your-backend.onrender.com/api/auth/send-code', ...)
```

Или создайте `.env` файл:
```env
VITE_API_URL=https://your-backend.onrender.com
```

## ✨ Преимущества GitHub Pages

- ✅ **Бесплатно** навсегда
- ✅ **HTTPS** из коробки
- ✅ **CDN** - быстрая загрузка по всему миру
- ✅ **Надёжно** - 99.9% uptime
- ✅ **Автоматический деплой** при push
- ✅ **Нет лимитов** на трафик для публичных репо
- ✅ **Custom domain** (опционально)

## 🎯 Custom Domain (опционально)

Если хотите свой домен (например: tms.yourdomain.com):

1. Купите домен
2. Добавьте CNAME запись: `tms` → `timamikh.github.io`
3. В настройках репо добавьте custom domain
4. GitHub автоматически настроит SSL

Подробнее: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## 📚 Дополнительные ресурсы

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

## 🎉 Итого

Теперь у вас:

- ✅ Автоматический деплой на каждый push
- ✅ Стабильный HTTPS URL
- ✅ Не нужны туннели (ngrok, localtunnel)
- ✅ Работает 24/7
- ✅ Бесплатно

**Просто пушьте код - приложение обновится автоматически!** 🚀

---

**URL приложения**: https://timamikh.github.io/tms_bot/

**Настройка бота**: Вставьте этот URL в BotFather

**Last Updated**: 30-10-2025

