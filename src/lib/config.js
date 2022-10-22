/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'Head Thinking Blog'
export const siteDescription = 'Thinking about Leadership and Management'
export const siteURL = 'head-thinking.good-better-best.team'
export const siteLink = 'https://github.com/GBB-Software/head-thinking'
export const siteAuthor = 'Nigel Head  (with thanks to Josh Collinsworth)'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact' 
	},
]