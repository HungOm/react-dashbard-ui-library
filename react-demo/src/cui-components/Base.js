import './CompleteUi.scss'
import React, { Component } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { NavLink } from "react-router-dom"

import CuiTypography from './CuiTypography'
import CuiUtilities from './CuiUtilities'
import CuiButtons from './CuiButtons'
import CuiBadges from './CuiBadges'
import CuiButtonGroups from './CuiButtonGroups'
import CuiButtonDropdowns from './CuiButtonDropdowns'
import CuiDropdowns from './CuiDropdowns'
import CuiSpinners from './CuiSpinners'
import CuiNavs from './CuiNavs'
import CuiPagination from './CuiPagination'
import CuiProgressBars from './CuiProgressBars'
import CuiListGroups from './CuiListGroups'
import CuiAlerts from './CuiAlerts'
import CuiToasts from './CuiToasts'
import CuiTooltipsAndPopovers from './CuiTooltipsAndPopovers'
import CuiModals from './CuiModals'
import CuiBreadcrumbs from './CuiBreadcrumbs'
import CuiFormControls from './CuiFormControls'
import CuiCustomCheckboxesAndRadios from './CuiCustomCheckboxesAndRadios'
import CuiCustomSelect from './CuiCustomSelect'
import CuiCustomRangeSelect from './CuiCustomRangeSelect'
import CuiForms from './CuiForms'
import CuiInputGroups from './CuiInputGroups'
import CuiSwitchers from './CuiSwitchers'
import CuiAppBrand from './CuiAppBrand'
import CuiNavbar from './CuiNavbar'
import CuiSidenav from './CuiSidenav'
import CuiFooter from './CuiFooter'
import CuiTables from './CuiTables'
import CuiMedia from './CuiMedia'
import CuiThumbnails from './CuiThumbnails'
import CuiCards from './CuiCards'
import CuiAccordion from './CuiAccordion'
import CuiCarousel from './CuiCarousel'

class Base extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Base - React Complete UI')
  }

  render() {
    return (
      <div>
        <h1 id="main-header" className="bg-dark text-white">
          <span id="main-header-path">React Complete UI &nbsp;/&nbsp;</span>
          <DropdownButton title="Base" variant="link">
            <Dropdown.Item as={NavLink} to="/complete-ui/plugins" className="dropdown-item text-big py-2 px-4">
              <span className="d-inline-block py-1 px-2">Plugins</span>
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/complete-ui/charts" className="dropdown-item text-big py-2 px-4">
              <span className="d-inline-block py-1 px-2">Charts</span>
            </Dropdown.Item>
          </DropdownButton>
        </h1>

        <CuiTypography />
        <CuiUtilities />
        <CuiButtons />
        <CuiBadges />
        <CuiButtonGroups />
        <CuiButtonDropdowns />
        <CuiDropdowns />
        <CuiNavs />
        <CuiSpinners />
        <CuiPagination />
        <CuiProgressBars />
        <CuiListGroups />
        <CuiAlerts />
        <CuiToasts />
        <CuiTooltipsAndPopovers />
        <CuiModals />
        <CuiBreadcrumbs />
        <CuiFormControls />
        <CuiCustomCheckboxesAndRadios />
        <CuiCustomSelect />
        <CuiCustomRangeSelect />
        <CuiForms />
        <CuiInputGroups />
        <CuiSwitchers />
        <CuiAppBrand />
        <CuiNavbar />
        <CuiSidenav />
        <CuiFooter />
        <CuiTables />
        <CuiMedia />
        <CuiThumbnails />
        <CuiCards />
        <CuiAccordion />
        <CuiCarousel />
      </div>
    )
  }
}

export default Base
