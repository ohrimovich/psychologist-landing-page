import style from './aboutMe.module.scss';
import about_me from '../../images/about-me-img.png'
import Container from '../Container/Container';

const AboutMe = () => {
  return (
    <Container padding={window.innerWidth < 705 ? 0 : null}>
      <section id='about-me' className={style.about_me}>
        <div className={style.wrapper}>
          <img src={about_me} alt="Марія в кріслі" />
          <div className={style.content}>
            <h2 className={style.title}> Про мене</h2>
            <p>Я працюю використовуючи метод Транзактний аналіз, його ще називають ОК-ейний метод в основі якого лежить твердження, що від народження всі люди ОК і приймаючи свою ОК-ейність і ОК-ейність інших можна бути у гармонійних відносинах з людьми та світом в цілому.</p>
            <p>Для мене кожен клієнт це новий всесвіт наповнений власними переконаннями, емоціями, думками, власним баченням та відношенням до речей і обставин які його оточують. Знайомство з людиною та внутрішнім світом особистості це шлях, і у кожного він свій, унікальний і для мене це основне завдання бути поруч на цьому шляху.</p>
            <p>Допомагати в процесі створення, становлення, розвитку нового, опираючись на аутентичний досвід кожного.</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default AboutMe;