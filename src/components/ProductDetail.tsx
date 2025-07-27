import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  images: string[];
  category: 'teapot' | 'tea';
  description: string;
  longDescription: string;
  master?: string;
  origin?: string;
  specifications: Record<string, string>;
  features: string[];
}

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart, onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-modern-light to-white">
      {/* Навигация */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-modern-accent/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="text-modern-dark hover:text-modern-primary"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад к каталогу
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🫖</div>
              <span className="text-xl font-bold text-modern-dark font-chinese">茶道</span>
              <span className="text-lg font-semibold text-modern-primary">TeaWay</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Фотогалерея */}
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-modern-primary text-white">
                {product.category === 'teapot' ? 'Ручная работа' : 'Премиум качество'}
              </Badge>
              
              {/* Навигация по изображениям */}
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImageIndex(prev => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                  >
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImageIndex(prev => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                  >
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </>
              )}
            </div>

            {/* Миниатюры */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg aspect-square ${
                      selectedImageIndex === index 
                        ? 'ring-2 ring-tea-crimson' 
                        : 'hover:ring-2 hover:ring-tea-amber'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Информация о товаре */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-modern-dark mb-2">
                {product.name}
              </h1>
              <p className="text-modern-dark/60 font-chinese mb-4">
                {product.nameEn}
              </p>
              <p className="text-modern-dark/80 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Цена и количество */}
            <Card className="border-modern-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-modern-primary">
                    {product.price.toLocaleString()} ₽
                  </span>
                  {product.category === 'tea' && (
                    <span className="text-modern-dark/60">за 100г</span>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-modern-dark font-medium">Количество:</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 p-0"
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 p-0"
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-modern-primary hover:bg-modern-primary/90 text-white mb-4"
                  size="lg"
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину — {(product.price * quantity).toLocaleString()} ₽
                </Button>

                <div className="flex items-center justify-center space-x-4 text-sm text-modern-dark/60">
                  <div className="flex items-center space-x-1">
                    <Icon name="Shield" size={16} />
                    <span>Гарантия качества</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Truck" size={16} />
                    <span>Быстрая доставка</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Информация о мастере/происхождении */}
            {product.master && (
              <Card className="border-modern-accent/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-modern-dark">
                    <Icon name="User" size={20} className="mr-2 text-modern-accent" />
                    Мастер-создатель
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-modern-dark">{product.master}</p>
                    <p className="text-modern-dark/60 text-sm">
                      <Icon name="MapPin" size={16} className="inline mr-1" />
                      {product.origin}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Особенности */}
            <Card className="border-modern-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center text-modern-dark">
                  <Icon name="Star" size={20} className="mr-2 text-modern-accent" />
                  Особенности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-modern-primary mt-0.5" />
                      <span className="text-modern-dark/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Подробное описание */}
        <div className="mt-12">
          <Card className="border-modern-accent/20">
            <CardHeader>
              <CardTitle className="text-modern-dark">Подробное описание</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-modern-dark/80 leading-relaxed whitespace-pre-line">
                {product.longDescription}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Характеристики */}
        <div className="mt-8">
          <Card className="border-modern-accent/20">
            <CardHeader>
              <CardTitle className="text-modern-dark">Характеристики</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-modern-accent/10 last:border-b-0">
                    <span className="text-modern-dark/60">{key}:</span>
                    <span className="text-modern-dark font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;