import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import image from '/assets/growth.png';
import image3 from '/assets/reflecting.png';
import image4 from '/assets/looking-ahead.png';
import { Badge } from '@/components/ui/badge';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: 'Responsive Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: image4,
  },
  {
    title: 'Intuitive user interface',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: image3,
  },
  {
    title: 'AI-Powered insights',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: image,
  },
];

const featureList: string[] = [
  'Dark/Light theme',
  'Reviews',
  'Features',
  'Pricing',
  'Contact form',
  'Our team',
  'Responsive design',
  'Newsletter',
  'Minimalist',
];

export const Features = () => {
  return (
    <section id="features" className="container space-y-8 px-6 lg:px-0 py-20 sm:py-32">
      <h2 className="text-3xl font-bold md:text-center lg:text-4xl">
        Many{' '}
        <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap gap-4 md:justify-center">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="mx-auto w-[200px] lg:w-[300px]"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
