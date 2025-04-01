import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="py-4 border-b border-gray-100 bg-white sticky top-0 z-40">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl text-primary-purple">Ai Builder</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/product" className="text-gray-600 hover:text-primary-purple transition-colors">
            Product
          </Link>
          <Link to="/features" className="text-gray-600 hover:text-primary-purple transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-primary-purple transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary-purple transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-lg">
            Log in
          </Button>
          <Button className="rounded-lg bg-primary-purple hover:bg-secondary-purple">
            Sign up free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-soft z-40 animate-fade-in">
          <div className="container-custom py-4 flex flex-col">
            <nav className="flex flex-col space-y-4 mb-6">
              <Link to="/product" className="text-gray-600 hover:text-primary-purple transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Product
              </Link>
              <Link to="/features" className="text-gray-600 hover:text-primary-purple transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-primary-purple transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-primary-purple transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </nav>

            <div className="flex flex-col space-y-3">
              <Button variant="outline" className="w-full justify-center rounded-lg">
                Log in
              </Button>
              <Button className="w-full justify-center rounded-lg bg-primary-purple hover:bg-secondary-purple">
                Sign up free
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;