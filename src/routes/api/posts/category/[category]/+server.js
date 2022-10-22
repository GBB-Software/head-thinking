import fetchPosts from '$lib/assets/js/fetchPosts'
import { error, json } from '@sveltejs/kit'

export const prerender = 'auto'

export const GET = async ({ params }) => {
	const { category } = params
  console.log(category)
	try {
    console.log(category)
		const { posts } = await fetchPosts({ category })
		
		return json(posts)
	}

	catch(err) {
		throw error(500, err)
	}
}