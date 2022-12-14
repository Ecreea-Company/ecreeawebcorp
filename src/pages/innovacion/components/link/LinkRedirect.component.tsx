import styles from './Link.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

interface LinkProps {
  text: string
  url: string
  colorText?: string
  justifyContent?: string
}

function LinkRedirect ({ text, colorText, url, justifyContent }: LinkProps): JSX.Element {
  return (
    <a href={url}>
      <h2 className={styles.Link} style={{ color: colorText, justifyContent }}>
        {text}
        <div className={styles.Link__icon}>
          <IoIosArrowForward />
        </div>
      </h2>
    </a>
  )
}

export default LinkRedirect
