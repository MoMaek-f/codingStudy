### 1. 是一些常用的命令

`git init`  初始化git 会在执行的文件夹下生成隐藏的.git文件，这是使用git的基本条件

`git add .` 添加当前目录下所有的文

`git add <filename>`  添加指定目录

`git status` 查看当前状态

`git commit -m "注释"` 确认提交并注释提交

`git pull + "url"` 将远程仓库的文件拉取至本地

`git push -u origin master` 向master 分支提交并且绑定，-u 是绑定，下一次提交可直接使用 `git push`

`git clone + "url"` 克隆GitHub上的文件至本地

### 2. 以下简述配置秘钥过程

1. 配置用户名和邮箱（如果已经配置，可跳过）

```
git config –global user.name ‘xxxxx’ 
git config –global user.email ‘xxx@xx.xxx’
```



2. 使用如下命令`ssh-keygen -t rsa -C "*xxx@xxx.com"` 生成秘钥

```
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/xxx/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/xxx/.ssh/id_rsa.
Your public key has been saved in /c/Users/xxx/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:zA6wNJrFB6NcqS6eBog/AHlzQuvFjYpG759Yhh1lWGI xxxxxx@xxxxx.xxx(上面自己的邮箱)
The key's randomart image is:
+---[RSA 2048]----+
|    +E .         |
| ..+oo+          |
| oo+*+.o         |
|o.*===+o         |
|==+*... S        |
|B.+.o .o         |
|++o. +  .        |
| +o.+ .          |
|.  o.o           |
+----[SHA256]-----+
```

3.  最后在.ssh目录下得到了两个文件：id_rsa（私有密钥）和id_rsa.pub（公有密钥）,使用记事本等软件打开id_rsa.pub文件，将里面的内容复制，粘贴到github的New SSH key

4. 完成以上操作，不出意外就可以免密访问远程仓库了，用下面的命令就可以推送文件了呀

   ```
   git add .
   git commit -m "*"
   git push(首次使用git push -u origin master)
   ```

   