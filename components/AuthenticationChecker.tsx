import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Props } from '../types/Props'
import { SignIn } from './SignIn'

function AuthenticationChecker({ children }: Props) {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    setIsAuthenticated(status === 'authenticated')
  }, [router, status])

  if (isAuthenticated === null) return null

  if (isAuthenticated) {
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
