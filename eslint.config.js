import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  ...eslintPluginAstro.configs.recommended,

  {
    plugins: ['jsx-a11y'],
    rules: {
      ...eslintPluginJsxA11y.configs.recommended.rules,
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        rules: {},
      },
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: { parser: '@typescript-eslint/parser' },
      },
    ],
  },
];
