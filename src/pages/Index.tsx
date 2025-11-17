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
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        <section className="text-center mb-20 animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto text-primary mb-6" />
          </div>
          <h1 className="text-6xl sm:text-7xl font-light text-primary mb-6 tracking-wide">
            Анна & Максим
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Приглашаем вас разделить с нами самый важный день нашей жизни
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
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

        <section className="mb-20 animate-fade-in">
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

        <section className="animate-fade-in">
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

        <footer className="mt-20 pt-12 border-t text-center text-muted-foreground">
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
