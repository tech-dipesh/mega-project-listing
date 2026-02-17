# Mega Project Listing

## My Mega Project

## Technologies Used
1. Bootstrap
2. JavaScript
3. Express.js
4. Node.js
5. EJS
6. MongoDB

## Finished
**2025/February/15**

This is my first beginner-friendly project related to the backend. It is not a production-ready project, but I have done as much as I learned in early 2025 February.

## Packages I've Used
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

## Post Production
- I've made the code shorter by converting all functions to arrow functions.
- Also updated the EJS files for Better User Experience.
- Make the Global Error Handler
- Removed Unused Application

## Problems I Faced While Building This Project
- With updating duplicate data, fixed after 2 to 3 hours due to parent directory problem.
- When trying to create dynamic routing, I had to use the `new` keyword, which caused a lot of time during debugging.
- Navbar alignment issue and not getting my chosen color – fixed with Google/internet search.
- Name mismatched, wasted 2 to 3 hours solving a basic problem; made comments required for users to add anything.
- In listings routes, I had to use many middlewares like `validateListing`, `validateReviews`, which were not properly connected; fixed after a lot of time.
- During review import modules, to get the parent directory I had to use `..` not `.`.
- For getting sibling items, the import folder method should have `./file`, not `file`, because it represents a library without `./`.
- `saveinitialized` is for session; if not started/uninitialized, it will store on session. Setting it to `true` now avoids deprecation warning during express session.
- During Connect Flash, it kept saying `path is not defined` – I forgot to require the path.
- when I create a new listing, the error comes: `listingSchema is not defined` with create with the image.
- **Error:** Flash would only print once.  
  - **Solution:** I had printed on console, then it was not parsed to EJS; after deleting the console line, it worked.  
  - The flash message prints only once and then vanishes, even if present on EJS. It comes once temporarily and then disappears.
- The error on connect-flash message was due to a typo: it should be `success`, I wrote `succes` on `listing.js` route.
- The error I faced: connect flash message appeared before the body due to Bootstrap alert styling issue.
- The error I encountered: login and signup process became too slow; also when adding a new listing, it was not configuring well with username route. Fixed that.

- **Now we will start authorization:**
  - Also, in case middleware is not running or gets an error (meaning current user is not saved), we can check with `currUser` with `&&` condition and check both conditions. It runs but the username is not showing on some listings, and some got an error with username.
  - The error I encountered was due to the `.populate("owner")` method. The error "async true" is because EJS also takes HTML comments.
  - Next time, don't comment any HTML in EJS templates. Yes, we made it only on the frontend side, but if we send a POST request from Hoppscotch, we can bypass our logic; for this we also have to make the logic on the database.
  - One thing I have done just now might cause an error later: on routes `listing.js`, `validateListings` shifted to `utils`, `validateListing` converted to models, and I required there and used it there:  
    `listing = require("../models/listings.js")`; (I think it should be `listings.js`, but when I used that I got an error.)
  - `<div class="card-title"><%= review.author.username</div>` (I added this, it might cause an error.)  
    After this line: `<div class="card-title"><%= review.author.username</div>` (it might also have an error.)  
    If we want to show stars according to range, the above is code. Now we will completely remove the range order for this starblity rating.
- **Error I am facing:** I am not able to submit the rating, as it gets the "cannot get `post`" error; also when logged in, I am not able to logout as it says "cannot get logout" error.
- Finally, I found the error: I didn't require on `review.js` for this event to happen, and also I have to add:  
  `const router = express.Router({ mergeParams: true });` (for requiring the child which is required.)
- **error:** I am not showing the picture file which I upload on the internet; also shows npm error when trying to download the package of cloudinary.
- **i am still getting error of not able to show the geocoding.**  
  We will just change the query to: `req.body.location` which we get what we search for.
- Solved error: I failed miserably on finding the error inside the postListing, as I constantly got error. Now I will move forward to day 54 and look back at day 53 afterwards.
- The error is that I have not imported a module using the script, which I have done that. Now my next task is to align with the... now can even change the label of map by just changing the style.
- The error I finally encountered is that:  
  `let coordinate=<%- JSON.stringify(listing.geometry.coordinates) %>;`  
  I shouldn't use double quotes here; when I put double quotes it converted to string, not an array, but we want array format, causing the error.
- **i am getting error with mainly connecting to connect-mongo to mongodb.**

## Important Notes For Future Learning
- `show dbs` – to show all the databases in MongoDB.
- Never ever fear of using docs when you forget something; it could be really useful to understand by doing rather than just remembering.
- Use `npm-check` to show what packages we have used and what not.
- `req.body` is used to extract data sent by a form in a `POST` request, where data is hidden in the URL, while `req.params` extracts data directly from the URL for a `GET` request, where data is visible.
- `req.body` vs `req.params` difference:  
  When working with `req.body`, it's used to extract data sent from forms (usually in POST requests), where the data is hidden and not visible in the URL. On the other hand, `req.params` extracts data directly from the URL (commonly in GET requests), where the data is visible and part of the URL path.
- Middlewares are an important topic in backend to learn.

## Steps I've Used to Build This Project with Proper Docs
- Initialize a package file with setup for `express`, port, `ejs`, `mongoose`.
- Also setup all the models with listing schema.
- Separate our folder with EJS frontend with nested routes setup.
- Setup nodemon for fast refresh.
- Create dynamic routing with `id`.
- Parse incoming bodies data with: `app.use(express.urlencoded({extended: true}))`.
- Send data to the server from client in EJS with: `app.set("view engine", "ejs")`.
- Setup other EJS for showing backend stats, also serve static files (CSS, JS, images).
- For path setup, use the `path` library.
- Make input fields with correct input format to align with the database.
- During POST method, extract input data with same name on form.
- During `req.body`, we can send data in different ways, like: `name='listing[title]'` sends data with a key.
- `new Listing(req.body.listing)` creates a new document in MongoDB with body data.
- `await newData.save()` saves the data.
- `method-override` used to perform `PUT/DELETE` methods.
- Used the spread operator: `Listing.findByIdAndUpdate(id, {...req.body.listing})` to get the element of that id from the database.
- Array list we can map through the entire array to show the list.
- Delete the routes with `async/await` as promises for performing asynchronous operations.
- Request is sent by client side, response is sent by server side.
- Middleware is helpful between the request and response status for performing operations.
- Famous middleware functions are: `methodOverride` for CRUD operations, `bodyParser` for sending data from body.
- Encode our middleware function with: `app.use(express.urlencoded({extended: true}))`.

### More Basic Steps
- The intent should always be that anyone should access from any browsing method and any devices.
- `utils` folder contains operations like custom error class, valid synchronization.
- On custom ExpressError, we pass the status code and the message and assign them in the constructor.
- In the last year, I used `commonjs`, which is not recommended now, but at that time I didn't know much about that.
- Use `app.use(*)` to catch all non-existent routes.
- Get the message from customExpressError.
- For async routes, I wrap with a common function `wrapAsync`.
- `status 400` means bad request due to client-side mistake which server can't handle.
- Can send a new throw error in try-catch block where value is empty/invalid.
- Created a custom error file: `error.ejs`.

### Middleware
- The `req` and `res` objects can be accessed from anywhere, while response should be accessed from middleware.
- Possibility of chaining middleware.
- Middleware can execute any code and also end the request-response cycle.
- Middleware has only two choices: it can respond, or it can call the next middleware(s), which will call the upcoming middlewares and handle all remaining tasks.

