import React, { Component } from 'react'
import { OverlayTrigger, Button, Tooltip, Popover } from 'react-bootstrap'

class CuiTooltipsAndPopovers extends Component {
  render() {
    return (
      <div>
        <div className="ui-block">
          <h3 className="ui-block-heading">Tooltips</h3>

          <h4 className="ui-block-heading">Position</h4>

          <div className="cui-example cui-example-inline-spacing">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Tooltip on top</Tooltip>}>
              <Button variant="default">Tooltip on top</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Tooltip on right</Tooltip>}>
              <Button variant="default">Tooltip on right</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={<Tooltip>Tooltip on left</Tooltip>}>
              <Button variant="default">Tooltip on left</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Tooltip on bottom</Tooltip>}>
              <Button variant="default">Tooltip on bottom</Button>
            </OverlayTrigger>
          </div>

          <h4 className="ui-block-heading">Variations</h4>

          <div className="cui-example cui-example-inline-spacing">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip className="tooltip-primary">Primary tooltip</Tooltip>}>
              <Button variant="default">Primary</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip className="tooltip-secondary">Secondary tooltip</Tooltip>}>
              <Button variant="default">Secondary</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="right"
              overlay={<Tooltip className="tooltip-success">Success tooltip</Tooltip>}>
              <Button variant="default">Success</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={<Tooltip className="tooltip-info">Info tooltip</Tooltip>}>
              <Button variant="default">Info</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip className="tooltip-warning">Warning tooltip</Tooltip>}>
              <Button variant="default">Warning</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={<Tooltip className="tooltip-danger">Danger tooltip</Tooltip>}>
              <Button variant="default">Danger</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip className="tooltip-dark">Dark tooltip</Tooltip>}>
              <Button variant="default">Dark</Button>
            </OverlayTrigger>
          </div>
        </div>

        <div className="ui-block">
          <h3 className="ui-block-heading">Popovers</h3>

          <h4 className="ui-block-heading">Position</h4>

          <div className="cui-example cui-example-inline-spacing">

            <OverlayTrigger
              placement="right"
              overlay={<Popover>
                <Popover.Title>Popover on right</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Popover on right</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Popover>
                <Popover.Title>Popover on top</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Popover on top</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Popover>
                <Popover.Title>Popover on bottom</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Popover on bottom</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={<Popover>
                <Popover.Title>Popover on left</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Popover on left</Button>
            </OverlayTrigger>
          </div>

          <h4 className="ui-block-heading">Variations</h4>

          <div className="cui-example cui-example-inline-spacing">
            <OverlayTrigger
              placement="right"
              overlay={<Popover className="popover-primary">
                <Popover.Title>Primary popover</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Primary</Button>
            </OverlayTrigger>
  
            <OverlayTrigger
              placement="top"
              overlay={<Popover className="popover-secondary">
                <Popover.Title>Secondary popover</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Secondary</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Popover className="popover-success">
                <Popover.Title>Success popover</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Success</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left"
              overlay={<Popover className="popover-info">
                <Popover.Title>Info popover</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Info</Button>
            </OverlayTrigger>
  
            <OverlayTrigger
              placement="top"
              overlay={<Popover className="popover-warning">
                <Popover.Title>Warning popover</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Warning</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="bottom"
              overlay={<Popover className="popover-danger">
                <Popover.Title>Danger popover</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Danger</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Popover className="popover-dark">
                <Popover.Title>Dark popover</Popover.Title>
                <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
              </Popover>}>
              <Button variant="default">Dark</Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    )
  }
}

export default CuiTooltipsAndPopovers
