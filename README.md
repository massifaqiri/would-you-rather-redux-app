# Would You Rather Project

This project was built on the starter template of create-react-app. I used React for building its user interface, Redux for its state management and Redux Persist for persisting the state in local storage.

## Points to be noted

- The stylesheets import various Google Fonts, so you need to be connected to internet for fonts to work.
- In order to persist states of the store upon refresh, I used [Redux Persist](https://www.npmjs.com/package/redux-persist) library. In order to make that work, I had to make a method of \_verifyUser and \_verifyQuestion in \_DATA.js in order to verify users and questions existence in backend. That would enable me to catch the error raised by inconsistency between the backend and the Redux's persisted store.
- After having Redux Persist configured in the app, I learned from discussions that it was okay if the data is lost upon refresh, but I still kept it. However, I noticed a few times that the data were not persisted as expected, but they were minor issues. If you encountered it, please make a note that it is due to Redux Persist and fulfills this project's criteria.
* In order to set up a sign up and log in system, I had to give passwords to the current users in the backend. So for each user, the password is their username. For instance, in order to log in as John Doe, log in as johndoe with password of johndoe.

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
    ├── index.js # ReactDOM renderer of the App component and configures the Redux Persist
├── package.json
├── README.md # this file
```
