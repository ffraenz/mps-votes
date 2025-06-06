import { findMembers, Member } from './findMembers'

const normalizeString = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export const findMember = async (
  args:
    {
      firstName: string
      lastName: string
      date: Date
    }
): Promise<Member | null> => {
  const members = await findMembers()
  return members.findLast(member =>
    normalizeString(member.firstName) ===
      normalizeString(args.firstName) &&
      normalizeString(member.lastName) ===
        normalizeString(args.lastName) &&
      (member.startDate === null || member.startDate <= args.date)
    ) ?? null
}
