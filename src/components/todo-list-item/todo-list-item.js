import React, { Component } from 'react';
import './todo-list-item.scss'

export default class TodoListItem extends Component {

    /*
        state = {
            done: false,
        }
    */

    constructor() {
        super();
        this.state = {
            done: false,
            important: false,
        };
    }

    onMarkImportant = () => {
      this.setState((important) => {
          return {
              important: !important,
          }
      })
    };

    onLabelClick = () => {

        this.setState(({done}) =>{
            return {
                done: !done,
            }
        });

    };



    render() {

        const {label, onDeleted } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        return (
            <span className={ classNames }>
              <span
                  onClick={ this.onLabelClick }
                  className="todo-list-item-label"
              >
                {label}
              </span>

              <button type="button"
                      onClick={ this.onMarkImportant }
                      className="btn btn-outline-success btn-sm float-right"
              >
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                      onClick={ onDeleted }
                      className="btn btn-outline-danger btn-sm float-right"
              >
                <i className="fa fa-trash-o" />
              </button>
            </span>
        );
    };
}
