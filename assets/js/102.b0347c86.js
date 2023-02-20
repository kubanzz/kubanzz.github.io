(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{427:function(e,t,s){"use strict";s.r(t);var r=s(12),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一、写在前面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、写在前面"}},[e._v("#")]),e._v(" 一、写在前面")]),e._v(" "),t("p",[e._v("Flume在Windows上的使用还真是各种不方便，但是没办法，项目就是搭建在Windows服务器上的，前面的文章是使用自定义拦截器解决了日期划分的问题，接下来解决的是实时监控日志更新的问题")]),e._v(" "),t("p"),e._v(" "),t("h2",{attrs:{id:"二、flume的三种source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、flume的三种source"}},[e._v("#")]),e._v(" 二、Flume的三种Source")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Exec Source")]),e._v("：\n可通过"),t("code",[e._v("tail -f")]),e._v("命令去tail住一个文件，然后实时同步日志到sink。但存在的问题是，当agent进程挂掉重启后，"),t("strong",[e._v("会有重复消费的问题")]),e._v("。可以通过增加UUID来解决，或通过改进ExecSource来解决。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Spooling Directory Source")]),e._v("：\n监视一个目录，同步目录中的新文件到sink，同步完的文件会打上"),t("strong",[e._v("后缀标识符号")]),e._v("（默认为.COMPLETE）,适用于同步新文件，但是"),t("strong",[e._v("不适用于对实时追加日志文件的监督")]),e._v("。上一篇文章就是用Spooldir source，但是日志是实时追加的，监控时会因为无法关闭而报异常。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Taildir Source")]),e._v("：")]),e._v(" "),t("ul",[t("li",[e._v("1.7版flume新加入的source，解决了"),t("strong",[e._v("多个文件夹监督")]),e._v("的问题，同时可以通过目录直接用正则表达式直接监督符合的文件，而且"),t("strong",[e._v("不会存在重复消费的问题")]),e._v("，数据已经读取的位置信息被保存，在另一个文件中，所以即使完成也不会为文件加后缀，可"),t("strong",[e._v("实时监控多个文件")]),e._v("。本编文章使用的就是Taildir source（真的好用）。")]),e._v(" "),t("li",[e._v("为了"),t("strong",[e._v("唯一标示")]),e._v("一个文件，该source利用"),t("strong",[e._v("操作系统inode")]),e._v("的方式获得"),t("strong",[e._v("文件的一个id")]),e._v("，目前仅采用unix的方式获取，不支持window，需要更改源码添加window获取inode的方法")])])])]),e._v(" "),t("h3",{attrs:{id:"taildir-source在windows环境下的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#taildir-source在windows环境下的使用"}},[e._v("#")]),e._v(" Taildir source在Windows环境下的使用")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("flume虽然强大，但是有点坑爹的是不太兼容Windows平台，比如Taildir Source源码中在inode的处理上是在Linux环境下实现的，如果要在Windows上使用需要重新修改并编译源码，下面讲一下自己的一个编译过程（"),t("strong",[e._v("具体流程按照下面参考文章即可成功")]),e._v("）。")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("参考")]),e._v("： https://www.jianshu.com/p/5a53c002b1dd")])])]),e._v(" "),t("p"),e._v(" "),t("h2",{attrs:{id:"三、问题解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、问题解决"}},[e._v("#")]),e._v(" 三、问题解决")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("下载flume源码后，使用编译器打开项目（本人使用的是IDEA，以maven项目的形式导入）")])]),e._v(" "),t("li",[t("p",[e._v("导入项目后可以只下载"),t("code",[e._v("flume-ng-source")]),e._v("的maven依赖包即可，就是说不用整个项目都编译成功，可以通过cmd进入该项目下的"),t("code",[e._v("flume-ng-source")]),e._v("根目录，将修改完的项目（按照上面参考）进行编译即可。")])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images58153592-03189680-7ca2-11e9-9e80-a56d7afc3183.png",alt:"image"}})]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li"),e._v(" "),t("li",[t("p",[e._v("maven编译时可能会出现下面格式异常，使用编译命令"),t("code",[e._v("mvn clean install -Dcheckstyle.skip=true")]),e._v("即可解决。\n"),t("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images58153647-26434600-7ca2-11e9-8640-a4f152bdbec8.png",alt:"image"}})])]),e._v(" "),t("li",[t("p",[e._v("flume传输文件到HDFS后，HDFS中保存的文件有"),t("code",[e._v(".tmp")]),e._v("的后缀，原因是文件仍被打开着，即仍被flume监视及占用着，此时存储在的字节大小是无法正常读取到的，解决方法（"),t("strong",[e._v("flume配置")]),e._v("）：")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//18000秒内如果文件没有被追加上传，则flume关闭文件，此时HDFS文件可以显示正常文件大小\na1.sinks.k2.hdfs.idleTimeout = 18000\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("参考： "),t("a",{attrs:{href:"https://bit1129.iteye.com/blog/2186026",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);