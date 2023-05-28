module.exports = {
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    quotes: ['error', 'double'],
    'max-len': ['error', { code: 120 }]
    // 'simple-import-sort/imports': [
    //   'error',
    //   {
    //     groups: [
    //       [
    //         '^react$',
    //         '^react-router-dom',
    //         '^react-dom',
    //         '^react-i18next',
    //         '^react-redux',
    //         'react-quilljs',
    //         'react-beautiful-dnd',
    //         '@reduxjs/toolkit',
    //         '@reduxjs/toolkit/query/react',
    //         '^antd',
    //         '^@ant-design/icons',
    //         '^@ant-design/plots',
    //         '^axios',
    //         '^dayjs',
    //         '^classnames',
    //         'dompurify',
    //         '^~',
    //         'app',
    //         'router',
    //         'pages',
    //         'containers',
    //         'common/ui',
    //         'common/components',
    //         'common/helpers',
    //         'common/hooks',
    //         'common/constants',
    //         'api/student',
    //         'api/guest',
    //         'api/instructor',
    //         'api/admin',
    //         'types/common',
    //         'types/entities',
    //         'types/request',
    //         'types/roles',
    //         'types/routes',
    //         'types/store',
    //         '^\\.\\.(?!/?$)',
    //         '^\\.\\./?$',
    //         '^\\./(?=.*/)(?!/?$)',
    //         '^\\.(?!/?$)',
    //         '^\\./?$',
    //         '.svg',
    //         '.png',
    //         '.jpg',
    //         '.jpeg',
    //         '^\\u0000',
    //         '^.+\\.s?css$'
    //       ]
    //     ]
    //   }
    // ]
  }
};
