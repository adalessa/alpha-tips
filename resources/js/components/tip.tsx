import { Tip } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { CodeBlock } from "./code";

interface TipCardProps {
    tip: Tip;
}

export function TipCard({ tip }: TipCardProps) {
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
                <CodeBlock tip={tip} />
            </CardContent>
            <CardFooter className="pt-0">
                <Button variant="secondary" className="w-full" asChild>
                    <Link href={`/tip/${tip.id}`}>Read More</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
