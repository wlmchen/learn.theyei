import React, { useEffect, useState } from 'react'
import {
  getFileBySlug,
  getFiles,
} from '@/lib/mdx'
import routes, {
  allChapters,
  allKebabChapters,
  chapters,
  kebabModules,
  modules,
} from '@/data/routes'

import { ArrowLeftIcon } from '@heroicons/react/outline'
import CategoryLayout from '@/components/category/CategoryLayout'
import FRQPage from '@/components/category/frq/FRQPage'
import Head from 'next/head'
import Layout from '@/components/global/Layout'
import Link from 'next/link'
import { MDXLayoutRenderer } from '@/components/mdx/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import SignInReminder from '@/components/global/SignInReminder'
import { kebabCase } from '@/lib/utils'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const posts = await getFiles('content')
  routes.forEach((category) => {
    for (let i = 0; i < category.children.length; i++) {
      posts.push(
        `${kebabCase(category.name)}_${kebabCase(category.children[i])}_slides`
      )
      posts.push(
        `${kebabCase(category.name)}_${kebabCase(
          category.children[i]
        )}_mcq-practice`
      )
    }
  })
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '').replace(/\_/g, '/').split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let post
  if (params.slug[2] !== 'slides' && params.slug[2] !== 'mcq-practice') {
    post = await getFileBySlug('content', params.slug.join('_'))
  } else {
    post = { mdxSource: '', frontMatter: '' }
  }

  return { props: { post } }
}

export default function Category({ post }) {
  const auth = useAuth()
  const { mdxSource, frontMatter } = post
  const router = useRouter()
  const slug = router.query.slug || []

  const [sectionType, setSectionType] = useState('')

  useEffect(() => {
    setSectionType(slug[2])

    console.log(chapters)
    console.log(allKebabChapters)
    console.log(slug[1])
    console.log(allChapters[allKebabChapters.indexOf(slug[1])])
  }, [router])
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
          integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
          crossOrigin="anonymous"
        />
      </Head>
      <SignInReminder condition={auth.user}>
            <Layout
              title={`${allChapters[allKebabChapters.indexOf(slug[1])]} ${
                modules[kebabModules.indexOf(slug[2])]
              }`}
              page={slug[0]}
              showNav={slug.length === 1}
            >
              <div className="w-full">
                {kebabModules.indexOf(sectionType) !== -1 ? (
                  <CategoryLayout slug={slug} sectionType={sectionType}>
                    {mdxSource !== '' && frontMatter !== '' ? (
                      <FRQPage slug={slug}>
                        <MDXLayoutRenderer
                          mdxSource={mdxSource}
                          frontMatter={frontMatter}
                          slug={slug}
                          auth={auth}
                        />
                      </FRQPage>
                    ) : (
                      ''
                    )}
                  </CategoryLayout>
                ) : (
                  ''
                )}
              </div>
            </Layout>
          </SignInReminder>
    </>
  )
}
