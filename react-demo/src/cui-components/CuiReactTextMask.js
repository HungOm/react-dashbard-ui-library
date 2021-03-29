import React, { Component } from 'react'

import MaskedInput from 'react-text-mask'
import * as textMaskAddons from 'text-mask-addons/dist/textMaskAddons'

class CuiReactTextMask extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-text-mask</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/text-mask/text-mask/tree/master/react" className="ui-block-description">https://github.com/text-mask/text-mask/tree/master/react</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <MaskedInput className="form-control" placeholder="Phone"
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} />

          <MaskedInput className="form-control" placeholder="Number"
            mask={textMaskAddons.createNumberMask({ prefix: '$' })} />

          <MaskedInput className="form-control" placeholder="Email"
            mask={textMaskAddons.emailMask} />

          <MaskedInput className="form-control" placeholder="Date"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            pipe={textMaskAddons.createAutoCorrectedDatePipe('mm/dd/yyyy')} />
        </div>
      </div>
    )
  }
}

export default CuiReactTextMask
