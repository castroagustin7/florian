import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'

function Article({ article }) {
  return (
    <article>
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read more</Card.Cta>
      </Card>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Florian Pfahler | Articles</title>
        <meta name="description" content="." />
      </Head>
      {/* <SimpleLayout title="Work" intro="Intro">
        <div >
          <div className="flex max-w-3xl flex-col space-y-16">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
              {articles.map((article) => (
                <Article as="li" key={article.slug} article={article} />
              ))}
            </ul>
          </div>
        </div>
      </SimpleLayout> */}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
