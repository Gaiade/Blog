import Avatar from './avatar'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content, author }) {
  return (
    <div className="max-w-2xl">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Avatar className="mt-8" name={author.name} picture={author.picture} />
    </div>
  )
}
