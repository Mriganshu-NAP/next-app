import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { signIn, signOut, useSession } from 'next-auth/client'
import FullWidthBanner from '../components/FullWidthBanner'
import Slider from '../components/Slider'
import BannerSlider from '../components/BannerSlider'
// import DemoComponent from '../components/DemoComponent'

const AuthContainer = styled.div`
  padding: 10px 20px;
  background: #ddd;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
`;

export default function Home() {
  const [ session, loading ] = useSession()
  return (
    <div>
      <Head>
        <title>NAP Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      {!session && 
      <AuthContainer>
        Please sign in <br/>
        <button onClick={() => signIn()}>Sign in</button>
      </AuthContainer>}
      {session && 
      <AuthContainer>
        Signed in as {session.user.name} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </AuthContainer>}
        <FullWidthBanner 
          heading="Slatwall Accessories"
        />
        <Slider />
        <BannerSlider />
        {/* <DemoComponent align="center" bgColor="yellow" type="primary" /> */}
        <Link href="https://shopnewage.com/collections/garage-cabinetry" passHref>
          <a>Garage Cabinets</a>
        </Link>
        <br />
        <Link href="https://shopnewage.com/collections/tool-storage-solutions" passHref>
          <a>Tools and Storage</a>
        </Link>
      </div>
    </div>
  )
}
