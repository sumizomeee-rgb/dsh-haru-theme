# Haru theme for DeepSeek Harness

This browser plugin applies a warm paper, coral, and sage palette inspired by
Haru USM Master. It uses Harness's `theme.overrideTokens` API, so the core UI
source remains unchanged. Light and dark modes are both supported.

## Development

The plugin is mounted as a Git submodule at
`packages/client/ui-haru-theme` in the companion Harness fork. Build it with
the fork's normal `pnpm run build`. The package itself contains no credentials
or local settings.

## Model Experience

The plugin changes presentation tokens only. Model selection, sessions,
permissions, and tools continue to use Harness's standard components.
