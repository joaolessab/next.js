# Next.js

<div align="center">
  <img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/logo.svg" width="450">
</div>

## Repository menu
1. [Running the Projects](https://github.com/joaolessab/next.js#how-do-i-run-these-projects-jo%C3%A3o);
2. [What's Next.js](https://github.com/joaolessab/next.js#whats-nextjs);
3. [Pros of using Next.js](https://github.com/joaolessab/next.js#pros-of-using-nextjs);
4. [Cons of using Next.js](https://github.com/joaolessab/next.js#cons-of-using-nextjs);
5. [Features and Benefits of Next.js](https://github.com/joaolessab/next.js#features-and-benefits-of-nextjs);
6. [Creating the Next.JS project](https://github.com/joaolessab/next.js#creating-the-nextjs-project);

## How do I run these projects, João?
### Case Study App:
1. Clone this repo;
2. Enter the directory <b>"case-study"</b>
3. On terminal, type: `npm install`
4. On terminal, type: `npm run dev`

### Meetup App:
1. Clone this repo;
2. Enter the directory <b>"meetup-app"</b>
3. On terminal, type: `npm install`
4. On terminal, type: `npm run dev`


## What's Next.js?
- The official website says that Next JS is the React Framework for Production;
- What does that mean?
- Next JS calls itself like this because it offers a lot of features that make building large scale react apps easier;
- Also, it’s a full stack framework for React;
- Super Popular;
- It gives you solution for common problems of majority of React projects;

### React is a library
- Yes! To build complex user interfaces way easier than just using JavaScript;
- You can add third-party libraries;
- It’s really only focused on that user interface part, such as: components, state and props;
- If you want to build large scale React projects, you will have to add extra libraries for routing, authentication, etc;

### Next.js is a Framework
- Build up using React;
- Main difference is that: framework is bigger and has more features than a library;
- It’s focused on more things;
- It gives you clear rules on how you should write your code, structure your files, etc;
- Next.js solves common problems and makes building React apps easier;
- You don’t have to add a lot of third-party libraries, because Next.js already has;

### Summary
- You still write React code, build React components and use React features (props, state, context, etc);
- Next.js just enhances your React app and adds more features;

## Pros of using Next.js

#### 1. No configuration and focus on business logic:
- Next.JS required a minimum or no configuration;
- The focus is on the business logic, not much on the application logic side;

#### 2. Automatic compilation and bundling

#### 3. Server-Side Rendering:
- Next.js got popular because it solved a problem that many web developers used to face with web applications produced on the client-side (in the browser). Single Page Applications (SPAs) boasted improved UX because they required no reloading from the user and enabled greater interactivity;

#### 4. Improved SEO (Search Engine Optimization):
- Since the majority of the content in an app like this becomes available only when it is actually executed in the browser, web crawlers find it challenging to understand the text content of such an application;
- As a result, many SPAs, although popular, remained essentially anonymous for popular search engines such as Google. With Next.js, developers build the JavaScript code on the server during the build time and transmit simple, indexable HTML to the user;

#### 5. FullStack Capabilities:
- You can easily add backend code into your Next.js app. Store data, get data and authentication scripts can be placed inside the same project folder;

#### 6. TypeScript support:
- Automatic TypeScript configuration and compilation;

#### 7. Community Support:
- Next.js has a strong community already. 
- Today, 15th May of 2022, it has these numbers on their official Github repo: 
<img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/next.js-repo-numbers.png">

#### 8. Data Security:
- Websites created with NextJS are static, which means there is no direct connection to the database, dependencies, user data or any other sensitive information. This ensures data security;

#### 9. Lazy Loading:
- Or code-splitting, is one of the features that allow you to cope with, and regulate, delayed loading so you only load the relevant code on your page;

#### 10 Routing:
- Next.js already comes with a routing schema. You don’t need to add external libraries for it. Also, you can create dynamic file routing. Scroll down on this document to check for more details;

## Cons of using Next.js

#### 1 Routing:
- Starting with the last benefit written above, routing also has a con. 
- Next.js is constrained to using only a file router, you cannot change the way it works with routes. Going ahead, you’ll require a Node.js server to use dynamic routes;

#### 2 State Manager:
- Next.js works as a React app. It has all the functionalities.
- To manage state, you can use React Hooks and Context API or you will still need to use third-party libraries, such as: Redux, Recoil, etc. Click here to read more about that;

#### 3. Build-time:
- As Next.js support static building of the whole website, for apps having more pages, the build time can take a very long time to finish;

#### 4. Cost of flexibility:
- Next JS does not provide many built-in front pages, so you have to create the whole front-end layer from the ground up;

## Features and Benefits of Next.js
- Why should we use it, at all?

#### 1. Server-side Rendering
- Basically, React loads the app on the client-side, so when fetching a data, if a component or a content depends of the data to change the state, the page can break or you the user may see a loading state on the dom that depends of the data;
- If search optimization (from search engine crawlers) matters to you, this is an issue;
- This feature pre-renders the react pages and components for you;
- React has server-side loading features, but it’s hard and tricky to implement and you will need extra set up;
- Next.js automatically pre-renders the page: that’s great for SEO and initial loads;
- Client-side and Server-side are going to be blended in Next.JS: Fetch data on the server and render finished pages;

#### 2. File-based Routing
- In traditional React, you don’t have a router. You have to add an external library;
- Routing in React would look like this:
<img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/file-base-routing.png"/><br/>
- A lot more of coding;
- Next.JS defines pages and routes with files and folders instead of code;
- It has its own structure that you have to follow, but Next will identify it automatically;
- Less code, less work, highly understandable context;

#### 3. FullStack Capabilities
- Easily add backend (server-side) code to our Next / React Apps;
- Storing data, getting data, authentication, etc… can be added to your React projects;

## Creating the Next.JS project
1. Download and install Node.JS (last stable version)
2. On terminal, run `npx create-next-app`
3. Follow the terminal instructions and pick your preferences;
4. You can enter the project folder created `cd project-name` and run `npm run dev` if you would like to run the `dev` mode;