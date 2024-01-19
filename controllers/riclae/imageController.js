const fs = require("fs");

// var serviceAccount = require("../../riclae-58b20-firebase-adminsdk-ooypv-ea360d877e.json");
const serviceAccount = {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
    "universe_domain": process.env.UNIVERSE_DOMAIN
};

var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.STORAGE_BUCKET
});

var bucket = admin.storage().bucket();

// add new painting
async function uploadImage(req, res) {
    if (!req.file) {
        console.log("No file");
        return;
    }
    const path = `./tmp/${req.file.originalname}`;
    fs.writeFileSync(path, req.file.buffer);
    const result = await bucket.upload(path);
    fs.unlinkSync(path);
    res.status(200).json({ status: "success", link: `https://storage.googleapis.com/riclae-58b20.appspot.com/${req.file.originalname}` });
}

module.exports = uploadImage;