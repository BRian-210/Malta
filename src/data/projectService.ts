import type { ProjectData } from './projectData'
import { getById as getServiceById } from './ServiceService'
import { getSupabaseClient } from '@/lib/supabaseClient'

export type ProjectFilterKey = 'category' | 'serviceType' | 'featured' | 'location'

export interface ProjectVO extends ProjectData {
  serviceName?: string
  serviceRoute?: string
}

export const projectDataList: ProjectData[] = [
  {
    id: 'project-kutus three bedroom restoration',
    slug: 'kutus house-restoration',
    title: 'Kutus House Restoration',
    category: ' Premium residential',
    serviceType: 'service-architectural-design',
    location: 'Kutus',
    yearCompleted: 2025,
    clientType: 'Private Residence',
    scopeSummary: 'Restoration and planning coordination for a compact premium house.',
    challengeSummary: 'The original masonry structure required careful adaptation to preserve heritage character while improving everyday liveability.',
    solutionSummary: 'We prepared a restoration-led architectural package, coordinated structural reinforcement, and refined the interior flow for modern family use.',
    resultsSummary: 'The home now balances heritage authenticity with brighter interiors and smoother circulation.',
    coverImageUrl: '#',
    galleryImageUrls: [
      '#'
    ],
    featured: true,
    sortOrder: 1
  },
  {
    id: 'project-sliema-apartment-interior',
    slug: 'sliema-apartment-interior',
    title: 'Sliema Apartment Interior',
    category: 'Residential',
    serviceType: 'service-interior-design',
    location: 'Meru',
    yearCompleted: 2024,
    clientType: 'Apartment Owner',
    scopeSummary: 'Full interior redesign for a modernistic apartment.',
    challengeSummary: 'The apartment needed stronger storage, better daylight distribution, and a more cohesive material palette.',
    solutionSummary: 'We reorganized the layout, introduced built-in storage, and selected finishes that complement sea views and bright daylight.',
    resultsSummary: 'The interior now feels spacious, practical, and calm with a more premium coastal atmosphere.',
    coverImageUrl: '#',
    galleryImageUrls: [
      '#',
      '#',
      '#',
      '#'
    ],
    featured: true,
    sortOrder: 2
  },
  {
    id: 'project-narok-family-home-structure',
    slug: 'narok-family-home-structure',
    title: 'Narok Family Home Structure Upgrade',
    category: 'Residential',
    serviceType: 'service-structural-design',
    location: 'Narok',
    yearCompleted: 2025,
    clientType: 'Family Home',
    scopeSummary: 'Structural assessment and strengthening for a two-level family residence.',
    challengeSummary: 'The existing layout required safer load transfer for an extended living area and altered openings.',
    solutionSummary: 'We completed a detailed structural review, specified reinforcement measures, and coordinated the works with the build team.',
    resultsSummary: 'The residence now supports the updated layout confidently while meeting the intended use requirements.',
    coverImageUrl: '#',
    galleryImageUrls: [
      '#',
      '#',
      '#',
      '#'
    ],
    featured: true,
    sortOrder: 3
  },
  {
    id: 'project-gozo-villa-concept',
    slug: 'gozo-villa-concept',
    title: 'Gozo Villa Concept',
    category: 'Residential',
    serviceType: 'service-architectural-design',
    location: 'Kiambu',
    yearCompleted: 2024,
    clientType: 'Private Client',
    scopeSummary: 'Concept design and planning support for a new villa on a sloped site.',
    challengeSummary: 'The site gradient required a layout that maintained views without overcomplicating access and circulation.',
    solutionSummary: 'We developed massing studies, 3D views, and a planning-oriented concept to make the most of the site conditions.',
    resultsSummary: 'The proposal provided a clear route toward permissions with strong visual identity and practical zoning.',
    coverImageUrl: '#',
    galleryImageUrls: [
      '#',
      '#',
      '#',
      '#'
    ],
    featured: false,
    sortOrder: 4
  },
  {
    id: 'project-njoro-office-fitout',
    slug: 'njoro-office-fitout',
    title: 'Njoro Office Fit-Out',
    category: 'Commercial',
    serviceType: 'service-interior-design',
    location: 'Njoro',
    yearCompleted: 2023,
    clientType: 'Business Tenant',
    scopeSummary: 'Interior planning and finishes for a compact office fit-out.',
    challengeSummary: 'The business needed better collaboration space while maintaining private meeting areas.',
    solutionSummary: 'We reworked circulation, specified durable materials, and delivered a polished, efficient interior concept.',
    resultsSummary: 'The office now supports both focused work and client-facing meetings with a more professional look.',
    coverImageUrl: '#',
    galleryImageUrls: [
      '#',
      '#',
      '#',
      '#'
    ],
    featured: false,
    sortOrder: 5
  },
  {
    id: 'project-embu-villa-compliance',
    slug: 'embu-villa-compliance',
    title: 'Embu Villa Compliance Review',
    category: 'Residential',
    serviceType: 'service-consultation',
    location: 'Embu',
    yearCompleted: 2024,
    clientType: 'Villa Owner',
    scopeSummary: 'Site inspection and compliance guidance before a renovation tender.',
    challengeSummary: 'The client needed clarity on the property condition, planning implications, and next steps.',
    solutionSummary: 'We documented the site, outlined compliance considerations, and advised on a phased project approach.',
    resultsSummary: 'The client moved forward with confidence and a clearer budget and approval strategy.',
    coverImageUrl: '#',
    galleryImageUrls: [
      '#',
      '#',
      '#',
      '#'
    ],
    featured: false,
    sortOrder: 6
  },
  {
    id: 'project-qawra-seaside-apartment',
    slug: 'qawra-seaside-apartment',
    title: 'Qawra Seaside Apartment',
    category: 'Residential',
    serviceType: 'service-interior-design',
    location: 'Qawra',
    yearCompleted: 2025,
    clientType: 'Holiday Home Owner',
    scopeSummary: 'Interior refresh for a seaside apartment aimed at short-stay comfort.',
    challengeSummary: 'The apartment needed durable finishes and a welcoming atmosphere for repeated guest use.',
    solutionSummary: 'We selected resilient materials, simplified the palette, and added practical built-ins for storage.',
    resultsSummary: 'The apartment feels brighter, easier to maintain, and more appealing for guests.',
    coverImageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/dd144de9-e638-446a-9733-060a20811722.png',
    galleryImageUrls: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/eb1d3d8e-7b70-474e-bf67-53fdd55a2922.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/4dde789d-cf72-4489-b4a1-c0315bd97476.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/326a7ee5-5c41-4909-b56e-ea49284b1a51.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/544f82c4-aaea-4dd2-874c-ebe83c90baf3.png'
    ],
    featured: false,
    sortOrder: 7
  },
  {
    id: 'project-rabat-townhouse-engineering',
    slug: 'rabat-townhouse-engineering',
    title: 'Rabat Townhouse Engineering Review',
    category: 'Heritage',
    serviceType: 'service-structural-design',
    location: 'Rabat',
    yearCompleted: 2023,
    clientType: 'Townhouse Owner',
    scopeSummary: 'Engineering review for a townhouse refurbishment and internal opening changes.',
    challengeSummary: 'The project required confidence that the altered openings would remain structurally safe.',
    solutionSummary: 'We reviewed the building fabric, proposed reinforcement, and coordinated the technical documentation.',
    resultsSummary: 'The renovation advanced with a clearer structural plan and improved construction certainty.',
    coverImageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/e17135bb-5083-442d-baab-c775a94b5be1.png',
    galleryImageUrls: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/fb79b731-10a4-4ef1-a0af-e7a29b7854f3.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/26d15500-0e42-4d3a-b8b9-37a0768b55da.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/0c61a606-1b63-49f5-836c-7085f67565b2.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/315a2a2e-b68d-41fd-8e5b-0c9108e5b90b.png'
    ],
    featured: false,
    sortOrder: 8
  },
  {
    id: 'project-st-pauls-bay-kitchen-renovation',
    slug: 'st-pauls-bay-kitchen-renovation',
    title: 'St. Paul’s Bay Kitchen Renovation',
    category: 'Residential',
    serviceType: 'service-interior-design',
    location: "St. Paul's Bay",
    yearCompleted: 2024,
    clientType: 'Couple Homeowners',
    scopeSummary: 'Kitchen and dining interior redesign with improved function and storage.',
    challengeSummary: 'The existing kitchen lacked workspace and did not connect well to the dining area.',
    solutionSummary: 'We improved the layout, introduced a better work triangle, and used warm finishes to unify the space.',
    resultsSummary: 'The kitchen now functions smoothly for everyday life and entertaining.',
    coverImageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/73eda897-b96e-45cf-8ed9-8b64eddf64c3.png',
    galleryImageUrls: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/65beb335-aabe-4c6c-bcac-86a83e63d188.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/b1796d32-bec9-4685-aa1c-e00cf4793508.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/9ac83ff7-523d-41bc-a006-2b879d9a6661.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/6caab0e1-ce09-41cc-a414-c9d88e46914b.png'
    ],
    featured: false,
    sortOrder: 9
  },
  {
    id: 'project-marsaskala-sea-view-design',
    slug: 'marsaskala-sea-view-design',
    title: 'Marsaskala Sea View Design',
    category: 'Residential',
    serviceType: 'service-architectural-design',
    location: 'Marsaskala',
    yearCompleted: 2025,
    clientType: 'Villa Developer',
    scopeSummary: 'Architectural concept for a sea-view residence with strong indoor-outdoor connection.',
    challengeSummary: 'The design needed to maximize views while staying practical for Maltese climate conditions.',
    solutionSummary: 'We created a layered facade, shaded openings, and a concept tuned for natural ventilation.',
    resultsSummary: 'The scheme delivered a strong identity and a clear route into the approval stage.',
    coverImageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/bc86e61f-6cd8-4f61-97be-36921aeb24a9.png',
    galleryImageUrls: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/50b9f2da-5e06-4675-b82f-ad76f7ec1f58.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/4b6d40b1-bad4-4481-9cdc-74bf550ac5f6.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/9f4b4e15-9a73-464a-9f1f-3cc86057c1d7.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/6231cb91-cf61-4c78-bed3-73f3b74c0faa.png'
    ],
    featured: false,
    sortOrder: 10
  },
  {
    id: 'project-ghajnsielem-family-home',
    slug: 'ghajnsielem-family-home',
    title: 'Għajnsielem Family Home Consultation',
    category: 'Residential',
    serviceType: 'service-consultation',
    location: 'Għajnsielem',
    yearCompleted: 2023,
    clientType: 'Homeowner',
    scopeSummary: 'Initial consultation and project roadmap for a phased extension plan.',
    challengeSummary: 'The homeowner needed to understand constraints, timing, and approvals before design work began.',
    solutionSummary: 'We completed an on-site review and issued practical guidance on scope, sequencing, and budget priorities.',
    resultsSummary: 'The family entered the design phase with a more realistic and organized project brief.',
    coverImageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/ff2f7c95-d7a0-429f-b4e5-5cf1a5198f15.png',
    galleryImageUrls: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/f6d41b4b-4ec7-4410-8e8a-bbb873bf83d9.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/dcf1184b-f6dd-4faa-8b4e-b79743b4aec8.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/b4c6ef4a-b820-4eea-80a9-f2d348e3c371.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/0b6bfe4b-8c86-4e1a-882e-9c213f351efc.png'
    ],
    featured: false,
    sortOrder: 11
  },
  {
    id: 'project-mqabba-heritage-courtyard',
    slug: 'mqabba-heritage-courtyard',
    title: 'Mqabba Heritage Courtyard',
    category: 'Heritage',
    serviceType: 'service-architectural-design',
    location: 'Mqabba',
    yearCompleted: 2022,
    clientType: 'Heritage Property Trust',
    scopeSummary: 'Architectural adaptation of a courtyard property with sensitive conservation goals.',
    challengeSummary: 'The courtyard needed updated use without losing its traditional Maltese character.',
    solutionSummary: 'We designed a respectful intervention strategy with subdued detailing and careful material choices.',
    resultsSummary: 'The property kept its heritage identity while becoming more usable for contemporary needs.',
    coverImageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/a751588a-e130-479f-a42c-be7a560cf05b.png',
    galleryImageUrls: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/b0900f41-c21a-48fb-9d2d-cb0df9ceec69.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/6a8c5ac7-80ce-41c0-8d75-bb197b23ea34.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/8d1acc67-dbc0-4bb1-83c3-2ec7ecd33e0f.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/4/26/1d89d5b3-8565-45dc-831f-2a91f1b4daf5.png'
    ],
    featured: false,
    sortOrder: 12
  }
]

