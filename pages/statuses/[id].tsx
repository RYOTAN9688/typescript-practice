import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import App from '../components/App'

type StatusPageProps = { id: string; lang: string }

export const getServerSideProps: GetServerSideProps<StatusPageProps> = async (
  context
) => {
  const { id, lang } = context.query
  if (typeof id !== 'string') {
    return { notFound: true }
  }
  if (typeof lang !== 'string') {
    return { notFound: true }
  }
  return { props: { id, lang } }
}

const StatusPage = (props: StatusPageProps): JSX.Element => {
  const title = `このページのIDは${props.id}です`
  return (
    <App>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="ogtitle" />
      </Head>
      <p>
        このページのIDは{props.id}で言語は{props.lang}です
      </p>
    </App>
  )
}

export default StatusPage
