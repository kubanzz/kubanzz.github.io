(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{488:function(_,t,v){"use strict";v.r(t);var a=v(12),s=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"动态规划的基本步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态规划的基本步骤"}},[_._v("#")]),_._v(" 动态规划的基本步骤")]),_._v(" "),t("p",[t("strong",[_._v("1. 分析最优子结构")])]),_._v(" "),t("ul",[t("li",[_._v("找出最优解的性质，并刻画其"),t("strong",[_._v("结构特征")])])]),_._v(" "),t("p",[t("strong",[_._v("2. 建立递归关系")])]),_._v(" "),t("ul",[t("li",[_._v("递归地定义"),t("strong",[_._v("最优值")])])]),_._v(" "),t("p",[t("strong",[_._v("3. 计算最优值")])]),_._v(" "),t("ul",[t("li",[_._v("以"),t("strong",[_._v("自底向上")]),_._v("的方式计算出最优值（分治相反）")])]),_._v(" "),t("p",[t("strong",[_._v("4. 构造最优解")])]),_._v(" "),t("ul",[t("li",[_._v("根据计算最优值时得到的信息")])]),_._v(" "),t("p",[t("strong",[_._v("动态规划：")])]),_._v(" "),t("ul",[t("li",[_._v("把小问题的解"),t("strong",[_._v("存储")]),_._v("起来，"),t("strong",[_._v("大问题的最优解一定是小问题的最优解得出")]),_._v("，而分治法则不同。")])]),_._v(" "),t("p"),_._v(" "),t("h2",{attrs:{id:"动态规划的基本要素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态规划的基本要素"}},[_._v("#")]),_._v(" 动态规划的基本要素")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("最优子结构")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("重叠子问题")]),_._v("（子问题独立则用分治法）")])])]),_._v(" "),t("p"),_._v(" "),t("h2",{attrs:{id:"动态规划例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态规划例子"}},[_._v("#")]),_._v(" 动态规划例子")]),_._v(" "),t("h4",{attrs:{id:"矩阵连乘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#矩阵连乘"}},[_._v("#")]),_._v(" 矩阵连乘")]),_._v(" "),t("blockquote",[t("p",[_._v("矩阵的维数分别为：\nA1: 5☓2，A2: 2☓4，A3: 4☓3，A4: 3☓5\n给出用动态规划算法解决该问题时矩阵m(n行，n列)和s(n行，n列)的值\n给出矩阵A1A2A3A4连乘的最小数乘次数以及计算顺序（用加括号的方式表示）")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("m[1][4]=104")]),_._v("：表示A1A2A3A4连乘的最小值为104")]),_._v(" "),t("li",[t("strong",[_._v("s[1][4]=1")]),_._v("：表示A1A2A3A4连乘的最小值的划分为A1(A2A3A4)")]),_._v(" "),t("li",[t("strong",[_._v("A1(A2A3)= m[1][3]")]),_._v("  ：m[1][1] + m[2][3] + A1乘（A2A3连乘后的行列）的值")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images51070819-6fdfac80-1682-11e9-8252-227a9869be66.jpg",alt:"345f694620d66cf1b7e4bd901e03066"}})]),_._v(" "),t("p"),_._v(" "),t("h4",{attrs:{id:"_0-1背包问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-1背包问题"}},[_._v("#")]),_._v(" 0-1背包问题")]),_._v(" "),t("blockquote",[t("p",[_._v("问题：假设背包容量为5。共有3种物品，其重量w={1, 2, 3}，价值v={6, 10, 2}，选择哪几个物品装入背包中，使得背包中物品的价值最大？\n要求：\n给出用动态规划法解决上面背包问题时的矩阵m(n+1行，C+1列)及向量x(n行，1列)\n给出最优值（背包中物品的最大价值）及最优解（放入背包中的物品）")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images51071067-33ae4b00-1686-11e9-960d-d138236b09f6.jpg",alt:"a7e4bf1a204a668ef02a2807e05f58e"}})]),_._v(" "),t("p"),_._v(" "),t("h4",{attrs:{id:"最长公共子序列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最长公共子序列"}},[_._v("#")]),_._v(" 最长公共子序列")]),_._v(" "),t("blockquote",[t("p",[_._v("求序列X={1, 2, 4, 6}和Y={2, 6, 4, 8}的最长公共子序列长度以及最长公共子序列\n并给出用动态规划解决问题时矩阵c(m+1行，n+1列)和b(m行，n列)")])]),_._v(" "),t("blockquote",[t("p",[_._v("解题步骤：\nps："),t("strong",[_._v("某元素的对角线位为”1“号位，上面为”2“号位，左边为”3“号位")])]),_._v(" "),t("ol",[t("li",[t("p",[_._v("比较某位置的行和列元素，若相等则取1号位置（对角线）的值 + 1，若不相等，则取2号位（上面）和3号位（左边）的最大值（2号和3号位的相等则默认取2号的）。")])]),_._v(" "),t("li",[t("p",[_._v("第二张表则填取的是几号位的，最后从表的右下角开始，根据是从几号位的获取的值逆着走，如2则往上走，3则往左走，最后得到的路径中是1的所对应的值就是最长公共子序列。")])])])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontents.com/PI-KA-CHU/Image-OSS/main/images51071168-ab30aa00-1687-11e9-8f51-7d6474733df1.jpg",alt:"b1585405ea453ae3bc46795959a8a24"}})]),_._v(" "),t("p"),_._v(" "),t("h4",{attrs:{id:"最大字段和"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最大字段和"}},[_._v("#")]),_._v(" 最大字段和")]),_._v(" "),t("blockquote",[t("p",[_._v("求序列{5, 2, -4, -8, 3, 4, 1}的最大字段和及相应的最大字段\n给出用动态规划法求最大字段和的向量b(1行，n列)")])]),_._v(" "),t("blockquote",[t("p",[_._v("答题步骤：")]),_._v(" "),t("ol",[t("li",[_._v("b的值为该位置前面的数字的总和，若为负数，则填0")]),_._v(" "),t("li",[_._v("找到最大的值，则取其位置到前面b的值为0的位置的所有对应的数字")])])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("序列")]),_._v(" "),t("th",[_._v("5")]),_._v(" "),t("th",[_._v("2")]),_._v(" "),t("th",[_._v("-4")]),_._v(" "),t("th",[_._v("-8")]),_._v(" "),t("th",[_._v("3")]),_._v(" "),t("th",[_._v("4")]),_._v(" "),t("th",[_._v("1")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("b")]),_._v(" "),t("td",[_._v("5")]),_._v(" "),t("td",[_._v("7")]),_._v(" "),t("td",[_._v("3")]),_._v(" "),t("td",[_._v("0")]),_._v(" "),t("td",[_._v("3")]),_._v(" "),t("td",[_._v("7")]),_._v(" "),t("td",[_._v("8")])])])]),_._v(" "),t("blockquote",[t("p",[_._v("最大子段和：8\n最大子段{3, 4, 1}")])]),_._v(" "),t("p")])}),[],!1,null,null,null);t.default=s.exports}}]);