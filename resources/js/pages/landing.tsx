import NavBar from '@/components/nav-bar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tip } from '@/types/index';
import { Head, Link } from '@inertiajs/react';
import { Search } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface LandingProps {
    featured: Tip[];
    recent: Tip[];
    popular: Tip[];
}

export default function Landing({ featured, recent, popular }: LandingProps) {
    return (
        <>
            <Head title="Alpha Tips">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <NavBar />
            <div className="flex min-h-screen flex-col items-center">
                <main className="flex-1">
                    <section className="bg-muted w-full rounded-xl py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                        Master Your Neovim Configuration
                                    </h1>
                                    <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                                        Discover the best tips, plugins, and configurations to supercharge your Neovim experience.
                                    </p>
                                </div>
                                <div className="w-full max-w-sm space-y-2">
                                    <div className="flex space-x-2">
                                        <Input placeholder="Search for tips..." />
                                        <Button type="submit">
                                            <Search className="mr-2 h-4 w-4" />
                                            Search
                                        </Button>
                                    </div>
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
                            Built with ❤️ for the Neovim community.
                            <a href="#" className="ml-1 font-medium underline underline-offset-4">
                                Contribute on GitHub
                            </a>
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="/about" className="text-muted-foreground text-sm underline-offset-4 hover:underline">
                                About
                            </Link>
                            <Link href="/contact" className="text-muted-foreground text-sm underline-offset-4 hover:underline">
                                Contact
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

interface TipCardProps {
    tip: Tip;
}

function TipCard({ tip }: TipCardProps) {
    return (
        <Card className="overflow-hidden px-4 py-4">
            <CardHeader className="">
                <CardTitle className="mt-2 line-clamp-1 flex items-center justify-between">
                    <Link href={`/tip/${tip.id}`}>{tip.title}</Link>
                    <span className="text-muted-foreground text-xs">{new Date(tip.created_at).toLocaleDateString()}</span>
                </CardTitle>
                <CardDescription className="line-clamp-2">{tip.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
                <SyntaxHighlighter className="rounded-xl" language="{tip.language}" style={nord}>
                    {tip.code}
                </SyntaxHighlighter>
            </CardContent>
            <CardFooter className="pt-0">
                <Button variant="secondary" className="w-full" asChild>
                    <Link href={`/tip/${tip.id}`}>Read More</Link>
                </Button>
            </CardFooter>
        </Card>
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
