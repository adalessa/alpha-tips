import NavBar from '@/components/nav-bar';
import { TipCard } from '@/components/tip';
import { Button } from '@/components/ui/button';
import { TipsPaginated } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

interface TipsProps {
    tips: TipsPaginated;
}

export default function Tips({ tips }: TipsProps) {
    return (
        <>
            <Head title="Alpha Tips">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col">
                <NavBar />
                <main className="container flex-1 py-10">
                    <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h1 className="mb-2 text-3xl font-bold">Browse All Tips</h1>
                            <p className="text-muted-foreground">Discover {tips.total} tips and tricks</p>
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                        <div className="text-muted-foreground text-sm">
                            Showing {tips.from}-{tips.to} of {tips.total} tips
                        </div>
                    </div>
                    {tips.data.length > 0 ? (
                        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {tips.data.map((tip) => (
                                <TipCard key={tip.id} tip={tip} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <h3 className="mb-2 text-lg font-medium">No tips found</h3>
                            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                            <Button onClick={() => router.visit('/tips')}>View All Tips</Button>
                        </div>
                    )}
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
                </main>
            </div>
        </>
    );
}
