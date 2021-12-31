import Image from "next/dist/client/image"
import documentIcon from '../public/icons/documentIcon.svg'
import styles from '../styles/ReportDocument.module.scss'
const ReportDocument = ({type, title, img, month, year}) => {
  return (
    <div className={styles.report}>
      <h3>{type}</h3>
      <Image src={documentIcon} alt={title} width="100" height="100" />
      <h2>{title}</h2>
        <span>{month}, {year}</span>
    </div>
  )
}

export default ReportDocument
