# Vue Text Utils Demo

A comprehensive demo application showcasing the features of [@riveraser/vue-text-utils](https://www.npmjs.com/package/@riveraser/vue-text-utils) - a lightweight Vue 3 plugin for text formatting with custom directives.

## 🌟 Features

This demo showcases:

- 💰 **Currency Formatting** - Format currency values with various display options
- 🔢 **Number Formatting** - Format numbers with custom decimal places and percentage support
- 📅 **Date-Time Formatting** - Format dates and times with various styles
- 🌍 **Internationalization** - Built-in support for multiple locales
- ♿ **Accessibility** - Accessible text formatting out of the box

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/riveraser/vue-text-utils-demo.git
cd vue-text-utils-demo

# Install dependencies
npm install

# Run the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📦 About @riveraser/vue-text-utils

This demo uses the [@riveraser/vue-text-utils](https://www.npmjs.com/package/@riveraser/vue-text-utils) package, which provides:

- Custom Vue 3 directives for text formatting
- Zero dependencies
- TypeScript support
- Easy integration with Vue i18n
- Flexible configuration options

### Installation in Your Project

```bash
npm install @riveraser/vue-text-utils
```

### Basic Usage

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { VueTextUtils } from '@riveraser/vue-text-utils'

const app = createApp(App)

// Register the plugin with global options
app.use(VueTextUtils, {
  locale: 'en-US',
  defaultCurrency: 'USD',
  defaultTimezone: 'UTC'
})

app.mount('#app')
```

### Example Usage in Templates

```vue
<template>
  <!-- Currency formatting -->
  <p v-currency="1234.56">1234.56</p>
  <!-- Output: $1,234.56 -->

  <!-- Number formatting -->
  <p v-number="1234567.89">1234567.89</p>
  <!-- Output: 1,234,567.89 -->

  <!-- Date-time formatting -->
  <p v-date-time="'2025-11-01T20:25:20.000Z'">2025-11-01T20:25:20.000Z</p>
  <!-- Output: 11/1/2025, 8:25:20 PM -->

  <!-- With options -->
  <p v-currency:EUR="1234.56">1234.56</p>
  <!-- Output: €1,234.56 -->
</template>
```

## 📚 Documentation

For complete documentation, visit the [vue-text-utils GitHub repository](https://github.com/riveraser/vue-text-utils).

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [@riveraser/vue-text-utils](https://www.npmjs.com/package/@riveraser/vue-text-utils) - Text formatting directives

## 📄 License

This demo is MIT licensed. See the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Created by [Sergio Rivera Morales](https://github.com/riveraser) to showcase the vue-text-utils package.
