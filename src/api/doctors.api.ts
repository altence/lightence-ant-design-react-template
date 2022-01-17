import cameron from 'assets/images/doctors/cameron-bell.png';
import annabella from 'assets/images/doctors/annabella-morton.png';
import ryan from 'assets/images/doctors/ryan-thompson.png';
import ruby from 'assets/images/doctors/ruby-burns.png';
import james from 'assets/images/doctors/james-moss.png';
import sara from 'assets/images/doctors/sara-mills.png';
import jorden from 'assets/images/doctors/jorden-cannon.png';

export interface Doctor {
  id: number;
  name: string;
  specifity: number;
  rating: number;
  gps: {
    latitude: number;
    longitude: number;
  };
  imgUrl: string;
  phone: string;
  address: string;
}

export const getDoctorsData = (): Promise<Doctor[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          name: 'Cameron Bell',
          specifity: 1,
          rating: 5,
          gps: {
            latitude: 51.505,
            longitude: -0.09,
          },
          imgUrl: cameron,
          phone: '+X-XXX-XXX-XXXX',
          address: '98 Santa Clara Court Cherry Hill, NJ 08003',
        },
        {
          id: 2,
          name: 'Annabella Morton',
          specifity: 2,
          rating: 5,
          gps: {
            latitude: 40.73061,
            longitude: -73.935242,
          },
          imgUrl: annabella,
          phone: '+X-XXX-XXX-XXXX',
          address: '111 Foxrun Street Conyers, GA 30012',
        },
        {
          id: 3,
          name: 'Ryan Thompson',
          specifity: 3,
          rating: 4,
          gps: {
            latitude: 55.17111,
            longitude: -118.796928,
          },
          imgUrl: ryan,
          phone: '+X-XXX-XXX-XXXX',
          address: '9540 South Del Monte Rd. West Hempstead, NY 11552',
        },
        {
          id: 4,
          name: 'Ruby Burns',
          specifity: 4,
          rating: 5,
          gps: {
            latitude: 35.652832,
            longitude: 139.839478,
          },
          imgUrl: ruby,
          phone: '+X-XXX-XXX-XXXX',
          address: '9 Wagon Street Ravenna, OH 44266',
        },
        {
          id: 5,
          name: 'James Moss',
          specifity: 5,
          rating: 4,
          gps: {
            latitude: 59.334122,
            longitude: 18.071997,
          },
          imgUrl: james,
          phone: '+X-XXX-XXX-XXXX',
          address: '9568 Tower St. Somerset, NJ 08873',
        },
        {
          id: 6,
          name: 'Sara Mills',
          specifity: 6,
          rating: 5,
          gps: {
            latitude: -26.195246,
            longitude: 28.034088,
          },
          imgUrl: sara,
          phone: '+X-XXX-XXX-XXXX',
          address: '850 South Tunnel St. Newburgh, NY 12550',
        },
        {
          id: 7,
          name: 'Jorden Cannon',
          specifity: 7,
          rating: 4,
          gps: {
            latitude: -22.908333,
            longitude: -43.196388,
          },
          imgUrl: jorden,
          phone: '+X-XXX-XXX-XXXX',
          address: '7634 Taylor St. Boston, MA 02127',
        },
      ]);
    }, 0);
  });
};
