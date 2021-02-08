import Head from 'next/head'
import { useCustomSelector } from '../store/ContextProvider'
import { MarsMap } from '../components/MarsMap'
import { SideMenu } from '../components/SideMenu'
import { Snackbar } from '../components/Snackbar'

export default function Mission() {
  const {
    webState: { notification },
  } = useCustomSelector()

  return (
    <div>
      <Head>
        <title>Mission to MARS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <MarsMap />
        <SideMenu />
        {notification && <Snackbar />}
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: auto 300px;
          height: 100vh;
          width: 100%;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
