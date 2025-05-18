import NavBar from "@/components/nav-bar";
import { TipCard } from "@/components/tip";
import { Button } from "@/components/ui/button";
import { TipsPaginated } from "@/types";
import { Head, Link, router } from "@inertiajs/react";

interface TipsProps {
    tips: TipsPaginated
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
                <main className="flex-1 container py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Browse All Tips</h1>
                            <p className="text-muted-foreground">Discover {tips.total} tips and tricks</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <div className="text-sm text-muted-foreground">
                            Showing {tips.from}-{tips.to} of {tips.total} tips
                        </div>
                    </div>
                    {tips.data.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
                            {tips.data.map((tip) => (
                                <TipCard key={tip.id} tip={tip} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <h3 className="text-lg font-medium mb-2">No tips found</h3>
                            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                            <Button onClick={() => router.visit("/tips")}>View All Tips</Button>
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
    )
}
