import React, { Component } from 'react'
import { Button, DropdownButton, Dropdown, ButtonGroup, Form, Breadcrumb } from 'react-bootstrap'
import '../../vendor/styles/pages/file-manager.scss'

class FileManager extends Component {
  constructor(props) {
    super(props)
    props.setTitle('File Manager - Pages')

    this.state = {
      path: [
        { text: 'home', href: '#' },
        { text: 'projects', href: '#' },
        { text: 'site', active: true }
      ],
      viewMode: 'col',
      selected: [],

      // Handle focused items
      focused: null,
      dropdownOpened: null,

      list: [
        { type: 'dir', name: 'Images', changed: '02/13/2018' },
        { type: 'dir', name: 'Scripts', changed: '02/14/2018' },
        { type: 'dir', name: 'Utils', changed: '02/15/2018' },
        { type: 'file', name: 'Archive.zip', changed: '02/16/2018' },
        { type: 'file', name: 'Build.js', changed: '02/17/2018' },
        { type: 'file', name: 'Checklist.doc', changed: '02/18/2018' },
        { type: 'file', name: 'Index.html', changed: '02/19/2018' },
        { type: 'file', name: 'Image-1.jpg', changed: '02/20/2018', path: 'img/bg/5.jpg' },
        { type: 'file', name: 'Image-2.png', changed: '02/21/2018', path: 'img/bg/6.jpg' },
        { type: 'file', name: 'Image-3.gif', changed: '02/22/2018', path: 'img/bg/7.jpg' },
        { type: 'file', name: 'Main.js', changed: '02/23/2018' },
        { type: 'file', name: 'MAKEFILE', changed: '02/24/2018' },
        { type: 'file', name: 'Presentation.pdf', changed: '02/25/2018' },
        { type: 'file', name: 'README.txt', changed: '02/26/2018' },
        { type: 'file', name: 'Style.css', changed: '02/27/2018' },
        { type: 'file', name: 'Test.mp3', changed: '02/28/2018' },
        { type: 'file', name: 'Tutorial.avi', changed: '03/01/2018' }
      ],

      // Icons
      icons: {
        folder: 'far fa-folder',
        archive: 'far fa-file-archive',
        audio: 'far fa-file-audio',
        video: 'far fa-file-video',
        js: 'fab fa-js',
        doc: 'far fa-file-word',
        html: 'fab fa-html5',
        pdf: 'far fa-file-pdf',
        txt: 'far fa-file-alt',
        css: 'fab fa-css3',
        unknown: 'far fa-file'
      }
    }
  }

  setViewMode(viewMode) {
    this.setState({ viewMode })
  }

  isFolder (file) {
    return file.type === 'dir'
  }

  isImage (file) {
    return file.type === 'file' && /\.jpg$|\.png$|\.gif$/i.test(file.name)
  }

  isFile (file) {
    return file.type === 'file' && !/\.jpg$|\.png$|\.gif$/i.test(file.name)
  }

