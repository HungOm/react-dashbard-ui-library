import React, { Component } from 'react'
import StepZilla from 'react-stepzilla'
import '../vendor/libs/react-stepzilla/react-stepzilla.scss'

class Step1 extends Component {
  render() {
    return this.props.isCard
      ? <div className="card"><div className={`card-body ${this.props.className}`}>Step Content 1</div></div>
      : <div className={this.props.className}>Step Content 1</div>
  }
}
class Step2 extends Component {
  render() {
    return this.props.isCard
      ? <div className="card"><div className={`card-body ${this.props.className}`}>Step Content 2</div></div>
      : <div className={this.props.className}>Step Content 2</div>
  }
}
class Step3 extends Component {
  render() {
    return this.props.isCard
      ? <div className="card"><div className={`card-body ${this.props.className}`}>Step Content 3</div></div>
      : <div className={this.props.className}>Step Content 3</div>
  }
}
class Step4 extends Component {
  render() {
    return this.props.isCard
      ? <div className="card"><div className={`card-body ${this.props.className}`}>Step Content 4</div></div>
      : <div className={this.props.className}>Step Content 4</div>
  }
}

const StepTitle = ({ title, description, icon, doneIcon }) => {
  return (
    <span>
      { doneIcon ? <span className={`stepzilla-done-icon ${doneIcon}`} /> : '' }
      { typeof icon === 'number' ? <span className="stepzilla-number">{icon}</span> : <span className={`stepzilla-icon ${icon}`} /> }
      <span className="stepzilla-title">{title}</span>
      { description ? <span className="stepzilla-desctiption">{description}</span> : '' }
    </span>
  )
}

class CuiReactStepzilla extends Component {
  render() {
    const isIE10Mode = document['documentMode'] === 10
    const stepzillaDefaultProps = {
      nextButtonCls: 'btn btn-primary',
      backButtonCls: 'btn btn-default',
      nextButtonText: 'Next →',
      backButtonText: '← Back'
    }

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-stepzilla</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/newbreedofgeek/react-stepzilla" className="ui-block-description">https://github.com/newbreedofgeek/react-stepzilla</a>

        <div className="no-ie10" data-name="react-stepzilla"></div>

        {!isIE10Mode && <React.Fragment>
          <h4 className="ui-block-heading">Examples</h4>

          <div className="cui-example">
            {/* .react-stepzilla class is important class is important for applying proper styles */}
            <div className="react-stepzilla">
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon={1} title="Keyboard" description="FIRST STEP" />, component: <Step1 /> },
                  { name: <StepTitle icon={2} title="Effects" description="SECOND STEP" />, component: <Step2 />},
                  { name: <StepTitle icon={3} title="Pager" description="THIRD STEP" />, component: <Step3 />},
                ]}
              />
            </div>
          </div>

          <h4 className="ui-block-heading">Boxed steps</h4>

          <div className="cui-example">
            <div className="react-stepzilla">
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon={1} title="Keyboard" description="FIRST STEP" />, component: <Step1 isCard={true} /> },
                  { name: <StepTitle icon={2} title="Effects" description="SECOND STEP" />, component: <Step2 isCard={true} />},
                  { name: <StepTitle icon={3} title="Pager" description="THIRD STEP" />, component: <Step3 isCard={true} />},
                ]}
              />
            </div>
          </div>

          <h4 className="ui-block-heading">With icon</h4>

          <div className="cui-example">
            <div className="react-stepzilla">
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 isCard={true} /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 isCard={true} />},
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 isCard={true} />},
                  { name: <StepTitle icon="ion ion-md-notifications-outline" doneIcon="ion ion-md-checkmark" title="Notifications" description="Set up notifications" />, component: <Step4 isCard={true} />},
                ]}
              />
            </div>
          </div>

          <h4 className="ui-block-heading">Card wizard</h4>

          <div className="cui-example">
            <div className="react-stepzilla card">
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon={1} title="Keyboard" description="FIRST STEP" />, component: <Step1 className="card-body border-top border-bottom" /> },
                  { name: <StepTitle icon={2} title="Effects" description="SECOND STEP" />, component: <Step2 className="card-body border-top border-bottom" />},
                  { name: <StepTitle icon={3} title="Pager" description="THIRD STEP" />, component: <Step3 className="card-body border-top border-bottom" />},
                ]}
              />
            </div>
          </div>

          <h4 className="ui-block-heading">Vertical</h4>

          <div className="alert alert-info mb-4">
            When using vertical layout, navigation buttons are positioning absolutely. Don 't forget to add bottom padding to the <code>.react-stepzilla</code> element equal to the height of <code>.footer-buttons</code> element.
          </div>

          <div className="cui-example cui-example-vertical-spacing">
            <div className="react-stepzilla react-stepzilla-vertical-left" style={{paddingBottom: '54px'}}>
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 isCard={true} /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 isCard={true} />},
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 isCard={true} />},
                ]}
              />
            </div>

            <div className="react-stepzilla react-stepzilla-vertical-right" style={{paddingBottom: '54px'}}>
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 isCard={true} /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 isCard={true} />},
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 isCard={true} />},
                ]}
              />
            </div>

            <div className="react-stepzilla card react-stepzilla-vertical-left" style={{paddingBottom: '66px'}}>
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 className="card-body border-top border-bottom" /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 className="card-body border-top border-bottom" />},
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 className="card-body border-top border-bottom" />},
                ]}
              />
            </div>

            <div className="react-stepzilla card react-stepzilla-vertical-right" style={{paddingBottom: '66px'}}>
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 className="card-body border-top border-bottom" /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 className="card-body border-top border-bottom" />},
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 className="card-body border-top border-bottom" />},
                ]}
              />
            </div>

          </div>
        </React.Fragment>}
      </div>
    )
  }
}

export default CuiReactStepzilla
