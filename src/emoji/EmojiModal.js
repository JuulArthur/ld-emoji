import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Picker from './Picker'
import { Modifier, EditorState } from 'draft-js'

export default class extends Component {
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
    this.props.closeModal()
  }

  render () {
    return (
      <Wrapper className='emoji-modal-wrapper'>
        <Picker onSelected={::this.addEmoji} closeModal={this.props.closeModal} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  background-color: inherit;
  width: 360px;
`
