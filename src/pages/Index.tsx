import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    needsTransfer: 'no'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ответ!",
      description: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '', needsTransfer: 'no' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto">
        
        <section className="relative mb-20 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-12">
            <div className="col-span-2 md:col-span-2 md:row-span-2">
              <img 
                src="https://cdn.poehali.dev/files/bfc06734-5cff-432a-88e2-8a830d16a801.jpg" 
                alt="Анна и Игит" 
                className="w-full h-full object-cover rounded-lg aspect-[4/3] md:aspect-auto"
              />
            </div>
            <div className="col-span-1">
              <img 
                src="https://cdn.poehali.dev/files/46678879-27c5-429d-a4c9-bad4617f4ece.jpg" 
                alt="Анна и Игит" 
                className="w-full h-full object-cover rounded-lg aspect-square"
              />
            </div>
            <div className="col-span-1">
              <img 
                src="https://cdn.poehali.dev/files/a72fcffe-da39-4eee-8c38-a0f5d5b1c6ea.jpg" 
                alt="Анна и Игит" 
                className="w-full h-full object-cover rounded-lg aspect-square"
              />
            </div>
          </div>
          
          <div className="text-center px-4">
            <div className="mb-8">
              <Icon name="Heart" size={48} className="mx-auto text-primary mb-6" />
            </div>
            <h1 className="text-6xl sm:text-7xl font-light text-primary mb-6 tracking-wide">
              Анна & Игит
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Приглашаем вас разделить с нами самый важный день нашей жизни
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
            <Card className="animate-scale-in border-primary/20">
              <CardContent className="pt-6 text-center">
                <Icon name="Calendar" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="text-2xl font-semibold mb-2">21 августа 2026</h3>
                <p className="text-muted-foreground">Пятница</p>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in [animation-delay:100ms] border-primary/20">
              <CardContent className="pt-6 text-center">
                <Icon name="Clock" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="text-2xl font-semibold mb-2">17:00</h3>
                <p className="text-muted-foreground">Начало церемонии</p>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in [animation-delay:200ms] border-primary/20">
              <CardContent className="pt-6 text-center">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="text-2xl font-semibold mb-2">Восьмая миля</h3>
                <p className="text-muted-foreground">Загородный комплекс</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-20 animate-fade-in px-4">
          <div className="text-center mb-12">
            <Icon name="CalendarClock" size={40} className="mx-auto text-primary mb-4" />
            <h2 className="text-4xl font-light text-primary mb-6">Программа дня</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-light text-primary">16:30</div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-semibold mb-2">Сбор гостей</h3>
                    <p className="text-muted-foreground">Приветственный фуршет и знакомство</p>
                  </div>
                  <Icon name="Glasses" size={32} className="text-primary/60 mt-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-light text-primary">17:00</div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-semibold mb-2">Церемония</h3>
                    <p className="text-muted-foreground">Официальная часть и обмен клятвами</p>
                  </div>
                  <Icon name="Heart" size={32} className="text-primary/60 mt-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-light text-primary">18:00</div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-semibold mb-2">Банкет</h3>
                    <p className="text-muted-foreground">Праздничный ужин, танцы и веселье</p>
                  </div>
                  <Icon name="UtensilsCrossed" size={32} className="text-primary/60 mt-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-light text-primary">00:00</div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-semibold mb-2">Завершение банкета</h3>
                    <p className="text-muted-foreground">Прощание и фотосессия</p>
                  </div>
                  <Icon name="Moon" size={32} className="text-primary/60 mt-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <div className="text-center min-w-[80px]">
                    <div className="text-3xl font-light text-primary">00:15</div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-semibold mb-2">Трансфер</h3>
                    <p className="text-muted-foreground">Отправление от места банкета</p>
                  </div>
                  <Icon name="Bus" size={32} className="text-primary/60 mt-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-20 animate-fade-in px-4">
          <div className="text-center mb-12">
            <Icon name="MapPin" size={40} className="mx-auto text-primary mb-4" />
            <h2 className="text-4xl font-light text-primary mb-6">Место проведения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              8 миля, М-5 Урал, 977-й километр, 1, Тольятти
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=49.521878%2C53.488045&z=16&l=map&pt=49.521878,53.488045,pm2rdm"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen={true}
                  className="w-full"
                  title="Карта места проведения"
                ></iframe>
              </CardContent>
            </Card>
            <div className="text-center mt-6">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://yandex.ru/maps/?pt=49.521878,53.488045&z=16&l=map', '_blank')}
              >
                <Icon name="ExternalLink" size={18} className="mr-2" />
                Открыть в Яндекс.Картах
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="mb-20 animate-fade-in px-4">
          <div className="text-center mb-12">
            <Icon name="Shirt" size={40} className="mx-auto text-primary mb-4" />
            <h2 className="text-4xl font-light text-primary mb-6">Дресс-код</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-semibold mb-4 text-center">Для дам</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Circle" size={8} className="mt-2 mr-3 text-primary flex-shrink-0" />
                    <span>Вечерние платья в оттенках бордового, персикового, бежевого или белого</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Circle" size={8} className="mt-2 mr-3 text-primary flex-shrink-0" />
                    <span>Длина - макси или миди</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Circle" size={8} className="mt-2 mr-3 text-primary flex-shrink-0" />
                    <span>Изящные аксессуары приветствуются</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-semibold mb-4 text-center">Для мужчин</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Circle" size={8} className="mt-2 mr-3 text-primary flex-shrink-0" />
                    <span>Костюм темных оттенков (черный, темно-синий, бордовый)</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Circle" size={8} className="mt-2 mr-3 text-primary flex-shrink-0" />
                    <span>Рубашка светлых тонов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Circle" size={8} className="mt-2 mr-3 text-primary flex-shrink-0" />
                    <span>Галстук или бабочка по желанию</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground mt-6 italic">
            Просьба избегать ярких неоновых оттенков
          </p>

          <div className="grid grid-cols-2 gap-2 mt-12 max-w-3xl mx-auto">
            <div className="col-span-1">
              <img 
                src="https://cdn.poehali.dev/files/71d6e671-a1d4-47c9-9681-11f10abf598d.jpg" 
                alt="Анна и Игит" 
                className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              />
            </div>
            <div className="col-span-1">
              <img 
                src="https://cdn.poehali.dev/files/3165ec6e-e0ee-464e-be53-2c09bde59c39.jpg" 
                alt="Анна и Игит" 
                className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              />
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        <section className="animate-fade-in px-4">
          <div className="text-center mb-12">
            <Icon name="Mail" size={40} className="mx-auto text-primary mb-4" />
            <h2 className="text-4xl font-light text-primary mb-4">Подтверждение присутствия</h2>
            <p className="text-muted-foreground">
              Будем рады узнать, сможете ли вы присоединиться к нам
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Имя Фамилия"
                    className="border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Нужен ли вам трансфер? *</Label>
                  <RadioGroup
                    value={formData.needsTransfer}
                    onValueChange={(value) => setFormData({ ...formData, needsTransfer: value })}
                    className="flex gap-6 pt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="cursor-pointer font-normal">
                        Да, нужен
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="cursor-pointer font-normal">
                        Нет, спасибо
                      </Label>
                    </div>
                  </RadioGroup>
                  <p className="text-sm text-muted-foreground pt-1">
                    Трансфер будет организован от метро до места проведения
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Пожелания или комментарии</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Дополнительная информация, пожелания..."
                    rows={4}
                    className="border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Отправить подтверждение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-12 text-muted-foreground">
            <p className="mb-2">По всем вопросам можно связаться:</p>
            <div className="flex items-center justify-center gap-2">
              <Icon name="Phone" size={16} />
              <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                +7 (999) 123-45-67
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-12 border-t text-center text-muted-foreground px-4">
          <p className="text-sm">
            С любовью, Анна и Максим
          </p>
          <div className="mt-4">
            <Icon name="Heart" size={20} className="mx-auto text-primary/50" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;