import { Tip } from '@/types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
    tip: Tip;
}

export function CodeBlock({ tip }: CodeBlockProps) {
    return (
        <SyntaxHighlighter className="rounded-xl" language="{tip.language}" style={nord}>
            {tip.code}
        </SyntaxHighlighter>
    );
}
