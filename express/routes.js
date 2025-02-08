// server.js

const express = require('express');


const router = express.Router();


const Signup_route = require('./signup_api');  // ✅ Import `app` from signup_api.js
const search_api_route = require('./search_api');  // ✅ Import `app` from search_api.js
const put_api_route = require('./put_api_mongoDB');  // ✅ Import `app` from put_api_mongoDB.js
const post_api_route = require('./post_api_mongoDB');  // ✅ Import `app` from post_api_mongoDB.js
const patch_api_route = require('./patch_api_mondoDB');  // ✅ Import `app` from patch_api_mondoDB.js
const login_api_route = require('./login_api');  // ✅ Import `app` from login_api.js
const jwt_login_api_route = require('./jwt_login_api');  // ✅ Import `app` from jwt_login_api.js
const get_api_route = require('./get_api');  // ✅ Import `app` from get_api.js
const Flie_upload_Multer_Api_route = require('./Flie_upload_Multer_Api');  // ✅ Import `app` from Flie_upload_Multer_Api.js
const delete_api_route = require('./delete_api_mongoDB');  // ✅ Import `app` from delete_api_mongoDB.js


router.use('/signup',Signup_route)
router.use('/search',search_api_route)
router.use('/putapi',put_api_route)
router.use('/post_api',post_api_route)
router.use('/login_api',login_api_route)
router.use('/jwt_login_api',jwt_login_api_route)
router.use('/get_api',get_api_route)
router.use('/Flie_upload_Multer_Api',Flie_upload_Multer_Api_route)
router.use('/delete_api',delete_api_route)
router.use('/patch_api',patch_api_route)

module.exports = router;