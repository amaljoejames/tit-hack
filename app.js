// Load environment variables from .env in non-production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("./models/user.js");
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const progressRouter = require("./routes/user.js");

const app = express();

// MongoDB connection URL
const dbUrl = "mongodb://127.0.0.1:27017/test";

// Connect to MongoDB
async function main() {
  await mongoose.connect(dbUrl);
}
main()
  .then(() => {
    console.log("✅ Connected to MongoDB locally");
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err);
  });

// Set up EJS as view engine
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Session store in MongoDB
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET || "thisshouldbeabettersecret!",
  },
  touchAfter: 24 * 60 * 60, // 24 hours
});

store.on("error", (err) => {
  console.log("❌ Session store error:", err);
});


// Session configuration
const sessionConfig = {
  store,
  secret: process.env.SECRET || "thisshouldbeabettersecret!",
  resave: false,
  saveUninitialized: true,
 cookie: {
  httpOnly: true,
  expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days from now
  maxAge: 1000 * 60 * 60 * 24 * 3,
},

};

app.use(session(sessionConfig));
app.use(flash());

// Passport authentication config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Global middleware for flash and current user
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});
app.use((req, res, next) => {
  console.log("🔑 Current Session:", req.session);
  console.log("🧑‍💼 Current User:", req.user);
  next();
});
// Routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
app.use("/progress",progressRouter);

// Error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).render("error", { message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render("error", { message: "Page Not Found" });
});

// Server listener
const port = 8080;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

