import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-wedding-cream">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-wedding-cream/95 backdrop-blur-sm border-b border-wedding-gold/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            <a href="#home" className="text-wedding-charcoal hover:text-wedding-gold transition-colors font-open-sans font-medium">
              Главная
            </a>
            <a href="#program" className="text-wedding-charcoal hover:text-wedding-gold transition-colors font-open-sans font-medium">
              Программа
            </a>
            <a href="#gifts" className="text-wedding-charcoal hover:text-wedding-gold transition-colors font-open-sans font-medium">
              Подарки
            </a>
            <a href="#contact" className="text-wedding-charcoal hover:text-wedding-gold transition-colors font-open-sans font-medium">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="/img/2951abb5-eb1e-4905-b164-c0512331a732.jpg" 
            alt="Wedding couple" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-wedding-cream/50 to-wedding-cream/80"></div>
        </div>
        
        <div className="relative z-10 text-center animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto text-wedding-gold mb-6" />
          </div>
          
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-wedding-charcoal mb-6">
            Владислав & Диана
          </h1>
          
          <div className="w-32 h-px bg-wedding-gold mx-auto mb-6"></div>
          
          <p className="font-open-sans text-xl text-wedding-charcoal mb-4">
            Приглашаем вас разделить с нами
          </p>
          <p className="font-open-sans text-xl text-wedding-charcoal mb-8">
            самый важный день в нашей жизни
          </p>
          
          <div className="bg-wedding-white/80 backdrop-blur-sm rounded-lg p-8 max-w-lg mx-auto border border-wedding-gold/30">
            <Icon name="Calendar" size={32} className="mx-auto text-wedding-gold mb-4" />
            <p className="font-cormorant text-3xl font-semibold text-wedding-charcoal mb-2">
              17 Октября 2025
            </p>
            <p className="font-open-sans text-wedding-charcoal mb-4">
              Пятница, 14:30
            </p>
            <div className="border-t border-wedding-gold/20 pt-4">
              <Icon name="MapPin" size={20} className="mx-auto text-wedding-gold mb-2" />
              <p className="font-open-sans text-sm text-wedding-charcoal/90">
                Регистрация брака г. Барнаул ул. Сухэ-Батора, 13
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-wedding-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold text-wedding-charcoal mb-4">
              Программа торжества
            </h2>
            <div className="w-24 h-px bg-wedding-gold mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { time: "14:30", event: "Церемония бракосочетания", description: "Торжественная регистрация брака" },

                { time: "15:30", event: "Праздничный банкет", description: "Ужин, тосты и поздравления" }
              ].map((item, index) => (
                <Card key={index} className="bg-wedding-cream/50 border-wedding-gold/30 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className="bg-wedding-gold text-wedding-white rounded-full w-16 h-16 flex items-center justify-center font-open-sans font-bold text-lg">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-cormorant text-2xl font-semibold text-wedding-charcoal mb-2">
                          {item.event}
                        </h3>
                        <p className="font-open-sans text-wedding-charcoal/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 bg-wedding-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold text-wedding-charcoal mb-4">
              Места проведения
            </h2>
            <div className="w-24 h-px bg-wedding-gold mx-auto"></div>
          </div>

          {/* Ceremony and Reception Venues */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            {/* Registry Office */}
            <Card className="bg-wedding-white border-wedding-gold/30">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Icon name="Heart" size={32} className="mx-auto text-wedding-gold mb-2" />
                  <h3 className="font-cormorant text-2xl font-semibold text-wedding-charcoal">
                    ЗАГС
                  </h3>
                  <p className="font-open-sans text-sm text-wedding-charcoal/70">14:30 - Церемония бракосочетания</p>
                </div>
                <div className="space-y-3 text-wedding-charcoal font-open-sans text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-wedding-gold" />
                    <span className="text-sm">ул. Сухэ-Батора, 13</span>
                  </div>
                  <Button size="sm" className="bg-wedding-gold/10 hover:bg-wedding-gold/20 text-wedding-charcoal border border-wedding-gold/30">
                    <Icon name="Navigation" size={14} className="mr-1" />
                    Открыть в картах
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Restaurant */}
            <Card className="bg-wedding-white border-wedding-gold/30">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Icon name="Utensils" size={32} className="mx-auto text-wedding-gold mb-2" />
                  <h3 className="font-cormorant text-2xl font-semibold text-wedding-charcoal">
                    Ресторан "Лотос"
                  </h3>
                  <p className="font-open-sans text-sm text-wedding-charcoal/70">15:30 - Праздничный банкет</p>
                  <p className="font-open-sans text-xs text-wedding-charcoal/60 mt-1">Развлекательная программа, конкурсы для гостей</p>
                </div>
                <div className="space-y-3 text-wedding-charcoal font-open-sans text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="MapPin" size={16} className="text-wedding-gold" />
                    <span className="text-sm">ул. Матросова, 216</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Phone" size={16} className="text-wedding-gold" />
                    <span className="text-sm">+7 (495) 123-45-67</span>
                  </div>
                  <Button size="sm" className="bg-wedding-gold/10 hover:bg-wedding-gold/20 text-wedding-charcoal border border-wedding-gold/30">
                    <Icon name="Navigation" size={14} className="mr-1" />
                    Открыть в картах
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Restaurant Photo */}
          <div className="max-w-4xl mx-auto mb-16">
            <img 
              src="https://cdn.poehali.dev/files/560bb763-0e9d-41da-a31f-02d5545a4557.jpg" 
              alt="Wedding venue" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Transportation Info */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-wedding-white/80 border-wedding-gold/30">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Car" size={32} className="mx-auto text-wedding-gold mb-2" />
                  <h3 className="font-cormorant text-2xl font-semibold text-wedding-charcoal">
                    Как добраться
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Icon name="Clock" size={24} className="mx-auto text-wedding-gold" />
                    <h4 className="font-open-sans font-semibold text-wedding-charcoal">Время в пути</h4>
                    <p className="font-open-sans text-sm text-wedding-charcoal/70">
                      От ЗАГСа до ресторана<br />≈ 15 минут на автомобиле
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Icon name="ParkingCircle" size={24} className="mx-auto text-wedding-gold" />
                    <h4 className="font-open-sans font-semibold text-wedding-charcoal">Парковка</h4>
                    <p className="font-open-sans text-sm text-wedding-charcoal/70">
                      Бесплатная парковка<br />рядом с рестораном
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Icon name="Users" size={24} className="mx-auto text-wedding-gold" />
                    <h4 className="font-open-sans font-semibold text-wedding-charcoal">Трансфер</h4>
                    <p className="font-open-sans text-sm text-wedding-charcoal/70">
                      Организуем совместную<br />поездку для гостей
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button className="bg-wedding-gold hover:bg-wedding-gold/90 text-wedding-white font-open-sans">
                    <Icon name="Route" size={16} className="mr-2" />
                    Построить маршрут в Яндекс.Картах
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-20 bg-wedding-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold text-wedding-charcoal mb-4">
              Пожелания по подаркам
            </h2>
            <div className="w-24 h-px bg-wedding-gold mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-wedding-cream/30 border-wedding-gold/30">
              <CardContent className="p-8 text-center">
                <Icon name="Gift" size={48} className="mx-auto text-wedding-gold mb-6" />
                <p className="font-open-sans text-lg text-wedding-charcoal leading-relaxed mb-6">
                  Дорогие друзья! Ваше присутствие на нашей свадьбе — это уже самый лучший подарок. 
                  Если вы хотите порадовать нас, мы будем благодарны за любой вклад в наше совместное будущее.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-wedding-white p-6 rounded-lg border border-wedding-gold/20">
                    <Icon name="Home" size={32} className="mx-auto text-wedding-gold mb-3" />
                    <h3 className="font-cormorant text-xl font-semibold text-wedding-charcoal mb-2">
                      Семейное гнездышко
                    </h3>
                    <p className="font-open-sans text-wedding-charcoal/80 text-sm">
                      Помощь в обустройстве нашего дома
                    </p>
                  </div>
                  
                  <div className="bg-wedding-white p-6 rounded-lg border border-wedding-gold/20">
                    <Icon name="Plane" size={32} className="mx-auto text-wedding-gold mb-3" />
                    <h3 className="font-cormorant text-xl font-semibold text-wedding-charcoal mb-2">
                      Свадебное путешествие
                    </h3>
                    <p className="font-open-sans text-wedding-charcoal/80 text-sm">
                      Незабываемый медовый месяц
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-wedding-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold text-wedding-white mb-4">
              Контактная информация
            </h2>
            <div className="w-24 h-px bg-wedding-gold mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <Card className="bg-wedding-white/10 border-wedding-gold/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Icon name="User" size={48} className="mx-auto text-wedding-gold mb-4" />
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-white mb-4">
                  Невеста
                </h3>
                <div className="space-y-3 text-wedding-white/90 font-open-sans">
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="Phone" size={16} className="text-wedding-gold" />
                    <span>+7 (901) 205-64-85</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="Mail" size={16} className="text-wedding-gold" />
                    <span>diana@example.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-wedding-white/10 border-wedding-gold/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Icon name="User" size={48} className="mx-auto text-wedding-gold mb-4" />
                <h3 className="font-cormorant text-2xl font-semibold text-wedding-white mb-4">
                  Жених
                </h3>
                <div className="space-y-3 text-wedding-white/90 font-open-sans">
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="Phone" size={16} className="text-wedding-gold" />
                    <span>+7 (900) 164-89-95</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="Mail" size={16} className="text-wedding-gold" />
                    <span>vladislav@example.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="font-open-sans text-wedding-white/80 mb-4">
              По всем вопросам обращайтесь к нам
            </p>
            <Button className="bg-wedding-gold hover:bg-wedding-gold/90 text-wedding-white font-open-sans">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wedding-charcoal border-t border-wedding-gold/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <Icon name="Heart" size={24} className="mx-auto text-wedding-gold mb-4" />
          <p className="font-cormorant text-xl text-wedding-white mb-2">
            Владислав & Диана
          </p>
          <p className="font-open-sans text-wedding-white/70 text-sm">
            17 Октября 2025 • С любовью для наших дорогих гостей
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;