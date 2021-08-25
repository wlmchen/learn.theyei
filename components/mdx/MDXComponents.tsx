/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './CustomLink'
import TOCInline from './TOCInline'
import Pre from './Pre'
import FRQ from './FRQ'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  FRQ,
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}
