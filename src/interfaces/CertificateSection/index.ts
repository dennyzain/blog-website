import { User } from '../PostSection';

export interface Certificate{
    id: string;
     attributes: {
    title: string;
    body: string;
    slug:string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    createdAt: string;
  };
}

export interface CertificatesTypes{
    data:Array<Certificate>;
}

export interface MainCertificatesProps extends CertificatesTypes{
    user:User;
}