### Validation Error && Bootstrap && Ejs-Mate
- On client-side forms, for form constraints, client-side validation can be for unintended data, unfulfilled data.
- Server-side validation rules are that they match out with filters.
- In the new file, I've done a lot of Bootstrap code for success messages and failure messages.
- With custom error handler on both client/server sides.
- `ejs-mate` is useful to create a template inside an EJS file.

## Bootstrap Styling
- Inside `show.ejs`, we've used a `-listing-card` for styling.
- On the delete form, we use the `POST` method with action: `reviews/<%-listing._id%>`.
- Have to setup on main folder with: `app.engine("ejs", ejsMate)`.
- Create a layout structure of `boilerplate`, `header`, `footer.ejs` files for ejs-mate.
- Also write Bootstrap styling with ejs-mate.

## More Steps to Add
- Showing custom error message on `error.ejs` folder with custom messages such as: message, trace, stack.
- I've done schema validation with the help of `hoppscotch` data send.
- `joi` library helps us to validate our schema by giving custom validation on MongoDB.
- The folder is preferred to be added to: `models` or parent folder, with written object models.
- For joi package, we can validate our schema with: `listing.validate(req.body)` which joi itself identifies validation and prints to console.
- With try-catch block on middleware, we've validated listing with each validation strictly passed.
- For showing the message of all errors, we can map and join them into a single value and print to the user.
- Initially my parent file was `server.js`, which I moved to `app.js` later.

## Project Phase 2

### MongoDB
- For showing a review like rating, we've to create the model related to that data.
- Inside that model, we've to create another file for constraints and can add a date of current.

### Middleware
- Two types of middleware:
  - If username is deleted, their related posts/comments are deleted, which is connected model called cascading deletion.
  - Mongoose middleware is different compared to Express middleware.
    - Example: document middleware, query middleware.
    - Query middleware executes when we call `exec()` or `then()` or `await` on a query object.
- With types like: `Schema.Types.ObjectId`.
- Have to create an ObjectId for unique identification.

### Form Connection on the Database Method
- After creating our form, we don't create a separate relation; rather we use one-to-many relationship with: `post: /listings/:id/reviews` with dynamic id.
- With `POST` method form, we can get the route data.
- While creating our models for one-to-many database, we've to store with the "squillion" method, also have to use `ref` meaning referring to another database. On the `show.ejs` after styling our page, with `post:/listings/:id/reviews` method for accessing a review, which will be a one-to-many relationship with listings.
- On the functional part, create the `post` router.

### Validation
- With Bootstrap inside the `public/js` folder, we connect all our boilerplate.
- We can check our server request with `hoppscotch`.
- While validating the server, we'll use joi for validating it, which we'll pass as a middleware in `app.post` method.
- Delete a particular ObjectId from database: `db.reviews.deleteOne({_id: ObjectId("67acbc16bd2e7573243c3715")})`.
- While we can't directly access the value inside reviews, we can simply use a populate method.
- Populate method: `await Listing.findById(id).populate("reviews")`.
- For getting the data, we can get any particular value with `object_id`.
- With Mongo pull operator: `$pull operator` removes an existing array all instances of a value that match specified condition like: `$in, $set, $between`.

### CRUDs
- For accessing a particular id:  
  `app.post("/listings/:id/reviews", async (req, res) => await Listing.findById(req.params.id) new Review(req.body.review)})`
- While accessing in EJS: `name[reviews]`.
- For deleting a review, we can create route: `/listings/:id/reviews/:reviewId` to delete that particular review.
- For getting the id of profile and review, we can use `req.params`; on listing we can use `findByIdAndUpdate` for updating a particular id.
- Inside the listing, if we want to delete a particular id:
  - We can use: `db.listings.find({title: "Mountain view Apartment"})[{id: id, newReviewsId}]`
- Delete a particular review:  
  `schema.post("findOneAndDelete", async => await Review.deleteMany({_id: {$in: listing.reviews}}))`
- For deleting a particular listing with `$in` method, also delete that corresponding reviews.

### Express Error
- For getting the Express Error, we've to restructure our Listings.
- On `new routes` folder, we can make new router: `express.Router()` with export the module.
- We can redirect when needed with: `app.use("/listings", listings)`.

## Express Router, Cookies
- Express Router is the way to organize our Express application so that our primary file doesn't become bloated, and create a new instance router for any particular routes.
- For Express Router, we've to restructure our folder setup.
- We can code-split the `app.js` file by moving code where it's required; in one file it becomes cluttered/difficult to understand.
- It's not compulsory to use Express Router, but generally it's good practice for large-scale websites.
- Middleware is capable of only performing a single action between the request and response time.
- We've created multiple routes for `users` and `posts`.
- For destructuring the same routes, we can make related routes `/users`.
- In the `post.js` inside the classroom folder, we'll only add all the routes which are related to the `classroom/` folder.
> :white_check_mark: Now we don't require to use `app.get`; now can use `router.get` and export `{router}`.
- Our code will not still work because there's a different path we required on the router object.
- As of now, we've sent required to: `app.use("/", users)`; now our routes will go to: `app.use("/users", users)`.
- Now all our paths will redirect to new path; we can remove all the common path now as router will handle it.

### Cookies
- Cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser.
- Cookies are tiny blocks of data stored on the web browser.
#### Use Cases of Cookies
  1. Session Management
  2. Tracking a user for showing targeted ads/relevant products
- Cookies are paired with key-value pairs which we can see on our web browser.

#### How to Send Cookies Using Express
  1. On the `localhost:3000/setCookies` route, we can send with:  
     `res.cookie("name", "dipesh"); res.cookie("country", "Nepal")` which are key-value pairs.
  2. They will persist that data.
  3. We can read the docs on Express website for `res.cookie` area.

### Cookie Parse Package
- As of now, only one route can access the particular cookies, but we want to make the cookies accessible by all routes.
- Also we want to parse (read) to get the data.
- We can access the cookie with: `req.cookies`.
- For printing a cookie, we can use: `console.dir`.
> :warning: Once we send the cookies, they will be on other routes for storage, but when we go to browser it will print `undefined`. Because parsing cookies in Express is not possible without middleware such as `cookie-parser`.
- We can parse with `app.use(cookieParser())` for accessing by all routes.
- Usually for authorization/authentication, we can use cookies.
- When we want to set the cookies by default, we can do: `req.cookies.country = "masters"`.

### Signed Cookies
- There are normal cookies and signed cookies, which are similar to a physical sign/stamp, ensuring the integrity of the data.
- We use signed cookies to avoid data tampering, protecting from hackers and other unintended behavior.
- After sending signed cookies, we can verify that they are not tampered with and data integrity is preserved.
#### How to Implement Signed Cookies
- If we set `{signed: true}` while sending the cookies, it is treated as a signed cookie.
- Also we've to use a `secretCode` for signed cookies, which goes to an encoded/encrypted unreadable version.
- Example: `app.use(cookieParser('secretCode'))` and `res.cookie('name', 'dipesh', {signed: true})` becomes a signed cookie.
- Now we can access with `req.signedCookies`.

### State
- Protocol means what kind of request is going, what kind of response is going. The rules request and response follow are called a protocol.
- Stateful protocol persists the data status and session information, such as: `FTP` (File Transfer Protocol).
- Stateless protocol does not persist the data.

## Express Session
- Express session makes our session stateful, for storing session-related information.
- Session id is stored in the form of a cookie.
#### Why Important
- Some customers add items to their cart (like a laptop) and then switch to adding a sports product; the laptop added to cart should not be deleted. Absolutely not – if we just use stateless protocol, it will not be stored, but with stateful protocol we can store that.
- In cookies, there is a limit to the information that can be stored; it is quite less compared to temporary storage. Also, information stored in cookies is not that secure.
- In cookies, we just store the session id, not the entire data items.

