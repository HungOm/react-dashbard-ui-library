import React, { Component } from 'react'
import { Tabs, Tab, Card, Form, InputGroup, Button, Table, Media } from 'react-bootstrap'
import Select from 'react-select'
import '../../vendor/libs/react-select/react-select.scss'
import loadable from '@loadable/component'
import '../../vendor/libs/react-quill/typography.scss'
import '../../vendor/libs/react-quill/editor.scss'
import * as moment from 'moment'
import Flatpickr from 'react-flatpickr'
import '../../vendor/libs/react-flatpickr/react-flatpickr.scss'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import '../../vendor/styles/pages/products.scss'

// Catch error in IE10
const ReactQuill = loadable(() => new Promise(resolve =>
  import('react-quill').then(Component => resolve(Component)).catch(() => resolve(<div />))
))

function ProductImages ({ images, onChange }) {
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  const onDragEnd = (result) => {
    if (!result.destination) return
    onChange(reorder(
      images,
      result.source.index,
      result.destination.index,
    ))
  }
  const setPrimaryImage = index => {
    images.forEach((img, _index) => {
      img.primary = index === _index
    })
    onChange(images.slice(0))
  }
  const removeImage = index => {
    const isPrimary = images[index].primary
    images.splice(index, 1)
    if (isPrimary && images.length) images[0].primary = true
    onChange(images.slice(0))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="product-images">
        {(droppableProvided, droppableSnapshot) => (
          <div ref={droppableProvided.innerRef}>
            {images.map((image, index) => (
              <Draggable key={image.image} draggableId={image.image} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <Media className="align-items-center bg-white ui-bordered py-3 mb-2" ref={draggableProvided.innerRef} {...draggableProvided.draggableProps}>
                    {/* Drag handle */}
                    <div className="product-image-move ion ion-ios-move text-muted text-big p-4" {...draggableProvided.dragHandleProps} />
                    <a href={`${process.env.PUBLIC_URL}/img/uikit/${image.image}`} target="_blank" rel="noopener noreferrer" className="d-block ui-w-100 mr-4">
                      <img src={`${process.env.PUBLIC_URL}/img/uikit/${image.image}`} className="img-fluid" alt="Product" />
                    </a>
                    <Media.Body>
                      <Form.Control size="sm" defaultValue={`example.com/img/uikit/${image.image}`} className="bg-transparent border-light mb-2" readOnly />
                      <label className="switcher switcher-sm">
                        <input type="radio" name="product-primary-image" className="switcher-input" checked={image.primary} onChange={() => setPrimaryImage(index)} />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">Primary image</span>
                      </label>
                    </Media.Body>
                    <Button onClick={() => removeImage(index)} variant="outline-danger borderless icon-btn" className="d-block mx-4">
                      <i className="ion ion-md-close"></i>
                    </Button>
                  </Media>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

class ECommerceProductEdit extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Product edit - Pages')

    this.onContentChange = this.onContentChange.bind(this)
    this.onImagesChange = this.onImagesChange.bind(this)

    this.state = {
      productData: {
        id: 3455632,
        title: 'Samsung Galaxy S7 Edge',
        price: 1049,
        category: 'Mobile phones',
        in_stock: 123,
        tax: 25,
        status: 1,

        // Options
        options: {
          brand: 'Samsung',
          storages: ['32GB', '64GB'],
          colors: ['#000', '#5f9ea0', '#c5baab'],
          warranties: ['Standard - 1 year', 'Extended - 2 years | $99'],
          ships_from: ['USA', 'China', 'Germany']
        },

        // Meta
        meta: {
          title: 'Samsung Galaxy S7 Edge',
          description: 'Buy Samsung Galaxy S7 Edge!',
          keywords: 'Mobile, Smartphone, Samsung, Galaxy, S3, Edge'
        },

        // Images
        images: [
          { image: 's7edge-1.jpg', primary: true },
          { image: 's7edge-2.jpg', primary: false },
          { image: 's7edge-3.jpg', primary: false },
          { image: 's7edge-4.jpg', primary: false }
        ],

        // Discounts
        discounts: [
          { discount: '5', type: 'General', code: '', quantity: '100', start_date: '', end_date: '' },
          { discount: '10', type: 'General', code: '', quantity: '', start_date: '02/01/2018', end_date: '03/01/2018' },
          { discount: '20', type: 'Code', code: 'G446DJ', quantity: '100', start_date: '02/12/2018', end_date: '03/05/2018' },
          { discount: '15', type: 'Code', code: 'HDA56D', quantity: '30', start_date: '02/23/2018', end_date: '04/06/2018' },
          { discount: '10', type: 'General', code: '', quantity: '', start_date: '05/14/2018', end_date: '05/30/2018' }
        ],

        // Description
        description: 'Item description'
      }
    }
  }

  onValueChange(field, e, valType=String) {
    this.setState({
      productData: {
        ...this.state.productData,
        [field]: valType(e.target.value)
      }
    })
  }

  onOptionsValueChange(field, e, valType=String) {
    let val
    if (Array.isArray(e)) {
      val = e.map(obj => obj.value)
    } else if (e.target.multiple) {
      val = []
      const options = e.target.options
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) val.push(options[i].value)
      }
    } else {
      val = valType(e.target.value)
    }

    this.setState({
      productData: {
        ...this.state.productData,
        options: {
          ...this.state.productData.options,
          [field]: val
        }
      }
    })
  }

  onMetaValueChange(field, e) {
    this.setState({
      productData: {
        ...this.state.productData,
        meta: {
          ...this.state.productData.meta,
          [field]: e.target.value
        }
      }
    })
  }

  onContentChange(e) {
    this.setState({
      productData: {
        ...this.state.productData,
        description: typeof e === 'string' ? e : e.target.value
      }
    })
  }

  setDiscountsState(discounts) {
    this.setState({
      productData: {
        ...this.state.productData,
        discounts
      }
    })
  }

  onImagesChange(images) {
    this.setState({
      productData: {
        ...this.state.productData,
        images
      }
    })
  }

  onDiscountChange(discount, field, e) {
    if (field === 'period') {
      discount.start_date = e && e[0] ? moment(e[0]).format('MM/DD/YYYY') : ''
      discount.end_date = e && e[1] ? moment(e[1]).format('MM/DD/YYYY') : ''
    } else {
      discount[field] = e.target.value
    }
    this.setDiscountsState(this.state.productData.discounts.slice(0))
  }

  removeDiscount(discount) {
    const discounts = this.state.productData.discounts.slice(0)
    discounts.splice(discounts.indexOf(discount), 1)
    this.setDiscountsState(discounts)
  }

  addDiscount() {
    const discounts = this.state.productData.discounts.slice(0)
    discounts.push({
      discount: '',
      type: 'General',
      code: '',
      quantity: '',
      start_date: '',
      end_date: ''
    })
    this.setDiscountsState(discounts)
  }

  render() {
    const isIEMode = typeof document['documentMode'] === 'number'
    const isIE10Mode = document['documentMode'] === 10
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    const availableStorages = [
      { label: '8GB', value: '8GB' },
      { label: '16GB', value: '16GB' },
      { label: '32GB', value: '32GB' },
      { label: '64GB', value: '64GB' }
    ]
    const availableColors = [
      { label: 'Black', value: '#000' },
      { label: 'White', value: '#fff' },
      { label: 'Silver', value: 'silver' },
      { label: 'Gray', value: 'gray' },
      { label: 'Green', value: '#5f9ea0' },
      { label: 'Gold', value: '#c5baab' },
      { label: 'Pink', value: 'pink' },
      { label: 'Red', value: 'red' }
    ]
    const availableWarranties = [
      { label: 'Standard - 1 year', value: 'Standard - 1 year' },
      { label: 'Extended - 2 years | $99', value: 'Extended - 2 years | $99' }
    ]
    const availableShippings = [
      { label: 'USA', value: 'USA' },
      { label: 'China', value: 'China' },
      { label: 'France', value: 'France' },
      { label: 'Germany', value: 'Germany' },
      { label: 'UK', value: 'UK' }
    ]
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
          Edit product <span className="text-muted">#{this.state.productData.id}</span>
        </h4>

        <div className="nav-tabs-top nav-responsive-sm">
          <Tabs defaultActiveKey="basic-info">
            <Tab eventKey="basic-info" title="Basic info">
              <Card.Body>

                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control value={this.state.productData.title} onChange={e => this.onValueChange('title', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control value={this.state.productData.price} onChange={e => this.onValueChange('price', e)} />
                  </InputGroup>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Items in stock</Form.Label>
                  <Form.Control value={this.state.productData.in_stock} onChange={e => this.onValueChange('in_stock', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Tax</Form.Label>
                  <InputGroup>
                    <Form.Control value={this.state.productData.tax} onChange={e => this.onValueChange('tax', e)} />
                    <InputGroup.Append>
                      <InputGroup.Text>%</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.productData.status} onChange={e => this.onValueChange('status', e, Number)}>
                    <option value="1">Published</option>
                    <option value="2">Out of stock</option>
                    <option value="3">Pending</option>
                    <option value="4">Hidden</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.productData.category} onChange={e => this.onValueChange('category', e)}>
                    <option value="Computers">Computers</option>
                    <option value="Portable tech">Portable tech</option>
                    <option value="Mobile phones">Mobile phones</option>
                    <option value="Audio">Audio</option>
                    <option value="Photo and video">Photo and video</option>
                    <option value="Video game consoles">Video game consoles</option>
                  </Form.Control>
                </Form.Group>

              </Card.Body>
              <hr className="m-0" />
              <Card.Body>

                <h6 className="small font-weight-semibold mb-4">Options <span className="text-muted font-weight-normal">(depending on category)</span></h6>

                <Form.Group>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.productData.options.brand} onChange={e => this.onOptionsValueChange('brand', e)}>
                    <option value="Apple">Apple</option>
                    <option value="Blueberry">Blueberry</option>
                    <option value="Samsung">Samsung</option>
                    <option value="LG">LG</option>
                    <option value="Asus">Asus</option>
                    <option value="Sony">Sony</option>
                    <option value="Honor">Honor</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Xiaomi">Xiaomi</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Storages</Form.Label>
                  {!isIE10Mode &&
                    <Select className="react-select" classNamePrefix="react-select"
                      isMulti
                      options={availableStorages}
                      value={
                        this.state.productData.options.storages.map(val => availableStorages.find(storage => storage.value === val))
                      }
                      onChange={e => this.onOptionsValueChange('storages', e)}
                    />
                  }
                  {isIE10Mode &&
                    <select className="custom-select" multiple size="5" value={this.state.productData.options.storages} onChange={e => this.onOptionsValueChange('storages', e)}>
                      {availableStorages.map(storage => 
                        <option value={storage.value} key={storage.value}>{storage.label}</option>
                      )}
                    </select>
                  }
                </Form.Group>

                <Form.Group>
                  <Form.Label>Colors</Form.Label>
                  {!isIE10Mode &&
                    <Select className="react-select" classNamePrefix="react-select"
                      isMulti
                      options={availableColors}
                      value={
                        this.state.productData.options.colors.map(val => availableColors.find(color => color.value === val))
                      }
                      formatOptionLabel={option => {
                        return <React.Fragment>
                          <span className="badge badge-dot align-middle position-relative" style={{background: option.value, width: '.5rem', height: '.5rem', top: '-1px'}}></span>&nbsp; {option.label}
                        </React.Fragment>
                      }}
                      onChange={e => this.onOptionsValueChange('colors', e)}
                    />
                  }
                  {isIE10Mode &&
                    <select className="custom-select" multiple size="5" value={this.state.productData.options.colors} onChange={e => this.onOptionsValueChange('colors', e)}>
                      {availableColors.map(color => 
                        <option value={color.value} key={color.value}>{color.label}</option>
                      )}
                    </select>
                  }
                </Form.Group>

                <Form.Group>
                  <Form.Label>Warranties</Form.Label>
                  {!isIE10Mode &&
                    <Select className="react-select" classNamePrefix="react-select"
                      isMulti
                      options={availableWarranties}
                      value={
                        this.state.productData.options.warranties.map(val => availableWarranties.find(warranty => warranty.value === val))
                      }
                      onChange={e => this.onOptionsValueChange('warranties', e)}
                    />
                  }
                  {isIE10Mode &&
                    <select className="custom-select" multiple size="5" value={this.state.productData.options.warranties} onChange={e => this.onOptionsValueChange('warranties', e)}>
                      {availableWarranties.map(warranty => 
                        <option value={warranty.value} key={warranty.value}>{warranty.label}</option>
                      )}
                    </select>
                  }
                </Form.Group>

                <Form.Group>
                  <Form.Label>Ships from</Form.Label>
                  {!isIE10Mode &&
                    <Select className="react-select" classNamePrefix="react-select"
                      isMulti
                      options={availableShippings}
                      value={
                        this.state.productData.options.ships_from.map(val => availableShippings.find(shipping => shipping.value === val))
                      }
                      onChange={e => this.onOptionsValueChange('ships_from', e)}
                    />
                  }
                  {isIE10Mode &&
                    <select className="custom-select" multiple size="5" value={this.state.productData.options.ships_from} onChange={e => this.onOptionsValueChange('ships_from', e)}>
                      {availableShippings.map(shipping => 
                        <option value={shipping.value} key={shipping.value}>{shipping.label}</option>
                      )}
                    </select>
                  }
                </Form.Group>

              </Card.Body>
              <hr className="m-0" />
              <Card.Body>

                <h6 className="small font-weight-semibold mb-4">Meta</h6>

                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control value={this.state.productData.meta.title} onChange={e => this.onMetaValueChange('title', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" value={this.state.productData.meta.description} onChange={e => this.onMetaValueChange('description', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Keywords</Form.Label>
                  <Form.Control value={this.state.productData.meta.keywords} onChange={e => this.onMetaValueChange('keywords', e)} />
                </Form.Group>

              </Card.Body>
            </Tab>
            <Tab eventKey="description" title="Description">
              <Card.Body>

                {/* Set Quill editor's height */}
                <style>
                  {'.product-editor .ql-container { height: 600px }'}
                </style>

                {!isIE10Mode && (
                  <ReactQuill className="product-editor" modules={modules}
                    value={this.state.productData.description}
                    onChange={this.onContentChange} />
                )}

                {/* Fallback */}
                {isIE10Mode && (
                  <Form.Control as="textarea" style={{ height: '600px' }}
                    value={this.state.productData.description}
                    onChange={this.onContentChange} />
                )}

              </Card.Body>
            </Tab>
            <Tab eventKey="discounts" title="Discounts">
              <Card.Body>

                <Table responsive className="product-item-discounts-table">
                  <thead>
                    <tr>
                      <th>Discount</th>
                      <th>Type</th>
                      <th>Code</th>
                      <th>Quantity</th>
                      <th>Period</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.productData.discounts.map((discount, i) =>
                      <tr key={i}>
                        <td>
                          <InputGroup>
                            <Form.Control value={discount.discount} onChange={e => this.onDiscountChange(discount, 'discount', e)} />
                            <InputGroup.Append>
                              <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup.Append>
                          </InputGroup>
                        </td>
                        <td>
                          <Form.Control as="select" className="custom-select" value={discount.type} onChange={e => this.onDiscountChange(discount, 'type', e)}>
                            <option value="General">General</option>
                            <option value="Code">Code</option>
                          </Form.Control>
                        </td>
                        <td>
                          <Form.Control value={discount.code} disabled={discount.type !== 'Code'} onChange={e => this.onDiscountChange(discount, 'code', e)} />
                        </td>
                        <td>
                          <Form.Control value={discount.quantity} onChange={e => this.onDiscountChange(discount, 'quantity', e)} />
                        </td>
                        <td>
                          <Flatpickr
                            placeholder={!isIEMode ? 'Define period' : null}
                            value={[discount.start_date, discount.end_date]}
                            options={{ altInput: true, mode: 'range', animate: !isRTL, dateFormat: 'm/d/Y', altFormat: 'm/d/Y' }}
                            onChange={date => this.onDiscountChange(discount, 'period', date)} />
                        </td>
                        <td>
                          <Button onClick={() => this.removeDiscount(discount)} variant="default md-btn-flat icon-btn" size="sm">
                            <i className="ion ion-md-close"></i>
                          </Button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                <Button variant="outline-primary" onClick={() => this.addDiscount()}>
                  <i className="ion ion-md-add"></i>&nbsp; Add discount
                </Button>

              </Card.Body>
            </Tab>
            <Tab eventKey="images" title="Images">
              <Card.Body>

                <ProductImages images={this.state.productData.images} onChange={this.onImagesChange} />
                <Button variant="outline-primary" className="mt-3">
                  <i className="ion ion-md-cloud-upload"></i>&nbsp; Upload images
                </Button>

              </Card.Body>
            </Tab>
          </Tabs>
        </div>

        <div className="text-right mt-3">
          <Button variant="default">Cancel</Button> &nbsp;
          <Button variant="primary">Save changes</Button>
        </div>

      </div>
    )
  }
}

export default ECommerceProductEdit
