import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'

const humanFileSize = (bytes, si) => {
  var thresh = si ? 1000 : 1024
  if(Math.abs(bytes) < thresh) return bytes + ' B'
  var units = si
      ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
      : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB']
  var u = -1
  do {
    bytes /= thresh
    ++u
  } while(Math.abs(bytes) >= thresh && u < units.length - 1)
  return bytes.toFixed(1)+' '+units[u]
}

const DropzoneContainer = (props) => {
  const onDrop = acceptedFiles => {
    acceptedFiles.forEach(file => {
      if (!/\.(jpe?g|png|gif)$/i.test(file.name)) return
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Trigger callback
        props.onDrop && props.onDrop({
          name: file.name,
          size: humanFileSize(file.size),
          dataUrl: reader.result
        })
      }
      reader.readAsDataURL(file)
    })
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: 'image/*', onDrop })

  let className = 'text-center'

  // Set paddings depending on file list is empty or not
  className += !props.files.length ? ' p-5' : ' pt-3 pl-3'

  // Define border color depending on status
  if (isDragActive || isDragAccept) className += ' border-primary'
  else if (isDragReject) className += ' border-danger'
  else className += ' border-light'

  // Dropzone container style
  const style = {
    border: '3px dashed',
    outline: '0'
  }

  return (
    <React.Fragment>
      <div {...getRootProps({ className, style })}>
        <input {...getInputProps()} />

        {/* Don't show placeholder if the file list isn't empty */}
        {!props.files.length && (
          <div className="text-big text-muted">Drag 'n' drop some files here, or click to select files</div>
        )}

        {/* Print files */}
        {!!props.files.length && (
          // Container
          <div className="d-flex align-items-start align-content-start flex-wrap">
            {props.files.map(file => (
              // File card
              <div className="card card-condenced mb-3 mr-3" style={{width: '180px'}} key={file.name} onClick={e => e.stopPropagation()}>
                <div className="card-body">
                  <img className="mb-2" src={file.dataUrl} alt={file.name} style={{width: '100%'}} />
                  <div className="font-weight-semibold text-left text-truncate" title={file.name}>{file.name}</div>
                  <div className="text-left small text-muted">{file.size}</div>
                </div>
                {/* Remove button */}
                <button
                  className="btn btn-outline-danger btn-sm card-footer py-2"
                  style={{boxShadow: 'none', borderLeft: 0, borderRight: 0, borderBottom: 0}}
                  onClick={() => props.onRemove && props.onRemove(file)}
                >Remove</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

class FileUpload extends Component {
  constructor(props) {
    super(props)
    props.setTitle('File upload - Forms')

    this.onFileDrop = this.onFileDrop.bind(this)
    this.onFileRemove = this.onFileRemove.bind(this)

    this.state = {
      files: []
    }
  }

  onFileDrop(file) {
    this.setState(state => ({
      files: state.files.concat(file)
    }))
  }

  onFileRemove(file) {
    this.setState(state => {
      const files = [...state.files]
      files.splice(files.indexOf(file), 1)
      return { files }
    })
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> File upload
        </h4>

        <Card>
          <Card.Header as="h6">react-dropzone</Card.Header>
          <Card.Body>
            <div className="alert alert-warning mb-4">
              <strong>react-dropzone</strong> doesn't perform uploading on the server. You'll need to implement it on your own.
            </div>

            <DropzoneContainer files={this.state.files} onDrop={this.onFileDrop} onRemove={this.onFileRemove} />
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default FileUpload
