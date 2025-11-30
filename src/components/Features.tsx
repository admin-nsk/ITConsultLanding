import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Clock, 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Rocket 
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import dashboardImage from "../static/img/graf.jpeg";

const features = [
  {
    icon: Clock,
    title: "Быстрое внедрение",
    description: "Быстро приступайте к работе благодаря нашим проверенным методологиям развертывания и специализированным проектным командам.",
  },
  {
    icon: Target,
    title: "Индивидуальные решения",
    description: "Каждое решение разрабатывается в соответствии с вашими конкретными бизнес-потребностями и требованиями отрасли.",
  },
  {
    icon: Users,
    title: "Группа экспертов",
    description: "Работайте с сертифицированными специалистами, обладающими глубокими знаниями во всех основных технологических платформах.",
  },
  {
    icon: Award,
    title: "Доказанные результаты",
    description: "Успешный опыт достижения ощутимых улучшений в области эффективности, экономии средств и роста.",
  },
  {
    icon: Lightbulb,
    title: "Ориентация на инновации",
    description: "Будьте на шаг впереди, используя передовые технологии и инновационные подходы к решению бизнес-задач.",
  },
  {
    icon: Rocket,
    title: "Масштабируемый рост",
    description: "Решения, которые развиваются вместе с вашим бизнесом, обеспечивая долгосрочную ценность и адаптивность.",
  }
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Почему выбирают нас</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Создан для достижения успеха в бизнесе
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы сочетаем техническое совершенство с деловой хваткой, предлагая решения, которые
              обеспечивают реальные результаты для вашей организации.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 border-2 hover:border-primary/20 transition-colors">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Dashboard Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-2xl transform rotate-3"></div>
            <ImageWithFallback
              src={dashboardImage}
              alt="Analytics dashboard"
              className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Floating stats cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="text-2xl font-bold text-green-600">↗ 127%</div>
              <div className="text-xs text-muted-foreground">Повышение эффективности</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="text-2xl font-bold text-blue-600">2.3M</div>
              <div className="text-xs text-muted-foreground">Экономия средств</div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Наш проверенный процесс</h3>
            <p className="text-lg text-muted-foreground">
                Системный подход, который каждый раз обеспечивает успешную реализацию проекта.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Аудит", desc: "Понимать потребности вашего бизнеса и текущие задачи" },
              { step: "02", title: "Планирование", desc: "Разработка индивидуальных решений и плана внедрения" },
              { step: "03", title: "Реализация", desc: "Развертывание решений с минимальными сбоями в работе" },
              { step: "04", title: "Оптимизация", desc: "Отслеживайте, уточняйте и масштабируйте для достижения максимального эффекта" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}