
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import SafeIcon from '@/components/common/SafeIcon';
import { createFromContactFormShared } from '@/data/ConsultationRequestService';

interface ContactFormProps {
  isClient: boolean;
}

export default function ContactForm({ isClient }: ContactFormProps) {
  const adminEmail = 'kinyanmuigai@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      const request = await createFromContactFormShared(formData);

      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('subject', formData.subject || 'General Inquiry');
      payload.append('message', formData.message);
      payload.append('referenceId', request.referenceId);
      payload.append('_subject', `New website inquiry from ${formData.name}`);
      payload.append('_replyto', formData.email);
      payload.append('_template', 'table');

      const response = await fetch(`https://formsubmit.co/ajax/${adminEmail}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Email delivery failed');
      }

      toast.success('Message sent successfully! We will contact you soon.', {
        description: `Thank you ${formData.name}. Your inquiry was logged as ${request.referenceId} and sent to our inbox.`,
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Your message was saved in the admin inbox, but email delivery needs confirmation.', {
        description: 'FormSubmit requires the destination inbox to confirm the first submission before automatic email forwarding starts.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isClient) {
    return (
      <div className="form-section opacity-50 pointer-events-none">
        <div className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Your name" disabled />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="your@email.com" disabled />
          </div>
          <div>
            <Label htmlFor="phone">Phone (Optional)</Label>
            <Input id="phone" type="tel" placeholder="+254 XXXX XXXX" disabled />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="What is this about?" disabled />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us more..." disabled rows={6} />
          </div>
          <Button disabled className="w-full">
            Send Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <Label htmlFor="name" className="text-foreground font-semibold mb-2 block">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'border-destructive' : ''}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-xs text-destructive mt-1 flex items-center gap-1">
              <SafeIcon name="AlertCircle" size={14} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'border-destructive' : ''}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-xs text-destructive mt-1 flex items-center gap-1">
              <SafeIcon name="AlertCircle" size={14} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <Label htmlFor="phone" className="text-foreground font-semibold mb-2 block">
            Phone Number (Optional)
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254 XXXX XXXX"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        {/* Subject Field */}
        <div>
          <Label htmlFor="subject" className="text-foreground font-semibold mb-2 block">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        {/* Message Field */}
        <div>
          <Label htmlFor="message" className="text-foreground font-semibold mb-2 block">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project or inquiry..."
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={errors.message ? 'border-destructive' : ''}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-xs text-destructive mt-1 flex items-center gap-1">
              <SafeIcon name="AlertCircle" size={14} />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-cta w-full h-12 flex items-center justify-center gap-2 group"
        >
          {isSubmitting ? (
            <>
              <SafeIcon name="Loader2" size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <SafeIcon name="Send" size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          We'll get back to you within 24 hours during business hours. Messages are saved to the admin inbox and forwarded to email when enabled.
        </p>
      </div>
    </form>
  );
}
