import bpaylogo from '../assets/images/bpay.png'; 
import styles from './Bpay.module.scss';
 
const Bpay = ({billercode,refnumber}) => {
   return (
     <>
      <div className={styles.bpay}>
        <div className={styles.panel}>
          <div className={styles.icon}>
              <img src={bpaylogo} width="50" alt="bpay" />        
          </div>
          <div className={styles.ref}>
            <div className={styles.data}>
              <span>Biller Code:</span><span>{billercode}</span>          
            </div>
            <div className={styles.data}>
              <span>Reference:</span><span>{refnumber}</span>
            </div>
          </div>
        </div>
       
        <div className={styles.text}>
          <b>Telephone & Intetrnet banking - PPAY®</b><br /> 
          Contact your bank or financial institution to make this payment from your cheque, sayings or transaction account. More Info www.bpay.com.au
        </div>
       </div>
     </>
   )
 }

 export default Bpay;