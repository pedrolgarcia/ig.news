import { GetStaticProps } from 'next'
import Head from 'next/head'
import Prismic from '@prismicio/client'

import styles from './styles.module.scss'

import { getPrismicClient } from '../../services/prismic'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellendus officiis necessitatibus, exercitationem rem
              debitis corrupti possimus assumenda quis provident quasi sunt,
              expedita consequatur. Officiis quae esse quia consectetur minus.
            </p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellendus officiis necessitatibus, exercitationem rem
              debitis corrupti possimus assumenda quis provident quasi sunt,
              expedita consequatur. Officiis quae esse quia consectetur minus.
            </p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellendus officiis necessitatibus, exercitationem rem
              debitis corrupti possimus assumenda quis provident quasi sunt,
              expedita consequatur. Officiis quae esse quia consectetur minus.
            </p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellendus officiis necessitatibus, exercitationem rem
              debitis corrupti possimus assumenda quis provident quasi sunt,
              expedita consequatur. Officiis quae esse quia consectetur minus.
            </p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with lerna</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae repellendus officiis necessitatibus, exercitationem rem
              debitis corrupti possimus assumenda quis provident quasi sunt,
              expedita consequatur. Officiis quae esse quia consectetur minus.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    Prismic.predicates.at('document.type', 'post'),
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100,
    },
  )

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {},
  }
}
