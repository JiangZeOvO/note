# C

```c
#include<stdio.h>
int main(void)
{
	printf("hello world");
	return 0;
}
```

编译型语言

严格语法,需要结束分号`;`

代码需要写在`main`函数内

## 关键字

|   `auto`   | `break`  |  `case`   |  `char`  |  `const`   | `continue` |
| :--------: | :------: | :-------: | :------: | :--------: | :--------: |
| `default`  |   `do`   | `double`  |  `else`  |   `enum`   |  `extern`  |
|  `float`   |  `for`   |  `goto`   |   `if`   |   `int`    |   `long`   |
| `register` | `return` |  `short`  | `signed` |  `sizeof`  |  `static`  |
|  `struct`  | `switch` | `typedef` | `union`  | `unsigned` |   `void`   |
| `volatile` | `while`  |           |          |            |            |

类型说明符

语句定义符

存储类型相关

其他

## 标识符

某个实体的名称

只能由`数字` `字母` `下划线`组成,且不能以`数字`开头

不可以使用关键字

区分大小写

有长度限制,但是一般不会刻意注意,不过某些编辑器仅识别前30~60位左右的标识符

顾名思义,命名需要有意义

## 数据类型

### 整形

C语言规定,`short`类型占用不大于`int`类型,`long`类型占用不小于`int`类型

具体的占用大小根据当前的运行环境而定,可以使用`sizeof(类型)`查询当前环境下该类型占用字节数

整数默认为`int`类型

小数默认为`double`类型,要设置为`float`类型(`1.57f`),使用`f`修饰符

|  类型   |  名称  |   占用   | 注释 |
| :-----: | :----: | :------: | :--: |
| `short` | 短整型 | `2 byte` |      |
|  `int`  |  整型  | `4 byte` |      |
| `long`  | 长整型 | `4 byte` |      |

### 浮点型

|   类型   |     名称     |   占用   | 注释 |
| :------: | :----------: | :------: | :--: |
| `float`  | 单精度浮点型 | `4 byte` |      |
| `double` | 双精度浮点型 | `8 byte` |      |

### 字符型

`%d` 整数占位符

`%c` 字符占位符

`%f` 浮点数占位符

`''` 表示字符

`""` 表示字符串

|  类型  |  名称  |   占用   | 注释 |
| :----: | :----: | :------: | :--: |
| `char` | 字符型 | `1 byte` |      |

### 数组

`数据类型 名称[长度]`

固定大小,相同类型元素的集合

```c
#include <stdio.h>
int main() {
    // 一维数组定义
    // 数组的长度 必须为"常量"或"常量表达式",不可以为变量
    // {} 初始化,{}内的数据个数,可以不和长度一致,但是必须小于等于长度个数,如果{}内的数据个数小于数组长度,则未指定的数据都为0
    int array_1[10] = {1,2,3,4,5,6,7,8,9,0};
    // 省略长度初始化,或默认根据初始化中的数据个数设置数组长度
    int array_2[] = {1,2,3,4,5,6,7,8,9,0};
    // 多维数组定义
    int array_3[2][2];
    // 以下两种方式的结果是一致的
    int array_4[2][2] = {{1,2},{3,4}};
    int array_5[2][2] = {1,2,3,4};
    // 给出部分值
    int array_6[2][2] = {{1},{2}};
    // 不指定长度(最高维度长度)
    int array_7[][2] = {1,2,3,4};
    // 以下表达式结果为 [[1,2],[3,4],[5,0]]
    int array_7[][2] = {1,2,3,4,5};
    // 二维数组可以使用 一维数组的下标遍历 小技巧
    for (int i = 0; i < 4; i++){
        printf("%d", array_7[i / 4][i % 4])
    }
    // 字符串/字符数组
    // 字符数组长度要比设置的字符串长度+1 因为每次读取字符串 系统会根据找到\0才会结束对字符串的读取
    char string_1[6] = "hello";
    char string_2[] = "";
    // 如果字符数组的初始化长度小于定义的长度 则使用"\0"表示,这个标识符为字符串结束,而非无意义的0
    char string_3[6] = {"h","e","l","l","o"}
    return 0;
}
```

## 存储

计算机中最小的单位是`bit`,最小的存储单位是`byte`

|            |  名称   |             容量              |
| :--------: | :-----: | :---------------------------: |
|   `bit`    | 位/比特 | 1个`二进制位的值`存储`0`或`1` |
| `byte` `B` |  字节   |      通常由8个`bit`组成       |
|    `KB`    |         |         1024个`byte`          |
|    `MB`    |         |          1024个`KB`           |
|    `GB`    |         |          1024个`MB`           |
|    `TB`    |         |          1024个`GB`           |
|    `PB`    |         |          1024个`TB`           |
|    `EB`    |         |          1024个`PB`           |
|    `ZB`    |         |          1024个`EB`           |
|    `YB`    |         |          1024个`ZB`           |

