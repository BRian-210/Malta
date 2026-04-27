-- Run this in Supabase SQL editor.
-- Enables shared, multi-user content across visitors.

create table if not exists public.projects (
  id text primary key,
  slug text not null,
  title text not null,
  category text not null,
  "serviceType" text not null,
  location text not null,
  "yearCompleted" integer not null,
  "clientType" text not null,
  "scopeSummary" text not null,
  "challengeSummary" text not null,
  "solutionSummary" text not null,
  "resultsSummary" text not null,
  "coverImageUrl" text not null,
  "galleryImageUrls" jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  "sortOrder" integer not null default 0
);

create table if not exists public.team_members (
  id text primary key,
  name text not null,
  role text not null,
  specialty text not null,
  license text not null,
  bio text not null,
  "avatarImageUrl" text not null,
  "yearsExperience" integer not null default 0,
  featured boolean not null default false,
  "sortOrder" integer not null default 0
);

create table if not exists public.consultation_requests (
  id text primary key,
  "referenceId" text not null,
  "clientName" text not null,
  email text not null,
  phone text not null,
  "selectedServiceType" text not null,
  "propertyLocation" text not null,
  "propertyCategory" text not null,
  "budgetRange" text not null,
  "projectStage" text not null,
  notes text not null,
  subject text,
  source text,
  "preferredContactMethod" text not null,
  "createdAt" timestamptz not null,
  status text not null
);

alter table public.projects enable row level security;
alter table public.team_members enable row level security;
alter table public.consultation_requests enable row level security;

drop policy if exists "public read projects" on public.projects;
create policy "public read projects" on public.projects for select using (true);
drop policy if exists "public write projects" on public.projects;
create policy "public write projects" on public.projects for all using (true) with check (true);

drop policy if exists "public read team_members" on public.team_members;
create policy "public read team_members" on public.team_members for select using (true);
drop policy if exists "public write team_members" on public.team_members;
create policy "public write team_members" on public.team_members for all using (true) with check (true);

drop policy if exists "public read consultation_requests" on public.consultation_requests;
create policy "public read consultation_requests" on public.consultation_requests for select using (true);
drop policy if exists "public write consultation_requests" on public.consultation_requests;
create policy "public write consultation_requests" on public.consultation_requests for all using (true) with check (true);

alter publication supabase_realtime add table public.projects;
alter publication supabase_realtime add table public.team_members;
alter publication supabase_realtime add table public.consultation_requests;
