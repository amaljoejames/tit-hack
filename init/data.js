const sampleListings = [
  {
    title: "Muscle Factory Gym",
    description:
      "A state-of-the-art gym with heavy lifting equipment, personal training, and high-performance space for serious athletes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },
  {
    title: "Flex & Fit Studio",
    description:
      "Modern gym studio with HIIT, yoga, and Zumba sessions. Located in the heart of Bangalore.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
  },
  {
    title: "Tokyo Iron Temple",
    description:
      "Premier fitness facility with Olympic-grade weights and equipment. Ideal for bodybuilding and strength training.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },
  {
    title: "Berlin Fit Club",
    description:
      "A vibrant gym in Berlin offering cardio zones, spinning classes, and health bar with protein shakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Berlin",
    country: "Germany",
    geometry: {
      type: "Point",
      coordinates: [13.405, 52.52],
    },
  },
  {
    title: "Dubai Strength Arena",
    description:
      "High-end luxury gym with rooftop views, CrossFit zones, MMA rings, and a spa area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },
  {
    title: "London Urban Gym",
    description:
      "Underground industrial-style gym with elite trainers, boxing classes, and powerlifting platforms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "London",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-0.1276, 51.5074],
    },
  },
  {
    title: "Strength Syndicate NYC",
    description:
      "Hardcore strength and conditioning gym in New York City with specialized lifting zones and group workouts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
  },
  {
    title: "Paris Wellness Studio",
    description:
      "Boutique wellness and fitness center offering Pilates, yoga, and functional training in a tranquil setting.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
  },
  {
    title: "Beast Mode Gym",
    description:
      "Intense training space in Toronto with customized coaching, CrossFit, and hypertrophy programs.",
    image: {
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Toronto",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-79.3832, 43.6532],
    },
  },
  {
    title: "Sweat Camp Bali",
    description:
      "Tropical outdoor gym with HIIT, bootcamps, and detox meal plans. Train by the beach!",
    image: {
      filename: "listingimage",
      url:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
  },
  {
    title: "Ironclad Strength Gym",
    description:
      "State-of-the-art equipment and expert trainers to help you build muscle and strength.",
    image: {
      filename: "ironclad_strength",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 50,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
  },
  {
    title: "Flex & Flow Yoga Studio",
    description:
      "Relax your mind and strengthen your body with expert yoga classes in a calm environment.",
    image: {
      filename: "flex_flow_yoga",
      url: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=60",
    },
    price: 30,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },
  {
    title: "Peak Performance CrossFit",
    description:
      "High-intensity CrossFit training to push your limits and improve overall fitness.",
    image: {
      filename: "peak_performance",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 70,
    location: "Chicago",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-87.6298, 41.8781],
    },
  },
  {
    title: "Zenith Boxing Club",
    description:
      "Learn boxing techniques and improve your cardio with professional trainers.",
    image: {
      filename: "zenith_boxing",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 45,
    location: "Miami",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-80.1918, 25.7617],
    },
  },
  {
    title: "Urban Climb Fitness",
    description:
      "Indoor rock climbing gym with expert instruction and all skill levels welcome.",
    image: {
      filename: "urban_climb",
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
    price: 55,
    location: "Denver",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-104.9903, 39.7392],
    },
  },
  
];


module.exports = { data: sampleListings };
