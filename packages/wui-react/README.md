# Wui UI - React

Part of [Wui Design](../../README.md) - A comprehensive design system for any React application.

A modern, accessible, and customizable UI kit built with React, TypeScript, Tailwind CSS, and based on shadcn/ui components. Perfect for building consistent user interfaces across Next.js and React applications.

[Live Demo](https://wui-design-react.vercel.app/) - Explore all components interactively

## Features

- **Modern Design**: Beautiful, clean, and consistent components
- **Accessibility First**: Built with accessibility in mind using Radix UI primitives
- **Fully Customizable**: Easy to customize with CSS variables and Tailwind utilities
- **Tree Shakable**: Only import what you need
- **Dark Mode Ready**: Built-in dark mode support
- **Storybook Integration**: Interactive component documentation
- **Well Tested**: Comprehensive test coverage with Vitest
- **TypeScript**: Full TypeScript support with proper type definitions

## Quick Start

### Installation

Install the package using pnpm:

```bash
pnpm add @wui.design/wui-react
```

### Setup

Import the CSS in your main app file:

```tsx
// In your main app file (e.g., _app.tsx for Next.js or main.tsx for React)
import "@wui.design/wui-react/styles";
```

For themed versions, import a specific theme:

```tsx
// Themes
import "@wui.design/wui-react/themes/theme-1";
import "@wui.design/wui-react/themes/theme-2";
```

**Note**: Import only one theme at a time. Themes include all necessary base styles, so you don't need to import both `styles` and a theme.

That's it! The library comes with pre-built CSS, so no additional Tailwind configuration is needed.

## Dark Mode

The UI kit supports dark mode out of the box. Simply add the `dark` class to your root element:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle("dark");
```

## Development

### Prerequisites

- Node.js 20 or higher
- pnpm package manager

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm storybook` - Start Storybook
- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI
- `pnpm lint` - Lint code
- `pnpm format` - Format code

## Testing

Run tests with the following commands:

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests with UI
pnpm test:ui
```

## Storybook

View all components in Storybook by running:

```bash
pnpm storybook
```

Then open [http://localhost:6006](http://localhost:6006) in your browser.

## Customization

### CSS Variables

Customize the UI kit by overriding CSS variables in your own stylesheet:

```css
:root {
  --wui-primary: 220 100% 50%;
  --wui-primary-foreground: 0 0% 100%;
  /* ... other variables */
}
```

### Tailwind Configuration

Extend the UI kit with your own Tailwind utilities by configuring your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#...",
          500: "#...",
          900: "#...",
        },
      },
    },
  },
};
```

## Workspace Navigation

This package is part of the Wui Design workspace:

- [Main Repository](../../README.md) - Workspace setup and overview
- [This Package](./README.md) - You are here
- [Development Scripts](../../README.md#development-setup) - Workspace-level commands
