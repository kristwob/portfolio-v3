'use client';

import Icons from '@/components/Icons';
import { cn } from '@/lib/utils';
import React from 'react';
import hotToast, { Toaster as HotToaster } from 'react-hot-toast';
import Paragraph from './Paragraph';

export const Toaster = HotToaster;

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
}

export function Toast({ visible, className, ...props }: ToastProps) {
  return (
    <div
      className={cn(
        'min-h-16 mb-2 flex w-87.5 flex-col items-start gap-1 rounded-md bg-white px-6 py-4 shadow-lg',
        visible && 'animate-in slide-in-from-bottom-5',
        className
      )}
      {...props}
    />
  );
}

interface ToastIconProps extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof Icons;
}

Toast.Icon = function ToastIcon({ name, className, ...props }: ToastIconProps) {
  const Icon = Icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <div className='flex h-20 w-20 items-center justify-center rounded-full bg-white'>
      <Icon className={cn('h-10 w-10', className)} {...props} />
    </div>
  );
};

interface ToastTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Toast.Title = function ToastTitle({ className, ...props }: ToastTitleProps) {
  return <Paragraph className={cn('text-sm font-medium', className)} {...props} />;
};

interface ToastDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

Toast.Description = function ToastDescription({ className, ...props }: ToastDescriptionProps) {
  return <Paragraph className={cn('text-sm opacity-80', className)} {...props} />;
};

interface ToastOpts {
  title?: string;
  message: string;
  type?: 'success' | 'error' | 'default';
  duration?: number;
}

export function toast(opts: ToastOpts) {
  const { title, message, type = 'default', duration = 3000 } = opts;

  return hotToast.custom(
    ({ visible }) => (
      <Toast
        visible={visible}
        className={cn(
          'backdrop-blur-md border shadow-2xl',
          {
            'bg-red-50/95 dark:bg-red-600/90 text-red-900 dark:text-white border-red-200 dark:border-red-500': type === 'error',
            'bg-linear-to-r from-emerald-50/95 to-teal-50/95 dark:from-emerald-600/90 dark:to-teal-600/90 text-emerald-900 dark:text-white border-emerald-200 dark:border-emerald-500': type === 'success',
            'bg-slate-50/95 dark:bg-slate-900/90 text-slate-900 dark:text-white border-slate-200 dark:border-slate-600': type === 'default',
          }
        )}
      >
        <div className="flex items-start gap-3">
          {type === 'success' && (
            <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-200/50 dark:bg-white/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
          {type === 'error' && (
            <div className="shrink-0 w-6 h-6 rounded-full bg-red-200/50 dark:bg-white/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-red-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
          <div className="flex-1">
            {title && <Toast.Title className="font-semibold">{title}</Toast.Title>}
            {message && <Toast.Description className="opacity-90">{message}</Toast.Description>}
          </div>
        </div>
      </Toast>
    ),
    { duration }
  );
}
