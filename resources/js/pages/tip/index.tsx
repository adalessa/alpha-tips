import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, TipsPaginated } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Tips',
        href: '/dashboard/tip',
    },
];

interface TipsPageProps {
    tips: TipsPaginated;
}

export default function Tips({ tips }: TipsPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tips" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex justify-end">
                    <Link href="/dashboard/tip/create" className="rounded-lg bg-gray-700 px-4 py-2 text-gray-200 shadow hover:bg-gray-500">
                        New
                    </Link>
                </div>
                <table className="w-full border-collapse overflow-hidden rounded-lg shadow-md">
                    <thead className="bg-gray-600">
                        <tr>
                            <th className="text-primary px-6 py-3 text-left text-sm font-medium">ID</th>
                            <th className="text-primary px-6 py-3 text-left text-sm font-medium">Title</th>
                            <th className="text-primary px-6 py-3 text-left text-sm font-medium">Description</th>
                            <th className="text-primary px-6 py-3 text-left text-sm font-medium">Language</th>
                            <th className="text-primary px-6 py-3 text-left text-sm font-medium">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600 bg-gray-800">
                        {tips.data.map((tip) => (
                            <tr key={tip.id} className="cursor-pointer hover:bg-gray-500" onClick={() => router.visit(`/dashboard/tip/${tip.id}`)}>
                                <td className="px-6 py-4 text-sm text-gray-200">{tip.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{tip.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{tip.description}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{tip.language}</td>
                                <td className="px-6 py-4 text-sm text-gray-200">{new Date(tip.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="py-10 text-center">
                    {tips.links.map((link) =>
                        link.url ? (
                            <Link
                                className={`mx-1 p-1 ${link.active ? 'font-bold text-blue-400 underline' : ''}`}
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ) : (
                            <span
                                className="cursor-not-allowed text-gray-300"
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            ></span>
                        ),
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
