
const Language = require('../models/language.model');

const getLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createLanguage = async (req, res) => {
  try {
    console.log(req.body);
    const language = await Language.create(req.body);
    res.status(200).json(language);
  } catch (error) {
    res.status(500).json({ message: error.message, sentData: req.body });
  }
}

const getLanguage = async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    res.status(200).json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateLanguage = async (req, res) => {
  try{
    const language = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!language) {
      res.status(404).json({ message: 'Not found' });
      return;
    }
    res.status(200).json(language);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteLanguage = async (req, res) => {
  try {
    const language = await Language.findByIdAndDelete(req.params.id);

    if (!language) {
      res.status(404).json({ message: 'Not found' });
      return;
    }
    res.status(200).json({ message: 'Deleted', language });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = { getLanguages, createLanguage, getLanguage, updateLanguage, deleteLanguage };