#### How to Implement Express Session
- For testing express-session, I created a new folder called express-session (but others are doing inside the classroom folder) and inside it `session.js`, first I required express and listened on a port.
- Then I tested on `/test` route. On inspect application, after deleting existing data, I could see new data called `connect.sid`. This is the unique session id.
- One thing we notice: on cookies, even if we go to another tab on the same browser, we see the same session id.
- Like above, given value connection id and below cookie value connection id are the same because within one browser, if we open tabs in different tabs, Express will treat that as one session. For example, if we try with another browser, we see a different session id.
- I will create a route to count how many times we have opened that session. Till now, the count is not tracked (like counting how many times we have visited).
- Implementation way:  
  `req.session.count ? req.session.count++ : req.session.count = 1` (initialized with 1 if not exist).
  `res.send(`you visited the website ${req.session.count} times.`)` (with this condition, I increment the count by 1; it will work on a new tab as well).

### Session
- Session means that client is sending the response to server and vice versa; this is a practical example of how session would be used.
- One thing to note is that the session count is stored temporarily.
- In Express, there is a warning related to `express-session`.
- The default server-side session storage, which we also call memoryStore, is purposely not designed for the production environment.
- In Express session, warnings appear; to remove them we have to add two options: `resave` and `saveUninitialized`.
- `resave` forces the session to be saved even if it hasn't been modified. We set `resave: false` to avoid deprecation warnings.
- `saveUninitialized` forces a session that is uninitialized to be saved to the store. We set it to `false`.
- Notes:
  - Till now we are doing development. In development, there are two stages: under our system, and production stage where other people are using our website. In development, we can store the memoryStore/session storage, but when deployed, we will not use memoryStore; we will use Session Store like Cassandra Store, connect-dynamodb, connect-mongo. These are temporary stores well-known based on databases.
  - One thing we can do is inside `app.use(session())`, store the options in a variable and call that variable inside session.

#### Storing User Info
- Inside `session.js`, we can create a new route called `/signup` which takes `req.query` to extract a name.
- With the help of query string `register?name=dipesh`, I can extract that name and store it in a variable.
- If name does not exist, we can give a default name.
- Same as count, we can get the object property when we do:  
  `Session {cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }}`
- Which has session info about the path and other info.
- When we assign `res.session.name = 'dipesh'`, we add the value; it will print there.
- We store `req.session` and can use that value on another callback/function/route.
- Now if we go to a `hello` route we create, we can see that value we added on the another route, which is accessible.
- The better way to do that is redirect them to the hello route with that same value.

### Connect Flash
- It's an npm package to help flash messages to the frontend UI.
- For example, on our listing website, when we have done a CRUD operation, a success or failure message should pop up.
- It can pop up as an alert or added message, but when we refresh the page, the popup shouldn't come again.
- Those messages appear only once. On this message, there could be triggered events.
- Like when adding a new listing, a different message should appear; when adding a different listing, another message should appear. Some messages show errors.

#### How to Use Connect Flash
- We've to install with: `npm i connect-flash`, which comes as middleware.
- To flash a specific message, we write `req.flash`.
- Inside `req.flash`, we pass two things: key and message.
- Based on the key, we identify the particular request.
> :warning: For using connect flash, it is compulsory to use express-session and cookie-parser.
- Till now, our flash is being done, but we also have to render to the client side.
- To render on the UI page, we have to create a `views` folder with `page.ejs` and inside there I will render that.
- For getting a name, we can render with: `req.session.name`.
- We can show the page with: `res.render("page.ejs", {name: req.session.name});`.
- Parse the name to access the name from request server and print on `page.ejs`.
- `res.locals.message = req.flash("success")` can send the success message to response.
- For passing the error message, we can extract the errors in the middleware of `app.use()` and use that message to print a connect flash message.
- Till now we have done the cookies operation; now we will operate the flash message.
- When we create a new listing, it should flash above saying the new listing is created.
- Before the `app.use` routes, I have to use the flash method so it can go on all of the routes.
- On the `listings.js`, we can set the `req.flash` message where we can pass on the middleware with such as: `app.use(flash())`.
- We can pass to the client side with: `res.locals.success = req.flash("success")`.
- Now in the next steps, we will define the success and failure message partial.
- Till now, the flash message doesn't look good; we can improve by styling.
- We can use different alerts, but for now we will use Bootstrap flash.
- Instead of showing our message inside the `index.ejs`, we can simply show our success message in `boilerplate.ejs`.
- We created a new template for the success template.
- Inside `include` folder, I will create a new ejs folder called `flash.ejs` (for the template).
- Example: `<div class="container"><%- include("../include/flash.ejs") %></div>`.
- Why just before the body? Because we want to show before the body. Now message is showing with Bootstrap alert message.

### Session Knowledge Implementation
- `npm i express-session` package for implementing session on the node server.
- We've imported and passed the middleware with: `app.use(session())` and `app.use(sessionUpdates())`.
- Now on the console we can see `connect.sid`, meaning successful connection.
- The session is heavily used by cookies and we have to send the cookie manually such as: `path: '/', httpOnly: true, secure: false, maxAge: null`.
- The cookie tracks our session.
> :warning: By default, a cookie doesn't have any expiry date, which is called a `non-persistent cookie`, which deletes our cookie when we close that browser (non-persisted data).
- For setting the expiry date on the cookie, we set with the second format:
  - Example: `cookie:{ expires: Date.now() + 7*24*60*60*1000, maxAge: 7*24*60*60*1000, httpOnly: true }`
  - Which means converted to maxAge of 7 days.
  - `httpOnly: true` helps us secure our site from cross-site scripting attacks, which we can verify in the browser cookie area.

### Next Middleware
- The `next()` function in Express is a built-in function used in middleware to pass control to the next middleware function in the stack.
- If we don't call `next()`, the request will be left hanging, and Express won't move on to the next middleware or route handler.
- We can show the user, but it is still not fully functional because it will still show even if we don't add any new listing; it will still show that alert.

### Success Error Message
- For understanding, the success message we send to the client side is an array; even if we don't send anything, it is an empty array, and that empty array keeps going to frontend and takes space.
- For solving that, we also have to add one more condition inside `flash.ejs`: `&& success.length` (meaning there should be some value in the array; now it will work as expected).
- We can create a dismissible alert inline of fade show. We also have to create a button, and if we click on that button, the alert will vanish.
- I used the Bootstrap dismissible method and set z-index on top to fix it.
- Error flash message: let's suppose you have a listing and that listing is deleted, and if you again go to that URL, we will redirect them to the all listings page with a flash message saying "The listing you are trying to access is deleted". Similarly, we can do the same for updated old id.

### Routes
- Now we can do that with the same logic and implement on different routes like delete, update, edit, and review routes.
- I just added `req.flash("success", "review deleted")` on `listing.js` and `review.js` and also on review routes.
- I made on show route: if the listing does not exist, just show `req.flash("error")`. Till now I haven't made the error message on `app.use` method in `app.js`; I have to create that. In EJS we have created a success flash; we also have to create for the error route. Now that works, we can also apply that method to the update route with previous id.

## Authentication & Authorization
Here's a more concise version:
- **Authentication**: Verifies user identity (e.g., login).
- **Authorization**: Determines user access to specific content after login.

- **Password Storage**:
  - Store passwords in hashed form (e.g., bcrypt), not plain text.
  - During login, hash the input password and compare it to the stored hash.
- **Hashing**:
  - One-way function with fixed-length output, making the password secure and unrecoverable.
- **Salting**:
  - Adds random data to passwords before hashing to prevent attacks like reverse lookup.

