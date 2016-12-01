import React, {Component} from 'react';
import QueueItem from './QueueItem';
import { connect } from 'react-redux';

class QueueItemContainer extends Component {
    render() {
        return (
            <div className="phone">
                <div className="phone__screen">
                    <div className="phone__scroll-cont">
                        <div className="phone__content">
                            {
                                this.props.items.map(item =>
                                    <QueueItem
                                        key={item.id}
                                        id={item.id}
                                        theme={item.theme}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
QueueItemContainer.defaultProps = {items: []};

// export default QueueItemContainer;
export default connect(
    (state) => state.queueItems
    // getVisibleFeedItems(),
    // { showModal, showDoneFeedItems }
)(QueueItemContainer);