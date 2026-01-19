import Header from '~/components/header'
import type { Route } from './+types/home'
import { Card, CardContent } from '~/components/ui/card'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <Header />
      <div>
        <Card>
          <CardContent>
            Every night before you go to bed, take a few quiet minutes to open
            your Mistakes Journal and gently reflect on your day. This is not
            about blaming yourself. It is about understanding your patterns,
            what led to them, and how you can respond better next time. By doing
            this consistently for the next <b>30 days</b>, you will start to
            notice small shifts in your awareness, recognize your triggers with
            kindness, and discover practical ways to grow into the person you
            want to become.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
