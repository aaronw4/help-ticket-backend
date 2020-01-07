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

`Helpers`

```
{
    "id": 1,                            // Integer (primary key provided by server and autoincrements)
    "username": "admin",                // String, required
    "password": "password"              // String, required
}
```

`Students`

```
{
    "id": 1,                            // Integer (primary key provided by server and autoincrements)
    "username": "admin",                // String, required
    "password": "password"              // String, required
}
```

`Categories`

```
{
    "id": 1,                            // Integer (primary key provided by server and autoincrements)
    "category": "javascript"            // String, required
}

```

`Tickets`

```
{
    "id": 1,                            // Integer (primary key provided by server and autoincrements)
    "title": "title",                   // String, required
    "description": "description",       // String, required
    "attempted": "attempted",           // String, required
    "categoryId": 1,                    // Integer, foreign key references table **categories**
    "openStatus": true,                 // Boolean, required, defaults to true on creation
    "resolved": false,                  // Boolean, required, defaults to false on creation
    "studentId": 1                      // Integer, foreign key references table **students**
}
```

`Helpers_Tickets`

```
{
    "helperId": 1,                      // Integer, foreign key references table **helpers**
    "ticketId": 1,                      // Integer, foreign key references table **tickets**
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

| Table | Method | Endpoint            | Description                                                                                                                                                                                            |
| ----- | ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| users | POST   | /api/users/register | Creates a new user profile using the information sent inside the body of the request and returns a message stating that the user was successfully added to the database.                               |
| users | POST   | /api/users/login    | Uses the credentials sent inside the body to authenticate the user. On successful login, returns a message stating that the user has logged in and a JSON Web Token token in the body of the response. |

| tickets | GET | /api/ticket | If the user is authorized a list populated with dev help tickets is sent to the JSON response body. |
| tickets | POST | /api/ticket | If the user is authorized they are able to add a ticket to the database and a message in the response body is given. |
| tickets | PUT | /api/ticket/assign | If the user is authorized they are able to add a ticket to themselves. |