export function getAll(): ProjectData[] {
  const persisted = loadPersisted()
  return persisted ?? projectDataList
}

export function getById(id: string): ProjectData | undefined {
  return getAll().find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<ProjectFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): ProjectData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  const sortKey = params.sortKey ?? 'sortOrder'
  const sortDirection = params.sortDirection ?? 'asc'

  return getAll()
    .filter((item) => {
      const matchKeyword =
        !keyword ||
        [item.title, item.category, item.location, item.scopeSummary, item.challengeSummary, item.solutionSummary, item.resultsSummary]
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

export function getByIdVO(id: string): ProjectVO | undefined {
  const item = getById(id)
  if (!item) return undefined
  const service = getServiceById(item.serviceType)
  return {
    ...item,
    serviceName: service?.name,
    serviceRoute: service?.route
  }
}

export function loadPersisted(): ProjectData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('projectDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as ProjectData[]
  } catch {
    return null
  }
}

export function savePersisted(items: ProjectData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('projectDataList', JSON.stringify(items))
}

const PROJECTS_TABLE = 'projects'

export async function fetchAllShared(): Promise<ProjectData[]> {
  const supabase = getSupabaseClient()
  if (!supabase) return getAll()

  const { data, error } = await supabase
    .from(PROJECTS_TABLE)
    .select('*')
    .order('sortOrder', { ascending: true })

  if (error || !data) {
    console.error('Failed to fetch shared projects', error)
    return getAll()
  }

  return data as ProjectData[]
}

export async function replaceAllShared(items: ProjectData[]): Promise<ProjectData[]> {
  const supabase = getSupabaseClient()
  if (!supabase) {
    savePersisted(items)
    return items
  }

  const ids = items.map((item) => item.id)

  const { error: upsertError } = await supabase
    .from(PROJECTS_TABLE)
    .upsert(items, { onConflict: 'id' })

  if (upsertError) throw upsertError

  if (ids.length > 0) {
    const { error: cleanupError } = await supabase
      .from(PROJECTS_TABLE)
      .delete()
      .not('id', 'in', `(${ids.map((id) => `"${id}"`).join(',')})`)

    if (cleanupError) {
      console.error('Failed to clean removed shared projects', cleanupError)
    }
  } else {
    const { error: clearError } = await supabase.from(PROJECTS_TABLE).delete().neq('id', '')
    if (clearError) {
      console.error('Failed to clear shared projects', clearError)
    }
  }

  return fetchAllShared()
}

export function subscribeToSharedProjects(onChange: () => void): () => void {
  const supabase = getSupabaseClient()
  if (!supabase) return () => undefined

  const channel = supabase
    .channel('projects-realtime')
    .on('postgres_changes', { event: '*', schema: 'public', table: PROJECTS_TABLE }, onChange)
    .subscribe()

  return () => {
    void supabase.removeChannel(channel)
  }
}
