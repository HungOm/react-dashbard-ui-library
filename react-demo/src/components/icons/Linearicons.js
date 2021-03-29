import React, { Component } from 'react'
import { Card, InputGroup, FormControl } from 'react-bootstrap'
import './icons.scss'

const iconList = ['home', 'apartment', 'pencil', 'magic-wand', 'drop', 'lighter', 'poop', 'sun', 'moon', 'cloud', 'cloud-upload', 'cloud-download', 'cloud-sync', 'cloud-check', 'database', 'lock', 'cog', 'trash', 'dice', 'heart', 'star', 'star-half', 'star-empty', 'flag', 'envelope', 'paperclip', 'inbox', 'eye', 'printer', 'file-empty', 'file-add', 'enter', 'exit', 'graduation-hat', 'license', 'music-note', 'film-play', 'camera-video', 'camera', 'picture', 'book', 'bookmark', 'user', 'users', 'shirt', 'store', 'cart', 'tag', 'phone-handset', 'phone', 'pushpin', 'map-marker', 'map', 'location', 'calendar-full', 'keyboard', 'spell-check', 'screen', 'smartphone', 'tablet', 'laptop', 'laptop-phone', 'power-switch', 'bubble', 'heart-pulse', 'construction', 'pie-chart', 'chart-bars', 'gift', 'diamond', 'linearicons', 'dinner', 'coffee-cup', 'leaf', 'paw', 'rocket', 'briefcase', 'bus', 'car', 'train', 'bicycle', 'wheelchair', 'select', 'earth', 'smile', 'sad', 'neutral', 'mustache', 'alarm', 'bullhorn', 'volume-high', 'volume-medium', 'volume-low', 'volume', 'mic', 'hourglass', 'undo', 'redo', 'sync', 'history', 'clock', 'download', 'upload', 'enter-down', 'exit-up', 'bug', 'code', 'link', 'unlink', 'thumbs-up', 'thumbs-down', 'magnifier', 'cross', 'menu', 'list', 'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'move', 'warning', 'question-circle', 'menu-circle', 'checkmark-circle', 'cross-circle', 'plus-circle', 'circle-minus', 'arrow-up-circle', 'arrow-down-circle', 'arrow-left-circle', 'arrow-right-circle', 'chevron-up-circle', 'chevron-down-circle', 'chevron-left-circle', 'chevron-right-circle', 'crop', 'frame-expand', 'frame-contract', 'layers', 'funnel', 'text-format', 'text-format-remove', 'text-size', 'bold', 'italic', 'underline', 'strikethrough', 'highlight', 'text-align-left', 'text-align-center', 'text-align-right', 'text-align-justify', 'line-spacing', 'indent-increase', 'indent-decrease', 'pilcrow', 'direction-ltr', 'direction-rtl', 'page-break', 'sort-alpha-asc', 'sort-amount-asc', 'hand', 'pointer-up', 'pointer-right', 'pointer-down', 'pointer-left']

class Linearicons extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Linearicons - Icons')

    this.search = this.search.bind(this)

    this.state = {
      icons: iconList.slice(0)
    }
  }

  getIconClass(icon) {
    return `.lnr.lnr-${icon}`
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
          <span className="text-muted font-weight-light">Icons /</span> Linearicons
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
              className="icon-example icon-example-lnr d-inline-flex justify-content-center align-items-center my-2 mx-2">
              <i className={`d-block lnr lnr-${icon}`}></i>
            </Card>
          ))}
        </div>

      </div>
    )
  }
}

export default Linearicons
