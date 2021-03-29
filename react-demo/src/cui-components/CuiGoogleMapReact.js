import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

class CuiGoogleMapReact extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">google-map-react</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/google-map-react/google-map-react" className="ui-block-description">https://github.com/google-map-react/google-map-react</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example">
          <div style={{ height: '300px', width: '100%' }}>
            {/* NOTE: When using Google Maps on your own site you MUST get your own API key:
             https://developers.google.com/maps/documentation/javascript/get-api-key
             After you got the key paste it in the URL below. */}
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCHtdj4L66c05v1UZm-nte1FzUEAN6GKBI' }}
              defaultCenter={{lat: -12.043333, lng: -77.028333}}
              defaultZoom={7}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CuiGoogleMapReact
