import React, { Component } from 'react'
import { Card, InputGroup, FormControl } from 'react-bootstrap'
import './icons.scss'

const iconList = ['album', 'arc', 'back-2', 'bandaid', 'car', 'diamond', 'door-lock', 'eyedropper', 'female', 'gym', 'hammer', 'headphones', 'helm', 'hourglass', 'leaf', 'magic-wand', 'male', 'map-2', 'next-2', 'paint-bucket', 'pendrive', 'photo', 'piggy', 'plugin', 'refresh-2', 'rocket', 'settings', 'shield', 'smile', 'usb', 'vector', 'wine', 'cloud-upload', 'cash', 'close', 'bluetooth', 'cloud-download', 'way', 'close-circle', 'id', 'angle-up', 'wristwatch', 'angle-up-circle', 'world', 'angle-right', 'volume', 'angle-right-circle', 'users', 'angle-left', 'user-female', 'angle-left-circle', 'up-arrow', 'angle-down', 'switch', 'angle-down-circle', 'scissors', 'wallet', 'safe', 'volume2', 'volume1', 'voicemail', 'video', 'user', 'upload', 'unlock', 'umbrella', 'trash', 'tools', 'timer', 'ticket', 'target', 'sun', 'study', 'stopwatch', 'star', 'speaker', 'signal', 'shuffle', 'shopbag', 'share', 'server', 'search', 'film', 'science', 'disk', 'ribbon', 'repeat', 'refresh', 'add-user', 'refresh-cloud', 'paperclip', 'radio', 'note2', 'print', 'network', 'prev', 'mute', 'power', 'medal', 'portfolio', 'like2', 'plus', 'left-arrow', 'play', 'key', 'plane', 'joy', 'photo-gallery', 'pin', 'phone', 'plug', 'pen', 'right-arrow', 'paper-plane', 'delete-user', 'paint', 'bottom-arrow', 'notebook', 'note', 'next', 'news-paper', 'musiclist', 'music', 'mouse', 'more', 'moon', 'monitor', 'micro', 'menu', 'map', 'map-marker', 'mail', 'mail-open', 'mail-open-file', 'magnet', 'loop', 'look', 'lock', 'lintern', 'link', 'like', 'light', 'less', 'keypad', 'junk', 'info', 'home', 'help2', 'help1', 'graph3', 'graph2', 'graph1', 'graph', 'global', 'gleam', 'glasses', 'gift', 'folder', 'flag', 'filter', 'file', 'expand1', 'exapnd2', 'edit', 'drop', 'drawer', 'download', 'display2', 'display1', 'diskette', 'date', 'cup', 'culture', 'crop', 'credit', 'copy-file', 'config', 'compass', 'comment', 'coffee', 'cloud', 'clock', 'check', 'chat', 'cart', 'camera', 'call', 'calculator', 'browser', 'box2', 'box1', 'bookmarks', 'bicycle', 'bell', 'battery', 'ball', 'back', 'attention', 'anchor', 'albums', 'alarm', 'airplay']

class StrokeIcons7 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Stroke Icons 7 - Icons')

    this.search = this.search.bind(this)

    this.state = {
      icons: iconList.slice(0)
    }
  }

  getIconClass(icon) {
    return `.pe-7s-${icon}`
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
          <span className="text-muted font-weight-light">Icons /</span> Stroke Icons 7
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
              className="icon-example icon-example-pe-7s d-inline-flex justify-content-center align-items-center my-2 mx-2">
              <i className={`d-block pe-7s-${icon}`}></i>
            </Card>
          ))}
        </div>

      </div>
    )
  }
}

export default StrokeIcons7
