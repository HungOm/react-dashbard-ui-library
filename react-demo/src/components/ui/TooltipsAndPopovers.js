import React, { Component } from 'react'
import { OverlayTrigger, Button, Tooltip, Popover, Card } from 'react-bootstrap'

class TooltipsAndPopovers extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Tooltips and popovers - UI elements')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Tooltips and popovers
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">Tooltips</Card.Header>
          <Card.Body className="demo-inline-spacing">
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body className="demo-inline-spacing">
            <div className="text-light small font-weight-semibold mb-3">Variants</div>

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
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Popovers</Card.Header>
          <Card.Body className="demo-inline-spacing">
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body className="demo-inline-spacing">
            <div className="text-light small font-weight-semibold mb-3">Variants</div>

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
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default TooltipsAndPopovers
