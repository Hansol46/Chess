# Edu project chess

Legendary logic game created with TypeScript.
Project made for traning skills and private interes.

<div>
  You can view on this link - https://chess-peach.vercel.app/
</div>

<br />

<img src="./public/test_game.png" width="500" height="400" title="hover text">

## Tech

- React/TypeScript
- Webpack
- OOP
- sass modules

## Commands:

### installation:

```
    $ npm i
```

### launch:

```
    $ npm start
```

## Development architecture

### {layer} - app, pages, widgets, entities, shared

### {slice} - users, posts, profile ...

### {segments} - ui, model, api, lib, config

{layer}/
\_\_{slice}/
\_\_\_\_# UI-логика(компоненты, стили, ...)
\_\_\_\_ui/

\_\_\_\_# Бизнес-логика и модели данных (store,actions,reducers)
\_\_\_\_model/

\_\_\_\_# Логика запрос к api (api instances, endpoints)
\_\_\_\_api/

\_\_\_\_# Служебная логика (helpers, utils, hooks)
\_\_\_\_lib/

\_\_\_\_# Конфигурация (константы, параметры)
\_\_\_\_config/

### Tasks

1. redux
2. jest
3. add login and profile pages
