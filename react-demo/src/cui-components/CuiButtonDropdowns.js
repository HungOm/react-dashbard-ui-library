import React, { Component } from 'react'
import { DropdownButton, SplitButton, Dropdown } from 'react-bootstrap'

class CuiButtonDropdowns extends Component {
  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Button dropdowns</h3>

        <h4 className="ui-block-heading">Variations</h4>

        <div className="cui-example cui-example-inline-spacing">
          <DropdownButton variant="default" title="Default" className="d-inline-block" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="primary" title="Primary" className="d-inline-block" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="secondary" title="Secondary" className="d-inline-block" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="success" title="Success" className="d-inline-block" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="info" title="Info" className="d-inline-block" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="warning" title="Warning" className="d-inline-block" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="danger" title="Danger" className="d-inline-block" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="dark" title="Dark" className="d-inline-block" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 
        </div>

        <h4 className="ui-block-heading">Hidden arrow</h4>

        <div className="cui-example cui-example-inline-spacing">
          <DropdownButton variant="primary" title="Primary" className="dropdown-toggle-hide-arrow" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 
        </div>

        <h4 className="ui-block-heading">Split</h4>

        <div className="cui-example cui-example-inline-spacing">
          <SplitButton variant="default" title="Default" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton> 

          <SplitButton variant="primary" title="Primary" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton> 

          <SplitButton variant="secondary" title="Secondary" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton> 

          <SplitButton variant="success" title="Success" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton> 

          <SplitButton variant="info" title="Info" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton> 

          <SplitButton variant="warning" title="Warning" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton> 

          <SplitButton variant="danger" title="Danger" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton> 

          <SplitButton variant="dark" title="Dark" alignRight={isRTL}>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </SplitButton> 
        </div>

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <DropdownButton variant="default" title="Extra large button" alignRight={isRTL} size="xl">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="default" title="Large button" alignRight={isRTL} size="lg">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="default" title="Small button" alignRight={isRTL} size="sm">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 

          <DropdownButton variant="default" title="Extra small button" alignRight={isRTL} size="xs">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item>
          </DropdownButton> 
        </div>
      </div>
    )
  }
}

export default CuiButtonDropdowns
