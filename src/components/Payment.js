import styled from "styled-components";
import applepay from '../assets/images/apple_pay.png'; 
import googlepay from '../assets/images/google_pay.png'; 
import bpay from '../assets/images/bpay2.png'; 
import creditcard from '../assets/images/creditcard.png'; 
import paylater from '../assets/images/pay-later.svg'; 


const PaymentStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #b8bec9;
    border-radius: .75rem;
    padding: 1rem 3rem 1rem 1.5rem;
    background-color: #fff;
    position: relative;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDkgMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjYxNjExOSAxLjI4MjAzTDAuMzY3NTI5IDEuNTMwNThDMC4yMDI3ODcgMS42OTUzMyAwLjIwMjc4NyAxLjk2MjQ0IDAuMzY3NTI5IDIuMTI3MjJMNy4yNDAzMyA5LjAwMDA2TDAuMzY3NTI5IDE1Ljg3MjlDMC4yMDI3ODcgMTYuMDM3NiAwLjIwMjc4NyAxNi4zMDQ4IDAuMzY3NTI5IDE2LjQ2OTVMMC42MTYxMTkgMTYuNzE4MUMwLjc4MDg2MSAxNi44ODI4IDEuMDQ3OTggMTYuODgyOCAxLjIxMjcyIDE2LjcxODFMOC42MzI0OCA5LjI5ODM2QzguNzk3MjMgOS4xMzM2MiA4Ljc5NzIzIDguODY2NSA4LjYzMjQ4IDguNzAxNzJMMS4yMTI3MiAxLjI4MjAzQzEuMDQ3OTggMS4xMTcyNSAwLjc4MDg2MSAxLjExNzI1IDAuNjE2MTE5IDEuMjgyMDNaIiBmaWxsPSIjQjhCRUM5Ii8+Cjwvc3ZnPgo=);
    background-repeat: no-repeat;
    background-position: right 1.5rem top 50%;
    cursor: pointer;

    div{
        display: flex;
        align-items: center;
        img{
            display: inline-block;
            margin-right: 1rem;
        }
        h3{
            display: inline-block;
            margin:0
        }
    }
    
`;

const Payment = ({type, value}) => {
    console.log (type);
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