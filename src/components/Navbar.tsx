import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { useState, useRef, useEffect } from 'react';

export default function Navbar({ isSticky, navbarRef }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        ref={navbarRef}
        className={`w-full z-50 transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 shadow-md bg-white border-b border-gray-200'
            : 'relative bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <h1 className="text-xl font-bold text-green-600">White & Blue</h1>

          {/* Desktop Menu */}
          <section className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-2">
                {['Home', 'Programs', 'Trainers', 'Pricing', 'Contact'].map(
                  (item) => (
                    <NavigationMenuItem key={item}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={`/${item.toLowerCase()}`}
                          className="px-4 py-2 text-gray-700 hover:text-green-600"
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
              Join Now
            </Button>
          </section>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Menu className="h-6 w-6 text-gray-700" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="[&_button:has(svg.lucide-x)]:hidden p-6 w-64"
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-lg font-bold text-green-600">
                    White & Blue
                  </h1>
                  <X
                    className="h-6 w-6 cursor-pointer text-gray-700"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <nav className="flex flex-col space-y-4">
                  {['Home', 'Programs', 'Trainers', 'Pricing', 'Contact'].map(
                    (item) => (
                      <Link
                        key={item}
                        to={`/${item.toLowerCase()}`}
                        className="block text-lg font-medium text-gray-700 hover:text-green-600"
                        onClick={() => setOpen(false)}
                      >
                        {item}
                      </Link>
                    )
                  )}
                </nav>
                <Button
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded w-full"
                  onClick={() => setOpen(false)}
                >
                  Join Now
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      {isSticky && <div className="h-16 md:h-20"></div>}
    </div>
  );
}
