export const isProduction = process.env.NODE_ENV === 'production'
// eslint-disable-next-line unicorn/prefer-global-this -- using `typeof window` to safely detect non-browser environments; `globalThis` is always defined
export const isServer = typeof window === 'undefined'

export const SITE_URL = isProduction ? 'https://captainjay.blog' : 'http://localhost:3000'

export const GITHUB_USERNAME = 'captainjay'

export const SITE_NAME = 'Captain Jay'
export const SITE_KEYWORDS = ['Captain Jay', 'Blog', 'Next.js', 'React', 'TypeScript', 'Web Development']

export const SITE_GITHUB_URL = 'https://github.com/captainjay'
export const SITE_FACEBOOK_URL = 'https://www.facebook.com/captainjay'
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/captainjay'
export const SITE_X_URL = 'https://x.com/captainjay'
export const SITE_YOUTUBE_URL = 'https://www.youtube.com/@captainjay'

export const COMMENT_TYPES = ['comment', 'reply'] as const
export const USER_ROLES = ['user', 'admin'] as const
