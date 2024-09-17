const express = require('express');
const router = express.Router();
const Language = require('../models/language.model');
const { createLanguage, getLanguages, getLanguage, updateLanguage, deleteLanguage } = require('../controllers/language.controller');

router.get('/', getLanguages);
router.post('/', createLanguage);
router.get('/:id', getLanguage);
router.post('/:id', updateLanguage);
router.delete('/:id', deleteLanguage);

module.exports = router;
