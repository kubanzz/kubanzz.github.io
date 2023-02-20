(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{461:function(_,e,v){"use strict";v.r(e);var r=v(12),t=Object(r.a)({},(function(){var _=this,e=_._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h2",{attrs:{id:"一、什么是docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是docker"}},[_._v("#")]),_._v(" 一、什么是Docker")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("Docker是使用google公司推出的"),e("code",[_._v("GO语言")]),_._v("进行开发实现，于 Linux 内核的 cgroup，namespace，以及 AUFS 类的 Union FS 等技术，对"),e("code",[_._v("进程")]),_._v("进行"),e("code",[_._v("封装隔离")]),_._v("，属于"),e("code",[_._v("操作系统层面")]),_._v("的虚拟化技术，由于隔离的进程独立于宿主和其他隔离的进程，因此称为容器。")])]),_._v(" "),e("li",[e("p",[_._v("Docker在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护，使得Docker比虚拟技术更为轻便、快捷。")])])]),_._v(" "),e("h2",{attrs:{id:"二、docker与vmware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、docker与vmware"}},[_._v("#")]),_._v(" 二、Docker与VMware")]),_._v(" "),e("h4",{attrs:{id:"_2-1、docker与vmware的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、docker与vmware的区别"}},[_._v("#")]),_._v(" 2.1、Docker与VMware的区别")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images62269496-ccab8480-b465-11e9-92ec-1ee181ae86d0.png",alt:"image"}})]),_._v(" "),e("ul",[e("li",[_._v("Docker利用的是宿主机的内核进行容器的资源分配（直接调用硬件资源），隔离的是进程，VMware是在宿主机上虚拟底层硬件环境，通过创建操作系统实现隔离。")]),_._v(" "),e("li",[_._v("Docker由于没有臃肿的操作系统，启动速度比VMware"),e("code",[_._v("快")]),_._v("很多")]),_._v(" "),e("li",[_._v("Docker的隔离性比VMware差")]),_._v(" "),e("li",[_._v("Docker的资源利用比VMware大很多，VMware由于是直接虚拟操作系统，而创建时需要分配资源，相同的硬件环境Docker创建的容器及资源的利用率要比VMware多。")])]),_._v(" "),e("table",[e("thead",[e("tr",[e("th",[_._v("特性")]),_._v(" "),e("th",[_._v("容器")]),_._v(" "),e("th",[_._v("虚拟机")])])]),_._v(" "),e("tbody",[e("tr",[e("td",[_._v("启动")]),_._v(" "),e("td",[_._v("秒级")]),_._v(" "),e("td",[_._v("分钟级")])]),_._v(" "),e("tr",[e("td",[_._v("硬盘使用")]),_._v(" "),e("td",[_._v("一般为 MB")]),_._v(" "),e("td",[_._v("一般为 GB")])]),_._v(" "),e("tr",[e("td",[_._v("性能")]),_._v(" "),e("td",[_._v("接近原生")]),_._v(" "),e("td",[_._v("弱于")])]),_._v(" "),e("tr",[e("td",[_._v("系统支持量")]),_._v(" "),e("td",[_._v("单机支持上千个容器")]),_._v(" "),e("td",[_._v("一般几十个")])])])]),_._v(" "),e("h4",{attrs:{id:"_2-2、docker的优点-为什么使用docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、docker的优点-为什么使用docker"}},[_._v("#")]),_._v(" 2.2、Docker的优点（为什么使用Docker）")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("更高效的利用系统资源")]),_._v(" "),e("ul",[e("li",[_._v("不需要虚拟硬件及运行完整的操作系统等开销")])])]),_._v(" "),e("li",[e("strong",[_._v("更快速的启动时间")]),_._v(" "),e("ul",[e("li",[_._v("直接依赖于宿主内核，无需启动操作系统，运行速度达到毫秒或秒级")])])]),_._v(" "),e("li",[e("strong",[_._v("一致的运行环境")]),_._v(" "),e("ul",[e("li",[_._v("可提高一致的开发、测试、生产环境")])])]),_._v(" "),e("li",[e("strong",[_._v("持续集成、交付和部署")]),_._v(" "),e("ul",[e("li",[_._v("开发人员可以通过"),e("code",[_._v("Dockerfile")]),_._v("来进行镜像构建，并结合 持续集成(Continuous Integration) 系统进行集成测试，而运维人员则可以直接在生产环境中快速部署该镜像，甚至结合"),e("code",[_._v("持续部署")]),_._v("(Continuous Delivery/Deployment) 系统进行"),e("code",[_._v("自动部署")]),_._v("。")])])]),_._v(" "),e("li",[e("strong",[_._v("更轻松的迁移")]),_._v(" "),e("ul",[e("li",[_._v("Docker确保了运行环境的一致性，在不同平台上都能得到相同的运行结果，故其迁移十分便捷。")])])]),_._v(" "),e("li",[e("strong",[_._v("更轻松的维护和扩展")])])]),_._v(" "),e("h2",{attrs:{id:"三、docker的三大基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、docker的三大基本概念"}},[_._v("#")]),_._v(" 三、Docker的三大基本概念")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("镜像（Image）")]),_._v("：一个特殊的文件系统（类）")]),_._v(" "),e("ul",[e("li",[_._v("操作系统分为"),e("code",[_._v("内核")]),_._v("和"),e("code",[_._v("用户空间")]),_._v("，操作系统启动后，会挂载"),e("code",[_._v("root文件系统")]),_._v("为其提供用户空间支持，而Docker（Image）,就相当于一个root文件系统。")]),_._v(" "),e("li",[_._v("Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的"),e("code",[_._v("程序、库、资源、配置")]),_._v("等文件外，还包含了一些为运行时准备的一些"),e("code",[_._v("配置参数")]),_._v("（如匿名卷、环境变量、用户等）。 镜像"),e("code",[_._v("不包含任何动态数据")]),_._v("，其内容在构建之后也不会被改变。")]),_._v(" "),e("li",[_._v("镜像采用"),e("code",[_._v("分层存储的架构")]),_._v("（便于复用、定制，类似于继承），实际有"),e("code",[_._v("多层文件系统")]),_._v("联合组成。镜像在构建时，会一层一层的构建，前一层是后一层的基础，"),e("code",[_._v("每一层构建后就不再改变")]),_._v("，后一层的改变只发生在这一层（即删除上一层只是在本层进行标识）")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("容器（Container）")]),_._v("：镜像运行时的实体（实例）")]),_._v(" "),e("ul",[e("li",[_._v("容器与镜像的关系如同OOP中的类与实例一样，"),e("code",[_._v("镜像是静态的定义，容器是运行时的实体")]),_._v("，可以被创建、启动、停止、运行和暂停等。")]),_._v(" "),e("li",[e("code",[_._v("容器的实质是进程")]),_._v("，但与直接在宿主执行的进程不同，其拥有独立的命名空间，而且使用的也是分层存储。")]),_._v(" "),e("li",[_._v("容器的"),e("code",[_._v("存储层")]),_._v("的生命周期和容器一样，容器消亡时其存储层也随之消亡，即存储层的数据都会随着容器的删除而丢失，因此对于文件的写入操作，都应该用"),e("code",[_._v("数据卷（Volume）")]),_._v("、或者"),e("code",[_._v("绑定宿主目录")]),_._v("，这些操作会跳转存储层直接对宿主进行读写，其性能和稳定性更高，容器删除后也不会消失，容器的存储层应保持无状态。")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("仓库（Repository）")]),_._v("：集中存放镜像文件的地方（代码管理）")]),_._v(" "),e("ul",[e("li",[_._v("镜像构建完后，可以很容易的在本地宿主运行，但是如果要在其他服务器上使用镜像，我们就需要一个"),e("code",[_._v("集中处理、分发镜像")]),_._v("的服务，"),e("code",[_._v("Docker Registry")]),_._v("就是这样的服务。")]),_._v(" "),e("li",[_._v("一个 Docker Registry中可以包含多个仓库（Repository）；每个仓库可以包含多个标签（Tag）；"),e("code",[_._v("每个标签对应一个镜像")]),_._v("，镜像仓库是用来集中存放镜像仓库的地方，类似与代码仓库。")]),_._v(" "),e("li",[_._v("通常一个仓库会包含同一软件不同版本的镜像，"),e("code",[_._v("标签通常就对应软件的各个版本")]),_._v("，可以通过"),e("code",[_._v("<仓库名>:<标签>")]),_._v("来指定哪个版本的镜像，没有指定标签的话就默认"),e("code",[_._v("latest")]),_._v("。")]),_._v(" "),e("li",[_._v("常见的镜像仓库服务：\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("docker-hub"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://hub.tenxcloud.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("时速云"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://www.163yun.com/product/repo",target:"_blank",rel:"noopener noreferrer"}},[_._v("网易云"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://www.aliyun.com/product/containerservice?utm_content=se_1292836",target:"_blank",rel:"noopener noreferrer"}},[_._v("阿里云"),e("OutboundLink")],1)])])])])])]),_._v(" "),e("h2",{attrs:{id:"四、build、ship、run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、build、ship、run"}},[_._v("#")]),_._v(" 四、Build、Ship、Run")]),_._v(" "),e("p",[e("strong",[_._v("Docker的运行过程")]),_._v("：")]),_._v(" "),e("ul",[e("li",[_._v("Docker将镜像仓库的镜像拉取到本地，从而运行为一个个容器，故Docker常被称为码头工人,主要包括以下三步：\n"),e("ul",[e("li",[e("strong",[_._v("Build（构建镜像）")]),_._v("：镜像就像集装箱，包括运行环境、文件、资源等")]),_._v(" "),e("li",[e("strong",[_._v("Ship（运输镜像）")]),_._v("：主机和仓库间运行，仓库就如同超级码头")]),_._v(" "),e("li",[e("strong",[_._v("Run（运行镜像）")]),_._v("：运行的镜像就是容器，容器是程序运行的地方")])])])]),_._v(" "),e("h2",{attrs:{id:"五、参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、参考"}},[_._v("#")]),_._v(" 五、参考")]),_._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://snailclimb.top/JavaGuide/#/tools/Docker",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考一"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/Snailclimb/JavaGuide/blob/master/docs/tools/Docker.md",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考二"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://www.zhihu.com/question/48174633",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考三"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=t.exports}}]);