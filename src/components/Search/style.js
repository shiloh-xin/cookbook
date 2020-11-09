import styled from 'styled-components';

export const Content = styled.div`
    li {
        display: flex;
        padding: 15px 15px;
        border-bottom: 1px solid #e5e5e5;
        img {
            width: 37%;
            height: 100px;
            border-radius: 3px;
            margin-right: 15px;
        }
        div {
            align-self: center;
            width: 197px;
            h1 {
                font-size: 16px;
            }
            h2 {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 8px 0;
                color: #9c9c9c;
            }
            section {
                color: #9c9c9c;
            }
        }
    }
    li:nth-child(1) {
        margin-top: 45px;
    }
`;
