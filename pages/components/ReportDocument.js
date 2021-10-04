import Image from "next/dist/client/image"
import styles from '../../styles/ReportDocument.module.scss'
const ReportDocument = ({type, title, img, month, year}) => {
  return (
    <div className={styles.report}>
      <h3>{type}</h3>
      <Image src={img} alt={title} width="200" height="200" />
      <h2>{title}</h2>
        <span>{month}, {year}</span>
    </div>
  )
}

export default ReportDocument
