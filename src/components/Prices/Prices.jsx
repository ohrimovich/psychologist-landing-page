import style from './prices.module.scss';
import Container from '../Container/Container';

const cards = [
  {
    title: 'Індивідуальні консультації',
    typeOfConsultation: 'Онлайн',
    price: '2 500 грн',
    quantityOfSessions: '3 сесії',
    durationOfSession: '50 хвилин / 1 сесія',
    descr: 'Для тих, хто цінує свій час та планує зустрічі заздалегідь',
    buttonText: 'Записатися',
    shouldOpenModal: true
  },
  {
    title: 'Індивідуальні консультації',
    typeOfConsultation: 'Онлайн',
    price: '1000 грн',
    quantityOfSessions: '1 сесія',
    durationOfSession: '50 хвилин',
    descr: 'Зручний спосіб отримати допомогу, незважаючи на ваше розташування',
    buttonText: 'Записатися',
    shouldOpenModal: true
  },
  {
    title: 'Індивідуальні консультації',
    typeOfConsultation: 'Онлайн',
    price: 'Безкоштовно',
    quantityOfSessions: '1 сесія',
    durationOfSession: 'Питання — Відповідь',
    descr: 'Опишіть вашу проблему та тримайте  швидку безкоштовну допомогу',
    buttonText: 'Записатися',
    shouldOpenModal: ''
  },
]

const Prices = ({isModalOpen}) => {
  
  const handleClick = (e) => {
    if (e.target.getAttribute('data-modal')) {
      isModalOpen(true);
      return
    }

    handleScroll('consultation')
  }

  	const handleScroll = (id) => {
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
	}
  
  return (
    <section className={style.prices} id='prices'>
      <Container>
      <h2 className={style.title}>Вартість послуг</h2>
      <ul className={style.cards_list}>
        {cards.map((card, id) => {
          return (
            <li key={id} className={style.card}>
              <h3>{ card.title}</h3>
              <p className={style.type}>{ card.typeOfConsultation}</p>
              <p className={style.price}>{ card.price}</p>
              <p className={style.quantity}>{ card.quantityOfSessions}</p>
              <p className={style.duration}>{ card.durationOfSession}</p>
              <p className={style.descr}>{ card.descr}</p>
              <button type='button' data-modal={card.shouldOpenModal} onClick={handleClick}>{ card.buttonText}</button>
          </li>
          )
        })}
        </ul>
        </Container>
    </section>
  )
}

export default Prices;