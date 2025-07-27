import React, { useState } from 'react';
import { CartItem } from '../types';
import Icon from './ui/icon';

interface CheckoutProps {
  cart: CartItem[];
  onBack: () => void;
  onOrderComplete: () => void;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

interface DeliveryOption {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
}

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, onBack, onOrderComplete }) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const [selectedDelivery, setSelectedDelivery] = useState<string>('standard');
  const [selectedPayment, setSelectedPayment] = useState<string>('card');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const deliveryOptions: DeliveryOption[] = [
    {
      id: 'standard',
      name: 'Обычная доставка',
      price: 300,
      description: '3-5 рабочих дней',
      icon: 'Truck'
    },
    {
      id: 'express',
      name: 'Экспресс доставка',
      price: 600,
      description: '1-2 рабочих дня',
      icon: 'Zap'
    },
    {
      id: 'pickup',
      name: 'Самовывоз',
      price: 0,
      description: 'Забрать в магазине',
      icon: 'MapPin'
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'card',
      name: 'Банковская карта',
      description: 'Visa, MasterCard, МИР',
      icon: 'CreditCard'
    },
    {
      id: 'cash',
      name: 'Наличными при получении',
      description: 'Оплата курьеру',
      icon: 'Banknote'
    },
    {
      id: 'sbp',
      name: 'СБП',
      description: 'Система быстрых платежей',
      icon: 'Smartphone'
    }
  ];

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryPrice = deliveryOptions.find(d => d.id === selectedDelivery)?.price || 0;
  const total = subtotal + deliveryPrice;

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Необходимо согласиться с условиями');
      return;
    }
    onOrderComplete();
  };

  const isFormValid = Object.values(customerInfo).every(value => value.trim() !== '') && agreedToTerms;

  return (
    <div className="min-h-screen bg-gradient-to-b from-modern-light to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-modern-dark hover:text-modern-primary transition-colors mr-4"
          >
            <Icon name="ArrowLeft" size={24} />
          </button>
          <h1 className="text-3xl font-bold text-modern-dark">Оформление заказа</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Форма заказа */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Данные покупателя */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-modern-muted/20">
                <h2 className="text-xl font-semibold text-modern-dark mb-6 flex items-center">
                  <Icon name="User" size={20} className="mr-2" />
                  Данные покупателя
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-modern-dark mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-modern-muted/30 rounded-lg focus:ring-2 focus:ring-modern-primary/20 focus:border-modern-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-modern-dark mb-2">
                      Фамилия *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-modern-muted/30 rounded-lg focus:ring-2 focus:ring-modern-primary/20 focus:border-modern-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-modern-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-modern-muted/30 rounded-lg focus:ring-2 focus:ring-modern-primary/20 focus:border-modern-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-modern-dark mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 border border-modern-muted/30 rounded-lg focus:ring-2 focus:ring-modern-primary/20 focus:border-modern-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-modern-dark mb-2">
                      Адрес доставки *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Улица, дом, квартира"
                      className="w-full px-4 py-3 border border-modern-muted/30 rounded-lg focus:ring-2 focus:ring-modern-primary/20 focus:border-modern-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-modern-dark mb-2">
                      Город *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3 border border-modern-muted/30 rounded-lg focus:ring-2 focus:ring-modern-primary/20 focus:border-modern-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-modern-dark mb-2">
                      Почтовый индекс *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="w-full px-4 py-3 border border-modern-muted/30 rounded-lg focus:ring-2 focus:ring-modern-primary/20 focus:border-modern-primary transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Способ доставки */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-modern-muted/20">
                <h2 className="text-xl font-semibold text-modern-dark mb-6 flex items-center">
                  <Icon name="Truck" size={20} className="mr-2" />
                  Способ доставки
                </h2>
                <div className="space-y-3">
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedDelivery === option.id
                          ? 'border-modern-primary bg-modern-primary/5'
                          : 'border-modern-muted/30 hover:border-modern-muted/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="delivery"
                        value={option.id}
                        checked={selectedDelivery === option.id}
                        onChange={(e) => setSelectedDelivery(e.target.value)}
                        className="sr-only"
                      />
                      <Icon name={option.icon as any} size={20} className="mr-3 text-modern-dark" />
                      <div className="flex-1">
                        <div className="font-medium text-modern-dark">{option.name}</div>
                        <div className="text-sm text-modern-dark/70">{option.description}</div>
                      </div>
                      <div className="font-semibold text-modern-dark">
                        {option.price === 0 ? 'Бесплатно' : `${option.price} ₽`}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Способ оплаты */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-modern-muted/20">
                <h2 className="text-xl font-semibold text-modern-dark mb-6 flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Способ оплаты
                </h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedPayment === method.id
                          ? 'border-modern-primary bg-modern-primary/5'
                          : 'border-modern-muted/30 hover:border-modern-muted/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="sr-only"
                      />
                      <Icon name={method.icon as any} size={20} className="mr-3 text-modern-dark" />
                      <div className="flex-1">
                        <div className="font-medium text-modern-dark">{method.name}</div>
                        <div className="text-sm text-modern-dark/70">{method.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Согласие с условиями */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-modern-muted/20">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 mr-3 text-modern-primary focus:ring-modern-primary"
                  />
                  <span className="text-sm text-modern-dark">
                    Я согласен с{' '}
                    <a href="#" className="text-modern-primary hover:underline">
                      условиями использования
                    </a>{' '}
                    и{' '}
                    <a href="#" className="text-modern-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                  </span>
                </label>
              </div>
            </form>
          </div>

          {/* Итоги заказа */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-modern-muted/20 sticky top-8">
              <h2 className="text-xl font-semibold text-modern-dark mb-6">Ваш заказ</h2>
              
              {/* Товары */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-3"
                      />
                      <div>
                        <div className="font-medium text-modern-dark text-sm">{item.name}</div>
                        <div className="text-xs text-modern-dark/70">× {item.quantity}</div>
                      </div>
                    </div>
                    <div className="font-semibold text-modern-dark">
                      {(item.price * item.quantity).toLocaleString()} ₽
                    </div>
                  </div>
                ))}
              </div>

              {/* Расчеты */}
              <div className="border-t border-modern-muted/20 pt-4 space-y-2">
                <div className="flex justify-between text-modern-dark">
                  <span>Подытог:</span>
                  <span>{subtotal.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between text-modern-dark">
                  <span>Доставка:</span>
                  <span>{deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice} ₽`}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-modern-dark border-t border-modern-muted/20 pt-2">
                  <span>Итого:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
              </div>

              {/* Кнопка оформления */}
              <button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full mt-6 py-4 px-6 rounded-lg font-semibold transition-all ${
                  isFormValid
                    ? 'bg-modern-primary text-white hover:bg-modern-primary/90 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Оформить заказ
              </button>

              <div className="mt-4 text-xs text-modern-dark/60 text-center">
                Нажимая кнопку, вы подтверждаете заказ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;