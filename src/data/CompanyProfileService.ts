import type { CompanyProfileData } from './CompanyProfileData'

export const companyProfileDataList: CompanyProfileData[] = [
  {
    id: 'company-profile-main',
    companyName: 'Malta Agency for Construction & Design',
    foundedYear: 2012,
    headline: 'Construction planning, structural safety, and elegant Maltese design under one roof.',
    mission: 'To guide Maltese property owners through every stage of design, compliance, and build coordination with clarity and care.',
    vision: 'To be the most trusted local partner for homes that are structurally sound, beautifully designed, and practical to live in.',
    description: 'We are a Malta-based agency focused on structural design, architectural design, interior design, and consultation services for residential and light commercial clients.',
    values: ['Technical accuracy', 'Local knowledge', 'Transparent communication', 'Refined design'],
    officeLocation: 'Mwea, Ngurubani Next to Kplc Offices',
    serviceArea: 'Country Wide',
    sortOrder: 1
  }
]

export function getAll(): CompanyProfileData[] {
  return companyProfileDataList
}

export function getById(id: string): CompanyProfileData | undefined {
  return companyProfileDataList.find((item) => item.id === id)
}

export function loadPersisted(): CompanyProfileData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('companyProfileDataList')
  if (!raw) return null
  try {
    return JSON.parse(raw) as CompanyProfileData[]
  } catch {
    return null
  }
}

export function savePersisted(items: CompanyProfileData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('companyProfileDataList', JSON.stringify(items))
}