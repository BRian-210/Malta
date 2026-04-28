import type { CompanyProfileData } from './CompanyProfileData'

export const companyProfileDataList: CompanyProfileData[] = [
  {
    id: 'company-profile-main',
    companyName: 'Malta Intel Construction Company',
    foundedYear: 2012,
    headline: 'Construction planning, structural safety, and elegant Maltese design under one roof.',
    mission: 'To provide high-quality,cost-effective,timely construction and architectural solutions with a commitment to client satisfaction,safety and innovation..',
    vision: 'To be a leading construction and architectural firm recognized for innovative designs,quality workmanship and sustainable development.',
    description: 'We are a Malta Intel Construction Company focused on structural design, architectural design, interior design, and consultation services.',
    values: ['Technical accuracy', 'Local knowledge', 'Transparent communication', 'Refined design'],
    officeLocation: 'Kush plaza building 1st Floor, Mwea town',
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