import "@sass/index.sass";

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
    <body>
    <div className="app">
      {children}
    </div>
      {/*Eruda*/}
      <script src="//cdn.jsdelivr.net/npm/eruda"></script>
      <script>eruda.init();</script>
    </body>
    </html>
  );
}
