import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  i {
    text-align: center;
    font-size: 14px;
    padding: 0 10px;
  }
`;

export const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  border-radius: 10px;
  margin: auto;
  border: 2px solid black;
  padding: 25px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 80%;
    margin: auto;
  }
  .ticker-details {
    display: flex;
    justify-content: space-between;
    .logo {
      display: flex;
      gap: 10px;
      h2 {
        font-size: 20px;
      }
      img {
        height: 50px;
        object-fit: cover;
        border-radius: 10px;
      }
      @media (max-width: 900px) {
        h2 {
          font-size: 16px;
        }
        img {
          height: 40px;
        }
      }
    }
  }

  .nav {
    display: flex;
    align-items: start;
    h1 {
      font-size: 70px;
      color: #1a243a;
      margin: 0;
    }
    p {
      color: #bdbebf;
      font-size: 24px;
      margin: 0;
    }
    @media (max-width: 900px) {
      h1 {
        font-size: 36px;
      }
      p {
        font-size: 16px;
      }
    }
  }
  .priceChange {
    color: #67bf6b;
    font-size: 18px;
  }

  .settings {
    display: flex;
    justify-content: space-between;
    .fullscreen {
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 18px;
      color: #6f7177;
      cursor: pointer;
    }
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 10px;
    }
  }
  .datePicker {
    display: flex;
    align-items: center;
    gap: 20px;

    .date {
      color: #6f7177;
      font-size: 18px;
      cursor: pointer;
    }
    .selectedDate {
      color: #ffffff;
      padding: 5px 15px;
      background: #4b40ee;
      border-radius: 5px;
    }
  }
  .tabs {
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #eff1f3;

    .tab {
      color: #6f7177;
      cursor: pointer;
      margin: 0;
      padding-bottom: 10px;
    }
    .selectedTab {
      font-weight: 700;
      color: #1a243a;
      border-bottom: 3px solid #4b40ee;
    }
  }
  .Tab {
    min-height: 300px;
    display: flex;
    align-items: center;
  }
`;

export const ChartWrapper = styled(ResponsiveContainer)`
  .recharts-area-curve {
    stroke: #4b40ee !important;
    stroke-width: 1.5;
  }

  .recharts-cartesian-axis-line {
    stroke: #e2e4e7;
    stroke-width: 1;
  }

  .recharts-cartesian-grid-horizontal line {
    stroke-dasharray: 20 4;
  }
  .tooltip {
    padding: 5px 20px;
    background: #4b40ee;
    color: #ffffff;
    font-size: 18px !important;
    border-radius: 5px;
    font-size: 12px !important;
    text-align: center;
    p {
      padding: 5px 0px;
    }
  }
`;

export const HeaderWrapper = styled.div`
  height: 100px;
  width: 100%;
  background: #4b40ee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 32px;
`;

export const customStyles = {
  content: {
    width: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  &:focus {
    outline: none;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const SummaryWrapper = styled.div`
  height: 350px;
  display: flex;
  align-items: start;
  justify-content: start;
  .row {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  h3 {
    font-size: 16px;
    padding: 5px;
    font-weight: 400;
    b {
      font-size: 20px;
    }
  }

  gap: 20px;
  img {
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  @media (max-width: 900px) {
    img {
      height: 100px;
    }
    h3 {
      font-size: 14px;
      b {
        font-size: 16px;
      }
    }
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  input {
    height: 30px;
    width: 250px;
    outline: none;
    font-size: 16px;
    border: 1.5px solid;
    border-radius: 5px 0 0 5px;
  }
  button {
    background: #4b40ee;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    font-size: 16px;
    padding: 0 15px;
    cursor: pointer;
  }
`;
