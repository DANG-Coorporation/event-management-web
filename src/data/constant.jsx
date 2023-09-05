import { MdSportsBasketball, MdFastfood } from "react-icons/md";
import { FaMusic, FaPaintBrush } from "react-icons/fa";

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
});
