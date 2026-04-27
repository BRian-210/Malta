import type { ConsultationRequestData } from './ConsultationRequestData'
import { getById as getServiceById } from './ServiceService'
import { getSupabaseClient } from '@/lib/supabaseClient'

export type ConsultationRequestFilterKey = 'selectedServiceType' | 'status' | 'preferredContactMethod'

export interface ConsultationRequestVO extends ConsultationRequestData {
  serviceName?: string
  serviceRoute?: string
}

export const consultationRequestDataList: ConsultationRequestData[] = [
  {
    id: 'booking-001',
    referenceId: 'MBA-2026-0412',
    clientName: 'john doe',
    email: 'johndoe@example.com',
    phone: '+254 XXX XXX',
    selectedServiceType: 'service-architectural-design',
    propertyLocation: 'Sliema',
    propertyCategory: 'Residential Apartment',
    budgetRange: '€25,000 - €50,000',
    projectStage: 'Concept Development',
    notes: 'Client wants a compact but elegant redesign with planning guidance for future upgrades.',
    preferredContactMethod: 'Email',
    createdAt: '2026-04-12T09:30:00Z',
    status: 'Received'
  },
  {
    id: 'booking-002',
    referenceId: 'MBA-2026-0415',
    clientName: 'Mark Vella',
    email: 'johndoe.com',
    phone: '+254 XXXX XXXX',
    selectedServiceType: 'service-structural-design',
    propertyLocation: 'Mosta',
    propertyCategory: 'Family House',
    budgetRange: '€10,000 - €25,000',
    projectStage: 'Renovation Planning',
    notes: 'Opening changes and reinforcement advice needed for ground floor alterations.',
    preferredContactMethod: 'Phone',
    createdAt: '2026-04-15T14:10:00Z',
    status: 'In Review'
  },
  {
    id: 'booking-003',
    referenceId: 'MBA-2026-0417',
    clientName: 'Nadine Borg',
    email: 'johndoe@example.com',
    phone: '+254 XXXX XXXX',
    selectedServiceType: 'service-interior-design',
    propertyLocation: 'Qawra',
    propertyCategory: 'Holiday Apartment',
    budgetRange: '€15,000 - €30,000',
    projectStage: 'Interior Refresh',
    notes: 'Short-stay rental needs durable finishes and better storage.',
    preferredContactMethod: 'Email',
    createdAt: '2026-04-17T11:05:00Z',
    status: 'Received'
  }
]

export function getAll(): ConsultationRequestData[] {
  const persisted = loadPersisted()
  return persisted ?? consultationRequestDataList
}

export function getById(id: string): ConsultationRequestData | undefined {
  return getAll().find((item) => item.id === id)
}

export function getByReferenceId(referenceId: string): ConsultationRequestData | undefined {
  return getAll().find((item) => item.referenceId === referenceId)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<ConsultationRequestFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): ConsultationRequestData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  const sortKey = params.sortKey ?? 'createdAt'
  const sortDirection = params.sortDirection ?? 'desc'

  return getAll()
    .filter((item) => {
      const matchKeyword =
        !keyword ||
        [item.referenceId, item.clientName, item.email, item.phone, item.propertyLocation, item.notes]
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

export function getByReferenceIdVO(referenceId: string): ConsultationRequestVO | undefined {
  const item = getByReferenceId(referenceId)
  if (!item) return undefined
  const service = getServiceById(item.selectedServiceType)
  return {
    ...item,
    serviceName: service?.name,
    serviceRoute: service?.route
  }
}

export function loadPersisted(): ConsultationRequestData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('consultationRequestDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as ConsultationRequestData[]
  } catch {
    return null
  }
}

export function savePersisted(items: ConsultationRequestData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('consultationRequestDataList', JSON.stringify(items))
}

const CONSULTATION_REQUESTS_TABLE = 'consultation_requests'

export async function fetchAllShared(): Promise<ConsultationRequestData[]> {
  const supabase = getSupabaseClient()
  if (!supabase) return getAll()

  const { data, error } = await supabase
    .from(CONSULTATION_REQUESTS_TABLE)
    .select('*')
    .order('createdAt', { ascending: false })

  if (error || !data) {
    console.error('Failed to fetch shared consultation requests', error)
    return getAll()
  }

  return data as ConsultationRequestData[]
}

export async function replaceAllShared(items: ConsultationRequestData[]): Promise<ConsultationRequestData[]> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    savePersisted(items)
    return items
  }

  const ids = items.map((item) => item.id)

  const { error: upsertError } = await supabase
    .from(CONSULTATION_REQUESTS_TABLE)
    .upsert(items, { onConflict: 'id' })
  if (upsertError) throw upsertError

  if (ids.length > 0) {
    const { error: cleanupError } = await supabase
      .from(CONSULTATION_REQUESTS_TABLE)
      .delete()
      .not('id', 'in', `(${ids.map((id) => `"${id}"`).join(',')})`)
    if (cleanupError) {
      console.error('Failed to clean removed shared consultation requests', cleanupError)
    }
  } else {
    const { error: clearError } = await supabase.from(CONSULTATION_REQUESTS_TABLE).delete().neq('id', '')
    if (clearError) {
      console.error('Failed to clear shared consultation requests', clearError)
    }
  }

  return fetchAllShared()
}

export async function createFromContactFormShared(input: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}): Promise<ConsultationRequestData> {
  const request = createFromContactForm(input)
  const supabase = getSupabaseClient()
  if (!supabase) return request

  const { error } = await supabase
    .from(CONSULTATION_REQUESTS_TABLE)
    .upsert(request, { onConflict: 'id' })
  if (error) {
    console.error('Failed to save shared contact request', error)
  }

  return request
}

export function subscribeToSharedConsultationRequests(onChange: () => void): () => void {
  const supabase = getSupabaseClient()
  if (!supabase) return () => undefined

  const channel = supabase
    .channel('consultation-requests-realtime')
    .on('postgres_changes', { event: '*', schema: 'public', table: CONSULTATION_REQUESTS_TABLE }, onChange)
    .subscribe()

  return () => {
    void supabase.removeChannel(channel)
  }
}

export function createFromContactForm(input: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}): ConsultationRequestData {
  const timestamp = new Date()
  const request: ConsultationRequestData = {
    id: `contact-${timestamp.getTime()}`,
    referenceId: `MBA-${timestamp.getFullYear()}-${String(timestamp.getMonth() + 1).padStart(2, '0')}${String(timestamp.getDate()).padStart(2, '0')}-${String(timestamp.getHours()).padStart(2, '0')}${String(timestamp.getMinutes()).padStart(2, '0')}`,
    clientName: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    selectedServiceType: 'service-consultation',
    propertyLocation: 'Not provided',
    propertyCategory: input.subject.trim() || 'General Inquiry',
    budgetRange: 'Not specified',
    projectStage: 'Contact Form Inquiry',
    notes: input.message.trim(),
    subject: input.subject.trim(),
    source: 'Contact Form',
    preferredContactMethod: input.phone.trim() ? 'Phone or Email' : 'Email',
    createdAt: timestamp.toISOString(),
    status: 'Received'
  }

  savePersisted([request, ...getAll()])
  return request
}
