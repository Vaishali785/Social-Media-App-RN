import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types';
import styles from './style';

function Title(props) {
    return (
        <Text style={styles.titleText}>{props.title}</Text>
    )
}


Title.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Title