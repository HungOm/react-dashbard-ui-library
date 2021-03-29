import settings from '../../vendor/libs/theme-settings'

const getSettings = () => ({
  // Layout navbar color
  navbarBg: settings.getOption('navbarBg') || 'navbar-theme',

  // Layout sidenav color
  sidenavBg: settings.getOption('sidenavBg') || 'sidenav-theme',

  // Layout footer color
  footerBg: settings.getOption('footerBg') || 'footer-theme'
})

const initialState = getSettings()

export default function(state = initialState, action) {
  // Update settings
  if (action.type === 'UPDATE_THEME_SETTINGS') {
    return getSettings()
  }

  return state
}
