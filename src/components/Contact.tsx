import React, { useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { translations: t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    try {
      setLoading(true);
      
      await emailjs.sendForm(
        'service_dj09bby',
        'template_lsoegol',
        formRef.current,
        'Pi9tFLVRrVNIwCE_p'
      );

      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 transition-colors"
      style={{ backgroundColor: theme.background }}
    >
      <div className="container mx-auto px-4">
        <Toaster position="top-right" />
        <h2 
          className="text-4xl font-bold text-center mb-12"
          style={{ color: theme.text }}
        >
          {t.contact.title} <span style={{ color: theme.primary }}>{t.contact.me}</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder={t.contact.fullName}
              required
              className="w-full rounded-lg px-4 py-3 transition-colors"
              style={{ 
                backgroundColor: theme.secondaryBg,
                color: theme.text,
                borderColor: theme.primary
              }}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full rounded-lg px-4 py-3 transition-colors"
              style={{ 
                backgroundColor: theme.secondaryBg,
                color: theme.text,
                borderColor: theme.primary
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder={t.contact.subject}
              required
              className="w-full rounded-lg px-4 py-3 transition-colors"
              style={{ 
                backgroundColor: theme.secondaryBg,
                color: theme.text,
                borderColor: theme.primary
              }}
            />
            <textarea
              name="message"
              placeholder={t.contact.message}
              required
              rows={6}
              className="w-full rounded-lg px-4 py-3 transition-colors"
              style={{ 
                backgroundColor: theme.secondaryBg,
                color: theme.text,
                borderColor: theme.primary
              }}
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-bold transition-colors disabled:opacity-70"
              style={{ 
                backgroundColor: theme.primary,
                color: '#FFFFFF'
              }}
            >
              {loading ? t.contact.sending : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;