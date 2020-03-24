import React, {Component} from "react";
import PropTypes from 'prop-types';

const Link = ({text, onClick}) => (
    <a href='/test' onClick={onClick}>{text}</a>
);

Link.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

Link.defaultProps = {
    text: 'link',
    onClick: () => {},
}

class MyLink extends Component{

    handleClick = (e) => {
        e.preventDefault();
        console.log('link was clicked')
    }

    render(){
        return(
            <Link
                onClick={this.handleClick}
            />
        )
    }
}

export default MyLink;