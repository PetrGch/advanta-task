'use strict';

module.exports = {
    plugins: [
        require('postcss-smart-import')({ /* ...options */ }),
        require("stylelint"),
        require('precss')({ /* ...options */ }),
        require('autoprefixer')({
            browsers: ['last 3 versions', '>5%']
        })
    ]
};
