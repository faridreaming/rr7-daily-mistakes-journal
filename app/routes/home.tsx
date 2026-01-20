import Header from '~/components/header'
import type { Route } from './+types/home'
import { Card, CardContent } from '~/components/ui/card'
import { data } from 'react-router'

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const date = formData.get('date')
  const mistakes = formData.get('mistakes')
  const triggers = formData.get('triggers')
  const impacts = formData.get('impacts')
  const futureImpacts = formData.get('futureImpacts')
  const preventionSteps = formData.get('preventionSteps')

  const errors = []

  if (!date) {
    errors.push({ field: 'date', message: 'Date is required' })
  }
  if (!mistakes) {
    errors.push({ field: 'mistakes', message: 'Mistakes are required' })
  }
  if (!triggers) {
    errors.push({ field: 'triggers', message: 'Triggers are required' })
  }
  if (!impacts) {
    errors.push({ field: 'impacts', message: 'Impacts are required' })
  }
  if (!futureImpacts) {
    errors.push({
      field: 'futureImpacts',
      message: 'Future impacts are required',
    })
  }
  if (!preventionSteps) {
    errors.push({
      field: 'preventionSteps',
      message: 'Prevention steps are required',
    })
  }

  if (Object.keys(errors).length > 0) {
    return data({ errors }, { status: 400 })
  }
}

export default function Home() {
  return (
    <div className="mx-auto px-4 max-w-3xl">
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
