import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from '../styles/home.module.scss'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src="/images/avatar.svg" alt="" width={334} height={520} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const priceId = 'price_1M4UnLHmcPsCHD7ebYrZPMdN'
  const price = await stripe.prices.retrieve(priceId)

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
  }

  return {
    props: {
      product,
    },
  }
}
