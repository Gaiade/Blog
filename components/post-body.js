import Avatar from './avatar'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content, author }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
