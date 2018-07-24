#   ravenous
[*ravenous*](https://ravenouscc.herokuapp.com/) is a Yelp-like web application.  Its primary functions include:

-   Viewing a list of restaurants returned by the Yelp API
-   Searching for restaurants within a city
-   Sorting through restaurants using a filter

##  Prerequisites
The following technologies are used to develop, deploy, and manage versions of *ravenous*:

-   [Node.js](https://nodejs.org/en/) (v8.11.3 or higher)
-   [Heroku](https://devcenter.heroku.com/) (w/ Node.js)
-   [Git](https://git-scm.com/about) (v2.18.0 or higher)

##  Installing
To install the *ravenous* application on a local machine, refer to the following CLI commands:

1.  `git clone https://github.com/Verley93/ravenous.git` to clone the repository within the directory of your choice
2.  `cd ravenous` to navigate into the root of *ravenous*
3.  `npm install` to install *ravenous* dependencies

##  Getting Started
The following instructions will provide a copy of *ravenous* for development and testing purposes:

1.  `heroku local web` to create a local instance of *ravenous*
    -   *ravenous* will appear in your default browser on localhost and  listen on port 5000
    -   As you save your changes, the browser will update automatically
2.  Use **Ctrl-C** to exit the application

##  Testing
### BusinessList.js
The purpose of this component is to iterate through and return Business components.  To ensure the array is obtained, it can be logged to the console by preceding `this.props.businesses.map(...)` with `console.log(this.props.businesses) &&`.  Upon executing a search, the business endpoints will be logged to the console as an array.

**Note**: More tests will become available as edge-cases and limitations are tested further

##  Deployment
-   To **deploy** your version of *ravenous*, execute the following CLI commands in the root of the application:

    1.  `heroku create` to prepare Heroku for the source code
    2.  `git push heroku master` to deploy the changes
    3.  `heroku open` to open the site


-   To **update** your build of *ravenous*, execute the following CLI commands in the root of the application

    1.  `git add .` to add modified files to the local git repository
    2.  `git commit -m "Commit message here"` to commit the changes to the repository
    3.  `git push heroku master` to deploy the changes
    4.  `heroku open` to open the site


-   To **scale** *ravenous*, utilize the following CLI commands in the root of the application

    -   `heroku ps` to check how many dynos are running
    -   `heroku ps:scale web=1` to allow 1 dyno to run
        -   Scaling the application is equivalent to changing the number of dynos that are running


-   To **log** time-ordered events from the output streams of *ravenous* as it is running, refer to the following CLI commands:

    1.  `heroku open` to open the site
    2.  `heroku logs --tail` to begin streaming
    3.  **Ctrl-C** to stop streaming the logs

##  Built With
-   [React.js](https://reactjs.org/) - Web framework used to build the UI
-   [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) - Node package used to increase accessibility of fetch() by older browsers
-   [Yelp Fusion](https://www.yelp.com/developers/documentation/v3/business) (Business Endpoints) - API used to request business information

##  Authors
-   Devlin Verley II

##  Acknowledgements
-   Big thank you to [Codecademy](https://www.codecademy.com/learn) and their structured courses, knowledgeable staff, and helpful coding resources!
