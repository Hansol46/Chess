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

```
{layer}/
  {slice}/
    # UI-логика(компоненты, стили, ...)
    ui/

    # Бизнес-логика и модели данных (store,actions,reducers)
    model/

    # Логика запрос к api (api instances, endpoints)
    api/

    # Служебная логика (helpers, utils, hooks)
    lib/

    # Конфигурация (константы, параметры)
    config/
```

### Tasks

1. redux
2. jest
3. add login and profile pages
