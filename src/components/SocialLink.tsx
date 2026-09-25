import { ElementType } from 'react';
import { ExternalLink } from './icons';

type Props = {
    Icon: ElementType;
    name: string;
    url: string;
};

export default function SocialLink({ Icon, name, url }: Props) {
    return (
        <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex p-2 items-center gap-2 rounded-sm text-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-white'
        >
            <Icon />
            <span className='text-white pl-2'>{name}</span>
            <span className='sr-only'>(opens in new tab)</span>
            <ExternalLink />
        </a>
    );
}
