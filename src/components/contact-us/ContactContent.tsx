

import { useState, useEffect } from 'react';
import { getAll as getAllContactInfo } from '@/data/ContactInfoService';
import ContactInfoCard from '@/components/common/ContactInfoCard';
import ContactForm from '@/components/contact-us/ContactForm';
import MapEmbed from '@/components/contact-us/MapEmbed';
import SafeIcon from '@/components/common/SafeIcon';

export default function ContactContent() {
  const [contactInfo] = useState(() => getAllContactInfo());
  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);

  const primaryContacts = contactInfo.filter((item) => item.primary);
  const secondaryContacts = contactInfo.filter((item) => !item.primary);

  const getHrefForContact = (item: any) => {
    if (item.type === 'phone') {
      return `tel:${item.value.replace(/\s/g, '')}`;
    }
    if (item.type === 'email') {
      return `mailto:${item.value}`;
    }
    if (item.type === 'address') {
      return `https://www.google.com/maps/search/${encodeURIComponent(item.value)}`;
    }
    return undefined;
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Contact Information Section */}
      <section className="page-body section-spacing">
        <div className="page-container">
          <div className="mb-16">
            <h2 className="text-section-title mb-4">Contact Information</h2>
            <p className="text-body text-muted-foreground max-w-2xl">
              Reach out to our Malta-based team via phone, email, or visit our office. We're available during business hours and respond to inquiries promptly.
            </p>
          </div>

          {/* Primary Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {primaryContacts.map((item) => (
              <ContactInfoCard
                key={item.id}
                icon={item.iconName}
                title={item.label}
                details={item.value}
                href={getHrefForContact(item)}
              />
            ))}
          </div>

          {/* Secondary Information (Hours, License) */}
          {secondaryContacts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-secondary/30 rounded-lg p-8 border border-border">
              {secondaryContacts.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <SafeIcon name={item.iconName} size={20} />
                  </div>
                  <div>
                    <p className="text-label text-primary mb-1">{item.label}</p>
                    <p className="text-body text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/20 border-y border-border">
        <div className="page-container">
          <h2 className="text-section-title mb-8">Our Location</h2>
          <MapEmbed />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="page-body section-spacing">
        <div className="page-container max-w-2xl">
          <div className="mb-12">
            <h2 className="text-section-title mb-4">Send us a Message</h2>
            <p className="text-body text-muted-foreground">
              Have a question or project inquiry? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <ContactForm isClient={isClient} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-body section-spacing bg-secondary/40 border-t border-border">
        <div className="page-container text-center max-w-2xl mx-auto">
          <h2 className="text-section-title mb-4">Ready to Start Your Project?</h2>
          <p className="text-body text-muted-foreground mb-8">
            Schedule a consultation with our architects and engineers to discuss your vision for your Maltese property.
          </p>
          <button
            onClick={() => {
              window.location.href = './consultation-request-page.html';
            }}
            className="btn-cta inline-flex items-center gap-2 group"
          >
            Book a Consultation
            <SafeIcon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
}
