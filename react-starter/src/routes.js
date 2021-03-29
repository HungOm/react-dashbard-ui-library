import React from 'react'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import Loader from './shared/Loader'

// Layouts
import Layout1 from './shared/layouts/Layout1'

// Lazy load component
const lazy = (cb) => loadable(() => pMinDelay(cb(), 200), { fallback: <Loader /> })

// ---
// Default application layout

export const DefaultLayout = Layout1

// ---
// Document title template

export const titleTemplate = '%s - React Starter'

// ---
// Routes
//
// Note: By default all routes use { "exact": true }. To change this
// behaviour, pass "exact" option explicitly to the route object

export const defaultRoute = '/'
export const routes = [
  {
    path: '/',
    component: lazy(() => import('./components/Home'))
  }, {
    path: '/page-2',
    component: lazy(() => import('./components/Page2'))
  }
]
