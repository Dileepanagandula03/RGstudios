
import { ServiceItem, PortfolioItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'cold-email',
    title: 'Cold Email Marketing',
    description: 'Direct, high-intent outreach that actually gets replies.',
    icon: 'mail',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'We design and execute cold email campaigns that bypass the noise. Our systems focus on deliverability, personalization, and high-quality lead conversion.',
    benefits: ['ICP Definition & Strategy', 'Personalized Architecture', 'Sequence Design & Testing', 'Deliverability Optimization', 'Performance Monitoring']
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description: 'Predictable Demand & Conversion Systems.',
    icon: 'target',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'We build acquisition systems that transform visibility into measurable lead flow through structured demand and conversion-aligned frameworks.',
    benefits: ['Paid Acquisition Strategy', 'Funnel & Landing Page Optimization', 'Lead Nurturing Architecture', 'Conversion Tracking & Analytics', 'Campaign Performance Optimization']
  },
  {
    id: 'ai-agents',
    title: 'AI Agents / Chatbots',
    description: 'Intelligent Interaction & Automation Systems.',
    icon: 'cpu',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'We design AI-assisted communication systems that support scale without losing brand identity through intelligent interaction and automation.',
    benefits: ['AI Chatbot Architecture', 'Lead Qualification Automation', 'Customer Support Workflows', 'CRM & Messaging Integrations', 'Performance Learning & Refinement']
  },
  {
    id: 'website-experience',
    title: 'Website Experience',
    description: 'Conversion-Focused Digital Environments.',
    icon: 'layout',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'We design high-authority websites and portfolios that transform attention into measurable business outcomes through conversion-aligned digital experiences.',
    benefits: ['Brand Messaging & Positioning', 'UX & Conversion Psychology', 'Mobile-First Development', 'SEO-Ready Technical Structure', 'Lead Capture Systems']
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Strategic Social Presence Systems.',
    icon: 'share-2',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'We design social ecosystems that align visibility, trust, and conversion through structured brand presence systems across Instagram, LinkedIn, and Facebook.',
    benefits: ['Platform Positioning Strategy', 'Content & Engagement Architecture', 'Conversion-Aligned Visibility', 'Performance Optimization']
  },
  {
    id: 'content-marketing',
    title: 'Content & Creator Growth Systems',
    description: 'Narrative + Visibility Infrastructure for the Short-Form Era.',
    icon: 'file-text',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'We design short-form content ecosystems that help emerging voices grow with clarity, consistency, and platform intelligence across Instagram, TikTok, and YouTube Shorts.',
    benefits: ['Creator Positioning & Niche Clarity', 'Short-Form Content Strategy', 'Viral Pattern Analysis', 'Personal Brand Storytelling', 'Growth Analytics & Refinement']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, title: 'Luxe Wellness App', category: 'Growth Systems', image: 'https://images.unsplash.com/photo-1544161515-4af6b1d46af0?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Aurora FinTech', category: 'Conversion Web', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
];
