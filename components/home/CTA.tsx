import Link from 'next/link'
export default function CTA() {
  return (
    <div className="bg-yei-primary-darker">
      <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your path in economics today.</span>
        </h2>
        <Link href="/signup">
          <a className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yei-primary-darker bg-white hover:bg-indigo-50 sm:w-auto">
            Sign up for free
          </a>
        </Link>
      </div>
    </div>
  )
}
