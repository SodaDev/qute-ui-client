import React, {Component} from 'react';

class QueueItemContainer extends Component {
    render() {
        return (
            <div className="phone">
                <div className="phone__screen">
                    <div className="phone__scroll-cont">
                        <div className="phone__content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
QueueItemContainer.defaultProps = {items: []};

export default QueueItemContainer;