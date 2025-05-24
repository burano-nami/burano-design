// composables/useBlog.ts
import type { Blog } from '~/types/blog'

export const useBlog = async () => {
  const config = useRuntimeConfig()

  const { data } = await useFetch<{ contents: Blog[] }>(
    `https://${config.public.microcmsServiceDomain}.microcms.io/api/v1/blogs`,
    {
      headers: {
        'X-API-KEY': config.public.microcmsApiKey
      }
    }
  )

  // データがなければ空配列を返す
  const blogs = computed(() => data.value?.contents || [])

  return { blogs }
}