# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

https://create-react-app.dev/

1. Репо на гите, клонируем локально

2. Инициализация создаст папку <название папки>: npx create-react-app <название
   папки>

если надо в корне текущей папки: 2.1 npx create-react-app .

3. npm install --save-dev husky lint-staged prettier

скачать файлы настроек https://github.com/goitacademy/react-lint-config
.prettier, .huskyrc, .lintstagedrc (ESLint)

настройка VS Code { "files.autoSave": "onFocusChange", "editor.formatOnSave":
true, "editor.codeActionsOnSave": { "source.fixAll.eslint": true } }

4. npm install --save prop-types npm start - запуск сервера для разработки

5. Не обязательно лдя удобства Настройка абсолютных импортов, настраиваем
   относительно како папки простраивать путь
   https://create-react-app.dev/docs/importing-a-component

jsconfig.json { "compilerOptions": { "baseUrl": "src" }, "include": ["src"] }
после этого можно импортировать коомпоненты так import Button from
'components/Button';

6. Нормализация стилей. в index.css добавить @import-normalize

7. Деплой https://create-react-app.dev/docs/deployment#github-pages

7.1 npm install --save gh-pages

7.2 Open your package.json and add a homepage field for your project: Copy
"homepage": "https://DimRom76.github.io/goit-react-hw-01-components",

"scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build",

7.3 npm run deploy
