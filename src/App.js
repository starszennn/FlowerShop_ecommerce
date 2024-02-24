import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Avant Grade',
          img: 'avant-garde_1.webp',
          desc: 'За формою дуже схожий на піони. Бутон Авант Гард складається з 18-22 пелюсток біло-лимонного забарвлення та має приємний аромат',
          category: 'tulip flowers',
          price: '45.00',
        },
        {
          id: 2,
          title: 'Avocado',
          img: 'avocado.webp',
          desc: 'Для всех кто планирует порадовать своих близких на 8 марта',
          category: 'tulip flowers',
          price: '45.00',
        },
        {
          id: 3,
          title: 'Микс разных тюльнапов',
          img: 'chois.webp',
          desc: "Бльшой выбор и ассортимент. Возможна продажа тюльпанов на луковице",
          category: 'tulip flowers',
          price: '45.00',
        },
        {
          id: 4,
          title: 'Columbus',
          img: 'Columbus_4.webp',
          desc: 'Лепестки бутона розово-желтого цвета',
          category: 'peony flowers',
          price: '45.00',
        },
        {
          id: 5,
          title: 'Микс букета',
          img: 'mix.webp',
          desc: 'Оформление букета – от 50 грн.',
          category: 'mix flowers',
          price: '45.00',
        },
        {
          id: 6,
          title: 'Strong Gold',
          img: 'strong-gold_6.jpeg',
          desc: 'Форма: бокаловидная. Забарвлення: яскраво-жовте. Висота келиха: до 8 см. Діаметр келиха: до 6 см. Висота рослини: до 50 см.',
          category: 'tulip flowers',
          price: '45.00',
        },
      ],
      showFullItem: false,
      fullItem: {},
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  );
 }

 onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
 }

 chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }

   this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
   })
 }

 deleteOrder(id) {
   this.setState({orders: this.state.orders.filter(el => el.id !== id)})
 }

 addToOrder(item) {
  let isInArray = false;
  this.state.orders.forEach(el => {
    if(el.id === item.id) 
      isInArray = true
  })
  if(!isInArray)
    this.setState( { orders: [...this.state.orders, item] })
 }
}

export default App;