**Node.js Authentication**:
- `Passport.js`: Middleware for authentication with various strategies (e.g., Google, Facebook).
- `passport-local`: Basic username/password authentication.
- `passport-local-mongoose`: Simplifies Passport integration with MongoDB.
- Have to download: `passport-local`, `passport-local-mongoose` to start implementing.

### Model
- Now we have to define the user Model: inside `models` I will create a new file called `user.js`.
- In signup/login there could be multiple pages; for now we will start with the smallest number of fields.
- First we require mongoose and Schema; now we will start with email, username, and password.
> :white_check_mark: But `passport-local-mongoose` automatically creates username and password, and automatically hashes and salts the password field.
- For now we just create an email field: `userSchema.plugin(passportLocalMongoose);`
- It will automatically create a username and password.
- `passport-local-mongoose` adds some methods to your Schema automatically, like `setPassword`, `changePassword`, and many more methods will automatically be implemented.
- The meaning of "method" will become clear when we work on the project.

### Configuring Strategy
- Configuring Strategy: we have to apply the basic settings to use `passport-local`; first we will require it in `app.js`.
- For implementing `passport`, we need to have session; we can track the session; we will just use the passport session.
- Just use on `app.use(passport.initialize())` (for tracking, you can say it's the rules to configure before implementing; it's a middleware that initializes passport).
- `passport.session()` (helps us identify users as they browse from page to page; it will be associated with each user).
- `passport.use(new localStrategy(User.authenticate()))`; (this middleware will be passed on all requests that come to our site; they will have to pass through our middleware).
- `passport.serializeUser(User.serializeUser())`;
- `passport.deserializeUser(User.deserializeUser())`; (generates a function used by passport to serialize user into session; storing all user data is called serialize, and removing from session is deserialize).

### Fake User Signup For Testing
- This is just for testing purposes.
- Create a new route called `register`:
  ```js
  app.get("/fakeUser", async (req, res) => {
    let fakeUser = new User({
      email: "dipeshsharma@gmail.com",
      username: "neww"
    });
    let newValue = await User.register(fakeUser, "password");
    res.send(newValue);
  });
  ```
  - Inside here, I create a fakeUser with User model as defined.
- With the `register` method, instead of writing code to salt before hashing password, hash the password, check if username already exists, save user info, set up authentication – `register` does all of that in one simple method.
- Till now we haven't saved the user and nothing is performed; the above method on `app.use` says we will use localStrategy, serialize, deserializeUser, and `passportLocalMongoose` uses it.

### Demo
- Next we will create a demo user; there I create a new `demoUser` route same as `fakeUser` with `register`.
- `register(user, password, cb)` (with passwords we can also pass a callback inside `register`, which will convert into hash function; it also checks if the username is unique or not).
- This is the same as `demoUser` which I created twice.

### Signup User Functionality
- Now we will add signup functionality with both GET and POST methods.
- It will be the signup route.
- Inside the `routes` folder, I created a `user.js` and inside there I import express.
- Which also exports `module.exports = router`; then we will require `user.js` on `app.js`.
- Next process is that `user.js` creates an `app.use` like the other two; I also changed their names to avoid confusion: from `review` to `reviewRouter` in `app.js`.
- I created signup routes inside `user.js` which is working now.
- Inside the `views` folder, I created another folder called `users` and inside there I created a `signup.ejs` form route.
- The signup route redirects to `signup.ejs`.
- The username I copied from `new.ejs` and email is similar to username.
- Now we will implement the POST method. In signup route, first I create a form with POST method. First I create a GET route just for interaction; I created logic in POST route, first I extracted email, username, and password.
- The password is extracted in the form of `user.register`, which will hash and salt the password to secure our site.

### Login Page Functionality
- Login page: GET route. I just created the same login UI as signup UI.
- Next I created the `router.post` method:  
  `router.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), (req, res) => { ... })`
  - (Passport.authenticate with the local strategy; where should we redirect, and send a flash message.)
- One thing I improved: `validateListing` moved to the routes with `listing.js` and imported that file in other files.

### Connecting Login Routes
- We want that if anyone wants to create a listing, they must be logged in before creating a listing.
- How can we check if a user is logged in or not?  
  Use the `req.isAuthenticated()` passport method.
- `if(!req.isAuthenticated()) { req.flash("error", "Not Logged In"); return res.redirect("/listings"); }`
- (Here I check if the user is logged in or not; if not, I will show a flash and redirect them to the login page.)
- (If we add this inside the route, it will show the user details but will not show the password.)
- For editing and deleting routes, we can copy the same logic, but better way is to transfer our logic into middleware and pass that function.

#### Middleware Logging Implementation
- I created a new file named `middleware.js` and there I wrote the login inside `module.exports.isLoggedIn` and pass that function to `listing.js` before requiring the file.
> :white_check_mark: One thing to keep in mind: we have to write the name inside curly braces to destructure the function from the module.
- I also have to pass it to other methods for doing CRUD operations.

### Logout Route
- Now we will implement the logout route.
- Create a GET request, and with that method we will log out the user.
- There are different approaches to implement logout, but Passport makes it easy.
- Already `req.logout` method exists.
- First it will use the serialize and deserialize user methods, then will delete the user from the current session.
- To log out, we have to write `req.logout`.
- For logout, it takes a callback as a parameter; when the user logs out immediately, what should happen is handled in the callback.
- We can define the `err` parameter (if sometimes Passport fails, then it will call that error, otherwise pass the `next(err)` method).
- In case it didn't get an error, it will be empty undefined; we add the `err` parameter in an `if` condition; else it will redirect to main page with flash message.

### Styling Signup/Login
- First I created 3 navbar items.
- In any website, you will not show all three signin methods; if user is already logged in, it only shows logout, and vice versa.
- To fix that, we will use the `req.user` information stored; we will use that.
- If `req.user` is undefined, it only shows the login method, not logout, and vice versa.
- We can't directly access `req.user` in EJS; instead, on our `app.use` middleware for error and flash message, we pass `req.user` to the `currUser` variable: `res.locals.currUser = req.user;`.
- Now with `if` condition we can implement on EJS. (The error I encountered is that I passed `next` two times in middleware.)
- Login after signup – Passport login package automatically establishes login session, meaning if we sign up, we haven't logged in yet.
- As a user, when we sign up we can verify on DB, but automatically logged in – on all platforms, it happens automatically; we have to implement that.
- What we want is that when signup happens, it should automatically log in.
- When database is stored, it will automatically log in.
- Example:
  ```js
  req.login(registeredUser, (err) => {
    if(err) { return next(err); }
    req.flash("success", "Welcome to the Airbnb");
    res.redirect("/listings");
  });
  ```
  - (I pass with first show error if any, else do next step.)

### Post Login Page
- When we create a new listing and after logging in, it redirects us to the main page. For user convenience, we will redirect them to where they left off.
- To build this functionality, one thing we have to know: in the request object, there is lots of information stored.
- When I print the console of `req` from `middleware.js`, we see all details there.
- Even it will tell what path we are trying to access, also stores session related info.
- I also console the `originalUrl` to check our URL. This is the original URL we want to redirect the user to after login.
- We have to save the `originalUrl` in the middleware before redirecting there; we only want to redirect them when the user is not logged in.
- We store `req.session.redirectUrl = req.originalUrl` (in middleware). The flow: when user is logged in successfully, then instantly where they were trying to access the URL, we redirect there.
- But there is one problem: we can redirect on `req.session.redirectUrl` but in Passport, when `req.isAuthenticated()` succeeds, Passport by default will reset our session.
- The response will get undefined. To fix that, the `redirectUrl` will be saved on a local variable where locals are accessible everywhere.
- Passport doesn't have access to reset our session.
- I created another `module.exports` if `req.session.redirectUrl` exists, we store that value like this:
  ```js
  if(req.session.redirectUrl) res.locals.redirectUrl = req.session.redirectUrl;
  ```
