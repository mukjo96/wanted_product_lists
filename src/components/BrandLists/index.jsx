import React, { Component } from "react";
import styled from "styled-components";
import * as LSWorker from "services/localStorageWorker";

const BrandContainer = styled.ul`
  display: flex;
  margin-left: 24px;
  margin-top: 24px;

  option {
    box-shadow: 2px 2px 4px gray;
    border-radius: 20px;
    padding: 3px 10px;
  }

  option + option {
    margin-left: 10px;
  }
`;

export default class index extends Component {
  state = {
    brandLists: [],
  };

  componentDidMount() {
    this.setState({
      brandLists: [
        ...new Set(LSWorker.getRecentList().map((items) => items.brand)),
      ],
    });
  }

  handleClick = (e) => {
    console.log(e.target.value);
    this.props.setBrand(e.target.value);
  };

  render() {
    const { brandClick } = this.props;
    const { brandLists } = this.state;

    return (
      <BrandContainer>
        {brandClick &&
          brandLists &&
          brandLists.map((brand, index) => (
            <option key={index} onClick={this.handleClick} value={`${brand}`}>
              {brand}
            </option>
          ))}
      </BrandContainer>
    );
  }
}
