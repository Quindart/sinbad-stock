import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Check, Github, Linkedin } from 'lucide-react';
import { LightBulbIcon } from './Icons';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export const HeroCards = () => {
  return (
    <div className="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 lg:flex">
      {/* Central Glowing Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Testimonial */}
      <Card className="absolute -top-[15px] w-[340px] shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage className="rounded-xl" alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Nguyen Minh Son</CardTitle>
            <CardDescription>nms.investor@gmail.com</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          A great AI assistant that helps me control my spending and make smarter investment decisions!
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute top-4 right-5 flex w-80 flex-col items-center justify-center shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="mt-8 flex flex-col items-center w-full justify-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute -top-12 aspect-square h-24 w-24 rounded-full object-cover grayscale-[0%]"
          />
          <CardTitle className="text-center">Trinh Thai Quang</CardTitle>
          <CardDescription className="text-primary font-normal">
            Financial AI Engineer
          </CardDescription>
        </CardHeader>

        <CardContent className="pb-2 text-center">
          <p>
            I enjoy building intelligent AI systems that help users optimize their finances and invest more effectively.
          </p>
        </CardContent>
        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground h-5 w-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              target="_blank"
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
              })}
            >
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[270px] left-[50px] w-72 shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="item-center flex justify-between">
            Free
            <Badge variant="secondary" className="text-primary text-sm">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>
          <CardDescription>
            A free plan for basic budgeting and portfolio tracking.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="m-auto mb-4 w-4/5" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              'Smart expense analysis',
              'Real-time stock price tracking',
              '24/7 AI financial support',
            ].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Check className="text-green-500" /> <h3 className="ml-1">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute -right-[10px] -bottom-[20px]  w-[350px] shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
          <div className="bg-primary/20 mt-1 rounded-2xl p-1">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Smart Investment Suggestions</CardTitle>
            <CardDescription className="text-md mt-2">
              AI analyzes the market and recommends an optimized portfolio based on your financial goals.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};