- We call next; then we also have to call the middleware in `user.js` and use the same name on login route. Also don't forget to require the file in `user.js`.
- We have done that, but there is an error: when we directly try to login, it will show page not found because we will redirect where they left, but when we directly login, at that time `isLoggedIn` is triggered, and the `redirectUrl` does not exist, which will cause an error.
- We can create a new variable and check condition:
  ```js
  let redirectUrl = res.locals.redirectUrl || "/listings";
  ```
  (It checks the condition.)
> :fire: The small flaws we have to know – the small details we are trying to add to our website we have to know clearly; in case any error occurs during implementation, we will know the reason.

### Listing Owner
- Next, with all the listings we will associate with the owner.
- Why is it necessary to associate with owner? We can correct authorized access to the user.
- It is like giving permission to the correct person. This is also authorization.
- Till now we are only giving listings to the listing; later we will also give the user (owner) permission to delete any reviews.
- Before this, we have to add the owner property. For this, we add the owner from the schema.
- Inside `listing.js` (models), we will create a single owner object array.
- For that, the owner should also be a registered user, with `ref` to owner.
- If we check on DB, the data will not be initialized yet, as we haven't initialized the Owner before; due to this, we can't see the owner of any listing.
- To change that, we will initialize the database.
- One thing we can do is inside `data.js`, we can give the owner property.
- Also we can add the owner in bulk for all listings.
- We can add an ObjectId for everyone; instead we will go to `index.js` which initializes our database.
- I copied any random listing ObjectId:  
  `initData.data.map((obj) => ({...obj, owner: "67b4cee58dc05bd3c54a3302"}));` (this gives every listing the same owner).
- The `map` function will create a new object with returning new object with the changes.
- Now it's associated with that ObjectId for each one.
- Inside the route listing with id route, we can `.populate` our reviews; as it is multiple owner, we can populate it.
- Remember that when using Mongoose, if a reference field isn't populated, it just returns the ObjectId.
  - Example: `.populate({path: "reviews", populate: { path: "author" }}).populate("owner");`
  - (With this, it becomes populated.)

### Authorization Data Access
- Now with the populate method, I am not able to do that; instead I add the owner name for each in `data.js`.
- If we just show `listing.owner`, it will print all the data; we just need username, so we can write `owner.username` to show it. This is for previous data, but for configuring with new users:
- Now we will make a limit: the person who created those listings only can edit and delete them.
- Now I have to hide edit and delete buttons from users who are not the owner of that listing.
- To hide that feature from the user, we have to know who is the owner of the listing, and who is the user trying to edit/delete that listing.
- The current user is stored in `locals`; compare to the EJS template listing.
- We can make the condition like:  
  `if(currUser && currUser._id.equals(listing.owner))` – `.equals` is a method for comparing between two (like `==`).
- For making authorized for the listing:
  - This is for setting authorized in the update route.
  - In the PUT `show/id` route, it is `findByIdAndUpdate` working there.
  - Now we will separate `findByIdAndUpdate` into two parts.
  - Because we will find where that listing is located and check if that user stored in `res.locals` is the same user; only then we will give access.

### Authorization For Listing
- (I have not fully read this topic.)
- Now we will set authorization for listing:
- For this, with every review there should be an author, and for deleting the review, only the author will have access to delete.
- First, I give the type of author in `review.js` (model).
- Like we can see posts on LinkedIn but can't post a comment there; same implementation we will apply here.
- We only show the "Leave a review" option to the logged-in user by adding the logic `if(currUser)` in `show.ejs`.
- Now we have protected frontend, but can anyone send a request from Postman or Hoppscotch? Anyone can create without logging in.
- I just pass the function in `review.js` with `require` from middleware.
- Now how can we store the author? I got the error of not submitting the reviews.
- #didn't watch part 2 for creating a review.

## Phase 3: Extra Features
- In our project, we have built core functionality till now. This understanding will not only be used in this project, but in any project.
- Phase 3: Here we build extra things to make it better; we will add more features.

### MVC: Model, View, Controller (Implement Design Pattern for Listings)
- MVC is a term in development; it will not add anything new but make better the existing code.
- In the designed code, everything is there: backend, frontend, and database. How the code is written – we divide into 3 components.
- This is just a pattern, meaning a fixed way to write structured code:
  - **Models**: all models are written there and used to store in the database.
  - **View**: renders the frontend code.
  - **Controller**: we store the core functionality of backend.
- Inside `listing.js` of routes, there is asynchronous callback which will be shifted to another file, so that the routes folder becomes more compact.
- In our code, we must create readable code so that everyone can understand which file is located where.
- All components inside the models segregated helps us to do MVC.
- All callbacks will be moved to another folder.
- We first created a `controller` folder.
- Inside there, we create a file named `listings.js`.
  - The asynchronous callbacks inside routes folder and `listing.js` file will be shifted to `listings.js` inside controller.
- `"/", wrapAsync(index)` instead I use `listingController.index` (which runs, and I already imported `listingController` above from my controller model).
> :fire: Which we make the MVC pattern: I have done the same for all three: listing, user, and review. It can't pass multiple middlewares; only one can pass. Before this, it gave me an error; instead I will not pass the middleware, which then worked.

### Router.Route
- `Router.route`: a way to group together routes with different verbs but same paths.
- Initially, we wrote all `app.get` and `app.post` methods on `app.js` and then based on what they are, we shifted them to the routes folder.
- All the routers we wrote here – there is also a way to write in a compact way: `router.route`.
- Instead of making multiple logic for the same routes as different methods, we can simply write `router.route` and write all route methods inside there:
- Example:  
  `router.route("/login").get(async (req, res) => { res.render("users/login.ejs"); })`
- Now I will do this for all routes.

### Rating Stars Better Way
- Ratings are shown not in a good way; I have to restyle our rating. In other websites, stars are shown.
- Till now, the styling of rating is only range-based, which is not good; I have to improve.
- We will use the `starblity` library to show how many stars. Now we will copy the preferred CSS and create a new file called `rating.css` inside `public` folder.
- We copy-paste the `starblity` slot CSS to `rating.css`.
- I have to import them in `boilerplate.js`:  
  `<link rel="stylesheet" href="/css/rating.css">` (imported in boilerplate).
- Then I paste the `starblity-slot`, which is working now.

## Image Upload
- Image upload process is quite lengthy, but with our code we can't directly send images to backend.
- Why server can't receive data?
  1. Backend only receives raw format like raw text; with this code, backend can't accept image format.
  2. Size limit: we can send, but when files come to backend, where will we save the files? We know on MongoDB only BSON format data is saved. In BSON, there is a limit for file size.
- We will make our form capable of sending files to backend.
- Now first we have to make the form accept our files.
- With form capable of sending files, second step would be saving those files.
- We will not use Mongoose to save those files; instead we will use a third-party service.
- Those services are cloud services; famous is AWS Cloud.
- Till now, we are not doing production level; right now we are just doing development, so we will use a third-party service just for development. That party service is to save our files.
- They will give the URL link of the images. Third step would be saving this link on Mongoose.

