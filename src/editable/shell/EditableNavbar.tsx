'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const primaryLinks = [
    { label: 'Home', href: '/' },
    { label: 'Public Relation', href: '/public-relation' },
    { label: 'Create Campaign', href: '/create' },
  ]
  const utilityLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Search', href: '/search' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white text-[#0b1220] shadow-[0_1px_0_rgba(15,23,42,.14)]">
      <div className="bg-[#07111f] text-white">
        <div className="mx-auto flex min-h-12 max-w-[1088px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-2 text-[11px] font-black uppercase tracking-[.18em] sm:px-6 lg:px-8">
          {utilityLinks.map((item) => <Link key={item.href} href={item.href} className="text-white/78 transition hover:text-[#ffb4c4]">{item.label}</Link>)}
          {session ? (
            <>
              <span className="max-w-40 truncate text-white/78" title={session.email}>{session.name}</span>
              <button type="button" onClick={logout} className="uppercase tracking-[.18em] text-white/78 transition hover:text-[#ffb4c4]">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white/78 transition hover:text-[#ffb4c4]">Author Account</Link>
              <Link href="/signup" className="text-white/78 transition hover:text-[#ffb4c4]">Contribute Us</Link>
            </>
          )}
        </div>
      </div>

      <div className="bg-[#eef4f7]">
      <div className="mx-auto flex min-h-[92px] max-w-[1088px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/20 lg:hidden" aria-label="Toggle navigation">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#cbd8e2] bg-white shadow-sm">
            <img src="/favicon.png" alt="" className="h-10 w-10 object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-2xl font-black uppercase tracking-[.08em] text-[#0b1220] sm:text-3xl">{SITE_CONFIG.name}</span>
            <span className="block truncate text-[10px] font-black uppercase tracking-[.22em] text-[#e11d48]">{SITE_CONFIG.tagline}</span>
          </span>
        </Link>
        <form action="/search" className="hidden h-10 w-56 items-center border border-[#cbd8e2] bg-white lg:flex">
          <Search className="ml-3 h-4 w-4 text-[#667085]" />
          <input name="q" type="search" placeholder="Search" className="min-w-0 flex-1 bg-transparent px-2 text-sm font-semibold outline-none" />
        </form>
      </div>
      </div>

      <nav className="mx-auto hidden max-w-[1088px] border border-[#cbd8e2] bg-white lg:block">
        <div className="flex flex-wrap">
          {primaryLinks.map((item) => (
            <Link key={item.href} href={item.href} className="border-r border-[#cbd8e2] px-5 py-4 text-xs font-black uppercase tracking-[.16em] text-[#425466] transition hover:bg-[#07111f] hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open ? (
        <div className="border-t border-black/15 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-px bg-black/15">
            {[...primaryLinks, ...utilityLinks, ...(session ? [] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="bg-white px-4 py-3 text-sm font-black uppercase tracking-[.1em]">{item.label}</Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-white px-4 py-3 text-left text-sm font-black uppercase tracking-[.1em]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
