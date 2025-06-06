import SeatingPlan from './seating-plan'
import { JSX } from 'react'
import { Member } from '@/lib/findMembers'
import { Vote, VoteResult } from '@/lib/findVotes'
import Svg from './svg'
import { cn } from '@/lib/utils'

export const VoteTeaser = (
  props: {
    vote: Vote
    members: Member[]
  }
): JSX.Element => {
  const voteResults = Object.values(props.vote.votes)

  const yesCount = voteResults.filter(vote => vote === 'yes').length
  const noCount = voteResults.filter(vote => vote === 'no').length
  const abstentionCount = voteResults.filter(vote => vote === 'abstention').length
  const absentCount = voteResults.filter(vote => vote === 'absent').length

  return (
    <div className='p-8 flex flex-col gap-4 border-2 border-stroke'>
      <div className='flex flex-row gap-2'>
        <span className={cn(
          'flex flex-row gap-1 items-center px-2 bg-gray-200 rounded-sm',
          yesCount > noCount && 'bg-vote-yes text-white'
        )}>
          <Svg name='check' className='size-4' />
          {yesCount}
        </span>
        <span className={cn(
          'flex flex-row gap-1 items-center px-2 bg-gray-200 rounded-sm',
          noCount > yesCount && 'bg-vote-no text-white'
        )}>
          <Svg name='x' className='size-4' />
          {noCount}
        </span>
        {abstentionCount > 0 && (
          <span className='flex flex-row gap-1 items-center px-2 bg-gray-200 rounded-sm'>
            <Svg name='circle' className='size-4' />
            {abstentionCount}
          </span>
        )}
        {absentCount > 0 && (
          <span className='flex flex-row gap-1 items-center px-2 bg-gray-200 rounded-sm'>
            <Svg name='slash' className='size-4' />
            {absentCount}
          </span>
        )}
      </div>
      <h2 className='grow basis-0 text-xl font-bold text-link text-pretty'>
        {props.vote.name}
      </h2>
      <div>
        <SeatingPlan
          date={props.vote.date}
          seatClassName={seat => {
            const member = props.members.findLast(member =>
              member.seat === seat &&
              (member.startDate === null || member.startDate <= props.vote.date)
            )
            if (member === undefined) {
              // Hide seat
              return ''
            }

            let className = ''

            const voteResult = props.vote.votes[member.id] as VoteResult | undefined
            switch (voteResult ?? 'unknown') {
              case 'yes': {
                className += ' fill-vote-yes'
                break
              }
              case 'no': {
                className += ' fill-vote-no'
                break
              }
              case 'abstention': {
                className += ' fill-gray-500'
                break
              }
              case 'absent': {
                className += ' fill-gray-200'
                break
              }
              case 'unknown': {
                className += ' fill-transparent'
                console.log('Unknown vote for', member.name)
                break
              }
            }

            return className
          }}

          partyClassName={party => {
            switch (party) {
              case 'adr': {
                return 'stroke-party-adr/50'
              }
              case 'dp': {
                return 'stroke-party-dp/50'
              }
              case 'lsap': {
                return 'stroke-party-lsap/50'
              }
              case 'csv': {
                return 'stroke-party-csv/50'
              }
              case 'deigreng': {
                return 'stroke-party-deigreng/50'
              }
              case 'piraten': {
                return 'stroke-party-piraten/50'
              }
              case 'deilenk': {
                return 'stroke-party-deilenk/50'
              }
              case 'liberte': {
                return 'stroke-party-liberte/50'
              }
              default: {
                return 'stroke-gray-200/50'
              }
            }
          }}
        />
      </div>
    </div>
  )
}