### Manipulate Form Data
- First step is to manipulate our forms.
- Till now, form only can send URL-encoded data, which we use by saying `express.urlencoded`.
- For sending files, we will create a new parameter: `enctype="multipart/form-data"` (encoded type). Multipart form data are capable of sending data of multiple types.
- `<form class="row g-3 needs-validation" action="/listings" method="POST" novalidate enctype="multipart/form-data">`
- (I added the `enctype`; there are just 3 types.) `.post((req, res) => { res.send(req.body) })`
- If I just send `req.body`, we will get an empty object. The reason is that when new data is parsed, it will not understand; for that we will use a parser. For handling that, we will use `multer`.

### Multer for Data Process
- Multer npm package is a middleware for handling `multipart/form-data`, which is for uploading files. Multer will not process any form which is not multipart.
- `const multer = require("multer");`
- `const upload = multer({ dest: "uploads/" })`
  - (With this way, I required and defined the destination of the files.)
  - This means for parsing form data, we will use multer; from the forms, multer will extract the files and save the images inside the upload folder. That means we say file will be where saved; for saving the files actually inside the routes, we will use `upload.single("field-name")`.
- `.post(upload.single("listing[image]"), (req, res) => { res.send(req.file) })`
  - (upload.single means one file at a time, and where is our database location defined there; we want to show `req.file` – file details. It shows output like: `{"fieldname":"listing[image]","originalname":"dsa-core-concept.png","encoding":"7bit","mimetype":"image/png","buffer":{"type":"Buffer","data":...}`)

### Cloud Setup
- Cloud setup: we will use a different third-party site, but for now we will use Cloudinary and .env file.
- First we will create an account. On production environment credentials, we have to authorize our code to get access to files.
- For our code, we have to get the credentials. We share the code, but we will never share the credentials.
- This is important piece of info. In credentials, there are 3 things: Cloud Name, API Key, API Secret.
- These credentials (important details) are written in other files, which we will not upload on internet.
- For saving all our credential info, we will create a new file extension: `.env` file.
- `.env` task is to store our environment variables.
- The file name will be just `.env`; I will create it in the outer folder. We will store the SECRET like: `SECRET=value`, `SECRET` always will be capital and there will be no space and no double quotes. Once the environment variable is stored in `.env`, we can use it anywhere in our project.
- It will load environment variables from `.env` file.
- The `.env` files we can't directly access; for accessing them, we will use another third-party library called `dotenv` (npm package). It will not work as a dependency; it works independently.
- We have to add the condition:  
  `if(process.env.NODE_ENV !== "production") { require("dotenv").config(); }`  
  (We are currently in development phases; here we are building the project; deployment is deploying our website.)
- `.env` file we only use in development phases, not in production phases. Never upload the `.env` file on GitHub.
- Later when hosting, we will deploy; the credentials we store in `.env` will be handled by another method.
- During deployment time, we will create a new environment variable of node environment to set production; when our environment value is not production, then we will use other, else not. We have to store the credentials of Cloudinary, not our credentials.
- Remember: don't use any space, comma, semicolon; just go to next line.

### Multer Store Cloudinary
- For storing our files, we will use multer-store-cloudinary; for that we will use two npm libraries: `cloudinary` and `multer-storage-cloudinary`.
- As right now, we have installed lots of libraries; this is a huge topic. We have to install, later on we have to do our own research for our own product; it will take time, don't worry.
- As right now for future, we know the library which we feel quite easy, but when we try to implement our own thing on the website, it will take time to research and do.
- We will install two packages: `cloudinary` and `multer-storage-cloudinary`.
- For using them, we will create an individual own file. In there, we will configure and initialize Cloudinary.

#### Setup
- First, I created a file named `cloudConfig.js` which I will use only for configuration.
- We have to configure first. For configuration, we have to authorize the cloud name, API key, and API secret.
  ```
  CLOUD_NAME=MyKey
  CLOUD_API_KEY=Mykey
  CLOUD_API_SECRET=myKey
  ```
  (This is dummy; I changed the API code due to security reason. This is the cloud info which is not shared with anyone. I copied from my Cloudinary API keys and pasted in `.env`, but have to give the name by own.)
- `cloudinary.config({ cloud_name: process.env.CLOUD_NAME, api_key: process.env.CLOUD_API_KEY, api_secret: process.env.CLOUD_API_SECRET });`
  - (I have to config in `config.js` file with the same given name; before this, I also have to require those 2 npm packages after installing.)
  - (In `.env`, we can give any name, but on `cloudConfig.js` we have to give the default name.)
- Now we will make the storage for where we will store the files.
  ```js
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "air-bnb-clone",
      allowedFormats: ["png", "jpg", "jpeg"],
      // public_id: (req, file) => "computed-file"
    }
  });
  ```
  - (With this way, giving the folder name and allowed formats, we have defined the storage location.)
- `module.exports = { cloudinary, storage };` (We export both and where we use them in our `listing.js`.)
- `const { storage } = require("../cloudConfig.js");`
- `const upload = multer({ storage });` (First I require the storage in `listing.js` and then I show the upload file location.)
- Now our form will send data to backend and can be parsed.
- `{"fieldname":"listing[image]","originalname":"5be3643c2ac3458b207ee9047.jpg","encoding":"7bit","mimetype":"image/jpeg","destination":"uploads/","filename":"8e7be0d055cb9d87fbdb614c690f631b","path":"uploads\\8e7be0d055c87fbdb614c690f631b","size":105791}`
  - (Now if we upload any file, it will take some milliseconds to send data to backend and send this kind of raw file with the image link. Depending on file size, it will take that amount of time to load.)
- `5be3643c2ac3441bff5358b207e047.jpg` (the link I get will be stored in MongoDB database).

### Modify Listing Schema
- First we have to modify the listing schema; currently our image schema is just a simple string.
- In our image now we will store 2 values: first we will save the path (file URL), and also save the filename:  
  `image: { url: String, filename: String }`  
  Filename is not that effective right now, but it will be required later.
- In later when we want to update the file, then filename would be useful.
- Rest of the schema would be same; just 2 values added on image: one will be url and another filename.
- If we try to run our website, it will break because based on this, our entire website is made.
- In `listing.js`: `router.post("/", upload.single("listing[image]"), ...)`, I will use upload.

### Listing Image Upload
- In `listing.js`, image update: now I passed `upload.single` inside that POST route. The `upload.single` file logic will be written in controller. Also, I did one thing: `validateListing` is moved after `upload.single` because it would cause error. Now inside the controller `listings.js`, I will use:
  ```js
  let url = req.file.path;
  let filename = req.file.filename; // to get the url and filename of that file
  ```
  - `file` means entire object, `path` means url, and `filename` – the type. Now if I just print `console.log(url, "..", filename)`, it will print.
- ```js
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New listing created");
  ```
  (But first I have to define the newListing; otherwise it will not work. Then I can use `newListing.image = { url, filename }`. With this way, it worked.)
- Image in DB:
  ```json
  image: {
    url: 'https://res.cloudinary.com/dsjok71po/image/upload/v1740240790/air-bnb-clone/vhoe8x3x2vgvatvei.jpg',
    filename: 'air-bnb-clone/vhoe8x3x2vzyvgvatvei'
  }
  ```
  (When I search in the DB, I find the image url and filename like this.)
- We have done the 3 steps, but it is not showing on the frontend, as it updates the backend.
- My previous code in `data.js`:
  ```js
  description: "A stylish modern condo offering fantastic city views and a central location in Seoul.",
  image: url: "1.jpg"
  ```
  changed to `image: { url: "1.jpg", filename: "listing-image-25" }` in my entire `data.js`. Now I will again run `data.js` to restart my database.
- Now I have to change the URL in `index.ejs` and `show.ejs` from `<%= listing.image %>` to `<%= listing.image.url %>`. Also on `show.ejs`. Now display image works as expected. Generally, in bigger websites there is a file size limit for image files, because we have to rent out the cloud data store. If there is no limit, everyone can upload high-resolution images, which will increase our cost.

