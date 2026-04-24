import writingImg from "../assets/products/writing_23274001.png";
import designImg from "../assets/products/design-tool.png";
import portfolioImg from "../assets/products/portfolio.png";
import operationImg from "../assets/products/operation.png";
import socialImg from "../assets/products/social-media.png";

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description:
      "Generate high-quality content, blogs, and marketing copy in seconds.",
    price: 29,
    period: "Mo",
    tag: "Best Seller",
    tagType: "bg-yellow-100 text-yellow-600",
    icon: writingImg,
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description:
      "2000+ premium templates for social media and presentations.",
    price: 49,
    period: "One-Time",
    tag: "Popular",
    tagType: "bg-purple-100 text-purple-600",
    icon: designImg,
    features: [
      "2000+ templates",
      "Monthly updates",
      "Commercial license",
    ],
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description:
      "Access millions of royalty-free assets for projects.",
    price: 19,
    period: "Mo",
    tag: "New",
    tagType: "bg-green-100 text-green-600",
    icon: portfolioImg,
    features: [
      "10M+ assets",
      "Commercial use",
      "No attribution",
    ],
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description:
      "Automate repetitive tasks and streamline workflow.",
    price: 79,
    period: "Mo",
    tag: "Popular",
    tagType: "bg-purple-100 text-purple-600",
    icon: operationImg,
    features: [
      "50+ automations",
      "API access",
      "Custom workflows",
    ],
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description:
      "Create professional resumes and cover letters.",
    price: 15,
    period: "One-Time",
    tag: "New",
    tagType: "bg-green-100 text-green-600",
    icon: writingImg,
    features: [
      "100+ templates",
      "ATS optimization",
      "Export to PDF",
    ],
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description:
      "Complete toolkit for creating engaging social content.",
    price: 39,
    period: "Mo",
    tag: "Best Seller",
    tagType: "bg-yellow-100 text-yellow-600",
    icon: socialImg,
    features: [
      "5000+ assets",
      "Scheduler included",
      "Analytics dashboard",
    ],
  },
];

export default products;