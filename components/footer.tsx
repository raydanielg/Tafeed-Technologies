import Link from "next/link"
import { Globe, MessageSquare, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Globe className="h-6 w-6 text-primary" />
              <span>Tafeed Technologies</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading provider of comprehensive technology solutions in East Africa. Transforming businesses through
              innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/web-design" className="hover:text-primary">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-primary">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/hosting" className="hover:text-primary">
                  Hosting Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="hover:text-primary">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="hover:text-primary">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/database" className="hover:text-primary">
                  Database Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <div>
                  <div>+255 742 710 054</div>
                  <div>+255 613 976 254</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <div>
                  <div>info@tafeedtech.com</div>
                  <div>support@tafeedtech.com</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <div>Dar es Salaam, Tanzania</div>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <Link href="https://wa.me/255742710054" className="hover:text-primary">
                  WhatsApp Chat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <Globe className="h-5 w-5 text-primary" />
            <span>Tafeed Technologies</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Tafeed Technologies. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
