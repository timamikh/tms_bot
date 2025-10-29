# Настройка Git для проекта

## Первоначальная настройка

Проект уже инициализирован в GitHub: https://github.com/timamikh/tms_bot

## Шаги для первого коммита

### 1. Инициализация локального репозитория

```bash
cd C:\Projects\tms_bot
git init
```

### 2. Добавление remote репозитория

```bash
git remote add origin https://github.com/timamikh/tms_bot.git
```

### 3. Создание .gitignore (уже создан)

Файл `.gitignore` уже настроен и игнорирует:
- node_modules/
- dist/
- build/
- .env файлы
- IDE файлы

### 4. Добавление файлов

```bash
# Проверить, что будет добавлено
git status

# Добавить все файлы
git add .

# Или выборочно:
git add frontend/
git add backend/
git add *.md
git add package.json
git add .gitignore
```

### 5. Первый коммит

```bash
git commit -m "feat: initial project setup with Telegram Mini App

- Created React + Vite frontend with 3 pages (Auth, Verify, Dashboard)
- Created Nest.js backend with API stubs
- Integrated Telegram Mini App SDK
- Added comprehensive documentation
- Configured development environment"
```

### 6. Пуш в GitHub

```bash
# Первый пуш с установкой upstream
git push -u origin main

# Если ветка называется master:
git push -u origin master

# Или создать новую ветку main:
git branch -M main
git push -u origin main
```

## Структура веток

### Основные ветки

- `main` (или `master`) - production-ready код
- `develop` - активная разработка
- `feature/*` - новые функции
- `bugfix/*` - исправления багов
- `hotfix/*` - срочные исправления

### Создание development ветки

```bash
git checkout -b develop
git push -u origin develop
```

## Работа с ветками

### Создание новой функции

```bash
# Переключиться на develop
git checkout develop

# Создать feature ветку
git checkout -b feature/add-gps-tracking

# Работать над функцией...
git add .
git commit -m "feat: add GPS tracking for shipments"

# Запушить ветку
git push -u origin feature/add-gps-tracking

# Создать Pull Request на GitHub
```

### Обновление из main

```bash
git checkout main
git pull origin main

git checkout develop
git merge main
```

## Соглашение о коммитах

Используйте Conventional Commits:

### Типы коммитов

- `feat:` - новая функция
- `fix:` - исправление бага
- `docs:` - изменения в документации
- `style:` - форматирование, отсутствие изменений в коде
- `refactor:` - рефакторинг кода
- `test:` - добавление тестов
- `chore:` - обновление зависимостей, конфигурации

### Примеры

```bash
# Новая функция
git commit -m "feat: add driver location tracking"

# Исправление бага
git commit -m "fix: resolve authentication token expiration issue"

# Документация
git commit -m "docs: update API documentation"

# Рефакторинг
git commit -m "refactor: optimize shipments query performance"

# Изменения в зависимостях
git commit -m "chore: update React to v18.3.1"
```

## .gitignore содержимое

```gitignore
# Dependencies
node_modules/
*/node_modules/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log
npm-debug.log*

# Build output
dist/
*/dist/
build/
*/build/

# Editor
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store

# OS
Thumbs.db
```

## Что НЕ нужно коммитить

❌ **Никогда не коммитьте**:
- `node_modules/`
- `.env` файлы
- Bot Token
- API ключи
- Личные данные
- Временные файлы
- Логи

✅ **Можно коммитить**:
- `.env.example` (без реальных значений)
- `env.example`
- Документацию
- Исходный код
- Конфигурационные файлы

## Безопасность

### Если случайно закоммитили секреты

```bash
# Удалить файл из истории Git
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch backend/.env" \
  --prune-empty --tag-name-filter cat -- --all

# Форс-пуш (ОПАСНО!)
git push origin --force --all
```

### Лучше использовать BFG Repo-Cleaner

```bash
# Установить BFG
# Windows: scoop install bfg
# Mac: brew install bfg

# Удалить секреты
bfg --delete-files .env
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

### После удаления секрета

**ВАЖНО**: Если Bot Token попал в коммит:
1. Немедленно создайте новый токен через BotFather
2. Обновите токен в `.env`
3. Старый токен больше не используйте

## GitHub Actions (будущее)

Создайте `.github/workflows/ci.yml` для автоматизации:

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install Frontend dependencies
      run: cd frontend && npm install
    
    - name: Install Backend dependencies
      run: cd backend && npm install
    
    - name: Build Frontend
      run: cd frontend && npm run build
    
    - name: Build Backend
      run: cd backend && npm run build
```

## Полезные команды

```bash
# Проверить статус
git status

# История коммитов
git log --oneline

# Отменить последний коммит (не запушенный)
git reset --soft HEAD~1

# Посмотреть изменения
git diff

# Посмотреть удаленные репозитории
git remote -v

# Переименовать ветку
git branch -m old-name new-name

# Удалить локальную ветку
git branch -d feature/old-feature

# Удалить удаленную ветку
git push origin --delete feature/old-feature
```

## Troubleshooting

### "Permission denied" при пуше

```bash
# Настройте SSH ключи или используйте HTTPS с токеном
git remote set-url origin https://github.com/timamikh/tms_bot.git
```

### Конфликты при merge

```bash
# Посмотреть конфликты
git status

# Разрешить конфликты в файлах, затем:
git add .
git commit -m "merge: resolve conflicts"
```

### Отменить изменения в файле

```bash
# Отменить изменения (не закоммиченные)
git checkout -- filename

# Отменить все изменения
git reset --hard HEAD
```

## Готово!

Теперь ваш проект готов к коммиту и пушу в GitHub!

```bash
# Финальная проверка
git status

# Первый коммит
git add .
git commit -m "feat: initial project setup"

# Пуш
git push -u origin main
```

**Last Updated**: 29-10-2025

