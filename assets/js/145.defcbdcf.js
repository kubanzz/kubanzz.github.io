(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{472:function(_,v,t){"use strict";t.r(v);var r=t(12),n=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("blockquote",[v("p",[_._v("索引对查询有着重要的作用，对索引的认识是进行数据库性能提升的起点，数据库的优化一般是从两个方面，"),v("strong",[_._v("第一个是对SQL语句进行优化")]),_._v("，"),v("strong",[_._v("第二是优化数据库表的设计包括索引的建立")]),_._v("，这里主要记录第二种的相关学习，当数据库数据量很大的时候，索引能够极大的提高查询速度，本人现在面临的是千万条数据的数据表，遍历所有数据需要花上几分钟的时间，一般的查询都需要几十秒，这个肯定是不能接受的，建立索引后的查询速度为一秒左右，极大的提高了性能。")])]),_._v(" "),v("h2",{attrs:{id:"建表原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#建表原则"}},[_._v("#")]),_._v(" 建表原则")]),_._v(" "),v("p",[v("strong",[_._v("表设计")]),_._v("：3NF")]),_._v(" "),v("p",[v("strong",[_._v("字段")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("越小的数据类型通常更好")]),_._v("：越小的数据类型通常在磁盘、内存和CPU缓存中都需要更少的空间，处理起来更快。")]),_._v(" "),v("li",[v("strong",[_._v("简单的数据类型更好")]),_._v("：整型数据比起字符，处理开销更小，因为字符串的比较更复杂。在MySQL中，应该用内置的日期和时间数据类型，而不是用字符串来存储时间；以及用整型数据类型存储IP地址。")]),_._v(" "),v("li",[v("strong",[_._v("尽量避免NULL")]),_._v("：应该指定列为NOT NULL，除非你想存储NULL。在MySQL中，含有空值的列很难进行查询优化，因为它们使得索引、索引的统计信息以及比较运算更加复杂。你应该用0、一个特殊的值或者一个空串代替空值。")]),_._v(" "),v("li",[v("strong",[_._v("单表字段不宜过多")]),_._v("：通常是二三十个")])]),_._v(" "),v("p",[v("strong",[_._v("存储引擎")]),_._v("：InnoDB（高并发写）与MyIsam的选择：事务、行锁、外键、索引")]),_._v(" "),v("p"),_._v(" "),v("h2",{attrs:{id:"索引建立"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引建立"}},[_._v("#")]),_._v(" 索引建立")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("类型")]),_._v("：普通、唯一、主键、全文")]),_._v(" "),v("li",[v("strong",[_._v("位置")]),_._v("：\n"),v("ul",[v("li",[_._v("where")]),_._v(" "),v("li",[_._v("join on")]),_._v(" "),v("li",[_._v("order by")])])]),_._v(" "),v("li",[v("strong",[_._v("原则")]),_._v("：\n"),v("ul",[v("li",[_._v("对读多写少的场景建立索引（索引可以提高读性能，但是会降低写性能），如果不常用到，则应该删除")]),_._v(" "),v("li",[_._v("不对重复值多的字段建立索引")]),_._v(" "),v("li",[_._v("如果条件经常出现在一起，则考虑将多个字段建立"),v("strong",[_._v("复合索引")]),_._v("。复合索引只对第一个字段有效,将频率高的字段放前面(复合索引只查一次索引表)")]),_._v(" "),v("li",[_._v("如果添加个别字段的索引，就可以应用到"),v("strong",[_._v("覆盖索引")]),_._v("，则考虑为该字段建立索引。")])])]),_._v(" "),v("li",[v("strong",[_._v("语句优化（避免索引失效）")]),_._v("：查询所有年龄>18的曾姓人名\n"),v("ul",[v("li",[_._v("字段要独立出现(id + 1 = xxx则不走索引)")]),_._v(" "),v("li",[_._v("like查询不以%开头(这种一般采用第三方的全文索引支持)")]),_._v(" "),v("li",[_._v("or，两边条件都要有索引可用（否则会全表扫描）")]),_._v(" "),v("li",[_._v("尽量走覆盖索引")])])])]),_._v(" "),v("p"),_._v(" "),v("h2",{attrs:{id:"集群"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[_._v("#")]),_._v(" 集群")]),_._v(" "),v("ul",[v("li",[_._v("分表：横向切割、垂直切割")]),_._v(" "),v("li",[_._v("分库：业务表切割")]),_._v(" "),v("li",[_._v("读写分离：SpringAOP动态数据源切换")])]),_._v(" "),v("h2",{attrs:{id:"服务器参数配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器参数配置"}},[_._v("#")]),_._v(" 服务器参数配置")]),_._v(" "),v("p",[v("code",[_._v("show variables like 'max_connections';")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("max_connections")]),_._v("，最大客户端连接数")]),_._v(" "),v("li",[v("code",[_._v("table_open_cache")]),_._v("，表文件句柄缓存（表数据是存储在磁盘上的，缓存磁盘文件的句柄方便打开文件读取数据）")]),_._v(" "),v("li",[v("code",[_._v("key_buffer_size")]),_._v("，索引缓存大小（将从磁盘上读取的索引缓存到内存，可以设置大一些，有利于快速检索）")]),_._v(" "),v("li",[v("code",[_._v("innodb_buffer_pool_size")]),_._v("，"),v("code",[_._v("Innodb")]),_._v("存储引擎缓存池大小（对于"),v("code",[_._v("Innodb")]),_._v("来说最重要的一个配置，如果所有的表用的都是"),v("code",[_._v("Innodb")]),_._v("，那么甚至建议将该值设置到物理内存的80%，"),v("code",[_._v("Innodb")]),_._v("的很多性能提升如索引都是依靠这个）")]),_._v(" "),v("li",[v("code",[_._v("innodb_file_per_table")]),_._v("（"),v("code",[_._v("innodb")]),_._v("中，表数据存放在"),v("code",[_._v(".ibd")]),_._v("文件中，如果将该配置项设置为"),v("code",[_._v("ON")]),_._v("，那么一个表对应一个"),v("code",[_._v("ibd")]),_._v("文件，否则所有"),v("code",[_._v("innodb")]),_._v("共享表空间）")])]),_._v(" "),v("p"),_._v(" "),v("h2",{attrs:{id:"标识符选择"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标识符选择"}},[_._v("#")]),_._v(" 标识符选择")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("选择合适的标识符是非常重要的。选择时不仅应该考虑"),v("strong",[_._v("存储类型")]),_._v("，而且应该考虑MySQL是怎样进行"),v("strong",[_._v("运算和比较")]),_._v("的。"),v("em",[_._v("一旦选定数据类型，应该保证所有相关的表都使用相同的数据类型。")])])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("整型")]),_._v("：通常是作为标识符的最好选择，因为可以更快的处理，而且可以设置为AUTO_INCREMENT。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("字符串")]),_._v("：尽量避免使用字符串作为标识符，它们消耗更好的空间，处理起来也较慢。而且，通常来说，字符串都是随机的，所以它们在索引中的位置也是随机的，这会导致页面分裂、随机访问磁盘，聚簇索引分裂（对于使用聚簇索引的存储引擎）。")])])]),_._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[_._v("#")]),_._v(" 参考")]),_._v(" "),v("ul",[v("li",[_._v("*"),v("a",{attrs:{href:"https://juejin.cn/post/6844903779284975630#heading-78",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考一"),v("OutboundLink")],1)]),_._v(" "),v("li",[v("a",{attrs:{href:"http://www.cnblogs.com/hustcat/archive/2009/10/28/1591648.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考二"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=n.exports}}]);