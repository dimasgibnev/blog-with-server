# Курсовой проект "Блог о веб-разработке"

Области хранения данных:

- База данных;
- BFF;
- redux store;

Сущности приложения:

- Пользователь - БД (список пользователей), BFF (сессия текущего пользователя), store (отображение в браузере);
- Роль пользователя - БД (список ролей), BFF (сессия пользователя с ролью), store (использование на клиенте);
- Статья - БД (список статей), store (отображение в браузере);
- Комментарий - БД (список комментариев), store (отображение в браузере);

Таблицы БД:

- users: id / login / password / registred-at / role_id;
- roles: id / name;
- posts: id / title / content / image_url / published_at;
- comments: id / post_id / author_id / content;

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role;

Схема для redux store:

- user: id / login / roleId;
- posts: array post: id / title / imageUrl / publishedAt / commentsCount;
- post: id / title imageUrl/ content / publishedAt / comments: array comment: id / author / content / publishedAt;
- users: array user: id / login / registredAt / role;
