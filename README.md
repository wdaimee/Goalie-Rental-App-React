 # gÜber - The Goalie Rental App Fullstack App

 ## About:

 gÜber Goalie Rental App is a Fullstack MERN application which allows users to make requests to fill a need for a goalie in either a Hockey, Soccer, or Lacrosse game. Users can either make a request for a goalie or if a user is signed up as a goalie, fill one of the open requests. Authorization was built using JSON Web Token (JWT) authorization. Therefore, users can signup and login. Ajax requests are made to the backend MongoDB database to store data such as created requests for goalies, user data, and history of game requests.

 This app was broken into 2 stages:

 1. RESTFUL API with CRUD Functionality (Past Project)
    - Docs page available to explain API functionality.
    - To access the docs page for API, please visit the link below:

        [https://goalie-rental-app.herokuapp.com/api/docs](https://goalie-rental-app.herokuapp.com/api/docs)

    - To view the source code and details for the backend please visit the link below to the Github repo:

        [https://github.com/wdaimee/Goalie-Rental-App-Docs](https://github.com/wdaimee/Goalie-Rental-App-Docs)

2. React Front End (Current Project)
    - The React Fullstack App can be accessed from the link below:

        [https://guber-rental.herokuapp.com/](https://guber-rental.herokuapp.com/)

    - Originally, the React Frontend was going to be added to the original backend above. After reviewing the code and the requirements to implement JWT Authorization, I decided that copying over the backend to a new Fullstack project would be the most logical choice for the following reasons:
        - View how my progress has changed from the two projects.
        - Review mistakes that I made in the past and how to overcome them.
        - Keep the docs page intact without any major reprogramming.

## List of Technologies Used for Fullstack Project:
- Backend/API:
    - Node.js
    - Express.js
    - MongoDB
    - Mongoose
    - Mongoose Atlas DB
    - JavaScript
    - JSON Web Token Authorization
    - HTML (docs page)
    - Bootstrap4 (docs page)
    - Deployed with Heroku

- Frontend
    - React.js
    - Bootstrap4
    - CSS

## Next Steps:
- Add review functionality for the following user story:
    - As a user, I want to be able to leave a review for another user to communicate to others if I had a positive or negative experience.
    - Implement Admin functionality so that an admin can make changes to data in the backend such as: removing users, adding or removing arenas, etc.
    - Add a notification system to inform users if their requests were filled.
- Add Admin functionality to create, update, delete any games. To created, updated, delete, and block users.
- Add a notification system for the app so users can be notified of any changes to the games status.
