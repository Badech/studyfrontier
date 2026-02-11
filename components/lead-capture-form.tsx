'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2 } from 'lucide-react';

export function LeadCaptureForm() {
  const t = useTranslations('lead_capture');
  const pathname = usePathname();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    desiredLevel: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: pathname || 'unknown',
          interest: 'USA',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }
      
      setFormState('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        desiredLevel: '',
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
        {/* Full Name Field */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {t('name_label')} <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('name_placeholder')}
            disabled={formState === 'submitting'}
            aria-required="true"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {t('email_label')} <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('email_placeholder')}
            disabled={formState === 'submitting'}
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Phone Field */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {t('phone_label')} <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('phone_placeholder')}
            disabled={formState === 'submitting'}
            aria-required="true"
          />
        </div>

        {/* City Field */}
        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {t('city_label')} <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={t('city_placeholder')}
            disabled={formState === 'submitting'}
            aria-required="true"
          />
        </div>
      </div>

      {/* Desired Level Field */}
      <div className="space-y-2">
        <label htmlFor="desiredLevel" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {t('program_label')} <span className="text-destructive">*</span>
        </label>
        <select
          id="desiredLevel"
          name="desiredLevel"
          required
          value={formData.desiredLevel}
          onChange={handleChange}
          className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={formState === 'submitting'}
          aria-required="true"
        >
          <option value="">{t('program_placeholder')}</option>
          <option value="UG">{t('program_undergraduate')}</option>
          <option value="Grad">{t('program_graduate')}</option>
          <option value="CC">{t('program_community')}</option>
        </select>
      </div>

      {/* Error Message */}
      {formState === 'error' && (
        <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md" role="alert">
          {errorMessage || t('error')}
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
