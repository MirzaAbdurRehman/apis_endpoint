// server.js
const app = require('./signup_api');  // ✅ Import `app` from signup_api.js
const app = require('./search_api');  // ✅ Import `app` from search_api.js
const app = require('./put_api_mongoDB');  // ✅ Import `app` from put_api_mongoDB.js
const app = require('./post_api_mongoDB');  // ✅ Import `app` from post_api_mongoDB.js
const app = require('./patch_api_mondoDB');  // ✅ Import `app` from patch_api_mondoDB.js
const app = require('./login_api');  // ✅ Import `app` from login_api.js
const app = require('./jwt_login_api');  // ✅ Import `app` from jwt_login_api.js
const app = require('./get_api');  // ✅ Import `app` from get_api.js
const app = require('./Flie_upload_Multer_Api');  // ✅ Import `app` from Flie_upload_Multer_Api.js
const app = require('./delete_api_mongoDB');  // ✅ Import `app` from delete_api_mongoDB.js


const PORT = 2000;  // You can also use process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
