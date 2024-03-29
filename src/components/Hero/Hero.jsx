import style from './hero.module.scss'
import hero_img from '../../images/hero_img.png'
import Container from '../Container/Container';

const Hero = ({isModalOpen}) => {

  return (

    <section className={style.hero}>
      <Container>
        <div className={style.hero_wrapper}>
          <div className={style.hero_content}>
            <p className={style.hero_text}>Ваш персональний психолог,  який завжди поруч</p>
            <h1 className={style.hero_title}>Марія Янчук</h1>
            <p className={style.hero_text__colored}>Я буду супровождувати Вас на шляху до самопізнання та допомагатиму пережити складні періоди життя</p>
            <button type='button' className={style.hero_button} onClick={()=>isModalOpen(true)}>Записатися</button>
          </div>
          <div className={style.hero_img} >
            <img src={hero_img} alt="Марія Янчук з телефоном" />
          </div>
        </div>
      </Container>
    </section>

  )

}

export default Hero;