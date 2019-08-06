import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 200px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      display: flex;
      align-items: center;
      border: 0;
      color: #fff;
      margin-top: auto;
      overflow: hidden;
      border-radius: 4px;
      background-color: #7159c1;
      transition: background 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background-color: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
