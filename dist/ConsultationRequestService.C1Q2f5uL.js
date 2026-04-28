import { jsx } from "react/jsx-runtime";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { d as cn, h as getSupabaseClient } from "./card.BAbcu8kL.js";
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const Textarea = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx("textarea", { className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref, ...props, "data-source-file": "src/components/ui/textarea.tsx", "data-source-line-start": "10", "data-source-line-end": "17" });
});
Textarea.displayName = "Textarea";
const consultationRequestDataList = [{
  id: "booking-001",
  referenceId: "MBA-2026-0412",
  clientName: "john doe",
  email: "johndoe@example.com",
  phone: "+254 XXX XXX",
  selectedServiceType: "service-architectural-design",
  propertyLocation: "Sliema",
  propertyCategory: "Residential Apartment",
  budgetRange: "€25,000 - €50,000",
  projectStage: "Concept Development",
  notes: "Client wants a compact but elegant redesign with planning guidance for future upgrades.",
  preferredContactMethod: "Email",
  createdAt: "2026-04-12T09:30:00Z",
  status: "Received"
}, {
  id: "booking-002",
  referenceId: "MBA-2026-0415",
  clientName: "Mark Vella",
  email: "johndoe.com",
  phone: "+254 XXXX XXXX",
  selectedServiceType: "service-structural-design",
  propertyLocation: "Mosta",
  propertyCategory: "Family House",
  budgetRange: "€10,000 - €25,000",
  projectStage: "Renovation Planning",
  notes: "Opening changes and reinforcement advice needed for ground floor alterations.",
  preferredContactMethod: "Phone",
  createdAt: "2026-04-15T14:10:00Z",
  status: "In Review"
}, {
  id: "booking-003",
  referenceId: "MBA-2026-0417",
  clientName: "Nadine Borg",
  email: "johndoe@example.com",
  phone: "+254 XXXX XXXX",
  selectedServiceType: "service-interior-design",
  propertyLocation: "Qawra",
  propertyCategory: "Holiday Apartment",
  budgetRange: "€15,000 - €30,000",
  projectStage: "Interior Refresh",
  notes: "Short-stay rental needs durable finishes and better storage.",
  preferredContactMethod: "Email",
  createdAt: "2026-04-17T11:05:00Z",
  status: "Received"
}];
function getAll() {
  const persisted = loadPersisted();
  return persisted ?? consultationRequestDataList;
}
function loadPersisted() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("consultationRequestDataList");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("consultationRequestDataList", JSON.stringify(items));
}
const CONSULTATION_REQUESTS_TABLE = "consultation_requests";
async function fetchAllShared() {
  const supabase = getSupabaseClient();
  if (!supabase) return getAll();
  const {
    data,
    error
  } = await supabase.from(CONSULTATION_REQUESTS_TABLE).select("*").order("createdAt", {
    ascending: false
  });
  if (error || !data) {
    console.error("Failed to fetch shared consultation requests", error);
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
  } = await supabase.from(CONSULTATION_REQUESTS_TABLE).upsert(items, {
    onConflict: "id"
  });
  if (upsertError) throw upsertError;
  if (ids.length > 0) {
    const {
      error: cleanupError
    } = await supabase.from(CONSULTATION_REQUESTS_TABLE).delete().not("id", "in", `(${ids.map((id) => `"${id}"`).join(",")})`);
    if (cleanupError) {
      console.error("Failed to clean removed shared consultation requests", cleanupError);
    }
  } else {
    const {
      error: clearError
    } = await supabase.from(CONSULTATION_REQUESTS_TABLE).delete().neq("id", "");
    if (clearError) {
      console.error("Failed to clear shared consultation requests", clearError);
    }
  }
  return fetchAllShared();
}
async function createFromContactFormShared(input) {
  const request = createFromContactForm(input);
  const supabase = getSupabaseClient();
  if (!supabase) return request;
  const {
    error
  } = await supabase.from(CONSULTATION_REQUESTS_TABLE).upsert(request, {
    onConflict: "id"
  });
  if (error) {
    console.error("Failed to save shared contact request", error);
  }
  return request;
}
function subscribeToSharedConsultationRequests(onChange) {
  const supabase = getSupabaseClient();
  if (!supabase) return () => void 0;
  const channel = supabase.channel("consultation-requests-realtime").on("postgres_changes", {
    event: "*",
    schema: "public",
    table: CONSULTATION_REQUESTS_TABLE
  }, onChange).subscribe();
  return () => {
    void supabase.removeChannel(channel);
  };
}
function createFromContactForm(input) {
  const timestamp = /* @__PURE__ */ new Date();
  const request = {
    id: `contact-${timestamp.getTime()}`,
    referenceId: `MBA-${timestamp.getFullYear()}-${String(timestamp.getMonth() + 1).padStart(2, "0")}${String(timestamp.getDate()).padStart(2, "0")}-${String(timestamp.getHours()).padStart(2, "0")}${String(timestamp.getMinutes()).padStart(2, "0")}`,
    clientName: input.name.trim(),
    email: input.email.trim(),
    phone: input.phone.trim(),
    selectedServiceType: "service-consultation",
    propertyLocation: "Not provided",
    propertyCategory: input.subject.trim() || "General Inquiry",
    budgetRange: "Not specified",
    projectStage: "Contact Form Inquiry",
    notes: input.message.trim(),
    subject: input.subject.trim(),
    source: "Contact Form",
    preferredContactMethod: input.phone.trim() ? "Phone or Email" : "Email",
    createdAt: timestamp.toISOString(),
    status: "Received"
  };
  savePersisted([request, ...getAll()]);
  return request;
}
export {
  Label as L,
  Textarea as T,
  createFromContactFormShared as c,
  fetchAllShared as f,
  replaceAllShared as r,
  subscribeToSharedConsultationRequests as s
};
