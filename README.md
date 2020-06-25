# Would You Rather Project

This project was built on the starter template of create-react-app. I used React for building its user interface and Redux for its state management.

## Points to be noted

- All changes are stored in local storage but not committed to the backend. So, upon refresh, everything goes back to the initial state that resembles the backend. In order to handle errors that could rise due to the inconsistency between the local storage and the mock backend, I had to make methods of \_verifyUser and \_verifyQuestion in \_DATA.js in order to verify users and questions existence in backend.
- Previously I used Redux Persist to persist the store, but the reviewer suggested to remove it. Thus, I removed the Redux Persist and currently all changes are persisted in local storage and will be lost upon refresh, just as expected. As long as the page is not refreshed, every change is persisted though.
- In order to set up a sign up and log in system, I had to give passwords to the current users in the backend. So for each user, the password is their username. For instance, in order to log in as John Doe, log in as johndoe with password of johndoe.

## How to start it

To get started:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── public
└── src
    ├── actions #action handlers
        ├── authedUser.js # action handler for authenticated user
        ├── currentTab.js # action handler for the current tab in home page
        ├── questions.js # action handler for the questions
        ├── shared.js # action handler for initial loading of the data into the store
        ├── users.js # action handler for the users
    ├── assets
        ├── avatars # the directory containing the avatars
        ├── images # the directory containing the images used by the app
    ├── components
        ├── HomePage # components for the home page like, questions and tabs
        ├── LandingPage # components for the landing page like, signup and signin
        ├── Leaderboard # components for the leaderboard page
        ├── NavBar # components for the Navigation bar
        ├── PostQuestionPage # components for the 'Submit Your Question' page
        ├── App.js # component containing all components and routing them to their paths
        ├── NotFoundPage.js # component containing the 404 message
    ├── middlewares
        ├── index.js # exporting applyMiddleware with thunk middleware
        ├── logger.js # logger middleware
    ├── reducers # reducers for authedUser, currentTab, questions and users
    ├── styles # CSS stylesheets for the components
    ├── _DATA.js # the mock backend data
    ├── index.js # ReactDOM renderer of the App component and creates the store
├── package.json
├── README.md # this file
```
