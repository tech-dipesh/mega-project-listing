# mega-project-listing: 
  - My Mega Project
## The technology i have used:
1. Bootstrap
2. JavaScript
3. Exprss.Js
4. Node.Js
5. EJS
6. MongoDb

## Finished:
2025/February/15

## This is my first Beginner friendly project that is related to BackEnd. Which is not production ready Project but I've done as much i've learn in early 2025 February.





  ## Packages that i've used:
  - axios
  - cloudinary
  - connect-flash
  - connect-mongo
  - dotenv
  - ejs
  - ejs-mate
  - express
  - express-session
  - joi
  - method-override
  - mongoose
  - multer
  - multer-storage-cloudinary
  - passport
  - passport-local
  - passport-local-mongoose
 



## Post Production:
  - I've make more Shorter code by convertin all the arrow function.
  - Also Update the ejs files
  - 



## Problems that i faced while building this project
  - With updating the duplicate data fix afer 2 to 3 hours, with parent directly problem
  - When try to create a dynamic routing we've to must use: `new` keyword for that which cuase my lot of time during debugging.
  - get the navBar issue with not align and also not geting the my color choice which i've fix with google/internet.
  -  The name is mismatched which wasted my over the 2 to 3 hours to solve just basic problem, make the comments required to users to add anything.
  - in listings routes, we've to use the lots of middleware like: `validateListing, validateReviews` which is not correned property which i've fix that with taking lot of time
  - During thee review import modules for getting the parent directy we've to use: `..` not `.`
  - for gettign a sibling items import folder method should have: `./file` not the `file` cause it's represent the library of not ./
  - the `saveinitialized` is the session if not started/uninitiazation will store on session. it will set to the true which  now deprecated warning will not show during express Session
  - During the Connect Flash it keep says path is not defined i forget to require the path.
  -   The error i am encountering is that flash will only print once.
    - Solution: i already have printed on console then it is not parsed to the ejs after delete the console line it worked.
    - the flash message will only print once and then will vanished even though it preseneted on the ej
    - But it will only come once for temporary and after one time it wil vanished.
  - The error on the connect flash-message is due to the typo error it should be success i write the succes on listing.js file of route.
  - The Eror that i face it shows the connect flash message before teh body, due to bootstrap alert stylying issue.




## Imp Notes For Future Learning:
- `show dbs` to show all the dbs on the mongodb.
- never ever fear of using docs when you forget it, it could be really useful to all to understand by doing it rather than remember it.
- 
- Use `npm-check` for showing what have we used and what not.
- `req.body` is used to extract a data send by form on `POST` request which data is hidden on url, while `req.params.` extract a data directly from url for `GET` request where data is visible.
- req.body and req.params difference:When working with `req.body`, it's used to extract data sent from forms (usually in POST requests), where the data is hidden and not visible in the URL. On the other hand, `req.params` extracts data directly from the URL (commonly in GET requests), where the data is visible and part of the URL path.
- middlewares is the important topics on backend to learn.


## Steps that i've Used to build this project with the Proper Docs:
  - Initalize a my package file with setup a `express` port `ejs, mongoose` 
  - Also setup all the model with listing schema
  - separate our folder with ejs frontend with nested routes setup.
  - Setup the nodemon for fast refresh 
  - Create the dynamic routing of the id.
  - Parse the incomng bodies data with: `app.use(express.urlencoded({extended:true}))`
  - Send a data to the server from client in ejs with: `app.set("view engine", "ejs"`
  - setup other ejs for showing a backend stats with also server the static files of the css, js, and images.
  - for path setup we've to use the `path` library.
  - make input fiels with giving correct input fromat for align with the database.
  - During post method have to extract a input data with same name on form.
  - during req.body we can send a data with different way like: `name='listing[title]` send a data with key
  -  `new Listing(req.body.listing)` create a new db on mongodb with body data.
  - `await newData.save()` save the data.
  - `method-override` used to pefrom `put/delete` method
  -  Used the spread operator: ` Listing.findByIdAndUpdate(id, {...req.body.listing})` to get The element of that id from the database.
  - Array list we can map throught the entire aray to show the list.
  - delete the routes with the `async await` as a promises for performing on asynchrnous operation.
  - as request is send by client side while respones is send by server side.
  - middleware is helpful betweenthe request and responsie status for performing a operationg.
  - famous middlewrae funcction are: `methodOverride` for crud operation, `bodyParser` for send a data from body
  - encoded our middlware function: with `app.use(express.urlencoded({extended:true}))`
  
  ### More Basic Steps:
    -   - the intend shoudl alwasy be anyone should access from any browsign method and any devies.
  - `utils` folder have opertin like custom error clas, valid synchrounousation.
  - on custom expresserror w'eve pass the status code and the messsage and assing on the constructor.
  - in the last year i've used a `commonjs` which is not recommend module but at that time i don't know much about that.
  - use `app.use(*)` for catch all the non existent route.
  - with getting the message from customExpressError.
  - for async routes i've wrap with common function on the `wrapAsync`
  - `status 400` mean bad request due to client side mistake which server can't handle.
  -  can send and new throw error on try catc hblock where value is empty/invalid.
  - created a custom error file with: `error.ejs`

  ### Middleware:
    - the req, and res which have the object can be access from anywhere while response should access from middleware
    - possiblity of the chainign on the middlweeare
    - middlwae execute any codeand also can end the request-response cycle.
    - middlware have only 2 choice, it can  responsed or either middlwares can call the next middlwares. like it will call the upcoming middlewares and handle the all of the remaining tasks.

  ### Validation Error && Bootstrap && Ejs-Mate:
    - on the client side forms, for form constraing. where client side validation can be a: uniinteded data, unfulfiled data.
    - server side validation rules are is that match out with filter.
    - on the new file i've done lot of bootstarp code for success message and also the failure message.
    - with custom error handler with both side client/server side.
    - `ejs-mate`- is usedful to create a template inside a ejs file


  
  ## Bootsrap Stylying:
    - inside the show.ejse we've use a: `-listing-card` for stylying
    - on the delete form, we use the `post` method which action would be: `reviews/<%-listing._id%>`
    - have to setup on main folder with: `app.engine("ejs", ejsMate)`
    - create a layour structure of: `boilerplate, header, footer.ejs` files on the ejs-mate
    - Also write a bootsrarp stylying with the ejs-mate.


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

   