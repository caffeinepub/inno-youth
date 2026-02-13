import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Interested in joining INNO YOUTH or learning more about our programs? We'd love to hear from you!
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
