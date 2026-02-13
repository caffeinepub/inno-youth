import { Target, Users, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower young people with the skills, resources, and opportunities they need to become the innovators and leaders of tomorrow.',
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'A diverse network of passionate youth from all backgrounds, united by a shared vision of creating positive change through innovation.',
    },
    {
      icon: Lightbulb,
      title: 'Our Approach',
      description: 'Hands-on learning, collaborative projects, and mentorship that transforms ideas into real-world solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">INNO YOUTH</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a youth-focused innovation project team dedicated to creating opportunities and building better futures. Through collaboration, creativity, and cutting-edge technology, we empower young minds to turn their ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
