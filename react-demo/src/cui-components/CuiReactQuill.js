import React, { Component } from 'react'

import loadable from '@loadable/component'
import '../vendor/libs/react-quill/typography.scss'
import '../vendor/libs/react-quill/editor.scss'

// Catch error in IE10
const ReactQuill = loadable(() => new Promise(resolve =>
  import('react-quill').then(Component => resolve(Component)).catch(() => resolve(<div />))
))

class CuiReactQuill extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleBubbleChange = this.handleBubbleChange.bind(this)

    this.state = {
      text: '',
      bubbleText: ''
    }
  }

  handleChange(text) {
    this.setState({ text })
  }

  handleBubbleChange(bubbleText) {
    this.setState({ bubbleText })
  }

  render() {
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

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-quill</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/zenoamaro/react-quill" className="ui-block-description">https://github.com/zenoamaro/react-quill</a>

        <div className="no-ie10" data-name="react-quill"></div>

        <div className="alert alert-warning mt-4">
          Don't forget to sanitize HTML output on the server side to avoid XSS vulnerability.
        </div>

        <div className="alert alert-info mt-4">
          Quill uses <code>.ql-*</code> classes for formatting. To display content
          properly you need to include <code>vendor/libs/react-quill/typography.scss</code> file
          and place Quill-generated content within <code>.ql-content</code> element.
        </div>

        {isIE10Mode ? '' : (<h4 className="ui-block-heading">Examples</h4>)}

        {isIE10Mode ? '' : (
          <div className="cui-example cui-example-vertical-spacing">
            <ReactQuill modules={modules}
              value={this.state.text}
              onChange={this.handleChange} />
            <pre><strong>Content:</strong><br/>{this.state.text}</pre>

            <ReactQuill modules={bubbleModules}
              theme="bubble"
              value={this.state.bubbleText}
              onChange={this.handleBubbleChange} />
            <pre><strong>Content:</strong><br/>{this.state.bubbleText}</pre>
          </div>
        )}
      </div>
    )
  }
}

export default CuiReactQuill
