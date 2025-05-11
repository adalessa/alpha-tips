import NavBar from '@/components/nav-bar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Toaster } from '@/components/ui/sonner';
import { Tip, User } from '@/types/index';
import { Head, Link, usePage } from '@inertiajs/react';
import axios from 'axios';
import { ArrowLeft, Bookmark, Copy, Share2, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { toast } from 'sonner';

interface TipPageProps {
    tip: Tip;
    related: Tip[];
    liked: boolean;
    saved: boolean;
}

export default function TipPage({ tip, related, liked, saved }: TipPageProps) {
    const { auth } = usePage<{ auth: { user?: User } }>().props;

    const [, setCopied] = useState(false);
    const [internalLiked, setLiked] = useState(liked);
    const [internalSave, setSaved] = useState(saved);

    const toggleLike = () => {
        if (!auth.user) {
            toast('You need to be logged in to like a tip.');
            return;
        }
        axios({
            url: `/tip/${tip.id}/like`,
            method: !internalLiked ? 'POST' : 'DELETE',
        })
            .then((response) => {
                if (response.status === 200) {
                    toast(response.data.message);
                    setLiked(!internalLiked);
                } else {
                    toast('An error occurred while liking the tip.');
                }
            })
            .catch(() => {
                toast('An error occurred while liking the tip.');
            });
    };

    const toggleSave = () => {
        if (!auth.user) {
            toast('You need to be logged in to save a tip.');
            return;
        }
        axios({
            url: `/tip/${tip.id}/save`,
            method: !internalSave ? 'POST' : 'DELETE',
        })
            .then((response) => {
                if (response.status === 200) {
                    toast(response.data.message);
                    setSaved(!internalSave);
                } else {
                    toast('An error occurred while liking the tip.');
                }
            })
            .catch(() => {
                toast('An error occurred while liking the tip.');
            });
    };

    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        toast('The code has been copied to your clipboard.');
        setTimeout(() => setCopied(false), 2000);
    };

    const share = () => {
        navigator.clipboard.writeText(window.location.href);
        toast('The page URL has been copied to your clipboard.');
    };

    return (
        <>
            <Head title={tip.title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center">
                <NavBar />
                <main className="container flex-1 py-10">
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
                            <div className="mb-4 flex items-center justify-between gap-2">
                                <h1 className="mb-4 text-3xl font-bold">{tip.title}</h1>
                                <span className="text-muted-foreground text-sm">{new Date(tip.created_at).toLocaleDateString()}</span>
                            </div>

                            <p className="text-muted-foreground mb-6 text-lg">{tip.description}</p>

                            <div className="mb-8">
                                <Card className="p-2">
                                    <CardContent className="relative p-2">
                                        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => copyCode(tip.code)}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                        <SyntaxHighlighter className="rounded-xl" language="{tip.language}" style={nord}>
                                            {tip.code}
                                        </SyntaxHighlighter>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="prose dark:prose-invert max-w-none space-y-6">
                                <h2 className="text-2xl font-semibold">How It Works</h2>
                                <p className="text-base leading-relaxed">{tip.explanation || 'No explanation provided for this tip.'}</p>

                                <h2 className="text-2xl font-semibold">Benefits</h2>
                                <ul className="list-disc space-y-2 pl-5">
                                    {tip.benefits.length > 0 ? (
                                        tip.benefits.map((benefit, i) => (
                                            <li key={i} className="text-base leading-relaxed">
                                                {benefit}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-base leading-relaxed">No benefits available for this tip.</li>
                                    )}
                                </ul>

                                <h2 className="text-2xl font-semibold">Additional Notes</h2>
                                <p className="text-base leading-relaxed">{tip.notes || 'No notes'}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-lg font-medium">Actions</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Button variant={internalLiked ? 'default' : 'outline'} className="w-full" onClick={() => toggleLike()}>
                                            <ThumbsUp className="mr-2 h-4 w-4" />
                                            {internalLiked ? 'Liked' : 'Like'}
                                        </Button>
                                        <Button variant={internalSave ? 'default' : 'outline'} className="w-full" onClick={() => toggleSave()}>
                                            <Bookmark className="mr-2 h-4 w-4" />
                                            {internalSave ? 'Saved' : 'Save'}
                                        </Button>
                                        <Button variant="outline" className="col-span-2 w-full" onClick={() => share()}>
                                            <Share2 className="mr-2 h-4 w-4" />
                                            Share
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="mb-4 text-lg font-medium">Related Tips</h3>
                                    <div className="space-y-4">
                                        {related.slice(0, 3).map((relatedTip) => (
                                            <div key={relatedTip.id} className="border-b pb-4 last:border-0 last:pb-0">
                                                <Link href={`/tip/${relatedTip.id}`} className="font-medium hover:underline">
                                                    {relatedTip.title}
                                                </Link>
                                                <p className="text-muted-foreground mt-1 text-sm">{relatedTip.description}</p>
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
                        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
                            Built with ❤️ for the Neovim community.
                            <a href="#" className="ml-1 font-medium underline underline-offset-4">
                                Contribute on GitHub
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
            <Toaster />
        </>
    );
}
