const express = require('express');

const router = express.Router();

const profile = require('../controllers/profile');

// uptime robot check
router.get('/create', profile.createProfile);
router.get('/delete', profile.deleteProfile);
router.get('/update', profile.updateProfile);
router.get('/read', profile.readProfile);
router.get('/readPage', profile.readPage);
router.get('/totalNum', profile.totalNum);
//router.get('/portfolioUpload', profile.portfolioUpload);

router.post('/create', profile.createProfile);
router.post('/delete', profile.deleteProfile);
router.post('/update', profile.updateProfile);
router.post('/read', profile.readProfile);
router.post('/portfolioUpload', profile.portfolioUpload);

module.exports = router;