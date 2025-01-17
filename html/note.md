# **html**

## 注释

> ### 文档
>
> **[W3C](https://www.w3c.org "W3C文档")**
>
> **[MDN](https://developer.mozilla.org "MDN文档")**
>
> **[W3School](https://www.w3school.com.cn "W3School文档")**
>
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
>
> ### 语义
>
> 标签本身的默认效果并不重要 但是标签的语义或者说含义重要
>
> 有利于搜索引擎的优化,代码的可读性强,方便设备解析 屏幕阅读器 盲人阅读器
>
> ### 锚点
>
> `url`后拼接`#[name]`即可转跳到该页面的指定`name`的`<a>`元素位置
>
> `url`后拼接`#[id]`即可转跳到该页面的指定`id`的任意元素位置
>
> 当同时有`#[name]`和`#[id]`优先转跳`#[id]`元素
>
> 如果有两个相同锚点,优先转跳至第一个锚点位置
>
> 返回页面顶部可以直接使用锚点`#`
>
> ### [符号](https://www.w3school.com.cn/html/html_symbols.asp "转义字符")
>
> | 符号 | 转义               |
> | ---- | ------------------ |
> | Α    | \&Alpha;           |
> | α    | \&alpha;           |
> | ∧    | \&and;             |
> | ∠    | \&ang;             |
> | ≈    | \&asymp;           |
> | ϶    | \&backepsilon;     |
> | Β    | \&Beta;            |
> | β    | \&beta;            |
> | ∩    | \&cap;             |
> | Χ    | \&Chi;             |
> | χ    | \&chi;             |
> | ♣    | \&clubs;           |
> | ≅    | \&cong;            |
> | ↵    | \&crarr;           |
> | ∪    | \&cup;             |
> | ↓    | \&darr;            |
> | ⇓    | \&dArr;            |
> | Δ    | \&Delta;           |
> | δ    | \&delta;           |
> | ♦    | \&diams;           |
> | ∅    | \&empty;           |
> | Ε    | \&Epsilon;         |
> | ε    | \&epsilon;         |
> | ≡    | \&equiv;           |
> | Η    | \&Eta;             |
> | η    | \&eta;             |
> | €    | \&euro;            |
> | ∃    | \&exist;           |
> | ∀    | \&forall;          |
> | Γ    | \&Gamma;           |
> | γ    | \&gamma;           |
> | Ϝ    | \&Gammad;          |
> | ϝ    | \&gammad;          |
> | ≥    | \&ge;              |
> | ↔    | \&harr;            |
> | ⇔    | \&hArr;            |
> | ♥    | \&hearts;          |
> | ∞    | \&infin;           |
> | ∫    | \&int;             |
> | Ι    | \&Iota;            |
> | ι    | \&iota;            |
> | ∈    | \&isin;            |
> | Κ    | \&Kappa;           |
> | κ    | \&kappa;           |
> | Λ    | \&Lambda;          |
> | λ    | \&lambda;          |
> | ←    | \&larr;            |
> | ⇐    | \&lArr;            |
> | ≤    | \&le;              |
> | ∗    | \&lowast;          |
> | −    | \&minus;           |
> | Μ    | \&Mu;              |
> | μ    | \&mu;              |
> | ∇    | \&nabla;           |
> | ≠    | \&ne;              |
> | ∋    | \&ni;              |
> | ∉    | \&notin;           |
> | ⊄    | \&nsub;            |
> | Ν    | \&Nu;              |
> | ν    | \&nu;              |
> | Ω    | \&Omega;           |
> | ω    | \&omega;           |
> | Ο    | \&Omicron;         |
> | ο    | \&omicron;         |
> | ⊕    | \&oplus;           |
> | ∨    | \&or;              |
> | ⊗    | \&otimes;          |
> | ∂    | \&part;            |
> | ⊥    | \&perp;            |
> | Φ    | \&Phi;             |
> | φ    | \&phi;             |
> | Π    | \&Pi;              |
> | π    | \&pi;              |
> | ϖ    | \&piv;             |
> | ∏    | \&prod;            |
> | ∝    | \&prop;            |
> | Ψ    | \&Psi;             |
> | ψ    | \&psi;             |
> | √    | \&radic;           |
> | →    | \&rarr;            |
> | ⇒    | \&rArr;            |
> | Ρ    | \&Rho;             |
> | ρ    | \&rho;             |
> | ⋅    | \&sdot;            |
> | Σ    | \&Sigma;           |
> | σ    | \&sigma;           |
> | ς    | \&sigmaf;          |
> | ∼    | \&sim;             |
> | ♠    | \&spades;          |
> | ϵ    | \&straightepsilon; |
> | ϕ    | \&straightphi;     |
> | ⊂    | \&sub;             |
> | ⊆    | \&sube;            |
> | ∑    | \&sum;             |
> | ⊃    | \&sup;             |
> | ⊇    | \&supe;            |
> | Τ    | \&Tau;             |
> | τ    | \&tau;             |
> | ∴    | \&there4;          |
> | Θ    | \&Theta;           |
> | θ    | \&theta;           |
> | ϑ    | \&thetasym;        |
> | ↑    | \&uarr;            |
> | ⇑    | \&uArr;            |
> | ϒ    | \&upsih;           |
> | Υ    | \&Upsilon;         |
> | υ    | \&upsilon;         |
> | ϰ    | \&varkappa;        |
> | ϱ    | \&varrho;          |
> | Ξ    | \&Xi;              |
> | ξ    | \&xi;              |
> | Ζ    | \&Zeta;            |
> | ζ    | \&zeta;            |

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
> > ### 顶部页眉[header]
> > ```html
> > <header></header>
> > ```
> > ### 主要部分[section]
> > ```html
> > <section></section>
> > ```
> > ### 尾部页脚[footer]
> > ```html
> > <footer></footer>
> > ```
> > ### 独立的文章内容[articel]
> > ```html
> > <articel></articel>
> > ```
> > ### 导航栏/辅助内容[nav]
> > ```html
> > <nav></nav>
> > ```
> > ### 相关内容/应用/侧边栏[aside]
> > ```html
> > <aside></aside>
> > ```
> > ### <span style="color:red">跑马灯文本[marquee]</span>
> >
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
> ><em></em>
> > ```
> >### 粗体[strong]
> > 更重要的文本
> >```html
> > <strong></strong>
> >```
> > ### 粗体[b]
> >```html
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
> > | `download` | 下载 |  `any`   | `true null 开启下载`<br/>`string 开启且设置下载名称`         |                    |                                                              |
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
>> <table border="1" width="500" height="500" cellspeacing="0">
> > 	<caption>表格标题</caption>
> > 	<colgroup>
> > 		<col span="1" style="background-color:red" />
> > 		<col span="1" style="background-color:blue" />
> > 	</colgroup>
> > 	<thead>
> > 		<tr>
> > 			<th></th>
>> 			<td></td>
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
> >
> > ### 换行[br]
> >
> > ```html
> > <br/>
> > ```
> >
> > ### 水平线[hr]
> >
> > ```html
> > <hr/>
> > ```
> >
> > ### 原格式[pre]
> >
> > ```html
> > <pre></pre>
> > ```
> >
> > ### 表单[form]
> >
> > |   属性   |   含义   |  类型  | 范围                                                         | 默认 | 注释 |
> > | :------: | :------: | :----: | ------------------------------------------------------------ | :--- | :--- |
> > | `action` | 提交地址 | `url`  |                                                              |      |      |
> > | `target` |   目标   | `enum` | `_self 当前标签页`<br/>`_blank 新标签页`<br/>`_parent 父级页面`<br/>`_top 顶级页面`<br/>`[name] 嵌入框架` |      |      |
> > | `method` | 提交方式 | `enum` | `get`<br/>`post`                                             |      |      |
> >
> > ```html
> > <form action="test.html" target="_blank" method="post">
> > 	<fieldset>
> > 		<legend>基础信息</legend>
> > 		<imput type="text" value="" name="user" />
> > 		<imput type="password" value="" name="pass" />
> > 		<lavel for="sex_1">男</lavel>
> > 		<input id="sex_1" type="radio" value="1" name="sex" checked />
> > 		<lavel for="sex_0">女</lavel>
> > 		<input id="sex_0" type="radio" value="0" name="sex" />
> > 	</fieldset>
> > 	<fieldset>
> > 		<legend>进阶信息</legend>
> > 		<textarea name="personalized_signature"></textarea>
> > 		<select name="address">
> > 			<option value="辽宁">辽宁</option>
> > 			<option value="吉林">吉林</option>
> > 			<option value="黑龙江">黑龙江</option>
> > 		</select>
> > 	</fieldset>
> > 	<fieldset>
> > 		<legend>操作区</legend>
> > 		<button type="submit">登录</button>
> > 	</fieldset>
> > </form>
> > ```
> >
> > > ### 控件[input]
> > >
> > > |         属性          |   含义   |   类型   | 范围                                                         | 默认                                         | 注释                                                         |
> > > | :-------------------: | :------: | :------: | ------------------------------------------------------------ | :------------------------------------------- | :----------------------------------------------------------- |
> > > |        `type`         |   类型   |  `enum`  | `text 文本框`<br/>`password 密码框`<br/>`number 数字框`<br/>`search 搜索框`<br/>`tel 电话框`<br/>`url 网址框`<br/>`email 电子邮件框`<br/>`radio 单选框`<br/>`checkbox 复选框`<br/>`button 普通按钮`<br/>`reset 重置按钮`<br/>`submit 提交按钮`<br/>`image 图片提交按钮`<br/>`time 时间选择器(时分)`<br/>`month 时间选择器(年月)`<br/>`week 时间选择器(年周)`<br/>`date 时间选择器(年月日)`<br/>`datetime-local 时间选择器(年月日时分秒)`<br/>`range 滑块`<br/>`file 文件上传`<br/>`hidden 隐藏域`<br/>`color 拾色器` | `text 文本框`                                |                                                              |
> > > |        `name`         |   属性   | `string` |                                                              |                                              |                                                              |
> > > |        `value`        |    值    | `string` |                                                              |                                              | `输入框类` 输入的内容<br/>`按钮类` 按钮显示的文本<br/>`其他类` 值 |
> > > |       `hidden`        |   隐藏   |  `any`   | `true null 隐藏`                                             |                                              |                                                              |
> > > |     `placeholder`     | 提示文本 | `string` |                                                              |                                              | `输入框类` 提示文本                                          |
> > > |        `size`         |   宽度   |  `int`   |                                                              |                                              | `输入框类` 宽度[单位:em]<br/>`非输入框` 宽度[单位:px]        |
> > > |      `maxlength`      | 最大字符 |  `int`   |                                                              |                                              | `输入框类` 最多字符数量                                      |
> > > |      `minlength`      | 最小字符 |  `int`   |                                                              |                                              | `输入框类` 最少字符数量                                      |
> > > |       `checked`       | 选框状态 |  `any`   | `true null 选中`                                             |                                              | `选择框类` 选框默认状态                                      |
> > > |      `multiple`       | 选框多选 |  `any`   | `true null 开启`                                             |                                              | `file` 可以选中多个文件                                      |
> > > |         `max`         |  最大值  |  `int`   |                                                              |                                              | `number` 最大值<br/>`range` 最大值                           |
> > > |         `min`         |  最小值  |  `int`   |                                                              |                                              | `number` 最小值<br/>`range` 最小值                           |
> > > |        `step`         |   步长   |  `int`   |                                                              |                                              | `number` 步长<br/>`range` 步长                               |
> > > |         `src`         |   地址   |  `url`   |                                                              |                                              | `image` 地址                                                 |
> > > |      `readonly`       | 只读模式 |  `any`   | `true null 开启`                                             |                                              |                                                              |
> > > |      `required`       |  必填项  |  `any`   | `true null 开启`                                             |                                              |                                                              |
> > > |        `width`        |   宽度   |  `int`   |                                                              |                                              | `image` 宽度                                                 |
> > > |       `height`        |   高度   |  `int`   |                                                              |                                              | `image` 高度                                                 |
> > > |         `alt`         | 图片标题 | `string` |                                                              |                                              | `image` 标题                                                 |
> > > |       `accept`        | 文件类型 |  `enum`  | `.xxx` 自定义<br/>`audio/*` 音频文件<br/>`video/*` 视频文件<br/>`image/*` 图片文件 |                                              | `file` 限制上传文件的类型,可以选则多种类型[`audio/*,video/*`] |
> > > |     `formtarget`      | 表单目标 |  `enum`  | `_self 当前标签页`<br/>`_blank 新标签页`<br/>`_parent 父级页面`<br/>`_top 顶级页面`<br/>`[name] 嵌入框架` |                                              | `submit` 表单提交目标页面<br/>`image` 表单提交目标页面       |
> > > |   `formnovalidate`    | 跳过验证 |  `any`   | `true null 开启`                                             |                                              | `submit` 表单不验证,包括特殊输入框默认验证,正则表达式<br>`image` 表单不验证,包括特殊输入框默认验证,正则表达式 |
> > > |     `formmethod`      | 提交方式 |  `enum`  | `get`<br/>`post`                                             |                                              | `submit` 表单提交方式<br/>`image` 表单提交方式               |
> > > |     `formenctype`     | 提交编码 |  `enum`  | `application/x-www-form-urlencoded 编码发送`<br/>`multipart/form-data 文件上传`<br/>`text/plain 原文发送` | `application/x-www-form-urlencoded 编码发送` | `submit` 表单提交编码<br/>`image` 表单提交编码               |
> > > |        `form`         |   归属   | `string` | `[id] 表单ID`                                                |                                              | 表示该控件归属于指定`id`的`<form>`表单                       |
> > > |      `disabled`       |   禁用   |  `any`   | `true null 开启`                                             |                                              |                                                              |
> > > |      `autofocus`      | 自动聚焦 |  `any`   | `true null 开启`                                             |                                              |                                                              |
> > > |    `autocomplete`     | 预测填入 |  `enum`  | `on 开启`<br/>`off 关闭`                                     | `on 开启`                                    | `输入框类` 当浏览器有缓存或记住密码时提示历史记录            |
> > > |    `popovertarget`    | 展示关联 | `string` | `[id] 元素ID`                                                |                                              | `button` 点击按钮指定`id`元素,更改该元素`CSS-display`属性,`id`元素需要拥有`popover`属性,`popover`属性取值范围`true null 开启` |
> > > | `popovertargetaction` | 展示类型 |  `enum`  | `show 显示`<br/>`hide 隐藏`<br/>`toggle 切换`                |                                              | `button` 与`popovertarget`属性搭配使用                       |
> > > |        `list`         | 引用列表 | `string` | `[id] 列表ID`                                                |                                              | `输入框类` 引用一个列表并且展示类似输入框内容的数据,与`<datalist>`列表标签搭配使用 |
> > >
> > > ### 按钮[button]
> > >
> > > |  属性  | 含义 |  类型  | 范围                                                         | 默认              | 注释 |
> > > | :----: | :--: | :----: | ------------------------------------------------------------ | :---------------- | :--- |
> > > | `type` | 类型 | `enum` | `reset 重置按钮`<br/>`submit 提交按钮`<br/>`button 普通按钮` | `submit 提交按钮` |      |
> > >
> > > ### 文本域[textarea]
> > >
> > > |  属性  | 含义 |   类型   | 范围 | 默认 | 注释     |
> > > | :----: | :--: | :------: | ---- | :--- | :------- |
> > > | `name` | 属性 | `string` |      |      |          |
> > > | `cols` | 宽度 |  `int`   |      |      | 单位[em] |
> > > | `rows` | 高度 |  `int`   |      |      | 单位[em] |
> > > ### 下拉框[select]
> > >
> > > |  属性  | 含义 |   类型   | 范围 | 默认 | 注释     |
> > > | :----: | :--: | :------: | ---- | :--- | :------- |
> > > | `name` | 属性 | `string` |      |      |          |
> > >
> > > > ### 选项[option]
> > > >
> > > > |    属性    | 含义 |   类型   | 范围             | 默认 | 注释 |
> > > > | :--------: | :--: | :------: | ---------------- | :--- | :--- |
> > > > |  `value`   |  值  | `string` |                  |      |      |
> > > > | `selected` | 状态 |  `any`   | `true null 选中` |      |      |
> > >
> > > ### 绑定[lavel]
> > >
> > > | 属性  |   含义   |   类型   | 范围          | 默认 | 注释                                                         |
> > > | :---: | :------: | :------: | ------------- | :--- | :----------------------------------------------------------- |
> > > | `for` | 绑定控件 | `string` | `[id] 控件ID` |      | 点击`lavel`标签,自动聚焦到绑定控件<br/>可以使用`for`属性绑定控件,也可以使用`<lavel>`标签直接包裹控件 |
> > >
> > > ### 分组[fieldset]
> > >
> > > > ### 分组名称[legend]
> >
> > ### 嵌入框架[iframe]
> >
> > |       属性        |  含义  |   类型   | 范围                                     | 默认 | 注释                                                         |
> > | :---------------: | :----: | :------: | ---------------------------------------- | :--- | :----------------------------------------------------------- |
> > |       `src`       |  网址  |  `url`   |                                          |      |                                                              |
> > |      `name`       |  标识  | `string` |                                          |      |                                                              |
> > |      `width`      |  宽度  |  `int`   |                                          |      |                                                              |
> > |     `height`      |  高度  |  `int`   |                                          |      |                                                              |
> > |  `freameborder`   |  边框  |  `enum`  | `0 无边框`<br/>`1 有边框`                |      |                                                              |
> > |    `scrolling`    | 滚动条 |  `enum`  | `yes 显示`<br/>`no 隐藏`<br/>`auto 自动` |      |                                                              |
> > | `allowfullscreen` |  全屏  |  `any`   | `true null 允许`                         |      | 视频或多媒体,`allowfullscreen`属性允许全屏显示`<iframe>`内容 |
> >
> > ```html
> > <iframe src="https://www.baidu.com" width="500" height="500" freameborder="0" scrolling="no" allowfullscreen></iframe>
> > ```
> >
> > ### 视频播放器[video]
> >
> > |    属性    |   含义   |   类型   | 范围             | 默认 | 注释 |
> > | :--------: | :------: | :------: | ---------------- | :--- | :--- |
> > |   `src`    |   地址   | `url` |                  |      |      |
> > | `controls` | 控制面板 |  `any`   | `true null 显示` |      |      |
> > | `autoplay` | 自动播放 |       `any`   | `true null 开启`        |      |      |
> > |      `loop`      |   循环播放       |         `any`   | `true null 开启`           |      |      |
> > | `muted` | 静音播放 | `any` | `true null 开启` |      |      |
> > | `poster` | 加载海报 | `url` |                  |      |      |
> > | `preload` | 预加载 | `enum` | `auto 自动`<br/>`metadata 开启`<br/>`none 关闭` |      |      |
> >
> > ```html
> > <video src="test.mp4" controls autoplay loop poster="test.jpg" preload="metadata"></video>
> > ```
> >
> > ### 音频播放器[audio]
> >
> > |    属性    |   含义   |   类型   | 范围             | 默认 | 注释 |
> > | :--------: | :------: | :------: | ---------------- | :--- | :--- |
> > |   `src`    |   地址   | `url` |                  |      |      |
> > | `controls` | 控制面板 |  `any`   | `true null 显示` |      |      |
> > | `autoplay` | 自动播放 |       `any`   | `true null 开启`        |      |      |
> > |      `loop`      |   循环播放       |         `any`   | `true null 开启`           |      |      |
> > | `muted` | 静音播放 | `any` | `true null 开启` |      |      |
> > | `preload` | 预加载 | `enum` | `auto 自动`<br/>`metadata 开启`<br/>`none 关闭` |      |      |
> >
> > ```html
> > <audio src="test.mp4" controls autoplay loop preload="metadata"></audio>
> > ```

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
