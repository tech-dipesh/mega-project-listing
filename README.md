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
 








## Problems that i faced while building this project
  - With updating the duplicate data fix afer 2 to 3 hours, with parent directly problem
  - When try to create a dynamic routing we've to must use: `new` keyword for that which cuase my lot of time during debugging.

## Imp Notes For Future Learning:
- `show dbs` to show all the dbs on the mongodb.
- never ever fear of using docs when you forget it, it could be really useful to all to understand by doing it rather than remember it.
- 
- Use `npm-check` for showing what have we used and what not.
- `req.body` is used to extract a data send by form on `POST` request which data is hidden on url, while `req.params.` extract a data directly from url for `GET` request where data is visible.
- req.body and req.params difference:When working with `req.body`, it's used to extract data sent from forms (usually in POST requests), where the data is hidden and not visible in the URL. On the other hand, `req.params` extracts data directly from the URL (commonly in GET requests), where the data is visible and part of the URL path.


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
  - 

