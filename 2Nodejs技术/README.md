<span id="hidden-autonumber"></span>

<h1 class="article-title">Node 技术</h1>

简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个事件驱动 I/O**服务端 JavaScript 环境**，基于 Google 的**Chrome V8 引擎**，V8 引擎执行 JavaScript 的速度非常快，性能非常好。

JavaScript 是一个单线程的语言，单线程的优点是不会像 Java 这些多线程语言在编程时出现线程同步、线程锁问题同时也避免了上下文切换带来的性能开销问题。那么其实在浏览器环境也只能是单线程，可以想象一下多线程对同一个 DOM 进行操作是什么场景？不是乱套了吗？

那么单线程可能你会想到的一个问题是，前面一个执行不完，后面不就卡住了吗？当然不能这样子的，JavaScript 是一种采用了**事件驱动**、**异步回调**的模式。另外 JavaScript 在服务端不存在什么历史包袱，在虚拟机上由于又有了 Chrome V8 的支持，使得 JavaScript 成为了 Node.js 的首选语言。
