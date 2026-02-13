import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function TeamSection() {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Project Lead',
      bio: 'Passionate about empowering youth through technology and innovation. Computer science student with a vision for inclusive tech education.',
      initials: 'AC',
    },
    {
      name: 'Maya Patel',
      role: 'Community Manager',
      bio: 'Dedicated to building strong, supportive communities. Brings experience in youth outreach and event coordination.',
      initials: 'MP',
    },
    {
      name: 'Jordan Lee',
      role: 'Technical Director',
      bio: 'Full-stack developer and mentor who loves teaching coding to the next generation of innovators.',
      initials: 'JL',
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
