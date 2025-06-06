import { readFile } from 'node:fs/promises'

export type Member = {
  id: string
  name: string
  description: string
  seat: string
  avatarUrl: string
  firstName: string
  lastName: string
  birthDate: string | null
  startDate: Date | null
  endDate: Date | null
  politicalGroup: string | null
  politicalParty: string | null
  address: string | null
  phone: string | null
  email: string | null
}

let cachedMembers: Member[] | null = null

/**
 * Return members sorted by start date (ASC).
 */
export const findMembers = async (): Promise<Member[]> => {
  if (cachedMembers === null) {
    const file = await readFile(process.cwd() + '/data/members.json', 'utf8')
    cachedMembers = JSON.parse(file).map((member: any): Member => ({
      ...member,
      startDate: new Date(member.startDate),
      endDate: new Date(member.endDate),
    })) as Member[]
    cachedMembers.sort((a: Member, b: Member) =>
      (a.startDate?.getTime() ?? 0) - (b.startDate?.getTime() ?? 0))
  }
  return cachedMembers
}
