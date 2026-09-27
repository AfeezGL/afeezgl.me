import { ContactActions } from '@/components/ui/ContactActions';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Contact() {
    return (
        <footer id='contact' className='scroll-mt-4 bg-ink px-5 pt-20 text-text-on-dark md:px-20 md:pt-28'>
            <div className='mx-auto max-w-page'>
                <section aria-labelledby='contact-heading'>
                    <SectionHeading
                        id='contact-heading'
                        tone='ink'
                        align='center'
                        eyebrow='Contact'
                        setup='Hiring for a full-stack role?'
                        payoff="Let's talk."
                        lead="I'm in Lagos, Nigeria, and open to remote roles and relocation. LinkedIn is the quickest way to reach me."
                        className='mb-9 md:mb-10'
                    />
                    <ContactActions />
                </section>

                <div className='mt-20 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 text-xs text-text-on-dark-muted sm:flex-row md:mt-28'>
                    <p>© {new Date().getFullYear()} Afeez Lawal</p>
                    <a href='#top' className='group py-2 transition-colors hover:text-white'>
                        <span className='link-underline'>Back to top</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
