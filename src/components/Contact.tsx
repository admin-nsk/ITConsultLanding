import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
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
import { 
  decodeContactData, 
  contactPhoneParts, 
  contactEmailParts 
} from "../utils/contactProtection";

export function Contact({ onOpenConsult }: { onOpenConsult?: () => void }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeConsent, setAgreeConsent] = useState(false);
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const allServices = [
    "IT-консалтинг",
    "Автоматизация бизнеса",
    "Облачные решения",
    "Анализ данных",
    "Кибербезопасность",
    "Цифровой рост",
  ];

  useEffect(() => {
    // Декодируем контактные данные только на клиенте после монтирования
    setContactPhone(decodeContactData(contactPhoneParts));
    setContactEmail(decodeContactData(contactEmailParts));
  }, []);

  function toggleInterest(service: string, checked: boolean) {
    setInterests((prev) => (checked ? (prev.includes(service) ? prev : [...prev, service]) : prev.filter((s) => s !== service)));
  }

  async function handleSubmit() {
    setError(null);
    setSuccess(false);
    if (!firstName.trim() && !lastName.trim()) {
      setError("Укажите имя или фамилию");
      return;
    }
    if (!email.trim()) {
      setError("Укажите email");
      return;
    }
    if (!agreePrivacy) {
      setError("Необходимо согласие с политикой обработки персональных данных");
      return;
    }
    if (!agreeConsent) {
      setError("Необходимо согласие на обработку персональных данных");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = {
        name: `${firstName.trim()} ${lastName.trim()}`.trim(),
        email: email.trim(),
        phone: "",
        message: message.trim() || undefined,
        company: company.trim() || undefined,
        interests: interests.length ? interests : undefined,
      };
      const res = await fetch(`/api/v1/contacts/consult`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const detail = await res.text();
        // Проверяем, является ли это ошибкой валидации
        try {
          const errorData = JSON.parse(detail);
          if (errorData.detail && Array.isArray(errorData.detail)) {
            // Ищем ошибку валидации email
            const emailError = errorData.detail.find(
              (err: any) => err.loc && err.loc.includes("email")
            );
            if (emailError) {
              throw new Error("Некорректный email");
            }
          }
        } catch (e: any) {
          // Если это уже наша ошибка с текстом, пробрасываем её
          if (e.message === "Некорректный email") {
            throw e;
          }
        }
        throw new Error(detail || "Request failed");
      }
      setSuccess(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setInterests([]);
      setAgreePrivacy(false);
      setAgreeConsent(false);
    } catch (e: any) {
      setError(e?.message || "Ошибка отправки");
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <Card id="contact-form">
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
                    <Input placeholder="Стив" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Фамилия</label>
                    <Input placeholder="Джобс" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Компания</label>
                    <Input placeholder="Ваша компания" value={company} onChange={(e) => setCompany(e.target.value)} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Интерес к услуге</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {allServices.map((service) => (
                      <label key={service} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          checked={interests.includes(service)}
                          onChange={(e) => toggleInterest(service, e.target.checked)}
                        />
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy-policy"
                      checked={agreePrivacy}
                      onCheckedChange={(checked) => setAgreePrivacy(checked === true)}
                    />
                    <label
                      htmlFor="privacy-policy"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Согласен с{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-primary/80"
                        onClick={(e) => e.stopPropagation()}
                      >
                        политикой обработки персональных данных
                      </a>
                    </label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={agreeConsent}
                      onCheckedChange={(checked) => setAgreeConsent(checked === true)}
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Согласен на{" "}
                      <a
                        href="/consent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-primary/80"
                        onClick={(e) => e.stopPropagation()}
                      >
                        обработку персональных данных
                      </a>
                    </label>
                  </div>
                </div>

                {error && <div className="text-sm text-red-500">{error}</div>}
                {success && <div className="text-sm text-green-600">Сообщение отправлено!</div>}
                <Button size="lg" className="w-full group" disabled={isSubmitting} onClick={handleSubmit}>
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
                    <div className="text-sm text-muted-foreground">{contactPhone || "Загрузка..."}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">{contactEmail || "Загрузка..."}</div>
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
                {/* <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Рабочие часы</div>
                    <div className="text-sm text-muted-foreground">
                      Пн-Пт: 9:00 - 18:00 <br />
                      Сб: 10:00 - 16:00
                    </div>
                  </div>
                </div> */}
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
                <Button variant="secondary" className="w-full" onClick={() => onOpenConsult?.()}>
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