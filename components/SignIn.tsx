import { signIn } from 'next-auth/react'

export function SignIn() {
  return (
    <a
      className='action'
      href="/api/auth/signin"
      onClick={(e) => {
        e.preventDefault()
        signIn('google')
      }}
    >
      Sign in
    </a>
  )
}
