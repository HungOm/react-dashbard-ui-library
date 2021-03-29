import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

class GoogleMapReactComponent extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Google Map React - Charts')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Charts /</span> Google Map React
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-5" />

        <div style={{ height: '300px', width: '100%' }}>
          {/* NOTE: When using Google Maps on your own site you MUST get your own API key:
             https://developers.google.com/maps/documentation/javascript/get-api-key
             After you got the key paste it in the URL below. */}
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCHtdj4L66c05v1UZm-nte1FzUEAN6GKBI' }}
            defaultCenter={{ lat: -12.043333, lng: -77.028333 }}
            defaultZoom={7}
          />
        </div>
      </div>
    )
  }
}

export default GoogleMapReactComponent
