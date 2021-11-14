* Установка **react-router-dom**
  > * **npm i --save react-router-dom**

* Создаю новую ветку **feature/theme**
  > * **git checkout -b feature/theme**

* Подключаю **Context**
  > * В файле *themeContext.js* **ThemeContext = React.createContext();**
  > * В *App.js* Provide c деструктурированными значениями контекста, где содержится переменная с темой и callBack функция для ее переключения
  > * В Header подключили контекст с помощтю **useContext** и добавили на слушатель кнопки onClick callBack функцию с переключением темы