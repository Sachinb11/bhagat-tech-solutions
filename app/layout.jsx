import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from 'next/font/google';
import ThemeProvider  from '@/components/ThemeProvider';
import CustomCursor   from '@/components/CustomCursor';
import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-var',
  display: 'swap',
});

export const metadata = {
  title: 'Bhagat Tech Solutions – Premium Digital & Software Solutions',
  description:
    'Build powerful websites, mobile apps, and scalable digital platforms. Bhagat Tech Solutions delivers professional IT services in Maharashtra, India.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8X0J40Q0BW"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8X0J40Q0BW');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '1586802112551595');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('bts-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />

      </head>

      <body>

        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1586802112551595&ev=PageView&noscript=1"
          />
        </noscript>

        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}