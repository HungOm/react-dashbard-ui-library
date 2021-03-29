import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import '../vendor/libs/sweetalert2/sweetalert2.scss'

const ReactSwal = withReactContent(Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-primary btn-lg',
    cancelButton: 'btn btn-default btn-lg',
    actions: 'text-center'
  }
}))

class CuiSweetAlert2 extends Component {
  prevent(e) {
    e.preventDefault()
  }

  basicExample() {
    ReactSwal.fire({
      title: 'Here\'s a message!',
      text: 'It\'s pretty, isn\'t it?',
      footer: (<a href="#d" onClick={this.prevent}>Why do I have this issue?</a>)
    })
  }

  fullExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel plx!'
    }).then(function(result) {
      if (result.value) {
        ReactSwal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success')
      } else {
        ReactSwal.fire('Cancelled', 'Your imaginary file is safe :)', 'error')
      }
    })
  }

  loaderExample() {
    ReactSwal.fire({
      title: 'Ajax request example',
      text: 'Submit to run ajax request',
      type: 'info',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: function() {
        return !Swal.isLoading()
      },
      preConfirm: function() {
        return new Promise(function (resolve) {
          setTimeout(function() {
            resolve(true)
          }, 2000)
        })
      }
    }).then(function(result) {
      if (result.value) {
        ReactSwal.fire('Ajax request finished!')
      }
    })
  }

  stepsExample () {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3'],
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    }).queue([{
        title: 'Question 1',
        text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
    ]).then(function(result) {
      if (result.value) {
        ReactSwal.fire({
          title: 'All done!',
          html: (<p>Your answers: <pre><code>{JSON.stringify(result.value)}</code></pre></p>),
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  infoExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'info',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-info btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  successExample() {
    ReactSwal.fire({
      title: 'Are you sure?', 
      text: 'You will not be able to recover this imaginary file!',
      type: 'success',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-success btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  warningExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-warning btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  dangerExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'error',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-danger btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">SweetAlert2</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sweetalert2/sweetalert2" className="ui-block-description">https://github.com/sweetalert2/sweetalert2</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sweetalert2/sweetalert2-react-content" className="ui-block-description mt-1">https://github.com/sweetalert2/sweetalert2-react-content</a>

        <div className="no-ie10" data-name="SweetAlert2"></div>

        {!isIE10Mode && <React.Fragment>
          <h4 className="ui-block-heading">Examples</h4>

          <div className="cui-example cui-example-inline-spacing">
            <Button variant="default" size="lg" onClick={() => this.basicExample()}>Basic</Button>
            <Button variant="default" size="lg" onClick={() => this.fullExample()}>Full</Button>
            <Button variant="default" size="lg" onClick={() => this.loaderExample()}>With loader</Button>
            <Button variant="default" size="lg" onClick={() => this.stepsExample()}>Steps</Button>
            <Button variant="info" size="lg" onClick={() => this.infoExample()}>Info</Button>
            <Button variant="success" size="lg" onClick={() => this.successExample()}>Success</Button>
            <Button variant="warning" size="lg" onClick={() => this.warningExample()}>Warning</Button>
            <Button variant="danger" size="lg" onClick={() => this.dangerExample()}>Danger</Button>
          </div>
        </React.Fragment>}
      </div>
    )
  }
}

export default CuiSweetAlert2
