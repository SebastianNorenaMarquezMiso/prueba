export class Location {
  country: string;
  region: string;
  city: string;
  postalCode: string;
  timezone: string;
  geonameId: number;
  lat:number;
  lng:number;

  constructor(
    country: string,
    region: string,
    city: string,
    postalCode: string,
    timezone: string,
    geonameId: number,
    lat:number,
    lng:number

  ) {
    this.country = country;
    this.region = region;
    this.city = city;
    this.postalCode = postalCode;
    this.timezone = timezone;
    this.geonameId = geonameId;
    this.lat = lat;
    this.lng = lng;
  }

}
