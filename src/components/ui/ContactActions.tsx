import { Download, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/BrandIcons';
import { PillLink } from '@/components/ui/PillLink';
import { site } from '@/lib/site';

const iconButton =
    'flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10';

// Email, resume, LinkedIn and GitHub: the same actions in the hero and the contact footer.
// The icon pair wraps as one group so a narrow screen never leaves a lone icon on a row.
export function ContactActions() {
    return (
        <div className='flex flex-wrap items-center justify-center gap-3'>
            <PillLink href={`mailto:${site.email}`}>
                <Mail className='size-4' aria-hidden='true' />
                Email me
            </PillLink>
            <PillLink href={site.resume} download variant='secondary'>
                <Download className='size-4' aria-hidden='true' />
                Download Resume
            </PillLink>
            <div className='flex gap-3'>
                <a href={site.linkedin} target='_blank' rel='noopener noreferrer' className={iconButton}>
                    <LinkedInIcon className='size-[18px]' />
                    <span className='sr-only'>LinkedIn profile (opens in new tab)</span>
                </a>
                <a href={site.github} target='_blank' rel='noopener noreferrer' className={iconButton}>
                    <GitHubIcon className='size-5' />
                    <span className='sr-only'>GitHub profile (opens in new tab)</span>
                </a>
            </div>
        </div>
    );
}
