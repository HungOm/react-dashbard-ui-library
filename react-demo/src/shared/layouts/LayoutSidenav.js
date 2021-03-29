import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Sidenav from '../../vendor/libs/sidenav'
import layoutHelpers from './helpers'

class LayoutSidenav extends Component {
  layoutSidenavClasses() {
    let bg = this.props.sidenavBg

    if (this.props.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
      bg = bg
        .replace(' sidenav-dark', '')
        .replace(' sidenav-light', '')
        .replace('-darker', '')
        .replace('-dark', '')
    }

    return `bg-${bg} ` + (
      this.props.orientation !== 'horizontal'
        ? 'layout-sidenav'
        : 'layout-sidenav-horizontal container-p-x flex-grow-0'
    )
  }

  toggleSidenav(e) {
    e.preventDefault()
    layoutHelpers.toggleCollapsed()
  }

  isMenuActive(url) {
    return this.props.location.pathname.indexOf(url) === 0
  }

  isMenuOpen(url) {
    return this.props.location.pathname.indexOf(url) === 0 && this.props.orientation !== 'horizontal'
  }

  render() {
    return (
      <Sidenav orientation={this.props.orientation} className={this.layoutSidenavClasses()}>

        {/* Brand demo (see src/demo.css) */}
        {this.props.orientation !== 'horizontal' && (
          <React.Fragment>
            <div className="app-brand demo">
              <span className="app-brand-logo demo bg-primary">
                <svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stopOpacity=".25" offset="0"></stop><stop stopOpacity=".1" offset=".3"></stop><stop stopOpacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlinkHref="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlinkHref="#a"></linearGradient></defs><path style={{fill: '#fff'}} transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
              </span>
              <Link to="/" className="app-brand-text demo sidenav-text font-weight-normal ml-2">Appwork</Link>
              <a href="#toggle" className="layout-sidenav-toggle sidenav-link text-large ml-auto" onClick={this.toggleSidenav}>
                <i className="ion ion-md-menu align-middle"></i>
              </a>
            </div>
            <Sidenav.Divider className="mt-0" />
          </React.Fragment>
        )}

        {/* Links */}
        <div className={`sidenav-inner ${this.props.orientation !== 'horizontal' ? 'py-1' : ''}`}>

          {/* Dashboards */}
          <Sidenav.Menu icon="ion ion-md-speedometer" linkText="Dashboards" active={this.isMenuActive('/dashboards')} open={this.isMenuOpen('/dashboards')}>
            <Sidenav.RouterLink to="/dashboards/dashboard-1">Dashboard 1</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/dashboards/dashboard-2">Dashboard 2</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/dashboards/dashboard-3">Dashboard 3</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/dashboards/dashboard-4">Dashboard 4</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/dashboards/dashboard-5">Dashboard 5</Sidenav.RouterLink>
          </Sidenav.Menu>

          {/* Layouts */}
          <Sidenav.Menu icon="ion ion-ios-albums" linkText="Layouts" active={this.isMenuActive('/layouts')} open={this.isMenuOpen('/layouts')}>
            <Sidenav.RouterLink to="/layouts/options">Layout options</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/helpers">Layout helpers</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/layout-1">Layout 1</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/layout-1-flex">Layout 1 (Flex)</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/layout-2">Layout 2</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/layout-2-flex">Layout 2 (Flex)</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/without-navbar">Without navbar</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/without-navbar-flex">Without navbar (Flex)</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/without-sidenav">Without sidenav</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/horizontal-sidenav">Horizontal sidenav</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/layouts/blank">Blank</Sidenav.RouterLink>
          </Sidenav.Menu>

          <Sidenav.Divider className="mb-1" />
          <Sidenav.Header className="small font-weight-semibold">ELEMENTS</Sidenav.Header>

          <Sidenav.RouterLink to="/typography" icon="ion ion-md-quote">Typography</Sidenav.RouterLink>

          {/* Layouts */}
          <Sidenav.Menu icon="ion ion-md-cube" linkText="User inteface" active={this.isMenuActive('/ui')} open={this.isMenuOpen('/ui')}>
            <Sidenav.RouterLink to="/ui/buttons">Buttons</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/badges">Badges</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/dropdowns">Dropdowns</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/navs">Navs</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/pagination-and-breadcrumbs">Pagination and breadcrumbs</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/progress-bars">Progress bars</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/list-groups">List groups</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/notifications">Notifications</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/modals">Modals</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/tooltips-and-popovers">Tooltips and popovers</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/thumbnails">Thumbnails</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/cards">Cards</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/accordion">Accordion</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/app-brand">App brand</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/navbar">Navbar</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/sidenav">Sivenav</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/footer">Footer</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/carousel">Carousel</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/lightbox">Lightbox</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/drag-and-drop">Drag&amp;Drop</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/treeview">Treeview</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/react-avatar-editor">React Avatar Editor</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/react-big-calendar">React Big Calendar</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/ui/spinners">Spinners</Sidenav.RouterLink>
          </Sidenav.Menu>

          {/* Forms */}
          <Sidenav.Menu icon="ion ion-md-switch" linkText="Forms" active={this.isMenuActive('/forms')} open={this.isMenuOpen('/forms')}>
            <Sidenav.RouterLink to="/forms/layouts-and-elements">Layouts and elements</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/controls">Controls</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/custom-controls">Custom controls</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/input-groups">Input groups</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/switchers">Switchers</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/input-spinner">Input spinner</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/sliders">Sliders</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/selects-and-tags">Selects and tags</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/pickers">Pickers</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/editors">Editors</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/file-upload">File upload</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/react-stepzilla">React Stepzilla</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/react-bootstrap-typeahead">React Bootstrap Typeahead</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/forms/extras">Extras</Sidenav.RouterLink>
          </Sidenav.Menu>

          {/* Tables */}
          <Sidenav.Menu icon="ion ion-md-grid" linkText="Tables" active={this.isMenuActive('/tables')} open={this.isMenuOpen('/tables')}>
            <Sidenav.RouterLink to="/tables/bootstrap">Bootstrap</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/tables/react-table">React Table</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/tables/react-bootstrap-table-2">React Bootstrap Table 2</Sidenav.RouterLink>
          </Sidenav.Menu>

          {/* Charts */}
          <Sidenav.Menu icon="ion ion-md-pie" linkText="Charts" active={this.isMenuActive('/charts')} open={this.isMenuOpen('/charts')}>
            <Sidenav.RouterLink to="/charts/google-map-react">Google Map React</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/charts/react-chartjs-2">React Chartjs 2</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/charts/recharts">Recharts</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/charts/react-sparklines">React Sparklines</Sidenav.RouterLink>
          </Sidenav.Menu>

          {/* Icons */}
          <Sidenav.Menu icon="ion ion-ios-heart" linkText="Icons" active={this.isMenuActive('/icons')} open={this.isMenuOpen('/icons')}>
            <Sidenav.RouterLink to="/icons/font-awesome-5">Font Awesome 5</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/icons/ionicons">Ionicons</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/icons/linearicons">Linearicons</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/icons/open-iconic">Open Iconic</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/icons/stroke-icons-7">Stroke Icons 7</Sidenav.RouterLink>
          </Sidenav.Menu>

          {/* Miscellaneous */}
          <Sidenav.Menu icon="ion ion-ios-flask" linkText="Miscellaneous" active={this.isMenuActive('/miscellaneous')} open={this.isMenuOpen('/miscellaneous')}>
            <Sidenav.RouterLink to="/miscellaneous/brand-colors">Brand colors</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/miscellaneous/react-masonry-component">React Masonry Component</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/miscellaneous/spinkit">SpinKit</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/miscellaneous/react-ladda">React Ladda</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/miscellaneous/numeral">Numeral</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/miscellaneous/react-idle-timer">React Idle Timer</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/miscellaneous/react-perfect-scrollbar">React Perfect Scrollbar</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/miscellaneous/react-clipboardjs">React Clipboardjs</Sidenav.RouterLink>
          </Sidenav.Menu>

          <Sidenav.Divider className="mb-1" />
          <Sidenav.Header className="small font-weight-semibold">EXTRAS</Sidenav.Header>

          {/* Pages */}
          <Sidenav.Menu icon="ion ion-md-document" linkText="Pages" badgeText="59" badgeVariant="primary" active={this.isMenuActive('/pages')} open={this.isMenuOpen('/pages')}>
            <Sidenav.Menu linkText="Articles" active={this.isMenuActive('/pages/articles')} open={this.isMenuOpen('/pages/articles')}>
              <Sidenav.RouterLink to="/pages/articles/list">List</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/articles/edit">Edit</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Authentication" active={this.isMenuActive('/pages/authentication')} open={this.isMenuOpen('/pages/authentication')}>
              <Sidenav.RouterLink to="/pages/authentication/login-v1">Login v1</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/register-v1">Register v1</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/login-v2">Login v2</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/register-v2">Register v2</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/login-v3">Login v3</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/register-v3">Register v3</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/login-and-register">Login + register</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/lock-screen-v1">Lock screen v1</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/lock-screen-v2">Lock screen v2</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/password-reset">Password reset</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/authentication/email-confirm">Email confirm</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Education" active={this.isMenuActive('/pages/education')} open={this.isMenuOpen('/pages/education')}>
              <Sidenav.RouterLink to="/pages/education/courses-v1">Courses v1</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/education/courses-v2">Courses v2</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="E-commerce" active={this.isMenuActive('/pages/e-commerce')} open={this.isMenuOpen('/pages/e-commerce')}>
              <Sidenav.RouterLink to="/pages/e-commerce/product-list">Product list</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/e-commerce/product-item">Product item</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/e-commerce/product-edit">Product edit</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/e-commerce/order-list">Order list</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/e-commerce/order-detail">Order detail</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Forums" active={this.isMenuActive('/pages/forums')} open={this.isMenuOpen('/pages/forums')}>
              <Sidenav.RouterLink to="/pages/forums/list">List</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/forums/threads">Threads</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/forums/discussion">Discussion</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Messages v1" active={this.isMenuActive('/pages/messages-v1')} open={this.isMenuOpen('/pages/messages-v1')}>
              <Sidenav.RouterLink to="/pages/messages-v1/list">List</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/messages-v1/item">Item</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/messages-v1/compose">Compose</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Messages v2" active={this.isMenuActive('/pages/messages-v2')} open={this.isMenuOpen('/pages/messages-v2')}>
              <Sidenav.RouterLink to="/pages/messages-v2/list">List</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/messages-v2/item">Item</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/messages-v2/compose">Compose</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Messages v3" active={this.isMenuActive('/pages/messages-v3')} open={this.isMenuOpen('/pages/messages-v3')}>
              <Sidenav.RouterLink to="/pages/messages-v3/list">List</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/messages-v3/item">Item</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/messages-v3/compose">Compose</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Projects" active={this.isMenuActive('/pages/projects')} open={this.isMenuOpen('/pages/projects')}>
              <Sidenav.RouterLink to="/pages/projects/list">List</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/projects/item">Item</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Tickets" active={this.isMenuActive('/pages/tickets')} open={this.isMenuOpen('/pages/tickets')}>
              <Sidenav.RouterLink to="/pages/tickets/list">List</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/tickets/edit">Edit</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Users" active={this.isMenuActive('/pages/users')} open={this.isMenuOpen('/pages/users')}>
              <Sidenav.RouterLink to="/pages/users/list">List</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/users/view">View</Sidenav.RouterLink>
              <Sidenav.RouterLink to="/pages/users/edit">Edit</Sidenav.RouterLink>
            </Sidenav.Menu>
            <Sidenav.RouterLink to="/pages/account-settings">Account settings</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/chat">Chat</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/clients">Clients</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/contacts">Contacts</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/faq">FAQ</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/file-manager">File manager</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/gallery">Gallery</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/help-center">Help center</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/invoice">Invoice</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/kanban-board">Kanban board</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/pricing">Pricing</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/profile-v1">Profile v1</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/profile-v2">Profile v2</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/search-results">Search results</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/task-list">Task list</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/teams">Teams</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/vacancies">Vacancies</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/pages/voting">Voting</Sidenav.RouterLink>
          </Sidenav.Menu>

          {/* Complete UI */}
          <Sidenav.Menu icon="ion ion-logo-buffer" linkText="Complete UI">
            <Sidenav.RouterLink to="/complete-ui/base">Base</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/complete-ui/plugins">Plugins</Sidenav.RouterLink>
            <Sidenav.RouterLink to="/complete-ui/charts">Charts</Sidenav.RouterLink>
          </Sidenav.Menu>

          {/* ONLY_DEMO */}
          <Sidenav.Menu icon="ion ion-ios-briefcase" linkText="UI Kit">
            <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/uikit/base.html">Base</Sidenav.Link>
            <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/uikit/company.html">Company</Sidenav.Link>
            <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/uikit/dashboard.html">Dashboard</Sidenav.Link>
            <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/uikit/e-commerce.html">E-Commerce</Sidenav.Link>
            <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/uikit/headers-and-footers.html">Headers &amp; Footers</Sidenav.Link>
            <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/uikit/magazine.html">Magazine</Sidenav.Link>
            <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/uikit/social.html">Social</Sidenav.Link>
          </Sidenav.Menu>

          <Sidenav.Menu icon="ion ion-md-gift" linkText="Extra pages">
            <Sidenav.Menu linkText="Blog">
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/blog.html">Index</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/blog-article.html">Article</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="E-mail templates">
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/email-confirmation.html">Confirmation</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/email-invoice.html">Invoice</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/email-password-reset.html">Password reset</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Errors">
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/404-1.html">404 v1</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/500-1.html">500 v1</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/404-2.html">404 v2</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/500-2.html">500 v2</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Landings">
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/landing-1.html">Landing v1</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/landing-2.html">Landing v2</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/landing-3.html">Landing v3</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/landing-4.html">Landing v4</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Portfolio">
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/portfolio.html">Index</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/portfolio-item-1.html">Item v1</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/portfolio-item-2.html">Item v2</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/portfolio-blog.html">Blog</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/portfolio-article.html">Article</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu linkText="Shop">
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/shop.html">Index</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/shop-product-grid.html">Product grid</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/shop-product-list.html">Product list</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/shop-product.html">Product page</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/shop-cart.html">Shopping cart</Sidenav.Link>
              <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/shop-checkout.html">Checkout</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Link target="_blank" rel="noopener noreferrer" href="http://localhost:8080/extra-pages/coming-soon.html">Coming soon</Sidenav.Link>
          </Sidenav.Menu>
          {/* / ONLY_DEMO */}

        </div>
      </Sidenav>
    )
  }
}

LayoutSidenav.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal'])
}

LayoutSidenav.defaultProps = {
  orientation: 'vertical'
}

export default connect(store => ({
  sidenavBg: store.theme.sidenavBg
}))(LayoutSidenav)
