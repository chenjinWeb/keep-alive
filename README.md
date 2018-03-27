# keep-alive

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


首次进来 hook 的触发顺序 created-> mounted-> activated，退出时触发 deactivated：
// 控制台打印结果
the hook of created is done!
the hook of mounted is done!
the hook of activated is done!
the hook of deactivated is done!

二次进来 hook 只触发 activated，退出时触发 deactivated：
// 控制台打印结果
the hook of activated is done!
the hook of deactivated is done!


所以这就是为什么有些人开启 keep-alive 之后，created 和 mounted 注册的 init 方法不触发的原因了，因为 keep-alive 把它们屏蔽了，也就是把数据缓存起来，所以不再请求。

如果你的某些页面一定要实时请求，你可以直接在 activated 这个 hook 做 init，就不要在 created 和 mounted 上面注册 init 方法了。

还有你可以选择性 init，比如监听状态变化，包括但不限于监听路由的变化，某参数的变化，某时间节点的变化等等。


