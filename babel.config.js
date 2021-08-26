module.exports = {
    presets: [
        [
            '@babel/preset-env', { // preset-stage 在babel7+已经全部被废弃了
                targets: {
                    'browsers': ['ie >= 8', 'iOS 7'] // 支持ie8，直接使用iOS浏览器版本7
                },
                corejs: '3', // 代替@babel/polyfill
                modules: false, // 指定将es6 modules 转换为何种模块规范,false即为将module交由webpack处理，而不是babel
                useBuiltIns: 'usage', // usage：将目标浏览器不支持的api按需引入 ，entry:将目标浏览器不支持的api全量引入，false： 不自动加入内置类型的polyfill
            }
        ]
    ],
    plugins: [
        'transform-do-expressions', // 处理react不支持if else
        ['@babel/plugin-transform-runtime', { // 复杂语法转换，如class,主要是利用下面配置的沙箱环境
            corejs: '2' // 避免污染全局，提供沙箱环境 // @babel/runtime-corejs2
        }],
    ]
}
// .babelrc和babel.config.js的区别：前者只作用于当前目录及子集目录，后者作用于整个项目可向上搜索起编译作用。
//  @babel/polyfil是由core-js2和regenerator-runtime组成的一个集成包， @babel/polyfill处理新语法，如promise，
// corejs: 3 等价于在入口js文件引入这些模块：core-js/stable, regenerator-runtime/runtime
