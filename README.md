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
  
  ## Form connection:
    - after creagin our form, we don't create separeate relatioon rather we wil use the one to many relationship, with: `post: /listings/:id/reviews` with dynamic id.
    - with `post` metho form we can get the route data, 
    - 




