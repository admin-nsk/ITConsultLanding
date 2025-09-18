import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Settings, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cloud, 
  Database,
  ArrowRight 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Settings,
    title: "IT-консалтинг",
    description: "Стратегическое планирование и внедрение технологий для приведения ИТ-инфраструктуры в соответствие с бизнес-целями.",
    features: ["Технологическая дорожная карта", "Системная архитектура", "Цифровая трансформация"]
  },
  {
    icon: Zap,
    title: "Автоматизация бизнеса",
    description: "Оптимизируйте работу с помощью интеллектуальных решений автоматизации, которые снижают затраты и повышают эффективность.",
    features: ["Автоматизация процессов", "Оптимизация рабочего процесса", "Реализация RPA"]
  },
  {
    icon: Cloud,
    title: "Облачные решения",
    description: "Перенесите и оптимизируйте свою инфраструктуру с помощью безопасных, масштабируемых облачных технологий.",
    features: ["Облачная миграция", "Управление инфраструктурой", "Оптимизация затрат"]
  },
  {
    icon: Database,
    title: "Анализ данных",
    description: "Преобразуйте необработанные данные в полезную аналитическую информацию с помощью передовых решений для аналитики и отчетности.",
    features: ["Бизнес-аналитика", "Хранилище данных", "Пользовательские информационные панели"]
  },
  {
    icon: Shield,
    title: "Кибербезопасность",
    description: "Защитите свой бизнес с помощью комплексных решений в области безопасности и систем обеспечения соответствия требованиям.",
    features: ["Аудит безопасности", "Обнаружение угроз", "Управление соответствием требованиям"]
  },
  {
    icon: TrendingUp,
    title: "Цифровой рост",
    description: "Ускорьте рост бизнеса с помощью стратегий цифрового маркетинга и оптимизации электронной коммерции.",
    features: ["Цифровая стратегия", "Оптимизация производительности", "Аналитика роста"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Комплексные ИТ-решения для современного бизнеса
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От стратегического консалтинга до полной автоматизации - мы предлагаем комплексные технологические решения
              , которые способствуют повышению эффективности и росту.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Узнать больше
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Automation showcase */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Автоматизация, которая действительно работает
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                  Наши решения для автоматизации бизнеса легко интегрируются с вашими существующими системами,
                  обеспечивая ощутимые результаты с первого дня.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Среднее снижение затрат</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Экономия времени</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Время безотказной работы системы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Автоматизированные операции</div>
                </div>
              </div>
              <Button size="lg" className="group" onClick={() => {
                const targetElement = document.getElementById('contact');
                if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                  Начать оценку автоматизации
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB3b3JrZmxvd3xlbnwxfHx8fDE3NTgwODU2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business automation workflow"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}