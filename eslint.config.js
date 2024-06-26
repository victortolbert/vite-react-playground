import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
}, {
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-alert': 'off',
    'react/no-nested-components': 'off',
    'react-dom/no-missing-button-type': 'off',
  },
})
