# Руководство по безопасности TMS Bot

## Основные принципы безопасности

### Хранение секретов и токенов

1. **Никогда не храните токены и секреты в коде или публичных репозиториях**
   - Используйте файлы `.env` для локального хранения секретов
   - Добавьте все файлы `.env` в `.gitignore`
   - Используйте `.env.example` как шаблон без реальных значений

2. **Правильная работа с переменными окружения**
   - Для Frontend: префикс `VITE_` для доступных клиенту переменных
   - Для Backend: загрузка через dotenv или аналогичные библиотеки
   - Для CI/CD: используйте секреты GitHub/GitLab

### Telegram Bot безопасность

1. **Защита Bot Token**
   - Храните Bot Token только в `.env` файле
   - Никогда не коммитьте реальный токен в репозиторий
   - При компрометации токена - немедленно создайте новый бот через BotFather

2. **Валидация Telegram запросов**
   - Проверяйте подпись запросов от Telegram
   - Используйте initData для проверки аутентичности запросов
   - Подробнее: [Telegram Mini Apps Security](https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app)

## Инструкция по настройке безопасности

### 1. Создание и настройка .env файлов

1. Скопируйте шаблон из `backend/env.example` в `backend/.env`:
   ```bash
   cp backend/env.example backend/.env
   ```

2. Заполните реальными значениями:
   ```
   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # Telegram Bot Configuration
   BOT_TOKEN=ваш_настоящий_токен_бота
   BOT_USERNAME=Prospase_test_bot

   # Frontend URL (для production)
   FRONTEND_URL=https://your-domain.com
   ```

### 2. Проверка .gitignore

Убедитесь, что в `.gitignore` присутствуют следующие строки:
```
# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### 3. Работа с токенами в коде

**Правильно:**
```javascript
// В backend/src/config/config.service.ts
export class ConfigService {
  private readonly botToken: string;
  
  constructor() {
    this.botToken = process.env.BOT_TOKEN;
  }
  
  getBotToken(): string {
    return this.botToken;
  }
}
```

**Неправильно:**
```javascript
// Никогда не делайте так!
const BOT_TOKEN = "your_telegram_bot_token_here";
```

### 4. Действия при компрометации токена

Если токен был случайно опубликован:

1. Немедленно создайте новый бот через [@BotFather](https://t.me/BotFather)
2. Отправьте команду `/revoke` для отзыва старого токена
3. Обновите токен во всех `.env` файлах
4. Проверьте историю коммитов на наличие токена
5. Если токен был в коммите, рассмотрите возможность пересоздания репозитория

## Рекомендации по безопасности для разработки

1. **Используйте HTTPS** даже для локальной разработки с туннелями
2. **Валидируйте все входные данные** от пользователей
3. **Не храните чувствительные данные** в localStorage или sessionStorage
4. **Используйте Content Security Policy** для защиты от XSS
5. **Регулярно обновляйте зависимости** для устранения уязвимостей

## Контрольный список безопасности

- [ ] Все токены и секреты хранятся только в `.env` файлах
- [ ] Файлы `.env` добавлены в `.gitignore`
- [ ] Создан `.env.example` с шаблоном без реальных значений
- [ ] Проверена история коммитов на отсутствие секретов
- [ ] Настроена валидация запросов от Telegram
- [ ] Настроен HTTPS для всех окружений
- [ ] Регулярно проводится аудит зависимостей

**Last Updated**: 15-12-2025
