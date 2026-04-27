import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SafeIcon from '@/components/common/SafeIcon';
import type { ProjectData } from '@/data/projectData';
import type { TeamMemberData } from '@/data/TeamMemberData';
import type { ConsultationRequestData } from '@/data/ConsultationRequestData';
import * as ProjectService from '@/data/projectService';
import { TeamMemberService, teamMemberDataList } from '@/data/TeamMemberService';
import * as ConsultationRequestService from '@/data/ConsultationRequestService';
import * as ServiceService from '@/data/ServiceService';

const serviceOptions = ServiceService.getAll();

const createEmptyProjectForm = () => ({
  title: '',
  category: 'Residential',
  serviceType: serviceOptions[0]?.id ?? 'service-consultation',
  location: '',
  yearCompleted: String(new Date().getFullYear()),
  clientType: '',
  scopeSummary: '',
  challengeSummary: '',
  solutionSummary: '',
  resultsSummary: '',
  coverImageUrl: '',
  galleryImageUrlsText: '',
  featured: true,
  sortOrder: '',
});

const createEmptyTeamForm = () => ({
  name: '',
  role: '',
  specialty: '',
  license: '',
  bio: '',
  avatarImageUrl: '',
  yearsExperience: '',
  featured: true,
  sortOrder: '',
});

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitImageList(value: string) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function nextSortOrder(items: Array<{ sortOrder: number }>) {
  return items.reduce((max, item) => Math.max(max, item.sortOrder), 0) + 1;
}

