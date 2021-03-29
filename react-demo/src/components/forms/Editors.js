import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import '../../vendor/libs/react-mde/react-mde.scss'
import loadable from '@loadable/component'
import '../../vendor/libs/react-quill/typography.scss'
import '../../vendor/libs/react-quill/editor.scss'

// Catch error in IE10
const ReactQuill = loadable(() => new Promise(resolve =>
  import('react-quill').then(Component => resolve(Component)).catch(() => resolve(<div />))
))

// react-mde
//

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
})

//

class Editors extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Editors - Forms')

    this.state = {
      // react-mde state
      //

      value: '**Hello world!!!**',
      selectedTab: 'write',

      // react-quill state
      //

      text: '',
      bubbleText: ''
    }

    // react-quill bindings
    //

    this.handleChange = this.handleChange.bind(this)
    this.handleBubbleChange = this.handleBubbleChange.bind(this)
  }

  // react-quill methods
  //

  handleChange(text) {
    this.setState({ text })
  }

  handleBubbleChange(bubbleText) {
    this.setState({ bubbleText })
  }

  //

  render() {
    // react-quill settings
    //

    const isIE10Mode = document['documentMode'] === 10
    const modules = {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }, { 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }
    const bubbleModules = {
      toolbar: [
        ['bold', 'italic', 'underline'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }

    //

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Editors
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">Vue Simplemde</Card.Header>
          <Card.Body>
            <ReactMde className="with-tooltips"
              value={this.state.value}
              onChange={value => this.setState({ value })}
              selectedTab={this.state.selectedTab}
              onTabChange={selectedTab => this.setState({ selectedTab })}
              generateMarkdownPreview={async markdown => {
                let html = await converter.makeHtml(markdown)
                // Make the html output bootstrap-compatible
                html = html.replace(/<(blockquote|table)>/g, '<$1 className="$1">')
                return html
              }}
            />
          </Card.Body>
        </Card>

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-quill</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && (
          <Card className="mb-4">
            <Card.Header as="h6">react-quill</Card.Header>
            <Card.Body>
              <ReactQuill modules={modules}
                value={this.state.text}
                onChange={this.handleChange} />
              <br />
              <pre><strong>Content:</strong><br />{this.state.text}</pre>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Bubble</div>

              <ReactQuill modules={bubbleModules}
                theme="bubble"
                value={this.state.bubbleText}
                onChange={this.handleBubbleChange} />
              <br />
              <pre><strong>Content:</strong><br />{this.state.bubbleText}</pre>
            </Card.Body>
          </Card>
        )}

      </div>
    )
  }
}

export default Editors
