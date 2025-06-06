import { findVotes } from './findVotes'
import { getDateString } from './utils'

/**
 * Find all unique dates where votes occurred.
 */
export const findVoteDates = async (): Promise<Date[]> => {
  const votes = await findVotes({})
  return Array.from(new Set(
    votes.map(vote => getDateString(vote.date))
  )).map(dateString => new Date(dateString))
}
