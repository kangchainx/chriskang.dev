'use client';
import React, { useState } from 'react';
import { Button } from './ui/Button';
import { CheckIcon, CoffeeIcon, EnvelopeSimpleIcon, GithubLogoIcon, WechatLogoIcon, XLogoIcon } from '@phosphor-icons/react';
import { VisitStats } from './VisitStats';

interface FooterProps {
  text: string;
  wechatId: string;
}

export const Footer: React.FC<FooterProps> = ({ text, wechatId }) => {
  const [wechatCopied, setWechatCopied] = useState(false);

  const handleCopyWechat = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setWechatCopied(true);
      setTimeout(() => setWechatCopied(false), 1600);
    } catch {
      setWechatCopied(false);
    }
  };

  return (
    <footer className="w-full py-8 mt-12 border-t border-border bg-background/50 backdrop-blur-sm relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center gap-6 text-center">
        <p className="text-sm text-muted-foreground">
          {text}
        </p>

        <VisitStats />
        
        <div className="flex flex-wrap gap-4 justify-center">
            {/* X (Twitter) */}
            <Button variant="ghost" size="icon" className="rounded-full w-9 h-9 text-muted-foreground hover:bg-foreground hover:text-background transition-colors" asChild>
              <a href="https://x.com/kangchainx" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
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
              <a href="mailto:kangchenhe666@gmail.com" aria-label="Email">
                <EnvelopeSimpleIcon className="w-4 h-4" weight="duotone" />
              </a>
            </Button>
            
            {/* WeChat */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-9 h-9 text-muted-foreground hover:text-green-600 hover:bg-green-500/10 transition-colors"
              onClick={handleCopyWechat}
              aria-label="WeChat"
              title={`WeChat ID: ${wechatId}`}
              type="button"
            >
              {wechatCopied ? (
                <CheckIcon className="w-4 h-4 text-primary" weight="bold" />
              ) : (
                <WechatLogoIcon className="w-4 h-4" weight="duotone" />
              )}
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
