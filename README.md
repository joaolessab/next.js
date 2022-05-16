# Next.js

<div align="center">
  <img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/logo.svg" width="450">
</div>

## Repository menu
1. [Running these Projects (from this repository)](https://github.com/joaolessab/next.js#how-do-i-run-these-projects-jo%C3%A3o);
2. [What's Next.js](https://github.com/joaolessab/next.js#whats-nextjs);
3. [Pros of using Next.js](https://github.com/joaolessab/next.js#pros-of-using-nextjs);
4. [Cons of using Next.js](https://github.com/joaolessab/next.js#cons-of-using-nextjs);
5. [Features and Benefits of Next.js](https://github.com/joaolessab/next.js#features-and-benefits-of-nextjs);
6. [Creating the Next.JS project](https://github.com/joaolessab/next.js#creating-the-nextjs-project);
7. [Understanding Next.js Project Structure](https://github.com/joaolessab/next.js#understanding-nextjs-project-structure);
8. [Dynamic Pages](https://github.com/joaolessab/next.js#dynamic-pages);
9. [Page Pre-Rendering](https://github.com/joaolessab/next.js#page-pre-rendering)
9.1 [Static Generation (getStaticProps)](https://github.com/joaolessab/next.js#static-generation-getstaticprops)
9.2 [Server-side Rendering (getServerSideProps)](https://github.com/joaolessab/next.js#server-side-rendering-getserversideprops)
10. [Building an API on the Next.js](https://github.com/joaolessab/next.js#building-an-api-on-the-nextjs)
11. [Creating, Connecting and Querying a MongoDB database](https://github.com/joaolessab/next.js#creating-connecting-and-querying-a-mongodb-database)
12. [Calling API directly in pre-rendering functions](https://github.com/joaolessab/next.js#calling-api-directly-in-pre-rendering-functions)
13. [Deploying Next.js app](https://github.com/joaolessab/next.js#deploying-nextjs-app)

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
- [Official API](https://nextjs.org/docs/getting-started);
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
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/file-base-routing.png"/><br/>
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

## Understanding Next.js Project Structure
- Pages, public and styles are the main folders of our project;

#### Pages
- It’s the most important one;
- Folders created inside “pages” folder also acts like “path”;
- For example, if you want to create a path `//domain.com-/news/`, you simply create a subfolder and add the `index.js` file;
- You also can create sibling files to that folder:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/pages-nextjs.png" width="250"/><br/>
- Or we can also do this with the subfolder domain: `http://localhost:3000/news/something-important`;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/pages-nextjs-2.png" width="250"/><br/>

#### Styles
- Holds style files;

#### Public
- Holds public resources that our project uses;
- In a regular React app, you have an index.js on your Public folder;

## Dynamic Pages
- To create a Dynamic page, you will have to use `[]`;
- For example `[news_id].js`;
- Next.js will automatically understand that:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/dynamic-pages1.png" width="250"/><br/>
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/dynamic-pages2.png" width="250"/><br/>

#### Extract Value from Dynamic URL
- Next.js gives us a special hook for it and we can manipulate the URL arguments;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/dynamic-pages3.png" width="350"/><br/>

#### Single Page Routing smoothly
- Next.js has a great feature to link routes without looking like it’s fetching data and waiting for some return;
- Preserver user state;
- Better user experience of reaction;
- Instead of using: `<a href=”//url”>` - we can use the `Link` for the Next.js component;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/dynamic-pages4.png" width="500"/><br/>
- Search engines will also see the finished page;
- We always stay on the single page app;
- It prevents the browser default to send a request and get a new page;

#### Root Component
- Next.js root component will be always placed in the pages folder, named as `_app.js`;
- You can wrap up it with everything that you want to make it default in your application. Example: main layout;
- If it does not exist, you can create it;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/root-component.png" width="500"/><br/>

#### Programmatic Navigation
- We can use `router` from React Hooks;
- React hooks can only be used on root level of the component;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/router-react-hooks.png"/><br/>

#### CSS Modules (Styled Components) 
- It comes out of the box on Next.js from React;
- You can simply name a CSS file like this and import into a Javascript file;
- The classes becomes unique by component;
- It’s very similar to Styled Components;
- You import it as “classes” (Javascript object) on your component and readable as property;
- You can use the same CSS names into different components without crashing them;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/styled-components.png"/><br/>

## Page Pre-Rendering
- When we use useEffect and useState to fetch data from a service API, basically the page waits until the state is refreshed with actual data. That makes the page looks empty or force developers to use Lazy Loading;
- If we want to show information like that, it’s okay, but Next.js offers a Pre-Rendering feature which makes readable to the SEO`s engines and avoid the page to be rendered with lots of loads;
- We want to avoid the page to be updated on the browser;
- We want to pre-render a page on the server-side;
<br/><br/>
- Next.js offers us <b>2 forms of Pre-Rendering:</b>

### Static Generation (getStaticProps): 
- If you need to fetch data, you can use Next.js special function to it: `export function getStaticProps(){ }`;
- You can only use it inside your page component files;
- You cannot use React Hooks inside it;
- It does not work on other component files;
- It will execute this function during the pre-rendering process;
- You are now able to load data, before this component is executed;
- You can add any code that would normally only run on a server: you can access a database, a file system, etc;
- Any code that you write inside this function will never be displayed or executed on the client server;
- This code is going to be executed on the server-side;
- It will never reach your user machines;
- It will always return an object;
- It will always need props inside the object;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/getstaticprops.png"/><br/>
- Now, insert the data from the API, inside the props of component function:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/getstaticprops2.png"/><br/>
- Now, the full HTML page is being shown on the web;
- It’s one of the main features of Next.js;

#### Issues of Static Generation (bad points)
- The data could be outdated;
- If we add a new data into our database, the frontend might not show missing data;
- We can add an extra property, so the data will be more precise;
- This new property is `“revalidate: 10”`;
- Revalidade wants a number and this number is the seconds that Next.js will wait into the next request;
- When we implement that, we unlock a auto increment feature;
- You will ensure that this page will refreshed after some time if there’s some request API coming to this object;
- You won’t have to redeploy after some data change;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/getstaticprops3.png" width="500"/><br/>
- You can work with the param context here. Res and Req is not presented here, but you can use `context.params`;
- If you’re using this function, you will have to export another function `getStaticPaths` if the component it’s a dynamic page and you’re using `getStaticProps`;
- If you’re using `getServerSideProps`, it’s not necessary;
- The reason that we need to use this new function, is because Next.js needs to know which page it needs to generate for each ID, before making it static;
- Check [this commit](https://github.com/joaolessab/next.js/commit/be4aa6b729423cb039b80b4ca997ea8936a810ef);

### Server-side Rendering (getServerSideProps): 
- Sometimes you want to rerender the page on the fly, not every couple of seconds;
- If that’s your goal, this option might sounds better;
- You cannot use React Hooks inside it;
- This function will run on the server, after deployment;
- You can work with context attribute and pass the whole API into it;
- You cannot set revalite on this one, because it does not make any sense;
- You can work with the param context on this function (as well in the static too). The difference is: here, you can use `context.req` and `context.res`;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/get-server-side-props.png"/><br/>

### Which one should we use? getServerSideProps X getStaticProps
- `getServerSideProps` might sound better because it’s guaranteed to run for every request, but that can be a disadvantage, because that means that you need to wait for your page to be generated on every income request;
- If you don’t have data that changes all the time (every second) and if you don’t need access to the request object (like authentication requests), `getStaticProps` is actually better;
- Why is `getStaticProps` better in those conditions? Because there you pre-generate a html file that can be stored and served by a CDN and that simply is faster than regenerating and fetching that data for every income request. So, your page is going to be faster and cached;
- Only use `getServerSideProps` if you really need access to the request object or if you really have data that changes every second (large amount);

## Building an API on the Next.js
- Create a folder called `api` in your `pages` folder;
- Next.js automatically will turn those JS files inside this folder as an API;
- The file names will act as path segments in the URL;
- These JS files are not React component functions;
- Instead, these files will defined functions that will contain server-side code; 
- This code will never be exposed to the final client;
- We can use credentials on those files;

## Creating, Connecting and Querying a MongoDB database
- In this project, we will use <b>MongoDB and MongoDB Atlas</b>;
- Try them for free [here](https://www.mongodb.com/pt-br/cloud/atlas/register);
- Create a Shared Cluster for free [here](https://cloud.mongodb.com/v2/61f94f98fb086b4e653aef80#clusters/edit?filter=starter);
- Create a basic Cluster;
- Create a user under Database Access to read and write permissions;
- Access the Network Access tab and Add your machine’s IP address or click “Allow Access from anywhere”;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/mongo-atlas.png"/><br/>
- Now, go to Connect to Cluster >> Connect your application;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/mongo-atlas2.png"/><br/>
- Install `npm install mongodb@3.6.6 --save package` in your app to connect to the cluster (Yes! Install the version 3.6.6);
- Import MongoClient from mongodb package;
- Creating first API call with Next.js:
- You don’t need to worry about the credentials, because the final user will never see them;
- Building the API file:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/api.png"/><br/>
- Calling the API request:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/api2.png"/><br/>
- Inserting some data:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/api3.png"/><br/>
- Data inserted on Atlas viewer >> Database >> Collection:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/api4.png"/><br/>

## Calling API directly in pre-rendering functions
- If you’re using Pre-render functions to load data from your HTML component, you don’t need to call an external API, you can directly write the function inside the pre–rendering function;
- Also, if you import a library that you will only use on pre-rendering functions, this import will not appears on the bundle of the frontend;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/api5.png"/><br/>
- We cannot forget to map the array and recover the ID field that’s being generated dynamically from the database:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/api6.png" width="500"/><br/>

#### Adding “HEAD” metatag to the page
- We cannot forget to map the array and recover the ID field;
- We have to import “Head” component and use a lot of fragments;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/api7.png"/><br/>

## Deploying Next.js app
- To do that, I’m going to use Vercel: `https://vercel.com/`;
- Vercel it’s a hosting provider for Next.js;
- It belongs to the same team that developed Next.js;
- I’m going to deploy using Github repository: `https://vercel.com/#get-started`;
- After logging in, select the repository from your account:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/deploy.png" width="500"/><br/>
- We can use Vercel for other apps too, but it’s definitely optimized for Next.js;
- For other hosting providers, you might need to minify your app and run: `npm run build`;
- For Vercel, you don’t need to do that;
- Go to the next Vercel page and select your options, then hit “Deploy” button:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/deploy2.png"/><br/>
- We’re using MongoDB Atlas, so we have to allow access from anywhere, so the Vercel servers will be able to build and interact with the repo;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/deploy3.png"/><br/>
- Then, you will see this screen, because your repo was deployed with success:
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/deploy4.png"/><br/>
- Click on the image and check your page, for example: `https://next-js-case-study.vercel.app/`;
- If we want to have your insertions read from the database in the dynamic pages without knowing which IDs are coming from it, we need to set the return of our array to `fallback: ‘blocking’`;
This will make the page to wait until the data is available for the user;
<br/><img src="https://raw.githubusercontent.com/joaolessab/next.js/main/repo-media/deploy5.png" width="500"/><br/>
- Vercel always redeploys when it sees the `main branch` of the repo with new code on it;
