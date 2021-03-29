import React, { Component } from 'react'

class CiuToasts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bs4Toasts: [{
        variant: null,
        avatar: 'img/avatars/1.png',
        title: 'Default',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-primary',
        avatar: 'img/avatars/1.png',
        title: 'Primary',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-secondary',
        avatar: 'img/avatars/1.png',
        title: 'Secondary',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-success',
        avatar: 'img/avatars/1.png',
        title: 'Success',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-warning',
        avatar: 'img/avatars/1.png',
        title: 'Warning',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-info',
        avatar: 'img/avatars/1.png',
        title: 'Info',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-danger',
        avatar: 'img/avatars/1.png',
        title: 'Danger',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-dark',
        avatar: 'img/avatars/1.png',
        title: 'Dark',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }],
      translucentBs4Toasts: [{
        variant: null,
        avatar: 'img/avatars/1.png',
        title: 'Default',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-primary',
        avatar: 'img/avatars/1.png',
        title: 'Primary',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-secondary',
        avatar: 'img/avatars/1.png',
        title: 'Secondary',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-success',
        avatar: 'img/avatars/1.png',
        title: 'Success',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-warning',
        avatar: 'img/avatars/1.png',
        title: 'Warning',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-info',
        avatar: 'img/avatars/1.png',
        title: 'Info',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-danger',
        avatar: 'img/avatars/1.png',
        title: 'Danger',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-dark',
        avatar: 'img/avatars/1.png',
        title: 'Dark',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }]
    }
  }

  closeBs4Toast(toast) {
    this.setState({
      bs4Toasts: this.state.bs4Toasts.filter(_toast => _toast !== toast)
    })
  }

  closeTranslucentBs4Toast(toast) {
    this.setState({
      translucentBs4Toasts: this.state.translucentBs4Toasts.filter(_toast => _toast !== toast)
    })
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Bootstrap 4 toasts</h3>

        <h4 className="ui-block-heading">Default</h4>

        <div className="cui-example">

          {this.state.bs4Toasts.map(toast =>
            <div className={'bs4-toast toast show ' + (toast.variant ? toast.variant : '')} key={toast.variant}>
              <div className="toast-header">
                <img src={process.env.PUBLIC_URL + '/' + toast.avatar} className="d-block ui-w-20 rounded mr-2" alt="Avatar" />
                <div className="mr-auto font-weight-bold">{toast.title}</div>
                <div className="d-block small">{toast.time}</div>
                <button type="button" className="d-block close mb-1 ml-2" onClick={() => this.closeBs4Toast(toast)}>&times;</button>
              </div>
              <div className="toast-body">
                {toast.message}
              </div>
            </div>
          )}

        </div>

        <h4 className="ui-block-heading">Translucent</h4>

        <div className="cui-example">
          <div className="ui-bg-cover ui-bg-overlay-container p-4" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/1.jpg')`}}>
            <div className="ui-bg-overlay bg-dark opacity-50"></div>

            {this.state.translucentBs4Toasts.map(toast =>
              <div className={'bs4-toast toast show ' + (toast.variant ? toast.variant : '')} key={toast.variant}>
                <div className="toast-header">
                  <img src={process.env.PUBLIC_URL + '/' + toast.avatar} className="d-block ui-w-20 rounded mr-2" alt="Avatar" />
                  <div className="mr-auto font-weight-bold">{toast.title}</div>
                  <div className="d-block small">{toast.time}</div>
                  <button type="button" className="d-block close mb-1 ml-2" onClick={() => this.closeTranslucentBs4Toast(toast)}>&times;</button>
                </div>
                <div className="toast-body">
                  {toast.message}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    )
  }
}

export default CiuToasts