  fileIcon (file) {
    let icon = this.state.icons.unknown

    if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) icon = this.state.icons.archive
    if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) icon = this.state.icons.audio
    if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) icon = this.state.icons.video
    if (/\.js$|\.es6$|\.ts$/i.test(file.name)) icon = this.state.icons.js
    if (/\.doc$|\.docx$/i.test(file.name)) icon = this.state.icons.doc
    if (/\.htm$|\.html$/i.test(file.name)) icon = this.state.icons.html
    if (/\.pdf$/i.test(file.name)) icon = this.state.icons.pdf
    if (/\.txt$/i.test(file.name)) icon = this.state.icons.txt
    if (/\.css$/i.test(file.name)) icon = this.state.icons.css

    return icon
  }

  toggleSelect (e, item) {
    const selected = [...this.state.selected]
    if (e.target.checked) {
      selected.push(item)
    } else {
      selected.splice(selected.indexOf(item), 1)
    }
    this.setState({ selected })
  }

  // Handle focused items
  focusIn (focused) {
    this.setState({ focused })
  }

  focusOut () {
    this.setState({ focused: null })
  }

  dropdownShown (dropdownOpened) {
    this.setState({ dropdownOpened })
  }

  dropdownHidden () {
    this.setState({ dropdownOpened: null })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>

        <div className="container-m-nx container-m-ny bg-lightest mb-3">

          <Breadcrumb className="m-0" listProps={{ className: 'text-big container-p-x py-3 m-0' }}>
            {this.state.path.map((item, i) =>
              <Breadcrumb.Item active={(this.state.path.length - 1) === i} key={item.text}>{item.text}</Breadcrumb.Item>
            )}
          </Breadcrumb>

          <hr className="m-0" />

          <div className="file-manager-actions container-p-x py-2">
            <div>
              <Button variant="primary" className="mr-2"><i className="ion ion-md-cloud-upload"></i>&nbsp; Upload</Button>
              <Button variant="secondary icon-btn" className="mr-2" disabled={!this.state.selected.length}><i className="ion ion-md-cloud-download"></i></Button>
              <DropdownButton title={<i className="ion ion-ios-settings"></i>} className="mr-2" variant="default md-btn-flat px-2" alignRight={isRTL}>
                <Dropdown.Item disabled={!this.state.selected.length}>Move</Dropdown.Item>
                <Dropdown.Item disabled={!this.state.selected.length}>Copy</Dropdown.Item>
                <Dropdown.Item disabled={!this.state.selected.length}>Remove</Dropdown.Item>
              </DropdownButton>
            </div>
            <div>
              <ButtonGroup>
                <Button variant="default icon-btn md-btn-flat" active={this.state.viewMode === 'col'} onClick={() => this.setViewMode('col')}><i className="ion ion-md-apps"></i></Button>
                <Button variant="default icon-btn md-btn-flat" active={this.state.viewMode === 'row'} onClick={() => this.setViewMode('row')}><i className="ion ion-md-menu"></i></Button>
              </ButtonGroup>
            </div>
          </div>

          <hr className="m-0" />
        </div>

        <div className={`file-manager-container file-manager-${this.state.viewMode}-view`}>

          {/* Header */}
          <div className="file-manager-row-header">
            <div className="file-item-name pb-2">Filename</div>
            <div className="file-item-changed pb-2">Changed</div>
          </div>
          {/* / Header */}

          {/* To upper lavel */}
          <div className="file-item">
            <div className="file-item-icon file-item-level-up fas fa-level-up-alt text-secondary"></div>
            <a href="#d" onClick={this.prevent} className="file-item-name">..</a>
          </div>
          {/* / To upper lavel */}

          {/* Files */}
          {this.state.list.map((item, i) =>

            <div
              key={item.name}
              className={`file-item ${this.state.selected.includes(item) ? 'selected border-primary' : ''} ${this.state.focused === item || this.state.dropdownOpened === item ? 'focused' : ''}`}
              onFocus={() => this.focusIn(item)}
              onBlur={() => this.focusOut()}
            >
              <div className="file-item-select-bg bg-primary"></div>
              <Form.Check type="checkbox" custom className="px-2 m-0 file-item-checkbox" id={`file-${i}-select`}
                checked={this.state.selected.includes(item)}
                onChange={e => this.toggleSelect(e, item)}
                label="" />

              {this.isFolder(item) && <div className={`file-item-icon text-secondary ${this.state.icons.folder}`} />}
              {this.isImage(item) && <div className="file-item-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${item.path})` }} />}
              {this.isFile(item) && <div className={`file-item-icon text-secondary ${this.fileIcon(item)}`} />}

              <a href="#d" onClick={this.prevent} className="file-item-name">
                {item.name}
              </a>
              <div className="file-item-changed">{item.changed}</div>
              <div className="file-item-actions">
                <DropdownButton title={<i className="ion ion-ios-more" />} variant="default rounded-pill icon-btn borderless md-btn-flat hide-arrow" size="sm" alignRight={!isRTL} onToggle={shown => shown ? this.dropdownShown(item) : this.dropdownHidden()}>
                  <Dropdown.Item>Rename</Dropdown.Item>
                  <Dropdown.Item>Move</Dropdown.Item>
                  <Dropdown.Item>Copy</Dropdown.Item>
                  <Dropdown.Item>Remove</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>

          )}
          {/* / Files */}
        </div>

      </div>
    )
  }
}

export default FileManager
