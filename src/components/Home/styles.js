import styled from "styled-components";

export const Container = styled.div`

    @media only screen and (min-width: 1024px) {
        display: flex;
        justify-content: center;
        padding: 20px;

        .containerMain{
            width: 30%;
            display: block;
        } 
        .buttonMain{
            display: flex;
            justify-content: center;
        }

    }

    text-align: center;
    margin-bottom: 2rem;

    .meanings {
        width: 90%;
        margin: 0 auto;
        background-color: #e6d0de;
        text-align: center;
        padding: 20px;
    }

    p {
        font-size: 2rem;
    }

    .audioPlayer{
        margin: 5px;
    }

    .definitions{
        text-align: left;
        margin: 5px 20px;        
        p {
            font-size: 1rem;
        }
    }
    .buttonBack, .buttonNext{
        margin: 3px;
    }

    table{
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
        th, td {
            border: solid 1px; padding: 0;
        }

        td:first-child, td:first-child + td, td:first-child + td + td  { 
            width: 117px  
        }

        th {
            text-align: center;
        }
    }

    

`

export const Button = styled.button`

    width: 152px;
    height: 40px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    background-color: #f3d881;

`