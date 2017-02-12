'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin: 2.5px;\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  font-size: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'], ['\n  margin: 2.5px;\n  height: 24px;\n  width: 24px;\n  cursor: pointer;\n  font-size: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0.8);\n  color: black;\n'], ['\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0.8);\n  color: black;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  transform: scale(0.8);\n'], ['\n  transform: scale(0.8);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJs = require('draft-js');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = { showModal: false };
    return _this;
  }

  _createClass(_default, [{
    key: 'addEmoji',
    value: function addEmoji(emoji) {
      var _props = this.props,
          editorState = _props.editorState,
          onChange = _props.onChange;


      var selection = editorState.getSelection();
      var contentState = {};
      if (selection.isCollapsed()) {
        contentState = _draftJs.Modifier.insertText(editorState.getCurrentContent(), editorState.getSelection(), emoji, editorState.getCurrentInlineStyle());
      } else {
        contentState = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), emoji, editorState.getCurrentInlineStyle());
      }

      onChange(_draftJs.EditorState.push(editorState, contentState, 'insert-characters'));
      this.setState({ showModal: false });
    }
  }, {
    key: 'renderEmojiModal',
    value: function renderEmojiModal() {
      return _react2.default.createElement(_Picker2.default, { onEmojiSelected: this.addEmoji.bind(this) });
    }
  }, {
    key: 'onEmojiButtonClick',
    value: function onEmojiButtonClick(e) {
      e.preventDefault();
      this.setState({ showModal: true });
    }
  }, {
    key: 'onCloseButtonClick',
    value: function onCloseButtonClick(e) {
      e.preventDefault();
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var showModal = this.state.showModal;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          EmojiIcon,
          { onClick: this.onEmojiButtonClick.bind(this), height: '24', viewBox: '0 0 24 24', width: '24', className: 'ld-button-emoji' },
          _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'transparent' }),
          _react2.default.createElement('path', { d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z', fill: 'currentColor' })
        ),
        showModal ? this.renderEmojiModal() : undefined
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var Emoji = _styledComponents2.default.span(_templateObject);

var EmojiCloseIcon = _styledComponents2.default.span(_templateObject2);

var EmojiIcon = _styledComponents2.default.svg(_templateObject3);