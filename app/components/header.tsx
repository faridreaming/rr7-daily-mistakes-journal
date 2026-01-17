import Logo from './logo'
import { ModeToggle } from '~/components/mode-toggle'
import NewEntryForm from './new-entry-form'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2 font-bold">
        <Logo />
        Daily Mistakes Journal
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <NewEntryForm />
      </div>
    </header>
  )
}
