const sampleListings = [
  {
    title: "My Nepali Villa on Rent",
    description:
      "Near to the beautiful mountain in the world, you can expect the best sunrise and sunset from your room.",
    image: "https://resuvilla.com/img/gallery/villa5.jpg",
    price: 599,
    location: "Salyan, Baglung",
    country: "Nepal",
  },
  {
    title: "Bhutanese Traditional House",
    description:
      "Experience authentic Bhutanese culture with this traditional house near Punakha Dzong.",
    image: "https://lh3.googleusercontent.com/RBjuj1lds_U0Ui5lZKqwRiR9PyDJKYzKr9gO5QF-DbA1vEOAJPGq8GBaF2AiDz3j0yXWslQ_gFLR3FjuE8ESMFWaSg=s1280-rw",
    price: 1200,
    location: "Punakha",
    country: "Bhutan",
  },
  {
    title: "Mountain View Apartment",
    description:
      "Enjoy panoramic views of the Himalayas from this modern apartment in Kathmandu.",
    image:
      "https://cdn.pixabay.com/photo/2015/05/30/12/46/nepal-790335_640.jpg",
    price: 800,
    location: "Kathmandu",
    country: "Nepal",
  },
  {
    title: "Luxury Villa in Thimphu",
    description:
      "A stunning luxury villa in Bhutan’s capital with modern amenities and beautiful views.",
    image: "https://images.unsplash.com/photo-1670992493225-e6a76acaca83",
    price: 1500,
    location: "Thimphu",
    country: "Bhutan",
  },
  {
    title: "Cozy Apartment in Pokhara",
    description:
      "A cozy apartment with stunning views of Phewa Lake and the Annapurna range.",
    image: "https://images.pexels.com/photos/9542664/pexels-photo-9542664.jpeg",
    price: 750,
    location: "Pokhara",
    country: "Nepal",
  },
  {
    title: "Beachfront House in Maldives",
    description:
      "This beach house offers the perfect tropical getaway with clear waters and soft sand.",
    image:
      "https://images.pexels.com/photos/29123388/pexels-photo-29123388/free-photo-of-rustic-wooden-boat-structure-by-the-sea.jpeg",
    price: 2000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Luxury Suite in Colombo",
    description:
      "Experience the best of Sri Lanka in this luxury suite located in Colombo city.",
    image:
      "https://images.pexels.com/photos/30484071/pexels-photo-30484071/free-photo-of-rural-abandoned-house-in-kuala-kurau-malaysia.jpeg",
    price: 1200,
    location: "Colombo",
    country: "Sri Lanka",
  },
  {
    title: "Traditional Kyoto House",
    description:
      "A beautifully preserved traditional house in Kyoto offering a genuine Japanese experience.",
    image:
      "https://images.pexels.com/photos/5745816/pexels-photo-5745816.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1000,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Bali Beachfront Villa",
    description:
      "A peaceful and private villa right on the beach in Bali, perfect for a romantic getaway.",
    image:
      "https://images.pexels.com/photos/29989224/pexels-photo-29989224/free-photo-of-scenic-traditional-house-amidst-bali-rice-fields.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Nepalese Heritage Home",
    description:
      "Stay in a historical Nepalese house surrounded by heritage sites in the Kathmandu Valley.",
    image:
      "https://images.pexels.com/photos/11519970/pexels-photo-11519970.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 950,
    location: "Bhaktapur",
    country: "Nepal",
  },
  {
    title: "Eco-Friendly Cottage in Sikkim",
    description:
      "A sustainable, eco-friendly cottage in the hills of Sikkim offering breathtaking views.",
    image: "https://images.unsplash.com/photo-1569734149321-df7bf00caff6",
    price: 800,
    location: "Sikkim",
    country: "India",
  },
  {
    title: "Luxury Hotel in Kathmandu",
    description:
      "A luxurious hotel offering state-of-the-art amenities and excellent services in Kathmandu.",
    image:
      "https://images.pexels.com/photos/30438318/pexels-photo-30438318/free-photo-of-charming-thatched-roof-cottages-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1600,
    location: "Kathmandu",
    country: "Nepal",
  },
  {
    title: "Comfortable Stay in Paro",
    description:
      "Enjoy a peaceful stay in this modern home surrounded by the beauty of Bhutan’s nature.",
    image:
      "https://images.pexels.com/photos/952586/pexels-photo-952586.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1100,
    location: "Paro",
    country: "Bhutan",
  },
  {
    title: "Traditional Nepalese Cottage",
    description:
      "A charming Nepalese cottage in a serene location with beautiful mountain views.",
    image: "https://images.pexels.com/photos/6102867/pexels-photo-6102867.jpeg",
    price: 600,
    location: "Chitwan",
    country: "Nepal",
  },
  {
    title: "Apartment with City Views in Dhaka",
    description:
      "Stay in this modern apartment with amazing views of the Dhaka skyline and convenient location.",
    image:
      "https://images.pexels.com/photos/9341050/pexels-photo-9341050.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 950,
    location: "Dhaka",
    country: "Bangladesh",
  },
  {
    title: "Sichuan Mountain Retreat",
    description:
      "A peaceful retreat in the Sichuan mountains, ideal for nature lovers looking to unwind.",
    image:
      "https://images.pexels.com/photos/17750735/pexels-photo-17750735/free-photo-of-panorama-of-the-modern-city-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 750,
    location: "Sichuan",
    country: "China",
  },
  {
    title: "Eco-Resort in Nepal",
    description:
      "Relax and rejuvenate in this eco-resort surrounded by nature in the hills of Nepal.",
    image:
      "https://images.pexels.com/photos/14117079/pexels-photo-14117079.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1100,
    location: "Gosaikunda",
    country: "Nepal",
  },
  {
    title: "Himalayan Lodge in Tibet",
    description:
      "A comfortable lodge located in Tibet, offering views of the majestic Himalayas.",
    image:
      "https://images.pexels.com/photos/30439895/pexels-photo-30439895/free-photo-of-lodge-in-the-himalayas-with-majestic-mountain-views.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1200,
    location: "Lhasa",
    country: "Tibet",
  },
  {
    title: "Modern Tokyo Apartment",
    description:
      "A stylish and modern apartment in the heart of Tokyo, perfect for short-term stays.",
    image:
      "https://images.pexels.com/photos/5905359/pexels-photo-5905359.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1300,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Secluded Villa in Sri Lanka",
    description:
      "A private, secluded villa with luxurious amenities and views of Sri Lanka's tropical forests.",
    image:
      "https://images.pexels.com/photos/11495863/pexels-photo-11495863.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 2000,
    location: "Galle",
    country: "Sri Lanka",
  },
  {
    title: "Charming Nepalese Guesthouse",
    description:
      "Stay in a cozy guesthouse with beautiful garden views and a welcoming atmosphere in Nepal.",
    image:
      "https://images.pexels.com/photos/30459133/pexels-photo-30459133/free-photo-of-stunning-seaside-villa-on-italian-cliffside.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 500,
    location: "Lalitpur",
    country: "Nepal",
  },
  {
    title: "Peaceful Beach House in Goa",
    description:
      "Enjoy a peaceful vacation in this beachfront house located in the scenic Goa region.",
    image:
      "https://images.pexels.com/photos/20717176/pexels-photo-20717176/free-photo-of-house-in-tropical-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1800,
    location: "Goa",
    country: "India",
  },
  {
    title: "Comfortable Villa in Bali",
    description:
      "This serene villa in Bali offers a perfect escape with private pool and garden views.",
    image:
      "https://images.pexels.com/photos/15877977/pexels-photo-15877977/free-photo-of-traditional-balinese-home.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1500,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Traditional House in Dhaka",
    description:
      "Live like a local in this traditional Dhaka house with access to rich cultural experiences.",
    image:
      "https://images.pexels.com/photos/5931863/pexels-photo-5931863.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 600,
    location: "Dhaka",
    country: "Bangladesh",
  },
  {
    title: "Modern Condo in Seoul",
    description:
      "A stylish modern condo offering fantastic city views and a central location in Seoul.",
    image:
      "https://images.pexels.com/photos/30485826/pexels-photo-30485826/free-photo-of-charming-tudor-style-house-in-autumn-landscape.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1350,
    location: "Seoul",
    country: "South Korea",
  },
];

module.exports = { data: sampleListings };
