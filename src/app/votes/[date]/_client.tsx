'use client'

import { Calendar } from '@/components/ui/calendar'
import { VoteTeaser } from '@/components/vote-teaser'
import { Member } from '@/lib/findMembers'
import { Vote } from '@/lib/findVotes'
import { getDateString } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export const PageClient = (
  props: {
    members: Member[]
    votes: Vote[]
    date: Date
    voteDates: Date[]
  }
) => {
  const router = useRouter()

  return (
    <>
      <section className='py-8 border-b-2 border-stroke'>
        <div className='max-w-5xl px-4 md:px-8 mx-auto'>
          <Calendar
            className='p-0'
            mode='single'
            numberOfMonths={3}
            selected={props.date}
            defaultMonth={props.date}
            onSelect={(day) => {
              if (day !== undefined) {
                router.push(`/votes/${getDateString(day)}`)
              }
            }}
            showOutsideDays={false}
            weekStartsOn={1}
            disabled={(date) => !props.voteDates.some(voteDate =>
              getDateString(voteDate) === getDateString(date))}
          />
        </div>
      </section>
      <section className='py-16'>
        <div className='max-w-5xl px-4 md:px-8 mx-auto'>
          <div>
            <h2 className='text-3xl font-bold'>
              {`Liste des votes de la session du ${new Intl.DateTimeFormat('fr-FR', {
                dateStyle: 'long'
              }).format(props.date)}`}
            </h2>
            <div className='pt-12 grid md:grid-cols-2 gap-6'>
              {props.votes.map(vote => (
                <VoteTeaser key={vote.id} vote={vote} members={props.members} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
