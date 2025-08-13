import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('services');
  const [clientLoginOpen, setClientLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#2e2e2e] text-white overflow-x-hidden">
      {/* Glassmorphism Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#cd7f32]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-80 h-80 bg-[#cd7f32]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#cd7f32]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="backdrop-blur-md bg-black/20 border-b border-[#cd7f32]/30 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="Building2" className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#cd7f32] bg-clip-text text-transparent">
                    INVESTL
                  </h1>
                  <p className="text-sm text-gray-400">Консалтинг • Строительство • Инструменты</p>
                </div>
              </div>
              
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#services" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Услуги</a>
                <a href="#catalog" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Каталог</a>
                <a href="#property" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Имущество</a>
                <a href="#consulting" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Консалтинг</a>
                <a href="#clients" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Клиентам</a>
                <a href="#partners" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Партнёры</a>
                <a href="#about" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">О компании</a>
                <a href="#contacts" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Контакты</a>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setClientLoginOpen(!clientLoginOpen)}
                  className="border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white transition-all duration-300"
                >
                  <Icon name="User" size={16} className="mr-2" />
                  Личный кабинет
                </Button>
              </nav>

              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon name="Menu" size={24} />
              </Button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 p-4 backdrop-blur-lg bg-black/30 rounded-xl border border-[#cd7f32]/20">
                <nav className="flex flex-col space-y-3">
                  <a href="#services" className="hover:text-[#cd7f32] transition-colors">Услуги</a>
                  <a href="#catalog" className="hover:text-[#cd7f32] transition-colors">Каталог</a>
                  <a href="#property" className="hover:text-[#cd7f32] transition-colors">Имущество</a>
                  <a href="#consulting" className="hover:text-[#cd7f32] transition-colors">Консалтинг</a>
                  <a href="#clients" className="hover:text-[#cd7f32] transition-colors">Клиентам</a>
                  <a href="#partners" className="hover:text-[#cd7f32] transition-colors">Партнёры</a>
                  <a href="#about" className="hover:text-[#cd7f32] transition-colors">О компании</a>
                  <a href="#contacts" className="hover:text-[#cd7f32] transition-colors">Контакты</a>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Финансовые решения
              <span className="block text-[#cd7f32] bg-gradient-to-r from-[#cd7f32] to-[#cd7f32]/70 bg-clip-text text-transparent">
                нового поколения
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Профессиональные финансовые услуги, работа с изъятым имуществом и комплексное сопровождение клиентов. 
              Компания специализируется на оказании широкого спектра услуг для корпоративных клиентов и частных лиц.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <Input
                  placeholder="Поиск по каталогу..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white/10 backdrop-blur-md border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32] transition-all duration-300"
                />
                <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Button 
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#cd7f32] hover:bg-[#cd7f32]/80"
                >
                  Найти
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-[#cd7f32] hover:bg-[#cd7f32]/80 text-white h-14 px-8 text-lg">
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Начать работу
              </Button>
              <Button variant="outline" size="lg" className="border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white h-14 px-8 text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Документы
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
              {[
                { label: "Довольных клиентов", value: "500+", icon: "Users" },
                { label: "Лет опыта", value: "15+", icon: "Calendar" },
                { label: "Сделок завершено", value: "1200+", icon: "CheckCircle" },
                { label: "Млн рублей оборот", value: "850+", icon: "TrendingUp" }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105">
                  <Icon name={stat.icon as any} className="text-[#cd7f32] mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Наши <span className="text-[#cd7f32]">услуги</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "Gavel",
                  title: "Реализация изъятого имущества",
                  description: "Профессиональная оценка и реализация конфискованного имущества с максимальной выгодой для владельцев",
                  category: "Имущество"
                },
                {
                  icon: "FileText",
                  title: "Документооборот",
                  description: "Электронный документооборот и ведение финансовой отчётности, подготовка документов для торгов",
                  category: "Документы"
                },
                {
                  icon: "Users",
                  title: "Консультации",
                  description: "Персональные консультации по финансовым вопросам и правовому сопровождению сделок",
                  category: "Консалтинг"
                },
                {
                  icon: "Shield",
                  title: "Безопасность сделок",
                  description: "Гарантированная безопасность всех финансовых операций и транзакций с полным юридическим сопровождением",
                  category: "Безопасность"
                },
                {
                  icon: "TrendingUp",
                  title: "Инвестиционные решения",
                  description: "Разработка индивидуальных инвестиционных стратегий и управление финансовыми активами",
                  category: "Инвестиции"
                },
                {
                  icon: "Clock",
                  title: "Срочные операции",
                  description: "Экстренное решение финансовых вопросов в кратчайшие сроки с привлечением экспертов",
                  category: "Срочно"
                }
              ].map((service, index) => (
                <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon name={service.icon as any} className="text-white" size={28} />
                      </div>
                      <Badge variant="outline" className="border-[#cd7f32]/50 text-[#cd7f32]">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-[#cd7f32] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" className="mt-4 text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white p-0 h-auto">
                      Подробнее →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section id="catalog" className="py-16 px-4 relative">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Каталог <span className="text-[#cd7f32]">услуг и решений</span>
            </h2>

            <Tabs defaultValue="financial" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 bg-black/20 backdrop-blur-md border border-[#cd7f32]/20">
                <TabsTrigger value="financial" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">
                  Финансовые услуги
                </TabsTrigger>
                <TabsTrigger value="legal" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">
                  Юридические услуги
                </TabsTrigger>
                <TabsTrigger value="consulting" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">
                  Консалтинг
                </TabsTrigger>
                <TabsTrigger value="property" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">
                  Имущество
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="financial" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Оценка активов", description: "Независимая оценка", price: "от 15,000 ₽" },
                    { name: "Финансовый анализ", description: "Аудит и анализ", price: "от 25,000 ₽" },
                    { name: "Инвестиционное планирование", description: "Стратегии роста", price: "от 50,000 ₽" },
                    { name: "Управление рисками", description: "Минимизация потерь", price: "от 35,000 ₽" },
                    { name: "Кредитные консультации", description: "Получение финансирования", price: "от 20,000 ₽" },
                    { name: "Налоговое планирование", description: "Оптимизация налогов", price: "от 30,000 ₽" },
                    { name: "Банкротство", description: "Процедуры банкротства", price: "от 80,000 ₽" },
                    { name: "Реструктуризация долгов", description: "Управление долгами", price: "от 40,000 ₽" }
                  ].map((service, index) => (
                    <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name="TrendingUp" className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#cd7f32] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">{service.description}</p>
                        <p className="text-xl font-bold text-[#cd7f32] mb-3">{service.price}</p>
                        <Button size="sm" className="bg-transparent border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="legal" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Договоры", description: "Составление и анализ", price: "от 8,000 ₽" },
                    { name: "Судебное представительство", description: "Защита в суде", price: "от 45,000 ₽" },
                    { name: "Корпоративное право", description: "Сопровождение бизнеса", price: "от 30,000 ₽" },
                    { name: "Интеллектуальная собственность", description: "Регистрация и защита", price: "от 25,000 ₽" }
                  ].map((service, index) => (
                    <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Scale" className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#cd7f32] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">{service.description}</p>
                        <p className="text-xl font-bold text-[#cd7f32] mb-3">{service.price}</p>
                        <Button size="sm" className="bg-transparent border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="consulting" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Бизнес-планирование", description: "Разработка стратегии", price: "от 60,000 ₽" },
                    { name: "Маркетинговые исследования", description: "Анализ рынка", price: "от 40,000 ₽" },
                    { name: "IT-консалтинг", description: "Цифровая трансформация", price: "от 55,000 ₽" },
                    { name: "HR-консалтинг", description: "Управление персоналом", price: "от 35,000 ₽" }
                  ].map((service, index) => (
                    <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Lightbulb" className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#cd7f32] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">{service.description}</p>
                        <p className="text-xl font-bold text-[#cd7f32] mb-3">{service.price}</p>
                        <Button size="sm" className="bg-transparent border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="property" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Оценка недвижимости", description: "Независимая оценка", price: "от 12,000 ₽" },
                    { name: "Организация торгов", description: "Проведение аукционов", price: "от 25,000 ₽" },
                    { name: "Управление активами", description: "Эффективное управление", price: "от 35,000 ₽" },
                    { name: "Реализация имущества", description: "Продажа активов", price: "от 20,000 ₽" }
                  ].map((service, index) => (
                    <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Building2" className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#cd7f32] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">{service.description}</p>
                        <p className="text-xl font-bold text-[#cd7f32] mb-3">{service.price}</p>
                        <Button size="sm" className="bg-transparent border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Client Portal & Documents */}
        <section id="clients" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              <span className="text-[#cd7f32]">Клиентам</span>
            </h2>
            
            <Tabs defaultValue="portal" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-black/20 backdrop-blur-md border border-[#cd7f32]/20">
                <TabsTrigger value="portal" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">Личный кабинет</TabsTrigger>
                <TabsTrigger value="documents" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">Документы</TabsTrigger>
                <TabsTrigger value="property" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">Имущество</TabsTrigger>
              </TabsList>
              
              <TabsContent value="portal" className="mt-8">
                <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                  <CardHeader>
                    <CardTitle className="text-white">Вход в личный кабинет</CardTitle>
                    <CardDescription className="text-gray-300">
                      Получите доступ к вашим документам и отслеживайте статус заявок
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Логин или email" className="bg-white/10 border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32]" />
                      <Input type="password" placeholder="Пароль" className="bg-white/10 border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32]" />
                    </div>
                    <div className="flex justify-between items-center">
                      <Button className="bg-[#cd7f32] hover:bg-[#cd7f32]/80 text-white">
                        Войти
                      </Button>
                      <Button variant="link" className="text-[#cd7f32] hover:text-[#cd7f32]/80">
                        Забыли пароль?
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-8">
                <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                  <CardHeader>
                    <CardTitle className="text-white">Документы и формы</CardTitle>
                    <CardDescription className="text-gray-300">
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
                        <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                          <div className="flex items-center">
                            <Icon name="FileText" className="text-[#cd7f32] mr-3" size={20} />
                            <span className="text-white text-sm">{doc}</span>
                          </div>
                          <Button size="sm" variant="outline" className="border-[#cd7f32]/50 text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                            <Icon name="Download" size={16} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="property" className="mt-8">
                <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                  <CardHeader>
                    <CardTitle className="text-white">Реализация изъятого имущества</CardTitle>
                    <CardDescription className="text-gray-300">
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
                        <div key={index} className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                          <div>
                            <div className="text-white font-medium">{item.items}</div>
                            <div className="text-sm text-gray-400">{item.type}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-medium">{item.price}</div>
                            <Badge variant={item.status === 'Реализовано' ? 'default' : 'secondary'} className="bg-[#cd7f32] text-white">
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
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#cd7f32]/5 to-transparent"></div>
          <div className="container mx-auto max-w-3xl relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Часто задаваемые <span className="text-[#cd7f32]">вопросы</span>
            </h2>
            
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
                <AccordionItem key={index} value={`item-${index}`} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 rounded-xl">
                  <AccordionTrigger className="px-6 text-white hover:text-[#cd7f32]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-300">
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
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              <span className="text-[#cd7f32]">Партнёры</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Федеральная служба судебных приставов",
                "Росимущество",
                "Банковские организации",
                "Оценочные компании"
              ].map((partner, index) => (
                <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 text-center hover:border-[#cd7f32]/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Handshake" className="text-white" size={32} />
                    </div>
                    <h3 className="text-white font-medium">{partner}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Property Realization Section */}
        <section id="property" className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-[#cd7f32]/5 to-transparent"></div>
          <div className="container mx-auto relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Реализация <span className="text-[#cd7f32]">изъятого имущества</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="Gavel" className="text-[#cd7f32] mr-2" size={24} />
                      Текущие торги
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          category: "Недвижимость",
                          item: "Квартира 3-комнатная, 85 кв.м",
                          location: "г. Москва, ул. Ленина, 45",
                          startPrice: "4,200,000 ₽",
                          currentPrice: "4,580,000 ₽",
                          endDate: "15.08.2024 15:00",
                          status: "active"
                        },
                        {
                          category: "Транспорт",
                          item: "Mercedes-Benz E-Class 2020г.",
                          location: "Пробег 45,000 км",
                          startPrice: "2,850,000 ₽",
                          currentPrice: "3,120,000 ₽", 
                          endDate: "18.08.2024 14:30",
                          status: "active"
                        },
                        {
                          category: "Оборудование",
                          item: "Станок токарный ЧПУ",
                          location: "Состояние: рабочее",
                          startPrice: "850,000 ₽",
                          currentPrice: "920,000 ₽",
                          endDate: "20.08.2024 16:00",
                          status: "ending"
                        }
                      ].map((lot, index) => (
                        <div key={index} className="p-4 bg-white/10 rounded-lg border border-[#cd7f32]/20">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-white font-semibold mb-1">{lot.item}</h3>
                              <p className="text-gray-400 text-sm">{lot.location}</p>
                            </div>
                            <Badge variant={lot.status === 'active' ? 'default' : 'destructive'} className="bg-[#cd7f32] text-white">
                              {lot.status === 'active' ? 'Активные торги' : 'Завершаются'}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-gray-400">Стартовая цена:</span>
                              <div className="text-white font-medium">{lot.startPrice}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Текущая цена:</span>
                              <div className="text-[#cd7f32] font-bold">{lot.currentPrice}</div>
                            </div>
                            <div>
                              <span className="text-gray-400">Окончание:</span>
                              <div className="text-white font-medium">{lot.endDate}</div>
                            </div>
                          </div>
                          <Button size="sm" className="mt-3 bg-[#cd7f32] hover:bg-[#cd7f32]/80 text-white">
                            Подать заявку
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="BarChart3" className="text-[#cd7f32] mr-2" size={24} />
                      Статистика торгов
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#cd7f32] mb-1">847</div>
                      <div className="text-sm text-gray-400">лотов реализовано</div>
                    </div>
                    <Separator className="bg-[#cd7f32]/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#cd7f32] mb-1">2.4 млрд ₽</div>
                      <div className="text-sm text-gray-400">общая сумма сделок</div>
                    </div>
                    <Separator className="bg-[#cd7f32]/20" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#cd7f32] mb-1">94%</div>
                      <div className="text-sm text-gray-400">успешных продаж</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="FileText" className="text-[#cd7f32] mr-2" size={24} />
                      Подать заявку
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Ваше имя" className="bg-white/10 border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32]" />
                    <Input placeholder="Телефон" className="bg-white/10 border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32]" />
                    <Select>
                      <SelectTrigger className="bg-white/10 border-[#cd7f32]/30 text-white focus:border-[#cd7f32]">
                        <SelectValue placeholder="Тип имущества" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#2e2e2e] border-[#cd7f32]/30">
                        <SelectItem value="real-estate" className="text-white hover:bg-[#cd7f32]/20">Недвижимость</SelectItem>
                        <SelectItem value="transport" className="text-white hover:bg-[#cd7f32]/20">Транспорт</SelectItem>
                        <SelectItem value="equipment" className="text-white hover:bg-[#cd7f32]/20">Оборудование</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="w-full bg-[#cd7f32] hover:bg-[#cd7f32]/80 text-white">
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section id="consulting" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Консалтинговые <span className="text-[#cd7f32]">услуги</span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      title: "Бизнес-консалтинг",
                      content: "Стратегическое планирование, анализ бизнес-процессов, оптимизация деятельности компании, разработка бизнес-планов, консультации по развитию бизнеса."
                    },
                    {
                      title: "Юридическое сопровождение",
                      content: "Правовое сопровождение сделок, составление договоров, консультации по корпоративному праву, защита интересов в судах, абонентское обслуживание."
                    },
                    {
                      title: "Финансовый консалтинг",
                      content: "Финансовый анализ, инвестиционное планирование, налоговое планирование, управление рисками, консультации по кредитованию и финансированию."
                    },
                    {
                      title: "IT-консалтинг",
                      content: "Автоматизация бизнес-процессов, внедрение информационных систем, консультации по цифровой трансформации, техническая поддержка."
                    },
                    {
                      title: "HR-консалтинг",
                      content: "Подбор персонала, оценка компетенций, разработка системы мотивации, обучение сотрудников, консультации по трудовому законодательству."
                    }
                  ].map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 rounded-xl">
                      <AccordionTrigger className="px-6 text-white hover:text-[#cd7f32] text-lg font-semibold">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 text-gray-300">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="space-y-6">
                <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="Clock" className="text-[#cd7f32] mr-2" size={24} />
                      Режим работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Пн - Пт:</span>
                      <span className="text-white">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Суббота:</span>
                      <span className="text-white">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Воскресенье:</span>
                      <span className="text-white">Выходной</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon name="Phone" className="text-[#cd7f32] mr-2" size={24} />
                      Связаться с нами
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-[#cd7f32] hover:bg-[#cd7f32]/80 text-white">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать звонок
                    </Button>
                    <Button variant="outline" className="w-full border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Написать в WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Company */}
        <section id="about" className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-[#cd7f32]/5 to-transparent"></div>
          <div className="container mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">
                  О <span className="text-[#cd7f32]">компании</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Наша компания работает на рынке уже более 15 лет, предоставляя качественные услуги 
                  в области консалтинга, строительства и продажи профессионального инструмента.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Мы гордимся своей репутацией надёжного партнера и стремимся к долгосрочному 
                  сотрудничеству с каждым клиентом. Наша команда состоит из высококвалифицированных 
                  специалистов с многолетним опытом работы.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#cd7f32] mb-2">15+</div>
                    <div className="text-sm text-gray-400">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#cd7f32] mb-2">2000+</div>
                    <div className="text-sm text-gray-400">довольных клиентов</div>
                  </div>
                </div>

                <Button size="lg" className="bg-[#cd7f32] hover:bg-[#cd7f32]/80 text-white">
                  <Icon name="Award" size={20} className="mr-2" />
                  Наши сертификаты
                </Button>
              </div>
              
              <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Icon name="Target" className="text-[#cd7f32] mr-2" size={24} />
                    Наши принципы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      icon: "Shield",
                      title: "Гарантия качества",
                      description: "Все наши услуги и товары имеют гарантийное обслуживание"
                    },
                    {
                      icon: "Clock",
                      title: "Соблюдение сроков",
                      description: "Мы всегда выполняем работы точно в установленные сроки"
                    },
                    {
                      icon: "Users",
                      title: "Индивидуальный подход",
                      description: "К каждому клиенту находим персональное решение"
                    },
                    {
                      icon: "Star",
                      title: "Профессионализм",
                      description: "Наша команда — это опытные специалисты своего дела"
                    }
                  ].map((principle, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={principle.icon as any} className="text-white" size={18} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{principle.title}</h3>
                        <p className="text-gray-300 text-sm">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacts" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              <span className="text-[#cd7f32]">Контакты</span> и обратная связь
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20">
                <CardHeader>
                  <CardTitle className="text-white">Отправьте нам сообщение</CardTitle>
                  <CardDescription className="text-gray-300">
                    Мы ответим в течение 30 минут в рабочее время
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-white/10 border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32]" 
                    />
                    <Input 
                      placeholder="Телефон" 
                      className="bg-white/10 border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32]" 
                    />
                  </div>
                  <Input 
                    placeholder="Email" 
                    className="bg-white/10 border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32]" 
                  />
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    className="bg-white/10 border-[#cd7f32]/30 text-white placeholder:text-gray-400 focus:border-[#cd7f32] min-h-[120px]" 
                  />
                  <Button className="w-full bg-[#cd7f32] hover:bg-[#cd7f32]/80 text-white">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "MapPin",
                    title: "Наш адрес",
                    content: "г. Москва, ул. Примерная, д. 123\nБЦ \"Центральный\", офис 456"
                  },
                  {
                    icon: "Phone",
                    title: "Телефоны",
                    content: "+7 (495) 123-45-67\n+7 (800) 555-00-99 (бесплатно)"
                  },
                  {
                    icon: "Mail",
                    title: "Email",
                    content: "info@investl.ru\nsales@investl.ru"
                  },
                  {
                    icon: "Clock",
                    title: "Время работы",
                    content: "Пн-Пт: 09:00 - 18:00\nСб: 10:00 - 16:00, Вс: выходной"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={contact.icon as any} className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2">{contact.title}</h3>
                          <p className="text-gray-300 whitespace-pre-line text-sm">{contact.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#cd7f32]/20 py-12 px-4 backdrop-blur-md bg-black/20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-lg flex items-center justify-center">
                    <Icon name="Building2" className="text-white" size={20} />
                  </div>
                  <span className="text-xl font-bold text-white">INVESTL</span>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Профессиональные решения для вашего бизнеса. Консалтинг, строительство, 
                  продажа инструментов.
                </p>
                <div className="flex space-x-3">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <Button key={social} size="sm" variant="ghost" className="text-gray-400 hover:text-[#cd7f32] p-2">
                      <Icon name="Share2" size={16} />
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Услуги</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Продажа инструментов</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Строительные услуги</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Консалтинг</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Логистика</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Каталог</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Электроинструмент</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Бензоинструмент</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Ручной инструмент</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Аксессуары</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Поддержка</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Доставка и оплата</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Гарантия</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Возврат товара</a></li>
                  <li><a href="#" className="hover:text-[#cd7f32] transition-colors">Помощь</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-[#cd7f32]/20 mt-8 pt-8 text-center">
              <p className="text-sm text-gray-400">
                © 2024 INVESTL. Все права защищены. | 
                <a href="#" className="hover:text-[#cd7f32] transition-colors ml-1">Политика конфиденциальности</a> | 
                <a href="#" className="hover:text-[#cd7f32] transition-colors ml-1">Пользовательское соглашение</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;