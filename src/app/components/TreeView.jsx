import React, {PropTypes} from 'react';

const TreeView = React.createClass({
  propTypes: {
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    nodeLabel: PropTypes.node.isRequired,
    onOver: PropTypes.func
  },

  getInitialState() {
    return {collapsed: this.props.defaultCollapsed};
  },

  handleClick(...args) {
    this.setState({collapsed: !this.state.collapsed});
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  },

  handleOver(...args) {
    if (this.props.onOver) {
      this.props.onOver(...args);
    }
  },

  render() {
    const {
      collapsed = this.state.collapsed,
      className = '',
      nodeLabel,
      children,
      ...rest,
    } = this.props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    let itemClassName = 'tree-view_item';

    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
      itemClassName += ' tree-view_item-collapsed';
    }

    const arrow =
      <div
        {...rest}
        className={className + ' ' + arrowClassName}>
      </div>;

    return (
      <div className="tree-view">
        <div
          className={itemClassName}
          onClick={this.handleClick}>
          {arrow}
          {nodeLabel}
        </div>
        <div className={containerClassName}>
          {children}
        </div>
      </div>
    );
  },
});

export default TreeView;
