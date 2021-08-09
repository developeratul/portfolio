import {
  PieChartOutlined,
  RiseOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

const workProcess = [
  {
    title: "Plan And Discuss",
    desc: "At First discussing about the requirements and planning it out",
    icon: <PieChartOutlined />,
    animation: "fade-right",
  },
  {
    title: "Building Logic",
    desc: "Building the logic of the whole application and creating an optimized algorithm",
    icon: <RiseOutlined />,
    animation: "fade-up",
  },
  {
    title: "Coding",
    desc: "Coding up the whole algorithm then test and deploy",
    icon: <CoffeeOutlined />,
    animation: "fade-left",
  },
];

export default workProcess;