### Edit Preview Image
- Edit listing image – preview image.
- Once the listing is edited, how can we change the form? In the edit listing, there comes the URL, which we have to change to file upload.
- First on `new.ejs` form, I added the `enctype`.
- First we will make forms capable of accepting files and sending to the backend. We will change the routes of backend to accept the image data on `req.file`, upload that file on Cloudinary, then we will have access to filename and url, then we will change database.
- Now I will make the form capable of updating the listing image. We will fix `edit.ejs` same as we fixed `new.ejs`. First, I will make `enctype="multipart/form-data"`. Now form can accept the image, but how will it send to backend? In my `listing.js` route, I add the same method of sending data before `validateListings` both on PUT and POST routes of new and edit. When it is updated in `updateListing`, I put in the variable the update.
  ```js
  let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
  let url = req.file.path;
  let filename = req.file.filename;
  listing.image = { url, filename };
  await listing.save();
  ```
  (First I save in the variable `listing` of previous save, then I save the url and filename from `file.path` and `filename`, then I stored them in the `url` and `filename` which is our `data.js` image object, then I saved.)
- But there is a catch: if we didn't upload any image, leaving it as is, then the new url and filename will be blank and store undefined value on backend. To avoid that, first we will check if `req.file` exists; then we will only update; otherwise not. In JS, to check if a variable is undefined or not, we can check like this:
  ```js
  if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  ```
  (It checks the condition of whether `req.file` is not blank – meaning new image is uploaded – then it will run this condition.)
- Image preview for listing: for updating the existing listing, we want to preview the old listing – what our old picture looks like. Then user can decide whether the listing should be updated or not. Inside `edit.ejs`:
  ```html
  <div class="mb-3">
    Original Listing: <hr/>
    <img src="<%= listing.image.url %>" alt="<%= listing.title %>">
  </div>
  ```
  (I show the old image just before the file. But there is a catch: if someone uploads a high-quality image, it will also show the high quality there, causing error – it will take too much time to show. Instead, we will compress that image. This is just for `edit.ejs` and not for `show.ejs`.)
- We can also compress the picture quality, but Cloudinary also provides multiple options for image transformation. For example, if we want to blur the image, we can simply do:  
  `res.cloudinary.com/demo/image/upload/e_blur:300/sample.jpg` (with this way we can blur the image; this is due to Cloudinary internal API).
