import React, { Component } from 'react';
import { Select, Tag, Icon } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

class Search extends Component {
  static propTypes = {
    studios: PropTypes.array.isRequired,
    setTypes: PropTypes.func.isRequired,
  };
  children = this.setOptions();

  setOptions() {
    let types = new Set();
    const options = [];
    this.props.studios.forEach((studio) => {
      const { params } = studio;
      types = new Set([...types, ...params]);
    });
    types.forEach(type => options.push(<Option key={type}>{type}</Option>));
    return options;
  }

  state = {
    types: [],
  };

  onChange = (type) => {
    const { types } = this.state;
    if (types.includes(type)) {
      return;
    }
    this.setState(
      {
        types: types.concat(type),
      },
      () => {
        this.setTypes();
      },
    );
  };

  deleteType = (deletedType) => {
    this.setState(
      prevState => ({
        types: prevState.types.filter(type => type !== deletedType),
      }),
      () => {
        this.setTypes();
      },
    );
  };

  setTypes = () => {
    this.props.setTypes(this.state.types);
  };

  renderTypes = () => {
    const { types } = this.state;

    return types.map(type => (
      <Tag
        closable
        className="tag"
        color="#407eff"
        key={type}
        onClose={() => this.deleteType(type)}
      >
        {type}
      </Tag>
    ));
  };

  render() {
    return (
      <div>
        <Select
          showSearch
          size="large"
          style={{ width: '100%' }}
          placeholder={
            <span>
              <Icon type="search" /> Умный поиск
            </span>
          }
          notFoundContent="Не найдено"
          onChange={this.onChange}
        >
          {this.children}
        </Select>
        <div className="tags-list">{this.renderTypes()}</div>
      </div>
    );
  }
}

export default Search;
