import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
                <a href="#tools" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Инструменты</a>
                <a href="#construction" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Строительство</a>
                <a href="#consulting" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Консалтинг</a>
                <a href="#about" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">О компании</a>
                <a href="#contacts" className="hover:text-[#cd7f32] transition-colors duration-300 font-medium">Контакты</a>
                <Button 
                  variant="outline" 
                  size="sm"
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
                  <a href="#tools" className="hover:text-[#cd7f32] transition-colors">Инструменты</a>
                  <a href="#construction" className="hover:text-[#cd7f32] transition-colors">Строительство</a>
                  <a href="#consulting" className="hover:text-[#cd7f32] transition-colors">Консалтинг</a>
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
              Профессиональные
              <span className="block text-[#cd7f32] bg-gradient-to-r from-[#cd7f32] to-[#cd7f32]/70 bg-clip-text text-transparent">
                решения для бизнеса
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Компания специализируется на оказании широкого спектра услуг как для корпоративных клиентов, 
              так и для частных лиц. Профессионализм и ответственность — ключевые преимущества нашей компании.
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
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Каталог товаров
              </Button>
              <Button variant="outline" size="lg" className="border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white h-14 px-8 text-lg">
                <Icon name="Building" size={20} className="mr-2" />
                Услуги консалтинга
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
              {[
                { label: "Довольных клиентов", value: "2000+", icon: "Users" },
                { label: "Лет опыта", value: "15+", icon: "Calendar" },
                { label: "Проектов завершено", value: "500+", icon: "CheckCircle" },
                { label: "Видов услуг", value: "50+", icon: "Star" }
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
                  icon: "Wrench",
                  title: "Продажа инструментов",
                  description: "Широкий ассортимент профессионального электроинструмента, бензоинструмента и ручного инструмента для всех видов работ",
                  category: "Торговля"
                },
                {
                  icon: "Building",
                  title: "Строительные услуги",
                  description: "Полный цикл строительных работ от проектирования до сдачи объекта. Качество и соблюдение сроков гарантированы",
                  category: "Строительство"
                },
                {
                  icon: "Users",
                  title: "Консалтинговые услуги",
                  description: "Профессиональные консультации по вопросам бизнеса, юридическое сопровождение, аудит и оптимизация процессов",
                  category: "Консалтинг"
                },
                {
                  icon: "Truck",
                  title: "Логистические решения",
                  description: "Организация доставки товаров, складские услуги, управление цепями поставок для вашего бизнеса",
                  category: "Логистика"
                },
                {
                  icon: "Settings",
                  title: "Техническое обслуживание",
                  description: "Сервисное обслуживание и ремонт инструмента, гарантийное и послегарантийное обслуживание",
                  category: "Сервис"
                },
                {
                  icon: "BookOpen",
                  title: "Обучение и сертификация",
                  description: "Профессиональное обучение работе с инструментом, сертификация специалистов, повышение квалификации",
                  category: "Образование"
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

        {/* Tools Catalog Section */}
        <section id="tools" className="py-16 px-4 relative">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Каталог <span className="text-[#cd7f32]">инструментов</span>
            </h2>

            <Tabs defaultValue="electric" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 bg-black/20 backdrop-blur-md border border-[#cd7f32]/20">
                <TabsTrigger value="electric" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">
                  Электроинструмент
                </TabsTrigger>
                <TabsTrigger value="petrol" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">
                  Бензоинструмент
                </TabsTrigger>
                <TabsTrigger value="hand" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">
                  Ручной инструмент
                </TabsTrigger>
                <TabsTrigger value="accessories" className="data-[state=active]:bg-[#cd7f32] data-[state=active]:text-white">
                  Аксессуары
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="electric" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Дрели и шуруповёрты", price: "от 2,500 ₽", items: "45+ товаров", icon: "Drill" },
                    { name: "Перфораторы", price: "от 8,900 ₽", items: "28+ товаров", icon: "Hammer" },
                    { name: "Угловые шлифмашины", price: "от 3,200 ₽", items: "32+ товаров", icon: "Settings" },
                    { name: "Циркульные пилы", price: "от 6,500 ₽", items: "21+ товар", icon: "Saw" },
                    { name: "Лобзики", price: "от 2,800 ₽", items: "19+ товаров", icon: "Move" },
                    { name: "Рубанки", price: "от 4,100 ₽", items: "15+ товаров", icon: "Plane" },
                    { name: "Фрезеры", price: "от 7,200 ₽", items: "12+ товаров", icon: "Router" },
                    { name: "Многофункциональные", price: "от 5,500 ₽", items: "24+ товара", icon: "Tool" }
                  ].map((tool, index) => (
                    <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Wrench" className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#cd7f32] transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-2xl font-bold text-[#cd7f32] mb-1">{tool.price}</p>
                        <p className="text-sm text-gray-400">{tool.items}</p>
                        <Button size="sm" className="mt-4 bg-transparent border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                          Смотреть
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="petrol" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Бензопилы", price: "от 12,500 ₽", items: "18+ товаров" },
                    { name: "Триммеры", price: "от 8,900 ₽", items: "25+ товаров" },
                    { name: "Газонокосилки", price: "от 15,200 ₽", items: "12+ товаров" },
                    { name: "Генераторы", price: "от 22,000 ₽", items: "15+ товаров" }
                  ].map((tool, index) => (
                    <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Zap" className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#cd7f32] transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-2xl font-bold text-[#cd7f32] mb-1">{tool.price}</p>
                        <p className="text-sm text-gray-400">{tool.items}</p>
                        <Button size="sm" className="mt-4 bg-transparent border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                          Смотреть
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="hand" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Молотки", price: "от 450 ₽", items: "35+ товаров" },
                    { name: "Отвёртки", price: "от 180 ₽", items: "82+ товара" },
                    { name: "Ключи", price: "от 290 ₽", items: "125+ товаров" },
                    { name: "Пилы", price: "от 650 ₽", items: "28+ товаров" }
                  ].map((tool, index) => (
                    <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Hammer" className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#cd7f32] transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-2xl font-bold text-[#cd7f32] mb-1">{tool.price}</p>
                        <p className="text-sm text-gray-400">{tool.items}</p>
                        <Button size="sm" className="mt-4 bg-transparent border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                          Смотреть
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="accessories" className="mt-8">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Диски и круги", price: "от 120 ₽", items: "150+ товаров" },
                    { name: "Свёрла", price: "от 85 ₽", items: "200+ товаров" },
                    { name: "Биты и насадки", price: "от 45 ₽", items: "180+ товаров" },
                    { name: "Щётки", price: "от 95 ₽", items: "75+ товаров" }
                  ].map((tool, index) => (
                    <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Package" className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#cd7f32] transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-2xl font-bold text-[#cd7f32] mb-1">{tool.price}</p>
                        <p className="text-sm text-gray-400">{tool.items}</p>
                        <Button size="sm" className="mt-4 bg-transparent border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white">
                          Смотреть
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Construction Services */}
        <section id="construction" className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#cd7f32]/5 to-transparent"></div>
          <div className="container mx-auto relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Строительные <span className="text-[#cd7f32]">услуги</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-[#cd7f32]/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Наши возможности</h3>
                  
                  <div className="space-y-6">
                    {[
                      { service: "Проектирование и архитектура", progress: 95 },
                      { service: "Строительство зданий", progress: 90 },
                      { service: "Отделочные работы", progress: 88 },
                      { service: "Инженерные системы", progress: 85 },
                      { service: "Ландшафтный дизайн", progress: 80 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{item.service}</span>
                          <span className="text-[#cd7f32] font-bold">{item.progress}%</span>
                        </div>
                        <Progress 
                          value={item.progress} 
                          className="h-2 bg-white/10"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "Home",
                    title: "Жилищное строительство",
                    description: "Строительство коттеджей, загородных домов, таунхаусов под ключ",
                    projects: "120+ проектов"
                  },
                  {
                    icon: "Building",
                    title: "Коммерческая недвижимость",
                    description: "Офисные здания, торговые центры, производственные помещения",
                    projects: "85+ проектов"
                  },
                  {
                    icon: "Truck",
                    title: "Промышленное строительство",
                    description: "Заводы, склады, логистические комплексы, инфраструктурные объекты",
                    projects: "45+ проектов"
                  },
                  {
                    icon: "Trees",
                    title: "Благоустройство территории",
                    description: "Ландшафтное планирование, озеленение, дорожки и малые формы",
                    projects: "200+ проектов"
                  }
                ].map((service, index) => (
                  <Card key={index} className="backdrop-blur-lg bg-white/5 border-[#cd7f32]/20 hover:border-[#cd7f32]/40 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#cd7f32] to-[#cd7f32]/70 rounded-lg flex items-center justify-center mb-4">
                        <Icon name={service.icon as any} className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <Badge variant="outline" className="border-[#cd7f32]/50 text-[#cd7f32]">
                        {service.projects}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
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