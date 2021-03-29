import React, { Component } from 'react'

import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from 'react-contextmenu'
import '../vendor/libs/react-contextmenu/react-contextmenu.scss'

class CuiReactContextmenu extends Component {
  constructor (props) {
    super(props)

    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick (e, data) {
    alert(`Clicked on item "${data.itemNo}"`)
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-contextmenu</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/vkbansal/react-contextmenu" className="ui-block-description">https://github.com/vkbansal/react-contextmenu</a>

        <div className="no-ie10" data-name="react-contextmenu"></div>

        {!isIE10Mode && <React.Fragment>
          <h4 className="ui-block-heading">Examples</h4>

          <div className="cui-example">
            <ContextMenuTrigger id="some_unique_identifier">
              <div className="border border-light bg-white d-flex justify-content-center align-items-center" style={{height: '400px'}}>
                <div>Right click to see the menu</div>
              </div>
            </ContextMenuTrigger>

            <ContextMenu id="some_unique_identifier">
              <MenuItem data={{itemNo: '1'}} onClick={this.handleMenuClick}>
                Menu Item 1
              </MenuItem>
              <SubMenu title='Submenu'>
                <MenuItem data={{itemNo: '2.1'}} onClick={this.handleMenuClick}>
                  Menu Item 2.1
                </MenuItem>
                <MenuItem disabled data={{itemNo: '2.2'}} onClick={this.handleMenuClick}>
                  Menu Item 2.2
                </MenuItem>
                <MenuItem data={{itemNo: '2.3'}} onClick={this.handleMenuClick}>
                  Menu Item 2.3
                </MenuItem>
              </SubMenu>
              <MenuItem divider />
              <MenuItem data={{itemNo: '3'}} onClick={this.handleMenuClick}>
                Menu Item 3
              </MenuItem>
            </ContextMenu>
          </div>
        </React.Fragment>}
      </div>
    )
  }
}

export default CuiReactContextmenu
