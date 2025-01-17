# **html**

## 注释

> ### 发布
>
> |   版本   | 日期           |
> | :------: | :------------- |
> | HTML1.0  | 1993年06月     |
> | HTML2.0  | 1995年11月     |
> | HTML3.2  | 1996年01月14日 |
> | HTML4.0  | 1997年12月18日 |
> | HTML4.01 | 1999年12月24日 |
> | XHTML1.0 | 2000年01月26日 |
> | XHTML1.1 | 2001年05月31日 |
> |  HTML5   | 2014年10月     |
>
> ### 优势
>
> 目前主流浏览器全部支持HTML5的运行
>
> ### W3C
>
> World Wide Web Consortium 万维网联盟 1994年成立
>
> Web技术领域最权威最具影响力的国际中立性技术标准机构
>
> ### 标签
>
> #### **学名**
>
> <起始标签>标签体</结束标签>
>
> #### **属性**
>
> 当同一个标签内拥有两个相同的属性 仅生效第一个属性的值 即使该值非法
>
> #### **类型**
>
> 块级元素内可以包括行内元素与块级元素
>
> 行内元素可以包括行内元素 但无法包括块级元素
>
> `<p>`标签内不能写块级元素
>
> `<h1>`~`<h6>`不能互相嵌套
>
> `<a>`标签可以包括行内元素和块级元素 但无法包含另一个`<a>`标签
>
> |           类型            | 注释                                                         |
> | :-----------------------: | :----------------------------------------------------------- |
> |         行内元素          | 不会独占一行<br/>宽度和高度随内容而确定                      |
> |         块级元素          | 会独占一行 后续的其他元素会强制换行<br/>高度随内容而确定<br/>宽度默认100% |
> | 行内块级元素/内联块级元素 | 不会独占一行<br/>高度随内容而定                              |

## 语法

> ### 注释
>
>直观且简便的告诉开发者某段代码的含义
>
>```html
><!-- 注释文本 -->
>```
>
>### 文档规范声明
>
>告诉浏览器接下来的HTML代码遵循的版本规范
>
>| 声明类型                                                  | 语法                                                         |
>| --------------------------------------------------------- | :----------------------------------------------------------- |
>| XHTML Basic 1.0 DTD                                       | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.0//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd">` |
>| HTML 2.0 DTD                                              | `<!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN">`         |
>| HTML 3.2 DTD                                              | `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">`    |
>| HTML 4.01 Strict                                          | `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">` |
>| HTML 4.01 Transitional                                    | `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">` |
>| HTML 4.01 Frameset                                        | `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">` |
>| HTML 5                                                    | `<!DOCTYPE html>`                                            |
>| XHTML 1.0 Strict                                          | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">` |
>| XHTML 1.0 Transitional                                    | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">` |
>| XHTML 1.0 Frameset                                        | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">` |
>| XHTML 1.1 DTD                                             | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">` |
>| XHTML Basic 1.1                                           | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">` |
>| MathML 1.01 DTD                                           | `<!DOCTYPE math SYSTEM "http://www.w3.org/Math/DTD/mathml1/mathml.dtd">` |
>| MathML 2.0 DTD                                            | `<!DOCTYPE math PUBLIC "-//W3C//DTD MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/mathml2.dtd">` |
>| SVG 1.0 DTD                                               | `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">` |
>| SVG 1.1 Full DTD                                          | `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">` |
>| SVG 1.1 Basic DTD                                         | `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Basic//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-basic.dtd">` |
>| SVG 1.1 Tiny DTD                                          | `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">` |
>| XHTML MathML SVG DTD                                      | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0 plus SVG 1.1//EN" "http://www.w3.org/2002/04/xhtml-math-svg/xhtml-math-svg.dtd">` |
>| XHTML MathML SVG Profile (XHTML as the host language) DTD | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0 plus SVG 1.1//EN" "http://www.w3.org/2002/04/xhtml-math-svg/xhtml-math-svg.dtd">` |
>| XHTML MathML SVG Profile (Using SVG as the host) DTD      | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0 plus SVG 1.1//EN" "http://www.w3.org/2002/04/xhtml-math-svg/xhtml-math-svg.dtd">` |
>
>| 模式                  | 注释                              |
>| --------------------- | --------------------------------- |
>| Strict 严格模式       | 严格遵守文档 不可以使用文档以外的 |
>| Frameset 框架模式     | 严格遵守文档 可以附加一些框架的   |
>| Transitional 宽松模式 | 允许使用文档以外的标签            |
>
>```html
><!DOCTYPE html>
>```

