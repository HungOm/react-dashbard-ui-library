import React, { Component } from 'react'
import { Form, InputGroup, Nav, Button, ListGroup, Pagination, Media, Row, Col, Card } from 'react-bootstrap'
import '../../vendor/styles/pages/search.scss'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Search results - Pages')

    this.onSearchQueryChange = this.onSearchQueryChange.bind(this)
    this.setCurTab = this.setCurTab.bind(this)

    this.state = {
      curTab: 'pages',
      searchQuery: 'Advertisers embrace rich media format',

      searchData: {
        pages: [{
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: 'http://example.com/pages/234',
          rating: 3.5,
          votes: 36,
          text: 'Etiam diam tellus, mattis eget dui ac, consequat lobortis erat. Sed convallis, justo nec congue luctus, sapien massa egestas ligula, sed bibendum mi nibh eu dolor. Nullam purus arcu, iaculis ac ligula ut, rutrum facilisis ex.',

          sublinks: [
            { title: 'Morbi maximus justo', text: 'Nam velit nulla, mollis eu malesuada at, tempus ut libero.' },
            { title: 'Quisque imperdiet', text: 'Phasellus suscipit aliquet risus, molestie ornare tellus.' },
            { title: 'Ligula ante', text: 'Fusce rhoncus lectus auctor.' },
            { title: 'Sit amet', text: 'Interdum eros eu.' },
            { title: 'Suscipit velit', text: 'Tempor dui eget finibus.' }
          ]
        }, {
          title: 'Morbi porta efficitur mauris, eu porttitor tortor rutrum viverra.',
          link: 'http://example.com/pages/456',
          rating: 4.5,
          votes: 68,
          text: 'Aliquam finibus enim sit amet tellus maximus convallis. Quisque dignissim, augue et hendrerit congue, nisl ante dignissim lectus, a condimentum felis quam eu justo.'
        }, {
          title: 'Nulla condimentum felis quis scelerisque luctus.',
          text: 'Nam et velit at odio interdum vehicula vel quis ex. Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit, nec placerat diam purus eget dui.'
        }, {
          title: 'Donec vestibulum nulla at est fermentum, quis consectetur lectus dapibus.',
          link: 'http://example.com/pages/789',
          text: 'Sed et urna egestas metus viverra convallis at ac lectus. Nam sodales, lacus ut venenatis pulvinar, felis velit posuere tortor, imperdiet dapibus justo ipsum a mi.'
        }, {
          title: 'Sed mattis quam ut tellus auctor, sit amet facilisis libero porta.'
        }, {
          title: 'In hac habitasse platea dictumst. Maecenas eu varius enim, eget faucibus massa.',
          link: 'http://example.com/pages/561'
        }, {
          title: 'Donec nec sapien id neque accumsan faucibus sed at lorem.',
          link: 'http://example.com/pages/783',
          text: 'Morbi ultricies fermentum tortor a tristique. Proin porta nibh in fermentum fermentum. Sed aliquet dui tempor orci aliquet, in egestas sapien porta. In sollicitudin dui nec nulla dapibus consequat.'
        }, {
          title: 'In sollicitudin dui nec nulla dapibus consequat.',
          link: 'http://example.com/pages/1246',
          text: 'Phasellus vehicula nibh at nunc sagittis, a gravida purus tincidunt. Nulla tempus augue odio, nec mollis nunc vehicula eget.'
        }, {
          title: 'Donec gravida erat quis odio convallis imperdiet.',
          link: 'http://example.com/pages/444',
          text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam laoreet turpis sed leo gravida interdum. Aliquam efficitur tempor enim ac pretium. Integer scelerisque dui sed ex laoreet congue.'
        }],
        people: [{
          avatar: '1-small.png',
          name: 'Mike Greene',
          username: 'mgreene',
          following: false
        }, {
          avatar: '2-small.png',
          name: 'Leon Wilson',
          username: 'lwilson',
          following: true
        }, {
          avatar: '3-small.png',
          name: 'Allie Rodriguez',
          username: 'arodriguez',
          following: false
        }, {
          avatar: '4-small.png',
          name: 'Kenneth Frazier',
          username: 'kfrazier',
          following: false
        }, {
          avatar: '5-small.png',
          name: 'Nellie Maxwell',
          username: 'nmaxwell',
          following: false
        }, {
          avatar: '6-small.png',
          name: 'Mae Gibson',
          username: 'mgibson',
          following: true
        }, {
          avatar: '7-small.png',
          name: 'Alice Hampton',
          username: 'ahampton',
          following: false
        }, {
          avatar: '8-small.png',
          name: 'Hallie Lewis',
          username: 'hlewis',
          following: false
        }, {
          avatar: '9-small.png',
          name: 'Amanda Warner',
          username: 'awarner',
          following: false
        }, {
          avatar: '10-small.png',
          name: 'Wayne Morgan',
          username: 'wmorgan',
          following: true
        }, {
          avatar: '11-small.png',
          name: 'Belle Ross',
          username: 'bross',
          following: false
        }, {
          avatar: '12-small.png',
          name: 'Arthur Duncan',
          username: 'aduncan',
          following: false
        }],
        images: [{
          path: 'img/bg/1.jpg',
          title: 'Lorem ipsum dolor sit amet'
        }, {
          path: 'img/bg/2.jpg',
          title: 'Proin finibus commodo vestibulum'
        }, {
          path: 'img/bg/3.jpg',
          title: 'Proin bibendum id ante et commodo'
        }, {
          path: 'img/bg/4.jpg',
          title: 'Sed sollicitudin felis et urna posuere, ut euismod velit facilisis'
        }, {
          path: 'img/bg/5.jpg',
          title: 'Lorem ipsum dolor sit amet'
        }, {
          path: 'img/bg/6.jpg',
          title: 'Fusce rhoncus lectus auctor'
        }, {
          path: 'img/bg/7.jpg',
          title: 'Pellentesque ullamcorper tempor dui eget finibus'
        }, {
          path: 'img/bg/8.jpg',
          title: 'Donec vestibulum nulla at est fermentum'
        }, {
          path: 'img/bg/9.jpg',
          title: 'Nulla condimentum felis quis scelerisque luctus'
        }, {
          path: 'img/bg/10.jpg',
          title: 'Nam et velit at odio interdum vehicula vel quis ex'
        }, {
          path: 'img/bg/11.jpg',
          title: 'Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit'
        }, {
          path: 'img/bg/12.jpg',
          title: 'In hac habitasse platea dictumst'
        }],
        videos: [{
          preview: 'img/bg/1.jpg',
          title: 'Lorem ipsum dolor sit amet',
          duration: '12:34',
          views: 1234,
          likes: 256,
          reposts: 32
        }, {
          preview: 'img/bg/2.jpg',
          title: 'Proin finibus commodo vestibulum',
          duration: '12:34',
          views: 1235,
          likes: 257,
          reposts: 33
        }, {
          preview: 'img/bg/3.jpg',
          title: 'Proin bibendum id ante et commodo',
          duration: '12:35',
          views: 1236,
          likes: 258,
          reposts: 34
        }, {
          preview: 'img/bg/4.jpg',
          title: 'Sed sollicitudin felis et urna posuere, ut euismod velit facilisis',
          duration: '12:36',
          views: 1237,
          likes: 259,
          reposts: 35
        }, {
          preview: 'img/bg/5.jpg',
          title: 'Lorem ipsum dolor sit amet',
          duration: '12:37',
          views: 1238,
          likes: 260,
          reposts: 36
        }, {
          preview: 'img/bg/6.jpg',
          title: 'Fusce rhoncus lectus auctor',
          duration: '12:38',
          views: 1239,
          likes: 261,
          reposts: 37
        }, {
          preview: 'img/bg/7.jpg',
          title: 'Pellentesque ullamcorper tempor dui eget finibus',
          duration: '12:39',
          views: 1240,
          likes: 262,
          reposts: 38
        }, {
          preview: 'img/bg/8.jpg',
          title: 'Donec vestibulum nulla at est fermentum',
          duration: '12:40',
          views: 1241,
          likes: 263,
          reposts: 39
        }, {
          preview: 'img/bg/9.jpg',
          title: 'Nulla condimentum felis quis scelerisque luctus',
          duration: '12:41',
          views: 1242,
          likes: 264,
          reposts: 40
        }, {
          preview: 'img/bg/10.jpg',
          title: 'Nam et velit at odio interdum vehicula vel quis ex',
          duration: '12:42',
          views: 1243,
          likes: 265,
          reposts: 41
        }, {
          preview: 'img/bg/11.jpg',
          title: 'Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit',
          duration: '12:43',
          views: 1244,
          likes: 266,
          reposts: 42
        }, {
          preview: 'img/bg/12.jpg',
          title: 'In hac habitasse platea dictumst',
          duration: '12:44',
          views: 1245,
          likes: 267,
          reposts: 43
        }]
      }
    }
  }

  onSearchQueryChange(e) {
    this.setState({
      searchQuery: e.target.value
    })
  }

  setCurTab(curTab) {
    this.setState({
      curTab
    })
  }

  uiStarClass(i, rating) {
    if (rating > (i - 1) && rating < i) return 'half-filled'
    if (rating >= i) return 'filled'
    return ''
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>

        <div className="py-1 mb-2">
          <InputGroup>
            <Form.Control value={this.state.searchQuery} onChange={this.onSearchQueryChange} />
            <InputGroup.Append>
              <Button variant="primary"><i className="ion ion-ios-search"></i>&nbsp; Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>

        <Nav variant="tabs tabs-alt" className="search-nav container-m-nx container-p-x mb-4" activeKey={this.state.curTab} onSelect={this.setCurTab}>
          <Nav.Link eventKey="pages"><i className="ion ion-md-copy"></i>&nbsp; Website</Nav.Link>
          <Nav.Link eventKey="people"><i className="ion ion-ios-people"></i>&nbsp; People</Nav.Link>
          <Nav.Link eventKey="images"><i className="ion ion-md-images"></i>&nbsp; Images</Nav.Link>
          <Nav.Link eventKey="videos"><i className="ion ion-md-film"></i>&nbsp; Videos</Nav.Link>
        </Nav>

        {this.state.curTab === 'pages' && <div>

          <Card>
            <ListGroup variant="flush">

              {this.state.searchData.pages.map(page =>
                <ListGroup.Item key={page.title + page.text} className="py-4">
                  <a href="#d" onClick={this.prevent} className="text-big">{page.title}</a>

                  {(page.link || page.rating) && <div className="small mt-1">
                    {page.link && <a href="#d" onClick={this.prevent} className="text-success">{page.link}</a>}
                    {page.link && page.rating && <span>&nbsp; <span className="text-muted">·</span> &nbsp;</span>}
                    {page.rating && <span>
                      <div className="ui-stars">
                        {[1, 2, 3, 4, 5].map(i =>
                          <div className={`ui-star ${this.uiStarClass(i, page.rating)}`} key={i}>
                            <i className="ion ion-md-star"></i>
                            <i className="ion ion-md-star"></i>
                          </div>
                        )}
                      </div>
                      &nbsp;
                      <span className="text-muted">{page.votes} votes</span>
                    </span>}
                  </div>}

                  {page.text && <div className="mt-2">
                    {page.text}
                  </div>}

                  {page.sublinks && <div className="ui-bordered px-3 pt-3 mt-3">
                    <Row>
                      {page.sublinks.map(sublink =>
                        <Col sm={6} md={4} key={sublink.title} className="pb-3">
                          <a href="#d" onClick={this.prevent} className="text-big">{sublink.title}</a>
                          <div className="mt-1">{sublink.text}</div>
                        </Col>
                      )}
                    </Row>
                  </div>}
                </ListGroup.Item>
              )}

            </ListGroup>
          </Card>
          
          <Pagination className="mt-3">
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>

        </div>}
        {this.state.curTab === 'people' && <div>

          <Row>

            {this.state.searchData.people.map(user =>
              <Col md={6} xl={4} key={user.username}>
                <Card className="card-condenced mb-4">
                  <Card.Body className="media align-items-center">
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/${user.avatar}`} alt="User" className="ui-w-40 rounded-circle" />
                    <Media.Body className="ml-3">
                      <a href="#d" onClick={this.prevent} className="text-body font-weight-semibold mb-2">{user.name}</a>
                      <div className="text-muted small">@{user.username}</div>
                    </Media.Body>
                    {user.following
                      ? <Button variant="success rounded-pill md-btn-flat" size="sm" className="d-block">Following</Button>
                      : <Button variant="outline-primary rounded-pill md-btn-flat" size="sm" className="d-block">Follow</Button>
                    }
                  </Card.Body>
                </Card>
              </Col>
            )}

          </Row>

          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>

        </div>}
        {this.state.curTab === 'images' && <div>

          <Form.Row>

            {this.state.searchData.images.map(image =>
              <Col sm={6} xl={4} key={image.path} className="mb-2">
                <a href="#d" onClick={this.prevent} className="ui-rect-60 ui-bg-cover ui-bg-overlay-container text-white" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/${image.path}')` }}>
                  <div className="ui-bg-overlay bg-dark opacity-25"></div>

                  {image.title && <div className="d-flex align-items-end ui-rect-content p-3">
                    <div className="flex-shrink-1 font-weight-semibold">{image.title}</div>
                  </div>}
                </a>
              </Col>
            )}

          </Form.Row>

          <Pagination className="mt-3">
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>

        </div>}
        {this.state.curTab === 'videos' && <div>

          <Row>

            {this.state.searchData.videos.map(video =>
              <Col sm={6} md={4} xl={3} key={video.preview} className="mb-4">
                <a href="#d" onClick={this.prevent} className="ui-rect-60 ui-bg-cover text-white" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/${video.preview}')` }}>
                  <div className="d-flex justify-content-end align-items-end ui-rect-content p-2">
                    <div className="bg-dark rounded text-white small font-weight-semibold line-height-1 p-1">{video.duration}</div>
                  </div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-block text-body mt-2">{video.title}</a>
                <div>
                  <span className="text-muted small"> {video.views} views</span> &nbsp;
                  <a href="#d" onClick={this.prevent} className="text-muted small"> {video.likes} likes</a> &nbsp;
                  <span className="text-muted small"> {video.reposts} reposts</span>
                </div>
              </Col>
            )}

          </Row>

          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>

        </div>}

      </div>
    )
  }
}

export default SearchResults
