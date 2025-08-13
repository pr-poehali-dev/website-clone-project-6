import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-glass">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="text-primary" size={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                ФИНАНСОВЫЙ СЕРВИС
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#partners" className="hover:text-primary transition-colors">Партнёры</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="border-primary/50 hover:bg-primary/10"
              >
                <Icon name="User" size={16} className="mr-2" />
                Личный кабинет
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Финансовые решения
            <span className="block text-primary">нового поколения</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональные финансовые услуги, работа с изъятым имуществом и комплексное сопровождение клиентов
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Input
                placeholder="Поиск по сайту..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-card/50 backdrop-blur-glass border-border hover:border-primary/50 transition-colors"
              />
              <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="ArrowRight" size={18} className="mr-2" />
              Начать работу
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Icon name="FileText" size={18} className="mr-2" />
              Документы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Gavel",
                title: "Реализация изъятого имущества",
                description: "Профессиональная оценка и реализация конфискованного имущества с максимальной выгодой"
              },
              {
                icon: "FileText",
                title: "Документооборот",
                description: "Электронный документооборот и ведение финансовой отчётности"
              },
              {
                icon: "Users",
                title: "Консультации",
                description: "Персональные консультации по финансовым вопросам и правовому сопровождению"
              },
              {
                icon: "Shield",
                title: "Безопасность сделок",
                description: "Гарантированная безопасность всех финансовых операций и транзакций"
              },
              {
                icon: "TrendingUp",
                title: "Инвестиционные решения",
                description: "Разработка индивидуальных инвестиционных стратегий"
              },
              {
                icon: "Clock",
                title: "Срочные операции",
                description: "Экстренное решение финансовых вопросов в кратчайшие сроки"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-glass border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Мы специализируемся на предоставлении комплексных финансовых услуг, включая работу с изъятым имуществом, 
                финансовое консультирование и правовое сопровождение сделок.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Наша команда экспертов обладает многолетним опытом в сфере финансов и права, что позволяет нам 
                предлагать клиентам наиболее эффективные решения в самых сложных ситуациях.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            
            <Card className="bg-card/50 backdrop-blur-glass border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Award" className="text-primary mr-2" size={24} />
                  Наши преимущества
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Профессиональная команда экспертов",
                  "Индивидуальный подход к каждому клиенту",
                  "Прозрачность всех операций",
                  "Соблюдение всех правовых норм",
                  "Оперативное решение задач"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-3" size={18} />
                    <span className="text-sm">{advantage}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Portal & Documents */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Клиентам</h2>
          
          <Tabs defaultValue="portal" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50">
              <TabsTrigger value="portal">Личный кабинет</TabsTrigger>
              <TabsTrigger value="documents">Документы</TabsTrigger>
              <TabsTrigger value="property">Имущество</TabsTrigger>
            </TabsList>
            
            <TabsContent value="portal" className="mt-8">
              <Card className="bg-card/50 backdrop-blur-glass border-border">
                <CardHeader>
                  <CardTitle>Вход в личный кабинет</CardTitle>
                  <CardDescription>
                    Получите доступ к вашим документам и отслеживайте статус заявок
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Логин или email" className="bg-background/50" />
                    <Input type="password" placeholder="Пароль" className="bg-background/50" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Button className="bg-primary hover:bg-primary/90">
                      Войти
                    </Button>
                    <Button variant="link" className="text-primary">
                      Забыли пароль?
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-8">
              <Card className="bg-card/50 backdrop-blur-glass border-border">
                <CardHeader>
                  <CardTitle>Документы и формы</CardTitle>
                  <CardDescription>
                    Скачайте необходимые документы и заполните онлайн-формы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Заявление на оценку имущества",
                      "Договор на оказание услуг",
                      "Справка о рыночной стоимости",
                      "Акт приёма-передачи"
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/30 rounded-lg">
                        <div className="flex items-center">
                          <Icon name="FileText" className="text-primary mr-3" size={20} />
                          <span className="text-sm">{doc}</span>
                        </div>
                        <Button size="sm" variant="outline">
                          <Icon name="Download" size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="property" className="mt-8">
              <Card className="bg-card/50 backdrop-blur-glass border-border">
                <CardHeader>
                  <CardTitle>Реализация изъятого имущества</CardTitle>
                  <CardDescription>
                    Текущие лоты и результаты торгов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { type: "Недвижимость", items: "Квартира 2-комн.", status: "Торги", price: "2,850,000 ₽" },
                      { type: "Транспорт", items: "BMW X5 2019г.", status: "Оценка", price: "3,200,000 ₽" },
                      { type: "Оборудование", items: "Станки промышленные", status: "Реализовано", price: "1,750,000 ₽" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-background/30 rounded-lg">
                        <div>
                          <div className="font-medium">{item.items}</div>
                          <div className="text-sm text-muted-foreground">{item.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{item.price}</div>
                          <Badge variant={item.status === 'Реализовано' ? 'default' : 'secondary'}>
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Как происходит оценка изъятого имущества?",
                answer: "Оценка проводится сертифицированными оценщиками в соответствии с федеральными стандартами оценки. Мы учитываем рыночную стоимость, техническое состояние и другие факторы."
              },
              {
                question: "Какие документы нужны для работы с нами?",
                answer: "Для физических лиц: паспорт, ИНН. Для юридических лиц: учредительные документы, выписка из ЕГРЮЛ, доверенность представителя."
              },
              {
                question: "Сколько времени занимает реализация имущества?",
                answer: "Сроки зависят от типа имущества и рыночной ситуации. Обычно процесс занимает от 30 до 90 дней с момента подачи заявки."
              },
              {
                question: "Как обеспечивается безопасность сделок?",
                answer: "Мы работаем только в рамках действующего законодательства, все операции страхуются, применяется многоуровневая система контроля."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-glass border-border rounded-lg">
                <AccordionTrigger className="px-6 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Партнёры</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Федеральная служба судебных приставов",
              "Росимущество",
              "Банковские организации",
              "Оценочные компании"
            ].map((partner, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-glass border-border text-center hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Handshake" className="text-primary" size={32} />
                  </div>
                  <h3 className="font-medium">{partner}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-card/50 backdrop-blur-glass border-border">
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
                <CardDescription>
                  Отправьте сообщение и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Имя" className="bg-background/50" />
                  <Input placeholder="Телефон" className="bg-background/50" />
                </div>
                <Input placeholder="Email" className="bg-background/50" />
                <Textarea placeholder="Сообщение" className="bg-background/50 min-h-[120px]" />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-glass border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Примерная, д. 123, офис 456
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-glass border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Телефон</h3>
                      <p className="text-muted-foreground">
                        +7 (495) 123-45-67
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-glass border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@financeservice.ru
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="text-primary" size={24} />
                <span className="font-bold">ФИНАНСОВЫЙ СЕРВИС</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные финансовые услуги и работа с изъятым имуществом
              </p>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Оценка имущества</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Реализация активов</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Консультации</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнёры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Финансовый Сервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;