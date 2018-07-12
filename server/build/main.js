require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
    mongoURI: 'mongodb://localhost:27017/mern_lvl1',
    secretOrKey: "secret"
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_keys__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_passport__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_cours__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_user__ = __webpack_require__(15);







const PORT = process.env.PORT || 4000;
const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_5__config_keys__["mongoURI"], { useNewUrlParser: true });
const db = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connecté a MongoDB !');
});

// Passport Middleware
app.use(__WEBPACK_IMPORTED_MODULE_4_passport___default.a.initialize());

//Passport Config 
// require("../config/passport")(passport);

__WEBPACK_IMPORTED_MODULE_6__config_passport__(__WEBPACK_IMPORTED_MODULE_4_passport___default.a);
// const configPassport = require("../config/passport")(passport)

// parse application/json
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default()());
app.use(__WEBPACK_IMPORTED_MODULE_2_cors___default()());

// Route


app.use('/cours', __WEBPACK_IMPORTED_MODULE_7__routes_cours__["a" /* default */]);
app.use('/users', __WEBPACK_IMPORTED_MODULE_8__routes_user__["a" /* default */]);

app.listen(PORT, () => {
    console.log(`Le serveur ${PORT} tourne !`);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport_jwt__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__keys__);
// const JwtStrategy = require("passport-jwt").Strategy;

const JwtStrategy = __WEBPACK_IMPORTED_MODULE_0_passport_jwt___default.a.Strategy;

// const ExtractJwt = require("passport-jwt").ExtractJwt;

const ExtractJwt = __WEBPACK_IMPORTED_MODULE_0_passport_jwt___default.a.ExtractJwt;


// const User = mongoose.model("user");



const opts = {};
opts.jwtFormRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = __WEBPACK_IMPORTED_MODULE_2__keys___default.a.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload);
    }));
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Cours__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_multer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_multer__);




const coursRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

var storage = __WEBPACK_IMPORTED_MODULE_2_multer___default.a.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

var upload = __WEBPACK_IMPORTED_MODULE_2_multer___default()({ storage: storage });

// All Cours
coursRouter.get("/", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_Cours__["a" /* Cours */].find({}, (err, cours) => {
        if (err) console.log(err);
        res.json(cours);
    });
});

// Add Cours
coursRouter.post('/add', upload.single('img'), (req, res) => {
    const newFilm = new __WEBPACK_IMPORTED_MODULE_1__models_Cours__["a" /* Cours */](req.body);
    newFilm.img = req.file.filename;
    newFilm.save((err, film) => {
        if (err) return console.log(err);
        res.redirect("http://localhost:3000/cours");
    });
});

// Edit Cours // Img Multer not work
coursRouter.post('/edit/:id', upload.single('img'), (req, res) => {
    let body = {
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        img: req.file.filename
    };
    __WEBPACK_IMPORTED_MODULE_1__models_Cours__["a" /* Cours */].findByIdAndUpdate(req.params.id, body, (err, film) => {
        if (err) return console.log(err);
        res.redirect("http://localhost:3000/cours");
    });
});

// Delete Cours
coursRouter.get("/delete/:id", (req, res) => {
    let idParams = { _id: req.params.id };
    __WEBPACK_IMPORTED_MODULE_1__models_Cours__["a" /* Cours */].findByIdAndRemove(idParams, err => {
        if (err) console.log(err);
        res.redirect("http://localhost:3000/cours");
    });
});

// Single Cours
coursRouter.get("/:id", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_Cours__["a" /* Cours */].findById({ _id: req.params.id }, (err, cour) => {
        if (err) return console.log(err);
        res.json(cour);
    });
});

/* harmony default export */ __webpack_exports__["a"] = (coursRouter);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cours; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const coursSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String },
    years: { type: Date, "default": Date.now },
    body: { type: String, required: true },
    img: { type: String }
});

const Cours = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("cours", coursSchema);



/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gravatar__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_gravatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_gravatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcryptjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bcryptjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_keys__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__config_keys__);






// Import object


const userRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

userRouter.get("/", (req, res) => {
    res.json({
        msg: "User works"
    });
});

// Register user
// localhost://users/register   
userRouter.post("/register", (req, res) => {
    __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */].findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                email: "L'email existe deja !"
            });
        } else {
            const avatar = __WEBPACK_IMPORTED_MODULE_2_gravatar___default.a.url(req.body.email, {
                s: "200", // size
                r: "pg", // Rating
                d: "mm" // Default
            });

            const newUser = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */]({
                name: req.body.name,
                email: req.body.email,
                avatar: avatar,
                password: req.body.password
            });

            // HAsh Password
            __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default.a.genSalt(10, (err, salt) => {
                __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default.a.hash(newUser.password, salt, (err, hash) => {
                    if (err) console.log(err);
                    newUser.password = hash;
                    newUser.save().then(user => res.json(user)).catch(err => console.log(err));
                });
            });
        }
    });
});

// Login user
// localhost://users/login
userRouter.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */].findOne({
        email: email
    }).then(user => {
        // Check the user
        if (!user) {
            return res.status(404).json({
                email: "L'email n'existe pas !"
            });
        }

        // Check password 
        __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default.a.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User Match
                const payload = {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar // Creation du JWT Payload
                    //Sign Token
                };__WEBPACK_IMPORTED_MODULE_4_jsonwebtoken___default.a.sign(payload, __WEBPACK_IMPORTED_MODULE_6__config_keys___default.a.secretOrKey, {
                    expiresIn: 3600
                }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                return res.status(400).json({
                    password: "Password incorrect"
                });
            }
        });
    });
});

// Get users/current
// Return Current User
userRouter.get("/current", __WEBPACK_IMPORTED_MODULE_5_passport___default.a.authenticate("jwt"));

/* harmony default export */ __webpack_exports__["a"] = (userRouter);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    date: { type: Date, default: Date.now }
});

const User = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("user", userSchema);



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("gravatar");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map