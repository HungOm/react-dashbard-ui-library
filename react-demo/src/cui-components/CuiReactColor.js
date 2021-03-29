import React, { Component } from 'react'

import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker, 
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker
} from 'react-color'

class CuiReactColor extends Component {
  constructor(props) {
    super(props)

    this.handleChangeComplete = this.handleChangeComplete.bind(this)
    
    this.state = {
      color: '#A4DD00'
    }
  }

  handleChangeComplete(color) {
    this.setState({
      color: color.rgb
    })
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-color</h3>
        <a target="_blank" rel="noopener noreferrer" href="http://casesandberg.github.io/react-color/" className="ui-block-description">http://casesandberg.github.io/react-color/</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <AlphaPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <BlockPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <ChromePicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <CirclePicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <CompactPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <GithubPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <HuePicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <MaterialPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <PhotoshopPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <SketchPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <SliderPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <SwatchesPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
          <TwitterPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete } />
        </div>
      </div>
    )
  }
}

export default CuiReactColor
