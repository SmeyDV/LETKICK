import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react' // Import icons from lucide-react

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // To ensure the component only renders on the client side
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  )
}
