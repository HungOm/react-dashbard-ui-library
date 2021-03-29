import React, { Component } from 'react'

import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import '../vendor/libs/react-mde/react-mde.scss'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
})


class CuiReactMde extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '**Hello world!!!**',
      selectedTab: 'write'
    }
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-mde</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/andrerpena/react-mde" className="ui-block-description">https://github.com/andrerpena/react-mde</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <ReactMde className="with-tooltips"
            value={this.state.value}
            onChange={value => this.setState({value})}
            selectedTab={this.state.selectedTab}
            onTabChange={selectedTab => this.setState({selectedTab})}
            generateMarkdownPreview={async markdown => {
              let html = await converter.makeHtml(markdown)
              // Make the html output bootstrap-compatible
              html = html.replace(/<(blockquote|table)>/g, '<$1 class="$1">')
              return html
            }}
          />

        </div>
      </div>
    )
  }
}

export default CuiReactMde