- How can we compress that image? In the controller folder `listings.js`, for rendering the image:
  ```js
  if(!listing) {
    req.flash("error", "Listing you requested doesn't exist");
    res.redirect("/listings");
  }
  let originalImage = listing.image.url;
  originalImage.replace("/upload", "/upload/w_250");
  ```
  (First I extract the image url and I replace with `upload` to add the height and width; we can change any parameter. Then I also render the originalImage. I missed one thing: if user goes to a listing that doesn't exist, we show the flash message and redirect to listings.)

## Maps Feature
- Now we will study the map feature. We will not use it that much, but it is quite good.
- In any listings site, at the end it will show the location of that listing.
- We will use the maps API for showing the map. There is the Google Maps API which has interesting features: calculate shortest distance, see neighbourhood area, and much more.
- It will require a credit/debit card to use it, so we will use Mapbox.
- Access token means that the user is authorized to use that token just to check the current user.

### Define Maps Ways
- For using that, first we will have to use the access token from Mapbox and store it in `.env`.
- For displaying the first map, the project shows from Mapbox, but it required a credit card, so I use Maptiler.
- As right now, I am learning from others; due to this, it is straightforward. But when we try to implement our own feature, it will take lots of time, as we have to research and fix bugs.
- We display a map on the webpage. Generally, there is code for the entire page, but we only want it on `show.ejs`.
- First I have to add the 2-line script on `boilerplate.js` for Maptiler.
  ```html
  <div class="col-6 offset-3 mb-3">
    <div id="map" class="col-6 offset-3 mb-3"><h3>Address:</h3></div>
  </div>
  ```
  (I added the basic location.)
  `<% if(listing.reviews.length > 0) { %>` (I added logic: only if reviews exist, then all reviews will be shown.)

- ```js
  maptilersdk.config.apiKey = 'YOUR_MAPTILER_API_KEY_HERE';
  const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.STREETS,
  });
  ```
  (In here, first I passed the API key, and then inside the function I gave them.)

- ```js
  let mapToken = "<%= process.env.MAP_TOKEN %>";
  maptilersdk.config.apiKey = mapToken;
  const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.STREETS,
    center: [23.4653, 67.6983],
    zoom: 9,
  });
  ```
  (With this way, first I store the Maptiler token in `mapToken`, then config; now it shows a small map on my page. `center` means longitude and latitude; `zoom` means how much bigger zoom.)

- All of our code has access in EJS file; now from the EJS I will access the script. In the script, I will save the environment variable. The JS file will be saved in `public/js/map.js`. I stored those into `map.js`; the script can't accept EJS, so the `process.env` value is stored in a script tag and then used with the same name in `map.js`.

## GeoCoding Important
- **GeoCoding**: GeoCoding is the process of converting an address (like a street address) into geographic coordinates (like latitude and longitude), which you can use to place markers on a map, or position on a map.
- Till now, our map only understands lat and long. So we want to convert our address to lat and long, which only our code understands.
- When we add a new listing, how can we convert it into lat and long?
- 2 types of geocoding are available:
  - **Forward geocoding**: turning "Kalikanagar, Butwal" into -27.248, 29.248.
  - **Reverse geocoding**: turning -27.248, 29.248 into "Kalikanagar, Butwal".
- The suggestions we get when we type an address are possible due to geocoding.
- For using the Mapbox SDK JS geocoding, I first require in `listings.js`:
  ```js
  let response = await geocodingClient.forwardGeocode({
    query: 'Butwal, Nepal',
    limit: 1
  }).send();
  ```
  - (Inside the POST listing, I require geocoding with forward: string to lat/long; query can be anything, limit means we only want 1 response.)

### Storing the Coordinates
- **GeoJson**: The most simple structure in GeoJSON is a point.
- Below is an example of a point representing the approximate location of any place.
- In GeoJSON, longitude comes first in the array. For using all functionalities, we use GeoJSON.
- Example: `{ "type": "Point", "coordinates": [ -152.5, 37.5 ] }`
- What's the usage of saving data in GeoJSON? Mongoose.
- Now first I have to define the schema:
  ```js
  geometry: {
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
  ```
  - (This means I give the type String, and this is GeoJSON format; `enum` will be `'Point'`. First comes longitude and latitude, and I give the coordinates as an array of numbers.)
- I call the geocoding API Maptiler using axios.
- `newListing.geometry = response.data.features[0].geometry.coordinates;`  
  ```js
  const feature = response.data.features[0];
  const geometry = {
    type: "Point",
    coordinates: feature.geometry.coordinates,
  };
  ```
  (Response data feature will give an output of an array; only first one means longitude and latitude; then coordinates will hold the value of it.)
- This following marker we can't directly access in the JS file because these lat/long can only be accepted in EJS form.
- ```js
  <script>
    let mapImport = "<%= process.env.MAP_TOKEN %>";
    let coordinates = "<%= listing.geometry.coordinates %>";
  </script>
  ```
  (As we directly try to use this, it will give an error, so we have to convert this into JSON stringify: with EJS, `<%-` and `JSON.stringify()`, it will convert to JSON string.)
- Now I will map the marker at the exact location.
  ```js
  const marker = new maplibregl.Marker()
    .setLngLat([77.1025, 28.7041])
    .addTo(map);
  ```
  (I first define the default marker position in `map.js`.)

## Website Homepage (Day 54)
- First, for the homepage, now we will add filters like on Airbnb.
- After the navbar, first I change the entire navbar look.
- Now I will add other things after the navbar which are similar to Airbnb. I have added the HTML of top choice:
  ```html
  <div id="filter">
    <div><i class="fa-solid fa-person-breastfeeding"></i></div>
  ```
- I have added the frontend showing from tags, but if we really want to implement, we can simply divide them into models in `listing.js` and give each one and work on that. I could work on that.

## Switch Feature
- Now I will work on switches: it's a toggle switch; when we click on it, it will turn on or off.
- I added the switches and made the text reverse. Now I want to perform something when I click on the toggle option.
- I can do this with an event listener. Now I have done `addEventListener`; now I will add the functionality.
- We have 2 options when we want to hide anything:
  - `visibility: hidden`: it will hide from the code but will occupy the space that it takes.
  - `display: none`: it will not be shown and will also not occupy the space.
- Which shows the tax when user clicks, with taxes 18% tax.

## Mongoose Atlas DB
- Now using Mongoose Atlas. Now we have stored data on Cloudinary; now we will use Mongo Atlas for cloud database service.
- Now our complete database will shift to the cloud/online. First create an account on Mongo Atlas.
- In storage, there are 2 types: individual storage and shared storage.
  - Individual means we only can access; shared means that storage can be used by anyone but can't have access to the other.
- For setting authentication, we have to set a username and password.
- Note the username and password. Now we can create a user. What does it mean to create a user? When we create any database, till now we only created on localhost. In our localhost DB, from VS Code when we want to do read/write, we can do that.
- We can set who only can read access and who only have write access, like different levels of permission for users.
- Like college students don't have access to change marks, while teachers do.
- I have added the password. Now I have to connect to the local environment, which requires the IP address.
- When we upload to the internet, we have to get the local environment for hosting; options are Render and Heroku.
- When deploying, it will move to cloud. When it goes online, we have to add the online IP.
- How can we connect the local project to online database? When we connect to Node.js, it will show the database link string. We have to copy and change the password to your password.
- We have to add that string to `app.js`, where we connect to MongoDB – `MONGO_URL` – we will change there.
- I store that password in env first; we will later not push the env file for security purpose. I first add in env and change `mongo_url` to `process.env` with any name and replace `mongoose.connect` with that same name.
- Now we can check: all of our data that we added here will not be shown; we can add any new listings now.

## Mongoose Session Store
- `mongoose session store`: The next thing we will see before deployment is Mongo session store with `connect-mongo`.
- As I remember, we use express session. The storage we use is local storage.
- The session storage is not made for deployment; it is meant only for designing and development.
- Due to it, it will leak memory under most conditions and cannot be scalable. It is only meant for debugging and development.
- By default, session storage we have to change it.
- There are lots of options. Also, we have experience with Mongo; we will use a service called `connect-mongo`. All of the cookie, user expiry date, user token will be stored here.
- For using this, we have to install it first.
- We have to require connect-mongo and express-session is already required.
- We can pass `connect-mongo` as a middleware or as a variable:
  ```js
  store: MongoStore.create({
    mongoUrl: 'dbUrl',
    crypto: { secret: secret }
  })
  ```
- With this, we call where our database is; it will also have advanced options. In advanced options, we can use encryption; here I pass the secret code, the same secret as above.

### User Session Information
- We can also pass `touchAfter`, which is a common used method. Like on Facebook, when we log in, if we close that tab and again open, our account will still be logged in. It means if we refresh multiple times, it will update session information whether changes on session or not.
- What we want: even after refreshing, `touchAfter` means that if there is no update on session, we will update after 24 hours.
- I moved this before `sessionOptions` and also passed the store (the name inside `sessionOptions`), which is Mongo related information.
- Now our session information is stored on Atlas database; if we want to store on local database, we can simply pass `mongo_url` on `mongoUrl`.

#### Mongostorage Error Handle
- We will pass another function after the store, in case there is an error on MongoStore; we just console and know where the error is.
- Like this way: `store.on("error", (err) => { console.log("Error in mongo store", err); });`
- Now if we just run on Atlas database, inside the collection we will see another collection called `sessions`. Why? In here it will store session-related info. Back then when we were using local, it was saved in memory storage; now it will be saved in Atlas sessions collection.
- In session, it will show the last modified details, expires changes of modified and expires.
- The information related to our session, the maximum lifetime is 14 days if we didn't change anything, which used to be set by `session.cookie.expires`. If we want to change this interval, we can change it to any number of days.

## Deployment
- For deployment, there are lots of options; popular are: `render`, Netlify, and `cyclic`.
- Heroku has now become paid. We will use `render`.
- First I will create an account on `render`.
- Then my next steps would be to define the node version in `package.json`. Why? Because if we don't specify, when deploying on `render`, it might cause an error, so we have to define the node version like this:
  ```json
  "engines": { "node": "22.11.0" }
  ```
  (Just define the engines, which node version.)
- The next thing is to connect `render` account to the GitHub account.
- Currently our project is on local storage. How can `render` get the code? So we have to upload the project to GitHub (private push). From GitHub, `render` will take the information.
- In the future, when we update any code, we can simply push to GitHub and tell `render` to just update the code. The process will be smooth from now.

## Git Push
- Push to git:
  1. `git init`
  2. `git remote add origin giturl`
  3. `git status` (it will show files that have not been committed)
  4. (On GitHub, we don't want to upload the `.env` files which store sensitive information, and `node_modules` – all node modules files would be stored in `package.json`, we don't need to upload them.)
  5. `.env` and `node_modules` (ignore these files)
     - Create a `.gitignore` file (inside there put `.env` and `node_modules/` (because it's a folder))
     - Which means git will ignore these two files. (After this, `node_modules` and `.env` file will appear in gray color, meaning they will be ignored.)
  6. `git add .` (add all files)
  7. `git status` (check that all files are staged)
  8. `git commit -m "Add my first-mega-project files"`
  9. `git status` (it should show nothing to commit, on branch main)
  10. `git push origin master`

## Connect Render to GitHub
- First I have to connect Render to GitHub (remember to only select the repo, as I only want to give access to my project, not my entire profile).
- Then I have to connect and follow steps:
  1. Give a name
  2. Region
  3. Runtime (set to Node)
  4. Build command (set to `npm install`; we will install packages from npm)
  5. Start command (`node app.js`; set node because we only run once, so we don't use `nodemon app.js`)
  6. Auto-deploy (we can set to No on advanced options)
  7. Select "Create Web Service"
- It will take time. If we just deploy that, it will fail because we use environment variables multiple times in our code, but we are not giving access to environment variables, which is why it causes an error.

### For Making Successful Deployment
- Configure the Atlas and environment variables.
- Till now, our database is connected to a local system, but now we will connect with Render.
- Render will have a different IP address.
- We have to store that on MongoDB so that Atlas identifies the whitelist of Render IP.
- For adding environment variables: in environment, I will each add each environment variable.
- First I add each environment with key and their value.
- The 3 IPs of Render I have to add to network access of MongoDB Atlas.
- Then I also force the install process because Cloudinary lower version causes error: `npm install --force`.

> :white_check_mark: Now finally, my project has been finished.

## Coming Topics
(The notes are from March 2025 notes and project, but I'm improving notes as of now.)
- In the frontend after this, I have learned:
  1. React
  2. Tailwind
- As part of the full-stack project, I've done this project, but the course is not good enough in my opinion; lots of basic topics were missed, just surface-level learning.