'use client'

import React from 'react'
import type {MDXComponents} from 'mdx/types'
import {useEffect, useRef} from 'react'
import Prism from 'prismjs'

// Langages
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'

// Thème
import 'prismjs/themes/prism-tomorrow.css'

function CodeBlock({children, ...props}: any) {
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    if (preRef.current) {
      // Appliquer la coloration syntaxique
      Prism.highlightAllUnder(preRef.current)

      // Supprimer tabindex ajouté par Prism après le rendu
      const removeTabIndex = () => {
        if (preRef.current) {
          preRef.current.removeAttribute('tabindex')
          const code = preRef.current.querySelector('code')
          if (code) {
            code.removeAttribute('tabindex')
          }
        }
      }

      // Exécuter immédiatement et après un micro-délai
      removeTabIndex()
      setTimeout(removeTabIndex, 0)
    }
  }, [children])

  const codeElement = children?.props?.children
  const className = children?.props?.className || ''
  const language = className.replace(/language-/, '')

  return (
    <pre ref={preRef} {...props} className={className} suppressHydrationWarning>
      <code className={`language-${language}`}>
        {typeof codeElement === 'string' ? codeElement.trim() : codeElement}
      </code>
    </pre>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CodeBlock,
    code: ({children, className, ...props}: any) => {
      if (!className) {
        return <code {...props}>{children}</code>
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
    ...components,
  }
}
