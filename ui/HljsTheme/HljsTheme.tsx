'use client'

import { useEffect } from 'react'

export default function HljsTheme() {
  useEffect(() => {
    function swap(isDark: boolean) {
      const light = document.getElementById('hljs-light') as HTMLLinkElement
      const dark = document.getElementById('hljs-dark') as HTMLLinkElement
      if (!light || !dark) return
      light.disabled = isDark
      dark.disabled = !isDark
    }

    swap(document.documentElement.classList.contains('dark'))

    const observer = new MutationObserver(() => {
      swap(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, { attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return null
}
