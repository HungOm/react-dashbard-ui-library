import React, { Component } from 'react'
import { DropdownButton, Dropdown, Badge } from 'react-bootstrap'
import HoverDropdown from '../vendor/libs/hover-dropdown'

class CuiDropdowns extends Component {
  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Dropdowns</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example clearfix">
          <div className="dropdown-menu float-left" style={{display: 'block', position: 'static'}}>
            <Dropdown.Item><Badge variant="success" className="float-right">34</Badge>Action</Dropdown.Item>
            <Dropdown.Item><Badge pill variant="primary" className="float-right">16</Badge>Another action</Dropdown.Item>
            <Dropdown.Item disabled>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Dropdown header</Dropdown.Header>
            <Dropdown.Item active="true"><i className="ion ion-md-cloud"></i> &nbsp;With icon</Dropdown.Item>
            <Dropdown.Item>Last action</Dropdown.Item>
          </div>
        </div>

        <h4 className="ui-block-heading">Hover dropdowns</h4>

        <div className="cui-example clearfix">
          <HoverDropdown as={DropdownButton} variant="primary" title="Hover" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </HoverDropdown>
        </div>

        <h4 className="ui-block-heading">Nested</h4>

        <div className="cui-example">
          <DropdownButton variant="default" title="Nested dropdowns" alignRight={isRTL}>
            <Dropdown.Item>First action</Dropdown.Item>

            <div className="dropdown-toggle">
              <Dropdown.Item>First menu</Dropdown.Item>
              <div className="dropdown-menu">
                <Dropdown.Item>First action</Dropdown.Item>
                <Dropdown.Item>Second action</Dropdown.Item>

                <div className="dropdown-toggle">
                  <Dropdown.Item>First menu</Dropdown.Item>
                  <div className="dropdown-menu">
                    <Dropdown.Item>First action</Dropdown.Item>
                    <Dropdown.Item>Second action</Dropdown.Item>
                  </div>
                </div>
              </div>
            </div>

            <Dropdown.Item>Second action</Dropdown.Item>

            <div className="dropdown-toggle">
              <Dropdown.Item>Second menu</Dropdown.Item>
              <div className="dropdown-menu">
                <Dropdown.Item>First action</Dropdown.Item>
                <Dropdown.Item>Second action</Dropdown.Item>
              </div>
            </div>
          </DropdownButton>
        </div>
      </div>
    )
  }
}

export default CuiDropdowns
