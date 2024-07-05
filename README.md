# Complete Blog MERN Stack Application Description

A complete blog application using the MERN stack (MongoDB, Express.js, React, and Node.js) allows users to perform various operations such as creating, reading, updating, and deleting blog posts. This guide will walk you through setting up and developing a full-featured blog application.

>This Project is built to learn how the complete Full stack application work in action.

### Key Features

1. **User Authentication**: Secure user login and registration.
2. **Create Posts**: Authenticated users can create new blog posts.
3. **Read Posts**: View all posts or individual posts with details.
 > Rest arent built yet will Soon build it
 
### Technologies Used

- **MongoDB**: A NoSQL database for storing blog posts and user information.
- **Express.js**: A Node.js web application framework for building the backend.
- **React**: A JavaScript library for building the frontend user interface.
- **Node.js**: A JavaScript runtime for building the backend server.
- **JWT** : A JS Lib to create a token for the authentication.


## How to run this project

- Clone the Repo
  ``` bash 
  git clone https://github.com/Gowtz/MERN_Blog
  ```


### Step-1 Mongodb setup.
 - You need a mongodb set it up either using a mongodb atlas cloud or download the mongodb
  ```
  # if its a local mongodb 
  mongodb://localhost:27017/DBNAME

  or 
  ## if its in cloud
  mongodb+srv://<username>:<password>@tessting.uoleenz.mongodb.net/DBNAME?retryWrites=true&w=majority&appName=Testing

  ``` 

### Step-2 Setting up backend
- Go to backend folder

```bash
cd backend
```

- Use you editor of choice and make sure you create a `.env` file based on the `.example.env` . 

- And Then run the below command to Compile the Typescript file and run the server.


```bash
pnpm ts # after running this command press Ctrl + C to close the TSC watch
npm dev
```
> NOTE: front end url might differ based on diff lib or framework make sure you know the url OR change the .env after runinng the frontend server and do not forget to restart ther server

### Step-3 Now it's time for frontend
- Go to the frontend folder
- run the `npm i` to install the dependencies.
- and change the `.env` file based on `.example.env` file
- now run the project using below command
  ```bash
  npm dev
  ```
#### if you need production the build using
```bash
npm build && npm preview
```