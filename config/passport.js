var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/User");

// serialize & deserialize User
passport.serializeUser(function (user, done) {
  // Strategy 성공 시 호출
  done(null, user.id); // 여기의 user.id가 deserializeUser의 첫 번째 매개변수로 이동
});
passport.deserializeUser(function (id, done) {
  // 매개변수 id 는 serializeUser 의 done 의 인자 user.id 를 받은 것.
  User.findOne({ _id: id }, function (err, user) {
    // id 로 User 정보를 찾는다. user정보를 바로 넣어도 되지만 DB 에서 변경된 내용을 가져오기 위해 id를 이용 조회 처리.
    done(err, user); // 여기의 user 가 req.user 가 됨.
  });
});

// local strategy
passport.use(
  "local-login",
  new LocalStrategy( // local 전략을 세움.
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, username, password, done) {
      User.findOne({ username: username })
        .select({ password: 1 })
        .exec(function (err, user) {
          if (err) return done(err);

          if (user && user.authenticate(password)) {
            return done(null, user);
          } else {
            req.flash("username", username);
            req.flase("errors", { login: "The username or password is incorrect." });
            return done(null, false);
          }
        });
    }
  )
);

module.exports = passport;
