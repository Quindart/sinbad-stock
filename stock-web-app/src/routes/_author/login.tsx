import {
  createFileRoute,
  useRouter,
  useRouterState,
} from '@tanstack/react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export const title = 'Login Form';
import { redirect } from '@tanstack/react-router';
import { z } from 'zod';
import { LoginSchema } from '@/validationSchemas/login';
import { sleep } from '@/utils';
import { useAuth } from '@/auth';
import { useState } from 'react';
const fallback = '/dashboard' as const;

export const Route = createFileRoute('/_author/login')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || fallback });
    }
  },
  component: LoginComponent,
});
function LoginComponent() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const auth = useAuth();
  const router = useRouter();
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const navigate = Route.useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const search = Route.useSearch();

  const onFormSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsSubmitting(true);
    try {
      const fieldValue = values.email;
      if (!fieldValue) return;
      const username = fieldValue.toString();
      await auth.login(username);
      await router.invalidate();
      await sleep(1);
      await navigate({ to: search.redirect || fallback });
    } catch (error) {
      console.error('Error logging in: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const isLoggingIn = isLoading || isSubmitting;
  console.log('🚀 ~ LoginComponent ~ isLoggingIn:', isLoggingIn);
  return (
  <div className="flex w-full h-screen bg-background overflow-hidden">
    {/* LEFT: LOGIN FORM */}
    <section className="w-full max-w-md mx-auto my-auto p-6">
      <Form {...form}>
        <form
          className="space-y-5 bg-card p-6 rounded-xl shadow-lg border border-border"
          onSubmit={form.handleSubmit(onFormSubmit)}
        >
          <div className="space-y-1 text-center mb-2">
            <h1 className="text-3xl font-bold text-primary tracking-tight">
              Welcome back
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter your credentials to access your account
            </p>
          </div>

          {/* EMAIL */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background border-border focus-visible:ring-primary"
                    placeholder="you@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PASSWORD */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <a
                    className="text-sm text-primary hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <FormControl>
                  <Input
                    className="bg-background border-border focus-visible:ring-primary"
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* SUBMIT BUTTON */}
          <Button
            className="w-full py-2.5 text-base font-medium shadow-md shadow-primary/30 
            hover:shadow-lg hover:shadow-primary/40 transition-all duration-200"
            type="submit"
          >
            Sign In
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don’t have an account?{' '}
            <a className="text-primary hover:underline" href="#">
              Sign up
            </a>
          </p>
        </form>
      </Form>
    </section>

    {/* RIGHT: IMAGE */}
    <aside className="flex-1 relative hidden md:block">
      <img
        width={1400}
        height={'100%'}
        className="h-full w-full object-cover opacity-70"
        src="assets/bg-login.webp"
        alt="stock-quindart-login-bg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* CENTER TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        text-center px-6 py-4 rounded-xl backdrop-blur-md bg-black/30 
        border border-white/20 shadow-xl">
        <h1 className="font-bold text-4xl text-orange-200 drop-shadow-lg">
          Build Yourself
        </h1>
        <p className="text-orange-100/90 mt-2 text-sm">
          This helps you grow yourself and elevate your financial vibe.
        </p>
      </div>
    </aside>
  </div>
);

}