## 常量

数值: `int` `float` `double`

字符: `'a'`

字符串: `“abc”`,转义字符: `\n 换行` `\t 制表符` `\\ 反斜杠`

命名规范与变量一致,但行业规则推荐全部大写

### `#define`定义法

这是一种宏定义的方式,在编译前,预处理器会将程序中所有使用该宏的地方替换为对应的值

在编译前由预处理器处理,预处理器会对代码里所有使用该宏的地方进行文本替换,不会进行类型检查

```c
#include <stdio.h>
#define PI 3.14
int main() {
    return 0;
}
```

### `const`定义法

运用 `const` 关键字能够定义具有常属性的变量,该变量一旦被初始化,其值就不能再被修改

在编译阶段处理,编译器会对其进行类型检查,以确保类型匹配

```c
#include <stdio.h>
int main() {
    const double PI = 3.14;
    return 0;
}
```

## 变量

```c
#include <stdio.h>
int main() {
    double pi = 3.14;
    return 0;
}
```

```c
#include <stdio.h>
int main() {
    double pi;
    pi = 3.14;
    return 0;
}
```

```c
#include <stdio.h>
int main() {
    // 无符号整型 表示数据取值范围无负数 默认为 signed
    unsigned int height;
    height = 3;
    // 定义多个变量
    int num_1 = 1, num_2 = 2;
    return 0;
}
```

	## 运算符

`单目运算`修饰一个操作数

`双目运算`修饰两个操作数

`三目运算`修饰三个操作数

### 算数运算符

`+` 加法

`-` 减法

`*` 乘法

`/` 除法

左右两个操作数都位`int`则为`整除`,保留商,省略余

左右两个操作数至少有一个`float`或`double`则为`除法`,保留商,除开余

`%` 取余

左右两个操作数必须都为`int`

`++` 自增

`前置自增` 先自增再赋值 返回`+1后结果`

`后置自增` 先赋值再自增 返回`+1前结果`

`--` 自减

`前置自减` 先自减再赋值 返回`-1后结果`

`后置自减` 先赋值再自减 返回`-1前结果`

### 赋值运算符

`=`

`+=`

`-=`

`*=`

`/=`

`%=`

`&=`

`|=`

`^=`

`<<=`

`>>=`

### 关系运算符

`>`

`<`

`>=`

`<=`

`==`

`!=`

### 逻辑运算符

`&&`

`||`

`!`

### 位运算符

`&` 与

同位为`1`则为`1`,否则为`0`

`2 & 3`运算结果

| 输入 `2` | `0`  | `0`  | `1`  | `0`  |
| :------: | :--: | :--: | :--: | :--: |
| 输入 `3` | `0`  | `0`  | `1`  | `1`  |
| 结果 `2` | `0`  | `0`  | `1`  | `0`  |

`|` 或

同位有`1`则为`1`,否则为`0`,结果取决于该变量使用了多少字节或者说使用了什么类型

`2 & 3`运算结果

| 输入 `2` | `0`  | `0`  | `1`  | `0`  |
| :------: | :--: | :--: | :--: | :--: |
| 输入 `3` | `0`  | `0`  | `1`  | `1`  |
| 结果 `3` | `0`  | `0`  | `1`  | `1`  |

`~` 非

`1`转换为`0`,`0`转换为`1`

`~2`运算结果

| 输入 `2`  | `0`  | `0`  | `1`  | `0`  |
| :-------: | :--: | :--: | :--: | :--: |
| 结果 `13` | `1`  | `1`  | `0`  | `1`  |

`^` 异或

同位相同则为`0`,否则为`1`

不使用临时变量,交换两个变量的值

```c
#include <stdio.h>
int main() {
    int a = 1;
    int b = 2;
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    // 三次异或操作 即可交换两个变量的值
    // 此方法仅适用于支持位运算的数据类型，像整数类型
    // 若a和b指向同一块内存(即a和b是同一个变量),运用这种方法会使变量的值变为0,因为a ^ a = 0
    // 所以在使用前,要确保a和b不是同一个变量
    return 0;
}
```

`2 ^ 3`运算结果

| 输入 `2` | `0`  | `0`  | `1`  | `0`  |
| :------: | :--: | :--: | :--: | :--: |
| 输入 `3` | `0`  | `0`  | `1`  | `1`  |
| 结果 `1` | `0`  | `0`  | `0`  | `1`  |

`<<` 左移

位左移`n`位,相当于乘以`n`次2,左侧溢出则丢弃,右侧空位补`0`

`2 << 1`运算结果

| 输入 `2` | `0`  | `0`  | `1`  | `0`  |
| :------: | :--: | :--: | :--: | :--: |
| 结果 `4` | `0`  | `1`  | `0`  | `0`  |

