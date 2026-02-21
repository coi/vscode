<div align="center">
  <img src="images/logo.svg" alt="coi-vscode Logo" width="360"/>
  

# Coi Language for VS Code

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Marketplace](https://img.shields.io/badge/VS%20Code-Extension-007ACC.svg)](https://marketplace.visualstudio.com/items?itemName=coi-lang.coi-language)

Language support for [Coi](https://github.com/coi/coi): syntax highlighting, completions, hovers, signature help, and formatting.

</div>

## What you get

- Full syntax highlighting for `.coi` (including `view`, `style`, `init`, `mount`, `tick`)
- Automatic `.d.coi` definition discovery via `coi --defs-path` (or set `coi.definitionsPath` manually)
- Completions for platform APIs, keywords, core types, and common methods
- Hover + signature help for function calls and framework APIs
- Built-in document formatter for consistent spacing and indentation

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `coi.definitionsPath` | `""` | Path to `.d.coi` definitions. Empty = auto-detect via `coi --defs-path`. |
| `coi.format.enable` | `true` | Enable COI document formatting. |

## Format document

- Shortcut: `Shift+Alt+F` (Windows/Linux) or `Shift+Option+F` (macOS)
- Command Palette: `Format Document`
- Context menu: `Format Document`
