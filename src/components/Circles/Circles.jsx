import Container from '../Container/Container';
import style from './circles.module.scss'
const Circles = () => {


  return (
    <Container>
      <div className={style.wrapper}>
        <div className={style.circle_1}></div>
        <div className={style.circle_2}></div>
        <div className={style.circle_3}></div>
      </div>
    </Container>
  )
}

export default Circles;