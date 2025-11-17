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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-12">
            <div className="col-span-2 md:col-span-2 row-span-2">
              <img 
                src="https://cdn.poehali.dev/files/bfc06734-5cff-432a-88e2-8a830d16a801.jpg" 
                alt="Анна и Максим" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/files/46678879-27c5-429d-a4c9-bad4617f4ece.jpg" 
                alt="Анна и Максим" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/files/71d6e671-a1d4-47c9-9681-11f10abf598d.jpg" 
                alt="Анна и Максим" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/files/3165ec6e-e0ee-464e-be53-2c09bde59c39.jpg" 
                alt="Анна и Максим" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <img 
                src="https://cdn.poehali.dev/files/a72fcffe-da39-4eee-8c38-a0f5d5b1c6ea.jpg" 
                alt="Анна и Максим" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:hidden">
              <img 
                src="https://cdn.poehali.dev/files/46678879-27c5-429d-a4c9-bad4617f4ece.jpg" 
                alt="Анна и Максим" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:hidden">
              <img 
                src="https://cdn.poehali.dev/files/71d6e671-a1d4-47c9-9681-11f10abf598d.jpg" 
                alt="Анна и Максим" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/files/3165ec6e-e0ee-464e-be53-2c09bde59c39.jpg" 
                alt="Анна и Максим" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="text-center px-4">
            <div className="mb-8">
              <Icon name="Heart" size={48} className="mx-auto text-primary mb-6" />
            </div>
            <h1 className="text-6xl sm:text-7xl font-light text-primary mb-6 tracking-wide">
              Анна & Максим
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Приглашаем вас разделить с нами самый важный день нашей жизни
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
            <Card className="animate-scale-in border-primary/20">
              <CardContent className="pt-6 text-center">
                <Icon name="Calendar" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="text-2xl font-semibold mb-2">15 июня 2025</h3>
                <p className="text-muted-foreground">Воскресенье</p>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in [animation-delay:100ms] border-primary/20">
              <CardContent className="pt-6 text-center">
                <Icon name="Clock" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="text-2xl font-semibold mb-2">15:00</h3>
                <p className="text-muted-foreground">Начало церемонии</p>
              </CardContent>
            </Card>
            
            <Card className="animate-scale-in [animation-delay:200ms] border-primary/20">
              <CardContent className="pt-6 text-center">
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-3" />
                <h3 className="text-2xl font-semibold mb-2">Усадьба</h3>
                <p className="text-muted-foreground">Загородный клуб "Гармония"</p>
              </CardContent>
            </Card>
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