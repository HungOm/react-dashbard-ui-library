import React, { Component } from 'react'
import { Card, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

class Vacancies extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Vacancies - Pages')

    this.state = {
      vacanciesData: [{
        title: 'Account Director',
        description: 'Donec dui risus, sagittis non congue vitae, auctor ornare ex. Aliquam hendrerit, odio vel dictum volutpat, nulla sapien venenatis tellus, vel aliquam enim eros vel ligula. Duis dictum, tellus et feugiat viverra, justo velit vestibulum ex, nec malesuada ex ligula consectetur mi.',
        department: 'Marketing',
        location: 'UK wide',
        employment: 'Full-time'
      }, {
        title: 'Java Developer',
        description: 'Morbi dolor ex, cursus vitae lectus in, auctor ultricies metus. Sed quis nulla lacus. Maecenas et lectus massa. Cras porta mauris nec nibh tincidunt, non porttitor elit condimentum. Etiam quis augue condimentum, luctus purus et, porttitor enim. Pellentesque quam sapien, lobortis eget dolor non, ultrices fermentum purus.',
        department: 'Backend Dev',
        location: 'New York, US',
        employment: 'Full-time'
      }, {
        title: 'Infrastructure Administrator',
        description: 'Nulla venenatis turpis vel ante accumsan cursus. Cras ultrices ornare neque eu pharetra. In dapibus sollicitudin urna sed suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vel sapien sodales, pharetra nisl quis, molestie odio. Donec ullamcorper, tortor sed iaculis bibendum, ante ligula dignissim neque, eget cursus nibh arcu quis est. Pellentesque auctor aliquet arcu at placerat. Duis sodales porta eros vitae gravida. Duis malesuada consectetur tristique.',
        department: 'Service Dev',
        location: 'Tokyo, Japan',
        employment: 'Part-time'
      }, {
        title: 'Product Designer',
        description: 'Duis accumsan ultrices tortor, nec tristique tortor eleifend a. Nunc convallis tempor dignissim. Etiam maximus erat a nunc interdum, ac mattis eros consequat. Fusce urna erat, fringilla at faucibus a, porttitor eget tortor. Sed pharetra massa id molestie sagittis. Etiam hendrerit quis dolor ut viverra.',
        department: 'Design',
        employment: 'Freelance'
      }, {
        title: 'Frontend Developer',
        description: 'Quisque convallis dolor quis malesuada tempus. Fusce lacinia id ex id fringilla. Nunc sit amet tellus non quam efficitur convallis. Morbi elementum ex sed nisl mattis blandit.',
        department: 'Frontend Dev',
        location: 'New York, US',
        employment: 'Full-time'
      }]
    }
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>

        <div className="container px-0">
          <h2 className="text-center font-weight-bolder pt-5">
            Find a Job You Will Love
          </h2>
          <div className="text-center text-muted text-big mx-auto mt-3" style={{ maxWidth: '500px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem erat, dapibus et mauris dictum, consectetur blandit ante.
          </div>

          <Card className="mt-5">
            {this.state.vacanciesData.map((vacancy, index) =>
              <div key={vacancy.title}>

                <div className="p-4 p-md-5">
                  <a href="#d" onClick={this.prevent} className="text-body text-large font-weight-semibold">{vacancy.title}</a>
                  <div className="d-flex flex-wrap mt-3">
                    {vacancy.department &&
                      <OverlayTrigger overlay={<Tooltip>Department</Tooltip>}>
                        <div className="mr-3"><i className="ion ion-md-business text-light"></i>&nbsp; {vacancy.department}</div>
                      </OverlayTrigger>
                    }
                    {vacancy.location &&
                      <OverlayTrigger overlay={<Tooltip>Location</Tooltip>}>
                        <div className="mr-3"><i className="ion ion-md-pin text-light"></i>&nbsp; {vacancy.location}</div>
                      </OverlayTrigger>
                    }
                    {vacancy.employment &&
                      <OverlayTrigger overlay={<Tooltip>Employment</Tooltip>}>
                        <div className="mr-3"><i className="ion ion-md-time text-primary"></i>&nbsp; {vacancy.employment}</div>
                      </OverlayTrigger>
                    }
                  </div>
                  <div className="mt-3 mb-4">
                    {vacancy.description}
                  </div>
                  <Button variant="primary rounded-pill">Learn more</Button>
                </div>
                {index !== (this.state.vacanciesData.length - 1) && <hr className="border-light m-0" />}

              </div>
            )}
          </Card>
        </div>

      </div>
    )
  }
}

export default Vacancies
