import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">IT</span>
              </div>
              <span className="text-xl font-bold">TechConsult</span>
            </div>
            <p className="text-gray-400 text-sm">
                Трансформация бизнеса с помощью инновационных ИТ-решений и интеллектуальной автоматизации.
                Ваш надежный технологический партнер с 2010 года.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="w-10 h-10 p-0 text-gray-400 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">IT-консалтинг</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Автоматизация бизнеса</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Облачные решения</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Анализ данных</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Кибербезопасность</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Цифровой рост</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Наша команда</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Примеры</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Будьте в курсе событий</h4>
            <p className="text-sm text-gray-400 mb-4">
                Подпишитесь на нашу новостную рассылку, чтобы получать самую свежую информацию о технологических тенденциях и автоматизации бизнеса.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full group">
                Подписаться
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 TechConsult. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия обслуживания</a>
            <a href="#" className="hover:text-white transition-colors">Политика использования cookie</a>
          </div>
        </div>

        {/* Contact info bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>hello@techconsult.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>123 Business Ave, Tech District, CA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}