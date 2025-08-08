'use client'

import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

type Stat = {
  id: number
  name: string
  value: number
}

const stats: Stat[] = [
  { id: 1, name: 'Happy Customers', value: 200 },
  { id: 2, name: 'Projects Completed', value: 875 },
  { id: 3, name: 'Years Of Experience', value: 12 },
]

export default function AboutCounter() {
  const [hasViewed, setHasViewed] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView && !hasViewed) {
      setHasViewed(true)
    }
  }, [inView, hasViewed])

  return (
    <div className="pb-32 lg:pb-0" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-2xl text-accent font-bebas">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {hasViewed ? (
                  <CountUp end={stat.value} duration={2} />
                ) : (
                  0
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
