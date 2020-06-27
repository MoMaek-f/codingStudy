# 路由模式

1. hash  - 即地址栏中url中的#符号; 如http://www.xxxx.com/#/hello

2. history --利用了HTML5 history interface 中新增的 pushState() 和 replaceState() 方法。（这个方法就是面试中常问到的，怎么去除url中的# 号，此方法需要后端apache 或 nginx进行简单的路由配置，否则或报404.）

   注： “这两种配置就是解决url中有没有#号的问题，如果不在意#号，就使用hash，否则使用history”



# elementUI

**获取el-table的下标和序号**

```vue
<el-table :data="userDatas" border style="width: 90%">
      <el-table-column type="index" label="序号" width="100" align="center"></el-table-column>
      <el-table-column prop="userName" label="姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="userPhone" label="电话" width="150" align="center"></el-table-column>
      <el-table-column prop="userAddress" label="地址" width="240" align="center"></el-table-column>
      <el-table-column style="align: center" fixed="right" label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$index)" type="text" size="small" icon="el-icon-edit">编辑</el-button>
          <el-button @click="deleteUserByUserName(scope.row,scope.$index)" type="text" size="small" icon="el-icon-delete" style="color: red">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
```

- `type="index"`:就是显示序号
- `scope.$index`:就是选中行的下标
- `scope.row`:就是选中行的所有的信息
- 例如：`scope.row.userName`:获取用户姓名

## element table表格使用v-if来回切换内容冲突

问题：多个table表格使用v-if切换展示时，多个相同的标签被渲染，导致table表格渲染内容出错

如果不添加key来区分则会出现数据冲突

解决方法：给table加个:key就可以

![image-20200604201516638](C:\Users\亮亮\AppData\Roaming\Typora\typora-user-images\image-20200604201516638.png)

# 生命周期钩子函数

- beforeCreate()
- created()
- beforeMount()
- mounted()
- beforeUpdate()
- updated()
- beforeDestroy()
- destroyed()
- activated()
- deactivated()
- errorCaptured()

# computed() 和 watch() 

- computed: 

  ​	计算属性里面的值是响应式的

  ​	必须依赖其他属性来计算值,computed的值有缓存4

- watch: 只要监听到值的变化就会执行回调,在回调当中可以执行一些逻辑操作

# v-if  和  v-show 
**（1）手段：**
v-if是动态的向DOM树内添加或者删除DOM元素；
v-show是通过设置DOM元素的display样式属性控制显隐；
**（2）编译过程：**
v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；
v-show只是简单的基于css切换；
**（3）编译条件：**
v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载);
v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；
**（4）性能消耗：**
v-if有更高的切换消耗；
v-show有更高的初始渲染消耗；
**（5）使用场景：**
v-if适合运营条件不大可能改变；
v-show适合频繁切换。

# 组件中的 data 什么时候可以使用对象

组件复用时,实例会共享data,如果data是对象,那么修改一处组件的data,会影响所有的组件,所以需要将data写成函数,

 如果组件确定只有一处使用,data可以写成对象(但仍然强烈不建议)

# 组件之间通讯/共享数据

父子传值 v-bind 属性绑定

子父传值 v-on 事件绑定

兄弟组件 eventbus

- $on 接受数据的那个组件
- $emit 发送数据的那个组件

## VueX 

- VueX 是实现组件全局状态(数据)管理的机制,可以方便的实现组件之间的数据共享
- 能够在vuex中集中管理共享的数据,易于开发和后期维护
- 存储在vuex 中的数据都是响应式的,能后保证数据与页面的同步

> 一般情况下,只有组件之间共享的数据,才有必要存储到vuex中,对于组件的私有数据,一九存储在组件自身的data总即可

