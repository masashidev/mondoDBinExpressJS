const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema(
  {
    sentence: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      required: true,
    },

    functionality: {
      type: String,
      required: false,
    },

    learningCount: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
