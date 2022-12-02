import Image from 'next/image'

import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SignInButton'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="" width={109} height={30} />

        <nav>
          <ActiveLink href="/" name="Home" activeClassName={styles.active} />
          <ActiveLink
            href="/posts"
            name="Posts"
            activeClassName={styles.active}
          />
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
