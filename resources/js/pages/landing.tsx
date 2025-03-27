import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Terminal, Zap, Package, Keyboard, Code, Star } from "lucide-react"
import { Head, Link } from '@inertiajs/react';
import { Tip } from "@/types/index"

interface LandingProps{
    featured: Tip[];
    recent: Tip[];
    popular: Tip[];
}

export default function Landing({featured, recent, popular}: LandingProps) {
  return (
    <>
        <Head title="Alpha Tips">
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        </Head>
        <div className="flex min-h-screen flex-col items-center">
          <header className="flex flex-col items-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
              <div className="flex gap-2 items-center">
                <Terminal className="h-6 w-6" />
                <span className="hidden font-bold sm:inline-block">Alpha Tips</span>
              </div>
              <div className="flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-2">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search tips..."
                      className="w-full rounded-md border pl-8 md:w-[300px] lg:w-[300px]"
                    />
                  </div>
                  <Button variant="default">
                    <Star className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Button>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                      Master Your Neovim Configuration
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
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

            <section className="container px-4 py-12 md:px-6">
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
            </section>
          </main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built with ❤️ for the Neovim community.
                <a href="#" className="font-medium underline underline-offset-4 ml-1">
                  Contribute on GitHub
                </a>
              </p>
              <div className="flex items-center gap-4">
                <Link href="/about" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                  About
                </Link>
                <Link href="/contact" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
    </>
  )
}

interface TipCardProps {
    tip: Tip;
}

function TipCard({tip}: TipCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <Badge
            variant={"destructive"
              //tip.category === "plugins"
              //  ? "default"
              //  : tip.category === "keymaps"
              //    ? "secondary"
              //    : tip.category === "lsp"
              //      ? "outline"
              //      : "destructive"
            }
          >
            { "neovim" /* tip.category*/ }
          </Badge>
          <span className="text-xs text-muted-foreground">{new Date(tip.created_at).toLocaleDateString()}</span>
        </div>
        <CardTitle className="line-clamp-1 mt-2">{tip.title}</CardTitle>
        <CardDescription className="line-clamp-2">{tip.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="rounded-md bg-muted p-2">
          <pre className="text-sm overflow-x-auto">
            <code>{tip.code}</code>
          </pre>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="secondary" className="w-full" asChild>
          <Link href={`/tip/${tip.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface CategoryCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={href} className="block h-full">
        <CardHeader className="p-4">
          <div className="flex items-center justify-center mb-2 text-primary">{icon}</div>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription className="text-center">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="p-4 pt-0">
          <Button variant="ghost" className="w-full">
            Explore
          </Button>
        </CardFooter>
      </Link>
    </Card>
  )
}
