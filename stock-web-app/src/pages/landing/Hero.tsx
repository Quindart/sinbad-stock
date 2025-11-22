import { Button, buttonVariants } from '@/components/ui/button';
import { HeroCards } from './HeroCards';
import { Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="container grid place-items-center gap-10 py-20 px-6 md:px-4 lg:px-0 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#f5c996] to-[#d28647] bg-clip-text text-transparent">
              Sinbad
            </span>{' '}
            trading AI
          </h1>{' '}
          for{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#f8fb61] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Stock
            </span>{' '}
            Market
          </h2>
        </main>

        <p className="text-muted-foreground mx-auto text-xl md:w-10/12 lg:mx-0">
          An AI-powered assistant that helps you manage personal finances, track investments,
          and make smarter stock trading decisions with real-time insights.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
        <Button size={'xl'} className="w-full md:w-1/3 text-xl shadow-[0_0_20px_rgba(255,200,100,0.7)] hover:shadow-[0_0_30px_rgba(255,200,100,0.9)] transition-all">
  Get Started
</Button>


          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/minh-quang-le-76410730a/"
            target="_blank"
            className={`w-full text-xl h-14 md:w-1/3 ${buttonVariants({
              variant: 'outline',
            })}`}
          >
            <Linkedin className="ml-2 h-5 w-5" />
           Contact us
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
