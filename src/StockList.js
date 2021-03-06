// StockList.js

import React, { Component } from 'react';
import TableRow from './TableRow';

class StockList extends Component {
    constructor(props) {
        super(props);
      }
      
      tabRow(){
        if(this.props.data instanceof Array){
          return this.props.data.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        console.log('StockList this.pops:');
        console.log(this.props);
        console.log('StockList this.pops.children:');
        console.log(this.props.children);
        return (
          <div className="container">
            <h3>Stock List</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
            {this.props.children}
          </div>
        );
      }
}
export default StockList;