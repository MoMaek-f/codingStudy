### 加载文件

1. css放在head=> 解决首次加载空白的问题
2. js放在body尾部 => 解决页面堵塞和无法获取对象的问题

### 严格模式

​     "use strict";

### 基本类型

1. String(字符串) 
2. Number(数字) 
3. Boolean(布尔)
4. Null(空) 
5. Undefined(未定义)
6. Symbo(es6新增，表示独一无二的值)

### 引用类型

1. Object （对象）

2. Array （数据）
3. Date （日期）
4. RegExp （正则）
5. Function （函数） 

### 变量

1. var(es5), 用于声明 基本类型和引用类（有变量提升问题）
2. let(es6) ，用于声明基本类型（无变量提升问题，且不可重名，必须先声明后才可以读取变量）
3. const(es6)， 一般用于常量，基本类型，引用类