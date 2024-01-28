import {
  Electricity,
  Internet,
  Mobile,
  Shopping,
  CableIcon,
} from "@/assets/icons";

export const serviceList = [
  {
    id: 1,
    name: "Electricity",
    icon: <Electricity />,
    color: "#FFF9EC",
    link: "/electricity",
  },
  {
    id: 2,
    name: "Internet",
    icon: <Internet />,
    color: "#F6F4FF",
    link: "/internet",
  },
  {
    id: 3,
    name: "Mobile",
    icon: <Mobile />,
    color: "#FFF2EF",
    link: "/mobile",
  },
  {
    id: 4,
    name: "Shopping",
    icon: <Shopping />,
    color: "#EBFDFB",
    link: "/shopping",
  },
  {
    id: 5,
    name: "Cable",
    icon: <CableIcon />,
    color: "#FFF1F2",
    link: "/cable",
  },
];
