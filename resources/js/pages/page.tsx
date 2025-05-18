import NavBar from '@/components/nav-bar';
import { TipCard } from '@/components/tip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tip } from '@/types/index';
import { Head } from '@inertiajs/react';

interface HomeProps {
    featured: Tip[];
    recent: Tip[];
    popular: Tip[];
}

export default function Home({ featured, recent, popular }: HomeProps) {
    return (
        <>
            <Head title="Alpha Tips">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col">
                <NavBar />
                <main className="flex-1 w-full">
                    <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                        Tips & Snippets for all devs
                                    </h1>
                                    <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                                        Discover tips, snippets, and tricks to enhance your development experience. Share your own tips and learn from
                                        the community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container px-4 py-12 md:px-6">
                        <Tabs defaultValue="featured" className="w-full">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold tracking-tight">Browse Tips</h2>
                                <TabsList>
                                    <TabsTrigger value="featured">Featured</TabsTrigger>
                                    <TabsTrigger value="recent">Recent</TabsTrigger>
                                    <TabsTrigger value="popular">Popular</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="featured" className="mt-6">
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {featured.map((tip) => (
                                        <TipCard key={tip.id} tip={tip} />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="recent" className="mt-6">
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {recent.map((tip) => (
                                        <TipCard key={tip.id} tip={tip} />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="popular" className="mt-6">
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {popular.map((tip) => (
                                        <TipCard key={tip.id} tip={tip} />
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </section>

                    {/* <section className="container px-4 py-12 md:px-6">
                        <h2 className="text-2xl font-bold tracking-tight mb-6">Categories</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <CategoryCard
                                title="Key Mappings"
                                description="Efficient keyboard shortcuts and mappings"
                                icon={<Keyboard className="h-8 w-8" />}
                                href="/category/key-mappings"
                            />
                            <CategoryCard
                                title="Plugins"
                                description="Essential plugins to enhance functionality"
                                icon={<Package className="h-8 w-8" />}
                                href="/category/plugins"
                            />
                            <CategoryCard
                                title="Performance"
                                description="Tips to make Neovim faster and more efficient"
                                icon={<Zap className="h-8 w-8" />}
                                href="/category/performance"
                            />
                            <CategoryCard
                                title="LSP Setup"
                                description="Language Server Protocol configuration"
                                icon={<Code className="h-8 w-8" />}
                                href="/category/lsp"
                            />
                        </div>
                    </section> */}
                </main>
                <footer className="border-t py-6 md:py-0">
                    <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
                            Built with ❤️ for the Neovim & Laravel communities.
                        </p>
                        {/* <div className="flex items-center gap-4"> */}
                        {/*     <Link href="/about" className="text-muted-foreground text-sm underline-offset-4 hover:underline"> */}
                        {/*         About */}
                        {/*     </Link> */}
                        {/*     <Link href="/contact" className="text-muted-foreground text-sm underline-offset-4 hover:underline"> */}
                        {/*         Contact */}
                        {/*     </Link> */}
                        {/* </div> */}
                    </div>
                </footer>
            </div>
        </>
    );
}



// interface CategoryCardProps {
//     title: string;
//     description: string;
//     icon: React.ReactNode;
//     href: string;
// }

// function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
//     return (
//         <Card className="overflow-hidden">
//             <Link href={href} className="block h-full">
//                 <CardHeader className="p-4">
//                     <div className="text-primary mb-2 flex items-center justify-center">{icon}</div>
//                     <CardTitle className="text-center">{title}</CardTitle>
//                     <CardDescription className="text-center">{description}</CardDescription>
//                 </CardHeader>
//                 <CardFooter className="p-4 pt-0">
//                     <Button variant="ghost" className="w-full">
//                         Explore
//                     </Button>
//                 </CardFooter>
//             </Link>
//         </Card>
//     );
// }
