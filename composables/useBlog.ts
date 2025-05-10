import { ref } from 'vue'
import axios from 'axios'

const serviceDomain = useRuntimeConfig().public.microcmsServiceDomain
const apiKey = useRuntimeConfig().public.microcmsApiKey

export const useBlog = async () => {
  const blogs = ref([])

  const fetchBlogs = async () => {
    const { data } = await axios.get(`https://${serviceDomain}.microcms.io/api/v1/blogs`, {
      headers: { 'X-API-KEY': apiKey }
    })
    blogs.value = data.contents
  }

  await fetchBlogs()

  return { blogs }
}