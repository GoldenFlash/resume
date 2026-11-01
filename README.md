# resume-page

按参考稿 PDF 还原的简历页面，React + Vite，纯 CSS 实现，无 UI 库依赖。

## 运行

```bash
npm install
npm run dev      # 开发预览 http://localhost:5173
npm run build    # 产物输出到 dist/
npm run preview  # 预览构建产物
```

## 版式说明

页面为 A4 纸张（210mm × 297mm），四周留白 10mm，内容区外套 1px `#333` 边框，
内部左右分栏（左栏 224px，右栏自适应），复刻自参考稿。

取色与字号均按参考稿量取：

| 用途 | 值 |
| --- | --- |
| 姓名 / 小节标题 / 求职意向 | `#344663` |
| 正文 | `#333333` |
| 左栏键值、工作经历条目 | `#000000` |
| 高亮标签（文字 / 底色） | `#ff5700` / `#efefef` |
| 链接 | `#1890ff` |
| 小节标题下划线 | `2px solid #344663` |

正文 12px / 行高 18.4px；姓名 27.5px；小节标题 15px；项目标题 14px。

### 工作经历的三列

日期 / 公司 / 职位三列由**整段工作经历共享一份列宽**（`.jobs` 定列宽，
`.job` 与 `.job-head` 用 `subgrid` 继承），因此各行严格对齐。

公司列取 `auto`（即 `max-content`）而不是 `1fr`：中文可以在任意字符间换行，
`min-content` 只有一个字宽，约束不住长公司名；`auto` 会取公司名的完整宽度，
剩下的空间由两侧的 `1fr` 平分。**所以公司名再长也不会折行，只会把左右两列挤窄**，
无需手工调整列宽。

## 目录结构

```
src/
  App.jsx                 页面骨架：A4 纸张 + 边框 + 左右分栏
  main.jsx                入口
  data/resume.js          简历文案（改内容只需动这里）
  components/
    Sidebar.jsx           左栏：头像、姓名、个人信息、教育背景
    MainContent.jsx       右栏：工作经历、项目经验、自我评价
    SectionTitle.jsx      小节标题 + 下划线
    RichText.jsx          解析 [[高亮]] 标记
  styles/
    base.css              重置样式、字体栈
    resume.css            版式与配色
  assets/avatar.png       头像
```

## 修改内容

所有文案集中在 [src/data/resume.js](src/data/resume.js)。
自我评价中 `[[...]]` 包裹的片段会渲染成橙字灰底的高亮标签：

```js
'熟悉 [[HTML5]] 及语义化，了解 [[Canvas]] 动画制作'
```

## 打印 / 导出 PDF

样式已包含 `@media print` 规则（`@page { size: A4; margin: 0 }`，
打印时隐去背景与阴影）。用浏览器打印并选择「另存为 PDF」即可得到单页 A4。
注意在打印设置中关闭「页眉页脚」，并将边距设为「无」。
