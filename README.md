## webpack-loader-dev

### 什么是 loader？

webpack 只能处理 JS 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。loader 是 webpack 中一个重要的概念，它是指用来将一段代码转换成另一段代码的 webpack 加载器。

### loader 的分类：

前置 pre loader
普通 normal loader
后置 post loader
行内 inline loader

### loader 执行顺序是 pre > normal > inline > post

### 符号的定义：

~! 禁用 pre loader 和 normal loader

! 禁用 normal loader

!! 禁用 pre loader、post loader、normal loader

### pitchLoader 和 normalLoader

每个 loader 都有两部分组成：pitchLoader 和 normalLoader，pitch 和 normal 的执行顺序正好相反，当 ptich 没有定义或者没有返回值时，会先一次执行 pitch 再获取资源执行 loader， 如果定义的某个 pitch 有返回值则会跳过读取资源和自己的loader。

### loader 的特点：

第一个 loader 要返回js 脚本

每个 loader 只做一件事，为了使 loader 在更多场景链式调用

每一个 loader 都是一个模块

每个 loader 都是无状态的，确保 loader 在不同模块转换之间不保存状态

![https://github.com/zymfe/webpack-loader-dev/blob/master/loader-order-normal.jpg](https://github.com/zymfe/webpack-loader-dev/blob/master/loader-order-normal.jpg)

![https://github.com/zymfe/webpack-loader-dev/blob/master/loader-order-pitch.jpg](https://github.com/zymfe/webpack-loader-dev/blob/master/loader-order-pitch)
