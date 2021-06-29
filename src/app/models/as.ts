export class As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;

  constructor(
    asn: number,
    name: string,
    route: string,
    domain: string,
    type: string,
  ) {
    this.asn = asn;
    this.name = name;
    this.route = route;
    this.domain = domain;
    this.type = type;
  }

}
