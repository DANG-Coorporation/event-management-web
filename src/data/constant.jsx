import { MdSportsBasketball, MdFastfood } from "react-icons/md";
import { FaMusic, FaPaintBrush } from "react-icons/fa";
import img1 from "../assets/banner.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";
import img4 from "../assets/banner4.jpg";
import img5 from "../assets/banner5.jpg";
import img6 from "../assets/banner6.png";

export const constant = Object.freeze({
  navbarCategories: [
    {
      category: "Sports",
      icon: <MdSportsBasketball />,
      color: "#F0635A",
    },
    {
      category: "Musics",
      icon: <FaMusic />,
      color: "#F59762",
    },
    {
      category: "Foods",
      icon: <MdFastfood />,
      color: "#29D697",
    },
    {
      category: "Arts",
      icon: <FaPaintBrush />,
      color: "#46CDFB",
    },
  ],

  accordionItems: [
    {
      title: "Topik",
      FilterItems: ["Olahraga", "Musik", "Seni", "Makanan"],
    },
    {
      title: "Lokasi",
      FilterItems: [
        "DKI Jakarta",
        "Surabaya",
        "Yogyakarta",
        "Semarang",
        "Padang",
      ],
    },
    {
      title: "Waktu",
      FilterItems: [
        "Hari Ini",
        "Besok",
        "Akhir Pekan",
        "Minggu Ini",
        "Minggu Depan",
        "Bulan Ini",
        "Bulan Depan",
      ],
    },
    {
      title: "Harga",
      FilterItems: [
        "krang dari Rp. 50.000",
        "Antara Rp.50.000 - Rp.100.000",
        "Antara Rp.100.000 - Rp.500.000",
        "Antara Rp.500.000 - Rp.1.000.000",
        "Lebih dari Rp.1.000.000",
      ],
    },
  ],

  eventDummy: [
    {
      eventImages: img1,
      eventName: "Kim Bum Fanmeet",
      eventDate: "2024-5-6",
      evenPrice: 1000000,
      eventLocation: "Jakarta",
    },
    {
      eventImages: img2,
      eventName: "Bussines an developmnet workshop by astra autopart",
      eventDate: "2024-2-10",
      evenPrice: 50000,
      eventLocation: "Tuban",
    },
    {
      eventImages: img3,
      eventName: "Music Festival",
      eventDate: "2024-1-2",
      evenPrice: 1000000,
      eventLocation: "Semarang",
    },
    {
      eventImages: img4,
      eventName: "Lemonade Express",
      eventDate: "2023-5-6",
      evenPrice: 20000,
      eventLocation: "Lampung",
    },
    {
      eventImages: img5,
      eventName: "Man with a mission concert",
      eventDate: "2023-5-6",
      evenPrice: 1000000,
      eventLocation: "Maluku",
    },
    {
      eventImages: img6,
      eventName: "Workshop carrer",
      eventDate: "2023-5-6",
      evenPrice: 1000000,
      eventLocation: "Ternate",
    },
  ],

  fetchEventLink: "http://localhost:3000/events",
});
