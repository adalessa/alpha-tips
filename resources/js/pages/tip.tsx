import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Copy, Terminal, ThumbsUp, Bookmark, Share2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Head, Link } from '@inertiajs/react';
import { Toaster } from "@/components/ui/sonner"
import { Tip } from "@/types/index"

interface TipPageProps {
    tip: Tip;
    related: Tip[];
}

export default function TipPage({tip, related}: TipPageProps) {
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast("The code has been copied to your clipboard.")
    setTimeout(( ) => setCopied(false), 2000)
  }

  const share = (id: number) => {
      toast("Copy the page url heheh")
  }

  return (
    <>
        <Head title={tip.title}>
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        </Head>
        <div className="flex min-h-screen flex-col items-center">
          <header className="flex flex-col items-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
              <div className="flex gap-2 items-center">
                <Terminal className="h-6 w-6" />
                <Link href="/" className="hidden font-bold sm:inline-block">
                  NeoVim Tips
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1 container py-10">
            <div className="mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to tips
                </Link>
              </Button>
            </div>

            <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="outline">{'neovim'}</Badge>
                  <span className="text-sm text-muted-foreground">{new Date(tip.created_at).toLocaleDateString()}</span>
                </div>

                <h1 className="text-3xl font-bold mb-4">{tip.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{tip.description}</p>

                <div className="mb-8">
                      <Card>
                        <CardContent className="p-4 relative">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2"
                            onClick={() => copyCode(tip.code)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          <pre className="text-sm overflow-x-auto p-2 bg-muted rounded-md">
                            <code>{tip.code}</code>
                          </pre>
                        </CardContent>
                      </Card>
                </div>

                <div className="prose max-w-none dark:prose-invert space-y-6">
                  <h2 className="text-2xl font-semibold">How It Works</h2>
                  <p className="text-base leading-relaxed">
                    {tip.explanation || "No explanation provided for this tip."}
                  </p>

                  <h2 className="text-2xl font-semibold">Benefits</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {tip.benefits.length > 0 ? (
                      tip.benefits.map((benefit, i) => (
                        <li key={i} className="text-base leading-relaxed">{benefit}</li>
                      ))
                    ) : (
                      <li className="text-base leading-relaxed">No benefits available for this tip.</li>
                    )}
                  </ul>

                  <h2 className="text-2xl font-semibold">Additional Notes</h2>
                  <p className="text-base leading-relaxed">
                    {tip.notes || "No notes"}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant={false ? "default" : "outline"} className="w-full" onClick={() => setLiked(!liked)}>
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {liked ? "Liked" : "Like"}
                      </Button>
                      <Button
                        variant={bookmarked ? "default" : "outline"}
                        className="w-full"
                        onClick={() => setBookmarked(!bookmarked)}
                      >
                        <Bookmark className="mr-2 h-4 w-4" />
                        {bookmarked ? "Saved" : "Save"}
                      </Button>
                      <Button variant="outline" className="w-full col-span-2" onClick={() => share(tip.id)}>
                        <Share2 className="mr-2 h-4 w-4"/>
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Related Tips</h3>
                    <div className="space-y-4">
                      {related.slice(0, 3).map((relatedTip) => (
                        <div key={relatedTip.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <Link href={`/tip/${relatedTip.id}`} className="font-medium hover:underline">
                            {relatedTip.title}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">{relatedTip.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>

          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                Built with ❤️ for the Neovim community.
                <a href="#" className="font-medium underline underline-offset-4 ml-1">
                  Contribute on GitHub
                </a>
              </p>
            </div>
          </footer>
        </div>
        <Toaster />
    </>
  )
}
