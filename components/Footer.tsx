'use client';
import React from 'react';
import { Button } from './ui/Button';
import { ChatCircleIcon, CoffeeIcon, EnvelopeSimpleIcon, GithubLogoIcon, XLogoIcon } from '@phosphor-icons/react';

interface FooterProps {
  text: string;
}

export const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-border bg-background/50 backdrop-blur-sm relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6 text-center">
        <p className="text-sm text-muted-foreground">
          {text}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
            {/* X (Twitter) */}
            <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 text-muted-foreground hover:bg-foreground hover:text-background transition-colors" asChild>
              <a href="https://x.com/xxxxx" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <XLogoIcon className="w-4 h-4" weight="duotone" />
              </a>
            </Button>
            
            {/* GitHub */}
            <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 text-muted-foreground hover:bg-foreground hover:text-background transition-colors" asChild>
              <a href="https://github.com/kangchainx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubLogoIcon className="w-4 h-4" weight="duotone" />
              </a>
            </Button>
            
            {/* Email */}
            <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 text-muted-foreground hover:bg-foreground hover:text-background transition-colors" asChild>
              <a href="mailto:chris@email.com" aria-label="Email">
                <EnvelopeSimpleIcon className="w-4 h-4" weight="duotone" />
              </a>
            </Button>
            
            {/* WeChat */}
            <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 text-muted-foreground hover:text-green-600 hover:bg-green-500/10 transition-colors" title="WeChat ID: chris_kang" asChild>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="WeChat">
                <ChatCircleIcon className="w-4 h-4" weight="duotone" />
               </a>
            </Button>
            
            {/* Buy Me a Coffee */}
            <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 text-muted-foreground hover:text-yellow-500 hover:bg-yellow-500/10 transition-colors" asChild>
              <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee">
                <CoffeeIcon className="w-4 h-4" weight="duotone" />
              </a>
            </Button>
        </div>
      </div>
    </footer>
  );
};
