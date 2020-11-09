import styled from 'styled-components';

export const Title = styled.div`
    line-height: 0.4rem;
    height: 0.4rem;
    background-color: #ffffff;
    font-size: 16px;
    padding-left: 15px;
    color: #aaaaaa;
    margin-top: 0.1rem;
`;

export const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
`;

export const Dl = styled.dl`
    width: calc(50% - 0.1rem);
    background: #fff;
    margin-left: 0.05rem;
    margin-right: 0.05rem;
    margin-bottom: 0.1rem;
    border-radius: 3px;
    dt {
        img {
            width: 100%;
        }
    }
`;

export const Dd = styled.dd`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.1rem;
    h3 {
        font-size: 0.16rem;
    }
    p {
        font-size: 0.12rem;
        color: #c0c0c0;
        margin-top: 0.08rem;
    }
`;

export const DetailNav = styled.div`
    height: 0.4rem;
    line-height: 0.4rem;
    background: #ff6c0c;
    text-align: center;
    font-size: 0.18rem;
    color: white;
    position: fixed;
    width: 100%;
    z-index: 999;
`;

export const Content = styled.div`
    width: 100%;
    hight: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 11px solid #e5e5e5;
    padding-bottom: 40px;
    h1 {
        font-size: 23px;
        margin-top: 30px;
    }
    p {
        color: #9f9f9f;
        margin: 5px 0 10px 0;
    }
`;

export const Taste = styled.div`
    padding: 20px 17px;
    border-bottom: 11px solid #e5e5e5;
    h2 {
        font-size: 17px;
        margin-bottom: 10px;
    }
    p {
        font-size: 15px;
        line-height: 22px;
    }
    img {
        width: 100%;
        height: 200px;
    }
    span {
        display: flex;
        width: 100%;
        font-size: 15px;
        border-bottom: 1px solid #e0e0e0;
        margin-bottom: 10px;
        i {
            width: 50px;
            margin-left: 30px;
            margin-right: 150px;
        }
    }
`;
