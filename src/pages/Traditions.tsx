import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'
import ChinesePattern from '@/components/ChinesePattern'
import { Link } from 'react-router-dom'

const Traditions = () => {
  const traditionSections = [
    {
      id: 'history',
      title: 'История чайной церемонии',
      subtitle: '茶道历史',
      content: 'Китайская чайная церемония зародилась более 2000 лет назад в эпоху династии Тан. Это не просто процесс заваривания чая, а целая философия, объединяющая в себе искусство, медитацию и общение с природой.',
      icon: 'Clock'
    },
    {
      id: 'philosophy',
      title: 'Философия Чадо',
      subtitle: '茶道哲学',
      content: 'Чадо (茶道) - Путь чая - основывается на четырех принципах: Ва (和) - гармония, Кэи (敬) - уважение, Сэи (清) - чистота, Дзяку (寂) - спокойствие. Эти принципы формируют основу китайской чайной культуры.',
      icon: 'Heart'
    },
    {
      id: 'ceremony',
      title: 'Ритуал заваривания',
      subtitle: '泡茶仪式',
      content: 'Традиционная церемония включает в себя подготовку посуды, нагрев чайника, промывание листьев, многократные заваривания и медитативное чаепитие. Каждое движение имеет глубокий смысл.',
      icon: 'Coffee'
    },
    {
      id: 'types',
      title: 'Виды китайского чая',
      subtitle: '中国茶类',
      content: 'Существует шесть основных категорий китайского чая: зеленый, белый, желтый, улун, красный (черный) и пуэр. Каждый вид требует особого подхода к завариванию и имеет уникальные свойства.',
      icon: 'Leaf'
    }
  ]

  const teaPrinciples = [
    {
      principle: 'Гармония',
      chinese: '和',
      description: 'Единство человека с природой и окружающим миром'
    },
    {
      principle: 'Уважение',
      chinese: '敬',
      description: 'Почтение к традициям, учителям и гостям'
    },
    {
      principle: 'Чистота',
      chinese: '清',
      description: 'Физическая и духовная чистота помыслов'
    },
    {
      principle: 'Спокойствие',
      chinese: '寂',
      description: 'Внутренний покой и медитативное состояние'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-golden-light via-white to-golden-light/50">
      {/* Hero секция */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <ChinesePattern variant="dragon" size="lg" className="absolute top-0 left-0 w-full opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <ChinesePattern variant="lotus" size="md" className="mx-auto mb-6 md:mb-8 opacity-20" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-golden-dark mb-4">
              Традиции чайной церемонии
              <span className="block text-lg md:text-2xl font-normal text-golden-primary mt-2">中国茶道传统</span>
            </h1>
            <p className="text-lg md:text-xl text-golden-dark/70 max-w-3xl mx-auto leading-relaxed">
              Погрузитесь в древнюю мудрость китайской чайной культуры — искусство, которое объединяет 
              поколения и создает мосты между прошлым и настоящим
            </p>
          </div>
        </div>
      </section>

      {/* Основные разделы традиций */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {traditionSections.map((section, index) => (
              <Card key={section.id} className="group hover:shadow-xl transition-all duration-300 border-golden-accent/20 bg-white/80 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-3 md:pb-4 p-4 md:p-6">
                  <div className="flex items-start md:items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                    <div className="p-2 md:p-3 rounded-full bg-golden-accent/10 flex-shrink-0">
                      <Icon name={section.icon as any} size={20} className="text-golden-accent md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-golden-dark text-lg md:text-xl">{section.title}</CardTitle>
                      <CardDescription className="text-golden-primary font-medium text-sm md:text-base">{section.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-golden-dark/80 leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Четыре принципа чайной церемонии */}
      <section className="py-16 bg-white/50 relative">
        <ChinesePattern variant="wave" size="md" className="absolute top-0 left-0 w-full opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-golden-dark mb-4">
              Четыре принципа Чадо
              <span className="block text-lg font-normal text-golden-primary mt-2">茶道四原则</span>
            </h2>
            <p className="text-golden-dark/70 max-w-2xl mx-auto">
              Основополагающие принципы, которые формируют духовную основу китайской чайной церемонии
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teaPrinciples.map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-golden-accent/20 bg-white/90">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-golden-accent to-golden-primary flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {item.chinese}
                  </div>
                  <h3 className="text-xl font-bold text-golden-dark mb-4">{item.principle}</h3>
                  <p className="text-golden-dark/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс традиционного заваривания */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-golden-dark mb-4">
              Этапы чайной церемонии
              <span className="block text-lg font-normal text-golden-primary mt-2">茶艺步骤</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Подготовка',
                subtitle: '准备',
                description: 'Очищение посуды, подготовка воды правильной температуры, создание спокойной атмосферы'
              },
              {
                step: '2', 
                title: 'Заваривание',
                subtitle: '冲泡',
                description: 'Промывание чайных листьев, первое заваривание, контроль времени и температуры'
              },
              {
                step: '3',
                title: 'Дегустация',
                subtitle: '品茶',
                description: 'Медитативное чаепитие, оценка аромата, вкуса и послевкусия'
              }
            ].map((stage, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-golden-accent/20">
                <div className="absolute top-0 right-0 w-16 h-16 bg-golden-accent/10 rounded-bl-full flex items-center justify-center">
                  <span className="text-golden-accent font-bold text-lg">{stage.step}</span>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-golden-dark text-xl">{stage.title}</CardTitle>
                  <CardDescription className="text-golden-primary font-medium">{stage.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-golden-dark/80 leading-relaxed">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-gradient-to-r from-golden-accent to-golden-primary text-white relative overflow-hidden">
        <ChinesePattern variant="cloud" size="lg" className="absolute top-0 left-0 w-full opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Начните свой путь в мире чайных традиций
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Откройте для себя глубину китайской чайной культуры с нашими премиальными чаями и посудой
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-golden-accent hover:bg-golden-light transition-colors"
            >
              <Link to="/#teapots">
                <Icon name="Coffee" size={20} className="mr-2" />
                Выбрать чайник
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/#tea">
                <Icon name="Leaf" size={20} className="mr-2" />
                Каталог чая
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Навигация назад */}
      <section className="py-8 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            asChild
            variant="outline" 
            className="border-golden-accent text-golden-dark hover:bg-golden-accent/10"
          >
            <Link to="/">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Traditions