## 元素

> ### HTML[html]
>
> |  属性  | 含义 | 类型 | 范围 | 默认 | 注释                  |
> | :----: | :--: | :--: | :--- | :--- | :-------------------- |
> | `lang` |      |      |      |      | [**跳转**](#通用属性) |
>
> ```html
> <html lang="zh-cn"></html>
> ```
>
> ### 头部[head]
>
> ```html
> <head></head>
> ```
> > ### 标题[title]
> >浏览器标签选项卡显示的网站名称
> >```html
> ><title></title>
> >```
> >### 链接/引入[link]
> >|  属性  | 含义 |  类型  | 范围                   | 默认 | 注释 |
> >| :----: | :--: | :----: | :--------------------- | :--- | :--- |
> >| `rel`  | 关系 | `enum` | `stylesheet CSS样式表` |      |      |
> >| `href` | 地址 | `url`  |                        |      |      |
> >```html
> ><link rel="stylesheet" href="./test.css" />
> >```
> >### 配置/描述/定义[meta]
> >|     属性     |     含义      |  类型  | 范围                                                         | 默认 | 注释                                                         |
> >| :----------: | :-----------: | :----: | :----------------------------------------------------------- | :--- | :----------------------------------------------------------- |
> >|  `charset`   |     编码      | `enum` | 编码格式                                                     |      |                                                              |
> >|    `name`    |   功能名称    | `enum` | `keywords 关键字` 定义网页的关键字,有利于搜索引擎优化<br/>`description 描述` 定义网站的描述信息,有利于搜索引擎优化<br/>`viewport 移动端配置` 用户通过移动设备访问网页时额外的显示适配<br/>`rebots 爬虫配置` 搜索引擎的爬虫机器人对本页面的爬取设置<br/>`arthor 作者` 网页作者/制作团队<br/>`generator 工具` 编写网站时使用的工具软件<br/>`copyright 版权信息` 网站的版权信息 |      |                                                              |
> >| `http-equiv` | 行为/传递信息 | `enum` | `refresh 刷新页面`<br/>`X-UA-Compatible 兼容模式`            |      | http响应头的模拟 用于向浏览器传递一些额外的信息 从而控制或影响浏览器的行为 |
> >|   content    |     取值      | `any`  | `name=keywords` `string`<br/>`name=description` `string`<br/>`name=viewport` `config`<br/>`name=rebots` `index 允许` `noindex 禁止` `follow 允许爬取本页面超链接` `nofollow 禁止爬取本页面超链接` `all 允许(index+follow)` `none 禁止(noindex+nofollow)` `noarchive 不缓存页面内容` `nocache 不缓存页面内容`<br/>`name=author` `string`<br/>`name=generator` `string`<br/>`name=copyright` `string`<br/>`http-equiv=refresh` `config`<br/>`http-equiv=X-UA-Compatible` `IE=edge`<br/> |      |                                                              |
> >```html
> ><!-- 关键字 -->
> ><meta name="keywords" content="关键字1,关键字2">
> ><!-- 描述 -->
> ><meta name="description" content="描述">
> ><!-- 移动端配置 如果用户使用移动端访问网页时 将元素比例放大至合适比例 -->
> ><meta name="viewport" content="width=device-width, initial-scale=1.0">
> ><!-- 爬虫配置 允许搜索引擎爬取本页面 -->
> ><meta name="rebots" content="index">
> ><!-- 作者 -->
> ><meta name="author" content="Anttill">
> ><!-- 工具 -->
> ><meta name="generator" content="VSCode">
> ><!-- 版权信息 -->
> ><meta name="copyright" content="2023-2027©版权所有">
> ><!-- 刷新页面 10秒后自动刷新页面转跳到百度,如果不传递url参数 则刷新当前页面,这种转跳浏览器的后退键是无法使用的 -->
> ><meta http-equiv="refresh" content="10;url=http://www.baidu.com">
> ><!-- 兼容模式 用户如果使用IE8及其以上版本,则进入edge渲染模式 -->
> ><meta http-equiv="X-UA-Compatible" content="IE=edge">
> >```
>
> ### 身体[body]
>
> ```html
> <body></body>
> ```
>
> > ### 标题[h1~h6]
> > ```html
> > <h1></h1>
> > <h2></h2>
> > <h3></h3>
> > <h4></h4>
> > <h5></h5>
> > <h6></h6>
> > ```
> > ### 段落[p]
> > ```html
> > <p></p>
> > ```
> > ### 盒子[div]
> > ```html
> > <div></div>
> > ```
> > ### <span style="color:red">跑马灯文本[marquee]</span>
> > |   属性    |   含义   |  类型   | 范围 | 默认          | 注释 |
> > | :-------: | :------: | :-----: | ---- | :------------ | :--- |
> > |  `loop`   | 循环次数 |  `int`  |      | `-1 无限循环` |      |
> > | `bgcolor` | 背景颜色 | `color` |      |               |      |
> > ```html
> > <marquee loop="5" bgcolor="red"></marquee>
> > ```
> > ### 斜体[em]
> > 重要的文本
> > ```html
> > <em></em>
> > ```
> > ### 斜体[i]
> > ```html
> > <em></em>
> > ```
> > ### 粗体[strong]
> > 更重要的文本
> > ```html
> > <strong></strong>
> > ```
> > ### 粗体[b]
> > ```html
> > <strong></strong>
> > ```
> > ### 文本[span]
> > ```html
> > <span></span>
> > ```
> > ### 作品标题/书籍/音乐/电影[cite]
> > ```html
> > <cite></cite>
> > ```
> > ### 专业术语/名词[dfn]
> > ```html
> > <dfn></dfn>
> > ```
> > ### 删除线[del]
> > ```html
> > <del></del>
> > ```
> > ### 下划线[ins]
> > ```html
> > <ins></ins>
> > ```
> > ### 下标[sub]
> > ```html
> > <sub></sub>
> > ```
> > ### 上标[sup]
> > ```html
> > <sup></sup>
> > ```
> > ### 代码[code]
> > ```html
> > <code></code>
> > ```
> > ### 软件/功能的提示文本[samp]
> > ```html
> > <samp></samp>
> > ```
> > ### 键盘按键[kbd]
> > ```html
> > <kbd></kbd>
> > ```
> > ### 缩写/需要悬浮显示的文本[abbr]
> > ```html
> > <abbr></abbr>
> > ```
> > ### 需要翻转显示的文本[bdo]
> > ```html
> > <bdo></bdo>
> > ```
> > ### 代码中的变量[var]
> > ```html
> > <var></var>
> > ```
> > ### 法律版权相关[small]
> > ```html
> > <small></small>
> > ```
> > ### 反差/错误的单词拼写/错误文本[u]
> > ```html
> > <u></u>
> > ```
> > ### 名人说的话/引入的名人名言[q]
> > ```html
> > <q></q>
> > ```
> > ### 名人说的话/引入的名人名言段[blockquote]
> > ```html
> > <blockquote></blockquote>
> > ```
> > ### 图片[img]
> > 当图片只设置宽度或高度时 图片会等比例缩放
> > | 属性 | 含义 | 类型 | 范围 | 默认 | 注释 |
> > | :------: | :--: | :------: | ---- | :--- | :----------------------------------------------------------- |
> > |  `src`   | 地址 |  `url`   | | | |
> > |  `alt`   | 描述 | `string` | | | 当图片加载失败时会显示该文本<br/>
> > SEO搜索引擎可以通过图片的alt值得到图片的内容<br/>盲人阅读器可以阅读图片的alt值 |
> > | `width`  | 宽度 |  `int`   | | | |
> > | `height` | 高度 |  `int`   | | | |
> > ```html
> > <img src="image/test.jpg" alt="测试图片" width="500" height="500" />
> > ```
> > ### 链接[a]
> > |    属性    | 含义 |   类型   | 范围                                                         | 默认               | 注释                                                         |
> > | :--------: | :--: | :------: | ------------------------------------------------------------ | :----------------- | :----------------------------------------------------------- |
> > |   `href`   | 地址 |  `url`   | `url 网址`<br/>`javascript:[js_code] js代码`<br/>`tel:[phone] 移动端拨打电话`<br/>`mailto:[email] 发送邮件`<br/>`sms:[phone] 移动设备发送短信`<br/>`#[id] 转跳锚点` |                    | 地址为网页时 会转跳到该网页<br/>地址为文件时 如果浏览器支持该文件类型 则浏览该文件 否则 会下载该文件 |
> > |  `target`  | 目标 |  `enum`  | `_self 当前标签页`<br/>`_blank 新标签页`<br/>`_parent 父级页面`<br/>`_top 顶级页面`<br/>`[name] 嵌入框架` | `_self 当前标签页` |                                                              |
> > | `download` | 下载 |  `any`   | `true|null 开启下载`<br/>`string 开启且设置下载名称`         |                    |                                                              |
> > |   `name`   | 锚点 | `string` |                                                              |                    |                                                              |
> > ```html
> > <a href="https://www.baidu.com" target="_blank"></a>
> > ```
> > ### 无序列表[ul]
> > ```html
> > <ol>
> > 	<li>列表项1</li>
> > 	<li>列表项2</li>
> > </ol>
> > ```
> > > ### 列表项[li]
> > >
> > ### 有序列表[ol]
> > ```html
> > <ol>
> > 	<li>列表项1</li>
> > 	<li>列表项2</li>
> > </ol>
> > ```
> > > ### 列表项[li]
> > >
> >
> > ### 定义列表[dl]
>
> > ```html
> > <dl>
> > 	<dt>标题1</dt>
> > 	<dd>描述1</dd>
> > 	<dt>标题2</dt>
> > 	<dd>描述2</dd>
> > </dl>
> > ```
>
> > > ### 术语标题[dt]
> > > ### 术语描述[dd]
> >
> > ### 表格[table]
> >
> > |      属性      |    含义    | 类型  | 范围                      | 默认       | 注释                                            |
> > | :------------: | :--------: | :---: | ------------------------- | :--------- | :---------------------------------------------- |
> > |    `border`    |    边框    | `int` | `0 无边框`<br/>`1 有边框` | `0 无边框` | 该值大于1时只有表格外侧边框变粗 单元格宽度仅为1 |
> > |    `width`     |    宽度    | `int` |                           |            |                                                 |
> > |    `height`    |    高度    | `int` |                           |            |                                                 |
> > | `cellspeacing` | 单元格间隔 | `int` |                           |            |                                                 |
> >
> > ```html
> > <table border="1" width="500" height="500" cellspeacing="0">
> > 	<caption>表格标题</caption>
> > 	<colgroup>
> > 		<col span="1" style="background-color:red" />
> > 		<col span="1" style="background-color:blue" />
> > 	</colgroup>
> > 	<thead>
> > 		<tr>
> > 			<th></th>
> > 			<td></td>
> > 		</tr>
> > 	</thead>
> > 	<tbody>
> > 		<tr>
> > 			<td></td>
> > 			<td></td>
> > 		</tr>
> > 	</tbody>
> > 	<tfoot>
> > 		<tr>
> > 			<th></th>
> > 			<td></td>
> > 		</tr>
> > 	</tfoot>
> > </table>
> > ```
> >
> > > ### 表格标题[caption]
> > >
> > > ### 列规则组[colgroup]
> > >
> > > > ### 列规则[col]
> > > >
> > > > `<colgroup>`中的每一项`<col>`都代表一列,如果有`span`属性,则代表`span`列,应用于`<col>`的CSS样式,则应用到对应列上
> > > > | 属性 | 含义 | 类型 | 范围 | 默认 | 注释 |
> > > > | :----: | :--: | :---: | ---- | :--- | :--- |
> > > > | `span` | 列数 | `int` | | `1`  | |
> > > ### 表格头部[thead]
> > > |   属性   |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > | :------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > | `height` |   高度   | `int`  |                                                    |               |      |
> > > | `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > | `valign` | 垂直对齐 | `enum` | `top 上对齐`<br>`middle 居中`<br/>`bottom 下对齐`  | `top 上对齐`  |      |
> > > > ### 行[tr]
> > > > |   属性   |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > | :------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > | `height` |   高度   | `int`  |                                                    |               |      |
> > > > | `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > | `valign` | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > ### 表头单元格[th]
> > > > > |   属性    |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > > | :-------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > > | `height`  |   高度   | `int`  |                                                    |               |      |
> > > > > |  `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > > | `valign`  | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > | `colspan` |   跨列   | `int`  |                                                    |               |      |
> > > > > | `rowspan` |   跨行   | `int`  |                                                    |               |      |
> > > > > ### 单元格[td]
> > > > > |   属性    |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > > | :-------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > > | `height`  |   高度   | `int`  |                                                    |               |      |
> > > > > |  `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > > | `valign`  | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > | `colspan` |   跨列   | `int`  |                                                    |               |      |
> > > > > | `rowspan` |   跨行   | `int`  |                                                    |               |      |
> > > ### 表格身体[tbody]
> > > |   属性   |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > | :------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > | `height` |   高度   | `int`  |                                                    |               |      |
> > > | `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > | `valign` | 垂直对齐 | `enum` | `top 上对齐`<br>`middle 居中`<br/>`bottom 下对齐`  | `top 上对齐`  |      |
> > > > ### 行[tr]
> > > > |   属性   |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > | :------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > | `height` |   高度   | `int`  |                                                    |               |      |
> > > > | `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > | `valign` | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > ### 表头单元格[th]
> > > > > |   属性    |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > > | :-------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > > | `height`  |   高度   | `int`  |                                                    |               |      |
> > > > > |  `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > > | `valign`  | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > | `colspan` |   跨列   | `int`  |                                                    |               |      |
> > > > > | `rowspan` |   跨行   | `int`  |                                                    |               |      |
> > > > > ### 单元格[td]
> > > > > |   属性    |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > > | :-------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > > | `height`  |   高度   | `int`  |                                                    |               |      |
> > > > > |  `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > > | `valign`  | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > | `colspan` |   跨列   | `int`  |                                                    |               |      |
> > > > > | `rowspan` |   跨行   | `int`  |                                                    |               |      |
> > > ### 表格尾部[tfoot]
> > > |   属性   |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > | :------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > | `height` |   高度   | `int`  |                                                    |               |      |
> > > | `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > | `valign` | 垂直对齐 | `enum` | `top 上对齐`<br>`middle 居中`<br/>`bottom 下对齐`  | `top 上对齐`  |      |
> > > > ### 行[tr]
> > > > |   属性   |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > | :------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > | `height` |   高度   | `int`  |                                                    |               |      |
> > > > | `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > | `valign` | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > ### 表头单元格[th]
> > > > > |   属性    |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > > | :-------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > > | `height`  |   高度   | `int`  |                                                    |               |      |
> > > > > |  `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > > | `valign`  | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > | `colspan` |   跨列   | `int`  |                                                    |               |      |
> > > > > | `rowspan` |   跨行   | `int`  |                                                    |               |      |
> > > > > ### 单元格[td]
> > > > > |   属性    |   含义   |  类型  | 范围                                               | 默认          | 注释 |
> > > > > | :-------: | :------: | :----: | -------------------------------------------------- | :------------ | :--- |
> > > > > | `height`  |   高度   | `int`  |                                                    |               |      |
> > > > > |  `align`  | 水平对齐 | `enum` | `left 左对齐`<br/>`center 居中`<br/>`right 右对齐` | `left 左对齐` |      |
> > > > > | `valign`  | 垂直对齐 | `enum` | `top 上对齐`<br/>`middle 居中`<br/>`bottom 下对齐` | `top 上对齐`  |      |
> > > > > | `colspan` |   跨列   | `int`  |                                                    |               |      |
> > > > > | `rowspan` |   跨行   | `int`  |                                                    |               |      |

## 属性

> ### 通用属性
> |  属性   |   含义   |    类型    | 范围                                                         | 默认 | 注释                                                         |
> | :-----: | :------: | :--------: | :----------------------------------------------------------- | :--- | :----------------------------------------------------------- |
> |  `id`   |  唯一ID  |  `string`  |                                                              |      | `id`的取值不可以重复<br/>当想为一个标签设置多个`id`属性时 可以使用空格分割开两个`id`值<br/>`id`不能设置为纯数字或中文 |
> |  `dir`  | 文本顺序 |   `enum`   | `ltr 正序`<br/>`rtl 倒序`                                    |      |                                                              |
> | `name`  | 标记名称 |  `string`  |                                                              |      |                                                              |
> | `lang`  |   语言   |   `enum`   | [语言][lang-语言]-种类<br/>[语言][lang-语言]-[国家/地区][lang-国家/地区] |      | 表示该标签内的文本的语言类型<br/>有利于搜索引擎优化<br/>浏览器提示翻译功能<br/>阅读器和盲人辅助器用户体验友好 |
> | `class` |   分组   |  `string`  |                                                              |      | 当想为一个标签设置多个`class`属性时 可以使用空格分割开两个`class`值<br/>`class`不能设置为纯数字或中文 |
> | `title` |   标题   |  `string`  |                                                              |      | 鼠标悬浮时显示的文本                                         |
> | `style` | CSS样式  | `css_code` |                                                              |      |
> ### 事件属性

[lang-语言]: https://www.w3school.com.cn/tags/html_ref_language_codes.asp#dataintable

[lang-国家/地区]: https://www.w3school.com.cn/tags/html_ref_country_codes.asp