`>>` 右移

位右移`n`位,相当于整除`n`次2,右侧溢出则丢弃,左侧空位 如果是正数补`0`,负数补`1`

`2 >> 1`运算结果

| 输入 `2` | `0`  | `0`  | `1`  | `0`  |
| :------: | :--: | :--: | :--: | :--: |
| 结果 `1` | `0`  | `0`  | `0`  | `1`  |

### 条件运算符

`[condition]?[true_runing]:[false_runing]` 三目运算符

```c
#include <stdio.h>
int main() {
    int a = (99 < 100) ? 1 : 0 ;
    return 0;
}
```

### 逗号运算符

逗号运算符表达式,赋值操作会返回最后一个表达式的结果

```c
#include <stdio.h>
int main() {
    int a, b, c;
    c = ((a = 1), (b = 2), (c = a + b));
    return 0;
}
```

### 优先级

### 结合性

大部分都是从左往右计算的

只有三种是从右往左运算的,`单目运算` `赋值` `三目运算`

## 系统函数

`printf` 打印输出

`sizeof` 获取变量占用空间(字节)

| 参数     | 类型          | 范围 | 默认值 | 注释                                  |
| :------- | :------------ | :--- | :----- | :------------------------------------ |
|          | `var` `const` |      |        | 可以传递`变量` `常量`任何有类型的东西 |
| `return` | `int`         |      |        | 返回该类型占用的`byte`个数            |

`scanf` 获取用户输入<mark>已弃用</mark>

| 参数     | 类型   | 范围 | 默认值 | 注释                                                 |
| :------- | :----- | :--- | :----- | :--------------------------------------------------- |
|          | `str`  |      |        | 输入要遵循这个字符串的格式,例子:`"%d"`表示输入字符串 |
|          | `&var` |      |        | 取地址变量                                           |
| `return` | `int`  |      |        |                                                      |

`scanf_s` 获取用户输入

输入时会阻塞代码,等待用户输入

输入多个数据时,有结束符,一般使用`回车`或者`空格`表示,如果`参数1`格式化字符串中有其他字符,那么其他字符可能就是结束符

```c
#include <stdio.h>
int main() {
    int a = 1, b = 2; 
    scanf_s("%d%d%d", &a, &b, &c);
    return 0;
}
```

| 参数     | 类型   | 范围 | 默认值 | 注释                                                 |
| :------- | :----- | :--- | :----- | :--------------------------------------------------- |
|          | `str`  |      |        | 输入要遵循这个字符串的格式,例子:`"%d"`表示输入字符串 |
|          | `&var` |      |        | 取地址变量                                           |
| `return` | `int`  |      |        |                                                      |



## 类型转换

对于基本数据类型,编译器会自动帮助实现强制转换,但建议还是加上`(类型)`手动强制转换

### 自动转换

小类型转换成大类型

```c
#include <stdio.h>
int main() {
    char a = 10;
    int b = 20;
    // 自动将a从char类型自动转换为int类型
    b = b + a;
    return 0;
}
```

### 强制转换

大类型转换成小类型

```c
#include <stdio.h>
int main() {
    int a = 10;
    // waring警告:double转换为int会丢失数据,[a = 15]
    	a = a + 5.5f;
    // 无警告
    	a = a + (int)5.5f;
    return 0;
}
```

## 语句

`;` 空语句

`a += 2;` 表达式语句

`printf("输出内容");` 函数调用语句

`{}包含的多条语句` 复合语句

`选择 分支 循环 跳转` 控制语句

## 流程控制

代码默认从上往下 从左往右 依次执行

`C 语言` 代码需要写在`main()`函数内才能被执行

### `if` 判断

非`0`都为真,包括正数负数,`0`为假

`if`判断单条语句可以省略花括号

```c
#include <stdio.h>
int main() {
    if(1 == 0){
        
    }else if(1 == 2){
        
    }else{
        
    }
    return 0;
}
```

### `switch`

```c
#include <stdio.h>
int main() {
    int a = 0;
    switch (a){
        case 1:
            printf("1");
            break;
        case 2:
			printf("2");
            break;
        default:
            printf("other");
            break;
    }
    return 0;
}
```

### 循环

`for`循环单条语句可以省略花括号

`for`循环可以没有循环体,在`()`后面加`;`结束是正确语法,只不过没有意义

`for`循环 `表达式1`缺失则无操作,`表达式2`缺失则为`真`,`表达式3`缺失则无操作

```c
#include <stdio.h>
int main() {
    // for 循环
	for(int i = 1; i < 100; i++){
        
    }
    // while 循环
    int b = 1;
    while(b < 100){
        b++;
    }
    // do while 循环
    int c = 1;
    do{
        c++;
    }while(c < 100);
    return 0;
}
```

## 跳转语句

