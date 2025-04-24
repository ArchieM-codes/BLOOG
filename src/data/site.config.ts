interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://bloog-ikil97qzr-ams-projects-c1a12f70.vercel.app/', // Write here your website url
	author: 'Archie Mclellan', // Site author
	title: 'Archie\'s blog', // Site title.
	description: 'ArchieM\'s blog', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
