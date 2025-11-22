import { MagnifierIcon, WalletIcon, ChartIcon } from './Icons';
import cubeLeg from '/assets/cube-leg.png';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { JSX } from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}
const serviceList: ServiceProps[] = [
  {
    title: 'Smart Budgeting',
    description:
      'Track your daily spending, set financial goals, and receive AI-powered suggestions to optimize your personal budget.',
    icon: <ChartIcon />,
  },
  {
    title: 'Financial Planning',
    description:
      'Analyze your income, expenses, and saving habits to build a personalized roadmap toward long-term financial stability.',
    icon: <WalletIcon />,
  },
  {
    title: 'Automated Insights',
    description:
      'Let the system automatically detect unusual transactions, categorize expenses, and notify you about important financial updates.',
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-10 sm:py-20 px-6">
     <div className="grid place-items-center gap-2 lg:grid-cols-[1fr_1fr]">
        <div className="w-full">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">
              Client-Centric{' '}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground mt-4 mb-8 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            dolor.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                  <div className="bg-primary/20 mt-1 rounded-2xl p-1">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <img
          src={cubeLeg}
          className="w-[300px] object-contain md:w-[500px] lg:w-[600px]"
          alt="About services"
        />
      </div>
    </section>
  );
};
