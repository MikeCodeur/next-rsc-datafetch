'use client'

import Instruction from '../../../INSTRUCTIONS.mdx'
import {usePrismTheme} from './hooks'
import {useMDXComponents} from '../../../mdx-components'
import {MDXProvider} from '@mdx-js/react'

export default function Page() {
  const theme = usePrismTheme()
  const components = useMDXComponents({})

  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="mt-4 flex w-full justify-center">
        <div
          className={`prose dark:prose-invert mb-4 w-auto max-w-4xl code-theme-${theme}`}
          suppressHydrationWarning
        >
          <MDXProvider components={components}>
            <Instruction />
          </MDXProvider>
        </div>
      </div>
    </div>
  )
}
