# 🏡 homeFinder — Airbnb Clone

> A full-stack property listing web application built with Node.js, Express, MongoDB, and EJS. Features authentication, authorization, image uploads, interactive maps, and cloud deployment.

<div align="center">
**🗓️ Completed:** February 15, 2025 &nbsp;|&nbsp; **👨‍💻 Type:** Beginner Backend Project &nbsp;|&nbsp; **🚀 Deployed on:** Render

</div>

---

## 📑 Table of Contents

- [📖 About the Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 NPM Packages](#-npm-packages)
- [🏗️ Project Architecture](#️-project-architecture)
- [⚙️ Environment Setup](#️-environment-setup)
- [🚀 Installation & Run](#-installation--run)
- [🗂️ Folder Structure](#️-folder-structure)
- [🔐 Authentication & Authorization](#-authentication--authorization)
- [🖼️ Image Upload Flow](#️-image-upload-flow)
- [🗺️ Maps & Geocoding](#️-maps--geocoding)
- [🧠 Key Learnings & Notes](#-key-learnings--notes)
- [🐛 Problems Faced & Solutions](#-problems-faced--solutions)
- [📋 .gitignore Reference](#-gitignore-reference)
- [☁️ Deployment](#️-deployment)
- [🔮 Future Improvements](#-future-improvements)
- [📄 License](#-license)

---

## 📖 About the Project

**homeFinder** is a beginner-friendly, full-stack web application modeled after Airbnb. It allows users to create accounts, list properties with images and locations, leave reviews with star ratings, and explore listings on an interactive map.

> ⚠️ **Note:** This is a **learning project**, not production-ready. It was built to understand backend fundamentals — from routing and middleware to sessions, authentication, and deployment.

---


## ✨ Features

| Feature | Status |
|---|---|
| 🏠 Create / Read / Update / Delete Listings | ✅ Done |
| 👤 User Signup & Login | ✅ Done |
| 🔐 Session-based Authentication (Passport.js) | ✅ Done |
| 🛡️ Route Authorization (Owner only edit/delete) | ✅ Done |
| ⭐ Star Rating Reviews (Starability CSS) | ✅ Done |
| 🖼️ Image Upload via Cloudinary | ✅ Done |
| 🗺️ Interactive Map (MapTiler SDK) | ✅ Done |
| 📍 Geocoding (Address → Lat/Long) | ✅ Done |
| ⚡ Flash Messages (connect-flash) | ✅ Done |
| 💾 Cloud Database (MongoDB Atlas) | ✅ Done |
| 🗃️ Session Store (connect-mongo) | ✅ Done |
| 🧾 Schema Validation (Joi) | ✅ Done |
| 💰 Tax Toggle Switch (UI) | ✅ Done |
| 🚀 Deployed on Render | ✅ Done |

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- **EJS** — Templating engine
- **EJS-Mate** — Layout/boilerplate support for EJS
- **Bootstrap 5** — Responsive UI framework
- **Starability CSS** — Star rating component

### ⚙️ Backend
- **Node.js** — Runtime environment
- **Express.js** — Web framework & routing

### 🗄️ Database
- **MongoDB** — NoSQL database
- **Mongoose** — ODM for MongoDB
- **MongoDB Atlas** — Cloud-hosted MongoDB

### ☁️ Cloud Services
- **Cloudinary** — Image storage & transformation
- **MapTiler / Mapbox** — Interactive maps & geocoding

### 🔐 Auth & Sessions
- **Passport.js** — Authentication middleware
- **passport-local** — Username/password strategy
- **passport-local-mongoose** — Mongoose + Passport integration
- **express-session** — Session management
- **connect-mongo** — MongoDB-backed session store
- **connect-flash** — Flash messages

---

## 📦 NPM Packages

<details>
<summary>Click Here to Know About All Npm Packages:</summary>

| Package | Purpose |
|---|---|
| `express` | Web framework |
| `ejs` | Templating engine |
| `ejs-mate` | EJS layout support |
| `mongoose` | MongoDB ODM |
| `dotenv` | Environment variable loader |
| `method-override` | Support PUT/DELETE from HTML forms |
| `joi` | Schema validation |
| `multer` | Handle multipart/form-data (file uploads) |
| `multer-storage-cloudinary` | Cloudinary storage engine for Multer |
| `cloudinary` | Cloudinary SDK |
| `axios` | HTTP requests (for geocoding API) |
| `passport` | Authentication middleware |
| `passport-local` | Local username/password strategy |
| `passport-local-mongoose` | Mongoose plugin for Passport |
| `express-session` | Session handling |
| `connect-mongo` | MongoDB session store |
| `connect-flash` | Flash messages |

</details>

---

## More step to add:
  - showing custom error message on `error.ejs` folder with custom messages such as: message, trace, stack.
  - i've done schema validatin with the help of `hoppscotch` data send.
  - `joi` library will help us to make the validate our schema by giving custom validation on mongodb.
  - the folder is preffered to add on: models or parent folder. with written on object mdoesl.
  - for joi Package we can validate our schema with: `listing.validate(req.body)` which joi itself identify a validatein and print on console.
  - with try catch block on middleware we've vliadate of listing with each validatino must be strictly passed.
  -  for showing the message of all the rror we can map and jion then on single value and print to the user.
  - Innitially my parent file is `server.js` which i moved to `app.js` later



## Project Phase 2:
  ## Mmonggodb:
    - for shoing a review liker ating we've to create the model realted to that data.
    - and sindie that model we've to create another file for the constratin and can be add a datee of current.

  
  ## Middleware:
  - two types of middelware:
    - if username is deleted their related like post comment is deleted which connected mdoel called the cascadiing deletion.
   - the mongoose middleeware will be different compare to express midelware.-
    - ex: docment middleware, query middleware.
    - on query middleware execute when we call: `exec() or then()` or `await` on a query object.
  
  - with type like: `Schema.Types.ObjectId`
  - have to create a objectId for the unique identification.
  
  ## Form connection on the Database Method:
    - after creagin our form, we don't create separeate relatioon rather we wil use the one to many relationship, with: `post: /listings/:id/reviews` with dynamic id.
    - with `post` metho form we can get the route data, 
    - while creatin our models, of one to many database, we've to store wit hthe squillion method, also have to us the `ref` mean referrign to another database. on the `show.ejs` after stylying our page, with: `post:/listings:id/reviews` method for access a review, which willl be a: one to many relationship with listings.
    - on the functinoalpart part create the `post router` 
    

  ## Validation:
    - With Bootsrap inside the `public/js` folder we connect al our boilerplaet
    - we can check our server request iwth the `hopsscotch`
    - while validating the server we'll use the joi for validating it, which we'l be pass a middleware: `app.post` method
    - delete the particular objedId from database: ` db.reviews.deleteOne({_id: ObjectId("67acbc16bd2e7573243c3715")})`
    - while we can't directly access the value of inside reviews we can simply use a populate method
    - Populate method: `await Listing.findById(id).populate("reviews")`
    - for getting the data we can get any particular value with: `object_id`
    - with Mongo pull operatoro the: `$pull operator` remove a eisting array all instancedc of a value that match specificed condition like: `$in, $set, $between`
    -  

  ## Cruds:
    - For accessing the aprticular id: `app.post("/listings/:id/reviews", async (req, res)=>await Listing.findById(req.params.id)new Review(req.body.review)})`
    - while accessin on the ejs: `name[reviews]`
    - For deleting out Review ew can create route: `/listings/id/reviews/:reviewsId` for delete the particular review.
    - For get the id of profile and review we can use: `req.params`on listing we can use: `findByIdAndUpdate` for updating a particular id.
    - inside the listing if we want to delete a particular id:
      - we can use: `db.listings.find({title: "Mountain view Apartment})[{id: id, newREviewsId}]`
    - delete a partciular review: `schema.post("findOneAndDelete", async=>await Review.deleteMany({_id:${in:lisitng.reviews}}))`
    - For delete the partciular listing with: `$in` method also delete that correspondend reviews.
    - 


  ## Express Error:
    - for gettiing the Express Error we've to restrcuture of our Listings
    - on `new routes` folder we can make new router: `express.Router()` with export the module
    -  we can redirect when needed with; `app.use("/listings", listings)`
    - 

  ## Express Router, Cookies:
  - Express Router is the way to organize our express application which our primary file doens't become bloated and create new instance router for any partciular routes.
    - For express router we've to restructure our folder setup.
    - we can code splitting or app.js file with movign where it required in one file it's become clutter/difficulat to understand
    - it's not compulsory to use a express router but generaly it's good practice for the large scall websites.
    - the middleware is capable of only perform single action while between the req to response time.
    -  we've create multiple routes of the `users and posts`
    - for destrucuted the same routes, we can make related routes `/users`
    -  in the `post`.js inside the classroom folder we'll be only adding a all the routes which area related to the `classroom/` folder.
    >:white_check_mark: Now We don't require to use `app.get` now can use `router.get` with export our export `{router}`.
    - our Code will not still work cause there's the diferent path we rquired on the router object.
    - as of now we've send required to: `app.use("/", users)`  now our routes will go to: `app.use("/users", users)`
    - now our all the path will redirect to new path with we can remove all the common path now as router wil handle it.

  ## Cookies:
    - it's a small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser. 
    - Cookies are tiny bloc of data shtat stored on the web browser.
    ### Use Case of Cookie:
      1. Session Managment
      2. Tracking a user for showing a targeted ads/relevance rpdocuts
    - Cookies are paired with the key value pair which we can see on our web browser.

    ### How to Send cookies using express:
      1. on the `localhost:3000/setCookies` route we can send with: `res.cookie("name", "dipesh");   res.cookie("country", "Nepal")` Which are on the key value pari.
      2. We can it'll persise that data.
      2.   we can read the docs on express webiste with res.cookie area.
    ## Cookies Parse Package:
      - As of now only one route can access the particular cookies But for We want to make the cookies to access by all routes .
      - Also we want to make the parse(read) for getting a data
      -  We can access the cookie with: `req.cookies ` 
      - For Printing a Cookie we can use the: `console.dir`
  >:warning: Once we send the cookies it'll have on other routes for stored, But when we go to browser it'll print a `undefined` Cause For parsing the cookies on the express is not possible we've to use the some sort of middleware for accessing it such as: `cookie-parse`
    -  We can parse with the `app.use(cookieParser)` for accessing by all routes.
    - Usually for the related to the authorization/authenticatoin we can use the cookies.
    - when we want to set the cookies by default we can do by: `req.cookies.country="masters"`


    ## Signed Cookies:
      - There's the normal cookis and signed cookies, which is similar to some kind of the physical sign, that putting a stamps/sign which the integiry of the data.
        - We Use the signed cookies for avoiding a data temparing which save from hacker and other unintentional behvaiour.
        - After sending the signed cookies We can verify that it's a not temperated and data integrity is not lost.
        ## How to Implement the Signed Cookies:
          - if we set the `{signed: true}` while sending the cookies it's treating as a sign cookies.
          - Also we've to use the `secretcode` for signed cookied. which goes to encoded/encrypted unreadable versio.
          - such as: `app.use('secretCode)` and `res.cookie({signed: true})` which become a signed cookies now.
          - now we can access with `req.cookies`

  ## State:
    -   protocol mean what kind of request is going what kind of response is going. the rules request, response follow called a protocal.
    - STateful protocal persist the data status and session infomration such as: `ftp (file transfer protocal)`
    - Stateless procotcal: Doesn't persist the data.

    
  ## Express Session:
    - Which Makes Our sesion stateful, for storign the session related information.
    - Session id is stored on the form of cookies format.
    ## Why Important:
      - Some customer are added some item on their carts like laptop and they switched on adding the any sportss product, should laptop added cart should be deleted, no absoluletly not, if we just use the stateless protocal it will not stored, but with the stateful protocal we can stored that.
      - In cookies there is the limit, to save the information of the limit. it is quite less compare to temp storage. as well the information we stored on cookies is not that secure. 
      - In cookies we just stored the session id not the entire data items. 
    ## How to Implement Express Session:
    - For testing the expres-session i created a new folder called express-session(but other are doing inside on classoom folder) and inside of it session.js and first i required a express and listen port. 
    - now i just test on /test route. with on inspect application with deleted the existing data i can see the new data on there called connect.sid. this is the unique session id.
  the one things we can notice on there, on cookies we can see even if we go to another tab on same browser that we can see thee session id same.
  -  like on above given value connection id ans beloe cookie value connection id are same cause: within one browser if we open the tab on different tabs, the express with treat that as a 1 session. for example if we try with another browser we can see there the different session id. for using the same property . 
  - I will create a one route to count how many we have open that session with counting. till now the count is not tracked like counting how many times we have visited.

  - Implmentation Way: `req.session.count?req.session.count++:req.session.count=1` Iniitaed with 1 if not exist. 
  - res.send(`you visited the website ${req.session.count} times.`) (with this condition i increament to 1 of the count, even it will work on new tab.


  ## Session:
  - Sesion mean that client is sending the response to server and vise versa, this is the practical examples of how session would be used.
  - the one things that noted is that the session of count is stored on the temporary basis.
  - In express there is the warning related to the `express-session`. 
  - The default server side session storage which we also called a memoryStore, is not purposly not designed for the production envionment. 
  - In express session the warning are coming here, for removing them we have to add 2 option name called, resave and saveinitialized option.
  - the resave forces the session to be if the session, in resave whether the the changes/modified or not it will resave to the session. then the resave by default we will set false for avoid any terminal deprecated 
  - It will save false on `app.use(session)` and the saveinitialized.
  - Notes: 
    - Till now we are doing the development, in development there is the 2 stage, which we done under our sysem and another is production stage: where other peoples are using our website, in development we can store the MemoryStore /session-storage but when we deployed then it will be the production envionment then we will not use the memoryStore then we will use the Session Store like:Cassandra Store, connect-dynamodb. connect-m0ng0. this all are temporary store which aere well known based on database. 
    - The one thing we can do is inside `app.use(session())` (the option that we define we can store on any variable and call that variable inside sesion.))
    ### Storing a User Info:
      - Inside a `session.js` We can create a new route called the `/signup` which will take the `req.query` that extract that name.
      - With the help of query string with register?name=dipesh, i can extract that name store into variable.
      - If name is not exist we can give the default name. 
      - Same like count we can get the object propery when ew do the:` Session {cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }}`
      - Which have Session Info About the path and other info.
      - When we assign a `res.session.name='dipesh'` which we add the Value will print there.
      - We store the `req.session` also we can use that value on another callback/function/routes. 
      - Now if we go to hello route which we create we can see there that value we have added on the another route, which that acces. 
      - The better way to do that is redirect them to the hello route with that same value.
    
    ## Connect Flash:
      - It's the Npm package for help use to flash our message to frontend ui.
      - For ex: on our listing website, when we have done the crud operation the message should pop up of sucess or faillure message. 
      - It can pop of on the alert or added. but when we refresh that pages the popup shouldn't come. 
      - As those message who appear on single time. on this messagge there could be triggered. 
      - Like when added different messagge should appear when added different message should appear. some messagees are showing the error.

     ###  How to use a Connect Flash:
        - We've to install with: `npm i connect-flash` which comes under the middleware.
        - For flash that specific message we write the req.flash.
        - Inside the req.flash we passed the 2 things.
        - 2 parameter are key and message.
        - Based on key we identify the particular request.
      >:warning:  For using the connect flash it is compulsory to use the express-session and cookieParser. 
      - Till now our flash is being done but we also have to render to the client side.
      - For render on the ui page: we have to create views folder with `page.ejs` and inside there i will render that.
      - For getting a name we can render with: `req.session.name`
      - with can show the page with: `res.render("page.ejs", {name: req.session.name});`
      - parse the name to access the name from request server and can print on the `page.ejs`
      - `res.locals.message=req.flash("success")` can send the success message to response 
      - For passing the error message, we can extract the errors on the middleware  of `app.use()` and can use that message to print a connect flash message.
      - Till now we have done the cookies operation now we willl operate the flash message.
      - When we create a new listing it should flash above of saying the new listng is created. 
      - Before the app.use routes i have to use the flash method so it can go on all of the the route.
      - on the `listings.js` we can se the `res.flash` message with message where we can pass on the middleware with such as: `app.use(flash())`
      - We can pass to the client side with: `res.locals.success=req.flash(success)`
      - Now in the next steps, we will define the success and failure message partial.
      -  till now the flash message doesn't look good which we can improve by the styling:
      - We can use the different alerts but for now , we will use the bootsrap flash.
      - Instead of showing our message inside the index.ejs we can simply showing our success message to boilerplate.ejs.
      - Like we created the a new template for the success template. 
      - Inside include folder i will create a new ejs folder called: flash.ejs (for the template).
      - which ex: `<div class="container"><%- include("../include/flash.ejs") %></div>`
      - (why just before the body, cause we want to show before the body. now message is showing. now with the bootstrap alert message.
    
    ## Session Knowldge Implemntation:
      - `npm i express-session` package for implneting the session on the node server.
      - we've import and also pass on the middlewaer with: `app.use(session) and app.use(sessionUpdates)`
      - now on the console we can see `connect.sid` which mean successfull connection
      - the session is heavily used by the cookies and have to send the cookie manually such as: `path: '/;, httpOnly: true, secure: false, maxAge: null.`
      - The cookies is track our session.
    >:warning: by default cookie doesn't have any expirary date which alled the `non persistent cookie` which delete our cookie when we close that browser non persisted data.
    - For setting the expirry data on the cookie we set with the second format:
    - ex: ` cookie:{expires: Date.now()+7*24*60*60*1000,maxAge: 7*24*60*60*1000,httpOnly: true}`
    - Which mean converted to maxAge by 7 days.
    - `httpOnly:true` help us to safe our site from the cross site vulnerblity attack, which we can verify by the browser cookie area.


    ## Next Middleware:
      - The next() function in Express is a built-in function that is used in middleware to pass control to the next middleware function in the stack.
      - If we don't call next(), the request will be left hanging, and Express won't move on to the next middleware or route handler.
    -   we can show the user but it is still not fully functional. cause it will still show even we don't add any new listing, it will still show that alert.
  
  ## Success Error Message:
    -   for the understanding the success that we send to our client side is array, even though if we don't send anything it is empty array, and that empty arrray keep going frontend and take his space. 
    - For solving that we also have to add one more condition inside flash.ejs of && success.length (mean there should be some value on array, now it will work as expected.)
    -  We can create a dismits alert inline of fade show. we also have to create a button and if we click on tbat button that alert will be vanished. 
    - I use the bootstrap dismissible method and make z-index top of that things to fix it.
    - Error flash message: let's suppose you have the listing and that listing is deleted and if you again go to that url we will redirecterd them to the all listing with flash message show saying that the listing you trying to access is deleted like that also we can do similar to the updated old id.


  ## Routes:
  - Now we can do that with the same logic we can implement on different routes like delete, update, edit, and review route.
  - I just add the req.flash ("success", "review deleted") like this on listing.js and review.js with also on review routes.
  - i just make on show route with if does not exist just show the res.flash("error"). till now i haven't make the error message on app.use method on app.js i have to create that. in ejs we have created a success flash we also have to create for the error route. now that works we also can apply that method to the update route with previous id. 
  

  ## Authentication & Authorization:
Here's a more Consise version:
  - What really Mean:
- Authentication: Verifies user identity (e.g., login).
- Authorization: Determines user access to specific content after login.

-   Password Storage:
- Store passwords in hashed form (e.g., Bcrypt), not plain text.
- During login, hash the input password and compare it to the stored hash.

- Hashing:
- One-way function with fixed-length output, making the password secure and unrecoverable.

- Salting
- Adds random data to passwords before hashing to prevent attacks like reverse lookup.

Node.js Authentication:
- Passport.js: Middleware for authentication with various strategies (e.g., Google, Facebook).
- passport-local: Basic username/password authentication.
- passport-local-mongoose: Simplifies Passport integration with MongoDB.
- have to download : `passport-local, passport-local-mongoose` For start Implementing.

## Model:
- Now we have to define the user Model: inside models i will create a new file called user.js. 
- In signup/login there could be the multiple of pages we can, for now we will just start with smallest number of fields. 
- First we required the mogoose and Schema, now we will start with the email, username and passport.
>:white_check_mark: #but the `passport-local-mogoose` automaticaly creates add a username and password automatically hash and salt field.
- For now we just creates a email field. `userSchema.plugin(passportLocalMongoose)`; 
- (it will automatically creates a username and password)

-   `password-mongoose` add some method to your Schema automatically, like set password, change password and much more method will automatically implement.
-  Method meaning will understand when we work on project.

  ## Configuring Strategy:
- Configuring Strategy: we have to apply the basic settings to use a `passport-local` first we will require on app.js.
- For implement the `passport` we required to have the session, we can track the session we will just use the passport session.
- Just use on `app.use(passport.initialize())` (For track you can say it's a rules to configure before implemet to.it's a middleware that intitliaze passport )
- `passport.session()` (it helps us to identify the users as they browser from page to page. it will associsated with each on user)
- `passport.use(new localStrategy(User.authenticate()))`; (this middleware will passed all of the request that comes on our site will have to pass from our middleware.)
-  `passport.serializeUser(User.serializeUser)`;
- `passport.deserializeUser(User.deserializeUser)`; ( generate a function that is used by passport to serialse user into session, the all of the users data is stored is called seriealise and unstore called unseriealise. )


## fakeUser signup For Testing
- This is just for the testing Purpose.
- Create a new route called register to:
- `app.get("/fakeUser", async (req, res)=>{
    let fakeUser=new User({
      email: "dipeshsharma@gmail.com",
      username: "neww"
    })
    let newValue= await User.register(fakeUser, "password")
    res.send(newValue)})
- (inside here i create a fakeUser with User same name as defined rules).
- With the register method, i can able to do: Instead of you having to write code to: Salt before hashing password, Hash the passwor, Check if the username already exists, Save the user info, Set up authentication, register does all of that for you in one simple method.
- Till now we haven't save the user and doesn't perform anything, the above method on app.use says that we will use localStrategy, seriealise, deserializeUser, and passportLocalMongoose use saying it.  ) 
## Demo:
-  Next we will create a demo user, with there i createa a new demoUser route same as fakeUser with register.
- register(user, password, cb) (with passwords we also can pass the callback inside the register which will convert into hash function., it also create the option of whether the username is unique or not )
- (this is the same of demoUser which i create a twice)
## Signup user Functionality:
- Now we will add the functionality of with Signup User with both the get and post method.
- It will be the signup route)
- Inside the routes folder i created a `user.js` and inside there i import the experss.
- Which also exports to module.exports=router; then we will require the `user.js` on app.js.
- Then next process is to that `user.js` create a app.use like 2 other i also changed their name for not being confusion from : review to `reviewRouter` on the `app.js`.
- I creatted a signup routes inside `user.js` which is working now.
- Now inside the views folder i created another folder called users inside there i created a signup.ejs form route.
- The signup route redirected to the signup.ejs.
- the username i copied from the new.ejs and also email is simiilar to username.
- Now we will implement the post method. in signup route first i createa form with post method - - - first i create a get route with just for the interaction i created a logic in post route, with first i extractedd the email, username and password. 
- And the password is extracted in the form of `user.register`, which will hashed and salt the password for secure our site. 

## Login Page Functionality:
- Login page: get route. with i just created the same login ui of signup ui.
- Next i created the `router.post` method: `router.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true})`,
- (in mean passport.authenticate(with the local server which we used where should we redirect and with send like a flash message. )
- The one things i have improved is validateListing move to the routes with listing.js and imported that file on other files. 
## Connecting login routes:
- We want to if anyone wants to create a listings they must have logged in before create a listing.
- How can we check if user is logged in or not? 
  -(use the req.isAuthenticated() passport method).
- `if(!req.isAuthenticated()){req.flash("error", "Not Logged Int")eturn res.redirect("/listings")} `
- (in here i check if the error is logged in or not if not i will show the flash we can redirect them to the login page.) 
- (if we add this inside the route it will show the user details. but will now show the passsword ).
- For editing and deleting the route we can also copy the routes but better way to do is transfer our logic in middleware and pass that functioon.
### Middleware Logging Implementation:
- I created a new file name called` middleware.js` and there i wrote the login inside the module.exports.isLoggedin and pass that function to listing.js with before i require the file.
>:white_check_mark: on thing keep in mind we have to write the ename inside the curly brace for destructured the function from the module.
- i also pass have to pass on other method, for doing the crud operation.

##  logout route:
- Now we will implement the logout route.
- create a get request and with that method we will logout the user.
- There is different approach to implement the logout but passport makes us easy to do that.
- Already req.logout method exist,
- first it will use the serialse and deserialize user methos use then will delete the user from the current session.
- For logout them we have to write the req.logout.
- For logout them it is a own callback as parameter, when use will logout immediately what should happended handled the callback. 
- We can define the `err` parameter  (if sometime passport.js failed , then it will call that error otherwise pass the next(err) method). 
- in case it didn't get error it will be empty undefined, we asdd the err paremter on if econditon else it will redirecterd to main page with flash message. 

## Stylying signup/login:
- First i created a 3 navbar item.
- In any website you will not show all of 3 signin method, if use already logged in it only show logout vice versa.
- For fix that we will use the in req there is user information store, we will use that.
- Mean if `req.user` is undefined mean it only show the log in method not logout vice versa. 
- We can't directly access the `req.user` method that we can use on ejs instead on our app.use middleware of error and flash message.
-  we passed the `req.user` to the currUser variable: `res.locals.currUser=req.user;` 
- Now with if condition we can implement on ejs) (the error i am encounter is that i passed the next 2 times on middleware)
- Login after signup - passport login package automaticly establsh login session, mean if we sign up we haven't logged in.
- As a user we signup we can verify on db but automatically logged in, in all of the platform it happened automatically log in we have to implement that. 
- What we want is that when signup happened it should automatically logged it.
- When database is stored it will automatically logged in. 
- Ex:  req.login(registeredUser, (err)=>{
      if(err){
        return next(err);
      }
      req.flash("success", "welcome to the airbnb");
      res.redirect("/listings");
  })
-  (i pass with first show error if any gogt errror else do next step. )

## Post Login Page:
- When we create a new listing and after logged in it redirected us to the main page, for user convenience we will redirected them to where they left.
- For building the functionallity one things we have to know in request object there is lots of information is stored,
- When i print the console of req from middleware.js we will see all details on there.
- Even it will tell what path we are trying to access, also stored the session related info. 
- I also console the originalUrl to check our url. this is the originalUrl we want to redirected the user after the login. 
- We have to save the originalUrl which is a url on the middlweare before redirected there we only want to redirected them when user is logged in . 
- We only save when user is not logged in. 
We will store dhte req.session.redirectUrl=req.originalUrl (in middleware). the flow of this approach: when user is logged in successfully then instantly where is her trying to access the url, We will redirect there.
- But there is the one problem We can redirect on req.session.redirectUrl (but in passport.js when the req.isAuthenticated and success the passport in default wil reset our session.
- The response will get the undefined. ) for fix that the redirectUrl will save on local variable where the local is accessible everywhere.
- Where passport don't have the access to reset our session. 
- I created a another module.exports if the req.session.redirectUrl exist We will store that value like this:  
- Ex:`if(req.session.redirectUrl)  res.locals.redirectUrl=req.session.redirectUrl`
- We will call next then We also have to call hte middleware on `user.js` and use same name on login route, also don't forget to require the file on `user.js` . 
- We have done but there is the error, when We directly trying to login it will show page not found cause We will redirected where they left but now: when We diretly login at that time isLoggedin in triggered, and then thre redirectUrl is not exist which wil casue the error. 
- We can create new variable and check conditon.  
- let redirectUrl=res.locals.redirectUrl || "/listings"; (it check the condition.)
>fire: The smalll flaus We have to know like the small details We are trying to add on our Website we have to know clearly, in case any error got during implement which will get the reason.

## listing owner:
- Next with all of the listings we will associate with the owner.
- Why it is necessery to associated with owner. we can correct authorized to the user.
- It is like giving permission to the correct person. this is also the  authorization.
- Till we only giving the lisitng to the listing later we will also give the user of owner to delete any reviews. 
- Before this we have to add the owner property. for this we have to add the owner from the schema. 
- Inside the listing.js inside the models we will create a single ownder object array. 
- For that the owneer also should be the registered user. with giving the ref to owner.
- if we check on dbs the data will not be initialiazed yet , as we haven't initialiazed yet the Owner before this due to this we can't see the owner of any listing.
- for changing that we will initialized the database.
- one things we can do is inside the `data.js` we can give the owner property:
  - also we can add the owner in bulk for all of the listing.
- We can addd the objectId for everyone which is repeatable things instead  we will go to `index.js` which initialiazed our database. 
- I copied any random listing objectId,   `initData.data.map((obj)=>({...obj, Owner: "67b4cee58dc05bd3c54a3302"}));` (it gives the every listing owner of same name to eveyone. )
- The map function will create a new object with returning new object with the changes.
- Now it associated with the obejct id each one for.
- Inside the route listing with id route we can .populate our reviews as it is multiple owner we can populate it. 
- remember that when using Mongoose, if a reference field isn't populated, it just returns the ObjectId.
  - ex: `.populate({path: "reviews",populate: { path: "author" }}).populate("owner");`
   - (with this only becomes the populate)

## Authorization Data Access:
- Now with the populate method i am not able to do that instead i add the owner name for each on of `data.js`.
- If we just show the `listing.owner` it will print all of the data we just need username so we can write `owner.username` to show it. this is for the previous data but for creating a cofiguring with the new user:
- Now we will make the limit which person created those listing only can edit and delete it.
- Now i have to delete and edit button who are not the owner of that listing.
- For hide that feature from the user we have to know the who is the owner of listing.
-  who is the user that trying to edit/delete that listinng.
- the current user is stored on locals and compare to the ejs template listing.
- We can make the condition like: `if(currUser && currUser._id.equals(listing.owner) ).equals` is a method of comparing between two. `like == method`. 
- for making the authorized for the listing: 
- this is for setting the authorized. in the update route.
- Iin the put show id route it is `findByIdAndUpdate` si working on there.
-  now we will separate the `findByIdAndUpdate` will separate into two parts.
- Cause we will find where that listing is located and will check if that user stored on `res.locals` is that same user only we will give access.
## Authorization For Listing:
-  i have not fully read this topic .
- Now we will set the authorizatoin for listing:
- for this with every review there should be the author, and for deleting the review only author will have the access to delete. 
- first i give the types fo author on `review.js` of model models.
- Like we can see post on linkedin but can't post the comment on there same implement we will apply here.
- We only show the leave a review option to the logged in user with add the logic of if(currUser) on show.ejs.
- now we have protect frontend but can anyone send the request from postman or hoppscotch , anyone can create without logged in.
- I just pass the fucntion on review.js with require from middleware.
- Now how can we store the author. @i got the error of not submitting the reviews.
-  #didn't watch the part 2 for creating a review.

## Phase 3 Extra Features:
- In our project we have build the core funcitonality till now, mean this understand will not only used on this project it will used fro on any porject. : 
- Phase 3 in here we build the extra thing:  for making a better we will add more feature.
  MVC: Model, View, Controller (Implement Design Pattern for Listings) (mvc is the term in development, it will not add anything but make better of existing code.)
- In the designed code where eveything is there, backend frontend and database, how it code is written. we divide into 3 components. 
- This is our just pattern mean fixed way to write the structured code:(models: all of the models is written there and it uses is store the database. view: render the frontend code,  controller: we will store the core functionality of backend)
- Inside the `listing.js` of routes, there is the asynchourns callback which will shifted to the another file, so that routes folder are compact more. 
- in our code we must possibly create the must readable code so with us other everyone can understand the code which file located here. 
- All componenent inside the models segregrate is helped us to do mvc.
- All of the callback we will move to another folder. 
- we have first created a controller folder. 
- inside there we create a fild name: listings.js.
  - the asynchouns call back indside routes folder and `listing.js` file, we will shifted to the listings.js inside controller. 
-  "/", wrapasync (index) instead i use the (listingController.index) (which runs and i already imported the listingController above from my controller model.)
>:fire: Which we make the mvc pattern:   i have done same with make the separat on for all of the 3, listing, user and review. it can't pas the multiple of middleware only 1 can pass, before this it got's me the error instead i will not pasas the middleeware which then working now.

### Router.Route:
- Router.route: a way to group together routes with different verbs but same paths.
- In initially we write all of the `app.get` and `app.post` all of the method we writtern on app.js and then based upon what they are we shifted them to the routes folder.
- the all of the router we written here , is also there is a way to written in compact way which is the router.route.
- Instead of making the multiple logic for the same routes as differeent mmethod we can simple write `Router.route` adn can simply write all of the routes mehtod inside there:
- ex:  router.route("/login").get( async (req, res)=>{ res.render("users/login.ejs")}) 
-  no i will just do with all of there.

## Rating Stars Better Way:
- rating are shows in the not quite good way like i have to restyle our rating. in other website start froms are shown.
- till now the stylig of rating is only the range based which is quite not good i have to improve.
- We will use the `starblity` library to shown the how many stars. now we will copy the prefered css and create a new file called: rating.css inside public folder. 
- Wen we copy paste the `starblity` slot css to rating.css.
-  i have to import them on boilerplate.js:   `<link rel="stylesheet" href="/css/rating.css">` (i import in boilerplate.js ).
- then i paste the starblity-slot which working now.


## Image Upload:
-  image upload: 
  - image upload process is quite lenghty process but with our code we can't directly send images to backend.
  - Why Server Can't Recieve a data:
   1) backend only recieving a raw format like raw text with this code backend can't accept the image format 
   2) size limit: we can send but when files comes in backend where will we save the files. we know on mongodb only bson format data is saved. in bson there is the limit in bson there is limit for file size.
-  we will make our form capable of sending our forms to backend.
- Now first we have to maek the form to accept our files. 
- With form capable of sending files. second steps would be save those files. 
- Wwe will not use the mongooes to save those files. instead we will use the 3rd party service.-
- those service are cloud service famous is aws cloud.
- till now we are not doiing the production level as right now we are just doing the development for that we will use 3rd party service just for development. the party service is to save our fiels.
- They will give the url link of the links. 3rd steps would be save this links on mongoose.


## Manipulate Form data:
- first steps is to manipulate our forms. 
- till now form only can send the urlencoded data which we use by sayng the express.urlencoded. 
- for sending the files we will create a new parameter. which is the enctype: "multipart/form-data". (encodedtype). multipart form data are capable of sending data of multiple forms.
 - `<form class="row g-3 needs-validation" action="/listings" method="POST" novalidate enctype="multipart/form-data">`
 -  (i added the enctype enctype are just 3 types) `.post((req, res)=>{ res.send(req.body) }) `
- if i just send the req.body, we will get the empty object.th reason is to get the empty object is, when new data is parsing it will not understasnd for that we will use the parser. for handling that we will use the multer.

### Multer for Data Process:
- Multer npm package is a middleware for handling the multiapart/form-data which is for uploading files. multer will not process any form which is not multipart. const multer=require("multer");
- `const upload=multer({dest: "uploads/"}) `
  - (with this way i required and i have to define the destination of the files.
  -  this mean for parsing the form data we will use the multer, from the forms multer will extract the files. 
  - and will save the images inside the upload folder. ) that mean we say file will be where saved, for saving the files actually inside the routes we will use the upload.single("field-name) 
  - `.post(upload.single("listing[image]"), (req, res)=>{res.send(req.file)})`
  -  (upload single mean one file at a time and where is our database location define there and what we want to show req.file mean file details, it show output like this;{"fieldname":"listing[image]","originalname":"dsa-core-concept.png","encoding":"7bit","mimetype":"image/png","buffer":{"type":"Buffer","data":) 

### Cloud Setup:
 -  cloud setup: we will use different third party site but for now we will use the cloudinary & .env file. 
 - first we will crate a account. and on product envionment credintials we have to authorized our code for get access of files. 
 - for our code we have to get the credintials. we share the code but we will never share the credintials.
 -  this is important piece of info. in credintials there is 3 thing: Cloud Name, API SECRET and api secret, api envionment variable. 
 - this credintials impoortant credintials details write on other files. which we not upload on internet.
 - for saving all of our credinatial info we will create a new file extension which is .env file. 
 - .env task is to store our envionment variable.
 -   the file name will not have only .env i will create on outer file. we will store the SECRET with : SECRET=value, SECRET always will be the capital and there will be not any space and double quoted. once the environment variable stored on .env we can use anywhere on our project.
 - it will load enviviorenemtn variable from .env file. 
 - the .env files we can't directly access that, for accessing that we will use another third party libarary called: dotenv (npmpackage) . it will not worked on dependency it will work as indepedent. 
-  we have to ad the condition of if(process.env.NODE_ENV!="production"){require("dotenv).config()} (we are currently one the development phases in here we are building the projects and deployment is deplying our website.
- .env file we only use on development phases not in production phases. never upload the .env file on github. 
- later when will hosting, deploy the credintials we store on .env wil see the another method.
- during deployment time we will create a new envionment variable of node envionment to set production when our envionment value is not production  then we will use other ise not) we have to store the credintional of cloudnary not our credinatial.
- remember that don't use any space, comma, semicolon, just go next line. 
### Multer Store Cloudinary:
-  for storinng our files, we will use the multer store cloudnary, for that we will use the two npm libarary one cloudinary and another is: `multer-storage-cloudinary. ` 
 - as right now we have installed a lot's of libraary: this is huge topic we have to install 
 - , later on we have to do own research for our own product it will take time, don't worry. 
 - as right now for feature we know the librarry which we feel quite easy, but when  we try to implement our own thing on website it will take time to research and do . 
  we will install two package, `cloudinary` and `multer-storage-cloudinary`.
  -  for using them we will create a individual own file. in there we will configure a init cloudinary. 

#### Setup:
- first i created a file name called:cloudConfig.js which i will use only for the configuration.
-  we have to configure first. for configruation we have to authorized the cloudname, apikey and api secret. 
CLOUD_NAME=MeyKey
CLOUD_API_KEY=Mykey
CLOUD_API_SECRET=myKey
- 
  (this is dummy i changed the api code due to security reason,
-  this is the cloud info which is not share with anyone i copy from my cloudninary api keys and pasted on the .env but have to give the name by own) 
- `cloudinary.config({ cloud_name: process.env.CLOUD_NAME, api_key: CLOUD_API_KEY,api_secret: CLOUD_API_SECRET})`
  -  (i have to config on config.js file with the same name with givn name before this i also hav to reuire those 2 npm package after installing. )
  -  (in .env we can give any name but on cloudConfig.js we have to give the defailt name.)
  now we will make the storage of those files where will we store it.
  -  const storage=new CloudinaryStorage({
    cloud_name: cloudinary,
    params:{
      folder: "air-bnb-clone",
      allowedFormat:["png", "jpg", "jpeg"],
      // public_id: (req, file)=> "computed-file"
    }
  }) 
  - (with this way like giving the name and folder name and allowed format we have defined the storage location. )
  module.exports={
    cloudinary,
    storage,
  } (we will both export them and where we use them on our listing.js. )
 - const {storage}=require("../cloudConfig.js");
 - const upload=multer({storage}) (first i require the storage on listing.js and then i show the upload file location )
 - now our form will send the data to backend and can parsed now. 
 - {"fieldname":"listing[image]","originalname":"5be3643c2ac3458b207ee9047.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"uploads/","filename":"8e7be0d055cb9d87fbdb614c690f631b","path":"uploads\\8e7be0d055c87fbdb614c690f631b","size":105791} 
 - (now if we upload any files, now it will take some millisecond to send data to bakcen diand send this knd of raw file with the image link, as depending on file size it will take that time ammount to load it.)


 - 5be3643c2ac3441bff5358b207e047.jpg (the link i am getting wil stored on mongodb database);

 ### Modify Listing Schema:
 - first we have to modify the listing schema first our image schema is just simple string. 
 - in our image now we will store 2 value. first we will save the path(file url), and also save the filename.:image: { url: String, filename: STring } filnenmae not that effective right now but it will require later.
 - in later when we want to update the file then filanem would be useful.
 -  rest of the would be same just 2 values would be added on image. one will come url and another filename. 
 - if we try to run our website it will break cause based on this our entire website is mmade.
 - in listing.js `router.post("/",upload.single("listing[image]))`, i will use upload.


### Listing IMage Upload
-  listing.js image update. now i passed the upload.single inside that post route. the upload.single file logic will write on controller. also i do one thign validateListing is move after the upload.single cause it willl cause the error. now inside the controller listings.js: i will use the :  
-       let url=req.file.path;
            let filename=req.file.filename; (to get the url and filename fo that file. )
-  file mean entrie object and path mean url and filename what types. now if i just print the console.log(url, ".." filename) (it will print it)
-  const newListing=new Listing(req.body.listing);
            newListing.owner=req.user._id;
            newListing.image={url, filename};
            await newListing.save();
            req.flash("success", "New listing created") (but first i have to define the newlistign otherwise it will not worked then i can use the newListing.image={url, filename}) (with this way it worked not)
            @but my websitei is too slow when i added a new listing it takes too much time to load it. it take delay to save on the backend.

  image: {
      url: 'https://res.cloudinary.com/dsjok71po/image/upload/v1740240790/air-bnb-clone/vhoe8x3x2vgvatvei.jpg',
      filename: 'air-bnb-clone/vhoe8x3x2vzyvgvatvei'
    }, (when i search on the db, i find the image url and filename like this.)

 - we have done the 3 step but it is not showing to the frontend. as it update the backend.
 - my previous code:     description: "A stylish modern condo offering fantastic city views and a central location in Seoul.",
      image: url: "1.jpg" to image: { url: "1.jpg", filename: "listing-image-25}  in my entire data.js . now i will again run the data.js to restart my database.
  - now i have the change the url of index.ejs and show.ejs from:<%= Listing.image %> to <%= Listing.image.url %>. also on show.ejs. now display image work as expected. generally in bigger website there is fille limit of image file size, cause we have to rent out the cloud data store, if there is not limit, eveyone can upload high images, which will increase our cost.
### Edit Preview Image:
-  edit listing image, preview image.
- once the listing is edited, how can we change the form. but in the edit listing there comes the url, which we have to change to file upload. -  first on new.ejs form i added the enctype.
-   first we will make capable of forms to accept the files and send to the backend.we will change the routes of backend, that accept the image data, on req.file. upload that file on cloudinary . then we will have the acess of filename and url, then we will change database. 
  now i will make the form capable of updating the listing image. we will fix the edit.ejs same like we fix the new.ejs. first i will make the encytype multipart, now form can accept the image but how can it will send the backend. in my listing.js route: i add the same method of sending data before validateListings both on put and post route of new and edit. when it is updated on updateListing i put on the variable, the update.

   - let listing= await Listing.findByIdAndUpdate(id, {...req.body.listing})
  -  let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url, filename};
    await listing.save(); (first i save on the variable of name listing of previous save, then i save the url and filename from the file.path and filename) then i stored them on the url and filename which is our data.js image object. then  i saved.
    but there is the catch: if we didn't upload the any image leave just as it, the new the url and filename will be blank and store the undefined value on backend, for avoiding that. for that first we will check if req.file existed then we will only update otherwise not. in js for checking any variable undefined or not we can check by typeof undefined like this:
      if(typeof req.file !== "undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url, filename};
    await listing.save();
  }   (it just check the condtion of the whether if req.file is not blank mean new image is uploaded then it will run this condition)
  @when i create a new listing the error comes listignSchema is not defined with create with the image)
  image preview for listing: for updating the existing listing, we want to preview the old listing what our old picture look like. then user can decide whether listing should be updated or not. inside the edit.ejs:   <div class="mb-3">
          Original Listing: <hr/>
          <img src="<%=listing.image.url" alt="<%=listing[title]">;
      </div> (i show the old image just before the file, but there is the catch if someone upload at high quaility image it will also show the high quality on there with cause the error, like it will take too much time to show, instead we will compress that image, this is just for the edit.ejs and not for the show.ejs) 
  we also can compress the picture quaility but also cloudinary also provides us the multiple option of transfom of image. for ex: if we want to blur the image we can simply do the res.cloudinary.com/demo/image/upload/e_blur: 300/sample.jpg (with this way we can blur the image, this is due to the cloudinary internal api) 
  how can we compress that image: who render our image inside the controllers folder of listings.js. if(!listing){
      req.flash("error", "Listing you requested is doesn't exist");
      req.redirect("/listings");
    }
    let originalImage=listing.image.url
    originalImage.replace("/upload", "/upload/w_250"); (first i extract the image url and i replace with upload to add the height and width, we can change any parameter.then i also render the originalImage.( i miss the one thing if user go to listing that doesn't exist we will show the flash message and redirected to the lsitings))

## Maps Featre
-  now we will study the map feature. we will not use that much but it is quite good.
-  in any listings site at the end it will show the location of that listing.
-  we will use the maps api for showing the api. there is the google maps api which have the intersting feature.
-  like: calculate shortest distance, seeing the neighbourhood area and much more feature we can explore. 
- it will require the credit card and debit card to use it which we will use the mapbox. 
- accessing token mean is that user is authorized to use that token to just check in the currect user.
### Define maps ways:
 - for using that first we will have to use the access token from the mapbox and that accesstoken will store on .env.
 - for displaying the first map. the project is shows from the mapbox but it required the credit card that's why i use the maptiler.
 - as right now i am learnign from other, due this this it is straightforward. but when we try to implement our feature it will take lot's of time, as we have to research and fix the bug. we display a map on webpage. generallyl there is the code for entire page but we only want on show.ejs. 
 - first i have to add the 2 line script on boilerplate.js for the maptiler.  <div class="col-6 offest-3 mb-3">
            <div id="map" class="col-6 offest-3 mb-3"><h3>Address:</h3>
            </div>
            </div> (i added the basic of where will it located.)
            <% if(listing.reviews.length>0){ %> (i aded the logic of if only reviews exist then all reviews will be shown)

-    maptilersdk.config.apiKey = 'YOUR_MAPTILER_API_KEY_HERE';
   -     const map = new maptilersdk.Map({
          container: 'map', 
          style: maptilersdk.MapStyle.STREETS,
        }); (in here first i passed the api key and then inside th function i give em );
-  let mapToken="<%= process.env.MAP_TOKEN %>"
      maptilersdk.config.apiKey = mapToken;
        const map = new maptilersdk.Map({
          container: 'map',
          style: maptilersdk.MapStyle.STREETS,
              center: [23.4653, 67.6983],
          zoom: 9, 
        });
-  (with this way like first i store the maptiler on mapToken then config and give now it shows the small map on my page, center mean longtitude and lattitiude and zoom mean how much bigger zoom. )

-  all of our code have the access in ejs file, now from the ejs i will access the script. in script i will save the environment variable. the js file will saved where will store on public/js/map.js: i stored those into map.js and the script can't accept the ejs that's why the process.env value is stord on script tag and then use the same name to the map.js .




##  GeoCoding Important:
-  GeoCoding: GeoCoding is the process of converting address (like a street address) into geographic cordinated (like lat. and long.),
- which you can use to place markers on a map, or position on map.
- till now our map only understand the lat and long. so we want to convert our address to lat and long which only understand our code. 
  when we add a new listing how can we convert into lat and long.
   2 types of geocoding are avaible: forwardd goecoding: turning kalikalanagr, butwal into -27.248,29.248. reverse geocoding: -27.248,29.248 into kalikanagar butwal.
  - the suggestion we get when we put some address it possible due to the geocoding. 
  for using the mapbox sdk js goecoding i first require on listings.js: 
  - let response= geocodingClient.forwardGeocode({
          query: 'Butwal, Nepal',
          limit: 1
        })
        .send()
  -  (inside the post listing i require the geocoding with foreward mean string to lang and long query can be anything, and limit mean we only want 1 response.)
      

  
  ## Storing the coordinates:
 - GeoJson: the most simple structure in GEoJson is a point.
 - Below is an example of point representing the approximate location of any place. 
 - in GeoJson long. comes first in GeoJson array. for using all of functionalities we use the GeoJson, 
  Ex: {"type: : "Point", "coordinates" : [ -152.5, 37.5] }
  what's the usage of saving a data in GeoJson, the mongoose.
  now first i have to define the schema : geometry:{
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
 - (this mean , i give the typeString, and this is Geojson format of enum will be point, first come long and lat, and i given the coridanted will be the number in form of array. ) i call the geocodinng api maptiler with using the axios. 
  newListing.geometry = response.data.features[0].geometry.coordinates; (first )const feature = response.data.features[0];
      const geometry = {
        type: "Point",
        coordinates: feature.geometry.coordinates,
      }; (response data feature will give the output of an array, only first one mean long and lat, then cordinates will hold the value of it. )
 - this following marker we can't directly access to the js file as these long and lat only can accept on ejs form )
  <script>
      let mapImport="<%= process.env.MAP_TOKEN %>";
      let coordinates="<%= listing.geometry.coordinates %>";
    </script> (as we directly try to use this it will give an error, so we have to convert this into jsonStringify, with ejs be <%- and JSON.stringify() , it will convert tinro json string.)

-  now i will map marker the location of where we should tick the exact location. 
  const marker = new maplibregl.Marker()       // Create a new marker instance
        .setLngLat([77.1025, 28.7041])              // Set marker position: [longitude, latitude]
        .addTo(map); (i first define the default marker position on map.js )



## Website Homepage: day: 54
- first fof the homepage. now we will add the filters like on airbnb.
-  after the navbar. first i change the entire navbar look . 
- now i will add the other things on after the navbar which is similar to the aibnb. i have added the html of top choice:  <div id="filter">
        <div><i class="fa-solid fa-person-breastfeeding"></i></div>

-  i have addded the frontend of showing from the tags, but if we really want to implement we can simply divide them into models listing.js and give each of one and work on that. i could work on that.

## Switch Feature:
- now i will work on switches: it's a toggle switch, when we click on that it will turn on or turn off.
-  i added the switches and make the text reverse. now i want to perform something when i clicked on the toggle option.
- i can do this with event listener. now i have done the addEventListener now i will add the fucntinoality. 
-  we have 2 option, when we want to hide anything: visiblity hidden , mean it will hide from the code but it will occupity the space that it take. on display none, it will not shown and it will also not occupiy the space
- Which shows the tax with when user click with the taxes 18% tax.

## Mongoose Atlas Db:
-  now using the mongoose atlas. now we have stored the data on cloudinary now we will use mongo atlas for cloud database service. 
- now our complete database will shifted to the cloud/online. first create a account on mongo atlas. 
- in storage there are 2 types are storage: individual storage and shared storage.
-  individual mean we only can access and shared mean that storage can use anyone but can't have the access to the other.
-   For set the authentication we have to set the username and password.
-  note the username and password. now on we can create user. what does it mean create user, when we create any database . 
- till now we only created on local host. in our localhost db, from vs code when we want to do read write we can do that.
-   We can set who only can read access and who only have write access like this.
-  it is like different level of permission to user.
-  like college student don't have the access to change marks while teacher have like this.
 -  i have add the password. now i have to connect to the local envionment  which requires the ip address. 
 - when we will upload to the internet we have to get the local environment for hosting: option are render and heroku. 
 - when we will deploying it will move to cloud. when it will go online we have to added th online ip. 
 -  how can we connect the local project to online database. when we will connect to the node.js it will show the database link of string. we have to copy and change the password to your password.
 -  we have to add that string to app.js, where we connect to the mongodb of MONGO_URL we will change there.
  I store that password to env first, we will later not pushed the env file for security purpose, i first add on env and i changed the mongo_url to that process.env with any name and replace mongoose.connect with that same name.
  -  now we can check all of our data that we added here will not shown we can add any new listings now.

## Mongoose Session Store:
 -` mongoose session store`. the next thing we will se before deployment is mongo session store with connect-mongo.
 -  as i remember that we use express sesion. the storage we use is local storage.
 --  the session storage not made for the deployment it meant only for the designing and development.
 -  due to it will leak memory, under most condition and cannot be the scalable. it is only meant for debugging and development.
 -  by default session storage we have to change it.
 -  there are lot of option. also we have experience on mongo we will use service called: `connect-mongo`. the all of the cookie,  user expiry date, user token all of the will be stored here.
 -  for using this we have to install it first. 
 - we have to require the connect mongo and also  `express session(express-session )` is already required.
 -  we can pass the `connect-mongo` as a middleware or we also can even pass as a variable: 
  -ex: ` store: MongoStore.create({ mongoUrl: 'dbUrl', crypto: {  secret: secret } })`
    
  - with this we called where is our database,it will also be the advanced option, in advaned option we can use the encryption,  in here i pass the secret code: secret, i pass the same secret as above. 

## User Session Information:  
-  we also can pass the touch after which is common used method, like on facebook when we after logged in if we close that tab and again opened our accoutn will be still logged in, it mean if we do multiple times of refresh it will update the session information.
-  whether the changes on session or not. 
-  what we want even after refreshing, touchAfter mean that if there is no updation on session we wil update after the 24 hours.
-  i moved this before `sessionoptions` and i also passed the store which is the name to insdie `sessionOptions`, it is mongo related information. 
-now our session information stored on atlas database, if we want to store on local database we can simply pass the `mongo_url`, on mongoUrl. 

### Mongostorage Erro Handle
-  we wil pass the another function after the store, for incase if there is the error on mongoStore, we just console and know where is the error.
-  like this way: `store.on("error", ()=>{console.log("Error mongo store", err);})`
-  now if we just run on atlas database inside the collection we will see another collection called sessions, why, in here it will store the session related info. back then when we using the local it was saved on memory storage now it will saved on atlas sessoins collections.
-  in session it will show the last modified details , expires changes of the modified and expires.
-  the information related our session, the maximum lifetime is 14 days if we didn't change anything which used to set : session.cookie.expire. if we want to change this interval we can change into any days. 


##  Deployment:
-  for deployment there are lot's of option, popular are: `render`, netlify and `cyclic`. 
-  heroku now becomes the paid. we will use the `render`. 
- first i will create an account on `render`.
-  then my next steps would be defines the node version on package.json. why, cause if we didn't specify the package. 
- when we deploying on `render` it might cause an error, so we have to define with node version like this.
-   `"engines": { "node": "22.11.0" }`
    -  (just defines the engines which node version just define it.)
- the next things is that connect `render` account to the github accout. 
- cause currently our project is on local storage. 
- how can `render` get code so we have to upload project on github private push. from github `render` will take the information.
-  when in future where we update any code we can simply push to github and said to `render` just update the code. the process would be too smooth, from now. 


## Git Push
-   push to the git:
  1.  `git init`
  2. `git remote add origin giturl`
  3. ` git status` (it will shw files that have not uncommit, )
  4.  (in the github we don't want to uplaod the .env files which stores the sensitive information, and node_moduls all of the node modules files would be store on the package.json we don't need to upload it. )
  5. `.env` and `nodue_modules` (ignore this files.)
    -  create an `.gitignore` files (inside there put the .env and node_modules/ (/due to it's a folder).
    -  which mean git will ignore this two files.) (after this node_modules and .env file will come in gray color mean it will ignore those files.)
 6.  git add . (add all files)
 7. git status (check that all of the files is changes added)
 8.  git commit -m "Add my first-mega-project files"
 9.  git status(it should shouw nothing to comming with on branch main)
10. `git push origin master`

## connect render to github
-  first i have to connect render to github (remember that only selected repo, as i only want to give access to my project not my entire profile.)
-  then i have to connect and steps are:
  1.  given a name
  2. regions
  3. runtime(set to node)
  4. build command(set to npm install as we will install of package from npm install)
  5.  start command (node app.js set node cause we only run one times that's why we don't use nodemon app.js), 
  - auto deploy ( we can set to no , on advanced option, ), select on create web service.
- it will take time to it, if we just deploy that it will failed it, cause we use environment variable on multiple times on our code but we are not giving access to envionment variable which is why it cause as error.
## for making successfull of deployment:
-  configure the atlas and envionment variable.
- till now our database is connect a local system but now we will connect with render.
- render will have different ip address.
- the we have to store onn mogodb. so that atlas identify the white list of render ip. 
-  for adding the envionment variable. in environment i will each added the each envionment variable.
- first i add each environment with key and their value each. 
- the 3 ip of render i have to add on network access of mongodb atlas . 
- then i also force the install process cause cloudinary lower version cause the errror: npm install --force.

>white_check_mark:  now finally my project has been finished.

## Coming Topic (The notes is from march 2025 notes and Project but I'm improving notes as of now)
- in the frontend after this i have learned the
  1.  react
  2. tailwind.
- As Part Of full stack project I've done this project but the course is not good enough in my pov, lot of basic topic missed just the surface level learning.
