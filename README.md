

# Quick Compo

<br>

## Description

This is an app to find personal trainers.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
-  **Login:** As a user I can login to the platform so that I can play competitions
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Create Personal Trainer account** As a user I can create a personal trainer account
-  **Edit Personal Trainer account** As a user I can edit their account
-  **View Personal Trainers** As a user I want to see the personal trainers
-  **View his bookmarks** As a user I want to see their bookmarks
-  **View search** As a user I want to search personal trainers
-  **View profile** As a user I want to see their profile


## Backlog

User profile & Personal trainers:
- Change personal profile to personal trainer profile
- Search personal trainers
- Bookmarks
- Booknow
- chat


<br>


# Client / Frontend

## Routes
| Path                                | Component            | Permissions | Behavior                                                      |
| ----------------------------------- | -------------------- | ----------- | ------------------------------------------------------------  |
| `/`                                 | SplashPage           | anon only   | Signin                                                     |
| `/auth/login`                       | LoginPage            | anon only   | Login form, link to signup, navigate to homepage after login  |
| `/auth/signup`                      | SignupPage           | anon only   | Signup form, link to login, navigate to homepage after signup |
| `/auth/signup/create`               | SignupPage           | anon only   | Signup form, link to login, navigate to homepage after signup |
| `/auth/logout`                      | n/a                  | user only   | Navigate to homepage after logout, expire session             |
| `/instructions`                     | InstructionsPage     | anon only   | Shows all tournaments in a list                               |
| `/profile`                          | ProfilePage          | user only   | User details                                               |
| `/profile/edit`                     | ProfileEditPage      | user only   | User edit page, after to UserPage                          |
| `/explore`                          | BookmarksPage        | user only   | Bookmarks page, show your bookmarks                          |
| `/explore/user/:id`                 | BookmarksPage        | user only   | Bookmarks page, show your bookmarks                           |
| `/bookmarks`                        | BookmarksPage        | user only   | Bookmarks page, show your bookmarks                           |
| `/search`                           | SearchPage           | user only   | Search personal trainers                                      |
| `/messages`                         | MessagesPage         | user only   | Show your messages and chat                                   |


## Components

- SplashPage

- LoginPage

- Instructions

- SignupPage

- FormCreatePersonalAccount

- FormCreatePersonalTrainer

- Explore

- Bookmarks

- Search

- Messages

- Profile

- Navbar

- CardPersonalTrainer

- CardSkills

- CardDelete

- Button

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous

- Explore Service
  - explore.get(user type)

- Bookmark
  - bookmark.post (id)
  - bookmark.get (id)

- Search
  - search.get (name, city)

- Messages
  - messages.get (id)
  - messages.post (id)

<br>


# Server / Backend


## Models

User model

{
  - username - String // required & unique
  - email - String // required & unique
  - firstName - String // required
  - secondName - String // 
  - surname - String // 
  - password - String // required
  - country - String // required
  - city - String // required
  - studies - [] // required
  - description - String // required
  - skills - [] // required
  - whereTrain - [] // required
  - userType - String 
  - dateCreate - String
  - dateUpdate - String
}



<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | --------------------------- |
| GET         | /auth/profile               | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | /auth/login                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | /auth/signup                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | /auth/signup/create         | {form persona or p.trainer}  | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | /auth/logout                | (empty)                      | 204            | 400          |             |
| GET         | /explore                    | CardPersonalTrainer)         | 204            | 400          |             |
| GET         | /explore/user/:id           | Information to p.trainer     | 204            | 400          |             |
| GET         | /bookmarks/                 | Information bookmarks        | 204            | 400          |             |
| GET         | /search                     | *******                      | 204            | 400          |             |
| GET         | /messages                   | Conversations                | 204            | 400          |             |
| GET         | /profile                    | Information profile          | 204            | 400          |             |
| PUT         | /profile/edit               | Form                         | 204            | 400          |             |
| DELETE      | /profile/delete             | (empty)                      | 204            | 400          |             |



<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/lCiOxLJy/fit-app) 
or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)


