import CodeBlock from '@/components/code';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Tip } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Tips',
        href: '/dashboard/tip',
    },
    {
        title: 'Tip Details',
        href: '',
    },
];

interface TipPageProps {
    tip: Tip;
}

export default function TipShow({ tip }: TipPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Tip Details - ${tip.title}`} />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="overflow-hidden rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <tbody className="divide-y divide-gray-600 bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Title</th>
                                <td className="px-6 py-3 text-sm text-gray-100">{tip.title}</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Description</th>
                                <td className="px-6 py-3 text-sm text-gray-100">{tip.description}</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Code</th>
                                <td className="px-6 py-3 text-sm text-gray-100">
                                    <CodeBlock tip={tip} />
                                </td>
                            </tr>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Language</th>
                                <td className="px-6 py-3 text-sm text-gray-100">{tip.language}</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Featured</th>
                                <td className="px-6 py-3 text-sm text-gray-100">{tip.featured ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Benefits</th>
                                <td className="px-6 py-3 text-sm text-gray-100">{tip.benefits.join(', ')}</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Notes</th>
                                <td className="px-6 py-3 text-sm text-gray-100">{tip.notes || 'N/A'}</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Explanation</th>
                                <td className="px-6 py-3 text-sm text-gray-100">{tip.explanation || 'N/A'}</td>
                            </tr>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium text-gray-200">Created At</th>
                                <td className="px-6 py-3 text-sm text-gray-100">{new Date(tip.created_at).toLocaleDateString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex gap-4">
                    <button onClick={() => history.back()} className="rounded-lg bg-gray-700 px-4 py-2 text-gray-100 hover:bg-gray-600">
                        Back to Tips
                    </button>
                    <Link href={`/dashboard/tip/${tip.id}/edit`} className="rounded-lg bg-blue-600 px-4 py-2 text-gray-100 hover:bg-blue-500">
                        Edit Tip
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
