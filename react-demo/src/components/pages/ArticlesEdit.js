import React, { Component } from 'react'
import { Card, Button, Form, Media } from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable'
import '../../vendor/libs/react-select/react-select.scss'
import loadable from '@loadable/component'
import '../../vendor/libs/react-quill/typography.scss'
import '../../vendor/libs/react-quill/editor.scss'

// Catch error in IE10
const ReactQuill = loadable(() => new Promise(resolve =>
  import('react-quill').then(Component => resolve(Component)).catch(() => resolve(<div />))
))

class ArticlesEdit extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Article edit - Pages')

    this.onTagsChange = this.onTagsChange.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.onFileChange = this.onFileChange.bind(this)

    this.state = {
      articleData: {
        id: 563,
        created_at: '03/30/2018',
        title: 'What Is The Big R For Marketing Your Business',
        slug: 'what-is-the-big-r-for-marketing-your-business',
        tags: ['Productivity', 'Creativity', 'Writing', 'Inspiration', 'Psychology'],
        status: 1,
        content: 'Article content',
        main_image: '13.jpg',

        author: {
          avatar: '1-small.png',
          username: 'mgreene',
          name: 'Mike Greene'
        },

        meta: {
          title: 'What Is The Big R For Marketing Your Business',
          description: 'Read What Is The Big R For Marketing Your Business',
          keywords: 'Productivity, Creativity, Writing, Inspiration, Psychology'
        }
      },
      mainFileSelect: null
    }
  }

  onValueChange(field, e, valType=String) {
    this.setState({
      articleData: {
        ...this.state.articleData,
        [field]: valType(e.target.value)
      }
    })
  }

  onMetaChange(field, e) {
    this.setState({
      articleData: {
        ...this.state.articleData,
        meta: {
          ...this.state.articleData.meta,
          [field]: e.target.value
        }
      }
    })
  }

  // Tags object
  get tagsObject() {
    return this.state.articleData.tags.map(tag => (
      { value: tag, label: tag }
    ))
  }

  onTagsChange(e) {
    let tags
    if (Array.isArray(e)) {
      tags = e.map(tagObj => tagObj.value)
    } else {
      tags = e.target.value.split(',').map(tag => tag.replace(/^\s+|\s+$/g, ''))
    }

    this.setState({
      articleData: {
        ...this.state.articleData,
        tags
      }
    })
  }

  onContentChange(e) {
    this.setState({
      articleData: {
        ...this.state.articleData,
        content: typeof e === 'string' ? e : e.target.value
      }
    })
  }

  onFileChange(e) {
    if (e.target.files.length) {
      this.setState({ mainFileSelect: e.target.files[0] })
    } else {
      this.setState({ mainFileSelect: null })
    }
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10
    const modules = {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }, { 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Edit article <span className="text-muted">#{this.state.articleData.id}</span>
        </h4>

        <Card>
          <Card.Body className="media align-items-center">

            <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.articleData.author.avatar}`} className="d-block ui-w-40 rounded-circle" alt="" />
            <div className="media-body ml-3">
              <a href="#d" onClick={this.prevent} className="text-body d-block">
                <strong>{this.state.articleData.author.name}</strong>&nbsp;
                <span className="text-muted">@{this.state.articleData.author.username}</span>
              </a>
              Created at {this.state.articleData.created_at}
            </div>

          </Card.Body>
          <hr className="m-0" />
          <Card.Body className="pb-2">

            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control value={this.state.articleData.title} onChange={e => this.onValueChange('title', e)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Slug</Form.Label>
              <Form.Control value={this.state.articleData.slug} onChange={e => this.onValueChange('slug', e)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tags</Form.Label>
              {!isIE10Mode &&
                <CreatableSelect className="react-select" classNamePrefix="react-select"
                  isMulti
                  options={this.tagsObject}
                  defaultValue={this.tagsObject}
                  onChange={this.onTagsChange}
                />
              }
              {isIE10Mode && 
                <Form.Control value={this.state.articleData.tags.join(',')} onChange={this.onTagsChange} />
              }
            </Form.Group>

            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control value={this.state.articleData.status} onChange={e => this.onValueChange('status', e, Number)} as="select" className="custom-select">
                <option>Select status...</option>
                <option value="1">Published</option>
                <option value="2">Draft</option>
                <option value="3">Deleted</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              {!isIE10Mode && (
                <ReactQuill modules={modules}
                  value={this.state.articleData.content}
                  onChange={this.onContentChange} />
              )}

              {/* Fallback */}
              {isIE10Mode && (
                <Form.Control as="textarea"
                  value={this.state.articleData.content}
                  onChange={this.onContentChange} />
              )}
            </Form.Group>

            <Media as={Form.Group} style={{ minHeight: '1px' }}>
              <div className="ui-bg-cover" style={{ width: '100px', height: '100px', backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/${this.state.articleData.main_image}')` }} />
              <Media.Body className="ml-3">
                <Form.Label>Main image:</Form.Label>
                <a href="#d" onClick={this.prevent} className="d-block">http://example.com/path/to/image/{this.state.articleData.main_image}</a>
                <label className="custom-file mt-3">
                  <input type="file" className="custom-file-input" onChange={this.onFileChange} />
                  <span className={`custom-file-label ${this.state.mainFileSelect ? '' : 'text-muted'}`}>{
                    this.state.mainFileSelect ? this.state.mainFileSelect.name : 'Select file...'
                  }</span>
                </label>
              </Media.Body>
            </Media>

          </Card.Body>
          <hr className="m-0" />
          <Card.Body className="pb-2">

            <h6 className="small font-weight-semibold mb-4">Meta</h6>

            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control value={this.state.articleData.meta.title} onChange={e => this.onMetaChange('title', e)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control value={this.state.articleData.meta.description} onChange={e => this.onMetaChange('description', e)} as="textarea" rows={3} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Keywords</Form.Label>
              <Form.Control value={this.state.articleData.meta.keywords} onChange={e => this.onMetaChange('keywords', e)} />
            </Form.Group>

          </Card.Body>
        </Card>

        <div className="text-right mt-3">
          <Button variant="primary">Save changes</Button>&nbsp;
          <Button variant="default">Cancel</Button>
        </div>
      </div>
    )
  }
}

export default ArticlesEdit
