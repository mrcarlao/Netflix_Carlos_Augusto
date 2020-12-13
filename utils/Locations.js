// import { resolvePlugin } from '@babel/core';
import Geolocation from '@react-native-community/geolocation';
import { ProgressViewIOSComponent } from 'react-native';
import Geocoder from 'react-native-geocoder';

// const PegarLocalizacaoComSucesso = (info) => {
//     console.log(info);
//     const lat = info.coords.latitude;
//     const lng = info.coords.longitude;
//     Geocoder.geocodePosition({ lat, lng }).then((address) => {
//         console.log("address", address);
//     });
// };

// const PegarLocalizacaoComErro = (error) => {
//     console.log(error);
// };

export const GetCountry = ({ lat, lng }) => {
    return new Promise((resolve, reject) => {
        Geocoder.geocodePosition({
            lat,
            lng,
        })
            .then((location) => {
                resolve(location[7].countryCode);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


export const GetLocation = () => {
    return new Promise((resolve, reject) => {
        const getLocation = (info) => {
            resolve(info);
        };

        const getLocationError = (error) => {
            reject(error);
        }
        Geolocation.getCurrentPosition(
            getLocation,
            getLocationError);
    })

};

