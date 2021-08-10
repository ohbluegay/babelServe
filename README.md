# babelServe
### babel配置

- babel处理js的流程：
***
  - 例： console.log('hello')
 ```
 graph TD
       A(将源代码分割成token数组 ['console','log', '(', 'hello', ')']) -> B(语法分析，将token数组转为AST树)
       B --> C(遍历(访问器模式)AST并应用转换器)
       C --> D(AST转换器开始对AST节点进行增删改查)
       D --> E(将修改后的AST树转换为源代码)
```
-配置
|babel|presets|plugins|
|---|---|---|
||||
