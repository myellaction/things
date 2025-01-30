import localFont from 'next/font/local';
import "@sass/index.sass";
import Header from "@components/Header/Header";

const Inter = localFont({
  src: [
    {
      path: "../../src/assets/fonts/Inter/Inter-Regular.woff",
      weight: 'normal',
      style: 'normal'
    },
    {
      path: "../../src/assets/fonts/Inter/Inter-Bold.woff",
      weight: 'bold',
      style: 'normal'
    },
    {
      path: "../../src/assets/fonts/Inter/Inter-SemiBold.woff",
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../src/assets/fonts/Inter/Inter-Medium.woff',
      weight: '500',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--inter-font'
});

export const PlayfairDisplay = localFont({
  src: [
    {
      path:  "../../src/assets/fonts/PlayfairDisplay/PlayfairDisplay-SemiBoldItalic.ttf",
      weight: '600',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--playfair-display-font'
});

export const PlayfairFont = localFont({
  src: [{
      path:  "../../src/assets/fonts/Playfair/Playfair-Italic.ttf",
      weight: '400',
      style: 'italic'
  }],
  display: 'swap',
  variable: '--playfair-font'
});

export const metadata = {
  title: "Коштовності",
  description: "Перетворюємо сміття на коштовності",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    <body className={`${Inter.variable} ${PlayfairDisplay.variable} ${PlayfairFont.variable}`}>
      <div className="app">
        {children}
      </div>
    </body>
    </html>
  );
}