```c
#include <stdio.h>
int main() {
	for(int i = 1; i < 100; i++){
        // 跳出本层循环
        break;
        // 跳出本次循环
        continue;
        
    }
// [标号]语法,用于goto转跳到该位置
// C语言不限制程序中使用标号的次数,goto可以无条件转跳到标号处
MYLAB:
// 无条件转移,慎用,会转跳执行MYLAB:的位置
goto MYLAB;
    return 0;
}
```

## 函数

`返回值类型 函数名([参数]){}`

函数没有返回值可以使用`void`作为返回值类型,表示无类型

C语言 函数不可以嵌套定义(函数内定义函数)

```c
#include <stdio.h>
int main(){
    int login_1(char[] user, char[] name){
        return 0;
    }
    // 如果没有形参 则需要使用"void"修饰符占用参数位置
    void login_2(void){
        return;
    }
}

```



## 错误

### `waring`错误

```c
#include <stdio.h>
int main() {
    int a = 10;
    // double转换为int会丢失数据,[a = 15]
    	a = a + 5.5;
    // 无用语句,未使用表达式结果
    	a + 1;
    
    return 0;
}
```

## 头文件

### `stdio.h` 标准输入输出

`printf()` 打印输出

`puts()` 输出字符串

参数1 打印输出该字符串数据

`gets()` 输入字符串

参数1 变量名 输入的结果 返回给该变量

### `string.h` 字符串

```c
#include <stdio.h>
#include <string.h>
int main(){
    // 返回字符串长度
    // 会返回字符串的第一个字符,向后至首个"\0"字符
    // {"1","2","\0","3","4"} 的长度为2,从0开始计数长度至首个"\0"
    printf("%d",strlen("123456"));
    // 复制字符串到一个变量
    // dest: 新字符串
    // destsz: 参数1的长度
    // src: 旧字符串
    char new_string[];
    char old_string[] = "被复制的字符串";
    strcpy_s(new_string,16,old_string);
    // 字符串拼接
    // 新字符串
    // 参数1的长度
    // 拼接在后面的字符串
    char string_1[] = "123";
    strcat_s(string_1,7,"456");
    // 字符串比较 比较方式 按照第一个字符的ASSIC码对比 如果字符相同则下一个字符对比,以此类推
    // 字符串1
    // 字符串2
    // 返回值 0相等 
    switch (strcmp("123","123")){
		case (0):
            // 相等
            break;
        case (1):
            // 参数1 > 参数2
            break;
        case (-1):
            // 参数1 < 参数2
            break;
    }
    // 字符串求子串
    // haystack: 被搜索的字符串
    // needle: 查询字符串
    // return: 如果查询到则返回首次出现字符位置到字符串结束位置的全部字符,未查询到 则返回Null, 如果参数2是空字符串 则返回参数1
    char string_2[] = "abcdefgabc";
	strstr(string_2,"ef");
        
    
}


```

## 修饰符

```c
#include <stdio.h>
int main(void){
    // static声明变量只执行一次,尽管在循环内声明
    // 静态变量 使用域在局部,生存域在全局
    static int number_1 = 0;
    // static声明方法
    // 静态函数 仅在当前文件生效下
    // 函数默认的作用域是全局
    static int login(char username[], char password[]){
    // 项目全局变量
	extern int number_2 = 1;   
    }
}
```

## 声明

### 宏

在代码之前 预处理 用于源码编译之前把源码中的字符串内容替换掉

编译的时候 会将宏变量 编译到代码中使用该宏的位置 

#define `宏名` `替换字符串`

```c
#define MY_INT int
#define TEST(a,b) a * b
#include <stdio.h>
int main(void){
    // 编译后效果
    // int number_1 = 1;
    MY_INT number_1 = 1;
    // 输出结果为3
    // 他会将函数TEST后面根的表达式根据传参替换到以下位置
    // printf("%d",1 + 2 * 2 + 3);
    printf("%d",TEST(1+2,2+3));
	return 0; 
}
```

### 文件包含/引入/头文件

`<>` 只会在系统库中查找

`""` 项目库/自定义库,如果找不到 则去系统库中查找

文件允许嵌套引入,但是不允许重复引入



>`main.c`
>
>```c
>#include <stido.h>
>#include "tool.h"
>int main(void){
>    printf("%d",add());
>    return 0;
>}
>```
>
>`tool.h`
>
>```c
>#pragma once
>int add();
>```
>
>`tool.c`
>
>```c
>#include "tool.h"
>int add(){
>    // 函数体
>}
>```

### 条件编译

```c
#include <stdio.h>
#if 1
	int my_add(int a,int b)
#else
	int my_add(int a,int b,int c)
#endif
    {
    	return a + b;    
    }
int main(void){
    printf("%d", my_add(1,2));
    return 0;
}
```

