import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Tip {
    id: number;
    title: string;
    description: string;
    code: string;
    language: string;
    featured: boolean;
    created_at: string;
    benefits: string[];
    notes: string | null;
    explanation: string | null;
    views: number;
}

export interface Link {
    url: string | null;
    active: boolean;
    label: string;
}

export interface TipsPaginated {
    data: Tip[];
    links: Link[];
    total: number;
    from: number;
    to: number;
    current_page: number;
    last_page: number;
}
