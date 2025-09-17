import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const methodologies = [
    {
      title: "Логопедический массаж",
      description: "Специальные приемы для улучшения артикуляции и звукопроизношения",
      icon: "Heart"
    },
    {
      title: "Игровая терапия", 
      description: "Коррекция речевых нарушений через увлекательные развивающие игры",
      icon: "Gamepad2"
    },
    {
      title: "Работа с родителями",
      description: "Обучение родителей методам домашней коррекционной работы",
      icon: "Users"
    },
    {
      title: "Сенсорная интеграция",
      description: "Развитие восприятия через тактильные и двигательные упражнения",
      icon: "Brain"
    }
  ];

  const achievements = [
    { year: "2023", title: "Сертификат логопедического массажа", type: "Сертификат" },
    { year: "2022", title: "Курсы по работе с детьми с ОВЗ", type: "Повышение квалификации" },
    { year: "2021", title: "Диплом дефектолога", type: "Образование" },
    { year: "2020", title: "Методист года в центре развития", type: "Награда" }
  ];

  const testimonials = [
    {
      name: "Мария Иванова",
      text: "Наш сын начал говорить уже через месяц занятий! Елена Викторовна нашла подход к ребенку и сделала процесс обучения увлекательным.",
      rating: 5
    },
    {
      name: "Александр Петров", 
      text: "Профессиональный подход и внимание к каждому ребенку. Рекомендуем всем родителям, кто ищет квалифицированного специалиста.",
      rating: 5
    },
    {
      name: "Светлана Козлова",
      text: "Благодаря работе с Еленой Викторовной наша дочь преодолела проблемы с произношением и стала более уверенной в себе.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#3366ff]">Ольга Валерьевна</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#methods" className="text-muted-foreground hover:text-primary transition-colors">Методики</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">Достижения</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-warm-cream to-warm-lavender">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" size={80} className="text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-800 animate-fade-in">
              Елена Викторовна Смирнова
            </h1>
            <p className="text-xl text-gray-600 mb-4 animate-fade-in">
              Учитель-дефектолог с 15-летним опытом работы
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in">
              Помогаю детям с особыми потребностями развивать речь, коммуникативные навыки 
              и достигать успехов в обучении через индивидуальный подход и современные методики
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Badge variant="secondary" className="text-sm">15 лет опыта</Badge>
              <Badge variant="secondary" className="text-sm">500+ детей</Badge>
              <Badge variant="secondary" className="text-sm">Сертифицированный специалист</Badge>
            </div>
            <Button size="lg" className="animate-scale-in">
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Обо мне</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-left">
                <p className="text-gray-700 leading-relaxed">
                  Более 15 лет я посвятила работе с детьми, имеющими особенности развития. 
                  Моя специализация включает коррекцию речевых нарушений, развитие 
                  познавательных процессов и социальных навыков.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Верю, что каждый ребенок уникален и способен на прогресс при правильном 
                  подходе. Использую современные методики, адаптируя их под индивидуальные 
                  потребности каждого ученика.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Логопедия</Badge>
                  <Badge variant="outline">Дефектология</Badge>
                  <Badge variant="outline">Коррекционная педагогика</Badge>
                  <Badge variant="outline">Детская психология</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-80 bg-gradient-to-br from-warm-mint to-warm-purple rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="BookOpen" size={100} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Методики работы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologies.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={method.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {method.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Отзывы родителей</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-warm-orange fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 italic">
                      "{testimonial.text}"
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Достижения и образование</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.type}</p>
                  </div>
                  <Badge variant="outline">{achievement.year}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gradient-to-br from-warm-mint to-warm-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Контакты</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} />
                </div>
                <h3 className="font-semibold">Телефон</h3>
                <p>+7 (902) 548-62-21</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} />
                </div>
                <h3 className="font-semibold">Email</h3>
                <p>olia.onishenko@yandex.ru</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} />
                </div>
                <h3 className="font-semibold">Адрес</h3>
                <p>г. Усть-Илимск, ул. Верхняя, 15</p>
              </div>
            </div>
            <Separator className="my-8 bg-white/20" />
            <p className="text-white/80 mb-6">Готова помочь вашему ребенку достичь новых высот в развитии </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-800">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на прием
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Елена Викторовна Смирнова. Учитель-дефектолог. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}