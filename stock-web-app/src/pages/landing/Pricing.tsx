import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: 'Free',
    popular: 0,
    price: 0,
    description:
      'Start managing your personal finances with AI-powered budgeting tools.',
    buttonText: 'Get Started',
    benefitList: [
      'Track daily expenses',
      'View spending trends',
      'Set simple financial goals',
      'Basic AI recommendations',
      'Community support',
    ],
  },
  {
    title: 'Premium',
    popular: 1,
    price: 5,
    description:
      'Unlock advanced analytics and portfolio tracking for smarter financial decisions.',
    buttonText: 'Start Free Trial',
    benefitList: [
      'Multiple account integration',
      'Advanced spending insights',
      'Automated saving suggestions',
      'Investment tracking & alerts',
      'Priority support',
    ],
  },
  {
    title: 'Enterprise',
    popular: 0,
    price: 40,
    description:
      'Full suite of AI-powered financial tools for teams and organizations.',
    buttonText: 'Contact Us',
    benefitList: [
      'Team budget management',
      'Custom reports & analytics',
      'Portfolio performance dashboards',
      'Dedicated account manager',
      '24/7 priority support',
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 px-6 lg:px-0 sm:py-32">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        Get
        <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">
          {' '}
          Unlimited{' '}
        </span>
        Access
      </h2>
      <h3 className="text-muted-foreground pt-4 pb-8 text-center text-xl">
        Manage your finances with smart AI insights and personal investment tools.
      </h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={`flex flex-col h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
              pricing.popular === PopularPlanType.YES
                ? 'shadow-black/10 drop-shadow-xl dark:shadow-white/10'
                : ''
            }`}
          >
            <CardHeader className="flex flex-col flex-grow">
              <CardTitle className="item-center flex justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-primary text-sm">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <CardDescription className="mt-2">{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow mt-2">
              <Button
                className={buttonVariants({
                  variant: 'default',
                  size: 'lg', // tăng kích thước button
                  className: 'shadow-md hover:shadow-lg transition-shadow duration-300', // shadow sáng
                })}
              >
                {pricing.buttonText}
              </Button>
            </CardContent>

            <hr className="m-auto mb-2 w-4/5" />
            <CardFooter className="flex flex-col flex-grow">
              <div className="space-y-3 mt-2">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{' '}
                    <h3 className="ml-2 text-sm">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
