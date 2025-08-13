'use client';

import { deleteInvoice } from '@/app/lib/actions';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

export const CreateInvoiceButton: React.FC = () => {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span> <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
};

export const UpdateInvoiceButton: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Link href={`/dashboard/invoices/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100">
      <PencilIcon className="w-5" />
    </Link>
  );
};

export const DeleteInvoiceButton: React.FC<{ id: string }> = ({ id }) => {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  const [state, formAction] = useActionState(deleteInvoiceWithId, undefined);

  return (
    <form action={formAction}>
      <DeleteButton />
    </form>
  );
};

const DeleteButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
      <span className="sr-only">Delete</span>
      {pending ? (
        <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
      ) : (
        <TrashIcon className="w-5" />
      )}
    </button>
  );
};
