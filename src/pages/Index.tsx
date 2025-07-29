import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import ProductDetail from "@/components/ProductDetail";
import Checkout from "@/components/Checkout";
import ChinesePattern from "@/components/ChinesePattern";

interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  image: string;
  images: string[];
  category: "teapot" | "tea";
  description: string;
  longDescription: string;
  master?: string;
  origin?: string;
  specifications: Record<string, string>;
  features: string[];
}

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: 'Чайник "Дракон"',
      nameEn: "Dragon Teapot",
      price: 12500,
      image: "/img/ede4213b-dad9-4ea8-8306-f9123735e985.jpg",
      images: [
        "/img/ede4213b-dad9-4ea8-8306-f9123735e985.jpg",
        "/img/dcd82656-58b4-4dcd-b995-dc3b6bb89b0b.jpg",
        "/img/d11a614d-3543-4db0-8722-d57c6ebcf2c0.jpg",
      ],
      category: "teapot",
      description: "Премиальный чайник ручной работы из глины",
      longDescription: `Этот величественный чайник создан мастером Ли Чжанвэем в традиционной технике города Исин. 

Каждая деталь выполнена вручную из знаменитой пурпурной глины Цзыша, которая добывается только в этом регионе. Глина обладает уникальными свойствами — она "дышит", позволяя чаю раскрыть свой истинный вкус и аромат.

Форма чайника вдохновлена образом дракона — символа мудрости и силы в китайской культуре. Изящные изгибы носика и плавные линии корпуса создают гармоничную композицию, которая радует глаз и удобна в использовании.

Мастер Ли Чжанвэй работает в этой технике уже 30 лет, продолжая традиции своих предков. Каждый его чайник — это произведение искусства, которое будет служить долгие годы и с каждым завариванием будет только улучшать вкус чая.`,
      master: "Ли Чжанвэй",
      origin: "Исин, провинция Цзянсу",
      specifications: {
        Материал: "Пурпурная глина Цзыша",
        Объём: "200 мл",
        Высота: "9 см",
        Диаметр: "12 см",
        Вес: "280 г",
        "Год создания": "2024",
      },
      features: [
        "Ручная работа мастера с 30-летним опытом",
        "Аутентичная пурпурная глина из Исина",
        "Уникальная пористая структура для раскрытия вкуса чая",
        "Традиционная техника обжига",
        "Авторская подпись мастера",
        "Сертификат подлинности",
      ],
    },
    {
      id: 2,
      name: "Дунтин Билочунь",
      nameEn: "Dongting Biluochun",
      price: 2800,
      image: "/img/cae61b5c-d1c6-4b9a-849a-ba83534e5a71.jpg",
      images: [
        "/img/cae61b5c-d1c6-4b9a-849a-ba83534e5a71.jpg",
        "/img/c93b501a-f759-4b49-9508-8a2272e975fc.jpg",
      ],
      category: "tea",
      description: "Зелёный чай высшего сорта из озера Тайху",
      longDescription: `Дунтин Билочунь — один из десяти знаменитейших чаёв Китая, выращиваемый на склонах горы Дунтин у озера Тайху в провинции Цзянсу.

Название переводится как "Изумрудные спирали весны", что отражает уникальную форму чайных листьев — они скручены в тонкие спирали, покрытые нежным белым пушком.

Этот чай собирается только ранней весной, когда молодые почки особенно нежны и ароматны. Каждый лист собирается вручную в определённое время суток — рано утром, когда на листьях ещё лежит роса.

Вкус Дунтин Билочунь отличается необыкновенной свежестью и сладостью, с лёгкими фруктовыми нотами. Аромат настолько интенсивен, что говорят: "Один аромат пугает человека" — имея в виду его невероятную силу и яркость.

Наш Билочунь — это урожай 2024 года, класса "Супер", что означает самое высокое качество.`,
      origin: "Цзянсу, Китай",
      specifications: {
        Тип: "Зелёный чай",
        Сорт: "Дунтин Билочунь",
        Класс: "Супер",
        Урожай: "Весна 2024",
        Регион: "Гора Дунтин, озеро Тайху",
        Упаковка: "100 г в герметичной банке",
      },
      features: [
        "Один из 10 знаменитых чаёв Китая",
        "Ручной сбор ранней весной",
        "Уникальная спиралевидная форма листа",
        "Интенсивный фруктовый аромат",
        'Класс качества "Супер"',
        "Сертификат происхождения",
      ],
    },
    {
      id: 3,
      name: 'Чайник "Мудрец"',
      nameEn: "Sage Teapot",
      price: 15800,
      image: "/img/ede4213b-dad9-4ea8-8306-f9123735e985.jpg",
      images: [
        "/img/ede4213b-dad9-4ea8-8306-f9123735e985.jpg",
        "/img/dcd82656-58b4-4dcd-b995-dc3b6bb89b0b.jpg",
        "/img/d11a614d-3543-4db0-8722-d57c6ebcf2c0.jpg",
      ],
      category: "teapot",
      description: "Авторский чайник в классическом стиле",
      longDescription: `Чайник "Мудрец" — авторская работа мастера Ван Минхао, сочетающая в себе классические традиции исинской керамики с современным художественным видением.

Форма чайника вдохновлена образом древнего мудреца — спокойная, сбалансированная, излучающая внутреннее достоинство. Каждая линия продумана до мелочей, создавая совершенную гармонию пропорций.

Мастер Ван Минхао известен своим инновационным подходом к традиционному ремеслу. Он использует особую технику обжига, которая придаёт глине уникальный оттенок и текстуру. Поверхность чайника кажется живой, переливаясь на свету.

Этот чайник создан из редкой разновидности исинской глины — Хунни (красная глина), которая особенно ценится знатоками за её способность улучшать вкус чая со временем. Чем дольше вы используете чайник, тем лучше становится вкус завариваемого в нём чая.

Объём чайника рассчитан на одну полноценную чайную церемонию для 2-3 человек.`,
      master: "Ван Минхао",
      origin: "Исин, провинция Цзянсу",
      specifications: {
        Материал: "Красная глина Хунни",
        Объём: "250 мл",
        Высота: "10 см",
        Диаметр: "13 см",
        Вес: "320 г",
        "Год создания": "2024",
      },
      features: [
        "Авторская работа мастера Ван Минхао",
        "Редкая красная глина Хунни",
        "Инновационная техника обжига",
        "Улучшает вкус чая со временем",
        "Идеальные пропорции для церемонии",
        "Художественная ценность",
      ],
    },
    {
      id: 4,
      name: "Тегуаньинь",
      nameEn: "Tieguanyin",
      price: 3200,
      image: "/img/cae61b5c-d1c6-4b9a-849a-ba83534e5a71.jpg",
      images: [
        "/img/cae61b5c-d1c6-4b9a-849a-ba83534e5a71.jpg",
        "/img/c93b501a-f759-4b49-9508-8a2272e975fc.jpg",
      ],
      category: "tea",
      description: "Улун премиального качества с цветочным ароматом",
      longDescription: `Тегуаньинь — легендарный полуферментированный чай улун из провинции Фуцзянь, названный в честь богини милосердия Гуаньинь.

Согласно легенде, бедный фермер каждый день приносил свежую воду богине Гуаньинь. В благодарность за его преданность, богиня показала ему во сне чайный куст. Проснувшись, фермер нашёл этот куст и вырастил из него удивительный чай.

Наш Тегуаньинь выращивается в высокогорных районах уезда Аньси на высоте более 800 метров над уровнем моря. Прохладный климат и туманы создают идеальные условия для формирования сложного вкуса и аромата.

Этот чай проходит особую обработку — листья частично ферментируются, затем прожариваются по традиционной технологии. В результате получается чай с уникальным вкусом, сочетающим свежесть зелёного чая и глубину красного.

Аромат Тегуаньинь многогранен — в нём слышны ноты орхидеи, мёда и свежих фруктов. Вкус сладкий, с лёгкой минеральностью и долгим приятным послевкусием.`,
      origin: "Фуцзянь, Китай",
      specifications: {
        Тип: "Улун (полуферментированный)",
        Сорт: "Тегуаньинь традиционный",
        Класс: "Премиум",
        Урожай: "Осень 2024",
        Регион: "Аньси, провинция Фуцзянь",
        Упаковка: "100 г в герметичной банке",
      },
      features: [
        "Легендарный чай богини Гуаньинь",
        "Высокогорный урожай (800+ м)",
        "Традиционная технология обработки",
        "Сложный цветочно-фруктовый аромат",
        "Множественные заваривания (до 7 раз)",
        "Премиальное качество",
      ],
    },
  ];

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
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

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onAddToCart={addToCart}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  if (showCheckout) {
    return (
      <Checkout
        cart={cart}
        onBack={() => setShowCheckout(false)}
        onOrderComplete={() => {
          setCart([]);
          setShowCheckout(false);
          alert(
            "Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.",
          );
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-modern-light to-white">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-modern-accent/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🫖</div>
              <span className="text-xl font-bold text-golden-dark "></span>
              <span className="text-lg font-semibold text-golden-primary">
                Путь чая
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#teapots"
                className="text-golden-dark hover:text-golden-primary transition-colors"
              >
                Чайники
              </a>
              <a
                href="#tea"
                className="text-golden-dark hover:text-golden-primary transition-colors"
              >
                Чай
              </a>
              <a
                href="#masters"
                className="text-golden-dark hover:text-golden-primary transition-colors"
              >
                О традициях
              </a>
              <a
                href="#delivery"
                className="text-golden-dark hover:text-golden-primary transition-colors"
              >
                Доставка
              </a>
              <a
                href="#contacts"
                className="text-golden-dark hover:text-golden-primary transition-colors"
              >
                Контакты
              </a>
              <Button
                variant="outline"
                onClick={() => setShowCart(!showCart)}
                className="relative border-modern-accent text-golden-dark hover:bg-golden-accent/10"
              >
                <Icon name="ShoppingCart" size={20} />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-golden-primary text-white text-xs">
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
        <ChinesePattern
          variant="dragon"
          size="lg"
          className="absolute top-0 left-0 w-full opacity-20"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <ChinesePattern
                  variant="cloud"
                  size="sm"
                  className="mb-4 opacity-40"
                />
                <h1 className="text-5xl lg:text-6xl font-bold text-golden-dark leading-tight">
                  Премиальные
                  <span className="block">чайники</span>
                </h1>
                <p className="text-xl text-golden-dark/70 max-w-lg">
                  Аутентичные китайские чайники ручной работы и отборный чай от
                  мастеров с тысячелетними традициями
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-golden-primary hover:bg-golden-primary/90 text-white"
                >
                  <Icon name="Star" size={20} className="mr-2" />
                  Смотреть коллекцию
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-modern-accent text-golden-dark hover:bg-golden-accent/10"
                >
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
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-modern-primary">
                <p className="text-sm text-golden-dark/60">Мастер</p>
                <p className="font-semibold text-golden-dark">Ли Чжанвэй</p>
                <p className="text-xs text-golden-accent">30 лет опыта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог чайников */}
      <section id="teapots" className="py-16 bg-white/50 relative">
        <ChinesePattern
          variant="wave"
          size="md"
          className="absolute top-0 left-0 w-full opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <ChinesePattern
              variant="lotus"
              size="sm"
              className="mx-auto mb-4 opacity-30"
            />
            <h2 className="text-3xl font-bold text-golden-dark mb-4">
              Коллекция чайников
              <span className="block text-lg font-normal text-golden-primary">
                茶壶收藏
              </span>
            </h2>
            <p className="text-golden-dark/70 max-w-2xl mx-auto">
              Каждый чайник создан вручную мастерами из Исина — родины
              знаменитой пурпурной глины
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((p) => p.category === "teapot")
              .map((product, index) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-modern-accent/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-golden-primary text-white">
                        Ручная работа
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-golden-dark mb-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-golden-dark/60 mb-4">
                      {product.description}
                    </CardDescription>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-golden-accent">
                        <Icon name="User" size={16} className="inline mr-2" />
                        Мастер: {product.master}
                      </p>
                      <p className="text-sm text-golden-dark/60">
                        <Icon name="MapPin" size={16} className="inline mr-2" />
                        {product.origin}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-golden-primary">
                        {product.price.toLocaleString()} ₽
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          onClick={() => setSelectedProduct(product)}
                          className="border-modern-accent text-golden-dark hover:bg-golden-accent/10"
                        >
                          <Icon name="Eye" size={16} />
                        </Button>
                        <Button
                          onClick={() => addToCart(product)}
                          className="bg-golden-accent hover:bg-golden-accent/90 text-white"
                        >
                          <Icon name="Plus" size={16} className="mr-2" />В
                          корзину
                        </Button>
                      </div>
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
            <h2 className="text-3xl font-bold text-golden-dark mb-4">
              Премиальный чай
              <span className="block text-lg font-normal text-golden-primary ">
                优质茶叶
              </span>
            </h2>
            <p className="text-golden-dark/70 max-w-2xl mx-auto">
              Отборные чаи из лучших террасов Китая, собранные в идеальное время
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {products
              .filter((p) => p.category === "tea")
              .map((product, index) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-modern-accent/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
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
                        <CardTitle className="text-golden-dark mb-2">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-golden-dark/60 mb-4">
                          {product.description}
                        </CardDescription>
                        <p className="text-sm text-golden-dark/60 mb-4">
                          <Icon
                            name="MapPin"
                            size={16}
                            className="inline mr-2"
                          />
                          {product.origin}
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-golden-primary">
                            {product.price.toLocaleString()} ₽
                          </span>
                          <span className="text-sm text-golden-dark/60">
                            за 100г
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            onClick={() => setSelectedProduct(product)}
                            className="border-modern-accent text-golden-dark hover:bg-golden-accent/10"
                          >
                            <Icon name="Eye" size={16} />
                          </Button>
                          <Button
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-golden-accent hover:bg-golden-accent/90 text-white"
                          >
                            <Icon name="Plus" size={16} className="mr-2" />В
                            корзину
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* О мастерах и традициях */}
      <section id="masters" className="py-16 bg-modern-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold">
                Мастера традиций
                <span className="block text-lg font-normal text-tea-gold ">
                  大师
                </span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Наши чайники создаются в Исине — легендарном городе керамики,
                где техники изготовления передаются из поколения в поколение уже
                более тысячи лет.
              </p>
             <!-- <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Icon name="Award" size={24} className="text-tea-gold mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Ли Чжанвэй</h3>
                    <p className="text-white/70 text-sm">
                      30 лет опыта. Специализируется на классических формах
                      династии Мин
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Award" size={24} className="text-tea-gold mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Ван Минхао</h3>
                    <p className="text-white/70 text-sm">
                      Мастер авторских форм, сочетающий традиции с современным
                      дизайном
                    </p>
                  </div>
                </div>
              </div>
              -->
              <Button
                variant="outline"
                className="border-tea-gold text-tea-gold hover:bg-tea-gold hover:text-golden-dark"
              >
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
              <h2 className="text-3xl font-bold text-golden-dark">
                Доставка
                <span className="block text-lg font-normal text-golden-primary "></span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Icon
                    name="Truck"
                    size={24}
                    className="text-golden-accent mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-golden-dark mb-1">
                      По России
                    </h3>
                    <p className="text-golden-dark/70">
                      Бесплатная доставка от 10 000 ₽
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon
                    name="Shield"
                    size={24}
                    className="text-golden-accent mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-golden-dark mb-1">
                      Страхование
                    </h3>
                    <p className="text-golden-dark/70">
                      Все товары застрахованы при доставке
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon
                    name="Package"
                    size={24}
                    className="text-golden-accent mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-golden-dark mb-1">
                      Упаковка
                    </h3>
                    <p className="text-golden-dark/70">
                      Премиальная подарочная упаковка
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6" id="contacts">
              <h2 className="text-3xl font-bold text-golden-dark">
                Контакты
                <span className="block text-lg font-normal text-golden-primary "></span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-golden-accent" />
                  <span className="text-golden-dark">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-golden-accent" />
                  <span className="text-golden-dark">info@teaway.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-golden-accent" />
                  <span className="text-golden-dark">
                    Ежедневно 10:00 — 20:00
                  </span>
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
              <CardTitle className="text-golden-dark">Корзина</CardTitle>
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
                <p className="text-golden-dark/70 text-center py-8">
                  Корзина пуста
                </p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 border-b border-modern-accent/20 pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-golden-dark text-sm">
                          {item.name}
                        </h4>
                        <p className="text-golden-dark/60 text-xs">
                          Количество: {item.quantity}
                        </p>
                        <p className="text-golden-primary font-semibold">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-modern-accent/20">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-golden-dark">
                        Итого:
                      </span>
                      <span className="text-xl font-bold text-golden-primary">
                        {getTotalPrice().toLocaleString()} ₽
                      </span>
                    </div>
                    <Button
                      onClick={() => setShowCheckout(true)}
                      className="w-full bg-golden-primary hover:bg-golden-primary/90 text-white"
                    >
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
      <footer className="bg-modern-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🫖</span>
                <span className="text-xl font-bold "></span>
                <span className="text-lg font-semibold">TeaWay</span>
              </div>
              <p className="text-white/70">
                Премиальные китайские чайники и чай с доставкой по России
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <div className="space-y-2">
                <a
                  href="#teapots"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Чайники
                </a>
                <a
                  href="#tea"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Чай
                </a>
                <a
                  href="#masters"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  О традициях
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <div className="space-y-2">
                <a
                  href="#delivery"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Доставка
                </a>
                <a
                  href="#contacts"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Контакты
                </a>
                <a
                  href="#"
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  Гарантия
                </a>
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