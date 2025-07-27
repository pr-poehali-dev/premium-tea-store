import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  category: 'teapot' | 'tea';
  description: string;
  master?: string;
  origin?: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: 'Чайник "Дракон"',
      nameEn: 'Dragon Teapot',
      price: 12500,
      image: '/img/ede4213b-dad9-4ea8-8306-f9123735e985.jpg',
      category: 'teapot',
      description: 'Премиальный чайник ручной работы из исинской глины',
      master: 'Ли Чжанвэй',
      origin: 'Исин, провинция Цзянсу'
    },
    {
      id: 2,
      name: 'Дунтин Билочунь',
      nameEn: 'Dongting Biluochun',
      price: 2800,
      image: '/img/cae61b5c-d1c6-4b9a-849a-ba83534e5a71.jpg',
      category: 'tea',
      description: 'Зелёный чай высшего сорта из озера Тайху',
      origin: 'Цзянсу, Китай'
    },
    {
      id: 3,
      name: 'Чайник "Мудрец"',
      nameEn: 'Sage Teapot',
      price: 15800,
      image: '/img/ede4213b-dad9-4ea8-8306-f9123735e985.jpg',
      category: 'teapot',
      description: 'Авторский чайник в классическом стиле',
      master: 'Ван Минхао',
      origin: 'Исин, провинция Цзянсу'
    },
    {
      id: 4,
      name: 'Тегуаньинь',
      nameEn: 'Tieguanyin',
      price: 3200,
      image: '/img/cae61b5c-d1c6-4b9a-849a-ba83534e5a71.jpg',
      category: 'tea',
      description: 'Улун премиального качества с цветочным ароматом',
      origin: 'Фуцзянь, Китай'
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-tea-cream to-white">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-tea-amber/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🫖</div>
              <span className="text-xl font-bold text-tea-charcoal font-chinese">茶道</span>
              <span className="text-lg font-semibold text-tea-crimson">TeaWay</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#teapots" className="text-tea-charcoal hover:text-tea-crimson transition-colors">Чайники</a>
              <a href="#tea" className="text-tea-charcoal hover:text-tea-crimson transition-colors">Чай</a>
              <a href="#masters" className="text-tea-charcoal hover:text-tea-crimson transition-colors">О традициях</a>
              <a href="#delivery" className="text-tea-charcoal hover:text-tea-crimson transition-colors">Доставка</a>
              <a href="#contacts" className="text-tea-charcoal hover:text-tea-crimson transition-colors">Контакты</a>
              <Button
                variant="outline"
                onClick={() => setShowCart(!showCart)}
                className="relative border-tea-amber text-tea-charcoal hover:bg-tea-amber/10"
              >
                <Icon name="ShoppingCart" size={20} />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-tea-crimson text-white text-xs">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Героическая секция */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-tea-charcoal leading-tight">
                  Премиальные
                  <span className="block text-tea-crimson font-chinese">茶具</span>
                  <span className="block">чайники</span>
                </h1>
                <p className="text-xl text-tea-charcoal/70 max-w-lg">
                  Аутентичные китайские чайники ручной работы и отборный чай от мастеров с тысячелетними традициями
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-tea-crimson hover:bg-tea-crimson/90 text-white">
                  <Icon name="Star" size={20} className="mr-2" />
                  Смотреть коллекцию
                </Button>
                <Button variant="outline" size="lg" className="border-tea-amber text-tea-charcoal hover:bg-tea-amber/10">
                  <Icon name="Book" size={20} className="mr-2" />
                  История традиций
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/ede4213b-dad9-4ea8-8306-f9123735e985.jpg" 
                alt="Традиционный китайский чайник" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-tea-crimson">
                <p className="text-sm text-tea-charcoal/60">Мастер</p>
                <p className="font-semibold text-tea-charcoal">Ли Чжанвэй</p>
                <p className="text-xs text-tea-amber">30 лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог чайников */}
      <section id="teapots" className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tea-charcoal mb-4">
              Коллекция чайников
              <span className="block text-lg font-normal text-tea-crimson font-chinese">茶壶收藏</span>
            </h2>
            <p className="text-tea-charcoal/70 max-w-2xl mx-auto">
              Каждый чайник создан вручную мастерами из Исина — родины знаменитой пурпурной глины
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.category === 'teapot').map((product, index) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-tea-amber/20" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-tea-crimson text-white">
                      Ручная работа
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-tea-charcoal mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-tea-charcoal/60 mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-tea-amber">
                      <Icon name="User" size={16} className="inline mr-2" />
                      Мастер: {product.master}
                    </p>
                    <p className="text-sm text-tea-charcoal/60">
                      <Icon name="MapPin" size={16} className="inline mr-2" />
                      {product.origin}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-tea-crimson">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="bg-tea-amber hover:bg-tea-amber/90 text-white"
                    >
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Каталог чая */}
      <section id="tea" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tea-charcoal mb-4">
              Премиальный чай
              <span className="block text-lg font-normal text-tea-crimson font-chinese">优质茶叶</span>
            </h2>
            <p className="text-tea-charcoal/70 max-w-2xl mx-auto">
              Отборные чаи из лучших террасов Китая, собранные в идеальное время
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {products.filter(p => p.category === 'tea').map((product, index) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-tea-amber/20" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-tea-charcoal mb-2">{product.name}</CardTitle>
                      <CardDescription className="text-tea-charcoal/60 mb-4">
                        {product.description}
                      </CardDescription>
                      <p className="text-sm text-tea-charcoal/60 mb-4">
                        <Icon name="MapPin" size={16} className="inline mr-2" />
                        {product.origin}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-tea-crimson">
                          {product.price.toLocaleString()} ₽
                        </span>
                        <span className="text-sm text-tea-charcoal/60">за 100г</span>
                      </div>
                      <Button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-tea-amber hover:bg-tea-amber/90 text-white"
                      >
                        <Icon name="Plus" size={16} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О мастерах и традициях */}
      <section id="masters" className="py-16 bg-tea-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold">
                Мастера традиций
                <span className="block text-lg font-normal text-tea-gold font-chinese">传统工艺大师</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Наши чайники создаются в Исине — легендарном городе керамики, где техники изготовления 
                передаются из поколения в поколение уже более тысячи лет.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Icon name="Award" size={24} className="text-tea-gold mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Ли Чжанвэй</h3>
                    <p className="text-white/70 text-sm">
                      30 лет опыта. Специализируется на классических формах династии Мин
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Award" size={24} className="text-tea-gold mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Ван Минхао</h3>
                    <p className="text-white/70 text-sm">
                      Мастер авторских форм, сочетающий традиции с современным дизайном
                    </p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="border-tea-gold text-tea-gold hover:bg-tea-gold hover:text-tea-charcoal">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать больше о традициях
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/9dbce5a2-240c-4711-a943-f60af446b073.jpg" 
                alt="Мастер за работой" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Доставка и контакты */}
      <section id="delivery" className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-tea-charcoal">
                Доставка
                <span className="block text-lg font-normal text-tea-crimson font-chinese">配送服务</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Icon name="Truck" size={24} className="text-tea-amber mt-1" />
                  <div>
                    <h3 className="font-semibold text-tea-charcoal mb-1">По России</h3>
                    <p className="text-tea-charcoal/70">Бесплатная доставка от 10 000 ₽</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Shield" size={24} className="text-tea-amber mt-1" />
                  <div>
                    <h3 className="font-semibold text-tea-charcoal mb-1">Страхование</h3>
                    <p className="text-tea-charcoal/70">Все товары застрахованы при доставке</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Package" size={24} className="text-tea-amber mt-1" />
                  <div>
                    <h3 className="font-semibold text-tea-charcoal mb-1">Упаковка</h3>
                    <p className="text-tea-charcoal/70">Премиальная подарочная упаковка</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6" id="contacts">
              <h2 className="text-3xl font-bold text-tea-charcoal">
                Контакты
                <span className="block text-lg font-normal text-tea-crimson font-chinese">联系我们</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-tea-amber" />
                  <span className="text-tea-charcoal">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-tea-amber" />
                  <span className="text-tea-charcoal">info@teaway.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-tea-amber" />
                  <span className="text-tea-charcoal">Ежедневно 10:00 — 20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Корзина */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <Card className="w-full max-w-md max-h-[80vh] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-tea-charcoal">Корзина</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCart(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </CardHeader>
            <CardContent className="overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-tea-charcoal/70 text-center py-8">Корзина пуста</p>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 border-b border-tea-amber/20 pb-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-tea-charcoal text-sm">{item.name}</h4>
                        <p className="text-tea-charcoal/60 text-xs">Количество: {item.quantity}</p>
                        <p className="text-tea-crimson font-semibold">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-tea-amber/20">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-tea-charcoal">Итого:</span>
                      <span className="text-xl font-bold text-tea-crimson">
                        {getTotalPrice().toLocaleString()} ₽
                      </span>
                    </div>
                    <Button className="w-full bg-tea-crimson hover:bg-tea-crimson/90 text-white">
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Оформить заказ
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Футер */}
      <footer className="bg-tea-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🫖</span>
                <span className="text-xl font-bold font-chinese">茶道</span>
                <span className="text-lg font-semibold">TeaWay</span>
              </div>
              <p className="text-white/70">
                Премиальные китайские чайники и чай с доставкой по России
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <div className="space-y-2">
                <a href="#teapots" className="block text-white/70 hover:text-white transition-colors">Чайники</a>
                <a href="#tea" className="block text-white/70 hover:text-white transition-colors">Чай</a>
                <a href="#masters" className="block text-white/70 hover:text-white transition-colors">О традициях</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <div className="space-y-2">
                <a href="#delivery" className="block text-white/70 hover:text-white transition-colors">Доставка</a>
                <a href="#contacts" className="block text-white/70 hover:text-white transition-colors">Контакты</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Гарантия</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 TeaWay. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;