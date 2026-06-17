import Link from 'next/link'
import { ArrowRight, BadgeCheck, BarChart3, CheckCircle2, FileText, Globe2, RadioTower, Search, Send, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePublisher, getEditableReach, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const stats = [
  ['2.4M+', 'monthly media impressions'],
  ['680+', 'publisher channels'],
  ['48h', 'indexing window'],
  ['94%', 'campaign delivery rate'],
]

const industries = ['Technology', 'Finance', 'Healthcare', 'Books', 'Energy', 'Startups', 'Real Estate', 'Consumer Brands']

const process = [
  { icon: FileText, title: 'Prepare the release', body: 'Shape the headline, summary, source details, campaign category, and press-ready body.' },
  { icon: RadioTower, title: 'Distribute to networks', body: 'Publish into a structured media archive designed for journalists, publishers, and search discovery.' },
  { icon: BarChart3, title: 'Track campaign context', body: 'Surface reach, status, category, publisher, and engagement cues directly on campaign cards.' },
]

const faqs = [
  ['Can campaigns include images?', 'Yes. Archive and detail pages can display campaign images while the homepage stays text-focused for newsroom scanning.'],
  ['Who is this for?', 'PR agencies, founders, marketing teams, publishers, and brands launching announcements or visibility campaigns.'],
  ['Can I search campaigns?', 'Yes. Search supports keywords, categories, brands, industries, and content types across published posts.'],
]

function CampaignCard({ post, href, index, featured = false }: { post: SitePost; href: string; index: number; featured?: boolean }) {
  return (
    <Link href={href} className={`editable-card-hover group flex h-full min-w-0 flex-col border border-[#d7e1e8] bg-white p-5 ${featured ? 'md:col-span-2 md:p-7' : ''}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[.16em] text-[#e11d48]">
        <span>{getEditableCategory(post)}</span>
        <span>Campaign {String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className={`${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'} mt-5 line-clamp-4 font-black leading-[1.02] tracking-[-.045em] text-[#0b1220] group-hover:text-[#e11d48]`}>
        {post.title}
      </h3>
      <p className="mt-4 line-clamp-3 text-sm font-semibold leading-7 text-[#425466]">{getEditableExcerpt(post, featured ? 220 : 145)}</p>
      <div className="mt-6 grid gap-2 text-[11px] font-black uppercase tracking-[.12em] text-[#667085] sm:grid-cols-2">
        <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#0f766e]" /> {getEditablePublisher(post)}</span>
        <span className="inline-flex items-center gap-2"><BarChart3 className="h-4 w-4 text-[#0f766e]" /> {getEditableReach(post, index)}</span>
        <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0f766e]" /> Live distribution</span>
        <span className="inline-flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#0f766e]" /> Open campaign</span>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="bg-[#eef4f7]">
      <div className={`${dc.shell.section} py-10 sm:py-14`}>
        <div className="editable-reveal grid overflow-hidden border border-[#cbd8e2] bg-white shadow-[0_24px_80px_rgba(15,23,42,.10)] lg:grid-cols-[1.2fr_.8fr]">
          <div className="bg-[#07111f] p-7 text-white sm:p-10 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[.24em] text-[#ffb4c4]">{pagesContent.home.hero.badge}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[.92] tracking-[-.055em] sm:text-7xl lg:text-[5.4rem]">{heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/72">{pagesContent.home.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/media-distribution" className="inline-flex items-center justify-center gap-2 bg-[#e11d48] px-6 py-4 text-xs font-black uppercase tracking-[.14em] text-white transition hover:bg-white hover:text-[#07111f]">
                Browse campaigns <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/create" className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-4 text-xs font-black uppercase tracking-[.14em] text-white transition hover:bg-white hover:text-[#07111f]">
                Start publishing
              </Link>
            </div>
          </div>
          <aside className="grid bg-white sm:grid-cols-2 lg:grid-cols-1">
            {stats.map(([value, label]) => (
              <div key={label} className="border-b border-[#d7e1e8] p-6 last:border-b-0">
                <p className="text-4xl font-black tracking-[-.05em] text-[#0b1220]">{value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[.16em] text-[#667085]">{label}</p>
              </div>
            ))}
          </aside>
        </div>
        {lead ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_.72fr]">
            <CampaignCard post={lead} href={postHref(primaryTask, lead, primaryRoute)} index={0} featured />
            <div className="grid gap-4">
              {posts.slice(1, 3).map((post, index) => (
                <CampaignCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 1} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(3, 9).length ? posts.slice(3, 9) : posts
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-12 sm:py-16`}>
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#cbd8e2] pb-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-[#e11d48]">Featured press releases</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-.05em] text-[#0b1220]">Latest distributions</h2>
          </div>
          <Link href="/media-distribution" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-[#0f766e]">View archive <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {railPosts.map((post, index) => <CampaignCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 3} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit(_props: HomeSectionProps) {
  return (
    <section className="bg-[#eef4f7]">
      <div className={`${dc.shell.section} py-12 sm:py-16`}>
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="border border-[#cbd8e2] bg-white p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[.24em] text-[#e11d48]">Popular industries</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-.05em] text-[#0b1220]">Campaign discovery organized for media professionals.</h2>
            <p className="mt-5 text-sm font-semibold leading-7 text-[#425466]">Industry tags help readers, publishers, and search visitors understand where each campaign belongs before opening the full release.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <Link key={industry} href={`/media-distribution?category=${encodeURIComponent(industry.toLowerCase())}`} className="editable-card-hover flex items-center justify-between border border-[#cbd8e2] bg-white px-5 py-4 text-sm font-black uppercase tracking-[.12em] text-[#0b1220]">
                {industry}<ArrowRight className="h-4 w-4 text-[#e11d48]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const recent = posts.slice(0, 4)
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-12 sm:py-16`}>
        <div className="grid gap-6 lg:grid-cols-3">
          {process.map((item) => (
            <div key={item.title} className="border border-[#cbd8e2] bg-[#f8fafc] p-6">
              <item.icon className="h-8 w-8 text-[#e11d48]" />
              <h3 className="mt-5 text-2xl font-black tracking-[-.04em] text-[#0b1220]">{item.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#425466]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <aside className="border border-[#cbd8e2] bg-[#07111f] p-7 text-white sm:p-9">
            <p className="text-xs font-black uppercase tracking-[.24em] text-[#ffb4c4]">Trusted distribution platform</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.05em]">Built for launches, partnerships, funding news, and public updates.</h2>
            <div className="mt-7 grid gap-4 text-sm font-bold text-white/70">
              <p className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-[#ffb4c4]" /> Structured campaign presentation for every announcement.</p>
              <p className="flex gap-3"><Globe2 className="h-5 w-5 shrink-0 text-[#ffb4c4]" /> Search-friendly public archive for ongoing visibility.</p>
              <p className="flex gap-3"><UsersRound className="h-5 w-5 shrink-0 text-[#ffb4c4]" /> Designed for brands, agencies, publishers, and founders.</p>
            </div>
          </aside>
          <div>
            <div className="flex items-end justify-between gap-4 border-b border-[#cbd8e2] pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[.24em] text-[#e11d48]">Recent campaigns</p>
                <h2 className="mt-2 text-4xl font-black tracking-[-.05em] text-[#0b1220]">Campaign briefing</h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {recent.map((post, index) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="editable-card-hover grid gap-4 border border-[#cbd8e2] bg-white p-5 sm:grid-cols-[44px_1fr_auto] sm:items-center">
                  <span className="text-3xl font-black text-[#e11d48]">{String(index + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="block text-lg font-black leading-tight tracking-[-.03em] text-[#0b1220]">{post.title}</span>
                    <span className="mt-1 block text-xs font-black uppercase tracking-[.14em] text-[#667085]">{getEditableCategory(post)} / {getEditableReach(post, index)}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-[#0f766e]" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <form action="/search" className="mt-12 grid gap-4 border border-[#cbd8e2] bg-[#f8fafc] p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7">
          <div>
            <h3 className="text-3xl font-black tracking-[-.05em] text-[#0b1220]">Search the distribution archive</h3>
            <p className="mt-2 text-sm font-semibold text-[#425466]">Find campaigns by brand, industry, headline, publisher, or topic.</p>
          </div>
          <label className="flex h-12 border border-[#cbd8e2] bg-white sm:min-w-[360px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-[#667085]" />
            <input name="q" placeholder="Search campaigns" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none" />
            <button className="bg-[#e11d48] px-5 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#07111f] text-white">
      <div className={`${dc.shell.section} py-12 sm:py-16`}>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-[#ffb4c4]">Ready to distribute</p>
            <h2 className="mt-4 max-w-3xl text-5xl font-black leading-[.94] tracking-[-.055em]">Give your next announcement a credible media path.</h2>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/68">Create a press release campaign, publish it into a structured archive, and make it easier for journalists, publishers, and customers to discover.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create" className="inline-flex items-center gap-2 bg-[#e11d48] px-6 py-4 text-xs font-black uppercase tracking-[.14em] text-white transition hover:bg-white hover:text-[#07111f]"><Send className="h-4 w-4" /> Start campaign</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 px-6 py-4 text-xs font-black uppercase tracking-[.14em] text-white transition hover:bg-white hover:text-[#07111f]"><Sparkles className="h-4 w-4" /> Talk to us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
