import { useSession } from 'next-auth/react'
import { Props } from '../types/Props'
import { SignIn } from './SignIn'

function AuthenticationChecker({ children }: Props) {
  const { data: session, status } = useSession()

  if (session && status === 'authenticated') {
    return <p>{children}</p>
  }

  return (
    <p>
      <h3>Authentication Checker</h3>
      <br />
      <SignIn />
    </p>
  )
}

export { AuthenticationChecker }
