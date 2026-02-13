import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Rocket, Globe } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      icon: Code,
      title: 'Tech Workshops',
      description: 'Regular hands-on coding and technology workshops where youth learn programming, web development, and emerging technologies.',
      tags: ['Education', 'Technology', 'Skills'],
      color: 'text-chart-1',
    },
    {
      icon: Rocket,
      title: 'Innovation Challenges',
      description: 'Quarterly hackathons and innovation challenges that encourage creative problem-solving and teamwork on real-world issues.',
      tags: ['Competition', 'Innovation', 'Teamwork'],
      color: 'text-chart-2',
    },
    {
      icon: Globe,
      title: 'Community Outreach',
      description: 'Programs that connect youth with local communities, enabling them to apply their skills to create positive social impact.',
      tags: ['Community', 'Impact', 'Service'],
      color: 'text-chart-3',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We run a variety of programs and activities designed to inspire, educate, and empower young innovators to make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${project.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
