import { PageClient } from './_client'
import { findMembers } from '@/lib/findMembers'
import { findVoteDates } from '@/lib/findVoteDates'
import { findVotes } from '@/lib/findVotes'
import { getDateString } from '@/lib/utils'

export const dynamic = 'force-static'

export const generateStaticParams = async (
): Promise<Array<{ date: string }>> => {
  const voteDates = await findVoteDates()
  return voteDates.map(date => ({
    date: getDateString(date)
  }))
}

const Page = async (
  props: { params: Promise<{ date: string }> }
) => {
  const params = await props.params

  const date = new Date(params.date)

  const members = await findMembers()
  const votes = await findVotes({
    date: date,
  })

  const voteDates = await findVoteDates()

  return (
    <PageClient
      members={members}
      votes={votes}
      date={date}
      voteDates={voteDates}
    />
  )
}

export default Page
