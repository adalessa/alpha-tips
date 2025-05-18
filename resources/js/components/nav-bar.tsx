import { User } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { List, Star, Terminal } from 'lucide-react';
import { Button } from './ui/button';

/**
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <Link className="flex items-center gap-2" href="/">
                    <Terminal className="h-6 w-6" /> <span className="hidden font-bold sm:inline-block">Alpha Tips</span>
                </Link>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <div className="relative w-full max-w-sm">
                            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                            <Input type="search" placeholder="Search tips..." className="w-full rounded-md border pl-8 md:w-[300px] lg:w-[300px]" />
                        </div>
                        {auth.user ? (
                            <>
                                <Button variant="secondary" asChild>
                                    <Link href="/dashboard">Dashboard</Link>
                                </Button>
                                <Button variant="secondary" asChild>
                                    <Link href="/settings/profile">{auth.user.name}</Link>
                                </Button>
                            </>
                        ) : (
                            <Button variant="link" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                        )}
                    </nav>
                </div>
            </div>
        </header>
 */

export default function NavBar() {
    const { auth } = usePage<{ auth: { user?: User } }>().props;
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-2 items-center">
                    <Terminal className="h-6 w-6" />
                    <span className="hidden font-bold sm:inline-block">Alpha Tips</span>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        {/* <div className="relative w-full max-w-sm"> */}
                        {/*   <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
                        {/*   <Input */}
                        {/*     type="search" */}
                        {/*     placeholder="Search tips..." */}
                        {/*     className="w-full rounded-md border pl-8 md:w-[300px] lg:w-[300px]" */}
                        {/*   /> */}
                        {/* </div> */}
                        <Link href="/tips">
                            <Button variant="outline">
                                <List className="mr-2 h-4 w-4" />
                                Browse All Tips
                            </Button>
                        </Link>

                        {auth.user ? (
                            <>
                                <Button variant="secondary" asChild>
                                    <Link href="/dashboard">Dashboard</Link>
                                </Button>
                                <Button variant="secondary" asChild>
                                    <Link href="/settings/profile">{auth.user.name}</Link>
                                </Button>
                            </>
                        ) : (
                            <Button variant="link" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
