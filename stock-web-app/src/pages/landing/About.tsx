import { Statistics } from './Statistics';
import pilot from '/assets/pilot.png';

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 rounded-lg border py-12">
        <div className="flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] rounded-lg object-contain"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="from-primary/60 to-primary bg-gradient-to-b bg-clip-text text-transparent">
                  About{' '}
                </span>
                Chatbot
              </h2>
              <p className="text-muted-foreground mt-4 text-xl">
                Sinbad Trading AI is an intelligent financial assistant designed to help users 
                manage personal budgets, analyze spending habits, and make smarter stock 
                investment decisions. With real-time insights, portfolio tracking, and 
                AI-powered market analysis, our chatbot simplifies the way you approach 
                finance and trading.  
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
