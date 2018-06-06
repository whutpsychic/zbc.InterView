# zbc.InterView #
comes from my job interview

[markdown Useage](https://blog.csdn.net/u014497625/article/details/76549168)

经历了两年实战，结果仅能上手，虽然熟练运用react，echarts等组件，然而理论知识捉襟见肘，见了面试官就被人各种“十个问题”惨遭灭灯，在此积累一些知识.

(web前端)


## 1.事件委托（JS）: ## 

[原文地址](https://blog.csdn.net/u013035060/article/details/60770477)

### 概述 ###

那什么叫事件委托呢？它还有一个名字叫事件代理，JavaScript高级程序设计上讲：事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。那这是什么意思呢？网上的各位大牛们讲事件委托基本上都用了同一个例子，就是取快递来解释这个现象，我仔细揣摩了一下，这个例子还真是恰当，我就不去想别的例子来解释了，借花献佛，我摘过来，大家认真领会一下事件委托到底是一个什么原理：
有三个同事预计会在周一收到快递。为签收快递，有两种办法：一是三个人在公司门口等快递；二是委托给前台MM代为签收。现实当中，我们大都采用委托的方案（公司也不会容忍那么多员工站在门口就为了等快递）。前台MM收到快递后，她会判断收件人是谁，然后按照收件人的要求签收，甚至代为付款。这种方案还有一个优势，那就是即使公司里来了新员工（不管多少），前台MM也会在收到寄给新员工的快递后核实并代为签收。
这里其实还有2层意思的：
第一，现在委托前台的同事是可以代为签收的，即程序中的现有的dom节点是有事件的；
第二，新员工也是可以被前台MM代为签收的，即程序中新添加的dom节点也是有事件的。

### 为什么要用事件委托： ###

一般来说，dom需要有事件处理程序，我们都会直接给它设事件处理程序就好了，那如果是很多的dom需要添加事件处理呢？比如我们有100个li，每个li都有相同的click点击事件，可能我们会用for循环的方法，来遍历所有的li，然后给它们添加事件，那这么做会存在什么影响呢？
在JavaScript中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的与dom节点进行交互，访问dom的次数越多，引起浏览器重绘与重排的次数也就越多，就会延长整个页面的交互就绪时间，这就是为什么性能优化的主要思想之一就是减少DOM操作的原因；如果要用事件委托，就会将所有的操作放到js程序里面，与dom的操作就只需要交互一次，这样就能大大的减少与dom的交互次数，提高性能；
每个函数都是一个对象，是对象就会占用内存，对象越多，内存占用率就越大，自然性能就越差了（内存不够用，是硬伤，哈哈），比如上面的100个li，就要占用100个内存空间，如果是1000个，10000个呢，那只能说呵呵了，如果用事件委托，那么我们就可以只对它的父级（如果只有一个父级）这一个对象进行操作，这样我们就需要一个内存空间就够了，是不是省了很多，自然性能就会更好。

### 事件委托的原理： ###

事件委托是利用事件的冒泡原理来实现的，何为事件冒泡呢？就是事件从最深的节点开始，然后逐步向上传播事件，举个例子：页面上有这么一个节点树，div>ul>li>a;比如给最里面的a加一个click点击事件，那么这个事件就会一层一层的往外执行，执行顺序a>li>ul>div，有这样一个机制，那么我们给最外面的div加点击事件，那么里面的ul，li，a做点击事件的时候，都会冒泡到最外层的div上，所以都会触发，这就是事件委托，委托它们父级代为执行事件。

### 总结： ###

那什么样的事件可以用事件委托，什么样的事件不可以用呢？
适合用事件委托的事件：click，mousedown，mouseup，keydown，keyup，keypress。
值得注意的是，mouseover和mouseout虽然也有事件冒泡，但是处理它们的时候需要特别的注意，因为需要经常计算它们的位置，处理起来不太容易。
不适合的就有很多了，举个例子，mousemove，每次都要计算它的位置，非常不好把控，在不如说focus，blur之类的，本身就没用冒泡的特性，自然就不能用事件委托了。

----

## 2.new 函数的发生过程 （JS）##

创建一个对象通常需要两步：

    1. 定义构造函数；

    2. 通过new来创建对象实例。

当我们使用new新建一个对象的时候，以new foo(...)为例：

    1. 一个新的对象被创建，同时继承了对象类型的原型，即foo.prototype；

    2. 执行对象类型的构造函数，同时该实例的属性和方法被this所引用，即this指向新构造的实例；

    3. 如果构造函数return了一个新的“对象”，那么这个对象就会取代整个new出来的结果。如果构造函数没有return对象，那么就会返回步骤1所创建的对象，即隐式返回this。（一般情况下构造函数不会返回任何值，不过在一些特殊情况下，如果用户想覆盖这个值，可以选择返回一个普通的对象来覆盖。）



使用new操作符，以这种方式调用构造函数实际上会经历以下4个步骤：

（1）创建一个新对象；

（2）将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；

（3）执行构造函数中的代码（为这个新对象添加属性）；

（4）返回新对象。


## 3.原型（JS） ##

[原文地址](https://blog.csdn.net/u012468376/article/details/53121081)

原型是Javascript中的继承的基础，JavaScript的继承就是基于原型的继承。


## 4.闭包（JS） ##

[原文地址](http://www.cnblogs.com/star-studio/archive/2011/06/22/2086493.html)

### 什么是闭包 ###

```
function a() {
    var i=0;
	function b(){
       alert(i);       
	}       
	return b;   
}   
var c = a();   
c(); 
```

全局变量c指定对 函数a的内部函数b的引用；内部函数b的执行需要依赖函数a的资源；
这里就产生一个闭包，使得a在执行完毕并返回后，不会被javascript垃圾回收机制GC回收。
因为这里c还在引用着b，而b依赖着a，故a在使用后，仍然存在于内存中。
简而言之：当函数a的内部函数b被函数a外的一个变量引用的时候，就创建了一个闭包。


### 闭包的使用场景 ###

1.使用闭包代替全局变量（立即执行函数）

2.函数外或在其他函数中访问某一函数内部的参数

3.在函数执行之前为要执行的函数提供具体参数

4.在函数执行之前为函数提供只有在函数执行或引用时才能知道的具体参数

5.为节点循环绑定click事件，在事件函数中使用当次循环的值或节点，而不是最后一次循环的值或节点

/*6.暂停执行*/

7.包装相关功能








