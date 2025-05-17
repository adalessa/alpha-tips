import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

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
        title: 'Create Tip',
        href: '/dashboard/tip/create',
    },
];

export default function CreateTip() {
    const { data, setData, post, errors } = useForm({
        title: '',
        description: '',
        code: '',
        language: '',
        benefits: '',
        notes: '',
        explanation: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData(name as keyof typeof data, value as string);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/tip');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Tip" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-200">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                            required
                        />
                        {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Description</label>
                        <textarea
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                            required
                        ></textarea>
                        {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Code</label>
                        <textarea
                            rows={20}
                            name="code"
                            value={data.code}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                        ></textarea>
                        {errors.code && <p className="text-sm text-red-500">{errors.code}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Language</label>
                        <input
                            type="text"
                            name="language"
                            value={data.language}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                            required
                        />
                        {errors.language && <p className="text-sm text-red-500">{errors.language}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Benefits (comma-separated)</label>
                        <input
                            type="text"
                            name="benefits"
                            value={data.benefits}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                        />
                        {errors.benefits && <p className="text-sm text-red-500">{errors.benefits}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Notes</label>
                        <textarea
                            name="notes"
                            value={data.notes}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                        ></textarea>
                        {errors.notes && <p className="text-sm text-red-500">{errors.notes}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-200">Explanation</label>
                        <textarea
                            rows={5}
                            name="explanation"
                            value={data.explanation}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-gray-200"
                        ></textarea>
                        {errors.explanation && <p className="text-sm text-red-500">{errors.explanation}</p>}
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="rounded-lg bg-gray-700 px-4 py-2 text-gray-200 shadow hover:bg-gray-500">
                            Create Tip
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
