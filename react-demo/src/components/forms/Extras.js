import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import MaskedInput from 'react-text-mask'
import * as textMaskAddons from 'text-mask-addons/dist/textMaskAddons'
import TextareaAutosize from 'react-autosize-textarea'

class Extras extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Extras - Forms')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Extras
        </h4>

       <Card className="mb-4">
         <Card.Header as="h6">react-text-mask</Card.Header>
         <Card.Body className="demo-vertical-spacing">
          <MaskedInput className="form-control" placeholder="Phone"
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} />

          <MaskedInput className="form-control" placeholder="Number"
            mask={textMaskAddons.createNumberMask({ prefix: '$' })} />

          <MaskedInput className="form-control" placeholder="Email"
            mask={textMaskAddons.emailMask} />

          <MaskedInput className="form-control" placeholder="Date"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            pipe={textMaskAddons.createAutoCorrectedDatePipe('mm/dd/yyyy')} />
         </Card.Body>
       </Card>

       <Card className="mb-4">
          <Card.Header as="h6">react-autosize-textarea</Card.Header>
         <Card.Body className="demo-vertical-spacing">
          <TextareaAutosize rows={5} maxRows={15} className="form-control" />
         </Card.Body>
       </Card>
      </div>
    )
  }
}

export default Extras
