import { Button } from '@/components/ui/button';
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si';

export default function SiteFooter() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'What We Do', id: 'what-we-do' },
    { label: 'Projects', id: 'projects' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'inno-youth'
  );

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/inno-youth-logo-v2.dim_512x512.png"
              alt="INNO YOUTH"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating opportunities and building better futures for young innovators everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="link"
                  onClick={() => scrollToSection(link.id)}
                  className="justify-start p-0 h-auto text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <SiFacebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <SiX className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <SiInstagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <SiLinkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} INNO YOUTH. All rights reserved.</p>
          <p>
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
