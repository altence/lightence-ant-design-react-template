import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/montserrat-v15-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/montserrat-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/montserrat-v15-latin-regular.woff2') format('font-woff2'), /* Super Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-regular.woff') format('font-woff'), /* Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-regular.ttf') format('font-truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/montserrat-v15-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('../assets/fonts/montserrat-v15-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/montserrat-v15-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/montserrat-v15-latin-500.woff2') format('font-woff2'), /* Super Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-500.woff') format('font-woff'), /* Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-500.ttf') format('font-truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/montserrat-v15-latin-500.svg#Montserrat') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: url('../assets/fonts/montserrat-v15-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/montserrat-v15-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/montserrat-v15-latin-600.woff2') format('font-woff2'), /* Super Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-600.woff') format('font-woff'), /* Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-600.ttf') format('font-truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/montserrat-v15-latin-600.svg#Montserrat') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('../assets/fonts/montserrat-v15-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../assets/fonts/montserrat-v15-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/fonts/montserrat-v15-latin-700.woff2') format('font-woff2'), /* Super Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-700.woff') format('font-woff'), /* Modern Browsers */
       url('../assets/fonts/montserrat-v15-latin-700.ttf') format('font-truetype'), /* Safari, Android, iOS */
       url('../assets/fonts/montserrat-v15-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  img {
    display: block;
  }
`;
