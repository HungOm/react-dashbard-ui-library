import React from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import Loader from './shared/Loader'

// Layouts
import Layout1 from './shared/layouts/Layout1'
import Layout1Flex from './shared/layouts/Layout1Flex'
import Layout2 from './shared/layouts/Layout2'
import Layout2Flex from './shared/layouts/Layout2Flex'
import LayoutHorizontalSidenav from './shared/layouts/LayoutHorizontalSidenav'
import LayoutWithoutSidenav from './shared/layouts/LayoutWithoutSidenav'
import LayoutWithoutNavbar from './shared/layouts/LayoutWithoutNavbar'
import LayoutWithoutNavbarFlex from './shared/layouts/LayoutWithoutNavbarFlex'
import LayoutBlank from './shared/layouts/LayoutBlank'

// Lazy load component
const lazy = (cb) => loadable(() => pMinDelay(cb(), 200), { fallback: <Loader /> })


// ---
// Default application layout

export const DefaultLayout = Layout2

// ---
// Document title template

export const titleTemplate = '%s - Appwork'

// ---
// Routes
//
// Note: By default all routes use { "exact": true }. To change this
// behaviour, pass "exact" option explicitly to the route object

export const defaultRoute = '/dashboards/dashboard-1'
export const routes = [
  // Dashboards
  {
    path: '/dashboards/dashboard-1',
    component: lazy(() => import('./components/dashboards/Dashboard1'))
  }, {
    path: '/dashboards/dashboard-2',
    component: lazy(() => import('./components/dashboards/Dashboard2'))
  }, {
    path: '/dashboards/dashboard-3',
    component: lazy(() => import('./components/dashboards/Dashboard3'))
  }, {
    path: '/dashboards/dashboard-4',
    component: lazy(() => import('./components/dashboards/Dashboard4'))
  }, {
    path: '/dashboards/dashboard-5',
    component: lazy(() => import('./components/dashboards/Dashboard5'))
  },

  // Layouts
  {
    path: '/layouts/options',
    component: lazy(() => import('./components/layouts/LayoutOptions'))
  }, {
    path: '/layouts/helpers',
    component: lazy(() => import('./components/layouts/LayoutHelpers'))
  }, {
    path: '/layouts/layout-1',
    component: lazy(() => import('./components/layouts/Layout1Example')),
    layout: Layout1
  }, {
    path: '/layouts/layout-1-flex',
    component: lazy(() => import('./components/layouts/Layout1FlexExample')),
    layout: Layout1Flex
  }, {
    path: '/layouts/layout-2',
    component: lazy(() => import('./components/layouts/Layout2Example'))
  }, {
    path: '/layouts/layout-2-flex',
    component: lazy(() => import('./components/layouts/Layout2FlexExample')),
    layout: Layout2Flex
  }, {
    path: '/layouts/without-navbar',
    component: lazy(() => import('./components/layouts/WithoutNavbarExample')),
    layout: LayoutWithoutNavbar
  }, {
    path: '/layouts/without-navbar-flex',
    component: lazy(() => import('./components/layouts/WithoutNavbarFlexExample')),
    layout: LayoutWithoutNavbarFlex
  }, {
    path: '/layouts/without-sidenav',
    component: lazy(() => import('./components/layouts/WithoutSidenavExample')),
    layout: LayoutWithoutSidenav
  }, {
    path: '/layouts/horizontal-sidenav',
    component: lazy(() => import('./components/layouts/HorizontalSidenavExample')),
    layout: LayoutHorizontalSidenav
  }, {
    path: '/layouts/blank',
    component: lazy(() => import('./components/layouts/BlankExample')),
    layout: LayoutBlank
  },

  // Typography
  {
    path: '/typography',
    component: lazy(() => import('./components/Typography'))
  },

  // User Interface
  {
    path: '/ui/buttons',
    component: lazy(() => import('./components/ui/Buttons'))
  }, {
    path: '/ui/badges',
    component: lazy(() => import('./components/ui/Badges'))
  }, {
    path: '/ui/dropdowns',
    component: lazy(() => import('./components/ui/Dropdowns'))
  }, {
    path: '/ui/navs',
    component: lazy(() => import('./components/ui/Navs'))
  }, {
    path: '/ui/pagination-and-breadcrumbs',
    component: lazy(() => import('./components/ui/PaginationAndBreadcrumbs'))
  }, {
    path: '/ui/progress-bars',
    component: lazy(() => import('./components/ui/ProgressBars'))
  }, {
    path: '/ui/list-groups',
    component: lazy(() => import('./components/ui/ListGroups'))
  }, {
    path: '/ui/notifications',
    component: lazy(() => import('./components/ui/Notifications'))
  }, {
    path: '/ui/modals',
    component: lazy(() => import('./components/ui/Modals'))
  }, {
    path: '/ui/tooltips-and-popovers',
    component: lazy(() => import('./components/ui/TooltipsAndPopovers'))
  }, {
    path: '/ui/thumbnails',
    component: lazy(() => import('./components/ui/Thumbnails'))
  }, {
    path: '/ui/cards',
    component: lazy(() => import('./components/ui/Cards'))
  }, {
    path: '/ui/accordion',
    component: lazy(() => import('./components/ui/Accordion'))
  }, {
    path: '/ui/app-brand',
    component: lazy(() => import('./components/ui/AppBrand'))
  }, {
    path: '/ui/navbar',
    component: lazy(() => import('./components/ui/Navbar'))
  }, {
    path: '/ui/sidenav',
    component: lazy(() => import('./components/ui/Sidenav'))
  }, {
    path: '/ui/footer',
    component: lazy(() => import('./components/ui/Footer'))
  }, {
    path: '/ui/carousel',
    component: lazy(() => import('./components/ui/Carousel'))
  }, {
    path: '/ui/lightbox',
    component: lazy(() => import('./components/ui/Lightbox'))
  }, {
    path: '/ui/drag-and-drop',
    component: lazy(() => import('./components/ui/DragAndDrop'))
  }, {
    path: '/ui/treeview',
    component: lazy(() => import('./components/ui/Treeview'))
  }, {
    path: '/ui/react-avatar-editor',
    component: lazy(() => import('./components/ui/ReactAvatarEditor'))
  }, {
    path: '/ui/react-big-calendar',
    component: lazy(() => import('./components/ui/ReactBigCalendar'))
  }, {
    path: '/ui/spinners',
    component: lazy(() => import('./components/ui/Spinners'))
  },

  // Forms
  {
    path: '/forms/layouts-and-elements',
    component: lazy(() => import('./components/forms/LayoutsAndElements'))
  }, {
    path: '/forms/controls',
    component: lazy(() => import('./components/forms/Controls'))
  }, {
    path: '/forms/custom-controls',
    component: lazy(() => import('./components/forms/CustomControls'))
  }, {
    path: '/forms/input-groups',
    component: lazy(() => import('./components/forms/InputGroups'))
  }, {
    path: '/forms/switchers',
    component: lazy(() => import('./components/forms/Switchers'))
  }, {
    path: '/forms/input-spinner',
    component: lazy(() => import('./components/forms/InputSpinner'))
  }, {
    path: '/forms/sliders',
    component: lazy(() => import('./components/forms/Sliders'))
  }, {
    path: '/forms/selects-and-tags',
    component: lazy(() => import('./components/forms/SelectsAndTags'))
  }, {
    path: '/forms/pickers',
    component: lazy(() => import('./components/forms/Pickers'))
  }, {
    path: '/forms/editors',
    component: lazy(() => import('./components/forms/Editors'))
  }, {
    path: '/forms/file-upload',
    component: lazy(() => import('./components/forms/FileUpload'))
  }, {
    path: '/forms/react-stepzilla',
    component: lazy(() => import('./components/forms/ReactStepzilla'))
  }, {
    path: '/forms/react-bootstrap-typeahead',
    component: lazy(() => import('./components/forms/ReactBootstrapTypeahead'))
  }, {
    path: '/forms/extras',
    component: lazy(() => import('./components/forms/Extras'))
  },

  // Tables
  {
    path: '/tables/bootstrap',
    component: lazy(() => import('./components/tables/Bootstrap'))
  }, {
    path: '/tables/react-table',
    component: lazy(() => import('./components/tables/ReactTable'))
  }, {
    path: '/tables/react-bootstrap-table-2',
    component: lazy(() => import('./components/tables/ReactBootstrapTable2'))
  },

  // Charts
  {
    path: '/charts/google-map-react',
    component: lazy(() => import('./components/charts/GoogleMapReact'))
  }, {
    path: '/charts/react-chartjs-2',
    component: lazy(() => import('./components/charts/ReactChartjs2'))
  }, {
    path: '/charts/recharts',
    component: lazy(() => import('./components/charts/Recharts'))
  }, {
    path: '/charts/react-sparklines',
    component: lazy(() => import('./components/charts/ReactSparklines'))
  },

  // Icons
  {
    path: '/icons/font-awesome-5',
    component: lazy(() => import('./components/icons/FontAwesome5'))
  }, {
    path: '/icons/ionicons',
    component: lazy(() => import('./components/icons/Ionicons'))
  }, {
    path: '/icons/linearicons',
    component: lazy(() => import('./components/icons/Linearicons'))
  }, {
    path: '/icons/open-iconic',
    component: lazy(() => import('./components/icons/OpenIconic'))
  }, {
    path: '/icons/stroke-icons-7',
    component: lazy(() => import('./components/icons/StrokeIcons7'))
  },

  // Miscellaneous
  {
    path: '/miscellaneous/brand-colors',
    component: lazy(() => import('./components/miscellaneous/BrandColors'))
  }, {
    path: '/miscellaneous/react-masonry-component',
    component: lazy(() => import('./components/miscellaneous/ReactMasonryComponent'))
  }, {
    path: '/miscellaneous/spinkit',
    component: lazy(() => import('./components/miscellaneous/Spinkit'))
  }, {
    path: '/miscellaneous/react-ladda',
    component: lazy(() => import('./components/miscellaneous/ReactLadda'))
  }, {
    path: '/miscellaneous/numeral',
    component: lazy(() => import('./components/miscellaneous/Numeral'))
  }, {
    path: '/miscellaneous/react-idle-timer',
    component: lazy(() => import('./components/miscellaneous/ReactIdleTimer'))
  }, {
    path: '/miscellaneous/react-perfect-scrollbar',
    component: lazy(() => import('./components/miscellaneous/ReactPerfectScrollbar'))
  }, {
    path: '/miscellaneous/react-clipboardjs',
    component: lazy(() => import('./components/miscellaneous/ReactClipboardjs'))
  },

  // Pages
  {
    path: '/pages/articles/list',
    component: lazy(() => import('./components/pages/ArticlesList'))
  }, {
    path: '/pages/articles/edit',
    component: lazy(() => import('./components/pages/ArticlesEdit'))
  }, {
    path: '/pages/authentication/login-v1',
    component: lazy(() => import('./components/pages/AuthenticationLoginV1')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/register-v1',
    component: lazy(() => import('./components/pages/AuthenticationRegisterV1')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/login-v2',
    component: lazy(() => import('./components/pages/AuthenticationLoginV2')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/register-v2',
    component: lazy(() => import('./components/pages/AuthenticationRegisterV2')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/login-v3',
    component: lazy(() => import('./components/pages/AuthenticationLoginV3')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/register-v3',
    component: lazy(() => import('./components/pages/AuthenticationRegisterV3')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/login-and-register',
    component: lazy(() => import('./components/pages/AuthenticationLoginAndRegister')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/lock-screen-v1',
    component: lazy(() => import('./components/pages/AuthenticationLockScreenV1')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/lock-screen-v2',
    component: lazy(() => import('./components/pages/AuthenticationLockScreenV2')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/password-reset',
    component: lazy(() => import('./components/pages/AuthenticationPasswordReset')),
    layout: LayoutBlank
  }, {
    path: '/pages/authentication/email-confirm',
    component: lazy(() => import('./components/pages/AuthenticationEmailConfirm')),
    layout: LayoutBlank
  }, {
    path: '/pages/education/courses-v1',
    component: lazy(() => import('./components/pages/EducationCoursesV1'))
  }, {
    path: '/pages/education/courses-v2',
    component: lazy(() => import('./components/pages/EducationCoursesV2'))
  }, {
    path: '/pages/e-commerce/product-list',
    component: lazy(() => import('./components/pages/ECommerceProductList'))
  }, {
    path: '/pages/e-commerce/product-item',
    component: lazy(() => import('./components/pages/ECommerceProductItem'))
  }, {
    path: '/pages/e-commerce/product-edit',
    component: lazy(() => import('./components/pages/ECommerceProductEdit'))
  }, {
    path: '/pages/e-commerce/order-list',
    component: lazy(() => import('./components/pages/ECommerceOrderList'))
  }, {
    path: '/pages/e-commerce/order-detail',
    component: lazy(() => import('./components/pages/ECommerceOrderDetail'))
  }, {
    path: '/pages/forums/list',
    component: lazy(() => import('./components/pages/ForumsList'))
  }, {
    path: '/pages/forums/threads',
    component: lazy(() => import('./components/pages/ForumsThreads'))
  }, {
    path: '/pages/forums/discussion',
    component: lazy(() => import('./components/pages/ForumsDiscussion'))
  }, {
    path: '/pages/messages-v1/list',
    component: lazy(() => import('./components/pages/MessagesV1List')),
    layout: Layout2Flex
  }, {
    path: '/pages/messages-v1/item',
    component: lazy(() => import('./components/pages/MessagesV1Item')),
    layout: Layout2Flex
  }, {
    path: '/pages/messages-v1/compose',
    component: lazy(() => import('./components/pages/MessagesV1Compose')),
    layout: Layout2Flex
  }, {
    path: '/pages/messages-v2/list',
    component: lazy(() => import('./components/pages/MessagesV2List'))
  }, {
    path: '/pages/messages-v2/item',
    component: lazy(() => import('./components/pages/MessagesV2Item'))
  }, {
    path: '/pages/messages-v2/compose',
    component: lazy(() => import('./components/pages/MessagesV2Compose'))
  }, {
    path: '/pages/messages-v3/list',
    component: lazy(() => import('./components/pages/MessagesV3List'))
  }, {
    path: '/pages/messages-v3/item',
    component: lazy(() => import('./components/pages/MessagesV3Item'))
  }, {
    path: '/pages/messages-v3/compose',
    component: lazy(() => import('./components/pages/MessagesV3Compose'))
  }, {
    path: '/pages/projects/list',
    component: lazy(() => import('./components/pages/ProjectsList'))
  }, {
    path: '/pages/projects/item',
    component: lazy(() => import('./components/pages/ProjectsItem'))
  }, {
    path: '/pages/tickets/list',
    component: lazy(() => import('./components/pages/TicketsList'))
  }, {
    path: '/pages/tickets/edit',
    component: lazy(() => import('./components/pages/TicketsEdit'))
  }, {
    path: '/pages/users/list',
    component: lazy(() => import('./components/pages/UsersList'))
  }, {
    path: '/pages/users/view',
    component: lazy(() => import('./components/pages/UsersView'))
  }, {
    path: '/pages/users/edit',
    component: lazy(() => import('./components/pages/UsersEdit'))
  }, {
    path: '/pages/account-settings',
    component: lazy(() => import('./components/pages/AccountSettings'))
  }, {
    path: '/pages/chat',
    component: lazy(() => import('./components/pages/Chat')),
    layout: Layout2Flex
  }, {
    path: '/pages/clients',
    component: lazy(() => import('./components/pages/Clients')),
    layout: Layout2Flex
  }, {
    path: '/pages/contacts',
    component: lazy(() => import('./components/pages/Contacts'))
  }, {
    path: '/pages/faq',
    component: lazy(() => import('./components/pages/Faq'))
  }, {
    path: '/pages/file-manager',
    component: lazy(() => import('./components/pages/FileManager'))
  }, {
    path: '/pages/gallery',
    component: lazy(() => import('./components/pages/Gallery'))
  }, {
    path: '/pages/help-center',
    component: lazy(() => import('./components/pages/HelpCenter'))
  }, {
    path: '/pages/invoice',
    component: lazy(() => import('./components/pages/Invoice'))
  }, {
    path: '/pages/invoice-print',
    component: lazy(() => import('./components/pages/InvoicePrint')),
    layout: LayoutBlank
  }, {
    path: '/pages/kanban-board',
    component: lazy(() => import('./components/pages/KanbanBoard'))
  }, {
    path: '/pages/pricing',
    component: lazy(() => import('./components/pages/Pricing'))
  }, {
    path: '/pages/profile-v1',
    component: lazy(() => import('./components/pages/ProfileV1'))
  }, {
    path: '/pages/profile-v2',
    component: lazy(() => import('./components/pages/ProfileV2'))
  }, {
    path: '/pages/search-results',
    component: lazy(() => import('./components/pages/SearchResults'))
  }, {
    path: '/pages/task-list',
    component: lazy(() => import('./components/pages/TaskList'))
  }, {
    path: '/pages/teams',
    component: lazy(() => import('./components/pages/Teams'))
  }, {
    path: '/pages/vacancies',
    component: lazy(() => import('./components/pages/Vacancies'))
  }, {
    path: '/pages/voting',
    component: lazy(() => import('./components/pages/Voting'))
  },

  // Complete UI
  {
    path: '/complete-ui/base',
    component: lazy(() => import('./cui-components/Base')),
    layout: LayoutBlank
  }, {
    path: '/complete-ui/plugins',
    component: lazy(() => import('./cui-components/Plugins')),
    layout: LayoutBlank
  }, {
    path: '/complete-ui/charts',
    component: lazy(() => import('./cui-components/Charts')),
    layout: LayoutBlank
  }
]
