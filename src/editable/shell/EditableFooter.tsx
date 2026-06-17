'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t-8 border-[var(--slot4-accent)] bg-[#07111f] text-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="editorial-brand text-5xl font-black text-[var(--slot4-accent)] sm:text-6xl">{SITE_CONFIG.name}</Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <form action="/signup" className="mt-8 flex max-w-xl border border-white/20 bg-white">
              <input name="email" type="email" placeholder="Email for distribution updates" className="min-w-0 flex-1 bg-white px-4 py-4 text-sm text-black outline-none placeholder:text-black/45" />
              <button className="bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em]">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Explore</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/media-distribution" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Campaigns<ArrowRight className="h-4 w-4" /></Link>
              <Link href="/search" className="group inline-flex items-center justify-between text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Archive<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div>
            <h3 className="border-b border-white/25 pb-3 text-[10px] font-black uppercase tracking-[.22em] text-white/55">Publication</h3>
            <div className="mt-4 grid gap-3">
              <Link href="/about" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">About</Link>
              <Link href="/contact" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Contact</Link>
              {session ? <><Link href="/create" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Publish</Link><button onClick={logout} className="text-left text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Logout</button></> : <><Link href="/login" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Log in</Link><Link href="/signup" className="text-sm font-black uppercase tracking-[.08em] hover:text-[var(--slot4-accent)]">Subscribe</Link></>}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 bg-[#050b14] px-4 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-white/45">Copyright {year} {SITE_CONFIG.name}. Media distribution and public visibility platform.</div>
    </footer>
  )
}
