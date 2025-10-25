import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import antfu from '@antfu/eslint-config';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwind from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    nextjs: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: true,
    isInEditor: false,

    // Code style
    stylistic: {
      semi: true,
    },

    // Format settings
    formatters: {
      css: true,
    },

    // Ignored paths
    ignores: [
      '**/node_modules/**',
      '**/.pnpm-store/**',
      '**/brainco_website/**',
      '**/docs/**',
      '**/*.md',
      '**/dist/**',
      '**/.next/**',
      '**/out/**',
      '**/*.config.js',
      '**/*.config.ts',
      '**/*.config.mjs',
    ],
  },
  // --- Accessibility Rules ---
  jsxA11y.flatConfigs.recommended,
  // --- Tailwind CSS Rules ---
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/src/styles/global.css`,
      },
    },
  },
  // --- Custom Rule Overrides ---
  {
    rules: {
      'antfu/no-top-level-await': 'off', // Allow top-level await
      'style/brace-style': ['error', '1tbs'], // Use the default brace style
      'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'jsx-a11y/click-events-have-key-events': 'off', // Allow click handlers without keyboard listeners
      'jsx-a11y/no-static-element-interactions': 'off', // Allow static elements with interactions
      'jsx-a11y/no-noninteractive-element-interactions': 'off', // Allow non-interactive elements with interactions
      'jsx-a11y/anchor-is-valid': 'off', // Allow anchors with javascript: URLs
      'jsx-a11y/media-has-caption': 'off', // Allow media without captions
      'regexp/no-useless-non-capturing-group': 'off', // Allow non-capturing groups for readability
      'ts/ban-ts-comment': 'off', // Allow @ts-nocheck and @ts-ignore comments
    },
  },
);
