<script setup>
import { ref } from 'vue'

// Sample data for demonstrations
const price = ref(1234.56)
const bigNumber = ref(1234567.89)
const percentage = ref(0.75)
const currentDate = ref(new Date().toISOString())
const customDate = ref('2025-11-01T20:25:20.000Z')
</script>

<template>
  <div class="app">
    <header>
      <h1>Vue Text Utils Demo</h1>
      <p class="subtitle">
        A showcase of the
        <a href="https://www.npmjs.com/package/@riveraser/vue-text-utils" target="_blank">
          @riveraser/vue-text-utils
        </a>
        package
      </p>
    </header>

    <main>
      <!-- Currency Formatting Section -->
      <section class="demo-section">
        <h2>💰 Currency Formatting</h2>
        
        <div class="demo-card">
          <h3>Basic Usage</h3>
          <div class="example">
            <code>v-currency="1234.56"</code>
            <p class="result" v-currency="price">{{ price }}</p>
          </div>
        </div>

        <div class="demo-card">
          <h3>Different Currencies</h3>
          <div class="example">
            <code>v-currency:EUR="1234.56"</code>
            <p class="result" v-currency:EUR="price">{{ price }}</p>
          </div>
          <div class="example">
            <code>v-currency:GBP="1234.56"</code>
            <p class="result" v-currency:GBP="price">{{ price }}</p>
          </div>
          <div class="example">
            <code>v-currency:JPY="1234.56"</code>
            <p class="result" v-currency:JPY="price">{{ price }}</p>
          </div>
        </div>

        <div class="demo-card">
          <h3>Advanced Options</h3>
          <div class="example">
            <code>v-currency="{ currency: 'USD', currencyDisplay: 'code' }"</code>
            <p class="result" v-currency="{ currency: 'USD', currencyDisplay: 'code' }">{{ price }}</p>
          </div>
          <div class="example">
            <code>v-currency="{ currency: 'EUR', currencyDisplay: 'name' }"</code>
            <p class="result" v-currency="{ currency: 'EUR', currencyDisplay: 'name' }">{{ price }}</p>
          </div>
        </div>
      </section>

      <!-- Number Formatting Section -->
      <section class="demo-section">
        <h2>🔢 Number Formatting</h2>
        
        <div class="demo-card">
          <h3>Basic Usage</h3>
          <div class="example">
            <code>v-number="1234567.89"</code>
            <p class="result" v-number="bigNumber">{{ bigNumber }}</p>
          </div>
        </div>

        <div class="demo-card">
          <h3>Percentage</h3>
          <div class="example">
            <code>v-number="{ percentage: true }"</code>
            <p class="result" v-number="{ percentage: true }">{{ percentage }}</p>
          </div>
        </div>

        <div class="demo-card">
          <h3>Custom Formatting</h3>
          <div class="example">
            <code>v-number="{ minimumFractionDigits: 0, maximumFractionDigits: 0 }"</code>
            <p class="result" v-number="{ minimumFractionDigits: 0, maximumFractionDigits: 0 }">{{ bigNumber }}</p>
          </div>
          <div class="example">
            <code>v-number="{ minimumFractionDigits: 3, maximumFractionDigits: 3 }"</code>
            <p class="result" v-number="{ minimumFractionDigits: 3, maximumFractionDigits: 3 }">{{ bigNumber }}</p>
          </div>
        </div>
      </section>

      <!-- Date-Time Formatting Section -->
      <section class="demo-section">
        <h2>📅 Date-Time Formatting</h2>
        
        <div class="demo-card">
          <h3>Basic Usage</h3>
          <div class="example">
            <code>v-date-time="currentDate"</code>
            <p class="result" v-date-time="currentDate">{{ currentDate }}</p>
          </div>
        </div>

        <div class="demo-card">
          <h3>Different Styles</h3>
          <div class="example">
            <code>v-date-time="{ dateStyle: 'full' }"</code>
            <p class="result" v-date-time="{ dateStyle: 'full' }">{{ customDate }}</p>
          </div>
          <div class="example">
            <code>v-date-time="{ dateStyle: 'long' }"</code>
            <p class="result" v-date-time="{ dateStyle: 'long' }">{{ customDate }}</p>
          </div>
          <div class="example">
            <code>v-date-time="{ dateStyle: 'medium' }"</code>
            <p class="result" v-date-time="{ dateStyle: 'medium' }">{{ customDate }}</p>
          </div>
          <div class="example">
            <code>v-date-time="{ dateStyle: 'short' }"</code>
            <p class="result" v-date-time="{ dateStyle: 'short' }">{{ customDate }}</p>
          </div>
        </div>

        <div class="demo-card">
          <h3>Date and Time Combined</h3>
          <div class="example">
            <code>v-date-time="{ dateStyle: 'short', timeStyle: 'short' }"</code>
            <p class="result" v-date-time="{ dateStyle: 'short', timeStyle: 'short' }">{{ customDate }}</p>
          </div>
          <div class="example">
            <code>v-date-time="{ dateStyle: 'long', timeStyle: 'long' }"</code>
            <p class="result" v-date-time="{ dateStyle: 'long', timeStyle: 'long' }">{{ customDate }}</p>
          </div>
        </div>
      </section>

      <!-- Configuration Section -->
      <section class="demo-section info">
        <h2>⚙️ Configuration</h2>
        <div class="demo-card">
          <h3>Global Options (in main.js)</h3>
          <pre><code>app.use(VueTextUtils, {
  locale: 'en-US',
  defaultCurrency: 'USD',
  defaultTimezone: 'UTC',
  debug: false
})</code></pre>
        </div>

        <div class="demo-card">
          <h3>Installation</h3>
          <pre><code>npm install @riveraser/vue-text-utils</code></pre>
        </div>

        <div class="demo-card">
          <h3>Features</h3>
          <ul>
            <li>✅ Format currency with multiple display options</li>
            <li>✅ Format numbers with custom decimal places</li>
            <li>✅ Format dates and times with various styles</li>
            <li>✅ Support for internationalization (i18n)</li>
            <li>✅ Accessible text formatting</li>
            <li>✅ Zero dependencies</li>
          </ul>
        </div>
      </section>
    </main>

    <footer>
      <p>
        Made with ❤️ using
        <a href="https://vuejs.org" target="_blank">Vue 3</a> and
        <a href="https://www.npmjs.com/package/@riveraser/vue-text-utils" target="_blank">
          @riveraser/vue-text-utils
        </a>
      </p>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

