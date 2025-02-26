const sampleListings = [
  {
    title: "My Nepali Villa on Rent",
    description:
      "Near to the beautiful mountain in the world, you can expect the best sunrise and sunset from your room.",
    image: {
      filename: "listing-image-1",
      url: "https://resuvilla.com/img/gallery/villa5.jpg"
    },
    price: 599,
    location: "Baglung, Nepal",
    country: "Nepal",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Bhutanese Traditional House",
    description:
      "Experience authentic Bhutanese culture with this traditional house near Punakha Dzong.",
    image: {
      filename: "listing-image-2",
      url: "https://lh3.googleusercontent.com/RBjuj1lds_U0Ui5lZKqwRiR9PyDJKYzKr9gO5QF-DbA1vEOAJPGq8GBaF2AiDz3j0yXWslQ_gFLR3FjuE8ESMFWaSg=s1280-rw"
    },
    price: 1200,
    location: "Punakha",
    country: "Bhutan",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Mountain View Apartment",
    description:
      "Enjoy panoramic views of the Himalayas from this modern apartment in Kathmandu.",
    image: {
      filename: "listing-image-3",
      url: "https://cdn.pixabay.com/photo/2015/05/30/12/46/nepal-790335_640.jpg"
    },
    price: 800,
    location: "Kathmandu",
    country: "Nepal",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Luxury Villa in Thimphu",
    description:
      "A stunning luxury villa in Bhutan's capital with modern amenities and beautiful views.",
    image: {
      filename: "listing-image-4",
      url: "https://images.unsplash.com/photo-1670992493225-e6a76acaca83"
    },
    price: 1500,
    location: "Thimphu",
    country: "Paro, Bhutan",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Cozy Apartment in Pokhara",
    description:
      "A cozy apartment with stunning views of Phewa Lake and the Annapurna range.",
    image: {
      filename: "listing-image-5",
      url: "https://images.pexels.com/photos/9542664/pexels-photo-9542664.jpeg"
    },
    price: 750,
    location: "Pokhara, Nepal",
    country: "Nepal",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Beachfront House in Maldives",
    description:
      "This beach house offers the perfect tropical getaway with clear waters and soft sand.",
    image: {
      filename: "listing-image-6",
      url: "https://images.pexels.com/photos/29123388/pexels-photo-29123388/free-photo-of-rustic-wooden-boat-structure-by-the-sea.jpeg"
    },
    price: 2000,
    location: "Maldives",
    country: "Male, Maldives",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Luxury Suite in Colombo",
    description:
      "Experience the best of Sri Lanka in this luxury suite located in Colombo city.",
    image: {
      filename: "listing-image-7",
      url: "https://images.pexels.com/photos/30484071/pexels-photo-30484071/free-photo-of-rural-abandoned-house-in-kuala-kurau-malaysia.jpeg"
    },
    price: 1200,
    location: "Colombo, Sri Lanka",
    country: "Sri Lanka",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Traditional Kyoto House",
    description:
      "A beautifully preserved traditional house in Kyoto offering a genuine Japanese experience.",
    image: {
      filename: "listing-image-8",
      url: "https://images.pexels.com/photos/5745816/pexels-photo-5745816.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1000,
    location: "Kyoto, Japan",
    country: "Japan",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Bali Beachfront Villa",
    description:
      "A peaceful and private villa right on the beach in Bali, perfect for a romantic getaway.",
    image: {
      filename: "listing-image-9",
      url: "https://images.pexels.com/photos/29989224/pexels-photo-29989224/free-photo-of-scenic-traditional-house-amidst-bali-rice-fields.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Bali, Indonesia",
    country: "Indonesia",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Nepalese Heritage Home",
    description:
      "Stay in a historical Nepalese house surrounded by heritage sites in the Kathmandu Valley.",
    image: {
      filename: "listing-image-10",
      url: "https://images.pexels.com/photos/11519970/pexels-photo-11519970.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 950,
    location: "Bhaktapur, Nepal",
    country: "Nepal",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Eco-Friendly Cottage in Sikkim",
    description:
      "A sustainable, eco-friendly cottage in the hills of Sikkim offering breathtaking views.",
    image: {
      filename: "listing-image-11",
      url: "https://images.unsplash.com/photo-1569734149321-df7bf00caff6"
    },
    price: 800,
    location: "Sikkim, India",
    country: "India",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Luxury Hotel in Kathmandu",
    description:
      "A luxurious hotel offering state-of-the-art amenities and excellent services in Kathmandu.",
    image: {
      filename: "listing-image-12",
      url: "https://images.pexels.com/photos/30438318/pexels-photo-30438318/free-photo-of-charming-thatched-roof-cottages-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1600,
    location: "Lalitpur, Nepal",
    country: "Nepal",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Comfortable Stay in Paro",
    description:
      "Enjoy a peaceful stay in this modern home surrounded by the beauty of Bhutan's nature.",
    image: {
      filename: "listing-image-13",
      url: "https://images.pexels.com/photos/952586/pexels-photo-952586.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1100,
    location: "Thimpu, Bhutan",
    country: "Bhutan",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Traditional Nepalese Cottage",
    description:
      "A charming Nepalese cottage in a serene location with beautiful mountain views.",
    image: {
      filename: "listing-image-14",
      url: "https://images.pexels.com/photos/6102867/pexels-photo-6102867.jpeg"
    },
    price: 600,
    location: "Chitwan, Nepal",
    country: "Nepal",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Apartment with City Views in Dhaka",
    description:
      "Stay in this modern apartment with amazing views of the Dhaka skyline and convenient location.",
    image: {
      filename: "listing-image-15",
      url: "https://images.pexels.com/photos/9341050/pexels-photo-9341050.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 950,
    location: "Dhaka, Bangladesh",
    country: "Bangladesh",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Sichuan Mountain Retreat",
    description:
      "A peaceful retreat in the Sichuan mountains, ideal for nature lovers looking to unwind.",
    image: {
      filename: "listing-image-16",
      url: "https://images.pexels.com/photos/17750735/pexels-photo-17750735/free-photo-of-panorama-of-the-modern-city-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 750,
    location: "Sichuan, China",
    country: "China",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Eco-Resort in Nepal",
    description:
      "Relax and rejuvenate in this eco-resort surrounded by nature in the hills of Nepal.",
    image: {
      filename: "listing-image-17",
      url: "https://images.pexels.com/photos/14117079/pexels-photo-14117079.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1100,
    location: "Gosaikunda, Nepal",
    country: "Nepal",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Himalayan Lodge in Tibet",
    description:
      "A comfortable lodge located in Tibet, offering views of the majestic Himalayas.",
    image: {
      filename: "listing-image-18",
      url: "https://images.pexels.com/photos/30439895/pexels-photo-30439895/free-photo-of-lodge-in-the-himalayas-with-majestic-mountain-views.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1200,
    location: "Lhasa, China",
    country: "Tibet",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Modern Tokyo Apartment",
    description:
      "A stylish and modern apartment in the heart of Tokyo, perfect for short-term stays.",
    image: {
      filename: "listing-image-19",
      url: "https://images.pexels.com/photos/5905359/pexels-photo-5905359.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1300,
    location: "Tokyo, Japan",
    country: "Japan",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Secluded Villa in Sri Lanka",
    description:
      "A private, secluded villa with luxurious amenities and views of Sri Lanka's tropical forests.",
    image: {
      filename: "listing-image-20",
      url: "https://images.pexels.com/photos/11495863/pexels-photo-11495863.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Galle, Sri Lanka",
    country: "Sri Lanka",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Charming Nepalese Guesthouse",
    description:
      "Stay in a cozy guesthouse with beautiful garden views and a welcoming atmosphere in Nepal.",
    image: {
      filename: "listing-image-21",
      url: "https://images.pexels.com/photos/30459133/pexels-photo-30459133/free-photo-of-stunning-seaside-villa-on-italian-cliffside.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 500,
    location: "Lalitpur",
    country: "Nepal",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Peaceful Beach House in Goa",
    description:
      "Enjoy a peaceful vacation in this beachfront house located in the scenic Goa region.",
    image: {
      filename: "listing-image-22",
      url: "https://images.pexels.com/photos/20717176/pexels-photo-20717176/free-photo-of-house-in-tropical-forest.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Goa, India",
    country: "India",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Comfortable Villa in Bali",
    description:
      "This serene villa in Bali offers a perfect escape with private pool and garden views.",
    image: {
      filename: "listing-image-23",
      url: "https://images.pexels.com/photos/15877977/pexels-photo-15877977/free-photo-of-traditional-balinese-home.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Ubud, Indonesia",
    country: "Indonesia",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Traditional House in Dhaka",
    description:
      "Live like a local in this traditional Dhaka house with access to rich cultural experiences.",
    image: {
      filename: "listing-image-24",
      url: "https://images.pexels.com/photos/5931863/pexels-photo-5931863.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 600,
    location: "Dhaka, Bangladesh",
    country: "Bangladesh",
    owner: "67b5c29e33cd11117a7d937d"
  },
  {
    title: "Modern Condo in Seoul",
    description: "A stylish modern condo offering fantastic city views and a central location in Seoul.",
    image: {
      filename: "listing-image-25",
      url: "https://images.pexels.com/photos/30485826/pexels-photo-30485826/free-photo-of-charming-tudor-style-house-in-autumn-landscape.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1350,
    location: "Seoul, South Korea",
    country: "South Korea",
     owner: "67b5c29e33cd11117a7d937d"
  },
];

module.exports = { data: sampleListings };
