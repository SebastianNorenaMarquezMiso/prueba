import { Location } from "../models/location";
import { Proxy } from "../models/proxy";
import { As } from "../models/as";


export class Tracker {
  ip: string;
  location: Location;
  domains: String[];
  as: As ;
  isp: string;
  proxy:Proxy;

  constructor(
    ip: string,
    location: Location,
    domains: String[],
    as: As ,
    isp: string,
    proxy:Proxy
  ) {
    this.ip = ip;
    this.location = location;
    this.domains = domains;
    this.as = as;
    this.proxy = proxy;
    this.isp = isp;
  }

}
