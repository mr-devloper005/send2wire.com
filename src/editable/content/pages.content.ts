import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press releases, and PR visibility',
      description: 'Distribute announcements, amplify brand visibility, and reach journalists, publishers, and digital media channels through a premium PR platform.',
      openGraphTitle: 'Media distribution, press releases, and PR visibility',
      openGraphDescription: 'Publish press releases, syndicate news, and expand media reach through a professional distribution network.',
      keywords: ['media distribution', 'press release publishing', 'news syndication', 'PR campaigns', 'media outreach'],
    },
    hero: {
      badge: 'Global media distribution',
      title: ['Distribute your story', 'to the media channels that matter.'],
      description: 'Launch press releases, newsroom updates, brand announcements, and PR campaigns with a distribution experience built for visibility, trust, and measurable reach.',
      primaryCta: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryCta: { label: 'Start publishing', href: '/create' },
      searchPlaceholder: 'Search campaigns, industries, publishers, and releases',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Every campaign is structured for fast newsroom scanning.',
      featureCardDescription: 'Headlines, categories, publishers, status, and reach indicators stay visible without relying on thumbnails.',
    },
    intro: {
      badge: 'Distribution intelligence',
      title: 'Built for PR teams, brands, founders, and agencies that need credible media reach.',
      paragraphs: [
        'Plan, publish, and present media campaigns through a focused experience that treats every announcement like a newsroom-ready asset.',
        'Campaigns are organized with industry context, publisher signals, distribution status, and engagement cues so stakeholders can understand momentum quickly.',
        'From startup launches to enterprise PR programs, the platform keeps media outreach, content discovery, and public visibility in one connected surface.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Text-first campaign cards designed for newsroom scanning.',
        'Distribution status, industry tags, and reach metrics surfaced early.',
        'Balanced layouts that keep enterprise content readable on every screen.',
        'Fast interactions with polished motion and accessible contrast.',
      ],
      primaryLink: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryLink: { label: 'Contact distribution team', href: '/contact' },
    },
    cta: {
      badge: 'Amplify your next announcement',
      title: 'Move from press release to measurable media visibility.',
      description: 'Give every launch, milestone, funding update, partnership, and campaign a professional distribution path.',
      primaryCta: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryCta: { label: 'Contact PR team', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A trusted distribution platform for modern media campaigns.',
    description: `${slot4BrandConfig.siteName} helps brands, agencies, publishers, and communications teams prepare announcements for broader digital visibility.`,
    paragraphs: [
      'The platform is designed around the way media professionals review announcements: clear headlines, credible source context, structured campaign details, and quick paths to related coverage.',
      'Every page supports a distribution workflow, from discovery and campaign evaluation to publishing, outreach, and audience growth.',
    ],
    values: [
      {
        title: 'Campaign-ready structure',
        description: 'Announcements are presented with the metadata, status, and supporting context media teams expect.',
      },
      {
        title: 'Publisher-focused discovery',
        description: 'Campaigns, industries, brands, and related updates stay connected so the right story is easier to evaluate.',
      },
      {
        title: 'Professional visibility',
        description: 'Clear layouts, readable content, and consistent calls to action help every release feel credible.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to the media distribution team.',
    description: 'Tell us about the announcement, campaign, audience, or publisher network you want to reach. We will route your request to the right distribution lane.',
    formTitle: 'Plan a distribution',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search media campaigns, press releases, publisher updates, industries, and distribution categories.',
    },
    hero: {
      badge: 'Search the distribution archive',
      title: 'Find campaigns, releases, brands, and media updates faster.',
      description: 'Use keywords, industries, categories, and content types to discover published announcements across the network.',
      placeholder: 'Search by campaign, brand, industry, or headline',
    },
    resultsTitle: 'Latest distribution campaigns',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit press releases, media campaigns, and distribution-ready announcements.',
    },
    locked: {
      badge: 'Publisher access',
      title: 'Login to prepare a media campaign.',
      description: 'Use your account to open the publishing workspace, draft announcements, and prepare distribution-ready content.',
    },
    hero: {
      badge: 'Campaign workspace',
      title: 'Build a release that is ready for media outreach.',
      description: 'Choose the campaign type, add source details, summarize the announcement, and prepare a polished release for review.',
    },
    formTitle: 'Campaign details',
    submitLabel: 'Submit campaign',
    successTitle: 'Campaign submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login to manage media distribution campaigns and publishing submissions.',
      badge: 'Campaign access',
      title: 'Welcome back to your media workspace.',
      description: 'Login to manage submissions, prepare press releases, and continue building distribution campaigns from your account.',
      formTitle: 'Login to dashboard',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Create an account for media distribution, press release publishing, and campaign submissions.',
      badge: 'Publisher onboarding',
      title: 'Create your account and start distributing.',
      description: 'Open a publishing workspace for press releases, brand announcements, and media outreach campaigns.',
      formTitle: 'Create publisher account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
