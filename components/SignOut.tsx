import { signOut } from 'next-auth/react'

export function SignOut() {
  return (
    <a
      className='action'
      href={`/api/auth/signout`}
      onClick={(e) => {
        e.preventDefault()
        signOut()
      }}
    >
      Sign out
    </a>
  )
}
