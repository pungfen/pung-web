## yarn-切换源
#### 设置、修改yarn源为taobao镜像源

1. 查看当前镜像源

``` shell
yarn config get registry
```
2. 临时修改yarn源

``` shell
yarn save package_name --registry https://registry.npm.taobao.org/
```

3. 修改yarn源为taobao源

```shell
yarn config set registry https://registry.npm.taobao.org/
```

4. 修改yarn源为官方源

```shell
yarn config set registry https://registry.yarnpkg.com
```
