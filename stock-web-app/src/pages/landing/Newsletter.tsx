/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Subscribed!');
  };

  return (
    <section id="newsletter" className='px-6 lg:px-0'>
      <hr className="mx-auto w-11/12" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl font-bold md:text-5xl">
          Join Our Daily{' '}
          <span className="from-primary/60 to-primary bg-linear-to-b bg-clip-text text-transparent">
            Stock Insights
          </span>
        </h3>
        <p className="text-muted-foreground mt-4 mb-8 text-center text-xl">
          Stay updated with the latest market trends, investment tips, and personal finance strategies.
        </p>

        <form
          className="mx-auto flex w-full flex-col gap-4 md:w-6/12 md:flex-row md:gap-2 lg:w-4/12"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="your.email@example.com"
            className="bg-muted/50 dark:bg-muted/80 h-16"
            aria-label="email"
          />
          <Button size={'xl'} className='text-xl'>Subscribe</Button>
        </form>
      </div>

      <hr className="mx-auto w-11/12" />
    </section>
  );
};