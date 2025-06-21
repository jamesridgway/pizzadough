import { Pizza } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  currentPage: 'home' | 'about';
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <div className="mb-8">
      {/* Navigation */}
      <div className="flex justify-end mb-6">
        <nav className="flex space-x-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors px-3 py-1 rounded-md ${
              currentPage === 'home' 
                ? 'text-orange-500 border-1 border-orange-600' 
                : 'text-orange-500 border-1 border-transparent hover:text-orange-600'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors px-3 py-1 rounded-md ${
              currentPage === 'about' 
                ? 'text-orange-500 border-1 border-orange-600' 
                : 'text-orange-500 border-1 border-transparent hover:text-orange-600'
            }`}
          >
            About
          </Link>
        </nav>
      </div>
      
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Pizza className="h-12 w-12 text-orange-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Pizza Dough Calculator</h1>
        </div>
        <p className="text-lg text-gray-600">Calculate the perfect pizza dough recipe with customisable parameters</p>
      </div>
    </div>
  );
} 