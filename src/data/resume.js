import avatar from '../assets/avatar.png'

export const profile = {
  name: '王伟',
  intention: '求职意向：前端开发',
  avatar,
}

export const personalInfo = [
  { label: '学历：', value: '本科' },
  { label: '毕业时间：', value: '2017' },
  { label: '工作经验：', value: '3年' },
  { label: '电话：', value: '18655483280' },
  { label: '邮箱：', value: '892458829@qq.com' },
  // { label: '地址：', value: '上海市浦东新区' },
]

export const education = [
  { label: '学校：', value: '安庆师范大学' },
  { label: '专业：', value: '物理学' },
  { label: '时间：', value: '2013.09 ~ 2017.07' },
]

export const workExperience = [
  {
    period: '2020.07 至 2026.09',
    company: '北京广通优云科技股份有限公司',
    position: '前端开发',
    duties: ['负责前端页面开发，运维平台前端的升级维护'],
  },
  {
    period: '2018.08 至 2020.06',
    company: '上海丽正科技',
    position: '前端开发',
    duties: ['负责前端开发，包括web端vue项目开发，与移动端react-native项目开发'],
  },
  {
    period: '2017.07 至 2018.08',
    company: '上海易宠',
    position: '前端开发',
    duties: ['负责微信小程序的开发和维护'],
  },
]

export const projects = [
  {
    title: '农行一体化运维项目',
    intro:
      `一体化项目通过IT数据驱动运营分析及流程优化整合，能够在一体化资源管理、一体化操作管理、一体化监控管理、统计分析和决策支持、标准化服务流程、运维安全管理等领域提供相关产品和解决方案，并在此基础上进行客户化开发，与现有产品或工具进行整合或替换。作为现场前端负责人，负责项目现场产品问题的定制化改造，参与开发10+场景化建设，与农行协作开发，技术赋能农行。优云租户管理系统主要开发的模块有租户管理、用户管理、应用管理 resourceVIew配置中心，分行工作台，955报障系统 告警监控等。主要负责该项目整体前端开发、包含Uyun各个产品的公共头部、以及公共业务组件的前端设计开发。优云基础平台：itsm+automation+cmdb+alert等基础平台的升级维护及客户现场的定制开发工作，定制公共组件，做成npm包发布到农行环境，提供给各产品及模块引用`,
    stack: 'react(hooks)+redux+react-router+ES5/6/7+webpack+uyun+sass+mobx',
  },
  {
    title: '哈尔滨环境质量监测（移动端app）',
    intro:
      '此项目是哈尔滨环境监测站的环境监测系统，用于从任务下发到完成采样到检测的一整套完整监测业务处理流程，数据上报，不同级别审核，查看，任务流转等，除主要的监测业务以外，还包含考勤打卡，仪器设备出库入库，物资采购',
    stack: 'react/react-native/redux/relam本地数据库/CodePush热更新/JPush极光推送',
  },
  {
    title: '内蒙古水环境质量（移动端app）',
    intro:
      '此项目主要是内蒙古水环境质量监测数据的展示，与分析，通过Echart图表工具对数据进行格式化，对各项指标进行对比分析，使用地图展示各地区各河流断面的水质差异',
    stack: 'react/react-native/Echart/rn-map',
  },
  {
    title: '哈尔滨环境质量监测（web端）',
    intro:
      '此项目是哈尔滨环境质量监测的网页端，主要功能同移动端，网页版页面较大，方便数据填写，可以展示更多内容，可以连接打印机打印表格文件 室内办公时比较方便',
    stack: 'vue/vuex/vue-router',
  },
  // {
  //   title: '个人博客系统',
  //   intro:
  //     '个人使用的博客系统，包含文章列表，分类归档，文章编辑，发布，该项目包含前端，后台，数据库 前端使用react，后台使用node（express框架），数据库mongodb，使用nginx部署在阿里云服务器上',
  //   stack: 'react/redux/typeScript/node/mongodb/nginx',
  //   link: { text: '地址', href: '#' },
  // },
]

/**
 * 自我评价。`[[...]]` 包裹的片段渲染为橙色高亮标签（对应原稿中的灰底橙字）。
 */
export const selfEvaluation = [
  '熟练 [[HTML、DIV + CSS]] 的页面布局，能根据设计图像素级完成页面制作',
  '熟悉 [[HTML5]] 及语义化，了解 [[Canvas]] 动画制作，掌握 [[CSS 3 动画、过渡效果]]等常用技术',
  '熟悉[[原生 JavaScript、ES6]] ，了解 [[TypeScript]]',
  '熟悉 react 常用功能，理解如[[生命周期、组件、虚拟 DOM hooks]] , 熟练使用 [[redux]]',
  '熟悉 [[react-native]] 跨平台移动app开发',
  '熟悉 Vue 常用功能，理解如[[生命周期、组件、虚拟 DOM、数据响应式]]等概念，能够使用 Vue 全家桶开发项目',
  '熟悉模块化、工程化开发流程，能够配置 [[Webpack]]',
  '了解 [[HTTP]] 相关知识，了解常见的 Web [[性能优化]]方案',
  '了解 [[Node.js]] ，能够开发简单的后台服务器',
]
