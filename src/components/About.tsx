import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Users, Building, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">О компании</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ваш надежный Технологический Партнер с 2010 года
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
                Мы - команда увлеченных специалистов в области технологий, которые помогают компаниям
                использовать возможности информационных технологий для достижения своих целей. Обладая более чем десятилетним опытом,
                мы помогли сотням компаний преобразовать свою деятельность и ускорить рост.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Члены экспертной группы</div>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Проектов выполнено</div>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Консультаций проведено</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Отраслевой опыт</h4>
                  <p className="text-sm text-muted-foreground">Глубокие знания в области здравоохранения, финансов, производства и розничной торговли.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Передовые технологии</h4>
                  <p className="text-sm text-muted-foreground">Всегда будьте в курсе новейших инструментов, фреймворков и лучших практик.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Клиентоориентированный подход</h4>
                  <p className="text-sm text-muted-foreground">Ваш успех - наш приоритет. Мы строим долгосрочные партнерские отношения, а не просто проекты.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="group">
              Узнайте больше о нас
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image and testimonials */}
          <div className="space-y-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1752170080773-fed7758395c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTgwMDMyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional team meeting"
              className="w-full h-80 object-cover rounded-2xl"
            />
            
            {/* Testimonial */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Кожевников Андрей</h4>
                    <p className="text-sm text-muted-foreground">CEO</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "TechConsult изменила всю нашу деятельность. Внедренные ими решения по автоматизации
                    позволили нам сэкономить более 500 тысяч долларов в год и повысить эффективность на 60%. Выдающиеся результаты!"
                </p>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-4 h-4 text-yellow-400">★</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}