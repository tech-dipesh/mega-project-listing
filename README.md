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
