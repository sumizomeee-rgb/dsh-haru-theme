import type { Context } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-theme/client'

export const inject = ['theme']

/** Palette taken from Haru USM Master's paper, coral, and sage surfaces. */
const tokens = {
  '--dsw-alias-bg-base': { light: '#f5f0e9', dark: '#211e1b' },
  '--dsw-alias-bg-layer-1': { light: '#fffdf9', dark: '#2b2723' },
  '--dsw-alias-bg-layer-2': { light: '#fbf7f1', dark: '#342e29' },
  '--dsw-alias-bg-layer-3': { light: '#f7f0e8', dark: '#3a332d' },
  '--dsw-alias-bg-module-platform': { light: '#f7f3ed', dark: '#2a2521' },
  '--dsw-alias-bg-multi-select': { light: '#f7f3ed', dark: '#3a332d' },
  '--dsw-alias-bg-overlay': { light: '#fffdf9', dark: '#342e29' },
  '--dsw-alias-border-l1': { light: '#eee6dd', dark: '#433a33' },
  '--dsw-alias-border-l2': { light: '#e7ded4', dark: '#51463d' },
  '--dsw-alias-border-l3': { light: '#decfc1', dark: '#65564a' },
  '--dsw-alias-border-l4': { light: '#cdb9a7', dark: '#7a6657' },
  '--dsw-alias-brand-primary': { light: '#bd604d', dark: '#e99a83' },
  '--dsw-alias-brand-text': { light: '#9e493a', dark: '#efac96' },
  '--dsw-alias-button-primary-hover': { light: '#9e493a', dark: '#f4b8a5' },
  '--dsw-alias-button-elevated-fill': { light: '#fffdf9', dark: '#3a332d' },
  '--dsw-alias-button-floating-fill': { light: '#fffdf9', dark: '#3a332d' },
  '--dsw-alias-button-floating-hover': { light: '#f6e1da', dark: '#514038' },
  '--dsw-alias-button-ghost-active-fill': { light: '#f6e1da', dark: '#514038' },
  '--dsw-alias-button-ghost-active-hover': { light: '#efcfc3', dark: '#674a3f' },
  '--dsw-alias-interactive-bg-active': { light: '#f6e1da', dark: '#65453a' },
  '--dsw-alias-interactive-bg-hover': { light: '#fbede6', dark: '#45362e' },
  '--dsw-alias-interactive-bg-hover-solid': { light: '#f8eee8', dark: '#45362e' },
  '--dsw-alias-label-primary': { light: '#312d2a', dark: '#f5eee6' },
  '--dsw-alias-label-secondary': { light: '#766f69', dark: '#c7b8aa' },
  '--dsw-alias-label-tertiary': { light: '#9b928a', dark: '#a99482' },
  '--dsw-alias-label-caption': { light: '#9b928a', dark: '#a99482' },
  '--dsw-alias-state-business-primary': { light: '#bd604d', dark: '#e99a83' },
  '--dsw-alias-state-business-tertiary': { light: '#f6e1da', dark: '#51342e' },
  '--dsw-alias-state-success-primary': { light: '#648f84', dark: '#8ab9aa' },
  '--dsw-alias-state-success-tertiary': { light: '#e6f0ed', dark: '#263f38' },
  '--dsw-alias-state-warn-primary': { light: '#c68b39', dark: '#e0b069' },
  '--dsw-alias-state-warn-tertiary': { light: '#faf0df', dark: '#4d3b25' },
  '--dsw-alias-state-error-primary': { light: '#b9524d', dark: '#ed8c83' },
  '--dsw-specific-sidebar-fill': { light: '#f7f3ed', dark: '#26211e' },
  '--dsw-specific-sidebar-nav-item-active': { light: '#f6e1da', dark: '#49342e' },
  '--dsw-specific-sidebar-nav-item-active-accent': { light: '#efd0c5', dark: '#65453a' },
  '--dsw-specific-sidebar-nav-item-hover': { light: '#f8eee8', dark: '#3b3029' },
  '--dsw-font-family': {
    light: "'Noto Sans SC', 'Microsoft YaHei', sans-serif",
    dark: "'Noto Sans SC', 'Microsoft YaHei', sans-serif",
  },
} as const

export function apply(ctx: Context): void {
  ctx.effect(
    () => ctx.theme.overrideTokens('@sumizomeee/dsh-haru-theme', tokens),
    'haru-theme: palette',
  )
}
