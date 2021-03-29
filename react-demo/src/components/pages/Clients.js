import React, { Component } from 'react'
import { Media, Badge, Form, Table } from 'react-bootstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import '../../vendor/libs/react-perfect-scrollbar/react-perfect-scrollbar.scss'
import '../../vendor/styles/pages/clients.scss'

class Clients extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Clients - Pages')

    this.closeSidebox = this.closeSidebox.bind(this)

    this.state = {
      selected: null,
      sideboxOpened: false,

      clientsData: [{
        avatar: '5-small.png',
        name: 'Nelle Maxwell',
        username: 'nmaxwell',
        email: 'nmaxwell@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.'
      }, {
        avatar: '9-small.png',
        name: 'Amanda Warner',
        username: 'awarner',
        email: 'awarner@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.',
        status: 1,
        messages: [
          { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
          { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
          { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
          { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
        ]
      }, {
        avatar: '4-small.png',
        name: 'Kenneth Frazier',
        username: 'kfrazier',
        email: 'kfrazier@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.',
        status: 3,
        messages: [
          { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
          { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
          { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
          { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
        ]
      }, {
        avatar: '6-small.png',
        name: 'Mae Gibson',
        username: 'mgibson',
        email: 'mgibson@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.'
      }, {
        avatar: '12-small.png',
        name: 'Arthur Duncan',
        username: 'aduncan',
        email: 'aduncan@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.',
        status: 2
      }, {
        avatar: '11-small.png',
        name: 'Belle Ross',
        username: 'bross',
        email: 'bross@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.',
        messages: [
          { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
          { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
          { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
          { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
        ]
      }, {
        avatar: '3-small.png',
        name: 'Allie Rodriguez',
        username: 'arodriguez',
        email: 'bross@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.',
        status: 1,
        messages: [
          { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
          { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
          { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
          { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
        ]
      }, {
        avatar: '7-small.png',
        name: 'Alice Hampton',
        username: 'ahampton',
        email: 'ahampton@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.',
        status: 3,
        messages: [
          { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
          { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
          { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
          { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
        ]
      }, {
        avatar: '8-small.png',
        name: 'Hallie Lewis',
        username: 'hlewis',
        email: 'hlewis@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.',
        status: 2
      }, {
        avatar: '2-small.png',
        name: 'Leon Wilson',
        username: 'lwilson',
        email: 'lwilson@mail.com',
        phone: '+0 (123) 456 7891',
        company: 'Company Inc.',
        messages: [
          { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
          { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
          { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
          { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
        ]
      }]
    }
  }

  openSidebox() {
    this.setState({ sideboxOpened: true })
  }

  closeSidebox() {
    this.setState({
      sideboxOpened: false
    })
  }

  selectClient(selected) {
    this.setState({ selected })
    this.openSidebox()
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (<React.Fragment>
      {/* `.clients-wrapper` fills all available space of container */}
      <div className={`clients-wrapper ${this.state.sideboxOpened ? 'clients-sidebox-open' : ''}`}>

        {/* `.clients-content` fills all available space of `clients-wrapper` */}
        <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: true }} className="clients-content clients-scroll container-p-x container-p-y">

          {/* Header */}
          <h4 className="d-flex flex-wrap justify-content-between align-items-center font-weight-bold pt-2 mb-4">
            <div className="mb-2">Clients</div>
            <div className="mb-2" style={{ maxWidth: '200px' }}>
              <Form.Control placeholder="Search" />
            </div>
          </h4>
          {/* / Header */}

          {/* Clients list */}
          <div className="table-responsive ui-bordered">
            <Table hover className="clients-table m-0">
              <tbody>

                {this.state.clientsData.map(client =>
                  <tr key={client.name} className={this.state.selected === client && this.state.sideboxOpened ? 'bg-light' : ''} onClick={() => this.selectClient(client)}>
                    <td className="align-middle py-3">
                      <Media className="align-items-center">
                        <img src={`${process.env.PUBLIC_URL}/img/avatars/${client.avatar}`} className="d-block ui-w-40 rounded-circle" alt="Client" />
                        <Media.Body className="flex-basis-auto pl-3">
                          <div>{client.name}</div>
                          <div className="text-muted small">@{client.username}</div>
                        </Media.Body>
                      </Media>
                    </td>
                    <td className="align-middle py-3">
                      {client.company}
                    </td>
                    <td className="align-middle py-3">
                      <div>{client.email}</div>
                      {client.phone && <div>{client.phone}</div>}
                    </td>
                    <td className="align-middle py-3">
                      {client.status === 1 && <Badge variant="success">Active</Badge>}
                      {client.status === 2 && <Badge variant="info">In progress</Badge>}
                      {client.status === 3 && <Badge variant="warning">Pending</Badge>}
                    </td>
                  </tr>
                )}

              </tbody>
            </Table>
          </div>
          {/* / Clients list */}

        </PerfectScrollbar>{/* / .clients-content */}

        {/* Clients sidebox */}
        <div className="clients-sidebox bg-body border-left">
          <a href="#close-sidebox" onClick={this.closeSidebox} className="clients-sidebox-close text-muted text-xlarge font-weight-light">&times;</a>

          {this.state.selected && <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: true }} className="clients-scroll container-p-y">

            {/* Client info */}
            <div className="text-center p-4">
              <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.selected.avatar}`} className="ui-w-100 rounded-circle mb-4" alt="Client" />
              <h5 className="mb-1"><a href="#d" onClick={this.prevent} className="text-body">{this.state.selected.name}</a></h5>
              <div className="text-muted small mb-2">@{this.state.selected.username}</div>
              {(this.state.selected.company || this.state.selected.phone) && <div className="small mb-4">
                {this.state.selected.company && <div>{this.state.selected.company}</div>}
                {this.state.selected.phone && <div>{this.state.selected.phone}</div>}
              </div>}
              <div>
                <a href="#d" onClick={this.prevent} className="text-secondary"><span className="ion ion-md-mail"></span></a> &nbsp;&nbsp;
                <a href="#d" onClick={this.prevent} className="text-secondary"><span className="ion ion-ios-chatbubbles"></span></a> &nbsp;&nbsp;
                <span className="text-lighter">|</span> &nbsp;&nbsp;
                <a href="#d" onClick={this.prevent} className="text-twitter"><span className="ion ion-logo-twitter"></span></a> &nbsp;&nbsp;
                <a href="#d" onClick={this.prevent} className="text-facebook"><span className="ion ion-logo-facebook"></span></a> &nbsp;&nbsp;
                <a href="#d" onClick={this.prevent} className="text-instagram"><span className="ion ion-logo-instagram"></span></a>
              </div>
            </div>
            {/* / Client info */}

            <hr className="border-light m-0" />

            {/* Messages */}
            <div className="p-4">
              <h6 className="mb-3">Messages</h6>

              {!this.state.selected.messages && <div className="text-lighter my-4">No messages</div>}

              {this.state.selected.messages && this.state.selected.messages.map((message, i) =>
                <div key={message.date + message.content} className={`ui-bordered py-2 px-3 ${i !== (this.state.selected.messages.length - 1) ? 'mb-3' : ''}`}>
                  {message.content}
                  <div className="text-muted small mt-1">{message.date} ago &nbsp; | &nbsp; <a href="#d" onClick={this.prevent} className="text-muted">Reply</a></div>
                </div>
              )}
            </div>
            {/* / Messages */}

          </PerfectScrollbar>}
        </div>
        {/* / Clients sidebox */}

      </div>
      {/* / Clients wrapper */}
    </React.Fragment>)
  }
}

export default Clients
