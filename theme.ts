import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-pink': 'rgba(170, 54, 124, 1)',
  '--my-purple': 'rgba(74, 47, 189, 1)',
  '--my-blue': 'rgba(50, 185, 250, 1)',
}

export const myTheme = buildLegacyTheme({
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  // Brand
  '--brand-primary': props['--my-blue'],

  // UI
  '--component-bg': props['--my-black'],
  '--component-text-color': props['--my-white'],

  // default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-blue'],
  '--default-button-success-color': props['--my-purple'],
  '--default-button-danger-color': props['--my-pink'],
  '--default-button-warning-color': props['--my-blue'],

  // state
  '--state-info-color': props['--my-blue'],
  '--state-success-color': props['--my-purple'],
  '--state-warning-color': props['--my-blue'],
  '--state-danger-color': props['--my-pink'],

  // navbar
  '--main-navigation-color': props['--my-black'],
  '--main-navigation-color--inverted': props['--my-white'],
  '--focus-color': props['--my-blue'],
})
