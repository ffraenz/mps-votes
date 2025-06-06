import { findVoteDates } from '@/lib/findVoteDates'
import { getDateString } from '@/lib/utils'
import { notFound, redirect } from 'next/navigation'

export default async function IndexPage() {
  const voteDates = await findVoteDates()
  if (voteDates.length === 0) {
    return notFound()
  }
  const dateString = getDateString(voteDates[0])
  return redirect(`/votes/${dateString}`)
}
