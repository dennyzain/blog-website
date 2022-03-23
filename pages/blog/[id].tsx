import Image from 'next/image';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';

export default function DetailBlog() {
  return (
    <>
      <Navbar />
      <div className="h-auto">
        <Image
          src="/jumbotron.jpg"
          width={400}
          height={200}
          alt="jumbotron"
          className="object-cover"
        />
        <div className="px-3">
          <p className="p-2 text-sm font-roboto ">28 november 2019</p>
          <h1 className="text-4xl font-poppins font-bold tracking-wide">Apa itu .gitignore?</h1>
        </div>
        <div>
          <p className="font-roboto tracking-tight p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias sed
            possimus ab officiis, consequatur temporibus ipsa perspiciatis magni maiores voluptates
            modi. Pariatur officia quam maxime, saepe aspernatur esse nisi. Natus optio distinctio
            laboriosam! A debitis architecto officiis! Optio temporibus assumenda ducimus sunt
            distinctio, iusto amet facere, necessitatibus eum eveniet quam quibusdam atque, nam
            mollitia vitae tenetur sit eius architecto? Accusantium dignissimos asperiores labore
            sapiente, similique provident assumenda voluptates aliquid eos nobis expedita inventore
            quam voluptatibus minus necessitatibus dolor obcaecati soluta aut harum fuga magnam
            quibusdam! Saepe ad quasi enim? Asperiores minus libero tenetur? Architecto officiis
            dolor sunt incidunt doloribus et, iusto, dolore ad, aliquid reiciendis unde voluptates
            quis laudantium. Totam vel expedita quasi hic temporibus ipsam! Molestiae, rerum quis.
            Et facere nostrum ducimus. Et saepe porro ratione mollitia ea officiis perspiciatis,
            quibusdam at? Placeat sit itaque modi doloribus at vitae totam atque vel in! Quos
            provident esse sed perspiciatis?
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
