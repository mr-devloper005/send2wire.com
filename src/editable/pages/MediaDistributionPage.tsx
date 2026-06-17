import { EditableTaskArchiveRoute, taskMetadata } from '@/editable/pages/TaskArchivePage'

export const revalidate = 3
const mediaDistributionBasePath = '/media-distribution'
export const generateMetadata = () => taskMetadata('mediaDistribution', mediaDistributionBasePath)

export default async function MediaDistributionPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; page?: string }>
}) {
  return (
    <EditableTaskArchiveRoute
      task="mediaDistribution"
      searchParams={searchParams}
      basePath={mediaDistributionBasePath}
    />
  )
}
