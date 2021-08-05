import styled from "styled-components";
import applepay from '../assets/images/apple_pay.png'; 
import googlepay from '../assets/images/google_pay.png'; 
import bpay from '../assets/images/bpay2.png'; 
import creditcard from '../assets/images/creditcard.png'; 
import paylater from '../assets/images/pay-later.svg'; 
import arrow from '../assets/images/icon/chevron-right.svg'; 

const PaymentStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--cad-color-gray-200);
    border-radius: var(--cad-radius-md);
    padding: var(--cad-spacer-3) var(--cad-spacer-5) var(--cad-spacer-3) var(--cad-spacer-4);
    background-color: white;
    position: relative;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: right var(--cad-spacer-4) top 50%;
    cursor: pointer;
    transition: all 0.1s ease;
    
    &:focus, &:hover{
        box-shadow: var(--cad-shadow-sm);
        transform: scale(1.005);
    }
    div{
        display: flex;
        align-items: center;
        img{
            margin-right: var(--cad-spacer-3);
        }
        h3{
            margin:0;
            font-family: var(--cad-font-heading);
            font-size: var(--cad-fs-3);
        }
    }
    
`;

const Payment = ({type, value}) => {
    let pname, logo;
    switch (type){
        case "apple":
            pname = "Apple Pay";
            logo = applepay;
            break;
        case "google":
            pname = "Google Pay";
            logo = googlepay;
            break;
        case "bpay":
            pname = "BPay";
            logo = bpay;  
            break;
        case "creditcard":
            pname = "Credit Card";
            logo = creditcard;  
            break;
        case "paylater":
            pname = "Pay Later";
            logo = paylater;  
            break;
    }
    
    return (
        <>
            <PaymentStyle role="button" tabIndex="0">
                <div>
                    <img src={logo} width="60" />
                    <h3>{pname}</h3>
                </div>
                <div>
                    <strong> ${value}.00</strong>
                </div>
            </PaymentStyle>
        </>
    );
}

export default Payment;