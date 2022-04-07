import { Certificate, CertificatesTypes } from '../../../interfaces/CertificateSections';
import Card from '../../molecules/Card';

export default function Certificates({ data }:CertificatesTypes) {
  return (
    <>
      {
        data.map((item:Certificate) => (<Card key={item.id} data={item} model="certificate" />))
    }
    </>
  );
}
