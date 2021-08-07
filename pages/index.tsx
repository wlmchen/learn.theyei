import Link from 'next/link'
import { useAuth } from '@/lib/auth'

const IndexPage = () => {
  const auth = useAuth()

  return (
    <div>
      <div>
        {auth?.user ? (
          <div>
            <button onClick={() => auth.signout()}>Sign Out</button>
          </div>
        ) : (
          <div>
            <span className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yei-primary-main-darker hover:bg-yei-primary-main-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main-main">
              <Link href="/login">Log In</Link>
            </span>
            <span className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yei-primary-main-darker hover:bg-yei-primary-main-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yei-primary-main-main">
              <Link href="/signup">Create an Account</Link>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default IndexPage
