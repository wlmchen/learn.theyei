/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import FRQ from './FRQ'
import FRQCheck from './FRQCheck'

export const MDXComponents = {
  FRQ,
  FRQCheck,
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}
