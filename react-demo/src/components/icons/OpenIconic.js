import React, { Component } from 'react'
import { Card, InputGroup, FormControl } from 'react-bootstrap'
import './icons.scss'

const iconList = ['account-login', 'account-logout', 'action-redo', 'action-undo', 'align-center', 'align-left', 'align-right', 'aperture', 'arrow-bottom', 'arrow-circle-bottom', 'arrow-circle-left', 'arrow-circle-right', 'arrow-circle-top', 'arrow-left', 'arrow-right', 'arrow-thick-bottom', 'arrow-thick-left', 'arrow-thick-right', 'arrow-thick-top', 'arrow-top', 'audio-spectrum', 'audio', 'badge', 'ban', 'bar-chart', 'basket', 'battery-empty', 'battery-full', 'beaker', 'bell', 'bluetooth', 'bold', 'bolt', 'book', 'bookmark', 'box', 'briefcase', 'british-pound', 'browser', 'brush', 'bug', 'bullhorn', 'calculator', 'calendar', 'camera-slr', 'caret-bottom', 'caret-left', 'caret-right', 'caret-top', 'cart', 'chat', 'check', 'chevron-bottom', 'chevron-left', 'chevron-right', 'chevron-top', 'circle-check', 'circle-x', 'clipboard', 'clock', 'cloud-download', 'cloud-upload', 'cloud', 'cloudy', 'code', 'cog', 'collapse-down', 'collapse-left', 'collapse-right', 'collapse-up', 'command', 'comment-square', 'compass', 'contrast', 'copywriting', 'credit-card', 'crop', 'dashboard', 'data-transfer-download', 'data-transfer-upload', 'delete', 'dial', 'document', 'dollar', 'double-quote-sans-left', 'double-quote-sans-right', 'double-quote-serif-left', 'double-quote-serif-right', 'droplet', 'eject', 'elevator', 'ellipses', 'envelope-closed', 'envelope-open', 'euro', 'excerpt', 'expand-down', 'expand-left', 'expand-right', 'expand-up', 'external-link', 'eye', 'eyedropper', 'file', 'fire', 'flag', 'flash', 'folder', 'fork', 'fullscreen-enter', 'fullscreen-exit', 'globe', 'graph', 'grid-four-up', 'grid-three-up', 'grid-two-up', 'hard-drive', 'header', 'headphones', 'heart', 'home', 'image', 'inbox', 'infinity', 'info', 'italic', 'justify-center', 'justify-left', 'justify-right', 'key', 'laptop', 'layers', 'lightbulb', 'link-broken', 'link-intact', 'list-rich', 'list', 'location', 'lock-locked', 'lock-unlocked', 'loop-circular', 'loop-square', 'loop', 'magnifying-glass', 'map-marker', 'map', 'media-pause', 'media-play', 'media-record', 'media-skip-backward', 'media-skip-forward', 'media-step-backward', 'media-step-forward', 'media-stop', 'medical-cross', 'menu', 'microphone', 'minus', 'monitor', 'moon', 'move', 'musical-note', 'paperclip', 'pencil', 'people', 'person', 'phone', 'pie-chart', 'pin', 'play-circle', 'plus', 'power-standby', 'print', 'project', 'pulse', 'puzzle-piece', 'question-mark', 'rain', 'random', 'reload', 'resize-both', 'resize-height', 'resize-width', 'rss-alt', 'rss', 'script', 'share-boxed', 'share', 'shield', 'signal', 'signpost', 'sort-ascending', 'sort-descending', 'spreadsheet', 'star', 'sun', 'tablet', 'tag', 'tags', 'target', 'task', 'terminal', 'text', 'thumb-down', 'thumb-up', 'timer', 'transfer', 'trash', 'underline', 'vertical-align-bottom', 'vertical-align-center', 'vertical-align-top', 'video', 'volume-high', 'volume-low', 'volume-off', 'warning', 'wifi', 'wrench', 'x', 'yen', 'zoom-in', 'zoom-out']

class OpenIconic extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Open Iconic - Icons')

    this.search = this.search.bind(this)

    this.state = {
      icons: iconList.slice(0)
    }
  }

  getIconClass(icon) {
    return `.oi.oi-${icon}`
  }

  search(e) {
    const val = String(e.target.value).replace(/^\s+|\s+$/g, '')

    if (!val) {
      this.setState({
        icons: iconList.slice(0)
      })
      return
    }

    this.setState({
      icons: iconList.reduce((res, icon) => {
        if (icon.indexOf(val) !== -1) res.push(icon)
        return res
      }, [])
    })
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Icons /</span> Open Iconic
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <div className="py-2 my-4 mx-auto" style={{ maxWidth: '300px' }}>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text><i className="ion ion-ios-search"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Search..." onInput={this.search} />
          </InputGroup>
        </div>

        <div className="text-center">
          {this.state.icons.map(icon => (
            <Card
              key={icon}
              data-title={this.getIconClass(icon)}
              className="icon-example icon-example-oi d-inline-flex justify-content-center align-items-center my-2 mx-2">
              <i className={`d-block oi oi-${icon}`}></i>
            </Card>
          ))}
        </div>

      </div>
    )
  }
}

export default OpenIconic
