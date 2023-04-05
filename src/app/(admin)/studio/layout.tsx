import React from 'react';
import '@/styles/global.css'

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
          <head /> will contain the components returned by the nearest parent
          head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
      <body>{children}</body>
    </html>
  );
}
