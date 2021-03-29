import React, { Component } from 'react'
import { Card, Collapse } from 'react-bootstrap'

class Accordion extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Accordion - UI elements')

    this.state = {
      accordion1: 1,
      accordion2: 1
    }
  }

  expandAccordion(e, name, pane) {
    e.preventDefault()
    const value = this.state[name] === pane ? null : pane

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Accordion
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-5" />

        <Card className="mb-2">
          <Card.Header>
            <a className="text-body"
              href="#accordion"
              onClick={e => this.expandAccordion(e, 'accordion1', 1)}
              aria-expanded={this.state.accordion1 === 1}
            >
              Collapsible Group Item #1
            </a>
          </Card.Header>
          <Collapse in={this.state.accordion1 === 1}>
            <div>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Card.Body>
            </div>
          </Collapse>
        </Card>

        <Card className="mb-2">
          <Card.Header>
            <a className="text-body"
              href="#accordion"
              onClick={e => this.expandAccordion(e, 'accordion1', 2)}
              aria-expanded={this.state.accordion1 === 2}
            >
              Collapsible Group Item #2
            </a>
          </Card.Header>
          <Collapse in={this.state.accordion1 === 2}>
            <div>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Card.Body>
            </div>
          </Collapse>
        </Card>

        <Card className="mb-2">
          <Card.Header>
            <a className="text-body"
              href="#accordion"
              onClick={e => this.expandAccordion(e, 'accordion1', 3)}
              aria-expanded={this.state.accordion1 === 3}
            >
              Collapsible Group Item #3
            </a>
          </Card.Header>
          <Collapse in={this.state.accordion1 === 3}>
            <div>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Card.Body>
            </div>
          </Collapse>
        </Card>

        <hr className="container-m-nx border-light my-5" />

        <Card className="mb-2">
          <Card.Header>
            <a className="text-body d-flex justify-content-between"
              href="#accordion"
              onClick={e => this.expandAccordion(e, 'accordion2', 1)}
              aria-expanded={this.state.accordion2 === 1}
            >
              Collapsible Group Item #1
              <div className="collapse-icon"></div>
            </a>
          </Card.Header>

          <Collapse in={this.state.accordion2 === 1}>
            <div>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Card.Body>
            </div>
          </Collapse>
        </Card>

        <Card className="mb-2">
          <Card.Header>
            <a className="text-body d-flex justify-content-between"
              href="#accordion"
              onClick={e => this.expandAccordion(e, 'accordion2', 2)}
              aria-expanded={this.state.accordion2 === 2}
            >
              Collapsible Group Item #2
              <div className="collapse-icon"></div>
            </a>
          </Card.Header>
          <Collapse in={this.state.accordion2 === 2}>
            <div>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Card.Body>
            </div>
          </Collapse>
        </Card>

        <Card className="mb-2">
          <Card.Header>
            <a className="text-body d-flex justify-content-between"
              href="#accordion"
              onClick={e => this.expandAccordion(e, 'accordion2', 3)}
              aria-expanded={this.state.accordion2 === 3}
            >
              Collapsible Group Item #3
              <div className="collapse-icon"></div>
            </a>
          </Card.Header>
          <Collapse in={this.state.accordion2 === 3}>
            <div>
              <Card.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </Card.Body>
            </div>
          </Collapse>
        </Card>

      </div>
    )
  }
}

export default Accordion
