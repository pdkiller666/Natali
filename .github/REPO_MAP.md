# REPO_MAP — pdkiller666/Natali
> Стек: HTML, CSS, JavaScript | Тип: Веб-приложение (статический сайт)

## Структура
```
/
├── .github/
│   ├── REPO_MAP.md
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── .gitignore
├── AGENT_INSTRUCTIONS.md
├── README.md
├── index.html
├── script.js
└── style.css
```

## Ключевые файлы
- `index.html` — основной HTML-документ (точка входа)
- `script.js` — клиентская логика на JavaScript
- `style.css` — стили оформления
- `AGENT_INSTRUCTIONS.md` — инструкции для агента/разработчика
- `README.md` — описание проекта
- `.gitignore` — правила игнорирования файлов Git
- `.github/workflows/ci.yml` — CI-пайплайн (проверки)
- `.github/workflows/deploy.yml` — пайплайн деплоя

## Точки входа
- **Основная**: `index.html` — открывается в браузере
- **Запуск**: открыть `index.html` в любом современном браузере (или через Live Server)

## Инварианты (что нельзя менять)
- `index.html` — единственная точка входа, не удалять и не переименовывать
- `script.js` и `style.css` — обязательные зависимости `index.html`
- `.github/workflows/` — CI/CD пайплайны, не удалять без согласования
- `AGENT_INSTRUCTIONS.md` — содержит критичные инструкции для разработки