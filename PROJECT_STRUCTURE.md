# Структура проекта TMS Bot

```
tms_bot/
│
├── frontend/                      # React приложение
│   ├── public/
│   │   └── vite.svg              # Иконка Vite
│   │
│   ├── src/
│   │   ├── pages/                # Страницы приложения
│   │   │   ├── AuthPage.jsx      # Страница авторизации
│   │   │   ├── AuthPage.css
│   │   │   ├── VerifyPage.jsx    # Страница верификации
│   │   │   ├── VerifyPage.css
│   │   │   ├── DashboardPage.jsx # Дашборд с рейсами
│   │   │   └── DashboardPage.css
│   │   │
│   │   ├── App.jsx               # Главный компонент
│   │   ├── App.css
│   │   ├── main.jsx              # Точка входа
│   │   └── index.css             # Глобальные стили
│   │
│   ├── index.html                # HTML шаблон
│   ├── vite.config.js            # Конфигурация Vite
│   ├── package.json              # Зависимости Frontend
│   └── .gitignore
│
├── backend/                       # Nest.js API сервер
│   ├── src/
│   │   ├── auth/                 # Модуль авторизации
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.module.ts
│   │   │
│   │   ├── shipments/            # Модуль рейсов
│   │   │   ├── shipments.controller.ts
│   │   │   ├── shipments.service.ts
│   │   │   └── shipments.module.ts
│   │   │
│   │   ├── app.controller.ts     # Главный контроллер
│   │   ├── app.service.ts
│   │   ├── app.module.ts         # Главный модуль
│   │   └── main.ts               # Точка входа
│   │
│   ├── test/                      # E2E тесты
│   │   ├── app.e2e-spec.ts
│   │   └── jest-e2e.json
│   │
│   ├── nest-cli.json             # Конфигурация Nest CLI
│   ├── tsconfig.json             # TypeScript конфигурация
│   ├── tsconfig.build.json
│   ├── eslint.config.mjs         # ESLint конфигурация
│   ├── package.json              # Зависимости Backend
│   ├── env.example               # Пример переменных окружения
│   └── README.md
│
├── .vscode/                       # VS Code настройки
│   ├── settings.json
│   └── extensions.json
│
├── node_modules/                  # Зависимости (игнорируется Git)
│
├── .gitignore                     # Игнорируемые файлы Git
├── .gitattributes                 # Git атрибуты
│
├── package.json                   # Корневой package.json
├── package-lock.json
│
├── README.md                      # Основная документация
├── QUICKSTART.md                  # Быстрый старт
├── SETUP_BOT.md                   # Настройка Telegram бота
├── DESIGN.md                      # Описание дизайна
├── TODO.md                        # Список задач
├── CONTRIBUTING.md                # Гайд для контрибьюторов
└── PROJECT_STRUCTURE.md           # Этот файл
```

## Описание директорий

### Frontend (`/frontend`)

**Технологии**: React 18, Vite, React Router, Telegram Mini App SDK

**Основные файлы**:
- `src/main.jsx` - инициализация React приложения
- `src/App.jsx` - роутинг и инициализация Telegram SDK
- `src/pages/` - страницы приложения (Auth, Verify, Dashboard)
- `vite.config.js` - настройки Vite, включая proxy для API

**Порт**: 5173 (dev)

### Backend (`/backend`)

**Технологии**: Nest.js, TypeScript

**Основные модули**:
- `auth/` - авторизация и верификация
- `shipments/` - управление рейсами
- `main.ts` - конфигурация CORS и запуск сервера

**Порт**: 3000 (dev)

**API Endpoints**:
- `POST /api/auth/send-code` - отправка кода
- `POST /api/auth/verify-code` - проверка кода
- `GET /api/shipments` - список рейсов

## Документация

1. **README.md** - основная информация о проекте
2. **QUICKSTART.md** - быстрый старт за 5 минут
3. **SETUP_BOT.md** - детальная настройка Telegram бота
4. **DESIGN.md** - описание дизайна и UI/UX
5. **TODO.md** - roadmap развития проекта
6. **CONTRIBUTING.md** - правила участия в разработке
7. **PROJECT_STRUCTURE.md** - структура проекта

## Конфигурационные файлы

### Frontend
- `vite.config.js` - Vite bundler
- `package.json` - зависимости и скрипты

### Backend
- `nest-cli.json` - Nest.js CLI
- `tsconfig.json` - TypeScript
- `eslint.config.mjs` - линтер
- `env.example` - переменные окружения

### Общие
- `.gitignore` - игнорируемые файлы
- `.gitattributes` - Git настройки
- `.vscode/` - настройки редактора

## Скрипты

### Корневая директория
```bash
npm run dev              # Запуск Frontend + Backend
npm run dev:frontend     # Только Frontend
npm run dev:backend      # Только Backend
npm run build:frontend   # Билд Frontend
npm run build:backend    # Билд Backend
npm run install:all      # Установка всех зависимостей
```

### Frontend
```bash
npm run dev             # Development сервер
npm run build           # Production build
npm run preview         # Превью production build
```

### Backend
```bash
npm run start           # Production запуск
npm run start:dev       # Development с hot reload
npm run start:debug     # Debug режим
npm run build           # Компиляция TypeScript
npm run test            # Unit тесты
npm run test:e2e        # E2E тесты
```

## Зависимости

### Frontend
- react - UI библиотека
- react-dom - React для DOM
- react-router-dom - роутинг
- @telegram-apps/sdk - Telegram Mini App SDK
- vite - build tool
- @vitejs/plugin-react - React плагин для Vite

### Backend
- @nestjs/core - Nest.js фреймворк
- @nestjs/common - общие утилиты
- @nestjs/platform-express - Express адаптер
- typescript - типизация
- rxjs - реактивное программирование

### Dev Dependencies
- concurrently - запуск нескольких команд
- eslint - линтер
- prettier - форматтер

## Следующие шаги

1. Установить зависимости: `npm run install:all`
2. Запустить проект: `npm run dev`
3. Настроить ngrok: `ngrok http 5173`
4. Настроить бота в BotFather
5. Протестировать Mini App

Подробнее см. [QUICKSTART.md](./QUICKSTART.md)

**Last Updated**: 29-10-2025

