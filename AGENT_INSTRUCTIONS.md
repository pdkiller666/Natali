# AGENT_INSTRUCTIONS

## Stack
- HTML5, CSS3, JavaScript (ES6+)
- GitHub Pages для деплоя
- Никаких фреймворков или бэкенда

## Architecture
- Однофайловая структура: index.html (разметка), style.css (стили), script.js (логика)
- Все стили и скрипты подключаются через <link> и <script> в index.html
- Форма отправляет данные через имитацию (setTimeout), без серверной части
- Слайдер отзывов работает на чистом JS с transform: translateX
- Анимации при скролле через Intersection Observer

## Key files
- `index.html` — главная страница со всей разметкой (секции: hero, about, services, teachers, schedule, reviews, contact)
- `style.css` — все стили, включая адаптив (mobile-first), анимации, модальное окно
- `script.js` — бургер-меню, слайдер отзывов, валидация формы, модальное окно, Intersection Observer

## Constraints
- Максимум 10 файлов
- HTML ≤ 250 строк, CSS ≤ 400 строк, JS ≤ 500 строк
- Суммарно ≤ 1500 строк
- Запрещены: TODO, FIXME, placeholder, lorem ipsum
- Все CDN-ссылки должны быть рабочими
- Обязательно meta charset="UTF-8" и viewport
- CSS: mobile-first, ≥ 80 строк
- JS: ES6+, без var, с обработкой ошибок
- README.md с описанием, стеком, инструкцией по запуску
- .gitignore для статического сайта
- Без CI/CD (только статика на GitHub Pages)

## Dev commands
- Открыть index.html в браузере для локального просмотра
- Для деплоя: push в main → GitHub Pages (Settings → Pages → Deploy from branch)