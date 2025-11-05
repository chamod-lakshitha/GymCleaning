import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';

export default function Banner() {
  return (
    <div className="w-full bg-green-600">
      {/* Contact Bar */}
      <div className="max-w-7xl mx-auto text-white text-md px-7 py-2.5 flex justify-between items-center">
        {/* Social Links */}
        <div className="flex items-center space-x-1">
          <span className="hidden md:inline">Join us on :</span>
          <Facebook className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
        </div>

        {/* Call Info */}
        <div>Call us : +94 77 123 4567</div>
      </div>
    </div>
  );
}
