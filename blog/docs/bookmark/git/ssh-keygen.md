## GIT-生成SSH密钥

#### 配置

1. 配置用户名
``` shell
git config --global user.name "${username}"
```

2. 配置邮箱
``` shell
git config --global user.email "${email}"
```

```tips
此时，会在C:\Users\Administrator目录下生成`.gitconfig`配置文件
```

3. 生产密钥
``` shell
ssh-keygen -t rsa -C "${email}"
```
不需要设置名称与密码

4. 查看公钥
``` shell
cat ~/.ssh/id_rsa.pub
```
