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

>### 注释
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

>### HTML[html]
>
>|  属性  | 含义 | 类型 | 范围 | 注释                  |
>| :----: | :--: | :--: | :--- | :-------------------- |
>| `lang` |      |      |      | [**跳转**](#通用属性) |
>
>```html
><html lang="zh-cn"></html>
>```
>
>### 头部[head]
>
>```html
><head></head>
>```
>
>>### 标题[title]
>>
>>浏览器标签选项卡显示的网站名称
>>
>>```html
>><title></title>
>>```
>>
>>### 链接/引入[link]
>>
>>|  属性  | 含义 |  类型  | 范围                   | 注释 |
>>| :----: | :--: | :----: | :--------------------- | :--- |
>>| `rel`  | 关系 | `enum` | `stylesheet CSS样式表` |      |
>>| `href` | 地址 | `url`  |                        |      |
>>
>>```html
>><link rel="stylesheet" href="./test.css" />
>>```
>>
>>
>>
>>### 配置/描述/定义[meta]
>>
>>
>
>

## 属性

> ### 通用属性
>
> |  属性   |   含义   |    类型    | 范围                                                         | 注释                                                         |
> | :-----: | :------: | :--------: | :----------------------------------------------------------- | :----------------------------------------------------------- |
> |  `id`   |  唯一ID  |  `string`  |                                                              | `id`的取值不可以重复<br/>当想为一个标签设置多个`id`属性时 可以使用空格分割开两个`id`值<br/>`id`不能设置为纯数字或中文 |
> |  `dir`  | 文本顺序 |   `enum`   | `ltr 正序`<br/>`rtl 倒序`                                    |                                                              |
> | `name`  | 标记名称 |  `string`  |                                                              |                                                              |
> | `lang`  |   语言   |   `enum`   | [语言][lang-语言]-种类<br/>[语言][lang-语言]-[国家/地区][lang-国家/地区] | 表示该标签内的文本的语言类型<br/>有利于搜索引擎优化<br/>浏览器提示翻译功能<br/>阅读器和盲人辅助器用户体验友好 |
> | `class` |   分组   |  `string`  |                                                              | 当想为一个标签设置多个`class`属性时 可以使用空格分割开两个`class`值<br/>`class`不能设置为纯数字或中文 |
> | `title` |   标题   |  `string`  |                                                              | 鼠标悬浮时显示的文本                                         |
> | `style` | CSS样式  | `css_code` |                                                              |                                                              |
>
> ### 事件属性















[lang-语言]: https://www.w3school.com.cn/tags/html_ref_language_codes.asp#dataintable
[lang-国家/地区]: https://www.w3school.com.cn/tags/html_ref_country_codes.asp