header {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.subtitle a {
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;
}

.subtitle a:hover {
  text-decoration: underline;
}

main {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-section:last-of-type {
  margin-bottom: 0;
}

.demo-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #667eea;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
}

.demo-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e9ecef;
}

.demo-card:last-child {
  margin-bottom: 0;
}

.demo-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #495057;
}

.example {
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  border-left: 4px solid #667eea;
}

.example:last-child {
  margin-bottom: 0;
}

.example code {
  display: block;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.85rem;
  color: #667eea;
  margin-bottom: 0.5rem;
  background: #f0f0f0;
  padding: 0.5rem;
  border-radius: 4px;
  overflow-x: auto;
}

.example .result {
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
  margin: 0;
}

pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 0.5rem 0;
}

pre code {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  background: transparent;
  color: inherit;
  padding: 0;
  margin: 0;
}

.info ul {
  list-style: none;
  padding-left: 0;
}

.info li {
  padding: 0.5rem 0;
  font-size: 1.1rem;
}

footer {
  text-align: center;
  color: white;
  margin-top: 3rem;
  padding: 1rem;
  opacity: 0.9;
}

footer a {
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;
}

footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .demo-section h2 {
    font-size: 1.5rem;
  }

  .demo-card h3 {
    font-size: 1.1rem;
  }

  .example .result {
    font-size: 1.2rem;
  }
}
</style>
