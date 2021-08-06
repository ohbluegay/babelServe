module.exports = {
    presets: [
        [
            '@babel/preset-env', {
                targets: {
                    'browsers': ['ie >= 8', 'iOS 7'] // 支持ie8，直接使用iOS浏览器版本7
                },
                'corejs': '3',
                modules: false, // 指定将es6 modules 转换为何种模块规范,false即为将module交由webpack处理，而不是babel
                useBuiltIns: 'usage', // 对@babel/polyfill有效 usage：按需引入 ，entry:全量引入，false： 不自动加入内置类型的polyfill
            }
        ]
    ],
    plugins: [
        'transform-do-expressions', // 处理react不支持if else
        ['@babel/plugin-transform-runtime', { // 最为重要
            corejs: '2' // 避免污染全局
        }],
    ]
}
// .babelrc和babel.config.js的区别：前者只作用于当前目录及子集目录，后者作用于整个项目可向上搜索起编译作用。