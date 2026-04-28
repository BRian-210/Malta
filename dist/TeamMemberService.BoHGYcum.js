import { h as getSupabaseClient } from "./card.BAbcu8kL.js";
const teamMemberDataList = [{
  id: "team-Bryan",
  name: "Bryan",
  role: "Architect",
  specialty: "Residential Concept Design",
  license: "Malta Consultant",
  bio: "Bryan leads concept development and planning submissions for homes, small developments, and heritage-sensitive projects.",
  avatarImageUrl: "#",
  yearsExperience: 14,
  featured: true,
  sortOrder: 1
}, {
  id: "team-Peter",
  name: "Peter ",
  role: "Structural Engineer",
  specialty: "Masonry Assessment and Reinforcement",
  license: "Chartered Engineer",
  bio: "Peter focuses on load-bearing reviews, reinforcement strategies, and technical coordination for renovation and extension works.",
  avatarImageUrl: "#",
  yearsExperience: 16,
  featured: true,
  sortOrder: 2
}, {
  id: "team-sophie",
  name: "Sophie ",
  role: "Interior Designer",
  specialty: "Space Planning and Finishes",
  license: "Design Professional",
  bio: "Sophie develops interior schemes that combine efficient layouts, durable finishes, and a warm Mediterranean feeling.",
  avatarImageUrl: "#",
  yearsExperience: 11,
  featured: true,
  sortOrder: 3
}, {
  id: "team-john-doe",
  name: "John",
  role: "Project Consultant",
  specialty: "Site Inspections and Compliance",
  license: "Construction Consultant",
  bio: "John advises clients on surveys, site feasibility, and the practical steps required to move a project forward with confidence.",
  avatarImageUrl: "#",
  yearsExperience: 9,
  featured: false,
  sortOrder: 4
}];
function getAll() {
  const persisted = loadPersisted();
  return persisted ?? teamMemberDataList;
}
function getById(id) {
  return getAll().find((item) => item.id === id);
}
function query(params) {
  const keyword = params.keyword?.trim().toLowerCase() ?? "";
  const filter = params.filter ?? {};
  const sortKey = params.sortKey ?? "sortOrder";
  const sortDirection = params.sortDirection ?? "asc";
  return getAll().filter((item) => {
    const matchKeyword = !keyword || [item.name, item.role, item.specialty, item.license, item.bio].join(" ").toLowerCase().includes(keyword);
    const matchFilter = Object.entries(filter).every(([key, val]) => {
      if (val === void 0) return true;
      const itemVal = item[key];
      return Array.isArray(val) ? val.includes(itemVal) : itemVal === val;
    });
    return matchKeyword && matchFilter;
  }).sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av === bv) return 0;
    const order = av > bv ? 1 : -1;
    return sortDirection === "asc" ? order : -order;
  });
}
function loadPersisted() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("teamMemberDataList");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("teamMemberDataList", JSON.stringify(items));
}
const TEAM_MEMBERS_TABLE = "team_members";
async function fetchAllShared() {
  const supabase = getSupabaseClient();
  if (!supabase) return getAll();
  const {
    data,
    error
  } = await supabase.from(TEAM_MEMBERS_TABLE).select("*").order("sortOrder", {
    ascending: true
  });
  if (error || !data) {
    console.error("Failed to fetch shared team members", error);
    return getAll();
  }
  return data;
}
async function replaceAllShared(items) {
  const supabase = getSupabaseClient();
  if (!supabase) {
    savePersisted(items);
    return items;
  }
  const ids = items.map((item) => item.id);
  const {
    error: upsertError
  } = await supabase.from(TEAM_MEMBERS_TABLE).upsert(items, {
    onConflict: "id"
  });
  if (upsertError) throw upsertError;
  if (ids.length > 0) {
    const {
      error: cleanupError
    } = await supabase.from(TEAM_MEMBERS_TABLE).delete().not("id", "in", `(${ids.map((id) => `"${id}"`).join(",")})`);
    if (cleanupError) {
      console.error("Failed to clean removed shared team members", cleanupError);
    }
  } else {
    const {
      error: clearError
    } = await supabase.from(TEAM_MEMBERS_TABLE).delete().neq("id", "");
    if (clearError) {
      console.error("Failed to clear shared team members", clearError);
    }
  }
  return fetchAllShared();
}
function subscribeToSharedTeamMembers(onChange) {
  const supabase = getSupabaseClient();
  if (!supabase) return () => void 0;
  const channel = supabase.channel("team-members-realtime").on("postgres_changes", {
    event: "*",
    schema: "public",
    table: TEAM_MEMBERS_TABLE
  }, onChange).subscribe();
  return () => {
    void supabase.removeChannel(channel);
  };
}
const TeamMemberService = {
  getAll,
  getById,
  query,
  loadPersisted,
  savePersisted,
  fetchAllShared,
  replaceAllShared,
  subscribeToSharedTeamMembers
};
export {
  TeamMemberService as T,
  fetchAllShared as f,
  query as q,
  subscribeToSharedTeamMembers as s,
  teamMemberDataList as t
};
