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

## 🏗️ Project Architecture

This project follows the **MVC (Model-View-Controller)** design pattern:

```
MVC Pattern
├── 📁 models/         → Database schemas (Mongoose)
├── 📁 views/          → EJS templates (Frontend)
└── 📁 controllers/    → Business logic (Backend callbacks)
```

> Route files in `/routes` are kept thin — they only define paths and middleware chains. All logic lives in `/controllers`.

---

## ⚙️ Environment Setup

### 1️⃣ Create a `.env` file in the root directory

```dotenv
# ─── Server ───────────────────────────────────────
PORT=8080

# ─── Cloudinary (For Image Uploads) ───────────────────
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# ─── MapTiler (Maps & Geocoding) ──────────────────
MAP_TOKEN=your_maptiler_access_token
MAP_TILER_KEY=your_maptiler_key

# ─── MongoDB Atlas (Cloud Database) ───────────────
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourdbname

# ─── Sessions & Security ──────────────────────────
SESSION_SECRET=your_super_secret_session_key
CONNECT_MONGO=your_mongo_session_secret
secret=your_cookie_secret_key
```

### 🔑 Where to Get These Keys

| Key | Source |
|---|---|
| `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET` | [Cloudinary Dashboard](https://cloudinary.com/console) → API Keys |
| `MAP_TOKEN` / `MAP_TILER_KEY` | [MapTiler Cloud](https://cloud.maptiler.com/account/keys/) → API Keys |
| `ATLASDB_URL` | [MongoDB Atlas](https://www.mongodb.com/atlas) → Connect → Drivers → Copy string |
| `SESSION_SECRET` / `secret` | Any long random string (e.g., use a password generator) |

---

## 🚀 Installation & Run

### Prerequisites

- ✅ Node.js `v22.x` or higher
- ✅ npm `v9+`
- ✅ MongoDB Atlas account (or local MongoDB)
- ✅ Cloudinary account
- ✅ MapTiler account

### Steps

```bash
# 1. Clone Repo 
git clone https://github.com/tech-dipesh/mega-project-listing.git

# 2. Install all dependencies
npm install

# 3. Create your .env file (see above section)
touch .env
# → Add all env kyes.


# 5. Start the development server
npm run dev

# 6. Open in browser
# http://localhost:8080
```

---

## 🗂️ Folder Structure

```
homeFinder/
│
├── 📁 controllers/           # Business logic (MVC Controllers)
│   ├── 404page.js
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── 📁 middleware/           # Midlewares
│   ├── globalerror.js
│   ├── isLoggedIn.js
│   └── saveRedirecturl.js
│
├── 📁 models/                # Mongoose schemas (MVC Models)
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── 📁 routes/                # Express routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── 📁 utils/                # Utils
│   ├── expressError.js
│   ├── validate.js
│   ├── validateListings.js
│   ├── wrapAsync.js
│
├── 📁 views/                 # EJS templates (MVC Views)
│   ├── 📁 include/
│   │   └── flash.ejs
│   │   ├── footer.ejs
│   │   ├── navbar.ejs
│   ├── 📁 layouts/
│   │   └── boilerplate.ejs
│   ├── 📁 listings/
│   │   ├── contact.ejs
│   │   ├── donate.ejs
│   │   └── edit.ejs
│   │   └── error.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── show.ejs
│   └── 📁 users/
│       └── login.ejs
│       ├── signup.ejs
│
├── 📁 public/                # Static assets
│   ├── 📁 css/
│   │   └── index.css        
│   │   └── navbar.css     
│   │   └── new.css   
│   │   └── rating.css        # Starability star ratings
│   └── 📁 files/
│       └── icon.png          # Logo Of The Website            
│   └── 📁 js/
│       └── map.js            # MapTiler map logic
│       └── script.js          # For Prevent Form
│
├── .env                      # 🔒 Environment variables 
├── .env.example              # 🔒 Environment variables Examples
├── .env.local                # 🔒 Local Variable
├── .gitignore                # List of files not to commit on github
├── app.js                    # Main entry point
├── cloudConfig.js            # Cloudinary configuration
├── README.js                 # Docs of the Project
├── schema.js                 # Joi Database
└── package.json
```

---

## 🔐 Authentication & Authorization

### 🔑 How Authentication Works

```
User Signup
    │
    ▼
passport-local-mongoose.register(user, password)
    │   ↳ Automatically: salts password → hashes it → saves to DB
    ▼
Auto Login via req.login()
    │
    ▼
Session stored in MongoDB Atlas (connect-mongo)
    │
    ▼
Subsequent requests: passport.deserializeUser() restores user from session
```

### 🛡️ Authorization Rules

| Action | Rule |
|---|---|
| View listings | 🔐 Must be logged in  |
| Create listing | 🔐 Must be logged in |
| Edit / Delete listing | 🔐 Must be the **owner** |
| Post a review | 🔐 Must be logged in |
| Delete a review | 🔐 Must be the **author** |

### 🧩 Key Middleware

```js
// middleware.js

// Check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl; // save where they wanted to go
    req.flash("error", "You must be logged in!");
    return res.redirect("/login");
  }
  next();
};

// Redirect user back after login
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
```

---

## 🖼️ Image Upload Flow

```
User selects image on form (enctype="multipart/form-data")
    │
    ▼
multer middleware parses the file
    │
    ▼
multer-storage-cloudinary uploads file to Cloudinary
    │
    ▼
Cloudinary returns { url, filename }
    │
    ▼
url + filename saved to MongoDB listing document
    │
    ▼
Image served to frontend via listing.image.url
```

### 🔄 Image Compression on Edit Page

To prevent full-resolution previews on the edit page, Cloudinary's URL transformation is used:

```js
let originalImage = listing.image.url;
originalImage = originalImage.replace("/upload", "/upload/w_250");
```

---

## 🗺️ Maps & Geocoding

### Forward Geocoding Flow

```
User types address (e.g., "Butwal, Nepal")
    │
    ▼
Geocoding API converts address → [longitude, latitude]
    │
    ▼
Coordinates stored in MongoDB as GeoJSON Point:
{ type: "Point", coordinates: [lng, lat] }
    │
    ▼
MapTiler renders marker on the map
```

### GeoJSON Schema (Mongoose)

```js
geometry: {
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    required: true
  }
}
```

> ⚠️ **Important:** In GeoJSON, **longitude comes first**, then latitude. This is the opposite of most map displays!

---

## 🧠 Key Learnings & Notes

```
💡 req.body   → extracts data from POST form body (hidden from URL)
💡 req.params → extracts data from the URL path (visible in URL)
💡 req.query  → extracts data from query strings (?name=value)
```

| Concept | Quick Note |
|---|---|
| `method-override` | Allows PUT/DELETE from HTML forms |
| `wrapAsync()` | Wraps async route handlers to catch errors |
| `joi` | Server-side schema validation |
| `$pull` operator | Removes items from a MongoDB array |
| `.populate()` | Replaces ObjectId refs with actual documents |
| Cascade Delete | Mongoose middleware deletes related reviews when a listing is deleted |
| `saveUninitialized: false` | Prevents empty sessions from being saved (removes deprecation warning) |
| `resave: false` | Prevents session from being resaved if unmodified |
| `httpOnly: true` | Protects cookies from XSS attacks |
| `Router.route()` | Groups GET/POST/PUT/DELETE for same path cleanly |

---

## 🐛 Problems Faced & Solutions

<details>
<summary>🔍 Click here to know all error that i've faced:</summary>

| # | Problem | Solution |
|---|---|---|
| 1 | Dynamic routing breaking — couldn't find listing | Must use `new` keyword correctly; `/listings/new` must come **before** `/listings/:id` |
| 2 | Navbar not aligning / color not applying | Fixed via Bootstrap utility classes + custom CSS override |
| 3 | Mismatched field name wasted 2–3 hrs | Always name form inputs exactly as the model schema field names |
| 4 | `connect-flash` saying `path is not defined` | Forgot to `require('path')` at the top of the file |
| 5 | Flash message printed twice | Was also `console.log`-ing it — remove the console line, flash only prints to EJS once |
| 6 | Flash message appeared before body content | Bootstrap alert z-index issue — fixed with custom z-index styling |
| 7 | Reviews not submitting — `Cannot POST` error | Forgot to `require` the review router AND forgot `mergeParams: true` on Router |
| 8 | Username not showing on some listings | Missing `.populate("owner")` on the listing query |
| 9 | HTML comments inside EJS causing errors | Never put HTML comments `<!-- -->` inside EJS — they get parsed |
| 10 | Image not displaying after upload | Changed `<%= listing.image %>` to `<%= listing.image.url %>` in all templates |
| 11 | Coordinates rendering as string not array | Used `<%- JSON.stringify(listing.geometry.coordinates) %>` without quotes |
| 12 | Edit listing → blank image when no new file uploaded | Added `typeof req.file !== "undefined"` check before updating image |
| 13 | Login too slow / redirect not working after login | Saved `req.originalUrl` to session before Passport resets it; used `res.locals.redirectUrl` |
| 14 | `connect-mongo` connection error | Checked ATLASDB_URL format and whitelist IP on MongoDB Atlas |

</details>

---

## 📋 .gitignore Reference

Get a comprehensive Node.js `.gitignore` from the official GitHub repository:

🔗 **[github/gitignore — Node.gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)**

Or use the quick version below:

```gitignore
# Dependencies
node_modules/
package-lock.json

# Environment Variables
.env
.env.local
.env.example

# Notes for myself
old-readme.md
updated-notess.md

# IDE
.vscode/
```

> 💡 **Tips:** You can also generate a `.gitignore` at [gitignore.io](https://www.toptal.com/developers/gitignore) by selecting `Node`, `macOS`, `Windows`, `VSCode` etc.

---

## ☁️ Deployment

This project is deployed on **[Render](https://render.com)** with **MongoDB Atlas** as the cloud database.

### Deployment Checklist

```
✅ Set node version in package.json:
   "engines": { "node": "22.11.0" }

✅ Push project to GitHub (private repo)
   - Make Sure .env and node_modules/ are in .gitignore

✅ Create Web Service on Render
   - Runtime: Node
   - Build Command: npm install
   - Start Command: node app.js/npm run dev

✅ Add Environment Variables on Render Dashboard
   (All keys from your .env file)

✅ Whitelist Render's IP addresses on MongoDB Atlas
   Network Access → Add IP Address

✅ Switch session store from MemoryStore → connect-mongo
   (MemoryStore leaks memory in production!)
```

### Session Store (Production-safe)

```js
const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  crypto: { secret: process.env.SESSION_SECRET },
  touchAfter: 24 * 3600 // only update session every 24 hours if unchanged
});

store.on("error", (err) => {
  console.log("MongoDB Session Store Error:", err);
});
```

---

## 🔮 Future Improvements

- [ ] 🔍 Search & filter listings by category / location
- [ ] 📱 PWA / mobile app version
- [ ] 💳 Payment integration (Stripe)
- [ ] 📧 Email verification on signup
- [ ] 🌍 Google OAuth login
- [ ] 🗺️ Cluster map showing all listing locations which is still not 
- [ ] 📊 Admin dashboard
- [ ] ♾️ Infinite scroll / pagination
- [ ] ⚡ Migrate frontend to React + Tailwind CSS

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ as a learning project in early 2025**

*"Never fear using docs when you forget something — it's more useful to understand by doing than to just memorize."*

⭐ **Star this repo to motivate me to building more project!** ⭐

</div>