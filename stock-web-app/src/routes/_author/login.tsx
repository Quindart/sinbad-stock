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
    <div className="w-full max-w-sm">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onFormSubmit)}>
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground text-sm">
              Enter your credentials to access your account
            </p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="you@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <a
                    className="text-muted-foreground text-sm hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <FormControl>
                  <Input
                    className="bg-background"
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Sign In
          </Button>
          <p className="text-muted-foreground text-center text-sm">
            Don't have an account?{' '}
            <a className="hover:underline" href="#">
              Sign up
            </a>
          </p>
        </form>
      </Form>
    </div>
  );
}
