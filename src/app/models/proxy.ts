export class Proxy {
  proxy: boolean;
  vpn: boolean;
  tor: boolean;

  constructor(
    proxy: boolean,
    vpn: boolean,
    tor: boolean,
  ) {
    this.proxy = proxy;
    this.vpn = vpn;
    this.tor = tor;
  }

}
