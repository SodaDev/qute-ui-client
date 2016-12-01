import React, {Component} from 'react';

type Props = {
    id: string,
    theme: string,
    onClick: () => void
};

class QueueItem extends Component {
    props: Props;

    state: {
        toggled: boolean
    };

    onMouseDown: () => void;

    constructor(props: Props) {
        super(props);
        this.state = {
            toggled: false
        };

        this.onMouseDown = () => this.setState({ toggled : !this.state.toggled });
    }

    render() {
        let cardClassName = 'card theme-' + this.props.theme;
        let cardFaceClassName = 'card__part__inner card__face ' + (this.state.toggled ? 'active' : '');

        return (
            <section className={cardClassName} onClick={this.onMouseDown}>
                <section className="card__part card__part-2">
                    <div className="card__part__side m--back">
                        <div className={cardFaceClassName}>
                            <div className="card__face__colored-side"></div>
                            <h3 className="card__face__price">ID: {this.props.id}</h3>
                            <div className="card__face__from-to">
                                <p>Some details of queue</p>
                                <p>Maybe details of position</p>
                            </div>
                            <div className="card__face__stats card__face__stats--req">
                                marker
                                <p>15:12</p>
                            </div>
                            <div className="card__face__stats card__face__stats--pledge">
                                another
                                <p>C3D</p>
                            </div>
                            <div className="card__face__stats card__face__stats--weight">
                                Something
                                <p>155</p>
                            </div>
                            <div className="card__face__divider"></div>
                            <div className="card__face__deliv-date">
                                About
                                <p>15 min</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}
QueueItem.defaultProps = { theme: 'purple' };

export default QueueItem;