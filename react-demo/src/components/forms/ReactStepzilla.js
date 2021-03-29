import React, { Component } from 'react'
import StepZilla from 'react-stepzilla'
import '../../vendor/libs/react-stepzilla/react-stepzilla.scss'

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
      {doneIcon ? <span className={`stepzilla-done-icon ${doneIcon}`} /> : ''}
      {typeof icon === 'number' ? <span className="stepzilla-number">{icon}</span> : <span className={`stepzilla-icon ${icon}`} />}
      <span className="stepzilla-title">{title}</span>
      {description ? <span className="stepzilla-desctiption">{description}</span> : ''}
    </span>
  )
}
class ReactStepzilla extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Stepzilla - Forms')
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10
    const stepzillaDefaultProps = {
      nextButtonCls: 'btn btn-primary',
      backButtonCls: 'btn btn-default',
      nextButtonText: 'Next →',
      backButtonText: '← Back'
    }

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> React Stepzilla
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-5" />

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-stepzilla</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <React.Fragment>
          {/* .react-stepzilla class is important class is important for applying proper styles */}
          <div className="react-stepzilla">
            <StepZilla {...stepzillaDefaultProps}
              steps={[
                { name: <StepTitle icon={1} title="Keyboard" description="FIRST STEP" />, component: <Step1 /> },
                { name: <StepTitle icon={2} title="Effects" description="SECOND STEP" />, component: <Step2 /> },
                { name: <StepTitle icon={3} title="Pager" description="THIRD STEP" />, component: <Step3 /> },
              ]}
            />
          </div>

          <hr className="container-m-nx border-light my-4" />
          <h6 className="text-muted small font-weight-bold py-3 my-4">Boxed steps</h6>

          <div className="react-stepzilla">
            <StepZilla {...stepzillaDefaultProps}
              steps={[
                { name: <StepTitle icon={1} title="Keyboard" description="FIRST STEP" />, component: <Step1 isCard={true} /> },
                { name: <StepTitle icon={2} title="Effects" description="SECOND STEP" />, component: <Step2 isCard={true} /> },
                { name: <StepTitle icon={3} title="Pager" description="THIRD STEP" />, component: <Step3 isCard={true} /> },
              ]}
            />
          </div>

          <hr className="container-m-nx border-light my-4" />
          <h6 className="text-muted small font-weight-bold py-3 my-4">With icon</h6>

          <div className="react-stepzilla">
            <StepZilla {...stepzillaDefaultProps}
              steps={[
                { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 isCard={true} /> },
                { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 isCard={true} /> },
                { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 isCard={true} /> },
                { name: <StepTitle icon="ion ion-md-notifications-outline" doneIcon="ion ion-md-checkmark" title="Notifications" description="Set up notifications" />, component: <Step4 isCard={true} /> },
              ]}
            />
          </div>

          <hr className="container-m-nx border-light my-4" />
          <h6 className="text-muted small font-weight-bold py-3 my-4">Card wizard</h6>

          <div className="react-stepzilla card">
            <StepZilla {...stepzillaDefaultProps}
              steps={[
                { name: <StepTitle icon={1} title="Keyboard" description="FIRST STEP" />, component: <Step1 className="card-body border-top border-bottom" /> },
                { name: <StepTitle icon={2} title="Effects" description="SECOND STEP" />, component: <Step2 className="card-body border-top border-bottom" /> },
                { name: <StepTitle icon={3} title="Pager" description="THIRD STEP" />, component: <Step3 className="card-body border-top border-bottom" /> },
              ]}
            />
          </div>

          <hr className="container-m-nx border-light my-4" />
          <h6 className="text-muted small font-weight-bold py-3 my-4">Vertical</h6>

          <div className="demo-vertical-spacing">
            <div className="react-stepzilla react-stepzilla-vertical-left" style={{ paddingBottom: '54px' }}>
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 isCard={true} /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 isCard={true} /> },
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 isCard={true} /> },
                ]}
              />
            </div>

            <div className="react-stepzilla react-stepzilla-vertical-right" style={{ paddingBottom: '54px' }}>
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 isCard={true} /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 isCard={true} /> },
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 isCard={true} /> },
                ]}
              />
            </div>

            <div className="react-stepzilla card react-stepzilla-vertical-left" style={{ paddingBottom: '66px' }}>
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 className="card-body border-top border-bottom" /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 className="card-body border-top border-bottom" /> },
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 className="card-body border-top border-bottom" /> },
                ]}
              />
            </div>

            <div className="react-stepzilla card react-stepzilla-vertical-right" style={{ paddingBottom: '66px' }}>
              <StepZilla {...stepzillaDefaultProps}
                steps={[
                  { name: <StepTitle icon="ion ion-ios-keypad" doneIcon="ion ion-md-checkmark" title="Keyboard" description="Set up shortcuts" />, component: <Step1 className="card-body border-top border-bottom" /> },
                  { name: <StepTitle icon="ion ion-ios-color-wand" doneIcon="ion ion-md-checkmark" title="Effects" description="Add effects" />, component: <Step2 className="card-body border-top border-bottom" /> },
                  { name: <StepTitle icon="ion ion-md-copy" doneIcon="ion ion-md-checkmark" title="Pager" description="Select pager options" />, component: <Step3 className="card-body border-top border-bottom" /> },
                ]}
              />
            </div>
          </div>
        </React.Fragment>}

      </div>
    )
  }
}

export default ReactStepzilla
