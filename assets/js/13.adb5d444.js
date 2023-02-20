(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{339:function(e,t,a){"use strict";a.r(t);var _=a(12),v=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("大厂问题：")]),e._v(" "),t("ul",[t("li",[e._v("哪些区域会发生OOM异常？")]),e._v(" "),t("li",[e._v("垃圾回收器有哪些？")])])]),e._v(" "),t("p"),e._v(" "),t("h2",{attrs:{id:"一、jmm模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、jmm模型"}},[e._v("#")]),e._v(" 一、JMM模型")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/imagesimage-20220622231028306.png",alt:"image-20220622231028306"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images/640",alt:"图片"}})]),e._v(" "),t("ul",[t("li",[e._v("GC 主要工作在 Heap 区和 MetaSpace 区（上图蓝色部分）")])]),e._v(" "),t("p"),e._v(" "),t("h2",{attrs:{id:"二、gc垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、gc垃圾回收"}},[e._v("#")]),e._v(" 二、GC垃圾回收")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/RFwXYdzeRkTG5uaebVoLQw",target:"_blank",rel:"noopener noreferrer"}},[e._v("9种常见GC"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images/image-20220607112223300.png",alt:"image-20220607112223300"}})]),e._v(" "),t("h3",{attrs:{id:"_2-1-gc基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-gc基础"}},[e._v("#")]),e._v(" 2.1 GC基础")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("GC")]),e._v("：GC 本身有三种语义，下文需要根据具体场景带入不同的语义：")]),e._v(" "),t("li",[t("ul",[t("li",[t("strong",[e._v("Garbage Collection")]),e._v("：垃圾收集技术，名词。")]),e._v(" "),t("li",[t("strong",[e._v("Garbage Collector")]),e._v("：垃圾收集器，名词。")]),e._v(" "),t("li",[t("strong",[e._v("Garbage Collecting")]),e._v("：垃圾收集动作，动词。")])])]),e._v(" "),t("li",[t("strong",[e._v("Mutator")]),e._v("：生产垃圾的角色，也就是我们的应用程序，垃圾制造者，通过 Allocator 进行 allocate 和 free。")]),e._v(" "),t("li",[t("strong",[e._v("TLAB")]),e._v("：Thread Local Allocation Buffer 的简写，基于 CAS 的独享线程（Mutator Threads）可以优先将对象分配在 Eden 中的一块内存，因为是 Java 线程独享的内存区没有锁竞争，所以分配速度更快，每个 TLAB 都是一个线程独享的。")]),e._v(" "),t("li",[t("strong",[e._v("Card Table")]),e._v("：中文翻译为卡表，主要是用来标记卡页的状态，每个卡表项对应一个卡页。当卡页中一个对象引用有写操作时，写屏障将会标记对象所在的卡表状态改为 dirty，卡表的本质是用来解决跨代引用的问题。具体怎么解决的可以参考 StackOverflow 上的这个"),t("a",{attrs:{href:"https://stackoverflow.com/questions/19154607/how-actually-card-table-and-writer-barrier-works",target:"_blank",rel:"noopener noreferrer"}},[e._v("问题"),t("OutboundLink")],1),e._v("，或者研读一下 cardTableRS.app 中的源码。")])]),e._v(" "),t("p"),e._v(" "),t("h3",{attrs:{id:"_2-2-分配对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-分配对象"}},[e._v("#")]),e._v(" 2.2 分配对象")]),e._v(" "),t("p",[e._v("Java 中对象地址操作主要使用 Unsafe 调用了 C 的 allocate 和 free 两个方法，分配方法有两种：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("空闲链表（free list）")]),e._v("：通过额外的存储记录空闲的地址，将随机 IO 变为顺序 IO，但带来了额外的空间消耗。")]),e._v(" "),t("li",[t("strong",[e._v("碰撞指针（bump  pointer）")]),e._v("：通过一个指针作为分界点，需要分配内存时，仅需把指针往空闲的一端移动与对象大小相等的距离，分配效率较高，但使用场景有限。")])]),e._v(" "),t("h3",{attrs:{id:"_2-3-收集对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-收集对象"}},[e._v("#")]),e._v(" 2.3 收集对象")]),e._v(" "),t("h4",{attrs:{id:"_2-3-1-识别垃圾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-识别垃圾"}},[e._v("#")]),e._v(" 2.3.1 识别垃圾")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("引用计数法（Reference Counting）")]),e._v("：对每个对象的引用进行计数，每当有一个地方引用它时计数器+1，引用失效则-1，引用计数器放在对象头中。虽然循环引用问题可以通过Recycler算法解决，但是在多线程环境下，引用计数变更需要进行同步操作，性能较低，早期的编程语言才采用此算法。")]),e._v(" "),t("li",[t("strong",[e._v("可达性分析，又称引用链法（Tracing GC）")]),e._v("：从 GC Root （两栈两方法：JVM栈、本地方法栈、方法区的常量池、方法区的静态属性）开始进行对象搜索，可以被搜索到的对象即为可达对象，整个连通图之外的对象便可以作为垃圾被回收掉。目前 Java 中主流的虚拟机均采用此算法。")])]),e._v(" "),t("h4",{attrs:{id:"_2-3-2-内存回收算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-内存回收算法"}},[e._v("#")]),e._v(" 2.3.2 内存回收算法")]),e._v(" "),t("p",[e._v("自从有自动内存管理出现之时就有的一些收集算法，不同的收集器也是在不同场景下进行组合。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Mark-Sweep（标记-清除）")]),e._v("：【基础算法】回收过程主要分为两个阶段，第一阶段为追踪（Tracing）阶段，即从 GC Root 开始遍历对象图，并标记（Mark）所遇到的每个对象，第二阶段为清除（Sweep）阶段，即回收器检查堆中每一个对象，并将所有未被标记的对象进行回收，整个过程不会发生对象移动。整个算法在不同的实现中会使用三色抽象（Tricolour Abstraction）、位图标记（BitMap）等技术来提高算法的效率，存活对象较多时较高效。")]),e._v(" "),t("li",[t("strong",[e._v("Copying（复制）")]),e._v("：【优化："),t("em",[e._v("新生代")]),e._v("，新生代存活时间短，不需要过多复制】将空间分为两个大小相同的 From 和 To 两个半区，同一时间只会使用其中一个，每次进行回收时将一个半区的存活对象通过复制的方式转移到另一个半区。有递归（Robert R. Fenichel 和 Jerome C. Yochelson提出）和迭代（Cheney 提出）算法，以及解决了前两者递归栈、缓存行等问题的近似优先搜索算法。复制算法可以通过碰撞指针的方式进行快速地分配内存，但是也存在着空间利用率不高的缺点，另外就是存活对象比较大时复制的成本比较高。")]),e._v(" "),t("li",[t("strong",[e._v("Mark-Compact （标记-整理）")]),e._v("：【优化："),t("em",[e._v("老年代")]),e._v("，老年代存活时间长，复制算法需要较多的复制操作，效率较低】这个算法的主要目的就是解决在非移动式回收器中都会存在的碎片化问题，也分为两个阶段，第一阶段与 Mark-Sweep 类似，第二阶段则会对存活对象按照整理顺序（Compaction Order）进行整理。主要实现有双指针（Two-Finger）回收算法、滑动回收（Lisp2）算法和引线整理（Threaded Compaction）算法等。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images/image-20220607124816646.png",alt:"image-20220607124816646"}})]),e._v(" "),t("p"),e._v(" "),t("h3",{attrs:{id:"_2-4-垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-垃圾收集器"}},[e._v("#")]),e._v(" 2.4 垃圾收集器")]),e._v(" "),t("ul",[t("li",[e._v("垃圾回收器是回收算法的具体实现，不同的回收器关注不用多特性，即作用在不同的场景")]),e._v(" "),t("li",[e._v("垃圾回收器的衡量指标："),t("strong",[e._v("内存占用")]),e._v("、"),t("strong",[e._v("吞吐量")]),e._v("和"),t("strong",[e._v("延迟")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images/image-20220609130657476.png",alt:"image-20220609130657476"}})]),e._v(" "),t("h4",{attrs:{id:"_2-4-1-分代收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-分代收集器"}},[e._v("#")]),e._v(" 2.4.1 分代收集器")]),e._v(" "),t("p",[e._v("（分代收集指在物理层面分成新生代和老年代）")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Serial")]),e._v("：【早期的单线程新生代收集器，采用复制算法】")]),e._v(" "),t("li",[t("strong",[e._v("Serial Old")]),e._v("：【Serial的老年代收集器，采用标记-整理算法】")]),e._v(" "),t("li",[t("strong",[e._v("ParNew：")]),e._v("【新生代，采用“复制“算法】一款多线程的收集器，是Serial的优化版，采用复制算法，主要工作在 Young 区，可以通过 "),t("code",[e._v("-XX:ParallelGCThreads")]),e._v(" 参数来控制收集的线程数，整个过程都是 STW 的，常与 CMS 组合使用。")]),e._v(" "),t("li",[t("strong",[e._v("Parallel Scavenge")]),e._v("：【新生代，多线程 - ”复制“算法，以获取更大的吞吐量为目的】\n"),t("ul",[t("li",[e._v("吞吐量 = 运行用户代码时间 / （运行用户代码时间 + 垃圾回收时间）")])])]),e._v(" "),t("li",[t("strong",[e._v("Parallel Old")]),e._v("：【老年代，多线程 - ”标记-整理“算法，以获取更大的吞吐量为目的】")]),e._v(" "),t("li",[t("strong",[e._v("CMS：")]),e._v("【老年代：采用“"),t("strong",[e._v("标记-清除")]),e._v("”算法，以获取最短回收停顿时间为目标】，分 4 大步进行垃圾收集，其中初始标记和重新标记会 STW ，多数应用于互联网站或者 B/S 系统的服务器端上，JDK9 被标记弃用，JDK14 被删除，详情可见 "),t("a",{attrs:{href:"https://openjdk.java.net/jeps/363",target:"_blank",rel:"noopener noreferrer"}},[e._v("JEP 363"),t("OutboundLink")],1),e._v("。\n"),t("ul",[t("li",[e._v("初始标记：标记GC Root的直接关联对象（STW）")]),e._v(" "),t("li",[e._v("并发标记：开始对象图的并发标记")]),e._v(" "),t("li",[e._v("重新标记：标记由于并发标记过程中用户线程活动产生的对象（STW）")]),e._v(" "),t("li",[e._v("并发清除：并发清除垃圾对象（由于清除过程用户线程仍在活动，所以有“浮动垃圾”产生）")])])])]),e._v(" "),t("h4",{attrs:{id:"_2-4-2-分区收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-分区收集器"}},[e._v("#")]),e._v(" 2.4.2 分区收集器")]),e._v(" "),t("p",[e._v("（新生代和老年代的概念仍然存在，但是已经不在物理上划分）")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("G1")]),e._v("：【新生老年代：新生采用“"),t("strong",[e._v("复制")]),e._v("”算法，老年采用“"),t("strong",[e._v("标记-整理")]),e._v("”算法，以控制回收停顿时间并尽可能的提高吞吐量为目标】一种服务器端的垃圾收集器，应用在多处理器和大容量内存环境中。作为JDK9的默认GC，不强制在物理内存上划分分代，而是面向堆内存进行管理，堆内存被划分未多个region（1-32M），而不同的region可能扮演不同的角色，G1根据其角色采用不同的回收策略。大致步骤是：计算region的回收价值（垃圾多少及回收时间）并维护优先列表，根据用户设置的允许停顿时间，优先处理回收价值高的region。")]),e._v(" "),t("ul",[t("li",[e._v("初始标记：标记GC Root直接关联到的对象（STW）")]),e._v(" "),t("li",[e._v("并发标记：对第一步扫描到的对象进行可达性分析，递归扫描整个堆里的对象图。")]),e._v(" "),t("li",[e._v("最终标记：标记由于并发标记过程中用户线程活动产生的对象（STW）")]),e._v(" "),t("li",[e._v("筛选回收：负责更新Region的统计数据，对各个Region的回 收价值和成本进行排序，根据用户所期望的停顿时间来制定回收计划。回收过程如下：将要回收的region复制到空的region-清空原来的region。（STW）")]),e._v(" "),t("li",[e._v("相比于CMS\n"),t("ul",[t("li",[e._v("G1有着无空间碎片、可均衡停顿时间和吞吐量的优势，但是其垃圾收集产生的内存占用及其他额外负载都比CMS高")]),e._v(" "),t("li",[e._v("CMS在小内存的表现优于G1，G1在大内存应用上能发挥更大的优势（堆容量平衡点：6G-8G）")])])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Shenandoah")]),e._v("：由 Red Hat 的一个团队负责开发，与 G1 类似，基于 Region 设计的垃圾收集器，但不需要 Remember Set 或者 Card Table 来记录跨 Region 引用，停顿时间和堆的大小没有任何关系。停顿时间与 ZGC 接近，下图为与 CMS 和 G1 等收集器的 benchmark。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("ZGC")]),e._v("：【新生老年代，“"),t("strong",[e._v("标记-整理")]),e._v("”算法，采用"),t("strong",[e._v("染色指针技术")]),e._v("，极大的降低停顿时间】JDK11 中推出的一款低延迟垃圾回收器，适用于大内存低延迟服务的内存管理和回收，SPECjbb 2015 基准测试，在 128G 的大堆下，最大停顿时间才 1.68 ms，停顿时间远胜于 G1 和 CMS。")])])]),e._v(" "),t("p"),e._v(" "),t("h2",{attrs:{id:"三、gc-oom实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、gc-oom实战"}},[e._v("#")]),e._v(" 三、GC+OOM实战")]),e._v(" "),t("h3",{attrs:{id:"_3-1-jvm常用工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-jvm常用工具"}},[e._v("#")]),e._v(" 3.1 JVM常用工具")]),e._v(" "),t("h4",{attrs:{id:"标准命令行终端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标准命令行终端"}},[e._v("#")]),e._v(" 标准命令行终端")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/-utJR-UkVz_WioLuyrqQZQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("（i have 2 polices man）")]),e._v(" "),t("p",[e._v("如何获取堆和栈的dump文件？（dump为JVM运行时的快照）")]),e._v(" "),t("ul",[t("li",[e._v("jmap：获取堆内存快照（heap dump）")]),e._v(" "),t("li",[e._v("jstack：获取虚拟机的线程快照（stack dump），定位线程出现长时间停顿的原因，如"),t("em",[e._v("线程间死锁、死循环、请求外部资源")]),e._v("导致的长时间等待")]),e._v(" "),t("li",[e._v("jinfo：显示和调整虚拟机的配置参数")]),e._v(" "),t("li",[e._v("jstat：用于收集虚拟机各方面的运行数据")]),e._v(" "),t("li",[e._v("jps：显示制定系统内所有的虚拟机进程")])]),e._v(" "),t("h4",{attrs:{id:"整合型命令行终端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整合型命令行终端"}},[e._v("#")]),e._v(" 整合型命令行终端")]),e._v(" "),t("ul",[t("li",[e._v("jcmd")]),e._v(" "),t("li",[e._v("arthas")]),e._v(" "),t("li",[e._v("vjtools")])]),e._v(" "),t("h4",{attrs:{id:"可视化界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可视化界面"}},[e._v("#")]),e._v(" 可视化界面")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("JConsole：Java监控与管理控制台，包括"),t("em",[e._v("堆内存使用情况、线程、类、CPU使用情况")]),e._v("等")])]),e._v(" "),t("li",[t("p",[e._v("VisualVM：多合一故障处理工具")]),e._v(" "),t("ul",[t("li",[e._v("显示进程配置、环境信息（jps、jinfo）")]),e._v(" "),t("li",[e._v("监控程序CPU、GC、堆、方法区以及线程的信息（jstat、jstack）")]),e._v(" "),t("li",[e._v("dump以及分析堆快照")]),e._v(" "),t("li",[e._v("方法级的性能分析：找出被调用最多、运行时间最长的方法")])])]),e._v(" "),t("li",[t("p",[e._v("JProfiler（商业版）")])])]),e._v(" "),t("h3",{attrs:{id:"_3-2-gc实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-gc实战"}},[e._v("#")]),e._v(" 3.2 GC实战")]),e._v(" "),t("h4",{attrs:{id:"判断gc问题核心指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断gc问题核心指标"}},[e._v("#")]),e._v(" 判断GC问题核心指标")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("延迟（Latency）")]),e._v("：也可以理解为最大停顿时间，即垃圾收集过程中一次 STW 的最长时间，越短越好，一定程度上可以接受频次的增大，GC 技术的主要发展方向。")]),e._v(" "),t("li",[t("strong",[e._v("吞吐量（Throughput）")]),e._v("：应用系统的生命周期内，由于 GC 线程会占用 Mutator 当前可用的 CPU 时钟周期，吞吐量即为 Mutator 有效花费的时间占系统总运行时间的百分比，例如系统运行了 100 min，GC 耗时 1 min，则系统吞吐量为 99%，吞吐量优先的收集器可以接受较长的停顿。")])]),e._v(" "),t("h4",{attrs:{id:"gc日志分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc日志分析"}},[e._v("#")]),e._v(" GC日志分析")]),e._v(" "),t("ol",[t("li",[e._v("打印GC日志\n"),t("ul",[t("li",[t("code",[e._v("-XX:+PrintGCDetails")]),e._v("：表示的是打印GC日志详情")]),e._v(" "),t("li",[t("code",[e._v("-XX:+PrintGCTimeStamps")]),e._v("：表示打印GC时间戳")]),e._v(" "),t("li",[t("code",[e._v("-Xloggc: ./gc.log")]),e._v("：表示在当前目录下生成gc.log文件")])])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("-XX:+PrintGCDetails -XX:+PrintGCTimeStamps -Xloggc:./gc.log\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/CoderBruis/article/details/101234738",target:"_blank",rel:"noopener noreferrer"}},[e._v("gceasy在线工具"),t("OutboundLink")],1)])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images640.png",alt:"图片"}})]),e._v(" "),t("h4",{attrs:{id:"重点gc-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重点gc-case"}},[e._v("#")]),e._v(" 重点GC Case")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("System.gc()")]),e._v("：手动触发GC操作")]),e._v(" "),t("li",[t("strong",[e._v("CMS")]),e._v("：CMS GC 在执行过程中的一些动作，重点关注 CMS Initial Mark 和 CMS Final Remark 两个 STW 阶段")]),e._v(" "),t("li",[t("strong",[e._v("Promotion Failure")]),e._v("：Old 区没有足够的空间分配给 Young 区晋升的对象（即使总可用内存足够大）")]),e._v(" "),t("li",[t("strong",[e._v("Concurrent Mode Failure")]),e._v("：CMS GC 运行期间，Old 区预留的空间不足以分配给新的对象，此时收集器会发生退化，严重影响 GC 性能，下面的一个案例即为这种场景")]),e._v(" "),t("li",[t("strong",[e._v("GCLocker Initiated GC")]),e._v("：如果线程执行在 JNI 临界区时，刚好需要进行 GC，此时 GC Locker 将会阻止 GC 的发生，同时阻止其他线程进入 JNI 临界区，直到最后一个线程退出临界区时触发一次 GC")])]),e._v(" "),t("h4",{attrs:{id:"gc问题具体分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc问题具体分类"}},[e._v("#")]),e._v(" GC问题具体分类")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Unexpected GC")]),e._v("：意外发生的 GC，实际上不需要发生，我们可以通过一些手段去避免。\n"),t("ul",[t("li",[t("strong",[e._v("Space Shock")]),e._v("：空间震荡问题，参见“场景一：动态扩容引起的空间震荡”。")]),e._v(" "),t("li",[t("strong",[e._v("Explicit GC")]),e._v("：显示执行 GC 问题，参见“场景二：显式 GC 的去与留”。")])])]),e._v(" "),t("li",[t("strong",[e._v("Full GC")]),e._v("：全量收集的 GC，对整个堆进行回收，STW 时间会比较长，一旦发生，影响较大。参见“场景七：内存碎片&收集器退化”。")]),e._v(" "),t("li",[t("strong",[e._v("MetaSpace")]),e._v("：元空间回收引发问题，参见“场景三：MetaSpace 区 OOM”。")]),e._v(" "),t("li",[t("strong",[e._v("Direct Memory")]),e._v("：直接内存（也可以称作为堆外内存）回收引发问题，参见“场景八：堆外内存 OOM”。")]),e._v(" "),t("li",[t("strong",[e._v("JNI")]),e._v("：本地 Native 方法引发问题，参见“场景九：JNI 引发的 GC 问题”。")])]),e._v(" "),t("h4",{attrs:{id:"常见场景分析与解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见场景分析与解决"}},[e._v("#")]),e._v(" 常见场景分析与解决")]),e._v(" "),t("blockquote",[t("p",[e._v("堆区：动态扩容OOM、过早晋升OOM")]),e._v(" "),t("p",[e._v("元方法区：MetaSpace OOM（反射）、堆外内存OOM（system.gc - NIO/Netty）")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images640-20220622235843314.png",alt:"图片"}})]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("场景一：动态扩容引起的空间震荡")])])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("现象")]),e._v("：服务"),t("strong",[e._v("刚刚启动时 GC 次数较多")]),e._v("，最大空间剩余很多但是依然发生 GC，这种情况我们可以通过观察 GC 日志或者通过监控工具来观察堆的空间变化情况即可。GC Cause 一般为 Allocation Failure，且在 GC 日志中会观察到经历一次 GC ，堆内各个空间的大小会被调整。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images640-20220622230646396.png",alt:"图片"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("原因")]),e._v("：在 JVM 的参数中 "),t("code",[e._v("-Xms")]),e._v(" 和 "),t("code",[e._v("-Xmx")]),e._v(" 设置的不一致，在初始化时只会初始 "),t("code",[e._v("-Xms")]),e._v(" 大小的空间存储信息，每当空间不够用时再向操作系统申请，这样的话必然要进行一次 GC。")]),e._v(" "),t("li",[t("strong",[e._v("解决")]),e._v("：尽量"),t("strong",[e._v("将成对出现的空间大小配置参数设置成固定的")]),e._v("，如 "),t("code",[e._v("-Xms")]),e._v(" 和 "),t("code",[e._v("-Xmx")]),e._v("，"),t("code",[e._v("-XX:MaxNewSize")]),e._v(" 和 "),t("code",[e._v("-XX:NewSize")]),e._v("，"),t("code",[e._v("-XX:MetaSpaceSize")]),e._v(" 和 "),t("code",[e._v("-XX:MaxMetaSpaceSize")]),e._v(" 等。")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[e._v("场景三：MetaSpace 区 OOM")])])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("现象")]),e._v("：JVM 在启动后或者某个时间点开始，"),t("strong",[e._v("MetaSpace 的已使用大小在持续增长，同时每次 GC 也无法释放，调大 MetaSpace 空间也无法彻底解决")])]),e._v(" "),t("li",[t("strong",[e._v("原因")]),e._v("：\n"),t("ul",[t("li",[t("strong",[e._v("MetaSpace 内存管理")]),e._v("：类和其元数据的生命周期与其对应的类加载器相同，只要类的类加载器是存活的，在 Metaspace 中的类元数据也是存活的，不能被回收")]),e._v(" "),t("li",[t("strong",[e._v("MetaSpace 弹性伸缩")]),e._v("：由于 MetaSpace 空间和 Heap 并不在一起，所以这块的空间可以不用设置或者单独设置，一般情况下避免 MetaSpace 耗尽 VM 内存都会设置一个 MaxMetaSpaceSize，在运行过程中，如果实际大小小于这个值，JVM会动态调整其大小。为了避免弹性伸缩带来的额外 GC 消耗，我们会将 "),t("code",[e._v("-XX:MetaSpaceSize")]),e._v(" 和 "),t("code",[e._v("-XX:MaxMetaSpaceSize")]),e._v("两个值设置为固定的，但是这样也会导致在空间不够的时候无法扩容，然后频繁地触发 GC，最终 OOM。所以关键原因就是 ClassLoader 不停地在内存中 load 了新的 Class ，一般这种问题都发生在"),t("strong",[e._v("动态类加载")]),e._v("等情况上")])])]),e._v(" "),t("li",[t("strong",[e._v("策略")]),e._v("：了解MetaSpace的内存管理后，如何定位和解决就很简单了，可以 dump 快照之后通过 JProfiler 或 MAT 观察 Classes 的 Histogram（直方图） 即可，或者直接通过命令即可定位，看一下具体是哪个包下的 "),t("strong",[e._v("Class 增加")]),e._v("较多就可以定位了")]),e._v(" "),t("li",[t("strong",[e._v("小结")]),e._v("：原理理解比较复杂，但定位和解决问题会比较简单，经常会出问题的几个点有 "),t("em",[e._v("Orika 的 classMap、JSON 的 ASMSerializer、Groovy 动态加载类")]),e._v("等，基本都集中在"),t("em",[e._v("反射、Javasisit 字节码增强、CGLIB 动态代理、OSGi 自定义类加载器等")]),e._v("的技术点上。另外就是及时给 MetaSpace 区的使用率加一个监控，如果指标有波动提前发现并解决问题。")])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[e._v("场景四：过早晋升")]),e._v("*")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("现象")]),e._v("：这种场景主要发生在分代的收集器上，90% 的对象朝生夕死，只有在 Young 区经历过几次 GC 的洗礼后才会晋升到 Old 区，每经历一次 GC 对象的 GC Age 就会增长 1，最大通过 "),t("code",[e._v("-XX:MaxTenuringThreshold")]),e._v(" 来控制。通常可以观察以下几种现象来判断是否发生了过早晋升。")]),e._v(" "),t("ul",[t("li",[e._v("分配速率接近于晋升速率，对象晋升年龄过小。")]),e._v(" "),t("li",[e._v("Full GC比较频繁，并且GC后Old区的变化比例很大。")])]),e._v(" "),t("p",[e._v("过早晋升的危害：")]),e._v(" "),t("ul",[t("li",[e._v("YGC频繁，总吞吐量下降")]),e._v(" "),t("li",[e._v("FGC频繁，有较大停顿时间")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images640-20220622231511224.png",alt:"图片"}})])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("原因")]),e._v("：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Young/Eden区过小")]),e._v("：Young区很快被填满并且频繁GC，导致对象年龄快速上升（默认年龄为15），并且被过早晋升到Old区（原本在Young区就可以被回收），而YGC采用的是复制算法，频繁的YGC又会导致大量对象的Copy，进而降低YGC效率，形成恶性循环。")]),e._v(" "),t("li",[t("strong",[e._v("分配速率过大")]),e._v("：（内存增加速度 > 垃圾回收速度）可以观察出问题前后 Mutator 的分配速率，如果有明显波动可以尝试观察网卡流量、存储类中间件慢查询日志等信息，看是否有大量数据被加载到内存中。")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("策略")]),e._v("：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("增大Young区")]),e._v("，通常Old区设定为存活对象大小的2-3倍，剩下的空间可以预留给Young区。")]),e._v(" "),t("li",[e._v("如果是分配速率问题：\n"),t("ul",[t("li",[t("strong",[e._v("偶发较大")]),e._v("：通过内存分析工具找到问题代码，从业务逻辑上做一些优化。")]),e._v(" "),t("li",[t("strong",[e._v("一直较大")]),e._v("：当前的 Collector 已经不满足 Mutator 的期望了，这种情况要么扩容 Mutator 的 VM，要么调整 GC 收集器类型或加大空间。")])])])])])]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[e._v("场景六：单次 CMS Old GC 耗时长 *")])])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("现象")]),e._v("：CMS GC 单次 STW 最大超过 1000ms，不会频繁发生，如下图所示最长达到了 8000ms。某些场景下会引起“雪崩效应”，这种场景非常危险，我们应该尽量避免出现。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images640-20220622003941247.png",alt:"图片"}})]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("原因")]),e._v("：\n"),t("ul",[t("li",[e._v("CMS 在回收的过程中，STW 的阶段主要是 "),t("em",[e._v("Init Mark")]),e._v(" 和 "),t("em",[e._v("Final Remark")]),e._v(" 这两个阶段，也是导致 CMS Old GC 最多的原因。\n"),t("ul",[t("li",[t("em",[e._v("Init Mark")]),e._v(" ：从 GC Root 出发标记 Old 中的对象，处理完成后借助 BitMap 处理下 Young 区对 Old 区的引用，整个过程基本都比较快，很少会有较大的停顿。")]),e._v(" "),t("li",[t("em",[e._v("Final Remark")]),e._v("：Final Remark 的开始阶段与 Init Mark 处理的流程相同，但是后续多了 Card Table 遍历、Reference 实例的清理并将其加入到 Reference 维护的 "),t("code",[e._v("pend_list")]),e._v(" 中，如果要收集元数据信息，还要清理 SystemDictionary、CodeCache、SymbolTable、StringTable 等组件中不再使用的资源。其中最容易出问题的是 ：\n"),t("ul",[t("li",[e._v("Reference 中的 FinalReference：主要观察 "),t("code",[e._v("java.lang.ref.Finalizer")]),e._v(" 对象的 dominator tree，找到泄漏的来源。经常会出现问题的几个点有 Socket 的 "),t("code",[e._v("SocksSocketImpl")]),e._v(" 、Jersey 的 "),t("code",[e._v("ClientRuntime")]),e._v("、MySQL 的 "),t("code",[e._v("ConnectionImpl")]),e._v(" 等等")]),e._v(" "),t("li",[e._v("scrub symbol table 表示清理元数据符号引用耗时：符号引用是 Java 代码被编译成字节码时，方法在 JVM 中的表现形式，生命周期一般与 Class 一致，当 "),t("code",[e._v("_should_unload_classes")]),e._v(" 被设置为 true 时在 "),t("code",[e._v("CMSCollector::refProcessingWork()")]),e._v(" 中与 Class Unload、String Table 一起被处理。")])])])])])])]),e._v(" "),t("li",[t("strong",[e._v("策略")]),e._v("：由上述分析可知，问题主要来自Final Remark阶段，其中最容易出问题的是 【Reference 中的 FinalReference 和元数据信息处理中的 scrub symbol table 两个阶段】，通常不会大面积同时爆发，很多时候是单台的STW比较长，如果业务影响比较大，及时摘掉流量，具体后续优化策略如下：\n"),t("ul",[t("li",[e._v("FinalReference：找到内存来源后通过优化代码的方式来解决，如果短时间无法定位可以增加 "),t("code",[e._v("-XX:+ParallelRefProcEnabled")]),e._v(" 对 Reference 进行并行处理。【在 Reference 类的问题处理方面，不管是 FinalReference，还是 SoftReference、WeakReference 核心的手段就是"),t("strong",[e._v("找准时机 dump 快照")]),e._v("，然后用内存分析工具来分析。】")]),e._v(" "),t("li",[e._v("symbol table：观察 MetaSpace 区的历史使用峰值，以及每次 GC 前后的回收情况，一般没有使用动态类加载或者 DSL 处理等，MetaSpace 的使用率上不会有什么变化，这种情况可以通过 "),t("code",[e._v("-XX:-CMSClassUnloadingEnabled")]),e._v(" 来避免 MetaSpace 的处理，JDK8 会默认开启 CMSClassUnloadingEnabled，这会使得 CMS 在 CMS-Remark 阶段尝试进行类的卸载。")])])])]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[t("strong",[e._v("场景七：内存碎片&收集器退化")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("场景八：堆外内存 OOM")])])])]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("现象")]),e._v("：内存使用率不断上升，甚至开始使用 SWAP 内存，同时可能出现 GC 时间飙升，线程被 Block 等现象，通过 top 命令发现 Java 进程的 RES 甚至超过了 -Xmx 的大小。出现这些现象时，基本可以确定是出现了堆外内存泄漏。")]),e._v(" "),t("li",[t("strong",[e._v("原因")]),e._v("：\n"),t("ul",[t("li",[e._v("原因一：通过 "),t("code",[e._v("UnSafe#allocateMemory")]),e._v("或者"),t("code",[e._v("ByteBuffer#allocateDirect")]),e._v(" 主动申请了堆外内存而没有释放，常见于 NIO、Netty 等相关组件。")]),e._v(" "),t("li",[e._v("原因二：代码中有通过 JNI 调用 Native Code 申请的内存没有释放。")])])]),e._v(" "),t("li",[t("strong",[e._v("策略")]),e._v("：")]),e._v(" "),t("li",[e._v("策略一：JVM 使用 "),t("code",[e._v("-XX:MaxDirectMemorySize=size")]),e._v(" 参数来控制可申请的堆外内存的最大值。在 Java 8 中，如果未配置该参数，默认和 "),t("code",[e._v("-Xmx")]),e._v(" 相等。可以通过 Debug 的方式确定使用堆外内存的地方是否正确执行了释放内存的代码。另外，需要检查 JVM 的参数是否有 "),t("code",[e._v("-XX:+DisableExplicitGC")]),e._v(" 选项，如果有就去掉，因为该参数会使 System.gc 失效。（场景二：显式 GC 的去与留）")]),e._v(" "),t("li",[e._v("策略二：Google perftools（统计调用 malloc 时进行内存分配的情况） + Btrace（对线上的Java调用栈进行追踪喝监控）工具进行分析，")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images640-20220622224641446.png",alt:"图片"}})]),e._v(" "),t("h4",{attrs:{id:"基本的gc日志参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本的gc日志参数"}},[e._v("#")]),e._v(" 基本的GC日志参数")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("-XX:+HeapDumpOnOutOfMemoryError")]),e._v("：OOM时打印堆快照")]),e._v(" "),t("li",[t("code",[e._v("-XX:HeapDumpPath=/tmp/heapdump.hprof")]),e._v("：打印的堆快照路径")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/PI-KA-CHU/Image-OSS/main/images640-20220622225239025.png",alt:"图片"}})]),e._v(" "),t("p"),e._v(" "),t("p"),e._v(" "),t("h4",{attrs:{id:"oom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oom"}},[e._v("#")]),e._v(" OOM")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("OOM实战案例：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NjQ5MTI5OA==&mid=2651749037&idx=2&sn=d1d6b0348eea5cd80e2c7a56c8a61fa9&chksm=bd12a3e08a652af684fd8d96e81fc0e0fded69dd847051e6b0f791f3726da0415c9552ee2615&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Netty堆外内存泄露排查与总结"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MjM5NjQ5MTI5OA==&mid=2651750037&idx=2&sn=847fb15d4413354355c33a46a7bccf55&chksm=bd12a7d88a652ecea5789073973abb9545e76a8972c843968a6efd1fb3a918ef07eed8abb37e&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Boot内存泄露排查记"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6873299829784018952",target:"_blank",rel:"noopener noreferrer"}},[e._v("OOM场景"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://juejin.cn/post/7074762489736478757#heading-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("OOM优化及监控"),t("OutboundLink")],1)])])]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/RFwXYdzeRkTG5uaebVoLQw",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZGC"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/RFwXYdzeRkTG5uaebVoLQw",target:"_blank",rel:"noopener noreferrer"}},[e._v("GC"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);