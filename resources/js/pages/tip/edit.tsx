import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Tip } from '@/types';
import { Head, useForm } from '@inertiajs/react';

type EditTipProps = {
    tip: Tip;
};

export default function EditTip({ tip }: EditTipProps) {
    const { data, setData, put, processing, errors } = useForm({
        title: tip.title,
        description: tip.description,
        code: tip.code,
        language: tip.language,
        benefits: tip.benefits.join(', '),
        notes: tip.notes ?? '',
        explanation: tip.explanation ?? '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/dashboard/tip/${tip.id}`);
    };

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
            title: tip.title,
            href: `/dashboard/tip/${tip.id}`,
        },
        {
            title: 'Edit Tip',
            href: '/dashboard/tip/edit',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Tip" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-200">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                            required
                        />
                        {errors.title && <div className="mt-1 text-sm text-red-500">{errors.title}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Description</label>
                        <textarea
                            name="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                            required
                        ></textarea>
                        {errors.description && <div className="mt-1 text-sm text-red-500">{errors.description}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Code</label>
                        <textarea
                            rows={20}
                            name="code"
                            value={data.code}
                            onChange={(e) => setData('code', e.target.value)}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                        ></textarea>
                        {errors.code && <div className="mt-1 text-sm text-red-500">{errors.code}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Language</label>
                        <input
                            type="text"
                            name="language"
                            value={data.language}
                            onChange={(e) => setData('language', e.target.value)}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                            required
                        />
                        {errors.language && <div className="mt-1 text-sm text-red-500">{errors.language}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Benefits (comma-separated)</label>
                        <input
                            type="text"
                            name="benefits"
                            value={data.benefits}
                            onChange={(e) => setData('benefits', e.target.value)}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                        />
                        {errors.benefits && <div className="mt-1 text-sm text-red-500">{errors.benefits}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Notes</label>
                        <textarea
                            name="notes"
                            value={data.notes}
                            onChange={(e) => setData('notes', e.target.value)}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                        ></textarea>
                        {errors.notes && <div className="mt-1 text-sm text-red-500">{errors.notes}</div>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Explanation</label>
                        <textarea
                            rows={5}
                            name="explanation"
                            value={data.explanation}
                            onChange={(e) => setData('explanation', e.target.value)}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                        ></textarea>
                        {errors.explanation && <div className="mt-1 text-sm text-red-500">{errors.explanation}</div>}
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-lg bg-gray-700 px-4 py-2 text-gray-200 shadow hover:bg-gray-500"
                            disabled={processing}
                        >
                            Update Tip
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
