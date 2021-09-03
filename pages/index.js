import Head from 'next/head'
// import styles from 'styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde laboriosam iste quis recusandae fuga nisi accusantium, provident deserunt voluptates adipisci doloribus ex voluptas eligendi, animi doloremque! Excepturi provident ut sed, ex consequatur ducimus voluptatem maiores facilis. Reprehenderit sit aspernatur quaerat molestias excepturi eaque iusto, fuga quae magni nesciunt vel harum.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde laboriosam iste quis recusandae fuga nisi accusantium, provident deserunt voluptates adipisci doloribus ex voluptas eligendi, animi doloremque! Excepturi provident ut sed, ex consequatur ducimus voluptatem maiores facilis. Reprehenderit sit aspernatur quaerat molestias excepturi eaque iusto, fuga quae magni nesciunt vel harum.</p>
        <Link href="/ninjas">
          <a>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
