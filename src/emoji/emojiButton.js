/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Modifier, EditorState } from 'draft-js'
import styled from 'styled-components'

const EMOJIS = ['😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌',
  '🤓', '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈', '🙉', '🙊',
  '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
  '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕', '👇',
  '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶',
  '🐇', '🐥', '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
  '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈', '🎉',
  '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷',
  '💰', '🖊', '📅', '✅', '❎', '💯']

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = { showModal: false }
  }

  addEmoji (e) {
    const { editorState, onChange, uploadImageCallBack } = this.props

    const contentState = Modifier.insertText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      `${e.target.innerHTML}`,
      editorState.getCurrentInlineStyle(),
    )
    onChange(EditorState.push(editorState, contentState, 'insert-characters'))
    this.setState({ showModal: false })
  }

  renderEmojiModal() {
    return (
      <EmojiModal onClick={this.stopPropagation} className='ld-emoji-modal'>
        <EmojiCloseIcon onClick={::this.onCloseButtonClick} className='ld-emoji-close-icon'>
          <svg width='24' height='24' viewBox='0 0 24 24' className='ld-button-close'>
            <g fill='currentColor' fillRule='evenodd'>
              <path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' />
              <path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' />
            </g>
          </svg>
        </EmojiCloseIcon>
        {
          EMOJIS.map((emoji, index) => (
            <Emoji
              className='ld-emoji'
              key={index}
              role="presentation"
              onClick={::this.addEmoji}
            >{emoji}</Emoji>))
        }
      </EmojiModal>
    )
  }

  onEmojiButtonClick (e) {
    e.preventDefault()
    this.setState({ showModal: true })
  }

  onCloseButtonClick (e) {
    e.preventDefault()
    this.setState({ showModal: false })
  }

  render () {
    const { showModal } = this.state

    return (
      <div>
        <EmojiIcon onClick={::this.onEmojiButtonClick} height='24' viewBox='0 0 24 24' width='24' className='ld-button-emoji'>
          <path d='M0 0h24v24H0z' fill='transparent' />
          <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'  fill='currentColor' />
        </EmojiIcon>

        {showModal ? this.renderEmojiModal() : undefined}
      </div>
    )
  }
}

const EmojiModal = styled.div`
  position: absolute;
  left: 2.5rem;
  margin-top: -2.4rem;
  display: flex;
  flex-wrap: wrap;
  width: 330px;
  border: 1px solid #F1F1F1;
  padding: 15px;
  border-radius: 2px;
  z-index: 100;
  background: white;
  box-shadow: 3px 3px 5px #BFBDBD;
`

const Emoji = styled.span`
  margin: 2.5px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EmojiCloseIcon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(0.8);
`

const EmojiIcon = styled.svg`
  transform: scale(0.8);
`
