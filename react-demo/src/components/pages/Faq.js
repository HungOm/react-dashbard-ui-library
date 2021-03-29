import React, { Component } from 'react'
import { Media, Button, Collapse, Row, Col } from 'react-bootstrap'

class FAQ extends Component {
  constructor(props) {
    super(props)
    props.setTitle('FAQ - Pages')

    this.state = {
      expanded: []
    }
  }

  toggle(e, id) {
    e.preventDefault()
    const expanded = [...this.state.expanded]

    if (expanded.indexOf(id) === -1) {
      expanded.push(id)
    } else {
      expanded.splice(expanded.indexOf(id), 1)
    }

    this.setState({ expanded })
  }

  isExpanded(id) {
    return this.state.expanded.indexOf(id) !== -1
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h3 className="text-center font-weight-bold py-3 mb-4">
          Frequently Asked Questions
        </h3>
        <hr className="container-m-nx border-light my-0" />

        <Row className="mt-4">
          <Col lg={4} xl={3}>

            <div>
              <a href="#d" onClick={this.prevent} className="media align-items-center bg-lighter text-body py-3 px-4">
                <div className="ion ion-md-help-circle-outline ui-w-30 text-center text-xlarge"></div>
                <Media.Body className="ml-3">
                  Common
                  <div className="text-muted small">Donec sagittis urna eu leo</div>
                </Media.Body>
              </a>
              <a href="#d" onClick={this.prevent} className="media align-items-center bg-lighter text-body py-3 px-4">
                <div className="ion ion-ios-help-buoy ui-w-30 text-center text-xlarge"></div>
                <Media.Body className="ml-3">
                  Knowledge Base
                  <div className="text-muted small">Donec sagittis urna eu leo</div>
                </Media.Body>
              </a>
              <a href="#d" onClick={this.prevent} className="media align-items-center bg-lighter text-body py-3 px-4">
                <div className="ion ion-md-card ui-w-30 text-center text-xlarge"></div>
                <Media.Body className="ml-3">
                  Purchase
                  <div className="text-muted small">Donec sagittis urna eu leo</div>
                </Media.Body>
              </a>
              <a href="#d" onClick={this.prevent} className="media align-items-center bg-lighter text-body py-3 px-4">
                <div className="ion ion-ios-business ui-w-30 text-center text-xlarge"></div>
                <Media.Body className="ml-3">
                  Partnership
                  <div className="text-muted small">Donec sagittis urna eu leo</div>
                </Media.Body>
              </a>
            </div>

            <div className="text-center mt-4 mb-5">
              <Button variant="outline-primary">Contact Support</Button>
            </div>

          </Col>
          <Col>

            <h4 className="media align-items-center my-4">
              <div className="ion ion-md-help-circle-outline ui-w-60 text-center text-large"></div>
              <Media.Body className="ml-1">
                Common
                <div className="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
              </Media.Body>
            </h4>

            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-1')} aria-expanded={String(this.isExpanded('faq-1'))} className="d-flex justify-content-between text-body py-3 px-4">
                Ne ornatus albucius ius?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-1')} className="text-muted"><div>
                <div className="px-4 pb-3">Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-2')} aria-expanded={String(this.isExpanded('faq-2'))} className="d-flex justify-content-between text-body py-3 px-4">
                Quo insolens intellegam dissentiet at?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-2')} className="text-muted"><div>
                <div className="px-4 pb-3">Ex fugit legimus fuisset per. Ex quidam option diceret ius.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-3')} aria-expanded={String(this.isExpanded('faq-3'))} className="d-flex justify-content-between text-body py-3 px-4">
                Ad his assum delenit blandit?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-3')} className="text-muted"><div>
                <div className="px-4 pb-3">Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-4')} aria-expanded={String(this.isExpanded('faq-4'))} className="d-flex justify-content-between text-body py-3 px-4">
                Dapibus ac facilisis in?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-4')} className="text-muted"><div>
                <div className="px-4 pb-3">Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-5')} aria-expanded={String(this.isExpanded('faq-5'))} className="d-flex justify-content-between text-body py-3 px-4">
                Cras justo odio?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-5')} className="text-muted"><div>
                <div className="px-4 pb-3">Etiam vivendo eu sea, purto ponderum mediocritatem at pro.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-6')} aria-expanded={String(this.isExpanded('faq-6'))} className="d-flex justify-content-between text-body py-3 px-4">
                Porta ac consectetur ac?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-6')} className="text-muted"><div>
                <div className="px-4 pb-3">Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.</div>
              </div></Collapse>
            </div>

            <hr className="my-5" />

            <h4 className="media align-items-center mb-4">
              <div className="ion ion-ios-help-buoy ui-w-60 text-center text-large"></div>
              <div className="media-body ml-1">
                Knowledge Base
                <div className="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
              </div>
            </h4>

            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-21')} aria-expanded={String(this.isExpanded('faq-21'))} className="d-flex justify-content-between text-body py-3 px-4">
                Ne ornatus albucius ius?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-21')} className="text-muted"><div>
                <div className="px-4 pb-3">Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-22')} aria-expanded={String(this.isExpanded('faq-22'))} className="d-flex justify-content-between text-body py-3 px-4">
                Quo insolens intellegam dissentiet at?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-22')} className="text-muted"><div>
                <div className="px-4 pb-3">Ex fugit legimus fuisset per. Ex quidam option diceret ius.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-23')} aria-expanded={String(this.isExpanded('faq-23'))} className="d-flex justify-content-between text-body py-3 px-4">
                Ad his assum delenit blandit?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-23')} className="text-muted"><div>
                <div className="px-4 pb-3">Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-24')} aria-expanded={String(this.isExpanded('faq-24'))} className="d-flex justify-content-between text-body py-3 px-4">
                Dapibus ac facilisis in?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-24')} className="text-muted"><div>
                <div className="px-4 pb-3">Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-25')} aria-expanded={String(this.isExpanded('faq-25'))} className="d-flex justify-content-between text-body py-3 px-4">
                Cras justo odio?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-25')} className="text-muted"><div>
                <div className="px-4 pb-3">Etiam vivendo eu sea, purto ponderum mediocritatem at pro.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-26')} aria-expanded={String(this.isExpanded('faq-26'))} className="d-flex justify-content-between text-body py-3 px-4">
                Porta ac consectetur ac?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-26')} className="text-muted"><div>
                <div className="px-4 pb-3">Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.</div>
              </div></Collapse>
            </div>

            <hr className="my-5" />

            <h4 className="media align-items-center mb-4">
              <div className="ion ion-md-card ui-w-60 text-center text-large"></div>
              <div className="media-body ml-1">
                Purchase
                <div className="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
              </div>
            </h4>

            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-31')} aria-expanded={String(this.isExpanded('faq-31'))} className="d-flex justify-content-between text-body py-3 px-4">
                Ne ornatus albucius ius?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-31')} className="text-muted"><div>
                <div className="px-4 pb-3">Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-32')} aria-expanded={String(this.isExpanded('faq-32'))} className="d-flex justify-content-between text-body py-3 px-4">
                Quo insolens intellegam dissentiet at?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-32')} className="text-muted"><div>
                <div className="px-4 pb-3">Ex fugit legimus fuisset per. Ex quidam option diceret ius.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-33')} aria-expanded={String(this.isExpanded('faq-33'))} className="d-flex justify-content-between text-body py-3 px-4">
                Ad his assum delenit blandit?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-33')} className="text-muted"><div>
                <div className="px-4 pb-3">Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-34')} aria-expanded={String(this.isExpanded('faq-34'))} className="d-flex justify-content-between text-body py-3 px-4">
                Dapibus ac facilisis in?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-34')} className="text-muted"><div>
                <div className="px-4 pb-3">Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-35')} aria-expanded={String(this.isExpanded('faq-35'))} className="d-flex justify-content-between text-body py-3 px-4">
                Cras justo odio?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-35')} className="text-muted"><div>
                <div className="px-4 pb-3">Etiam vivendo eu sea, purto ponderum mediocritatem at pro.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-36')} aria-expanded={String(this.isExpanded('faq-36'))} className="d-flex justify-content-between text-body py-3 px-4">
                Porta ac consectetur ac?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-36')} className="text-muted"><div>
                <div className="px-4 pb-3">Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.</div>
              </div></Collapse>
            </div>

            <hr className="my-5" />

            <h4 className="media align-items-center mb-4">
              <div className="ion ion-ios-business ui-w-60 text-center text-large"></div>
              <div className="media-body ml-1">
                Partnership
                <div className="text-muted text-tiny font-weight-light">Donec sagittis urna eu leo</div>
              </div>
            </h4>

            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-41')} aria-expanded={String(this.isExpanded('faq-41'))} className="d-flex justify-content-between text-body py-3 px-4">
                Ne ornatus albucius ius?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-41')} className="text-muted"><div>
                <div className="px-4 pb-3">Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-42')} aria-expanded={String(this.isExpanded('faq-42'))} className="d-flex justify-content-between text-body py-3 px-4">
                Quo insolens intellegam dissentiet at?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-42')} className="text-muted"><div>
                <div className="px-4 pb-3">Ex fugit legimus fuisset per. Ex quidam option diceret ius.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-43')} aria-expanded={String(this.isExpanded('faq-43'))} className="d-flex justify-content-between text-body py-3 px-4">
                Ad his assum delenit blandit?
                <span className="collapse-icon"></span>
              </a>
              <Collapse in={this.isExpanded('faq-43')} className="text-muted"><div>
                <div className="px-4 pb-3">Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-44')} aria-expanded={String(this.isExpanded('faq-44'))} className="d-flex justify-content-between text-body py-3 px-4">
                Dapibus ac facilisis in?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-44')} className="text-muted"><div>
                <div className="px-4 pb-3">Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-45')} aria-expanded={String(this.isExpanded('faq-45'))} className="d-flex justify-content-between text-body py-3 px-4">
                Cras justo odio?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-45')} className="text-muted"><div>
                <div className="px-4 pb-3">Etiam vivendo eu sea, purto ponderum mediocritatem at pro.</div>
              </div></Collapse>
            </div>
            <div className="bg-white ui-bordered mb-2">
              <a href="#toggle" onClick={e => this.toggle(e, 'faq-46')} aria-expanded={String(this.isExpanded('faq-46'))} className="d-flex justify-content-between text-body py-3 px-4">
                Porta ac consectetur ac?
                <span className="collapse-icon d-inline-block ml-1"></span>
              </a>
              <Collapse in={this.isExpanded('faq-46')} className="text-muted"><div>
                <div className="px-4 pb-3">Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.</div>
              </div></Collapse>
            </div>

          </Col>
        </Row>

      </div>
    )
  }
}

export default FAQ
