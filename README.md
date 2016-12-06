# weex-router

参考react-router v4版本的实现，适用于weex的声明式路由。
特点：

* 声明式
* 基于组件的可组合性


```html
<template>
  <div>
      <router>
          <div class="nav">
            <link to="/home">home</link>
            <link to="/about">about</link>
          </div>
          <match pattern="/home"><home></home></match>
          <match pattern="/about"><about></about></match>
      </router>
  </div>
</templater>

<script>
require('weex-router')
</script>
```


## Getting Started

安装

```
$ npm install weex-router
```

## 组件

核心组件

* Router
* Link
* Match
* Miss


### Router

Router负责监听地址的变化，执行跳转运画，渲染页面

```html
<router basename="/app" >
  <div class="app"><div>
</router>
```

- basename: string 所有路由的基础地址


### Link
类似一个a标签，使用link声明跳转地址和跳转方式

```html
<link to="/about" activeClassName="active">
  About
</link>
```


- to: string 

跳转的路径

```html
<link to="/courses" >课程</link>
```



- action: 选择路由的类型， push | pop | tab, 默认为push

```html
<link to="/courses" action="push">课程</link>
```

- animated: boolean 是否使用动画效果

```html
<link to="/courses" animated="ture">课程</link>
```


### Match

Match根据路由地址负责渲染或者不渲染它所拥有的组件， Match是可以嵌套的


- pattern: string

匹配的路由，支持正则表达式，支持[path-to-regexp](https://www.npmjs.com/package/path-to-regexp)

```html
<match pattern="/users/:id" ><user></user></match>
```

- children: object
 在match内部的组件将由match控制渲染，被渲染的组件将从接受一些路由相关的参数
 
  - pattern: (string) 路由匹配模式.
  - location: 当前匹配的路径.
  - params: object 动态参数.
 
 

### Miss

如果所有的Match组件都没有配置到地址，那么Miss组件会被渲染

```html
<router>
   <Match pattern="/foo"/><foo></foo></math>
   <Match pattern="/bar"><bar></bar></math>
   <miss><nomatch></nomatch></miss>
</router>
```

- children: object
 被渲染的组件将从接受一些路由相关的参数
  - location: 当前匹配的路径.
 


## JS API

 - push(url, options)

```javascript
var Router = require("weex-router")
Router.push('/about',{
  animated:true,
  params:{
    user:"123"
  }
})
```

- pop(options)

```javascript
var Router = require("weex-router")
Router.pop()
```


- tab(options)

```javascript
var Router = require("weex-router")
Router.tab('/about', {
  animated:true,
    params:{
      user:"123"
    }
})
```


