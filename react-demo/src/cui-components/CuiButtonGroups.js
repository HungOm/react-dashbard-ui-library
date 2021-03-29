import React, { Component } from 'react'
import { Button, ButtonGroup, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap'

class CuiButtonGroups extends Component {
  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Button groups</h3>

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          {/* Extra-large */}
          <ButtonGroup className="btn-group-xl">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>

          <br />

          {/* Large */}
          <ButtonGroup size="lg">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>

          <br />

          {/* Default */}
          <ButtonGroup>
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>

          <br />

          {/* Small */}
          <ButtonGroup className="btn-group-sm">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>

          <br />

          {/* Extra-small */}
          <ButtonGroup className="btn-group-xs">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>
        </div>

        <h4 className="ui-block-heading">Button toolbars</h4>

        <div className="cui-example">
          <ButtonToolbar>
            <ButtonGroup className="mr-2">
              <Button variant="secondary">&laquo;</Button>
              <Button variant="secondary">&lsaquo;</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2">
              <Button variant="secondary">Edit</Button>
              <Button variant="secondary">Undo</Button>
              <Button variant="secondary">Redo</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="secondary">&rsaquo;</Button>
              <Button variant="secondary">&raquo;</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>

        <h4 className="ui-block-heading">Nesting</h4>

        <div className="cui-example">
          <ButtonGroup>
            <Button variant="secondary">1</Button>
            <Button variant="secondary">2</Button>
            <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" alignRight={isRTL}>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <h4 className="ui-block-heading">Vertical</h4>

        <div className="cui-example">
          <ButtonGroup vertical>
            <Button variant="secondary">Button</Button>
            <Button variant="secondary">Button</Button>
            <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" alignRight={isRTL}>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
            </DropdownButton>
            <Button variant="secondary">Button</Button>
            <Button variant="secondary">Button</Button>
            <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" alignRight={isRTL}>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" alignRight={isRTL}>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" alignRight={isRTL}>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
              <Dropdown.Item>Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}

export default CuiButtonGroups
