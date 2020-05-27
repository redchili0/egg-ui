# EGG-UI

## develop

为了方便开发过程中的调试，我使用了 yarn link 建立软链接，方便在 demo 中使用。使用方式如下：

1. 在命令行工具中定位到 library 目录，运行下面命令：
```shell
yarn link
```
2. 然后进入 remax-weapp-demo 目录下，运行下面命令：
```shell
yarn link "@redchili/egg-ui"
```

最后如果开发完成需要取消软链接，需要反向操作：
1. 在 remax-weapp-demo
```shell
yarn unlink "@redchili/egg-ui"
```
2. 在 library
```shell
yarn unlink
```
> 切记顺序不能错
