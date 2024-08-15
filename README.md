# react-tutorial
Some tutorial for learn some React

If you need to make the project without the in-built React template. Do this:

In CCMD, execute these commands.
npm create vite@latest > vanilla > JavaScript.
npm install
npm install @vitejs/plugin-react react react-dom -E // the React plugin.
npm install react react-dom -E // React stuff
npm install standard -D // the linter.
npm run dev.

For the package.json file, add this in order to config the standard.js linter.

"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }

In main.js (Rename the extension to jsx)

import {createRoot} from 'react-dom/client'
import React from 'react'

const root = createRoot(document.getElementById('app'))

root.render(<h3>Prueba</h3>)


in vite.config.js (Make the file if needed)

import { react } from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({ plugin: [react] })


Now, you just edit the index.html on the script, indexing the main.jsx, and there you go.
Do `npm run dev` and you're ready to go.