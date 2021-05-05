import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />;
      <footer className="border-t">
        <div className="container">
          <p>&copy; event</p>
        </div>
      </footer>
    </>
  );
};

export default MyApp;
