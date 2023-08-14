# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```



## Требования:

1. Используйте Vue.js для создания компонентов и управления состоянием приложения.
2. Интерфейс должен содержать следующие элементы:
  - Поле ввода для добавления новой задачи.
  - Кнопка "Добавить", чтобы добавить новую задачу в список.
  - Список добавленных задач с возможностью отметить         выполненные или удалить задачу.
  - Опционально: добавьте кнопку "Редактировать", чтобы пользователи могли изменить текст задачи после добавления.
3. Задачи должны сохраняться в состоянии приложения и не должны исчезать после перезагрузки страницы.
4. Верстка и дизайн могут быть простыми, но должны быть читабельными и эстетичными.

## Рішення
1. Використав pinia для управління станом 
2. Зробив компоненти багаторазового використання такі як BaseButton, BaseIcon
3. Зберігав todoі в localstorage
4. Дизайн простий та адаптивний