import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function TeamSection() {
  const team = [
    {
      name: 'Benitta',
      role: 'Captain',
      bio: 'Leading INNO YOUTH with vision and dedication to empower young innovators.',
      initials: 'B',
    },
    {
      name: 'Adith',
      role: 'Vice Captain',
      bio: 'Supporting the team and driving initiatives to foster innovation and growth.',
      initials: 'A',
    },
    {
      name: 'Devika',
      role: 'Member',
      bio: 'Contributing to the mission of building a vibrant community of young innovators.',
      initials: 'D',
    },
    {
      name: 'anami',
      role: 'Member',
      bio: 'Passionate about creating opportunities for youth to explore technology and innovation.',
      initials: 'A',
    },
    {
      name: 'esther',
      role: 'Member',
      bio: 'Dedicated to supporting community initiatives and fostering collaboration.',
      initials: 'E',
    },
    {
      name: 'franil',
      role: 'Member',
      bio: 'Committed to helping young minds discover their potential through innovation.',
      initials: 'F',
    },
    {
      name: 'roseviya',
      role: 'Member',
      bio: 'Working to create an inclusive environment where every voice is heard.',
      initials: 'R',
    },
    {
      name: 'Anamika',
      role: 'Member',
      bio: 'Enthusiastic about empowering youth through technology and creative thinking.',
      initials: 'A',
    },
  ];

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our diverse team of passionate young leaders is committed to making INNO YOUTH a place where innovation thrives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{member.name}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
