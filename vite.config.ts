import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const babelPlugins = [];

if (process.env.MIGHTYMELD) {
  babelPlugins.push('mightymeld/babel-plugin-mightymeld');
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: babelPlugins
      }
    })
  ],
})
