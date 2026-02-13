export default function WhatWeDoSection() {
  const pillars = [
    {
      title: 'Innovation',
      description: 'We foster creative thinking and problem-solving, encouraging young minds to develop groundbreaking solutions to real-world challenges.',
      iconIndex: 0,
    },
    {
      title: 'Community',
      description: 'We build a supportive network where youth can connect, collaborate, and learn from each other in a welcoming environment.',
      iconIndex: 1,
    },
    {
      title: 'Growth',
      description: 'We provide mentorship, resources, and opportunities that help young innovators develop their skills and reach their full potential.',
      iconIndex: 2,
    },
  ];

  return (
    <section id="what-we-do" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our work is built on three core pillars that guide everything we do and help us create lasting impact in the lives of young innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src="/assets/generated/inno-youth-icons-set.dim_512x512.png"
                  alt={pillar.title}
                  className="w-20 h-20 object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    objectPosition: `${pillar.iconIndex * -80}px 0`,
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
