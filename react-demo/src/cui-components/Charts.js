import './CompleteUi.scss'
import React, { Component } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import CuiGoogleMapReact from './CuiGoogleMapReact'
import CuiReactChartjs2 from './CuiReactChartjs2'
import CuiRecharts from './CuiRecharts'
import CuiReactSparklines from './CuiReactSparklines'

class Charts extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Charts - React Complete UI')
  }

  render() {
    return (
      <div>
        <h1 id="main-header" className="bg-dark text-white">
          <span id="main-header-path">React Complete UI &nbsp;/&nbsp;</span>
          <DropdownButton title="Charts" variant="link">
            <Dropdown.Item as={NavLink} to="/complete-ui/base" className="dropdown-item text-big py-2 px-4">
              <span className="d-inline-block py-1 px-2">Base</span>
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/complete-ui/plugins" className="dropdown-item text-big py-2 px-4">
              <span className="d-inline-block py-1 px-2">Plugins</span>
            </Dropdown.Item>
          </DropdownButton>
        </h1>

        <CuiGoogleMapReact />
        <CuiReactChartjs2 />
        <CuiRecharts />
        <CuiReactSparklines />
      </div>
    )
  }
}

export default Charts
