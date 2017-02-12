/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Modifier, EditorState } from 'draft-js'
import styled from 'styled-components'
import Picker from './Picker'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = { showModal: false }
  }

  addEmoji (emoji) {
    const { editorState, onChange } = this.props

    const selection = editorState.getSelection()
    let contentState = {}
    if (selection.isCollapsed()) {
      contentState = Modifier.insertText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        emoji,
        editorState.getCurrentInlineStyle(),
      )
    } else {
      contentState = Modifier.replaceText(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        emoji,
        editorState.getCurrentInlineStyle(),
      )
    }

    onChange(EditorState.push(editorState, contentState, 'insert-characters'))
    this.setState({ showModal: false })
  }

  renderEmojiModal() {
    return (
      <Picker onEmojiSelected={::this.addEmoji} toggleColorPick={::this.toggleColorPick} />
    )
  }

  onEmojiButtonClick (e) {
    e.preventDefault()
    this.setState({ showModal: true })
  }


  toggleColorPick (e) {
    this.setState({ showModal: !this.state.showModal })
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

const EmojiIcon = styled.svg`
  transform: scale(0.8);
`
