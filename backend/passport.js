require("dotenv").config();
const passport = require("passport");
let User = require("./models/user.model");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      const id = profile.id;
      const displayName = profile.displayName;

      User.findOne({ userId: id }).exec((err, user) => {
        if (err) {
        //   return res.status(400).json({
        //     error: "Something went wrong...",
        //   });
        } else {
          if (!user) {
            const userId = id;
            const username = displayName;
            const newUser = new User({ username, userId });
            console.log(userId);
            newUser.save((err, data) => {
              if (err) {
                // return res.status(400).json({
                //   error: "Something went wrong...",
                // });
                console.log(err);
              }
              console.log("Data Saved Successfully!");
            });
          }
        }
      });

      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
