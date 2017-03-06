# ld-emoji
Emoji plugin for [last-draft](http://lastdraft.vace.nz)

[![npm version](https://badge.fury.io/js/ld-emoji.svg)](https://badge.fury.io/js/ld-emoji)

# Install
```jsx
npm install ld-emoji --save
```

# Use
```jsx
import {Editor} from 'last-draft'
import emoji from 'ld-emoji'
let plugins = [emoji]

export default class ExampleEditor extends Component {
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromHtml('<div></div>')
    this.state = { value: INITIAL_STATE }
  }

  onChange(editorState) {
    this.setState({ value: editorState })
  }

  render() {
    return (
      <Editor
        inline={['bold', 'italic', 'code', 'dropcap']}
        blocks={['h2', 'quote']}
        plugins={plugins}
        editorState={this.state.value}
        onChange={::this.onChange} />
    )
  }
}
```

## Styles

Last Draft plugins use styled-components 💅 for the base styling.

## Custom Styles with CSS

You can also add custom css to override the base styling with the following class names specified below:

```css
.emoji-modal-wrapper {}
.emoji-button {}
.ld-emoji-wrapper {}
.ld-emoji {}
.ld-emoji-list {}
.ld-emoji-autocomplete {}
.ld-emoji-menu {}
.ld-emoji-menu-list {}
.ld-emoji-item {}
.ld-emoji-character {}
.ld-emoji-picker-wrapper-outer {}
.ld-emoji-picker-wrapper {}
.ld-emoji-picker-item {}
.ld-emoji-button-close-wrapper {}
.ld-emoji-button-close {}
.emoji-picker-tabs {}
.emoji-picker-tab-title {}
```
