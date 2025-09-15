# Wui Design

A comprehensive design system for web applications, built with modern tools and best practices.

## 🚀 Overview

Wui Design is a repository workspace containing reusable UI components for building consistent user interfaces across web applications.

## 📦 Packages

### [@wui.design/wui-react](./packages/wui-react/README.md)

React UI component library with TypeScript support, built on shadcn/ui and Radix UI primitives.

- [📖 Full Documentation](./packages/wui-react/README.md)
- [🚀 Quick Start](./packages/wui-react/README.md#-quick-start)
- [🎨 Customization](./packages/wui-react/README.md#-customization)
- [🧪 Testing](./packages/wui-react/README.md#-testing)

## 🛠 Development Setup

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/wui.design/wui-design.git
cd wui-design

# Install dependencies for entire workspace
pnpm install

# OR install dependencies for specific package only
pnpm wui-react:install
```

#### Installation Options

- **`pnpm install`** - Installs dependencies for **all packages** in the workspace (recommended for development)
- **`pnpm wui-react:install`** - Installs dependencies for **@wui.design/wui-react package only** (useful for CI/CD or specific deployments)

### Available Scripts

```bash
# Installation
pnpm wui-react:install      # Install dependencies for @wui.design/wui-react package only

# Development
pnpm wui-react:dev          # Start UI React development server
pnpm wui-react:story        # Start Storybook for component documentation
pnpm wui-react:build-watch  # Build UI React package and watch for changes

# Testing & Quality
pnpm wui-react:test         # Run unit tests
pnpm wui-react:lint         # Run linting
pnpm wui-react:type-check   # Run TypeScript type checking

# Building
pnpm wui-react:build        # Build UI React package
pnpm wui-react:story-build  # Build Storybook for production
pnpm wui-react:story-build-with-tests  # Run all tests + build Storybook (recommended for deployment)
```

## 🎯 Project Structure

```
wui-design/
├── packages/
│   └── wui-react/      # React UI components
├── apps/                  # Testing/demo apps (gitignored)
├── package.json           # Workspace configuration
├── pnpm-workspace.yaml    # pnpm workspace setup
└── README.md              # This file
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

Webster P.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for component inspiration
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
