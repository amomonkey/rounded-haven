
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center py-20 bg-tech-light">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold mb-4 text-primary-purple">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Button className="btn-primary" href="/">
            Return to Home
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
