import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Credentials } from '@/components/sections/Credentials';
import { Experience } from '@/components/sections/Experience';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
    return (
        <>
            <a
                href='#main'
                className='sr-only z-50 rounded-full bg-paper-light px-5 py-2 text-sm text-accent-soft focus:not-sr-only focus:fixed focus:left-4 focus:top-4'
            >
                Skip to content
            </a>
            <Header />
            <main id='main'>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Credentials />
            </main>
            <Contact />
        </>
    );
}
