# babelServe
### babel配置

babel处理js的流程：
例： console.log('hello')
1.将源代码分割成token数组 ['console','log', '(', 'hello', ')']
2.语法分析，将token数组转为AST树
3.遍历(访问器模式)AST并应用转换器
4.AST转换器开始对AST节点进行增删改查
5.将修改后的AST树转换为源代码
