import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = [
    { label: 'INICIO', href: '#' },
    { label: 'ACERCA DE', href: '#' },
    { label: 'PÁGINAS', href: '#' },
    { label: 'PORTAFOLIO', href: '#' },
    { label: 'BLOG', href: '#' },
    { label: 'TIENDA', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-tech-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">BIOSCOMPUTER</span>
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-neon-green transition-colors duration-300 text-sm font-medium tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Icons & Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-neon-green">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-neon-green">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-neon-green">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .359.16.359.359 0 .219-.141.559-.219.879-.199.82.411 1.488 1.227 1.488 1.467 0 2.6-1.544 2.6-3.781 0-1.984-1.426-3.365-3.462-3.365-2.36 0-3.741 1.766-3.741 3.581 0 .72.28 1.48.629 1.899.07.08.08.15.059.23-.061.28-.2 1.11-.23 1.29-.04.17-.13.21-.3.13-1.11-.52-1.81-2.157-1.81-3.471 0-2.84 2.061-5.445 5.944-5.445 3.122 0 5.551 2.226 5.551 5.205 0 3.102-1.954 5.605-4.67 5.605-.914 0-1.774-.477-2.067-.951l-.56 2.139c-.203.78-.754 1.76-1.12 2.358.84.26 1.73.401 2.651.401 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-neon-green">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-neon-green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-neon-green text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              0
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;