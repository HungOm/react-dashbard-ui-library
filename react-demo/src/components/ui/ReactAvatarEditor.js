import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'

class ReactAvatarEditor extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Avatar Editor - UI elements')

    this.onScaleRangeChange = this.onScaleRangeChange.bind(this)
    this.onRotateRangeChange = this.onRotateRangeChange.bind(this)
    this.onImageChange = this.onImageChange.bind(this)

    this.editor = null
    this.state = {
      scale: 1,
      rotate: 0,
      resultImg: ''
    }
  }

  onScaleRangeChange(e) {
    this.setState({
      scale: +e.target.value
    })

    // Update image
    setTimeout(this.onImageChange, 10)
  }

  onRotateRangeChange(e) {
    this.setState({
      rotate: +e.target.value
    })

    // Update image
    setTimeout(this.onImageChange, 10)
  }

  onImageChange() {
    if (!this.editor) return
    this.setState({
      resultImg: this.editor.getImageScaledToCanvas().toDataURL('image/png')
    })
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> React Avatar Editor
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <AvatarEditor
          ref={(e) => this.editor = e}
          image={`${process.env.PUBLIC_URL}/img/bg/9.jpg`}
          width={150}
          height={150}
          border={50}
          color={[0, 0, 0, 0.6]}
          style={{ background: '#000' }}
          scale={this.state.scale}
          rotate={this.state.rotate}
          onImageReady={this.onImageChange}
          onImageChange={this.onImageChange}
        />

        {/* Controls */}
        <div className="my-4" style={{ maxWidth: '200px' }}>
          <div className="form-group">
            <label className="form-label">Scale: {this.state.scale}</label>
            <input type="range" className="custom-range" value={this.state.scale} onChange={this.onScaleRangeChange} min="1" max="4" step="0.1" />
          </div>
          <div className="form-group">
            <label className="form-label">Rotate: {this.state.rotate}%</label>
            <input type="range" className="custom-range" value={this.state.rotate} onChange={this.onRotateRangeChange} min="0" max="350" step="5" />
          </div>
        </div>

        {/* Result */}
        <div>
          <label className="form-label w-100">Result:</label>
          <img src={this.state.resultImg} alt="Result" />
        </div>

      </div>
    )
  }
}

export default ReactAvatarEditor
