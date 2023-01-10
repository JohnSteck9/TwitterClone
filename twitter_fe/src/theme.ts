import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    typography: {
        fontFamily: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: 'rgb(29, 161, 242)',
            dark: 'rgb(26, 144, 218)',
            contrastText: 'rgb(26, 144, 218)',
        },
        secondary: {
            main: 'rgb(26, 144, 218)',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'rgb(26, 144, 218)',
        },
    },
    // shadows: [],
    // overrides: {
    //     MuiButton: {
    //
    //     }
    // }
});

const mainColors = {
    tBlack: 'rgb(0,0,0)',
    tWhite: 'rgb(255, 255, 255)',
    // tBlue: 'rgb(29, 161, 242)',
    tDarkGray: 'rgb(101, 119, 134)',
    tLightGray: 'rgb(170, 184, 194)',
    tExtraLightGray: 'rgb(225, 232, 237)',
    tExtraExtraLightGray: 'rgb(245, 248, 250)',
};

const colors = {
    Blue: 'rgb(29, 155, 240)',
    BlueLight: 'rgb(142, 205, 248)',
    Yellow: 'rgb(255, 212, 0)',
    YellowLight: 'rgb(255, 234, 128)',
    DeepPink: 'rgb(249,24,128)',
    DeepPinkLight: 'rgb(252,139,192)',
    BlueViolet: 'rgb(120, 86, 255)',
    BlueVioletLight: 'rgb(188, 171, 255)',
    Orange: 'rgb(255, 122, 0)',
    OrangeLight: 'rgb(255, 189, 128)',
    MediumSeaGreen: 'rgb(0, 186, 124)',
    MediumSeaGreenLight: 'rgb(128, 221, 190)',
};

const additionalColors = {
    grey: 'rgb(83, 100, 113)',
};

const backgroundColors = {
    Default: 'rgb(255, 255, 255)',
    Dim: 'rgb(21, 32, 43)',
    LightsOut: 'rgb(0, 0, 0)',
};
