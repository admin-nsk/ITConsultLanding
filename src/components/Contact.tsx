import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageSquare,
  Calendar,
  CheckCircle 
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Связаться</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы преобразовать свой бизнес?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Давайте обсудим, как наши решения в области ИТ-консалтинга и автоматизации могут помочь вам в достижении ваших целей.
              Получите бесплатную консультацию уже сегодня.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Отправить сообщение</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Стив" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Фамилия</label>
                    <Input placeholder="Джобс" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Компания</label>
                    <Input placeholder="Ваша компания" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Интерес к услуге</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["IT-консалтинг", "Автоматизация бизнеса", "Облачные решения", "Анализ данных", "Кибербезопасность", "Цифровой рост"].map((service) => (
                      <label key={service} className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите нам, как мы можем Вам помочь..."
                    rows={4}
                  />
                </div>

                <Button size="lg" className="w-full group">
                  Отправить сообщение
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Связаться</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (962) 218-3656</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">hello@techconsult.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-sm text-muted-foreground">
                      ул. Плановая 56<br />
                      г. Новосибирск
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Рабочие часы</div>
                    <div className="text-sm text-muted-foreground">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Consultation */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Бесплатная консультация</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 opacity-90">
                    Запишитесь на бесплатную 30-минутную консультацию, чтобы обсудить ваши технологические потребности и цели.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Никаких обязательств не требуется</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Экспертное руководство</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Пользовательские рекомендации</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                   Записаться
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">&lt; 2 Часа</div>
                  <div className="text-sm text-muted-foreground">Среднее время отклика</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}