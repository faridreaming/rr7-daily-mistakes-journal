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
import { useFetcher } from 'react-router'
import { formFields } from '~/data/form-fields.data'

export default function NewEntryForm() {
  let fetcher = useFetcher()
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
        <DialogHeader className="sr-only">
          <DialogTitle>New Journal Entry</DialogTitle>
          <DialogDescription>Add a new journal entry</DialogDescription>
        </DialogHeader>
        <fetcher.Form method="post" className="grid gap-4">
          {formFields.map((field) => {
            if (field.type === 'date') {
              return (
                <div className="grid gap-3" key={field.name}>
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <input
                    type="hidden"
                    name={field.name}
                    value={date?.toISOString()}
                  />
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id={field.name}
                        className="justify-between font-normal"
                      >
                        {date
                          ? date.toLocaleDateString('en-US', {
                              dateStyle: 'full',
                            })
                          : field.placeholder}
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
              )
            } else if (field.type === 'textarea') {
              return (
                <div className="grid gap-3" key={field.name}>
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                </div>
              )
            }
          })}
          <div className="flex justify-end gap-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </div>
        </fetcher.Form>
      </DialogContent>
    </Dialog>
  )
}
