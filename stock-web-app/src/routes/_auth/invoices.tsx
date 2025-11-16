import { createFileRoute } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/invoices')({
  component: InvoicesRoute,
});

function InvoicesRoute() {
  return (
    <div className="grid min-h-[500px] grid-cols-3 md:grid-cols-5">
      <div className="col-span-1 py-2 pr-4 pl-2 md:border-r">
        <p className="mb-2">Choose an invoice from the list below.</p>
        <ol className="grid gap-2">
          {[].map(() => (
            <li></li>
          ))}
        </ol>
      </div>
      <div className="col-span-2 px-4 py-2 md:col-span-4">
        <Outlet />
      </div>
    </div>
  );
}
