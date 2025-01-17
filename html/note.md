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
> | 字符 | 十进制 | 十六进制 | 实体               | 名称                                                         |
> | ---- | ------ | -------- | ------------------ | ------------------------------------------------------------ |
> | Ͱ    | 880    | 370      |                    | GREEK CAPITAL LETTER HETA                                    |
> | ͱ    | 881    | 371      |                    | GREEK SMALL LETTER HETA                                      |
> | Ͳ    | 882    | 372      |                    | GREEK CAPITAL LETTER ARCHAIC SAMPI                           |
> | ͳ    | 883    | 373      |                    | GREEK SMALL LETTER ARCHAIC SAMPI                             |
> | ʹ    | 884    | 374      |                    | GREEK NUMERAL SIGN                                           |
> | ͵    | 885    | 375      |                    | GREEK LOWER NUMERAL SIGN                                     |
> | Ͷ    | 886    | 376      |                    | GREEK CAPITAL LETTER PAMPHYLIAN DIGAMMA                      |
> | ͷ    | 887    | 377      |                    | GREEK SMALL LETTER PAMPHYLIAN DIGAMMA                        |
> | ͺ    | 890    | 037A     |                    | GREEK YPOGEGRAMMENI                                          |
> | ͻ    | 891    | 037B     |                    | GREEK SMALL REVERSED LUNATE SIGMA SYMBOL                     |
> | ͼ    | 892    | 037C     |                    | GREEK SMALL DOTTED LUNATE SIGMA SYMBOL                       |
> | ͽ    | 893    | 037D     |                    | GREEK SMALL REVERSED DOTTED LUNATE SIGMA SYMBOL              |
> | ;    | 894    | 037E     |                    | GREEK QUESTION MARK                                          |
> | ΄    | 900    | 384      |                    | GREEK TONOS                                                  |
> | ΅    | 901    | 385      |                    | GREEK DIALYTIKA TONOS                                        |
> | Ά    | 902    | 386      |                    | GREEK CAPITAL LETTER ALPHA WITH TONOS                        |
> | ·    | 903    | 387      |                    | GREEK ANO TELEIA                                             |
> | Έ    | 904    | 388      |                    | GREEK CAPITAL LETTER EPSILON WITH TONOS                      |
> | Ή    | 905    | 389      |                    | GREEK CAPITAL LETTER ETA WITH TONOS                          |
> | Ί    | 906    | 038A     |                    | GREEK CAPITAL LETTER IOTA WITH TONOS                         |
> | Ό    | 908    | 038C     |                    | GREEK CAPITAL LETTER OMICRON WITH TONOS                      |
> | Ύ    | 910    | 038E     |                    | GREEK CAPITAL LETTER UPSILON WITH TONOS                      |
> | Ώ    | 911    | 038F     |                    | GREEK CAPITAL LETTER OMEGA WITH TONOS                        |
> | ΐ    | 912    | 390      |                    | GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS             |
> | Α    | 913    | 391      | \&Alpha;           | GREEK CAPITAL LETTER ALPHA                                   |
> | Β    | 914    | 392      | \&Beta;            | GREEK CAPITAL LETTER BETA                                    |
> | Γ    | 915    | 393      | \&Gamma;           | GREEK CAPITAL LETTER GAMMA                                   |
> | Δ    | 916    | 394      | \&Delta;           | GREEK CAPITAL LETTER DELTA                                   |
> | Ε    | 917    | 395      | \&Epsilon;         | GREEK CAPITAL LETTER EPSILON                                 |
> | Ζ    | 918    | 396      | \&Zeta;            | GREEK CAPITAL LETTER ZETA                                    |
> | Η    | 919    | 397      | \&Eta;             | GREEK CAPITAL LETTER ETA                                     |
> | Θ    | 920    | 398      | \&Theta;           | GREEK CAPITAL LETTER THETA                                   |
> | Ι    | 921    | 399      | \&Iota;            | GREEK CAPITAL LETTER IOTA                                    |
> | Κ    | 922    | 039A     | \&Kappa;           | GREEK CAPITAL LETTER KAPPA                                   |
> | Λ    | 923    | 039B     | \&Lambda;          | GREEK CAPITAL LETTER LAMBDA                                  |
> | Μ    | 924    | 039C     | \&Mu;              | GREEK CAPITAL LETTER MU                                      |
> | Ν    | 925    | 039D     | \&Nu;              | GREEK CAPITAL LETTER NU                                      |
> | Ξ    | 926    | 039E     | \&Xi;              | GREEK CAPITAL LETTER XI                                      |
> | Ο    | 927    | 039F     | \&Omicron;         | GREEK CAPITAL LETTER OMICRON                                 |
> | Π    | 928    | 03A0     | \&Pi;              | GREEK CAPITAL LETTER PI                                      |
> | Ρ    | 929    | 03A1     | \&Rho;             | GREEK CAPITAL LETTER RHO                                     |
> | Σ    | 931    | 03A3     | \&Sigma;           | GREEK CAPITAL LETTER SIGMA                                   |
> | Τ    | 932    | 03A4     | \&Tau;             | GREEK CAPITAL LETTER TAU                                     |
> | Υ    | 933    | 03A5     | \&Upsilon;         | GREEK CAPITAL LETTER UPSILON                                 |
> | Φ    | 934    | 03A6     | \&Phi;             | GREEK CAPITAL LETTER PHI                                     |
> | Χ    | 935    | 03A7     | \&Chi;             | GREEK CAPITAL LETTER CHI                                     |
> | Ψ    | 936    | 03A8     | \&Psi;             | GREEK CAPITAL LETTER PSI                                     |
> | Ω    | 937    | 03A9     | \&Omega;           | GREEK CAPITAL LETTER OMEGA                                   |
> | Ϊ    | 938    | 03AA     |                    | GREEK CAPITAL LETTER IOTA WITH DIALYTIKA                     |
> | Ϋ    | 939    | 03AB     |                    | GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA                  |
> | ά    | 940    | 03AC     |                    | GREEK SMALL LETTER ALPHA WITH TONOS                          |
> | έ    | 941    | 03AD     |                    | GREEK SMALL LETTER EPSILON WITH TONOS                        |
> | ή    | 942    | 03AE     |                    | GREEK SMALL LETTER ETA WITH TONOS                            |
> | ί    | 943    | 03AF     |                    | GREEK SMALL LETTER IOTA WITH TONOS                           |
> | ΰ    | 944    | 03B0     |                    | GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS          |
> | α    | 945    | 03B1     | \&alpha;           | GREEK SMALL LETTER ALPHA                                     |
> | β    | 946    | 03B2     | \&beta;            | GREEK SMALL LETTER BETA                                      |
> | γ    | 947    | 03B3     | \&gamma;           | GREEK SMALL LETTER GAMMA                                     |
> | δ    | 948    | 03B4     | \&delta;           | GREEK SMALL LETTER DELTA                                     |
> | ε    | 949    | 03B5     | \&epsilon;         | GREEK SMALL LETTER EPSILON                                   |
> | ζ    | 950    | 03B6     | \&zeta;            | GREEK SMALL LETTER ZETA                                      |
> | η    | 951    | 03B7     | \&eta;             | GREEK SMALL LETTER ETA                                       |
> | θ    | 952    | 03B8     | \&theta;           | GREEK SMALL LETTER THETA                                     |
> | ι    | 953    | 03B9     | \&iota;            | GREEK SMALL LETTER IOTA                                      |
> | κ    | 954    | 03BA     | \&kappa;           | GREEK SMALL LETTER KAPPA                                     |
> | λ    | 955    | 03BB     | \&lambda;          | GREEK SMALL LETTER LAMBDA                                    |
> | μ    | 956    | 03BC     | \&mu;              | GREEK SMALL LETTER MU                                        |
> | ν    | 957    | 03BD     | \&nu;              | GREEK SMALL LETTER NU                                        |
> | ξ    | 958    | 03BE     | \&xi;              | GREEK SMALL LETTER XI                                        |
> | ο    | 959    | 03BF     | \&omicron;         | GREEK SMALL LETTER OMICRON                                   |
> | π    | 960    | 03C0     | \&pi;              | GREEK SMALL LETTER PI                                        |
> | ρ    | 961    | 03C1     | \&rho;             | GREEK SMALL LETTER RHO                                       |
> | ς    | 962    | 03C2     | \&sigmaf;          | GREEK SMALL LETTER FINAL SIGMA                               |
> | σ    | 963    | 03C3     | \&sigma;           | GREEK SMALL LETTER SIGMA                                     |
> | τ    | 964    | 03C4     | \&tau;             | GREEK SMALL LETTER TAU                                       |
> | υ    | 965    | 03C5     | \&upsilon;         | GREEK SMALL LETTER UPSILON                                   |
> | φ    | 966    | 03C6     | \&phi;             | GREEK SMALL LETTER PHI                                       |
> | χ    | 967    | 03C7     | \&chi;             | GREEK SMALL LETTER CHI                                       |
> | ψ    | 968    | 03C8     | \&psi;             | GREEK SMALL LETTER PSI                                       |
> | ω    | 969    | 03C9     | \&omega;           | GREEK SMALL LETTER OMEGA                                     |
> | ϊ    | 970    | 03CA     |                    | GREEK SMALL LETTER IOTA WITH DIALYTIKA                       |
> | ϋ    | 971    | 03CB     |                    | GREEK SMALL LETTER UPSILON WITH DIALYTIKA                    |
> | ό    | 972    | 03CC     |                    | GREEK SMALL LETTER OMICRON WITH TONOS                        |
> | ύ    | 973    | 03CD     |                    | GREEK SMALL LETTER UPSILON WITH TONOS                        |
> | ώ    | 974    | 03CE     |                    | GREEK SMALL LETTER OMEGA WITH TONOS                          |
> | Ϗ    | 975    | 03CF     |                    | GREEK CAPITAL KAI SYMBOL                                     |
> | ϐ    | 976    | 03D0     |                    | GREEK BETA SYMBOL                                            |
> | ϑ    | 977    | 03D1     | \&thetasym;        | GREEK THETA SYMBOL                                           |
> | ϒ    | 978    | 03D2     | \&upsih;           | GREEK UPSILON WITH HOOK SYMBOL                               |
> | ϓ    | 979    | 03D3     |                    | GREEK UPSILON WITH ACUTE AND HOOK SYMBOL                     |
> | ϔ    | 980    | 03D4     |                    | GREEK UPSILON WITH DIAERESIS AND HOOK SYMBOL                 |
> | ϕ    | 981    | 03D5     | \&straightphi;     | GREEK PHI SYMBOL                                             |
> | ϖ    | 982    | 03D6     | \&piv;             | GREEK PI SYMBOL                                              |
> | ϗ    | 983    | 03D7     |                    | GREEK KAI SYMBOL                                             |
> | Ϙ    | 984    | 03D8     |                    | GREEK LETTER ARCHAIC KOPPA                                   |
> | ϙ    | 985    | 03D9     |                    | GREEK SMALL LETTER ARCHAIC KOPPA                             |
> | Ϛ    | 986    | 03DA     |                    | GREEK LETTER STIGMA                                          |
> | ϛ    | 987    | 03DB     |                    | GREEK SMALL LETTER STIGMA                                    |
> | Ϝ    | 988    | 03DC     | \&Gammad;          | GREEK LETTER DIGAMMA                                         |
> | ϝ    | 989    | 03DD     | \&gammad;          | GREEK SMALL LETTER DIGAMMA                                   |
> | Ϟ    | 990    | 03DE     |                    | GREEK LETTER KOPPA                                           |
> | ϟ    | 991    | 03DF     |                    | GREEK SMALL LETTER KOPPA                                     |
> | Ϡ    | 992    | 3.00E+00 |                    | GREEK LETTER SAMPI                                           |
> | ϡ    | 993    | 3.00E+01 |                    | GREEK SMALL LETTER SAMPI                                     |
> | Ϣ    | 994    | 3.00E+02 |                    | COPTIC CAPITAL LETTER SHEI                                   |
> | ϣ    | 995    | 3.00E+03 |                    | COPTIC SMALL LETTER SHEI                                     |
> | Ϥ    | 996    | 3.00E+04 |                    | COPTIC CAPITAL LETTER FEI                                    |
> | ϥ    | 997    | 3.00E+05 |                    | COPTIC SMALL LETTER FEI                                      |
> | Ϧ    | 998    | 3.00E+06 |                    | COPTIC CAPITAL LETTER KHEI                                   |
> | ϧ    | 999    | 3.00E+07 |                    | COPTIC SMALL LETTER KHEI                                     |
> | Ϩ    | 1000   | 3.00E+08 |                    | COPTIC CAPITAL LETTER HORI                                   |
> | ϩ    | 1001   | 3.00E+09 |                    | COPTIC SMALL LETTER HORI                                     |
> | Ϫ    | 1002   | 03EA     |                    | COPTIC CAPITAL LETTER GANGIA                                 |
> | ϫ    | 1003   | 03EB     |                    | COPTIC SMALL LETTER GANGIA                                   |
> | Ϭ    | 1004   | 03EC     |                    | COPTIC CAPITAL LETTER SHIMA                                  |
> | ϭ    | 1005   | 03ED     |                    | COPTIC SMALL LETTER SHIMA                                    |
> | Ϯ    | 1006   | 03EE     |                    | COPTIC CAPITAL LETTER DEI                                    |
> | ϯ    | 1007   | 03EF     |                    | COPTIC SMALL LETTER DEI                                      |
> | ϰ    | 1008   | 03F0     | \&varkappa;        | GREEK KAPPA SYMBOL                                           |
> | ϱ    | 1009   | 03F1     | \&varrho;          | GREEK RHO SYMBOL                                             |
> | ϲ    | 1010   | 03F2     |                    | GREEK LUNATE SIGMA SYMBOL                                    |
> | ϳ    | 1011   | 03F3     |                    | GREEK LETTER YOT                                             |
> | ϴ    | 1012   | 03F4     |                    | GREEK CAPITAL THETA SYMBOL                                   |
> | ϵ    | 1013   | 03F5     | \&straightepsilon; | GREEK LUNATE EPSILON SYMBOL                                  |
> | ϶    | 1014   | 03F6     | \&backepsilon;     | GREEK REVERSED LUNATE EPSILON SYMBOL                         |
> | Ϸ    | 1015   | 03F7     |                    | GREEK CAPITAL LETTER SHO                                     |
> | ϸ    | 1016   | 03F8     |                    | GREEK SMALL LETTER SHO                                       |
> | Ϲ    | 1017   | 03F9     |                    | GREEK CAPITAL LUNATE SIGMA SYMBOL                            |
> | Ϻ    | 1018   | 03FA     |                    | GREEK CAPITAL LETTER SAN                                     |
> | ϻ    | 1019   | 03FB     |                    | GREEK SMALL LETTER SAN                                       |
> | ϼ    | 1020   | 03FC     |                    | GREEK RHO WITH STROKE SYMBOL                                 |
> | Ͻ    | 1021   | 03FD     |                    | GREEK CAPITAL REVERSED LUNATE SIGMA SYMBOL                   |
> | Ͼ    | 1022   | 03FE     |                    | GREEK CAPITAL DOTTED LUNATE SIGMA SYMBOL                     |
> | Ͽ    | 1023   | 03FF     |                    | GREEK CAPITAL REVERSED DOTTED LUNATE SIGMA SYMBOL            |
> | ∀    | 8704   | 2200     | \&forall;          | FOR ALL                                                      |
> | ∁    | 8705   | 2201     |                    | COMPLEMENT                                                   |
> | ∂    | 8706   | 2202     | \&part;            | PARTIAL DIFFERENTIAL                                         |
> | ∃    | 8707   | 2203     | \&exist;           | THERE EXISTS                                                 |
> | ∄    | 8708   | 2204     |                    | THERE DOES NOT EXIST                                         |
> | ∅    | 8709   | 2205     | \&empty;           | EMPTY SET                                                    |
> | ∆    | 8710   | 2206     |                    | INCREMENT                                                    |
> | ∇    | 8711   | 2207     | \&nabla;           | NABLA                                                        |
> | ∈    | 8712   | 2208     | \&isin;            | ELEMENT OF                                                   |
> | ∉    | 8713   | 2209     | \&notin;           | NOT AN ELEMENT OF                                            |
> | ∊    | 8714   | 220A     |                    | SMALL ELEMENT OF                                             |
> | ∋    | 8715   | 220B     | \&ni;              | CONTAINS AS MEMBER                                           |
> | ∌    | 8716   | 220C     |                    | DOES NOT CONTAIN AS MEMBER                                   |
> | ∍    | 8717   | 220D     |                    | SMALL CONTAINS AS MEMBER                                     |
> | ∎    | 8718   | 220E     |                    | END OF PROOF                                                 |
> | ∏    | 8719   | 220F     | \&prod;            | N-ARY PRODUCT                                                |
> | ∐    | 8720   | 2210     |                    | N-ARY COPRODUCT                                              |
> | ∑    | 8721   | 2211     | \&sum;             | N-ARY SUMMATION                                              |
> | −    | 8722   | 2212     | \&minus;           | MINUS SIGN                                                   |
> | ∓    | 8723   | 2213     |                    | MINUS-OR-PLUS SIGN                                           |
> | ∔    | 8724   | 2214     |                    | DOT PLUS                                                     |
> | ∕    | 8725   | 2215     |                    | DIVISION SLASH                                               |
> | ∖    | 8726   | 2216     |                    | SET MINUS                                                    |
> | ∗    | 8727   | 2217     | \&lowast;          | ASTERISK OPERATOR                                            |
> | ∘    | 8728   | 2218     |                    | RING OPERATOR                                                |
> | ∙    | 8729   | 2219     |                    | BULLET OPERATOR                                              |
> | √    | 8730   | 221A     | \&radic;           | SQUARE ROOT                                                  |
> | ∛    | 8731   | 221B     |                    | CUBE ROOT                                                    |
> | ∜    | 8732   | 221C     |                    | FOURTH ROOT                                                  |
> | ∝    | 8733   | 221D     | \&prop;            | PROPORTIONAL TO                                              |
> | ∞    | 8734   | 221E     | \&infin;           | INFINITY                                                     |
> | ∟    | 8735   | 221F     |                    | RIGHT ANGLE                                                  |
> | ∠    | 8736   | 2220     | \&ang;             | ANGLE                                                        |
> | ∡    | 8737   | 2221     |                    | MEASURED ANGLE                                               |
> | ∢    | 8738   | 2222     |                    | SPHERICAL ANGLE                                              |
> | ∣    | 8739   | 2223     |                    | DIVIDES                                                      |
> | ∤    | 8740   | 2224     |                    | DOES NOT DIVIDE                                              |
> | ∥    | 8741   | 2225     |                    | PARALLEL TO                                                  |
> | ∦    | 8742   | 2226     |                    | NOT PARALLEL TO                                              |
> | ∧    | 8743   | 2227     | \&and;             | LOGICAL AND                                                  |
> | ∨    | 8744   | 2228     | \&or;              | LOGICAL OR                                                   |
> | ∩    | 8745   | 2229     | \&cap;             | INTERSECTION                                                 |
> | ∪    | 8746   | 222A     | \&cup;             | UNION                                                        |
> | ∫    | 8747   | 222B     | \&int;             | INTEGRAL                                                     |
> | ∬    | 8748   | 222C     |                    | DOUBLE INTEGRAL                                              |
> | ∭    | 8749   | 222D     |                    | TRIPLE INTEGRAL                                              |
> | ∮    | 8750   | 222E     |                    | CONTOUR INTEGRAL                                             |
> | ∯    | 8751   | 222F     |                    | SURFACE INTEGRAL                                             |
> | ∰    | 8752   | 2230     |                    | VOLUME INTEGRAL                                              |
> | ∱    | 8753   | 2231     |                    | CLOCKWISE INTEGRAL                                           |
> | ∲    | 8754   | 2232     |                    | CLOCKWISE CONTOUR INTEGRAL                                   |
> | ∳    | 8755   | 2233     |                    | ANTICLOCKWISE CONTOUR INTEGRAL                               |
> | ∴    | 8756   | 2234     | \&there4;          | THEREFORE                                                    |
> | ∵    | 8757   | 2235     |                    | BECAUSE                                                      |
> | ∶    | 8758   | 2236     |                    | RATIO                                                        |
> | ∷    | 8759   | 2237     |                    | PROPORTION                                                   |
> | ∸    | 8760   | 2238     |                    | DOT MINUS                                                    |
> | ∹    | 8761   | 2239     |                    | EXCESS                                                       |
> | ∺    | 8762   | 223A     |                    | GEOMETRIC PROPORTION                                         |
> | ∻    | 8763   | 223B     |                    | HOMOTHETIC                                                   |
> | ∼    | 8764   | 223C     | \&sim;             | TILDE OPERATOR                                               |
> | ∽    | 8765   | 223D     |                    | REVERSED TILDE                                               |
> | ∾    | 8766   | 223E     |                    | INVERTED LAZY S                                              |
> | ∿    | 8767   | 223F     |                    | SINE WAVE                                                    |
> | ≀    | 8768   | 2240     |                    | WREATH PRODUCT                                               |
> | ≁    | 8769   | 2241     |                    | NOT TILDE                                                    |
> | ≂    | 8770   | 2242     |                    | MINUS TILDE                                                  |
> | ≃    | 8771   | 2243     |                    | ASYMPTOTICALLY EQUAL TO                                      |
> | ≄    | 8772   | 2244     |                    | NOT ASYMPTOTICALLY EQUAL TO                                  |
> | ≅    | 8773   | 2245     | \&cong;            | APPROXIMATELY EQUAL TO                                       |
> | ≆    | 8774   | 2246     |                    | APPROXIMATELY BUT NOT ACTUALLY EQUAL TO                      |
> | ≇    | 8775   | 2247     |                    | NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO                  |
> | ≈    | 8776   | 2248     | \&asymp;           | ALMOST EQUAL TO                                              |
> | ≉    | 8777   | 2249     |                    | NOT ALMOST EQUAL TO                                          |
> | ≊    | 8778   | 224A     |                    | ALMOST EQUAL OR EQUAL TO                                     |
> | ≋    | 8779   | 224B     |                    | TRIPLE TILDE                                                 |
> | ≌    | 8780   | 224C     |                    | ALL EQUAL TO                                                 |
> | ≍    | 8781   | 224D     |                    | EQUIVALENT TO                                                |
> | ≎    | 8782   | 224E     |                    | GEOMETRICALLY EQUIVALENT TO                                  |
> | ≏    | 8783   | 224F     |                    | DIFFERENCE BETWEEN                                           |
> | ≐    | 8784   | 2250     |                    | APPROACHES THE LIMIT                                         |
> | ≑    | 8785   | 2251     |                    | GEOMETRICALLY EQUAL TO                                       |
> | ≒    | 8786   | 2252     |                    | APPROXIMATELY EQUAL TO OR THE IMAGE OF                       |
> | ≓    | 8787   | 2253     |                    | IMAGE OF OR APPROXIMATELY EQUAL TO                           |
> | ≔    | 8788   | 2254     |                    | COLON EQUALS                                                 |
> | ≕    | 8789   | 2255     |                    | EQUALS COLON                                                 |
> | ≖    | 8790   | 2256     |                    | RING IN EQUAL TO                                             |
> | ≗    | 8791   | 2257     |                    | RING EQUAL TO                                                |
> | ≘    | 8792   | 2258     |                    | CORRESPONDS TO                                               |
> | ≙    | 8793   | 2259     |                    | ESTIMATES                                                    |
> | ≚    | 8794   | 225A     |                    | EQUIANGULAR TO                                               |
> | ≛    | 8795   | 225B     |                    | STAR EQUALS                                                  |
> | ≜    | 8796   | 225C     |                    | DELTA EQUAL TO                                               |
> | ≝    | 8797   | 225D     |                    | EQUAL TO BY DEFINITION                                       |
> | ≞    | 8798   | 225E     |                    | MEASURED BY                                                  |
> | ≟    | 8799   | 225F     |                    | QUESTIONED EQUAL TO                                          |
> | ≠    | 8800   | 2260     | \&ne;              | NOT EQUAL TO                                                 |
> | ≡    | 8801   | 2261     | \&equiv;           | IDENTICAL TO                                                 |
> | ≢    | 8802   | 2262     |                    | NOT IDENTICAL TO                                             |
> | ≣    | 8803   | 2263     |                    | STRICTLY EQUIVALENT TO                                       |
> | ≤    | 8804   | 2264     | \&le;              | LESS-THAN OR EQUAL TO                                        |
> | ≥    | 8805   | 2265     | \&ge;              | GREATER-THAN OR EQUAL TO                                     |
> | ≦    | 8806   | 2266     |                    | LESS-THAN OVER EQUAL TO                                      |
> | ≧    | 8807   | 2267     |                    | GREATER-THAN OVER EQUAL TO                                   |
> | ≨    | 8808   | 2268     |                    | LESS-THAN BUT NOT EQUAL TO                                   |
> | ≩    | 8809   | 2269     |                    | GREATER-THAN BUT NOT EQUAL TO                                |
> | ≪    | 8810   | 226A     |                    | MUCH LESS-THAN                                               |
> | ≫    | 8811   | 226B     |                    | MUCH GREATER-THAN                                            |
> | ≬    | 8812   | 226C     |                    | BETWEEN                                                      |
> | ≭    | 8813   | 226D     |                    | NOT EQUIVALENT TO                                            |
> | ≮    | 8814   | 226E     |                    | NOT LESS-THAN                                                |
> | ≯    | 8815   | 226F     |                    | NOT GREATER-THAN                                             |
> | ≰    | 8816   | 2270     |                    | NEITHER LESS-THAN NOR EQUAL TO                               |
> | ≱    | 8817   | 2271     |                    | NEITHER GREATER-THAN NOR EQUAL TO                            |
> | ≲    | 8818   | 2272     |                    | LESS-THAN OR EQUIVALENT TO                                   |
> | ≳    | 8819   | 2273     |                    | GREATER-THAN OR EQUIVALENT TO                                |
> | ≴    | 8820   | 2274     |                    | NEITHER LESS-THAN NOR EQUIVALENT TO                          |
> | ≵    | 8821   | 2275     |                    | NEITHER GREATER-THAN NOR EQUIVALENT TO                       |
> | ≶    | 8822   | 2276     |                    | LESS-THAN OR GREATER-THAN                                    |
> | ≷    | 8823   | 2277     |                    | GREATER-THAN OR LESS-THAN                                    |
> | ≸    | 8824   | 2278     |                    | NEITHER LESS-THAN NOR GREATER-THAN                           |
> | ≹    | 8825   | 2279     |                    | NEITHER GREATER-THAN NOR LESS-THAN                           |
> | ≺    | 8826   | 227A     |                    | PRECEDES                                                     |
> | ≻    | 8827   | 227B     |                    | SUCCEEDS                                                     |
> | ≼    | 8828   | 227C     |                    | PRECEDES OR EQUAL TO                                         |
> | ≽    | 8829   | 227D     |                    | SUCCEEDS OR EQUAL TO                                         |
> | ≾    | 8830   | 227E     |                    | PRECEDES OR EQUIVALENT TO                                    |
> | ≿    | 8831   | 227F     |                    | SUCCEEDS OR EQUIVALENT TO                                    |
> | ⊀    | 8832   | 2280     |                    | DOES NOT PRECEDE                                             |
> | ⊁    | 8833   | 2281     |                    | DOES NOT SUCCEED                                             |
> | ⊂    | 8834   | 2282     | \&sub;             | SUBSET OF                                                    |
> | ⊃    | 8835   | 2283     | \&sup;             | SUPERSET OF                                                  |
> | ⊄    | 8836   | 2284     | \&nsub;            | NOT A SUBSET OF                                              |
> | ⊅    | 8837   | 2285     |                    | NOT A SUPERSET OF                                            |
> | ⊆    | 8838   | 2286     | \&sube;            | SUBSET OF OR EQUAL TO                                        |
> | ⊇    | 8839   | 2287     | \&supe;            | SUPERSET OF OR EQUAL TO                                      |
> | ⊈    | 8840   | 2288     |                    | NEITHER A SUBSET OF NOR EQUAL TO                             |
> | ⊉    | 8841   | 2289     |                    | NEITHER A SUPERSET OF NOR EQUAL TO                           |
> | ⊊    | 8842   | 228A     |                    | SUBSET OF WITH NOT EQUAL TO                                  |
> | ⊋    | 8843   | 228B     |                    | SUPERSET OF WITH NOT EQUAL TO                                |
> | ⊌    | 8844   | 228C     |                    | MULTISET                                                     |
> | ⊍    | 8845   | 228D     |                    | MULTISET MULTIPLICATION                                      |
> | ⊎    | 8846   | 228E     |                    | MULTISET UNION                                               |
> | ⊏    | 8847   | 228F     |                    | SQUARE IMAGE OF                                              |
> | ⊐    | 8848   | 2290     |                    | SQUARE ORIGINAL OF                                           |
> | ⊑    | 8849   | 2291     |                    | SQUARE IMAGE OF OR EQUAL TO                                  |
> | ⊒    | 8850   | 2292     |                    | SQUARE ORIGINAL OF OR EQUAL TO                               |
> | ⊓    | 8851   | 2293     |                    | SQUARE CAP                                                   |
> | ⊔    | 8852   | 2294     |                    | SQUARE CUP                                                   |
> | ⊕    | 8853   | 2295     | \&oplus;           | CIRCLED PLUS                                                 |
> | ⊖    | 8854   | 2296     |                    | CIRCLED MINUS                                                |
> | ⊗    | 8855   | 2297     | \&otimes;          | CIRCLED TIMES                                                |
> | ⊘    | 8856   | 2298     |                    | CIRCLED DIVISION SLASH                                       |
> | ⊙    | 8857   | 2299     |                    | CIRCLED DOT OPERATOR                                         |
> | ⊚    | 8858   | 229A     |                    | CIRCLED RING OPERATOR                                        |
> | ⊛    | 8859   | 229B     |                    | CIRCLED ASTERISK OPERATOR                                    |
> | ⊜    | 8860   | 229C     |                    | CIRCLED EQUALS                                               |
> | ⊝    | 8861   | 229D     |                    | CIRCLED DASH                                                 |
> | ⊞    | 8862   | 229E     |                    | SQUARED PLUS                                                 |
> | ⊟    | 8863   | 229F     |                    | SQUARED MINUS                                                |
> | ⊠    | 8864   | 22A0     |                    | SQUARED TIMES                                                |
> | ⊡    | 8865   | 22A1     |                    | SQUARED DOT OPERATOR                                         |
> | ⊢    | 8866   | 22A2     |                    | RIGHT TACK                                                   |
> | ⊣    | 8867   | 22A3     |                    | LEFT TACK                                                    |
> | ⊤    | 8868   | 22A4     |                    | DOWN TACK                                                    |
> | ⊥    | 8869   | 22A5     | \&perp;            | UP TACK                                                      |
> | ⊦    | 8870   | 22A6     |                    | ASSERTION                                                    |
> | ⊧    | 8871   | 22A7     |                    | MODELS                                                       |
> | ⊨    | 8872   | 22A8     |                    | TRUE                                                         |
> | ⊩    | 8873   | 22A9     |                    | FORCES                                                       |
> | ⊪    | 8874   | 22AA     |                    | TRIPLE VERTICAL BAR RIGHT TURNSTILE                          |
> | ⊫    | 8875   | 22AB     |                    | DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE                   |
> | ⊬    | 8876   | 22AC     |                    | DOES NOT PROVE                                               |
> | ⊭    | 8877   | 22AD     |                    | NOT TRUE                                                     |
> | ⊮    | 8878   | 22AE     |                    | DOES NOT FORCE                                               |
> | ⊯    | 8879   | 22AF     |                    | NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE           |
> | ⊰    | 8880   | 22B0     |                    | PRECEDES UNDER RELATION                                      |
> | ⊱    | 8881   | 22B1     |                    | SUCCEEDS UNDER RELATION                                      |
> | ⊲    | 8882   | 22B2     |                    | NORMAL SUBGROUP OF                                           |
> | ⊳    | 8883   | 22B3     |                    | CONTAINS AS NORMAL SUBGROUP                                  |
> | ⊴    | 8884   | 22B4     |                    | NORMAL SUBGROUP OF OR EQUAL TO                               |
> | ⊵    | 8885   | 22B5     |                    | CONTAINS AS NORMAL SUBGROUP OR EQUAL TO                      |
> | ⊶    | 8886   | 22B6     |                    | ORIGINAL OF                                                  |
> | ⊷    | 8887   | 22B7     |                    | IMAGE OF                                                     |
> | ⊸    | 8888   | 22B8     |                    | MULTIMAP                                                     |
> | ⊹    | 8889   | 22B9     |                    | HERMITIAN CONJUGATE MATRIX                                   |
> | ⊺    | 8890   | 22BA     |                    | INTERCALATE                                                  |
> | ⊻    | 8891   | 22BB     |                    | XOR                                                          |
> | ⊼    | 8892   | 22BC     |                    | NAND                                                         |
> | ⊽    | 8893   | 22BD     |                    | NOR                                                          |
> | ⊾    | 8894   | 22BE     |                    | RIGHT ANGLE WITH ARC                                         |
> | ⊿    | 8895   | 22BF     |                    | RIGHT TRIANGLE                                               |
> | ⋀    | 8896   | 22C0     |                    | N-ARY LOGICAL AND                                            |
> | ⋁    | 8897   | 22C1     |                    | N-ARY LOGICAL OR                                             |
> | ⋂    | 8898   | 22C2     |                    | N-ARY INTERSECTION                                           |
> | ⋃    | 8899   | 22C3     |                    | N-ARY UNION                                                  |
> | ⋄    | 8900   | 22C4     |                    | DIAMOND OPERATOR                                             |
> | ⋅    | 8901   | 22C5     | \&sdot;            | DOT OPERATOR                                                 |
> | ⋆    | 8902   | 22C6     |                    | STAR OPERATOR                                                |
> | ⋇    | 8903   | 22C7     |                    | DIVISION TIMES                                               |
> | ⋈    | 8904   | 22C8     |                    | BOWTIE                                                       |
> | ⋉    | 8905   | 22C9     |                    | LEFT NORMAL FACTOR SEMIDIRECT PRODUCT                        |
> | ⋊    | 8906   | 22CA     |                    | RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT                       |
> | ⋋    | 8907   | 22CB     |                    | LEFT SEMIDIRECT PRODUCT                                      |
> | ⋌    | 8908   | 22CC     |                    | RIGHT SEMIDIRECT PRODUCT                                     |
> | ⋍    | 8909   | 22CD     |                    | REVERSED TILDE EQUALS                                        |
> | ⋎    | 8910   | 22CE     |                    | CURLY LOGICAL OR                                             |
> | ⋏    | 8911   | 22CF     |                    | CURLY LOGICAL AND                                            |
> | ⋐    | 8912   | 22D0     |                    | DOUBLE SUBSET                                                |
> | ⋑    | 8913   | 22D1     |                    | DOUBLE SUPERSET                                              |
> | ⋒    | 8914   | 22D2     |                    | DOUBLE INTERSECTION                                          |
> | ⋓    | 8915   | 22D3     |                    | DOUBLE UNION                                                 |
> | ⋔    | 8916   | 22D4     |                    | PITCHFORK                                                    |
> | ⋕    | 8917   | 22D5     |                    | EQUAL AND PARALLEL TO                                        |
> | ⋖    | 8918   | 22D6     |                    | LESS-THAN WITH DOT                                           |
> | ⋗    | 8919   | 22D7     |                    | GREATER-THAN WITH DOT                                        |
> | ⋘    | 8920   | 22D8     |                    | VERY MUCH LESS-THAN                                          |
> | ⋙    | 8921   | 22D9     |                    | VERY MUCH GREATER-THAN                                       |
> | ⋚    | 8922   | 22DA     |                    | LESS-THAN EQUAL TO OR GREATER-THAN                           |
> | ⋛    | 8923   | 22DB     |                    | GREATER-THAN EQUAL TO OR LESS-THAN                           |
> | ⋜    | 8924   | 22DC     |                    | EQUAL TO OR LESS-THAN                                        |
> | ⋝    | 8925   | 22DD     |                    | EQUAL TO OR GREATER-THAN                                     |
> | ⋞    | 8926   | 22DE     |                    | EQUAL TO OR PRECEDES                                         |
> | ⋟    | 8927   | 22DF     |                    | EQUAL TO OR SUCCEEDS                                         |
> | ⋠    | 8928   | 2.20E+01 |                    | DOES NOT PRECEDE OR EQUAL                                    |
> | ⋡    | 8929   | 2.20E+02 |                    | DOES NOT SUCCEED OR EQUAL                                    |
> | ⋢    | 8930   | 2.20E+03 |                    | NOT SQUARE IMAGE OF OR EQUAL TO                              |
> | ⋣    | 8931   | 2.20E+04 |                    | NOT SQUARE ORIGINAL OF OR EQUAL TO                           |
> | ⋤    | 8932   | 2.20E+05 |                    | SQUARE IMAGE OF OR NOT EQUAL TO                              |
> | ⋥    | 8933   | 2.20E+06 |                    | SQUARE ORIGINAL OF OR NOT EQUAL TO                           |
> | ⋦    | 8934   | 2.20E+07 |                    | LESS-THAN BUT NOT EQUIVALENT TO                              |
> | ⋧    | 8935   | 2.20E+08 |                    | GREATER-THAN BUT NOT EQUIVALENT TO                           |
> | ⋨    | 8936   | 2.20E+09 |                    | PRECEDES BUT NOT EQUIVALENT TO                               |
> | ⋩    | 8937   | 2.20E+10 |                    | SUCCEEDS BUT NOT EQUIVALENT TO                               |
> | ⋪    | 8938   | 22EA     |                    | NOT NORMAL SUBGROUP OF                                       |
> | ⋫    | 8939   | 22EB     |                    | DOES NOT CONTAIN AS NORMAL SUBGROUP                          |
> | ⋬    | 8940   | 22EC     |                    | NOT NORMAL SUBGROUP OF OR EQUAL TO                           |
> | ⋭    | 8941   | 22ED     |                    | DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL                 |
> | ⋮    | 8942   | 22EE     |                    | VERTICAL ELLIPSIS                                            |
> | ⋯    | 8943   | 22EF     |                    | MIDLINE HORIZONTAL ELLIPSIS                                  |
> | ⋰    | 8944   | 22F0     |                    | UP RIGHT DIAGONAL ELLIPSIS                                   |
> | ⋱    | 8945   | 22F1     |                    | DOWN RIGHT DIAGONAL ELLIPSIS                                 |
> | ⋲    | 8946   | 22F2     |                    | ELEMENT OF WITH LONG HORIZONTAL STROKE                       |
> | ⋳    | 8947   | 22F3     |                    | ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE     |
> | ⋴    | 8948   | 22F4     |                    | SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE |
> | ⋵    | 8949   | 22F5     |                    | ELEMENT OF WITH DOT ABOVE                                    |
> | ⋶    | 8950   | 22F6     |                    | ELEMENT OF WITH OVERBAR                                      |
> | ⋷    | 8951   | 22F7     |                    | SMALL ELEMENT OF WITH OVERBAR                                |
> | ⋸    | 8952   | 22F8     |                    | ELEMENT OF WITH UNDERBAR                                     |
> | ⋹    | 8953   | 22F9     |                    | ELEMENT OF WITH TWO HORIZONTAL STROKES                       |
> | ⋺    | 8954   | 22FA     |                    | CONTAINS WITH LONG HORIZONTAL STROKE                         |
> | ⋻    | 8955   | 22FB     |                    | CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE       |
> | ⋼    | 8956   | 22FC     |                    | SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE |
> | ⋽    | 8957   | 22FD     |                    | CONTAINS WITH OVERBAR                                        |
> | ⋾    | 8958   | 22FE     |                    | SMALL CONTAINS WITH OVERBAR                                  |
> | ⋿    | 8959   | 22FF     |                    | Z NOTATION BAG MEMBERSHIP                                    |
> | ₠    | 8352   | 20A0     |                    | EURO-CURRENCY SIGN                                           |
> | ₡    | 8353   | 20A1     |                    | COLON SIGN                                                   |
> | ₢    | 8354   | 20A2     |                    | CRUZEIRO SIGN                                                |
> | ₣    | 8355   | 20A3     |                    | FRENCH FRANC SIGN                                            |
> | ₤    | 8356   | 20A4     |                    | LIRA SIGN                                                    |
> | ₥    | 8357   | 20A5     |                    | MILL SIGN                                                    |
> | ₦    | 8358   | 20A6     |                    | NAIRA SIGN                                                   |
> | ₧    | 8359   | 20A7     |                    | PESETA SIGN                                                  |
> | ₨    | 8360   | 20A8     |                    | RUPEE SIGN                                                   |
> | ₩    | 8361   | 20A9     |                    | WON SIGN                                                     |
> | ₪    | 8362   | 20AA     |                    | NEW SHEQEL SIGN                                              |
> | ₫    | 8363   | 20AB     |                    | DONG SIGN                                                    |
> | €    | 8364   | 20AC     | \&euro;            | EURO SIGN                                                    |
> | ₭    | 8365   | 20AD     |                    | KIP SIGN                                                     |
> | ₮    | 8366   | 20AE     |                    | TUGRIK SIGN                                                  |
> | ₯    | 8367   | 20AF     |                    | DRACHMA SIGN                                                 |
> | ₰    | 8368   | 20B0     |                    | GERMAN PENNY SYMBOL                                          |
> | ₱    | 8369   | 20B1     |                    | PESO SIGN                                                    |
> | ₲    | 8370   | 20B2     |                    | GUARANI SIGN                                                 |
> | ₳    | 8371   | 20B3     |                    | AUSTRAL SIGN                                                 |
> | ₴    | 8372   | 20B4     |                    | HRYVNIA SIGN                                                 |
> | ₵    | 8373   | 20B5     |                    | CEDI SIGN                                                    |
> | ₶    | 8374   | 20B6     |                    | LIVRE TOURNOIS SIGN                                          |
> | ₷    | 8375   | 20B7     |                    | SPESMILO SIGN                                                |
> | ₸    | 8376   | 20B8     |                    | TENGE SIGN                                                   |
> | ₹    | 8377   | 20B9     |                    | INDIAN RUPEE SIGN                                            |
> | ₺    | 8378   | 20BA     |                    | TURKISH LIRA SIGN                                            |
> | ₻    | 8379   | 20BB     |                    | NORDIC MARK SIGN                                             |
> | ₼    | 8380   | 20BC     |                    | MANAT SIGN                                                   |
> | ₽    | 8381   | 20BD     |                    | RUBLE SIGN                                                   |
> | ₾    | 8382   | 20BE     |                    | LARI SIGN                                                    |
> | ₿    | 8383   | 20BF     |                    | BITCOIN SIGN                                                 |
> | ←    | 8592   | 2190     | \&larr;            | LEFTWARDS ARROW                                              |
> | ↑    | 8593   | 2191     | \&uarr;            | UPWARDS ARROW                                                |
> | →    | 8594   | 2192     | \&rarr;            | RIGHTWARDS ARROW                                             |
> | ↓    | 8595   | 2193     | \&darr;            | DOWNWARDS ARROW                                              |
> | ↔    | 8596   | 2194     | \&harr;            | LEFT RIGHT ARROW                                             |
> | ↕    | 8597   | 2195     |                    | UP DOWN ARROW                                                |
> | ↖    | 8598   | 2196     |                    | NORTH WEST ARROW                                             |
> | ↗    | 8599   | 2197     |                    | NORTH EAST ARROW                                             |
> | ↘    | 8600   | 2198     |                    | SOUTH EAST ARROW                                             |
> | ↙    | 8601   | 2199     |                    | SOUTH WEST ARROW                                             |
> | ↚    | 8602   | 219A     |                    | LEFTWARDS ARROW WITH STROKE                                  |
> | ↛    | 8603   | 219B     |                    | RIGHTWARDS ARROW WITH STROKE                                 |
> | ↜    | 8604   | 219C     |                    | LEFTWARDS WAVE ARROW                                         |
> | ↝    | 8605   | 219D     |                    | RIGHTWARDS WAVE ARROW                                        |
> | ↞    | 8606   | 219E     |                    | LEFTWARDS TWO HEADED ARROW                                   |
> | ↟    | 8607   | 219F     |                    | UPWARDS TWO HEADED ARROW                                     |
> | ↠    | 8608   | 21A0     |                    | RIGHTWARDS TWO HEADED ARROW                                  |
> | ↡    | 8609   | 21A1     |                    | DOWNWARDS TWO HEADED ARROW                                   |
> | ↢    | 8610   | 21A2     |                    | LEFTWARDS ARROW WITH TAIL                                    |
> | ↣    | 8611   | 21A3     |                    | RIGHTWARDS ARROW WITH TAIL                                   |
> | ↤    | 8612   | 21A4     |                    | LEFTWARDS ARROW FROM BAR                                     |
> | ↥    | 8613   | 21A5     |                    | UPWARDS ARROW FROM BAR                                       |
> | ↦    | 8614   | 21A6     |                    | RIGHTWARDS ARROW FROM BAR                                    |
> | ↧    | 8615   | 21A7     |                    | DOWNWARDS ARROW FROM BAR                                     |
> | ↨    | 8616   | 21A8     |                    | UP DOWN ARROW WITH BASE                                      |
> | ↩    | 8617   | 21A9     |                    | LEFTWARDS ARROW WITH HOOK                                    |
> | ↪    | 8618   | 21AA     |                    | RIGHTWARDS ARROW WITH HOOK                                   |
> | ↫    | 8619   | 21AB     |                    | LEFTWARDS ARROW WITH LOOP                                    |
> | ↬    | 8620   | 21AC     |                    | RIGHTWARDS ARROW WITH LOOP                                   |
> | ↭    | 8621   | 21AD     |                    | LEFT RIGHT WAVE ARROW                                        |
> | ↮    | 8622   | 21AE     |                    | LEFT RIGHT ARROW WITH STROKE                                 |
> | ↯    | 8623   | 21AF     |                    | DOWNWARDS ZIGZAG ARROW                                       |
> | ↰    | 8624   | 21B0     |                    | UPWARDS ARROW WITH TIP LEFTWARDS                             |
> | ↱    | 8625   | 21B1     |                    | UPWARDS ARROW WITH TIP RIGHTWARDS                            |
> | ↲    | 8626   | 21B2     |                    | DOWNWARDS ARROW WITH TIP LEFTWARDS                           |
> | ↳    | 8627   | 21B3     |                    | DOWNWARDS ARROW WITH TIP RIGHTWARDS                          |
> | ↴    | 8628   | 21B4     |                    | RIGHTWARDS ARROW WITH CORNER DOWNWARDS                       |
> | ↵    | 8629   | 21B5     | \&crarr;           | DOWNWARDS ARROW WITH CORNER LEFTWARDS                        |
> | ↶    | 8630   | 21B6     |                    | ANTICLOCKWISE TOP SEMICIRCLE ARROW                           |
> | ↷    | 8631   | 21B7     |                    | CLOCKWISE TOP SEMICIRCLE ARROW                               |
> | ↸    | 8632   | 21B8     |                    | NORTH WEST ARROW TO LONG BAR                                 |
> | ↹    | 8633   | 21B9     |                    | LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR          |
> | ↺    | 8634   | 21BA     |                    | ANTICLOCKWISE OPEN CIRCLE ARROW                              |
> | ↻    | 8635   | 21BB     |                    | CLOCKWISE OPEN CIRCLE ARROW                                  |
> | ↼    | 8636   | 21BC     |                    | LEFTWARDS HARPOON WITH BARB UPWARDS                          |
> | ↽    | 8637   | 21BD     |                    | LEFTWARDS HARPOON WITH BARB DOWNWARDS                        |
> | ↾    | 8638   | 21BE     |                    | UPWARDS HARPOON WITH BARB RIGHTWARDS                         |
> | ↿    | 8639   | 21BF     |                    | UPWARDS HARPOON WITH BARB LEFTWARDS                          |
> | ⇀    | 8640   | 21C0     |                    | RIGHTWARDS HARPOON WITH BARB UPWARDS                         |
> | ⇁    | 8641   | 21C1     |                    | RIGHTWARDS HARPOON WITH BARB DOWNWARDS                       |
> | ⇂    | 8642   | 21C2     |                    | DOWNWARDS HARPOON WITH BARB RIGHTWARDS                       |
> | ⇃    | 8643   | 21C3     |                    | DOWNWARDS HARPOON WITH BARB LEFTWARDS                        |
> | ⇄    | 8644   | 21C4     |                    | RIGHTWARDS ARROW OVER LEFTWARDS ARROW                        |
> | ⇅    | 8645   | 21C5     |                    | UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW                   |
> | ⇆    | 8646   | 21C6     |                    | LEFTWARDS ARROW OVER RIGHTWARDS ARROW                        |
> | ⇇    | 8647   | 21C7     |                    | LEFTWARDS PAIRED ARROWS                                      |
> | ⇈    | 8648   | 21C8     |                    | UPWARDS PAIRED ARROWS                                        |
> | ⇉    | 8649   | 21C9     |                    | RIGHTWARDS PAIRED ARROWS                                     |
> | ⇊    | 8650   | 21CA     |                    | DOWNWARDS PAIRED ARROWS                                      |
> | ⇋    | 8651   | 21CB     |                    | LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON                    |
> | ⇌    | 8652   | 21CC     |                    | RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON                    |
> | ⇍    | 8653   | 21CD     |                    | LEFTWARDS DOUBLE ARROW WITH STROKE                           |
> | ⇎    | 8654   | 21CE     |                    | LEFT RIGHT DOUBLE ARROW WITH STROKE                          |
> | ⇏    | 8655   | 21CF     |                    | RIGHTWARDS DOUBLE ARROW WITH STROKE                          |
> | ⇐    | 8656   | 21D0     | \&lArr;            | LEFTWARDS DOUBLE ARROW                                       |
> | ⇑    | 8657   | 21D1     | \&uArr;            | UPWARDS DOUBLE ARROW                                         |
> | ⇒    | 8658   | 21D2     | \&rArr;            | RIGHTWARDS DOUBLE ARROW                                      |
> | ⇓    | 8659   | 21D3     | \&dArr;            | DOWNWARDS DOUBLE ARROW                                       |
> | ⇔    | 8660   | 21D4     | \&hArr;            | LEFT RIGHT DOUBLE ARROW                                      |
> | ⇕    | 8661   | 21D5     |                    | UP DOWN DOUBLE ARROW                                         |
> | ⇖    | 8662   | 21D6     |                    | NORTH WEST DOUBLE ARROW                                      |
> | ⇗    | 8663   | 21D7     |                    | NORTH EAST DOUBLE ARROW                                      |
> | ⇘    | 8664   | 21D8     |                    | SOUTH EAST DOUBLE ARROW                                      |
> | ⇙    | 8665   | 21D9     |                    | SOUTH WEST DOUBLE ARROW                                      |
> | ⇚    | 8666   | 21DA     |                    | LEFTWARDS TRIPLE ARROW                                       |
> | ⇛    | 8667   | 21DB     |                    | RIGHTWARDS TRIPLE ARROW                                      |
> | ⇜    | 8668   | 21DC     |                    | LEFTWARDS SQUIGGLE ARROW                                     |
> | ⇝    | 8669   | 21DD     |                    | RIGHTWARDS SQUIGGLE ARROW                                    |
> | ⇞    | 8670   | 21DE     |                    | UPWARDS ARROW WITH DOUBLE STROKE                             |
> | ⇟    | 8671   | 21DF     |                    | DOWNWARDS ARROW WITH DOUBLE STROKE                           |
> | ⇠    | 8672   | 2.10E+01 |                    | LEFTWARDS DASHED ARROW                                       |
> | ⇡    | 8673   | 2.10E+02 |                    | UPWARDS DASHED ARROW                                         |
> | ⇢    | 8674   | 2.10E+03 |                    | RIGHTWARDS DASHED ARROW                                      |
> | ⇣    | 8675   | 2.10E+04 |                    | DOWNWARDS DASHED ARROW                                       |
> | ⇤    | 8676   | 2.10E+05 |                    | LEFTWARDS ARROW TO BAR                                       |
> | ⇥    | 8677   | 2.10E+06 |                    | RIGHTWARDS ARROW TO BAR                                      |
> | ⇦    | 8678   | 2.10E+07 |                    | LEFTWARDS WHITE ARROW                                        |
> | ⇧    | 8679   | 2.10E+08 |                    | UPWARDS WHITE ARROW                                          |
> | ⇨    | 8680   | 2.10E+09 |                    | RIGHTWARDS WHITE ARROW                                       |
> | ⇩    | 8681   | 2.10E+10 |                    | DOWNWARDS WHITE ARROW                                        |
> | ⇪    | 8682   | 21EA     |                    | UPWARDS WHITE ARROW FROM BAR                                 |
> | ⇫    | 8683   | 21EB     |                    | UPWARDS WHITE ARROW ON PEDESTAL                              |
> | ⇬    | 8684   | 21EC     |                    | UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR          |
> | ⇭    | 8685   | 21ED     |                    | UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR            |
> | ⇮    | 8686   | 21EE     |                    | UPWARDS WHITE DOUBLE ARROW                                   |
> | ⇯    | 8687   | 21EF     |                    | UPWARDS WHITE DOUBLE ARROW ON PEDESTAL                       |
> | ⇰    | 8688   | 21F0     |                    | RIGHTWARDS WHITE ARROW FROM WALL                             |
> | ⇱    | 8689   | 21F1     |                    | NORTH WEST ARROW TO CORNER                                   |
> | ⇲    | 8690   | 21F2     |                    | SOUTH EAST ARROW TO CORNER                                   |
> | ⇳    | 8691   | 21F3     |                    | UP DOWN WHITE ARROW                                          |
> | ⇴    | 8692   | 21F4     |                    | RIGHT ARROW WITH SMALL CIRCLE                                |
> | ⇵    | 8693   | 21F5     |                    | DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW                   |
> | ⇶    | 8694   | 21F6     |                    | THREE RIGHTWARDS ARROWS                                      |
> | ⇷    | 8695   | 21F7     |                    | LEFTWARDS ARROW WITH VERTICAL STROKE                         |
> | ⇸    | 8696   | 21F8     |                    | RIGHTWARDS ARROW WITH VERTICAL STROKE                        |
> | ⇹    | 8697   | 21F9     |                    | LEFT RIGHT ARROW WITH VERTICAL STROKE                        |
> | ⇺    | 8698   | 21FA     |                    | LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE                  |
> | ⇻    | 8699   | 21FB     |                    | RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE                 |
> | ⇼    | 8700   | 21FC     |                    | LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE                 |
> | ⇽    | 8701   | 21FD     |                    | LEFTWARDS OPEN-HEADED ARROW                                  |
> | ⇾    | 8702   | 21FE     |                    | RIGHTWARDS OPEN-HEADED ARROW                                 |
> | ⇿    | 8703   | 21FF     |                    | LEFT RIGHT OPEN-HEADED ARROW                                 |
> | ☀    | 9728   | 2600     |                    | BLACK SUN WITH RAYS                                          |
> | ☁    | 9729   | 2601     |                    | CLOUD                                                        |
> | ☂    | 9730   | 2602     |                    | UMBRELLA                                                     |
> | ☃    | 9731   | 2603     |                    | SNOWMAN                                                      |
> | ☄    | 9732   | 2604     |                    | COMET                                                        |
> | ★    | 9733   | 2605     |                    | BLACK STAR                                                   |
> | ☆    | 9734   | 2606     |                    | WHITE STAR                                                   |
> | ☇    | 9735   | 2607     |                    | LIGHTNING                                                    |
> | ☈    | 9736   | 2608     |                    | THUNDERSTORM                                                 |
> | ☉    | 9737   | 2609     |                    | SUN                                                          |
> | ☊    | 9738   | 260A     |                    | ASCENDING NODE                                               |
> | ☋    | 9739   | 260B     |                    | DESCENDING NODE                                              |
> | ☌    | 9740   | 260C     |                    | CONJUNCTION                                                  |
> | ☍    | 9741   | 260D     |                    | OPPOSITION                                                   |
> | ☎    | 9742   | 260E     |                    | BLACK TELEPHONE                                              |
> | ☏    | 9743   | 260F     |                    | WHITE TELEPHONE                                              |
> | ☐    | 9744   | 2610     |                    | BALLOT BOX                                                   |
> | ☑    | 9745   | 2611     |                    | BALLOT BOX WITH CHECK                                        |
> | ☒    | 9746   | 2612     |                    | BALLOT BOX WITH X                                            |
> | ☓    | 9747   | 2613     |                    | SALTIRE                                                      |
> | ☔    | 9748   | 2614     |                    | UMBRELLA WITH RAIN DROPS                                     |
> | ☕    | 9749   | 2615     |                    | HOT BEVERAGE                                                 |
> | ☖    | 9750   | 2616     |                    | WHITE SHOGI PIECE                                            |
> | ☗    | 9751   | 2617     |                    | BLACK SHOGI PIECE                                            |
> | ☘    | 9752   | 2618     |                    | SHAMROCK                                                     |
> | ☙    | 9753   | 2619     |                    | REVERSED ROTATED FLORAL HEART BULLET                         |
> | ☚    | 9754   | 261A     |                    | BLACK LEFT POINTING INDEX                                    |
> | ☛    | 9755   | 261B     |                    | BLACK RIGHT POINTING INDEX                                   |
> | ☜    | 9756   | 261C     |                    | WHITE LEFT POINTING INDEX                                    |
> | ☝    | 9757   | 261D     |                    | WHITE UP POINTING INDEX                                      |
> | ☞    | 9758   | 261E     |                    | WHITE RIGHT POINTING INDEX                                   |
> | ☟    | 9759   | 261F     |                    | WHITE DOWN POINTING INDEX                                    |
> | ☠    | 9760   | 2620     |                    | SKULL AND CROSSBONES                                         |
> | ☡    | 9761   | 2621     |                    | CAUTION SIGN                                                 |
> | ☢    | 9762   | 2622     |                    | RADIOACTIVE SIGN                                             |
> | ☣    | 9763   | 2623     |                    | BIOHAZARD SIGN                                               |
> | ☤    | 9764   | 2624     |                    | CADUCEUS                                                     |
> | ☥    | 9765   | 2625     |                    | ANKH                                                         |
> | ☦    | 9766   | 2626     |                    | ORTHODOX CROSS                                               |
> | ☧    | 9767   | 2627     |                    | CHI RHO                                                      |
> | ☨    | 9768   | 2628     |                    | CROSS OF LORRAINE                                            |
> | ☩    | 9769   | 2629     |                    | CROSS OF JERUSALEM                                           |
> | ☪    | 9770   | 262A     |                    | STAR AND CRESCENT                                            |
> | ☫    | 9771   | 262B     |                    | FARSI SYMBOL                                                 |
> | ☬    | 9772   | 262C     |                    | KHANDA                                                       |
> | ☭    | 9773   | 262D     |                    | HAMMER AND SICKLE                                            |
> | ☮    | 9774   | 262E     |                    | PEACE SYMBOL                                                 |
> | ☯    | 9775   | 262F     |                    | YIN YANG                                                     |
> | ☰    | 9776   | 2630     |                    | TRIGRAM FOR HEAVEN                                           |
> | ☱    | 9777   | 2631     |                    | TRIGRAM FOR LAKE                                             |
> | ☲    | 9778   | 2632     |                    | TRIGRAM FOR FIRE                                             |
> | ☳    | 9779   | 2633     |                    | TRIGRAM FOR THUNDER                                          |
> | ☴    | 9780   | 2634     |                    | TRIGRAM FOR WIND                                             |
> | ☵    | 9781   | 2635     |                    | TRIGRAM FOR WATER                                            |
> | ☶    | 9782   | 2636     |                    | TRIGRAM FOR MOUNTAIN                                         |
> | ☷    | 9783   | 2637     |                    | TRIGRAM FOR EARTH                                            |
> | ☸    | 9784   | 2638     |                    | WHEEL OF DHARMA                                              |
> | ☹    | 9785   | 2639     |                    | WHITE FROWNING FACE                                          |
> | ☺    | 9786   | 263A     |                    | WHITE SMILING FACE                                           |
> | ☻    | 9787   | 263B     |                    | BLACK SMILING FACE                                           |
> | ☼    | 9788   | 263C     |                    | WHITE SUN WITH RAYS                                          |
> | ☽    | 9789   | 263D     |                    | FIRST QUARTER MOON                                           |
> | ☾    | 9790   | 263E     |                    | LAST QUARTER MOON                                            |
> | ☿    | 9791   | 263F     |                    | MERCURY                                                      |
> | ♀    | 9792   | 2640     |                    | FEMALE SIGN                                                  |
> | ♁    | 9793   | 2641     |                    | EARTH                                                        |
> | ♂    | 9794   | 2642     |                    | MALE SIGN                                                    |
> | ♃    | 9795   | 2643     |                    | JUPITER                                                      |
> | ♄    | 9796   | 2644     |                    | SATURN                                                       |
> | ♅    | 9797   | 2645     |                    | URANUS                                                       |
> | ♆    | 9798   | 2646     |                    | NEPTUNE                                                      |
> | ♇    | 9799   | 2647     |                    | PLUTO                                                        |
> | ♈    | 9800   | 2648     |                    | ARIES                                                        |
> | ♉    | 9801   | 2649     |                    | TAURUS                                                       |
> | ♊    | 9802   | 264A     |                    | GEMINI                                                       |
> | ♋    | 9803   | 264B     |                    | CANCER                                                       |
> | ♌    | 9804   | 264C     |                    | LEO                                                          |
> | ♍    | 9805   | 264D     |                    | VIRGO                                                        |
> | ♎    | 9806   | 264E     |                    | LIBRA                                                        |
> | ♏    | 9807   | 264F     |                    | SCORPIUS                                                     |
> | ♐    | 9808   | 2650     |                    | SAGITTARIUS                                                  |
> | ♑    | 9809   | 2651     |                    | CAPRICORN                                                    |
> | ♒    | 9810   | 2652     |                    | AQUARIUS                                                     |
> | ♓    | 9811   | 2653     |                    | PISCES                                                       |
> | ♔    | 9812   | 2654     |                    | WHITE CHESS KING                                             |
> | ♕    | 9813   | 2655     |                    | WHITE CHESS QUEEN                                            |
> | ♖    | 9814   | 2656     |                    | WHITE CHESS ROOK                                             |
> | ♗    | 9815   | 2657     |                    | WHITE CHESS BISHOP                                           |
> | ♘    | 9816   | 2658     |                    | WHITE CHESS KNIGHT                                           |
> | ♙    | 9817   | 2659     |                    | WHITE CHESS PAWN                                             |
> | ♚    | 9818   | 265A     |                    | BLACK CHESS KING                                             |
> | ♛    | 9819   | 265B     |                    | BLACK CHESS QUEEN                                            |
> | ♜    | 9820   | 265C     |                    | BLACK CHESS ROOK                                             |
> | ♝    | 9821   | 265D     |                    | BLACK CHESS BISHOP                                           |
> | ♞    | 9822   | 265E     |                    | BLACK CHESS KNIGHT                                           |
> | ♟    | 9823   | 265F     |                    | BLACK CHESS PAWN                                             |
> | ♠    | 9824   | 2660     | \&spades;          | BLACK SPADE SUIT                                             |
> | ♡    | 9825   | 2661     |                    | WHITE HEART SUIT                                             |
> | ♢    | 9826   | 2662     |                    | WHITE DIAMOND SUIT                                           |
> | ♣    | 9827   | 2663     | \&clubs;           | BLACK CLUB SUIT                                              |
> | ♤    | 9828   | 2664     |                    | WHITE SPADE SUIT                                             |
> | ♥    | 9829   | 2665     | \&hearts;          | BLACK HEART SUIT                                             |
> | ♦    | 9830   | 2666     | \&diams;           | BLACK DIAMOND SUIT                                           |
> | ♧    | 9831   | 2667     |                    | WHITE CLUB SUIT                                              |
> | ♨    | 9832   | 2668     |                    | HOT SPRINGS                                                  |
> | ♩    | 9833   | 2669     |                    | QUARTER NOTE                                                 |
> | ♪    | 9834   | 266A     |                    | EIGHTH NOTE                                                  |
> | ♫    | 9835   | 266B     |                    | BEAMED EIGHTH NOTES                                          |
> | ♬    | 9836   | 266C     |                    | BEAMED SIXTEENTH NOTES                                       |
> | ♭    | 9837   | 266D     |                    | MUSIC FLAT SIGN                                              |
> | ♮    | 9838   | 266E     |                    | MUSIC NATURAL SIGN                                           |
> | ♯    | 9839   | 266F     |                    | MUSIC SHARP SIGN                                             |
> | ♰    | 9840   | 2670     |                    | WEST SYRIAC CROSS                                            |
> | ♱    | 9841   | 2671     |                    | EAST SYRIAC CROSS                                            |
> | ♲    | 9842   | 2672     |                    | UNIVERSAL RECYCLING SYMBOL                                   |
> | ♳    | 9843   | 2673     |                    | RECYCLING SYMBOL FOR TYPE-1 PLASTICS                         |
> | ♴    | 9844   | 2674     |                    | RECYCLING SYMBOL FOR TYPE-2 PLASTICS                         |
> | ♵    | 9845   | 2675     |                    | RECYCLING SYMBOL FOR TYPE-3 PLASTICS                         |
> | ♶    | 9846   | 2676     |                    | RECYCLING SYMBOL FOR TYPE-4 PLASTICS                         |
> | ♷    | 9847   | 2677     |                    | RECYCLING SYMBOL FOR TYPE-5 PLASTICS                         |
> | ♸    | 9848   | 2678     |                    | RECYCLING SYMBOL FOR TYPE-6 PLASTICS                         |
> | ♹    | 9849   | 2679     |                    | RECYCLING SYMBOL FOR TYPE-7 PLASTICS                         |
> | ♺    | 9850   | 267A     |                    | RECYCLING SYMBOL FOR GENERIC MATERIALS                       |
> | ♻    | 9851   | 267B     |                    | BLACK UNIVERSAL RECYCLING SYMBOL                             |
> | ♼    | 9852   | 267C     |                    | RECYCLED PAPER SYMBOL                                        |
> | ♽    | 9853   | 267D     |                    | PARTIALLY-RECYCLED PAPER SYMBOL                              |
> | ♾    | 9854   | 267E     |                    | PERMANENT PAPER SIGN                                         |
> | ♿    | 9855   | 267F     |                    | WHEELCHAIR SYMBOL                                            |
> | ⚀    | 9856   | 2680     |                    | DIE FACE-1                                                   |
> | ⚁    | 9857   | 2681     |                    | DIE FACE-2                                                   |
> | ⚂    | 9858   | 2682     |                    | DIE FACE-3                                                   |
> | ⚃    | 9859   | 2683     |                    | DIE FACE-4                                                   |
> | ⚄    | 9860   | 2684     |                    | DIE FACE-5                                                   |
> | ⚅    | 9861   | 2685     |                    | DIE FACE-6                                                   |
> | ⚆    | 9862   | 2686     |                    | WHITE CIRCLE WITH DOT RIGHT                                  |
> | ⚇    | 9863   | 2687     |                    | WHITE CIRCLE WITH TWO DOTS                                   |
> | ⚈    | 9864   | 2688     |                    | BLACK CIRCLE WITH WHITE DOT RIGHT                            |
> | ⚉    | 9865   | 2689     |                    | BLACK CIRCLE WITH TWO WHITE DOTS                             |
> | ⚊    | 9866   | 268A     |                    | MONOGRAM FOR YANG                                            |
> | ⚋    | 9867   | 268B     |                    | MONOGRAM FOR YIN                                             |
> | ⚌    | 9868   | 268C     |                    | DIGRAM FOR GREATER YANG                                      |
> | ⚍    | 9869   | 268D     |                    | DIGRAM FOR LESSER YIN                                        |
> | ⚎    | 9870   | 268E     |                    | DIGRAM FOR LESSER YANG                                       |
> | ⚏    | 9871   | 268F     |                    | DIGRAM FOR GREATER YIN                                       |
> | ⚐    | 9872   | 2690     |                    | WHITE FLAG                                                   |
> | ⚑    | 9873   | 2691     |                    | BLACK FLAG                                                   |
> | ⚒    | 9874   | 2692     |                    | HAMMER AND PICK                                              |
> | ⚓    | 9875   | 2693     |                    | ANCHOR                                                       |
> | ⚔    | 9876   | 2694     |                    | CROSSED SWORDS                                               |
> | ⚕    | 9877   | 2695     |                    | STAFF OF AESCULAPIUS                                         |
> | ⚖    | 9878   | 2696     |                    | SCALES                                                       |
> | ⚗    | 9879   | 2697     |                    | ALEMBIC                                                      |
> | ⚘    | 9880   | 2698     |                    | FLOWER                                                       |
> | ⚙    | 9881   | 2699     |                    | GEAR                                                         |
> | ⚚    | 9882   | 269A     |                    | STAFF OF HERMES                                              |
> | ⚛    | 9883   | 269B     |                    | ATOM SYMBOL                                                  |
> | ⚜    | 9884   | 269C     |                    | FLEUR-DE-LIS                                                 |
> | ⚝    | 9885   | 269D     |                    | OUTLINED WHITE STAR                                          |
> | ⚞    | 9886   | 269E     |                    | THREE LINES CONVERGING RIGHT                                 |
> | ⚟    | 9887   | 269F     |                    | THREE LINES CONVERGING LEFT                                  |
> | ⚠    | 9888   | 26A0     |                    | WARNING SIGN                                                 |
> | ⚡    | 9889   | 26A1     |                    | HIGH VOLTAGE SIGN                                            |
> | ⚢    | 9890   | 26A2     |                    | DOUBLED FEMALE SIGN                                          |
> | ⚣    | 9891   | 26A3     |                    | DOUBLED MALE SIGN                                            |
> | ⚤    | 9892   | 26A4     |                    | INTERLOCKED FEMALE AND MALE SIGN                             |
> | ⚥    | 9893   | 26A5     |                    | MALE AND FEMALE SIGN                                         |
> | ⚦    | 9894   | 26A6     |                    | MALE WITH STROKE SIGN                                        |
> | ⚧    | 9895   | 26A7     |                    | MALE WITH STROKE AND MALE AND FEMALE SIGN                    |
> | ⚨    | 9896   | 26A8     |                    | VERTICAL MALE WITH STROKE SIGN                               |
> | ⚩    | 9897   | 26A9     |                    | HORIZONTAL MALE WITH STROKE SIGN                             |
> | ⚪    | 9898   | 26AA     |                    | MEDIUM WHITE CIRCLE                                          |
> | ⚫    | 9899   | 26AB     |                    | MEDIUM BLACK CIRCLE                                          |
> | ⚬    | 9900   | 26AC     |                    | MEDIUM SMALL WHITE CIRCLE                                    |
> | ⚭    | 9901   | 26AD     |                    | MARRIAGE SYMBOL                                              |
> | ⚮    | 9902   | 26AE     |                    | DIVORCE SYMBOL                                               |
> | ⚯    | 9903   | 26AF     |                    | UNMARRIED PARTNERSHIP SYMBOL                                 |
> | ⚰    | 9904   | 26B0     |                    | COFFIN                                                       |
> | ⚱    | 9905   | 26B1     |                    | FUNERAL URN                                                  |
> | ⚲    | 9906   | 26B2     |                    | NEUTER                                                       |
> | ⚳    | 9907   | 26B3     |                    | CERES                                                        |
> | ⚴    | 9908   | 26B4     |                    | PALLAS                                                       |
> | ⚵    | 9909   | 26B5     |                    | JUNO                                                         |
> | ⚶    | 9910   | 26B6     |                    | VESTA                                                        |
> | ⚷    | 9911   | 26B7     |                    | CHIRON                                                       |
> | ⚸    | 9912   | 26B8     |                    | BLACK MOON LILITH                                            |
> | ⚹    | 9913   | 26B9     |                    | SEXTILE                                                      |
> | ⚺    | 9914   | 26BA     |                    | SEMISEXTILE                                                  |
> | ⚻    | 9915   | 26BB     |                    | QUINCUNX                                                     |
> | ⚼    | 9916   | 26BC     |                    | SESQUIQUADRATE                                               |
> | ⚽    | 9917   | 26BD     |                    | SOCCER BALL                                                  |
> | ⚾    | 9918   | 26BE     |                    | BASEBALL                                                     |
> | ⚿    | 9919   | 26BF     |                    | SQUARED KEY                                                  |
> | ⛀    | 9920   | 26C0     |                    | WHITE DRAUGHTS MAN                                           |
> | ⛁    | 9921   | 26C1     |                    | WHITE DRAUGHTS KING                                          |
> | ⛂    | 9922   | 26C2     |                    | BLACK DRAUGHTS MAN                                           |
> | ⛃    | 9923   | 26C3     |                    | BLACK DRAUGHTS KING                                          |
> | ⛄    | 9924   | 26C4     |                    | SNOWMAN WITHOUT SNOW                                         |
> | ⛅    | 9925   | 26C5     |                    | SUN BEHIND CLOUD                                             |
> | ⛆    | 9926   | 26C6     |                    | RAIN                                                         |
> | ⛇    | 9927   | 26C7     |                    | BLACK SNOWMAN                                                |
> | ⛈    | 9928   | 26C8     |                    | THUNDER CLOUD AND RAIN                                       |
> | ⛉    | 9929   | 26C9     |                    | TURNED WHITE SHOGI PIECE                                     |
> | ⛊    | 9930   | 26CA     |                    | TURNED BLACK SHOGI PIECE                                     |
> | ⛋    | 9931   | 26CB     |                    | WHITE DIAMOND IN SQUARE                                      |
> | ⛌    | 9932   | 26CC     |                    | CROSSING LANES                                               |
> | ⛍    | 9933   | 26CD     |                    | DISABLED CAR                                                 |
> | ⛎    | 9934   | 26CE     |                    | OPHIUCHUS                                                    |
> | ⛏    | 9935   | 26CF     |                    | PICK                                                         |
> | ⛐    | 9936   | 26D0     |                    | CAR SLIDING                                                  |
> | ⛑    | 9937   | 26D1     |                    | HELMET WITH WHITE CROSS                                      |
> | ⛒    | 9938   | 26D2     |                    | CIRCLED CROSSING LANES                                       |
> | ⛓    | 9939   | 26D3     |                    | CHAINS                                                       |
> | ⛔    | 9940   | 26D4     |                    | NO ENTRY                                                     |
> | ⛕    | 9941   | 26D5     |                    | ALTERNATE ONE-WAY LEFT WAY TRAFFIC                           |
> | ⛖    | 9942   | 26D6     |                    | BLACK TWO-WAY LEFT WAY TRAFFIC                               |
> | ⛗    | 9943   | 26D7     |                    | WHITE TWO-WAY LEFT WAY TRAFFIC                               |
> | ⛘    | 9944   | 26D8     |                    | BLACK LEFT LANE MERGE                                        |
> | ⛙    | 9945   | 26D9     |                    | WHITE LEFT LANE MERGE                                        |
> | ⛚    | 9946   | 26DA     |                    | DRIVE SLOW SIGN                                              |
> | ⛛    | 9947   | 26DB     |                    | HEAVY WHITE DOWN-POINTING TRIANGLE                           |
> | ⛜    | 9948   | 26DC     |                    | LEFT CLOSED ENTRY                                            |
> | ⛝    | 9949   | 26DD     |                    | SQUARED SALTIRE                                              |
> | ⛞    | 9950   | 26DE     |                    | FALLING DIAGONAL IN WHITE CIRCLE IN BLACK SQUARE             |
> | ⛟    | 9951   | 26DF     |                    | BLACK TRUCK                                                  |
> | ⛠    | 9952   | 2.60E+01 |                    | RESTRICTED LEFT ENTRY-1                                      |
> | ⛡    | 9953   | 2.60E+02 |                    | RESTRICTED LEFT ENTRY-2                                      |
> | ⛢    | 9954   | 2.60E+03 |                    | ASTRONOMICAL SYMBOL FOR URANUS                               |
> | ⛣    | 9955   | 2.60E+04 |                    | HEAVY CIRCLE WITH STROKE AND TWO DOTS ABOVE                  |
> | ⛤    | 9956   | 2.60E+05 |                    | PENTAGRAM                                                    |
> | ⛥    | 9957   | 2.60E+06 |                    | RIGHT-HANDED INTERLACED PENTAGRAM                            |
> | ⛦    | 9958   | 2.60E+07 |                    | LEFT-HANDED INTERLACED PENTAGRAM                             |
> | ⛧    | 9959   | 2.60E+08 |                    | INVERTED PENTAGRAM                                           |
> | ⛨    | 9960   | 2.60E+09 |                    | BLACK CROSS ON SHIELD                                        |
> | ⛩    | 9961   | 2.60E+10 |                    | SHINTO SHRINE                                                |
> | ⛪    | 9962   | 26EA     |                    | CHURCH                                                       |
> | ⛫    | 9963   | 26EB     |                    | CASTLE                                                       |
> | ⛬    | 9964   | 26EC     |                    | HISTORIC SITE                                                |
> | ⛭    | 9965   | 26ED     |                    | GEAR WITHOUT HUB                                             |
> | ⛮    | 9966   | 26EE     |                    | GEAR WITH HANDLES                                            |
> | ⛯    | 9967   | 26EF     |                    | MAP SYMBOL FOR LIGHTHOUSE                                    |
> | ⛰    | 9968   | 26F0     |                    | MOUNTAIN                                                     |
> | ⛱    | 9969   | 26F1     |                    | UMBRELLA ON GROUND                                           |
> | ⛲    | 9970   | 26F2     |                    | FOUNTAIN                                                     |
> | ⛳    | 9971   | 26F3     |                    | FLAG IN HOLE                                                 |
> | ⛴    | 9972   | 26F4     |                    | FERRY                                                        |
> | ⛵    | 9973   | 26F5     |                    | SAILBOAT                                                     |
> | ⛶    | 9974   | 26F6     |                    | SQUARE FOUR CORNERS                                          |
> | ⛷    | 9975   | 26F7     |                    | SKIER                                                        |
> | ⛸    | 9976   | 26F8     |                    | ICE SKATE                                                    |
> | ⛹    | 9977   | 26F9     |                    | PERSON WITH BALL                                             |
> | ⛺    | 9978   | 26FA     |                    | TENT                                                         |
> | ⛻    | 9979   | 26FB     |                    | JAPANESE BANK SYMBOL                                         |
> | ⛼    | 9980   | 26FC     |                    | HEADSTONE GRAVEYARD SYMBOL                                   |
> | ⛽    | 9981   | 26FD     |                    | FUEL PUMP                                                    |
> | ⛾    | 9982   | 26FE     |                    | CUP ON BLACK SQUARE                                          |
> | ⛿    | 9983   | 26FF     |                    | WHITE FLAG WITH HORIZONTAL MIDDLE BLACK STRIPE               |

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