async function fileToDataUrl(file: File) {
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export default function AdminPanelContent() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMemberData[]>([]);
  const [requests, setRequests] = useState<ConsultationRequestData[]>([]);
  const [projectForm, setProjectForm] = useState(createEmptyProjectForm);
  const [teamForm, setTeamForm] = useState(createEmptyTeamForm);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [editingTeamId, setEditingTeamId] = useState<string | null>(null);

  const syncAll = async () => {
    const [nextProjects, nextTeamMembers, nextRequests] = await Promise.all([
      ProjectService.fetchAllShared(),
      TeamMemberService.fetchAllShared(),
      ConsultationRequestService.fetchAllShared(),
    ]);

    setProjects(nextProjects.sort((a, b) => a.sortOrder - b.sortOrder));
    setTeamMembers(nextTeamMembers.sort((a, b) => a.sortOrder - b.sortOrder));
    setRequests(nextRequests.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  };

  useEffect(() => {
    void syncAll();
    const unsubscribeProjects = ProjectService.subscribeToSharedProjects(() => void syncAll());
    const unsubscribeTeam = TeamMemberService.subscribeToSharedTeamMembers(() => void syncAll());
    const unsubscribeRequests = ConsultationRequestService.subscribeToSharedConsultationRequests(() => void syncAll());

    return () => {
      unsubscribeProjects();
      unsubscribeTeam();
      unsubscribeRequests();
    };
  }, []);

  const updateProjectForm = (field: keyof ReturnType<typeof createEmptyProjectForm>, value: string | boolean) => {
    setProjectForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateTeamForm = (field: keyof ReturnType<typeof createEmptyTeamForm>, value: string | boolean) => {
    setTeamForm((prev) => ({ ...prev, [field]: value }));
  };

  const saveProjects = async (items: ProjectData[]) => {
    const savedItems = await ProjectService.replaceAllShared(items);
    setProjects(savedItems.sort((a, b) => a.sortOrder - b.sortOrder));
  };

  const saveTeamMembers = async (items: TeamMemberData[]) => {
    const savedItems = await TeamMemberService.replaceAllShared(items);
    setTeamMembers(savedItems.sort((a, b) => a.sortOrder - b.sortOrder));
  };

  const saveRequests = async (items: ConsultationRequestData[]) => {
    const savedItems = await ConsultationRequestService.replaceAllShared(items);
    setRequests(savedItems.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  };

  const handleProjectSubmit = async () => {
    if (!projectForm.title.trim() || !projectForm.location.trim()) {
      toast.error('Project title and location are required.');
      return;
    }

    const slug = slugify(projectForm.title);
    const sortOrder = Number(projectForm.sortOrder) || nextSortOrder(projects);
    const projectId = editingProjectId ?? `project-${slug}`;

    const project: ProjectData = {
      id: projectId,
      slug,
      title: projectForm.title.trim(),
      category: projectForm.category.trim(),
      serviceType: projectForm.serviceType,
      location: projectForm.location.trim(),
      yearCompleted: Number(projectForm.yearCompleted) || new Date().getFullYear(),
      clientType: projectForm.clientType.trim() || 'Private Client',
      scopeSummary: projectForm.scopeSummary.trim(),
      challengeSummary: projectForm.challengeSummary.trim(),
      solutionSummary: projectForm.solutionSummary.trim(),
      resultsSummary: projectForm.resultsSummary.trim(),
      coverImageUrl: projectForm.coverImageUrl.trim() || '#',
      galleryImageUrls: splitImageList(projectForm.galleryImageUrlsText),
      featured: projectForm.featured,
      sortOrder,
    };

    const nextProjects = editingProjectId
      ? projects.map((item) => (item.id === editingProjectId ? project : item))
      : [...projects, project];

    await saveProjects(nextProjects);
    setProjectForm(createEmptyProjectForm());
    setEditingProjectId(null);
    toast.success(editingProjectId ? 'Project updated.' : 'Project added to the site.');
  };

  const handleTeamSubmit = async () => {
    if (!teamForm.name.trim() || !teamForm.role.trim()) {
      toast.error('Team member name and role are required.');
      return;
    }

    const slug = slugify(teamForm.name);
    const sortOrder = Number(teamForm.sortOrder) || nextSortOrder(teamMembers);
    const memberId = editingTeamId ?? `team-${slug}`;

    const member: TeamMemberData = {
      id: memberId,
      name: teamForm.name.trim(),
      role: teamForm.role.trim(),
      specialty: teamForm.specialty.trim(),
      license: teamForm.license.trim(),
      bio: teamForm.bio.trim(),
      avatarImageUrl: teamForm.avatarImageUrl.trim() || '#',
      yearsExperience: Number(teamForm.yearsExperience) || 0,
      featured: teamForm.featured,
      sortOrder,
    };

    const nextMembers = editingTeamId
      ? teamMembers.map((item) => (item.id === editingTeamId ? member : item))
      : [...teamMembers, member];

    await saveTeamMembers(nextMembers);
    setTeamForm(createEmptyTeamForm());
    setEditingTeamId(null);
    toast.success(editingTeamId ? 'Team member updated.' : 'Team member added to the site.');
  };

  const editProject = (project: ProjectData) => {
    setEditingProjectId(project.id);
    setProjectForm({
      title: project.title,
      category: project.category,
      serviceType: project.serviceType,
      location: project.location,
      yearCompleted: String(project.yearCompleted),
      clientType: project.clientType,
      scopeSummary: project.scopeSummary,
      challengeSummary: project.challengeSummary,
      solutionSummary: project.solutionSummary,
      resultsSummary: project.resultsSummary,
      coverImageUrl: project.coverImageUrl,
      galleryImageUrlsText: project.galleryImageUrls.join('\n'),
      featured: project.featured,
      sortOrder: String(project.sortOrder),
    });
  };

  const editTeamMember = (member: TeamMemberData) => {
    setEditingTeamId(member.id);
    setTeamForm({
      name: member.name,
      role: member.role,
      specialty: member.specialty,
      license: member.license,
      bio: member.bio,
      avatarImageUrl: member.avatarImageUrl,
      yearsExperience: String(member.yearsExperience),
      featured: member.featured,
      sortOrder: String(member.sortOrder),
    });
  };

  const updateRequestStatus = async (requestId: string, status: string) => {
    const nextRequests = requests.map((item) => (
      item.id === requestId ? { ...item, status } : item
    ));
    await saveRequests(nextRequests);
    toast.success('Request status updated.');
  };

  const resetProjects = async () => {
    await ProjectService.replaceAllShared(ProjectService.projectDataList);
    await syncAll();
    toast.success('Projects reset to default seed data.');
  };

  const resetTeam = async () => {
    await TeamMemberService.replaceAllShared(teamMemberDataList);
    await syncAll();
    toast.success('Team members reset to default seed data.');
  };

  return (
    <section className="page-body">
      <div className="page-container space-y-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="surface-base">
            <CardHeader>
              <CardDescription>Live portfolio entries</CardDescription>
              <CardTitle className="text-3xl">{projects.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="surface-base">
            <CardHeader>
              <CardDescription>Team members on record</CardDescription>
              <CardTitle className="text-3xl">{teamMembers.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="surface-base">
            <CardHeader>
              <CardDescription>Saved inquiries</CardDescription>
              <CardTitle className="text-3xl">{requests.length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card className="surface-base border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SafeIcon name="ShieldCheck" size={18} />
              Admin workflow
            </CardTitle>
            <CardDescription>
              New contact form messages are stored in this panel immediately. They are also posted to `githinjibriank973@gmail.com` through FormSubmit after that inbox confirms the first activation email. Project, team, and request updates are synchronized through Supabase so all visitors see the same content.
            </CardDescription>
          </CardHeader>
        </Card>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <Card className="surface-base">
                <CardHeader>
                  <CardTitle>{editingProjectId ? 'Edit project' : 'Add project'}</CardTitle>
                  <CardDescription>
                    Upload a cover image or paste hosted image URLs. Saved items appear on the homepage project section.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <Label htmlFor="project-title">Project title</Label>
                    <Input id="project-title" value={projectForm.title} onChange={(e) => updateProjectForm('title', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="project-category">Category</Label>
                    <Input id="project-category" value={projectForm.category} onChange={(e) => updateProjectForm('category', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="project-service">Service</Label>
                    <select
                      id="project-service"
                      value={projectForm.serviceType}
                      onChange={(e) => updateProjectForm('serviceType', e.target.value)}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                    >
                      {serviceOptions.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="project-location">Location</Label>
                    <Input id="project-location" value={projectForm.location} onChange={(e) => updateProjectForm('location', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="project-year">Year completed</Label>
                    <Input id="project-year" type="number" value={projectForm.yearCompleted} onChange={(e) => updateProjectForm('yearCompleted', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-client-type">Client type</Label>
                    <Input id="project-client-type" value={projectForm.clientType} onChange={(e) => updateProjectForm('clientType', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-scope">Scope summary</Label>
                    <Textarea id="project-scope" rows={3} value={projectForm.scopeSummary} onChange={(e) => updateProjectForm('scopeSummary', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-challenge">Challenge summary</Label>
                    <Textarea id="project-challenge" rows={3} value={projectForm.challengeSummary} onChange={(e) => updateProjectForm('challengeSummary', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-solution">Solution summary</Label>
                    <Textarea id="project-solution" rows={3} value={projectForm.solutionSummary} onChange={(e) => updateProjectForm('solutionSummary', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-results">Results summary</Label>
                    <Textarea id="project-results" rows={3} value={projectForm.resultsSummary} onChange={(e) => updateProjectForm('resultsSummary', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-cover-url">Cover image URL</Label>
                    <Input id="project-cover-url" value={projectForm.coverImageUrl} onChange={(e) => updateProjectForm('coverImageUrl', e.target.value)} placeholder="https://..." />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-cover-upload">Or upload a cover image</Label>
                    <Input
                      id="project-cover-upload"
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const dataUrl = await fileToDataUrl(file);
                        updateProjectForm('coverImageUrl', dataUrl);
                        toast.success('Cover image uploaded.');
                      }}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="project-gallery">Gallery image URLs</Label>
                    <Textarea
                      id="project-gallery"
                      rows={4}
                      value={projectForm.galleryImageUrlsText}
                      onChange={(e) => updateProjectForm('galleryImageUrlsText', e.target.value)}
                      placeholder="One URL per line"
                    />
                  </div>
                  <div>
                    <Label htmlFor="project-sort">Sort order</Label>
                    <Input id="project-sort" type="number" value={projectForm.sortOrder} onChange={(e) => updateProjectForm('sortOrder', e.target.value)} />
                  </div>
                  <div className="flex items-end gap-3">
                    <Checkbox
                      id="project-featured"
                      checked={projectForm.featured}
                      onCheckedChange={(checked) => updateProjectForm('featured', checked === true)}
                    />
                    <Label htmlFor="project-featured">Feature on homepage</Label>
                  </div>
                  <div className="md:col-span-2 flex flex-wrap gap-3">
                    <Button className="btn-cta" onClick={handleProjectSubmit}>
                      {editingProjectId ? 'Save project' : 'Add project'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setProjectForm(createEmptyProjectForm());
                        setEditingProjectId(null);
                      }}
                    >
                      Clear form
                    </Button>
                    <Button variant="ghost" onClick={resetProjects}>
                      Reset default projects
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="surface-base">
                <CardHeader>
                  <CardTitle>Current projects</CardTitle>
                  <CardDescription>Manage what appears on the main site.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="rounded-lg border border-border p-4 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.location} · {project.yearCompleted}</p>
                        </div>
                        {project.featured && <Badge>Featured</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.scopeSummary}</p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" onClick={() => editProject(project)}>Edit</Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            void saveProjects(projects.filter((item) => item.id !== project.id));
                            if (editingProjectId === project.id) {
                              setEditingProjectId(null);
                              setProjectForm(createEmptyProjectForm());
                            }
                            toast.success('Project removed.');
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <Card className="surface-base">
                <CardHeader>
                  <CardTitle>{editingTeamId ? 'Edit team member' : 'Add team member'}</CardTitle>
                  <CardDescription>
                    New team members are saved to the live team pages and homepage preview.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="team-name">Full name</Label>
                    <Input id="team-name" value={teamForm.name} onChange={(e) => updateTeamForm('name', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="team-role">Role</Label>
                    <Input id="team-role" value={teamForm.role} onChange={(e) => updateTeamForm('role', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="team-specialty">Specialty</Label>
                    <Input id="team-specialty" value={teamForm.specialty} onChange={(e) => updateTeamForm('specialty', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="team-license">Credential</Label>
                    <Input id="team-license" value={teamForm.license} onChange={(e) => updateTeamForm('license', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="team-experience">Years of experience</Label>
                    <Input id="team-experience" type="number" value={teamForm.yearsExperience} onChange={(e) => updateTeamForm('yearsExperience', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="team-bio">Bio</Label>
                    <Textarea id="team-bio" rows={4} value={teamForm.bio} onChange={(e) => updateTeamForm('bio', e.target.value)} />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="team-avatar-url">Profile image URL</Label>
                    <Input id="team-avatar-url" value={teamForm.avatarImageUrl} onChange={(e) => updateTeamForm('avatarImageUrl', e.target.value)} placeholder="https://..." />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="team-avatar-upload">Or upload a profile image</Label>
                    <Input
                      id="team-avatar-upload"
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const dataUrl = await fileToDataUrl(file);
                        updateTeamForm('avatarImageUrl', dataUrl);
                        toast.success('Profile image uploaded.');
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="team-sort">Sort order</Label>
                    <Input id="team-sort" type="number" value={teamForm.sortOrder} onChange={(e) => updateTeamForm('sortOrder', e.target.value)} />
                  </div>
                  <div className="flex items-end gap-3">
                    <Checkbox
                      id="team-featured"
                      checked={teamForm.featured}
                      onCheckedChange={(checked) => updateTeamForm('featured', checked === true)}
                    />
                    <Label htmlFor="team-featured">Feature on homepage</Label>
                  </div>
                  <div className="md:col-span-2 flex flex-wrap gap-3">
                    <Button className="btn-cta" onClick={handleTeamSubmit}>
                      {editingTeamId ? 'Save member' : 'Add member'}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setTeamForm(createEmptyTeamForm());
                        setEditingTeamId(null);
                      }}
                    >
                      Clear form
                    </Button>
                    <Button variant="ghost" onClick={resetTeam}>
                      Reset default team
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="surface-base">
                <CardHeader>
                  <CardTitle>Current team</CardTitle>
                  <CardDescription>These cards feed the team sections across the site.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="rounded-lg border border-border p-4 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                        {member.featured && <Badge>Featured</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" onClick={() => editTeamMember(member)}>Edit</Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            void saveTeamMembers(teamMembers.filter((item) => item.id !== member.id));
                            if (editingTeamId === member.id) {
                              setEditingTeamId(null);
                              setTeamForm(createEmptyTeamForm());
                            }
                            toast.success('Team member removed.');
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <Card className="surface-base">
              <CardHeader>
                <CardTitle>Incoming requests</CardTitle>
                <CardDescription>
                  Contact form submissions are saved here and can be tracked even before email forwarding is fully activated.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ref</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.referenceId}</TableCell>
                        <TableCell>
                          <div>{request.clientName}</div>
                          <div className="text-xs text-muted-foreground">{request.email}</div>
                        </TableCell>
                        <TableCell>{request.source ?? 'Consultation Request'}</TableCell>
                        <TableCell>
                          <select
                            value={request.status}
                            onChange={(e) => updateRequestStatus(request.id, e.target.value)}
                            className="rounded-md border border-input bg-transparent px-2 py-1 text-sm"
                          >
                            <option value="Received">Received</option>
                            <option value="In Review">In Review</option>
                            <option value="Responded">Responded</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </TableCell>
                        <TableCell>{new Date(request.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell className="max-w-sm">
                          <div className="space-y-1">
                            {request.subject && (
                              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                                {request.subject}
                              </div>
                            )}
                            <p className="line-clamp-3 text-sm text-muted-foreground">{request.notes}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
