module.exports = {
    js2svg: {
        indent: 2, // string with spaces or number of spaces. 4 by default
        pretty: true, // boolean, false by default
    },
    multipass: true,
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false,
                },
            },
        },
        {
            name: 'addAttributesToSVGElement',
            params: {
                attribute: 'width="100%" height="100%"',
            },
        },
    ],
};