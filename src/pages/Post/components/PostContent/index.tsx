import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { PostContentContainer } from './styles'

const markdown = `
Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

~~~js
let foo = 42;   // foo is now a number
foo = ‘bar’;    // foo is now a string
foo = true;     // foo is now a boolean
~~~
`

export function PostContent() {
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
        {markdown}
      </Markdown>
    </PostContentContainer>
  )
}
