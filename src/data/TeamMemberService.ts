import type { TeamMemberData } from './TeamMemberData'
import { getSupabaseClient } from '@/lib/supabaseClient'

export type TeamMemberFilterKey = 'role' | 'specialty' | 'featured'

export const teamMemberDataList: TeamMemberData[] = [
  {
    id: 'team-Bryan',
    name: 'Bryan',
    role: 'Architect',
    specialty: 'Residential Concept Design',
    license: 'Malta Consultant',
    bio: 'Bryan leads concept development and planning submissions for homes, small developments, and heritage-sensitive projects.',
    avatarImageUrl: '#',
    yearsExperience: 14,
    featured: true,
    sortOrder: 1
  },
  {
    id: 'team-Peter',
    name: 'Peter ',
    role: 'Structural Engineer',
    specialty: 'Masonry Assessment and Reinforcement',
    license: 'Chartered Engineer',
    bio: 'Peter focuses on load-bearing reviews, reinforcement strategies, and technical coordination for renovation and extension works.',
    avatarImageUrl: '#',
    yearsExperience: 16,
    featured: true,
    sortOrder: 2
  },
  {
    id: 'team-sophie',
    name: 'Sophie ',
    role: 'Interior Designer',
    specialty: 'Space Planning and Finishes',
    license: 'Design Professional',
    bio: 'Sophie develops interior schemes that combine efficient layouts, durable finishes, and a warm Mediterranean feeling.',
    avatarImageUrl: '#',
    yearsExperience: 11,
    featured: true,
    sortOrder: 3
  },
  {
    id: 'team-john-doe',
    name: 'John',
    role: 'Project Consultant',
    specialty: 'Site Inspections and Compliance',
    license: 'Construction Consultant',
    bio: 'John advises clients on surveys, site feasibility, and the practical steps required to move a project forward with confidence.',
    avatarImageUrl: '#',
    yearsExperience: 9,
    featured: false,
    sortOrder: 4
  }
]

export function getAll(): TeamMemberData[] {
  const persisted = loadPersisted()
  return persisted ?? teamMemberDataList
}

export function getById(id: string): TeamMemberData | undefined {
  return getAll().find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<TeamMemberFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): TeamMemberData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  const sortKey = params.sortKey ?? 'sortOrder'
  const sortDirection = params.sortDirection ?? 'asc'

  return getAll()
    .filter((item) => {
      const matchKeyword =
        !keyword ||
        [item.name, item.role, item.specialty, item.license, item.bio]
          .join(' ')
          .toLowerCase()
          .includes(keyword)

      const matchFilter = Object.entries(filter).every(([key, val]) => {
        if (val === undefined) return true
        const itemVal = (item as any)[key]
        return Array.isArray(val) ? val.includes(itemVal) : itemVal === val
      })

      return matchKeyword && matchFilter
    })
    .sort((a, b) => {
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      const order = av > bv ? 1 : -1
      return sortDirection === 'asc' ? order : -order
    })
}

export function loadPersisted(): TeamMemberData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('teamMemberDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as TeamMemberData[]
  } catch {
    return null
  }
}

export function savePersisted(items: TeamMemberData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('teamMemberDataList', JSON.stringify(items))
}

const TEAM_MEMBERS_TABLE = 'team_members'

export async function fetchAllShared(): Promise<TeamMemberData[]> {
  const supabase = getSupabaseClient()
  if (!supabase) return getAll()

  const { data, error } = await supabase
    .from(TEAM_MEMBERS_TABLE)
    .select('*')
    .order('sortOrder', { ascending: true })

  if (error || !data) {
    console.error('Failed to fetch shared team members', error)
    return getAll()
  }

  return data as TeamMemberData[]
}

export async function replaceAllShared(items: TeamMemberData[]): Promise<TeamMemberData[]> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    savePersisted(items)
    return items
  }

  const ids = items.map((item) => item.id)

  const { error: upsertError } = await supabase
    .from(TEAM_MEMBERS_TABLE)
    .upsert(items, { onConflict: 'id' })

  if (upsertError) throw upsertError

  if (ids.length > 0) {
    const { error: cleanupError } = await supabase
      .from(TEAM_MEMBERS_TABLE)
      .delete()
      .not('id', 'in', `(${ids.map((id) => `"${id}"`).join(',')})`)
    if (cleanupError) {
      console.error('Failed to clean removed shared team members', cleanupError)
    }
  } else {
    const { error: clearError } = await supabase.from(TEAM_MEMBERS_TABLE).delete().neq('id', '')
    if (clearError) {
      console.error('Failed to clear shared team members', clearError)
    }
  }

  return fetchAllShared()
}

export function subscribeToSharedTeamMembers(onChange: () => void): () => void {
  const supabase = getSupabaseClient()
  if (!supabase) return () => undefined

  const channel = supabase
    .channel('team-members-realtime')
    .on('postgres_changes', { event: '*', schema: 'public', table: TEAM_MEMBERS_TABLE }, onChange)
    .subscribe()

  return () => {
    void supabase.removeChannel(channel)
  }
}

export const TeamMemberService = {
  getAll,
  getById,
  query,
  loadPersisted,
  savePersisted,
  fetchAllShared,
  replaceAllShared,
  subscribeToSharedTeamMembers,
}
