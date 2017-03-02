'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EmojiButton = require('./EmojiButton');

var _EmojiButton2 = _interopRequireDefault(_EmojiButton);

var _EmojiAutocomplete = require('./Autocomplete/EmojiAutocomplete');

var _EmojiAutocomplete2 = _interopRequireDefault(_EmojiAutocomplete);

var _EmojiModal = require('./EmojiModal');

var _EmojiModal2 = _interopRequireDefault(_EmojiModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'emoji',
  button: _EmojiButton2.default,
  autocomplete: _EmojiAutocomplete2.default,
  modal: _EmojiModal2.default
}; /*
    * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
    *
    * License: MIT
    */