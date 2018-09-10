# CSS #

## 比较 inline inline-block block 的区别 ##

inline:

使元素变成行内元素，拥有行内元素的特性，即可以与其他行内元素共享一行，不会独占一行. 
不能更改元素的height，width的值，大小由内容撑开. 
可以使用padding，margin的left和right产生边距效果，但是top和bottom就不行.

block:

使元素变成块级元素，独占一行，在不设置自己的宽度的情况下，块级元素会默认填满父级元素的宽度. 
能够改变元素的height，width的值. 
可以设置padding，margin的各个属性值，top，left，bottom，right都能够产生边距效果.

 inline-block:

结合了inline与block的一些特点，结合了上述inline的第1个特点和block的第2,3个特点.


inline：

inline元素无法设置宽高，如何解决，此时可以使用 float （left/right）解决。



## 谈谈 bfc ##

[原文地址](https://blog.csdn.net/TWFKXP/article/details/80574987)


BFC (Block formatting context) “块级格式化上下文”

它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。

满足下列条件之一就可触发BFC

　　【1】根元素，即HTML元素 
　　【2】float的值不为none 
　　???xxx【3】overflow的值不为visible 
　　【4】display的值为inline-block、table-cell、table-caption 
　　【5】position的值为absolute或fixed


特性

【1】阻止垂直外边距（margin-top、margin-bottom）折叠


【2】包含浮动元素 
可以包含它内部的所有元素，包括浮动元素——因此一清除内部浮动


## css清除浮动的方法 ##

1. clear: both;

2. 父级div定义 overflow:auto;

3. 添加伪类 :after


## 水平居中 ##

1. 
width:xxx;
margin:auto;

2. 
<父>display:inline-block; 
<子>text-align:center

3. 
position:absolute

4. 
fit-content（配合margin：auto） 

5.
flex


## 垂直居中 ##

1. 


<父> 
display：table-cell；
vertical-align: middle;   
text-align: center;   

<子>
display：table-cell；   

2.

<父>
display: flex;
align-items:Center;


3.

<父>
   display: flex;

<子> margin:auto;






















