(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{365:function(n,s,e){"use strict";e.r(s);var a=e(12),r=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"_1-创建一个简单类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个简单类"}},[n._v("#")]),n._v(" 1. 创建一个简单类")]),n._v(" "),s("ul",[s("li",[n._v("使用"),s("code",[n._v("@RestControllerAdvice")]),n._v("注册组件，使用"),s("code",[n._v("@ExceptionHandler")]),n._v("捕获异常")]),n._v(" "),s("li",[n._v("该类"),s("code",[n._v("只捕获Controller层的异常")]),n._v("，其他方法体的异常不予捕获")]),n._v(" "),s("li",[n._v("捕获到异常后会返回相应方法体的返回值")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('/**\n * 全局异常处理，仅对Controller层的异常有效\n *\n * @author 曾博佳\n * @since 2019-02-01\n */\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    private Logger log = LoggerFactory.getLogger(this.getClass());\n\n    /**\n     * 统一捕获运行时异常\n     *\n     * @author 曾博佳\n     * @since 2019-02-01\n     * @param e 异常信息\n     * @return 返回异常错误码及信息\n     */\n    @ExceptionHandler(Exception.class)\n    public BaseReturnDto handleError(Exception e){\n        log.error("服务器异常",e);\n        return new BaseReturnDto(ReturnCodeEnum.SERVER_ERROR.getCode(),e.getMessage());\n    }\n\n    /**\n     * 统一捕获404未找到异常\n     *\n     * @author 曾博佳\n     * @since 2019-02-01\n     * @param e 异常信息\n     * @return 返回404码及异常信息\n     */\n    @ExceptionHandler(NoHandlerFoundException.class)\n    public BaseReturnDto handler404Error(Exception e){\n        log.error("页面未找到",e);\n        return new BaseReturnDto(ReturnCodeEnum.NOT_FOUND.getCode(),e.getMessage());\n    }\n}\n\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br")])]),s("p"),n._v(" "),s("h2",{attrs:{id:"_2-全局异常捕获类的注解介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-全局异常捕获类的注解介绍"}},[n._v("#")]),n._v(" 2. 全局异常捕获类的注解介绍")]),n._v(" "),s("ul",[s("li",[s("strong",[n._v("@RestControllerAdvice")]),n._v(" = "),s("code",[n._v("@ResponseBody")]),n._v(" + "),s("code",[n._v("@ControllerAdvice")]),n._v("：是SpringBoot整合后的注解")]),n._v(" "),s("li",[s("strong",[n._v("@ResponseBody")]),n._v("：将返回结果以JSON格式输出")]),n._v(" "),s("li",[s("strong",[n._v("@ControllerAdvice")]),n._v("：是一个组件注解，它允许实现类通过类路径扫描被自动检测到。"),s("code",[n._v("@ControllerAdvice")]),n._v("注解的类可以包含带有"),s("code",[n._v("@ExceptionHandler")]),n._v("、"),s("code",[n._v("@InitBinder")]),n._v("和"),s("code",[n._v("@ModelAttribute")]),n._v("注解的方法，"),s("code",[n._v("@ExceptionHandler")]),n._v("用于异常的捕获，可以指定捕获的异常类型。")])]),n._v(" "),s("p")])}),[],!1,null,null,null);s.default=r.exports}}]);