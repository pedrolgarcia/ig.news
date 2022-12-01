import Head from 'next/head'
import styles from './styles.module.scss'

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
