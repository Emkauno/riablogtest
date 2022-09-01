import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'

const HomePage = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default HomePage

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: {
      page,
    },
  }
}