'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2 } from 'lucide-react';

export function PartnerInquiryForm() {
  const t = useTranslations('partner.form');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    website: '',
    marketsOfInterest: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/partner-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      
      setFormState('success');
      setFormData({
        organizationName: '',
        contactName: '',
        email: '',
        website: '',
        marketsOfInterest: '',
        message: ''
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      setFormState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (formState === 'success') {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">{t('success_title')}</h3>
        <p className="text-muted-foreground">{t('success_message')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Organization Name */}
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="organizationName" className="text-sm font-medium leading-none">
            {t('institution_name_label')} <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            required
            value={formData.organizationName}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('institution_name_placeholder')}
            disabled={formState === 'submitting'}
            aria-required="true"
          />
        </div>

        {/* Contact Name */}
        <div className="space-y-2">
          <label htmlFor="contactName" className="text-sm font-medium leading-none">
            {t('contact_name_label')} <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            value={formData.contactName}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('contact_name_placeholder')}
            disabled={formState === 'submitting'}
            aria-required="true"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none">
            {t('email_label')} <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('email_placeholder')}
            disabled={formState === 'submitting'}
            aria-required="true"
          />
        </div>

        {/* Website */}
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="website" className="text-sm font-medium leading-none">
            {t('website_label')}
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('website_placeholder')}
            disabled={formState === 'submitting'}
          />
        </div>

        {/* Markets of Interest */}
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="marketsOfInterest" className="text-sm font-medium leading-none">
            Markets of Interest <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="marketsOfInterest"
            name="marketsOfInterest"
            required
            value={formData.marketsOfInterest}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="e.g., Morocco, North Africa, Middle East"
            disabled={formState === 'submitting'}
            aria-required="true"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          {t('message_label')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          placeholder={t('message_placeholder')}
          disabled={formState === 'submitting'}
        />
      </div>

      {/* Error Message */}
      {formState === 'error' && (
        <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md" role="alert">
          {errorMessage || t('error_message')}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={formState === 'submitting'}
      >
        {formState === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('submitting')}
          </>
        ) : (
          t('submit_button')
        )}
      </Button>

      <p className="text-xs text-muted-foreground mt-3">
        {t('privacy_notice')}
      </p>
    </form>
  );
}
