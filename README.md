# mega-project-listing
My mega Project
# The technology i have used:
1. Bootstrap
2. JavaScript
3. Exprss.Js
4. Node.Js
5. EJS
6. MongoDb

# Finished:
2025/February/15

# This is my first Beginner friendly project that is related to BackEnd. 





# Packages that i've used:
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
  - get the navBar issue with not align and also not geting teh my color choice which i've fix with google/internet.
  -  The name is mismatched which wasted my over the 2 to 3 hours to solve just basic problem, make the comments required to users to add anything.
  - in listings routes, we've to use the lots of middleware like: `validateListing, validateReviews` which is not correned property which i've fix that with taking lot of time
  - During tehe review import modules for getting the parent directy we've to use: `..` not `.`
  - for gettign a sibling items import folder method should have: `./file` not the `file` cause it's represent the library of not ./
  - 


## Imp Notes For Future Learning:
- `show dbs` to show all the dbs on the mongodb.
- never ever fear of using docs when you forget it, it could be really useful to all to understand by doing it rather than remember it.
- 
- Use `npm-check` for showing what have we used and what not.
- `req.body` is used to extract a data send by form on `POST` request which data is hidden on url, while `req.params.` extract a data directly from url for `GET` request where data is visible.
- req.body and req.params difference:When working with `req.body`, it's used to extract data sent from forms (usually in POST requests), where the data is hidden and not visible in the URL. On the other hand, `req.params` extracts data directly from the URL (commonly in GET requests), where the data is visible and part of the URL path.
- middlewares is the important topics on backend to learn.


## Steps that i've Used to build this project with teh Proper Docs:
  - Initalize a my package file with setup a `express` port `ejs, mongoose` 
  - Also setup all teh model with listing schema
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
  - delete the routes with teh `async await` as a promises for performing on asynchrnous operation.
  - as request is send by client side while respones is send by server side.
  - middleware is helpful betweenthe request and responsie status for performing a operationg.
  - famous middlewrae funcction are: `methodOverride` for crud operation, `bodyParser` for send a data from body
  - encoded our middlware function: with `app.use(express.urlencoded({extended:true}))`
  
  ### More Basic Steps:
    -   - the intend shoudl alwasy be anyone should access from any browsign method and any devies.
  - `utils` folder have opertin like custom error clas, valid synchrounousation.
  - on custom expresserror w'eve pass the status code and the messsage and assing on teh constructor.
  - in the last year i've used a `commonjs` which is not recommend module but at that time i don't know much about that.
  - use `app.use(*)` for catch all the non existent route.
  - with getting the message from customExpressError.
  - for async routes i've wrap with common function on teh `wrapAsync`
  - `status 400` mean bad request due to client side mistake which server can't handle.
  -  can send and new throw error on try catc hblock where value is empty/invalid.
  - created a custom error file with: `error.ejs`

  ### Middleware:
    - the req, and res which have the object can be access from anywhere while response should access from middleware
    - possiblity of teh chainign on teh middlweeare
    - middlwae execute any codeand also can end the request-response cycle.
    - middlware have only 2 choice, it can  responsed or either middlwares can call the next middlwares. like it will call the upcoming middlewares and handle the all of the remaining tasks.

  ### Validation Error && Bootstrap && Ejs-Mate:
    - on the client side forms, for form constraing. where client side validation can be a: uniinteded data, unfulfiled data.
    - server side validation rules are is that match out with filter.
    - on the new file i've done lot of bootstarp code for success message and also teh failure message.
    - with custom error handler with both side client/server side.
    - `ejs-mate`- is usedful to create a template inside a ejs file


  
  ## Bootsrap Stylying:
    - inside the show.ejse we've use a: `-listing-card` for stylying
    - on the delete form, we use teh `post` method which action would be: `reviews/<%-listing._id%>`
    - have to setup on main folder with: `app.engine("ejs", ejsMate)`
    - create a layour structure of: `boilerplate, header, footer.ejs` files on teh ejs-mate
    - Also write a bootsrarp stylying with the ejs-mate.


## More step to add:
  - showing custom error message on `error.ejs` folder with custom messages such as: message, trace, stack.
  - i've done schema validatin with the help of `hoppscotch` data send.
  - `joi` library will help us to make teh validate our schema by giving custom validation on mongodb.
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
    - if username is deleted their related like post comment is deleted which connected mdoel called teh cascadiing deletion.
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
    - inside teh listing if we want to delete a particular id:
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
  - Express Router is teh way to organize our express application which our primary file doens't become bloated and create new instance router for any partciular routes.
    - For express router we've to restructure our folder setup.
    - we can code splitting or app.js file with movign where it required in one file it's become clutter/difficulat to understand
    - it's not compulsory to use a express router but generaly it's good practice for the large scall websites.
    - the middleware is capable of only perform single action while between the req to response time.
    -  we've create multiple routes of teh `users and posts`
    - for destrucuted teh same routes, we can make related routes `/users`
    -  in the `post`.js inside teh classroom folder we'll be only adding a all the routes which area related to the `classroom/` folder.
    >:white_check_mark: Now We don't require to use `app.get` now can use `router.get` with export our export `{router}`.
    - our Code will not still work cause there's teh diferent path we rquired on the router object.
    - as of now we've send required to: `app.use("/", users)`  now our routes will go to: `app.use("/users", users)`
    - now our all teh path will redirect to new path with we can remove all teh common path now as router wil handle it.

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
  >:warning: Once we send teh cookies it'll have on other routes for stored, But when we go to browser it'll print a `undefined` Cause For parsing the cookies on the express is not possible we've to use the some sort of middleware for accessing it such as: `cookie-parse`
    -  We can parse with teh `app.use(cookieParser)` for accessing by all routes.
    - Usually for the related to the authorization/authenticatoin we can use the cookies.
    - when we want to set the cookies by default we can do by: `req.cookies.country="masters"`


    ## Signed Cookies:
      - There's the normal cookis and signed cookies, which is similar to some kind of the physical sign, that putting a stamps/sign which the integiry of the data.
        - We Use the signed cookies for avoiding a data temparing which save from hacker and other unintentional behvaiour.
        - After sending the signed cookies We can verify that it's a not temperated and data integrity is not lost.
        ## How to Implement the Signed Cookies:
          - if we set the `{signed: true}` while sending the cookies it's treating as a sign cookies.
          - Also we've to use teh `secretcode` for signed cookied. which goes to encoded/encrypted unreadable versio.
          - such as: `app.use('secretCode)` and `res.cookie({signed: true})` which become a signed cookies now.
          - now we can access with `req.cookies`

  ## State:
    -   protocol mean what kind of request is going what kind of response is going. the rules request, response follow called a protocal.
    - STateful protocal persist the data status and session infomration such as: `ftp (file transfer protocal)`
    - Stateless procotcal: Doesn't persist the data.

    
  ## Express Session:
    - Which Makes Our sesion stateful, for storign teh session related information.
    - Session id is stored on the form of cookies format.
    ## Why Important:
      - Some customer are added some item on their carts like laptop and they switched on adding the any sportss product, should laptop added cart should be deleted, no absoluletly not, if we just use the stateless protocal it will not stored, but with the stateful protocal we can stored that.
      - In cookies there is the limit, to save the information of the limit. it is quite less compare to temp storage. as well teh information we stored on cookies is not that secure. 
      - In cookies we just stored the session id not the entire data items. 
    ## How to Implement Express Session:
    - For testing the expres-session i created a new folder called express-session(but other are doing inside on classoom folder) and inside of it session.js and first i required a express and listen port. 
