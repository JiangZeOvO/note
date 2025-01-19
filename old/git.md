# Git [版本控制]

## 了解

### 		[作者](https://baike.baidu.com/item/%E6%9E%97%E7%BA%B3%E6%96%AF%C2%B7%E6%9C%AC%E7%BA%B3%E7%AC%AC%E5%85%8B%E7%89%B9%C2%B7%E6%89%98%E7%93%A6%E5%85%B9/1034429?fromModule=lemma_inlink "Linus")

### 		[官网](https://git-scm.com/ "官网")

### 		安装

```tex
安装完毕 → 右键桌面/资源管理器 → 配置用户名/邮箱
用户名邮箱可以不存在,主要作用于区分编写代码的用户
```

### 		类型

```tex
分布式
	举例:Git
	注释:每个用户都有中心版本库,且拥有额外的中心版本库,可以互相提交下载
集中式[过时]
	举例:SVN CVS
	注释:每个用户都与中心版本库互相提交下载
```

## 配置

### 		命令

```tex
设置配置
	git config [domain] <variable_name> <value>
		[domain] 作用域
			[default]     当前
			--global      全局
		<variable_name> 变量名称
			user.name					提交者名称
			user.email					提交者邮箱
			color.ui					命令行输出颜色
			alias.<alias_name>	别名
				<alias_name> 新取的别名
			core.editor					设置默认的文本编辑器,用于提交信息编辑
			credential.helper			 设置用于存储凭证(如用户名和密码)的助手
		[value] 取值
			注释
				根据<variable_name>的不同,取不同的值
				如果不传递该值,则表示查看该配置项的当前设置
	git config --list							   查看所有配置
	git config --global --list						查看全局配置
	git config --global user.name "name"			  设置全局提交者名称
	git config --global user.email "email"			   设置全局提交者邮箱
	git config --global core.quotepath false			输出文件路径时不使用引号,解决编码问题
创建仓库
	git init		在当前目录下创建git仓库
工作区添加至暂存区
	git add <file>
		<file>	文件名
			注释
				可以使用通配符[.],表示当前目录下的全部文件
暂存区提交至本地仓库
	git commit [operate] [content]
		[operate]
			-m	无需开启vim编辑器,直接在[content]编写提交信息
		[content]
	举例
		git commit -m "提交信息"
查看文件状态
	git status
查看提交日志
	git log [option]
		[option] 配置
			-oneline			将每一条提交都显示在一行,只显示[commit_id]前几个字符,简化提交信息
			-p/-patch			 显示每次提交更改的内容,常用于查看特定提交的详细更改
			--stat				显示每次提交中每个文件的更改统计信息,如插入的行数和删除的行数
			--graph				 以图形方式显示分支和合并的历史,帮助你可视化项目的分支结构
			--decorate			 在提交的哈希值旁边添加额外的信息,如分支名称和标签
			--all				显示所有分支的提交历史,而不仅仅是当前分支
			--since/--until		  根据日期范围过滤提交历史,例如[--since="2 weeks ago"],会显示最近两周内的提交
			--author			 根据作者名过滤提交历史
			-n					限制显示的提交数量
			--all				显示所有分支
			--pretty=oneline	  将提交信息显示为一行
			--abbrev=commit		 使输出的commitid更简短
版本回退
	git reset [option] [commit_id]
		[option]	配置
			--hard	
		[commit_id]	版本
清屏
	clear
全部操作日志
	git reflog
查看分支
	git branch
创建分支
	git branch <branch_name>
切换分支
	git checkout [option] <branch_name>
		[option]
			-b	如果分支不存在则创建切换
合并分支
	git merge <branch_name>
		注释
			将指定分支合并到当前分支
删除分支
	git branch [option] <branch_name>
		[option]
			-d 做删除检查
			-D 不做删除检查,强制删除
推进分支
	git merge <branch_name>
		注释
			将当前分支推进到指定分支
	
	
	
```

### 	别名

```te	
1.用户目录(C:/Users/用户名)创建文件[.bashrc],如果Windows系统下不允许创建以[.]开头的文件,可以在Git Bash里面使用[touch ~/.bashrc]命令创建文件
2.打开文件,编写配置的别名以及命令
```

```bash
#用于输出当前目录所有文件及基本信息
alias ll='ls -al'
#用于输出git提交日志
alias git-log='git log --pretty=oneline --all -graph --abbrev-commit'
```

## 远程仓库

### 	常用

```te
仓库
	github			https://github.com
		面向开源,托管平台
	gitee/码云		https://gitee.com
		托管平台,服务器在国内,速度快
	gitlab			https://about.gitlab.com
		开源项目,需要搭建在自己的服务器,一般用于企业,学校,搭建git私服

```

## 其他

### 	分支

```tex
注释
	本地可以拥有多个分支,每个分支都拥有各自的添加提交的本地文件,切换不同分支,会影响本地的文件
命名规范
	release/[version]		 稳定版本,已经上线/历史版本
	hotfix/[bug_name]		 上线后,修复BUG的版本	
	master 				    主分支,该分支代码进行上线
	develop				    开发分支
	fature/[function_name]	  新功能分支,该部分合并到[develop]以后可以删除,当然也可以选择保留
分支权重
	release > hotfix > master > develop > fature
其他分支
	pre 预发布分支
	test 测试分支
```

### 	状态

``````````````````````````tex
未暂存
	修改后未通过[git add]提交到缓冲区的文件
未跟踪
	新创建未通过[git add]提交到缓冲区的文件
已暂存
	通过[git add]提交到缓冲区的文件	
``````````````````````````

### 	管理

```tex
设置忽略文件
	创建[.gitignore]文件,添加以下匹配规则
	*.txt			不匹配.txt文件
	add/*/*.txt		不匹配add/所有目录/.txt文件
```

