import { Eye, GitBranch } from './icons';

export type ProjectProps = {
    name: string;
    tech: string;
    description?: string;
    sourceCode?: string;
    liveUrl?: string;
    liveLabel?: string;
};

const linkClass =
    'flex items-center gap-1 rounded-sm text-sm text-primary transition-colors hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export default function ProjectCard({ name, tech, description, sourceCode, liveUrl, liveLabel = 'Live' }: ProjectProps) {
    return (
        <article className='bg-card w-full p-6 flex flex-col gap-3 transition-colors lg:p-10 hover:bg-[#262628] focus-within:bg-[#262628]'>
            <header className='text-white'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='text-xs font-semibold'>{tech}</p>
            </header>

            {description ? <p className='text-primary text-sm'>{description}</p> : null}

            <div className='flex gap-3'>
                {sourceCode ? (
                    <a href={sourceCode} target='_blank' rel='noopener noreferrer' className={linkClass}>
                        <GitBranch width={16} height={16} />
                        <span className='sr-only'>{name}: </span>
                        <span>Code</span>
                        <span className='sr-only'> (opens in new tab)</span>
                    </a>
                ) : null}

                {liveUrl ? (
                    <a href={liveUrl} target='_blank' rel='noopener noreferrer' className={linkClass}>
                        <Eye width={16} height={16} />
                        <span className='sr-only'>{name}: </span>
                        <span>{liveLabel}</span>
                        <span className='sr-only'> (opens in new tab)</span>
                    </a>
                ) : null}
            </div>
        </article>
    );
}
