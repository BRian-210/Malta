
interface CompanyStatsSectionProps {
  foundedYear: number;
}

export default function CompanyStatsSection({ foundedYear }: CompanyStatsSectionProps) {
  const currentYear = 2026;
  const yearsInBusiness = currentYear - foundedYear;

  const stats = [
    {
      value: `${yearsInBusiness}+`,
      label: 'Years of Experience',
      description: 'Serving Malta clients with dedication and expertise',
    },
    {
      value: '150+',
      label: 'Projects Completed',
      description: 'Across residential, commercial, and heritage sectors',
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Consistently delivering excellence and transparency',
    },
    {
      value: '4',
      label: 'Core Specialties',
      description: 'Structural, Architectural, Interior, and Consultation',
    },
  ];

  return (
    <section className="page-body bg-gradient-to-br from-primary/5 to-accent/5 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-caption text-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
