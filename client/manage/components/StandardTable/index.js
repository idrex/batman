import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.module.less';

function initTotalList(columns) {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}

class StandardTable extends PureComponent {
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);
    this.state = {
      selectedRowKeys: [],
      needTotalList,
    };
  }
  static propTypes = {
    isRowSelection: PropTypes.bool
  }

  static defaultProps = {
    isRowSelection: true
  }

  static getDerivedStateFromProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      return {
        selectedRowKeys: [],
        needTotalList,
      };
    }
    return null;
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let { needTotalList } = this.state;
    needTotalList = needTotalList.map(item => ({
      ...item,
      total: selectedRows.reduce((sum, val) => sum + parseFloat(val[item.dataIndex], 10), 0),
    }));
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pagination, filters, sorter);
    }
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const {
      data: { list, pagination },
      rowKey,
      isRowSelection,
      ...rest
    } = this.props;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: false,
      // showTotal: (total,range) => `${range}/${total}`,
      ...pagination,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };
   
    return (
      <div className={styles.standardTable}>
        {
          isRowSelection ? (
            <Fragment>
             <div className={styles.tableAlert}>
              <Alert
                message={
                  <Fragment>
                    已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
                    {needTotalList.map(item => (
                      <span style={{ marginLeft: 8 }} key={item.dataIndex}>
                        {item.title}
                        总计&nbsp;
                        <span style={{ fontWeight: 600 }}>
                          {item.render ? item.render(item.total) : item.total}
                        </span>
                      </span>
                    ))}
                    <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                      清空
                    </a>
                  </Fragment>
                }
                type="info"
                showIcon
              />
            </div>
            <Table
              rowKey={rowKey || '_id'}
              rowSelection={rowSelection}
              dataSource={list}
              pagination={paginationProps}
              onChange={this.handleTableChange}
              {...rest}
            />
          </Fragment>
          ):(<Table
            rowKey={rowKey || '_id'}
            dataSource={list}
            pagination={paginationProps}
            onChange={this.handleTableChange}
            {...rest}
          />)
        }
        
      </div>
    );
  }
}

export default StandardTable;
