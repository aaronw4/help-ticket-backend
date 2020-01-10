# backend

## Server

https://dev-desk-que-3-bw.herokuapp.com/

## Dependencies

- "bcryptjs": "^2.4.3",
- "cors": "^2.8.5",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "jsonwebtoken": "^8.5.1",
- "knex": "^0.20.4",
- "knex-cleaner": "^1.3.0",
- "pg": "^7.15.0",
- "sqlite3": "^4.1.1"

## devDependencies

- "nodemon": "^1.19.1",

# Data Structures

`Users`

```
{
    "id": 1,                            // Integer (primary key provided by server and autoincrements)
    "username": "admin",                // String, required
    "password": "password"              // String, required
}
```

`Categories` //unused for now but still exists in migrations and seeds

```
{
    "id": 1,                            // Integer (primary key provided by server and autoincrements)
    "category": "javascript"            // String, required
}

```

`Roles`

```
{
    "id": 1,                          // Integer (primary key provided by server and autoincrements)
    "role": "student",                // String, required
}

```

`Tickets`

```
{
    "id": 1,                            // Integer (primary key provided by server and autoincrements)
    "title": "title",                   // String, required
    "description": "description",       // String, required
    "attempted": "attempted",           // String, required
    "category": "javascript",           // String, required
    "openStatus": true,                 // Boolean, defaults to true on creation
    "resolved": false,                  // Boolean, defaults to false on creation
    "userId": 1                         // Integer, foreign key references table **students**
}
```

`Users_Tickets`

```
{
    "userId": 1,                        // Integer, foreign key references table **users**
    "ticketId": 1,                      // Integer, foreign key references table **tickets**
}

```

`Users_Roles`

```
{
    "userId": 1,                        // Integer, foreign key references table **users**
    "roleId": 1,                        // Integer, foreign key references table **roles**
}

```

# Fake User Accounts

```
{
    "username": "aaron",
    "password": "pass"
}

{
    "username": "jay",
    "password": "pass"
}

{
    "username": "user3",
    "password": "pass"
}

{
    "username": "user4",
    "password": "pass"
}

{
    "username": "user5",
    "password": "pass"
}

```

# Summary of API Endpoints

| Table   | Method | Auth | Endpoint                  | Description                                                                                                                                                                                                                                                                                   |
| ------- | ------ | ---- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users   | POST   | No   | /api/user/register        | Creates a new user profile using the information sent inside the body of the request and returns a message stating that the user was successfully added to the database.                                                                                                                      |
| users   | POST   | No   | /api/user/login           | Uses the credentials sent inside the body to authenticate the user. On successful login, returns a message stating that the user has logged in and a JSON Web Token token in the body of the response.                                                                                        |
| users   | GET    | Yes  | /api/user/role            | The obtainable roles for the users are sent back in the response to the request.                                                                                                                                                                                                              |
| users   | POST   | Yes  | /api/user/role            | Username and role ID are obtained by the reqested body of the person's role that needs to be added and when the route is successfully used the role of the user will be added to the database.                                                                                                |
| users   | DELETE | Yes  | /api/user/role            | Username and role ID are obtained by the reqested body of the person's role that needs to be deleted and when the route is successfully used the role of the user will be deleted from the database.                                                                                          |
| tickets | GET    | Yes  | /api/ticket               | If the user is authorized a list populated with dev help tickets is sent to the JSON response body.                                                                                                                                                                                           |
| tickets | POST   | Yes  | /api/ticket               | If the user is authorized they are able to add a ticket to the database and a message in the response body is given.                                                                                                                                                                          |
| tickets | PUT    | Yes  | /api/ticket/assign        | If the user is authorized they are able to add a ticket to themselves.                                                                                                                                                                                                                        |
| tickets | PUT    | Yes  | /api/ticket/unassign      | If the user is authorized they are able to remove a ticket from themselves.                                                                                                                                                                                                                   |
| tickets | GET    | Yes  | /api/ticket/categories    | The response returns the list of categories that can be added to a ticket.                                                                                                                                                                                                                    |
| tickets | GET    | Yes  | /api/ticket/users-tickets | The response returns the list of tickets associated with a helper and the usernames of the people that created those tickets.                                                                                                                                                                 |
| tickets | PUT    | Yes  | /api/ticket/resolved      | If the user is authorized they are able to change the resolved status of the ticket. This route will be used by the helpers                                                                                                                                                                   |
| tickets | DELETE | Yes  | /api/ticket/              | If the user is authorized they are able to delete a ticket if it belongs to them, just need to pass the id of the user that is logged in and ticket id in request of body (IMPORTANT! when using axios call for delete need to pass in data like this `axios.delete(url, {data: {foo: bar}})` |
| tickets | PUT    | Yes  | /api/ticket/              | If the user is authorized they are able to change any of items that need to be changed on the ticket.                                                                                                                                                                                         |
