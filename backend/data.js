// Data para insertar a la DB
const data = {
  pasajes: [
    {
      origin: "Buenos Aires",
      destination: "Sao Paulo",
      price: 600,
      availability: 10,
      date: "2021/04/21",
      numberDays: 4,
      image: "/images/sao-paulo.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Bariloche",
      price: 400,
      availability: 21,
      date: "2021/04/18",
      numberDays: 7,
      image: "/images/bariloche.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Córdoba",
      price: 100,
      availability: 21,
      date: "2021/05/02",
      numberDays: 3,
      image: "/images/cordoba.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Mendoza",
      price: 250,
      availability: 13,
      date: "2021/04/22",
      numberDays: 11,
      image: "/images/mendoza.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Salta",
      price: 270,
      availability: 17,
      date: "2021/04/18",
      numberDays: 7,
      image: "/images/salta.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Río de Janeiro",
      price: 800,
      availability: 8,
      date: "2021/04/25",
      numberDays: 7,
      image: "/images/rio-janeiro.jpg",
    },
    {
      origin: "Córdoba",
      destination: "Río de Janeiro",
      price: 800,
      availability: 28,
      date: "2021/05/14",
      numberDays: 7,
      image: "/images/rio-janeiro.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Tucumán",
      price: 260,
      availability: 6,
      date: "2021/04/31",
      numberDays: 7,
      image: "/images/tucuman.jpeg",
    },
    {
      origin: "Mendoza",
      destination: "Tucumán",
      price: 120,
      availability: 6,
      date: "2021/04/25",
      numberDays: 3,
      image: "/images/tucuman.jpeg",
    },
    {
      origin: "Buenos Aires",
      destination: "Asunción",
      price: 430,
      availability: 23,
      date: "2021/04/30",
      numberDays: 13,
      image: "/images/asuncion.jpg",
    },
    {
      origin: "Córdoba",
      destination: "Asunción",
      price: 440,
      availability: 20,
      date: "2021/04/30",
      numberDays: 13,
      image: "/images/asuncion.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Corrientes",
      price: 290,
      availability: 55,
      date: "2021/05/30",
      numberDays: 7,
      image: "/images/corrientes.jpg",
    },
    {
      origin: "Corrientes",
      destination: "Mendoza",
      price: 250,
      availability: 55,
      date: "2021/05/30",
      numberDays: 7,
      image: "/images/mendoza.jpg",
    },
    {
      origin: "Corrientes",
      destination: "Córdoba",
      price: 230,
      availability: 55,
      date: "2021/05/30",
      numberDays: 7,
      image: "/images/cordoba.jpg",
    },
    {
      origin: "Mendoza",
      destination: "Buenos Aires",
      price: 180,
      availability: 45,
      date: "2021/05/20",
      numberDays: 7,
      image: "/images/bsas.jpg",
    },
    {
      origin: "Corrientes",
      destination: "Buenos Aires",
      price: 270,
      availability: 15,
      date: "2021/04/20",
      numberDays: 7,
      image: "/images/bsas.jpg",
    },
    {
      origin: "Neuquén",
      destination: "Buenos Aires",
      price: 180,
      availability: 42,
      date: "2021/05/23",
      numberDays: 9,
      image: "/images/bsas.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Río de Janeiro",
      price: 780,
      availability: 6,
      date: "2021/04/15",
      numberDays: 14,
      image: "/images/rio-janeiro.jpg",
    },
    {
      origin: "Córdoba",
      destination: "Río de Janeiro",
      price: 800,
      availability: 9,
      date: "2021/04/15",
      numberDays: 14,
      image: "/images/rio-janeiro.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Sao Paulo",
      price: 1230,
      availability: 19,
      date: "2021/05/04",
      numberDays: 21,
      image: "/images/sao-paulo.jpg",
    },
    {
      origin: "Córdoba",
      destination: "Sao Paulo",
      price: 1230,
      availability: 19,
      date: "2021/05/04",
      numberDays: 21,
      image: "/images/sao-paulo.jpg",
    },
    {
      origin: "Mendoza",
      destination: "Río de Janeiro",
      price: 1230,
      availability: 19,
      date: "2021/05/04",
      numberDays: 21,
      image: "/images/rio-janeiro.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Río de Janeiro",
      price: 1230,
      availability: 19,
      date: "2021/05/04",
      numberDays: 21,
      image: "/images/rio-janeiro.jpg",
    },
    {
      origin: "Córdoba",
      destination: "Río de Janeiro",
      price: 1230,
      availability: 19,
      date: "2021/05/04",
      numberDays: 21,
      image: "/images/rio-janeiro.jpg",
    },
    {
      origin: "Tucumán",
      destination: "Río de Janeiro",
      price: 1000,
      availability: 19,
      date: "2021/05/04",
      numberDays: 19,
      image: "/images/rio-janeiro.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Jujuy",
      price: 860,
      availability: 17,
      date: "2021/05/3",
      numberDays: 21,
      image: "/images/jujuy.jpg",
    },
    {
      origin: "Córdoba",
      destination: "Jujuy",
      price: 860,
      availability: 17,
      date: "2021/05/3",
      numberDays: 21,
      image: "/images/jujuy.jpg",
    },
    {
      origin: "Neuquén",
      destination: "Jujuy",
      price: 770,
      availability: 17,
      date: "2021/05/3",
      numberDays: 21,
      image: "/images/jujuy.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Mendoza",
      price: 600,
      availability: 0,
      date: "2021/04/12",
      numberDays: 21,
      image: "/images/mendoza.jpg",
    },
    {
      origin: "Buenos Aires",
      destination: "Bariloche",
      price: 400,
      availability: 0,
      date: "2021/05/10",
      numberDays: 21,
      image: "/images/bariloche.jpg",
    },
  ],
};
export default data;
