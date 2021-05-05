import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <footer className="border-t h-14 flex justify-center items-center text-center">
        <div className="container">
          <p>&copy; event</p>
        </div>
      </footer>
    </>
  );
};

export default MyApp;
