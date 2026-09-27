import { Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons';
import { PillLink } from '@/components/ui/PillLink';
import { site } from '@/lib/site';

// LinkedIn, resume and GitHub: the same three actions in the hero and the contact footer.
export function ContactActions() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-3'>
            <PillLink href={site.linkedin} external>
                <LinkedInIcon className='size-4' />
                Connect on LinkedIn
            </PillLink>
            <PillLink href={site.resume} download variant='secondary'>
                <Download className='size-4' aria-hidden='true' />
                Download Resume
            </PillLink>
            <a
                href={site.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10'
            >
                <GitHubIcon className='size-5' />
                <span className='sr-only'>GitHub profile (opens in new tab)</span>
            </a>
        </div>
    );
}
