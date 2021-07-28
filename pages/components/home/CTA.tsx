import React from 'react'

export default function CTA() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block mb-1">Want to support the YEI?</span>
          <span className="block">Become a sponsor or donate!</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              target="_blank"
              href="/files/General-Sponsorship-Prospectus-2021.pdf"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yei-primary-main hover:bg-yei-primary-dark"
            >
              Sponsor Us
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                defaultValue="99E63279HUDNW"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yei-primary-dark bg-yei-secondary-brighter hover:bg-yei-secondary-main text-white"
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
