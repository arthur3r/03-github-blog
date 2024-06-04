import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { PostContentContainer } from './styles'
import { Issue } from '../../../../contexts/IssuesContext'

interface PostContentProps {
  issue: Issue
}

export function PostContent({ issue }: PostContentProps) {
  return (
    <PostContentContainer>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          code({ inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={dracula}
                language={match[1]}
                PreTag="div"
                customStyle={{ padding: '1rem', borderRadius: '2px' }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {String(children)}
              </code>
            )
          },
        }}
      >
        {issue.body}
      </Markdown>
    </PostContentContainer>
  )
}
