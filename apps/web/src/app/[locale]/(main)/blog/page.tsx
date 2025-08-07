import { redirect } from 'next/navigation'

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

const Page = async (props: PageProps) => {
  const { locale } = await props.params
  redirect(`/${locale}`)
}

export default Page
