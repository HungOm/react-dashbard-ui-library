import React, { Component } from 'react'
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesBars,
  SparklinesReferenceLine
} from 'react-sparklines'

const data = [ 25, 17, 13, 9, 2, 5, 17, 19, 15, 20, 26, 12, 7, 29, 9, 13, 4, 13, 22, 17 ]

class CuiReactSparklines extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-sparklines</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/borisyankov/react-sparklines" className="ui-block-description">https://github.com/borisyankov/react-sparklines</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <Sparklines data={data} width={300} height={30}>
            <SparklinesLine color="#fa7e17" />
          </Sparklines>

          <Sparklines data={data} width={300} height={30}>
            <SparklinesLine color="#56b45d" />
            <SparklinesSpots style={{ fill: "#56b45d" }} />
          </Sparklines>

          <Sparklines data={data} width={300} height={30}>
            <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
            <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
          </Sparklines>

          <Sparklines data={data} width={300} height={30}>
            <SparklinesLine />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
        </div>
      </div>
    )
  }
}

export default CuiReactSparklines
