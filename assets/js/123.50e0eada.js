(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{449:function(e,a,t){"use strict";t.r(a);var n=t(12),r=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"一、环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、环境"}},[e._v("#")]),e._v(" 一、环境")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("服务器")]),e._v("：CentOS 7")]),e._v(" "),a("li",[a("strong",[e._v("Hadoop版本")]),e._v("：2.7.7")]),e._v(" "),a("li",[a("strong",[e._v("cli端")]),e._v("：Windows 10")]),e._v(" "),a("li",[a("strong",[e._v("开发工具")]),e._v("：intellij IDEA")])]),e._v(" "),a("h2",{attrs:{id:"二、连接前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、连接前提"}},[e._v("#")]),e._v(" 二、连接前提")]),e._v(" "),a("ul",[a("li",[e._v("已成功创建Hadoop集群，即能正常访问hdfs和mapreduce的web界面（本人是在虚拟机建的集群）")]),e._v(" "),a("li",[e._v("创建Maven项目并新建java  class WordCount（此处以单词统计为例子）")])]),e._v(" "),a("h2",{attrs:{id:"三、window环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、window环境准备"}},[e._v("#")]),e._v(" 三、Window环境准备")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("下载hadoop压缩包并解压到Window下（版本为集群所用的hadoop版本）")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://hadoop.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("下载winutils-master（Windows环境需要），解压后将其中对应版本的"),a("code",[e._v("bin")]),e._v("目录下的文件复制到"),a("code",[e._v("第一步解压的hadoop文件的bin目录下")]),e._v("（覆盖原有的）")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.pc0359.cn/downinfo/92994.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("将"),a("code",[e._v("winutils-master")]),e._v("中的"),a("code",[e._v("hadoop.dll")]),e._v("文件复制到Windows的"),a("code",[e._v("C:\\Windows\\System32")]),e._v("目录下")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/zimojiang/article/details/80473201",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("配置Window环境变量")]),e._v(" "),a("ul",[a("li",[e._v("在系统环境变量中加入："),a("code",[e._v("HADOOP_HOME=D:\\yangjm\\Code\\study\\hadoop\\hadoop-2.6.0")])]),e._v(" "),a("li",[e._v("在Path中加入："),a("code",[e._v("%HADOOP_HOME%\\bin")])])])])]),e._v(" "),a("h2",{attrs:{id:"四、idea相关准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、idea相关准备"}},[e._v("#")]),e._v(" 四、IDEA相关准备")]),e._v(" "),a("ul",[a("li",[e._v("pom.xml中加入相关依赖")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   <dependencies>\n        <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-hdfs</artifactId>\n            <version>2.7.7</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.hadoop</groupId>\n            <artifactId>hadoop-client</artifactId>\n            <version>2.7.7</version>\n        </dependency>\n    </dependencies>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("ul",[a("li",[a("p",[e._v("将搭建好的hadoop集群的配置文件"),a("code",[e._v("log4j.properties")]),e._v("和"),a("code",[e._v("core-site.xml")]),e._v("复制后粘贴到IDEA创建的Java项目的resource文件夹下")])]),e._v(" "),a("li",[a("p",[e._v("为项目导入本地hadoop的相关jar包（下面图片来自腾讯云社区）")]),e._v(" "),a("ul",[a("li",[e._v("打开Moudle设置")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images54491462-c626d100-48f9-11e9-9143-b160e69421b2.png",alt:"51eg4f4syf"}})]),e._v(" "),a("ul",[a("li",[a("p",[e._v("导入hadoop相关jar包（在hadoop的"),a("code",[e._v("\\share\\hadoop\\common")]),e._v("目录下）\n"),a("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images54491471-cc1cb200-48f9-11e9-827a-0146d01dede8.jpg",alt:"vbu5uan13q"}}),e._v(" "),a("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images54491475-cfb03900-48f9-11e9-90b4-e5ac094fd299.png",alt:"uz93dmlsxx"}})])]),e._v(" "),a("li",[a("p",[e._v("给导入的lib取个名字，如"),a("code",[e._v("hadoop")]),e._v("等\n"),a("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images54491477-d048cf80-48f9-11e9-8994-3a9d11974da6.png",alt:"ezmgol3yz4"}})])])])]),e._v(" "),a("li",[a("p",[e._v("设置运行参数：")]),e._v(" "),a("ul",[a("li",[e._v("以空格隔开，第一个为hdfs中需要处理的文件，第二个为处理结果保存在hdfs的路径（hdfs地址在"),a("code",[e._v("core-site.xml")]),e._v("中）\n"),a("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images54491663-1c484400-48fb-11e9-9010-22eb96d7ad91.jpeg",alt:"捕获"}})])])]),e._v(" "),a("li",[a("p",[e._v("以上配置完后基本可以正常运行")])])]),e._v(" "),a("h2",{attrs:{id:"四、疑难杂症"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、疑难杂症"}},[e._v("#")]),e._v(" 四、疑难杂症")]),e._v(" "),a("ul",[a("li",[e._v("运行时出现权限问题\n"),a("ul",[a("li",[e._v("解决：在JAVA代码中修改为有高级权限的用户")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/diqijiederizi/article/details/82753573",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考"),a("OutboundLink")],1)])])])]),e._v(" "),a("h2",{attrs:{id:"五、参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、参考"}},[e._v("#")]),e._v(" 五、参考")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/mm_bit/article/details/52118904",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考一"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1024534",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考二"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);