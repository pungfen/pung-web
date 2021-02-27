# client

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


export url=$(echo $URL | base64 -d)
export name=$(echo $NAME | base64 -d)

docker stop $name
docker rm $name
# $url = registry-vpc.cn-hangzhou.aliyuncs.com/pung/pung-web:prod
docker rmi $url
docker login -u=785551618@qq.com -p=fP081214 registry-vpc.cn-hangzhou.aliyuncs.com
docker pull $url
docker run -d -p 8080:8080 --name $name $url
# docker logs -f $name
