// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
      parser:"babel-eslint"
    },
    env: {
      browser: true,
    },
    globals:{
      global:true
    },
    extends: [
       "standard","plugin:vue/essential","prettier","prettier/standard","prettier/vue"
    ],
    // required to lint *.vue files
    plugins: [
       "vue","prettier"
    ],
    // add your custom rules here
    rules: {
       'no-unused-vars':'error',
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'vue/eqeqeq':["error","always"],
      "prettier/prettier":["error", {
          // 一行最多 100 字符
          printWidth: 100,
          // 使用 4 个空格缩进
          tabWidth: 2,
          // 不使用缩进符，而使用空格
          useTabs: false,
          // 行尾需要有分号
          semi: true,
          // 使用单引号
          singleQuote: true,
          // jsx 不使用单引号，而使用双引号
          jsxSingleQuote: false,
          // 末尾不需要逗号
          trailingComma: 'none',
          // 大括号内的首尾需要空格
          bracketSpacing: true,
          // jsx 标签的反尖括号需要换行
          jsxBracketSameLine: false,
          // 箭头函数，只有一个参数的时候，也需要括号
          arrowParens: 'always',
          // 每个文件格式化的范围是文件的全部内容
          rangeStart: 0,
          rangeEnd: Infinity,
          // 不需要写文件开头的 @prettier
          requirePragma: false,
          // 不需要自动在文件开头插入 @prettier
          insertPragma: false,
          // 使用默认的折行标准
          proseWrap: 'preserve',
          // 根据显示样式决定 html 要不要折行
          htmlWhitespaceSensitivity: 'css',
          // 换行符使用 lf
          endOfLine: 'lf'
      }]
    }
  }
