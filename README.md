# Homework-14-Tech-Blog

CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

<p align = "center">
<img alt="preview" src="./public/imgs/app.png">
</p>

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
## Project Deployed URL 

Deployed APP on Heroku: [PH-Tech-App](https://ph-tech-app.herokuapp.com)
## Table of Contents

- [Homework-14-Tech-Blog](#homework-14-tech-blog)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Project Deployed URL](#project-deployed-url)
  - [Table of Contents](#table-of-contents)
  - [Resources](#resources)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
    - [GitHub:](#github)
    - [Repo:](#repo)
    - [Deployed:](#deployed)

## Resources

* [Node](https://nodejs.org/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Express](https://expressjs.com)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Handlebars](https://handlebarsjs.com)
* [Insomnia](https://insomnia.rest)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Heroku](https://devcenter.heroku.com)
* [Bulma](https://bulma.io)

## Installation

* Git Clone the Repo into your system

* To install dependencies, run the following in your terminal:
  
`npm i`

`npm i mysql2`

`npm i sequelize`

`npm i dotenv`

* Edit `.env` file using your credentials
## Usage

* After installations are completed, run the app with: 

`mysql -u root -p`

Enter `password` when promted

`source db/schema.sql`

`quit`
  
`npm start`

## Test

`npm test` = ```"echo \"Error: no test specified\" && exit 1"```
## License

* Copyright 2022 Philip Hwang
* This repository is licensed under the [MIT license](./LICENSE)

## Questions

If you have any questions, please contact us at: 
### GitHub: 

[Philip Hwang](https://github.com/phwang93)
### Repo: 

[Tech-Blog](https://github.com/phwang93/Homework-14-Tech-Blog)

### Deployed:

[PH-Tech-App](https://ph-tech-app.herokuapp.com)