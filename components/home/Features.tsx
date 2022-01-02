import {
  ArrowCircleUpIcon,
  BookOpenIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Learn',
    description:
      '17 chapters of AP Economics content, including 4 chapters of fundamental economics, 6 chapters of macroeconomics, and 7 chapters of microeconomics.',
    icon: BookOpenIcon,
  },
  {
    name: 'Practice',
    description:
      'Practice with our hundreds of multiple-choice and free-response questions covering every topic on the AP Economics exams.',
    icon: ArrowCircleUpIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-gray-200">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yei-primary-main text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
