import { Fragment } from 'react'

/**
 * 渲染带有 [[高亮片段]] 标记的文本。
 */
export default function RichText({ text }) {
  const parts = text.split(/(\[\[.*?\]\])/g).filter(Boolean)

  return parts.map((part, i) =>
    part.startsWith('[[') && part.endsWith(']]') ? (
      <mark className="hl" key={i}>
        {part.slice(2, -2)}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}
