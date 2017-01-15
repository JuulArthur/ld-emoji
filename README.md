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
