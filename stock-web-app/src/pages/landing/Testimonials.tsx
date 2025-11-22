import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'Alice Johnson',
    userName: '@alice_j',
    comment: 'This AI chatbot has completely transformed how I manage my personal finances!',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Michael Smith',
    userName: '@michael_s',
    comment:
      'I love how it tracks my expenses and gives actionable insights to optimize my spending.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Emma Williams',
    userName: '@emma_w',
    comment:
      'Investing has never been easier. The chatbot helps me monitor my portfolio and reminds me of key market updates.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'David Lee',
    userName: '@david_l',
    comment:
      'The personal finance suggestions are spot on. I finally feel in control of my money!',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Sophia Brown',
    userName: '@sophia_b',
    comment:
      'The AI-driven tips and daily spending insights make budgeting simple and effective.',
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'James Taylor',
    userName: '@james_t',
    comment:
      'Highly recommend this chatbot for anyone looking to improve their financial habits and investments.',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container px-6 lg:px-0 py-24 sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        Discover Why
        <span className="from-primary/60 to-primary bg-linear-to-b bg-clip-text text-transparent">
          {' '}
          People Love{' '}
        </span>
        Our Chatbot
      </h2>
      <p className="text-muted-foreground pt-4 pb-8 text-xl">
        Real users share how our AI-powered personal finance assistant helped them track spending, invest wisely, and achieve financial goals.
      </p>
      <div className="mx-auto grid columns-2 space-y-4 sm:block md:grid-cols-2 lg:columns-3 lg:grid-cols-4 lg:gap-6 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md overflow-hidden md:break-inside-avoid"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};
