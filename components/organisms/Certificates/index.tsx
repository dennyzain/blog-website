import Card from '../../molecules/Card';

export default function Certificates({ data }) {
  return (
    <>
      {
        data.map((item) => (<Card key={item.id} data={item} model="certificate" />))
    }
    </>
  );
}
