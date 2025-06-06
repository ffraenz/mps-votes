import { readFile } from 'node:fs/promises'
import { findMember } from './findMember'
import { getDateString } from './utils'

export type VoteResult = 'yes' | 'no' | 'abstention' | 'absent'

export type Vote = {
  id: number
  name: string
  date: Date
  type: string
  /** Map of member id to vote result */
  votes: Record<string, VoteResult>
}

const voteResultMap: Record<string, VoteResult> = {
  Non: 'no',
  Oui: 'yes',
  Abstention: 'abstention',
  'Pas participé': 'absent',
}

/**
 * Turn a date string in the format '08/06/2022 14:00:00' into a Date object.
 */
const parseDate = (string: string): Date => {
  const [datePart, timePart] = string.split(' ')
  const [day, month, year] = datePart.split('/')
  const [hours, minutes, seconds] = timePart.split(':')
  return new Date(Date.UTC(
    parseInt(year),
    parseInt(month) - 1,
    parseInt(day),
    parseInt(hours),
    parseInt(minutes),
    parseInt(seconds)
  ))
}

let cachedVotes: Vote[] | null = null

export const findVotes = async (
  args: {
    date?: Date
  }
): Promise<Vote[]> => {
  const { date } = args

  if (cachedVotes === null) {
    const voteActionsJson =
      await readFile(process.cwd() + '/data/109-votes.json', 'utf8')
    const voteActions = JSON.parse(voteActionsJson)

    const voteMap = new Map<string, Vote>()

    let idCounter = 1
    let counter = 1

    for (const voteAction of voteActions) {
      if (
        !voteAction.vote_name ||
        !voteAction.name ||
        !voteAction.firstname ||
        !voteAction.vote_result
      ) {
        console.log('Unexpected vote', voteAction)
        continue
      }

      let vote = voteMap.get(voteAction.vote_name)
      if (vote === undefined) {
        vote = {
          id: idCounter++,
          name: voteAction.vote_name,
          date: parseDate(voteAction.meeting_date),
          type: voteAction.vote_type,
          votes: {},
        }
        voteMap.set(voteAction.vote_name, vote)
      }

      const voteResult = voteResultMap[voteAction.vote_result]
      if (voteResult === undefined) {
        throw new Error(
          'Logic error: Unexpected vote result ' +
          JSON.stringify(voteAction)
        )
      }

      const member = await findMember({
        firstName: voteAction.firstname,
        lastName: voteAction.name,
        date: vote.date,
      })

      let voteKey: string
      if (member !== null) {
        voteKey = member.id
      } else {
        console.log('Unknown member voted', voteAction)

        // Use a fallback key to make sure the vote is included
        voteKey = `_unknown${counter++}`
      }

      vote.votes[voteKey] = voteResult
    }

    cachedVotes = Array.from(voteMap.values())
    cachedVotes.sort((a, b) => b.date.getTime() - a.date.getTime())
  }

  let filteredVotes = cachedVotes
  if (date !== undefined) {
    filteredVotes = cachedVotes.filter(vote =>
      getDateString(vote.date) === getDateString(date))
  }

  return filteredVotes
}
