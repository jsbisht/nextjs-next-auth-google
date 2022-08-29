import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { SignOut } from '../components/SignOut';

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(session,null,2)}</pre>
      <br />
      <SignOut />
    </>
  )
}

export default Home
