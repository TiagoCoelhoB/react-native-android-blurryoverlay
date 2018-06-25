var { requireNativeComponent, View } = require('react-native');
import PropTypes from 'prop-types';

var iface = {
    name: 'BlurryOverlay',
    propTypes: {
        ...View.propTypes,
        radius: PropTypes.any,
        sampling: PropTypes.any,
        color: PropTypes.string,
    },
};

module.exports = requireNativeComponent('RCTBlurryOverlay', iface);