import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Form } from 'react-router'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { ChevronDownIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { Label } from '~/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { Textarea } from './ui/textarea'

export default function NewEntryForm() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button autoFocus>
          <Plus />
          New Entry
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>New Journal Entry</DialogTitle>
          <DialogDescription>Add a new journal entry</DialogDescription>
        </DialogHeader>
        <Form method="post" className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="date">Date</Label>
            <input type="hidden" name="date" value={date?.toISOString()} />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className="justify-between font-normal"
                >
                  {date
                    ? date.toLocaleDateString('en-US', { dateStyle: 'full' })
                    : 'Select date'}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date)
                    setOpen(false)
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mistakes">
              List down all the mistakes you made today. One by one.
            </Label>
            <Textarea
              id="mistakes"
              name="mistakes"
              placeholder={`- Tired after class
- Distracted by phone
- Poor time planning`}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="triggers">
              Try to think deeply and list down exactly what triggered you to
              make those mistakes.(Answering this will change your life. So,
              take your time.)
            </Label>
            <Textarea
              id="triggers"
              name="triggers"
              placeholder={`- Slept late last night
- Checked social media too often
- Felt overwhelmed by too many tasks`}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="impacts">
              List down how those mistakes affected your day.
            </Label>
            <Textarea
              id="impacts"
              name="impacts"
              placeholder={`- Missed important deadline
- Felt stressed and guilty
- Productivity dropped significantly`}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="futureImpacts">
              List down what happens in 3 months if you keep making these
              mistakes every day.
            </Label>
            <Textarea
              id="futureImpacts"
              name="futureImpacts"
              placeholder={`- Grades may decline
- Confidence keeps decreasing
- Bad habits become harder to break`}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="preventionSteps">
              List down the steps you’re going to take tomorrow to avoid these
              mistakes.
            </Label>
            <Textarea
              id="preventionSteps"
              name="preventionSteps"
              placeholder={`- Set sleep alarm at 11 PM
- Use app blocker during study time
- Plan top 3 priorities every morning`}
            />
          </div>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
