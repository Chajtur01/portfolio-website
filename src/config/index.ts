import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Hanna Chajtur — DevOps Engineer (AWS & Azure)",
  author: "Hanna Chajtur",
  description:
    "Experienced DevOps Engineer with 7+ years building secure, scalable, and cost-efficient cloud infrastructures in AWS and Azure, with strong expertise in Terraform, ECS/EKS, CI/CD pipelines, and cloud security.",
  lang: "en",
  siteLogo: "/hanna-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/hannachajtur/" },
    { text: "GitHub", href: "https://github.com/hannachajtur" },
  ],
  socialImage: "/hanna-og.png",
  canonicalURL: "https://yourdomain.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Hanna Chajtur",
    specialty: "DevOps Engineer (AWS & Azure)",
    summary:
      "DevOps Engineer with over 7 years of experience designing secure, scalable, and cost-efficient cloud infrastructures. Skilled in AWS (7 years) and Azure (3 years), Terraform, ECS/EKS, Kubernetes, Docker, CI/CD pipelines, and cloud security best practices.",
    email: "hanna.chajtur@protonmail.com",
    techStack: [
      "AWS", "Azure", "Terraform", "Docker", "Kubernetes",
      "ECS/EKS", "GitHub Actions", "Azure DevOps", "CI/CD",
      "Linux", "Python", "Bash"
    ],
  },
  experience: [
    {
      company: "Avyre LLC",
      position: "DevOps Engineer Tech Lead",
      startDate: "May 2022",
      endDate: "Present",
      summary: [
        "Lead DevOps operations for enterprise-level projects in AWS and Azure, ensuring scalability, security, and high availability.",
        "Implemented CI/CD pipelines for front-end and back-end, managing weekly releases across multiple environments including production.",
        "Monitored cloud costs and optimized performance across multiple simultaneous projects."
      ],
    },
    {
      company: "Ignite Global LLC",
      position: "DevOps Engineer",
      startDate: "May 2022",
      endDate: "Jan 2024",
      summary: [
        "Designed and maintained AWS and Azure cloud infrastructure with Terraform, ECS/EKS, and containerized solutions.",
        "Automated deployments with GitHub Actions and OIDC integrations, minimizing errors and downtime.",
        "Monitored cloud performance and implemented cost optimization strategies."
      ],
    },
    {
      company: "Realidad Virtual Honduras",
      position: "Web Developer & Cybersecurity Intern",
      startDate: "Dec 2020",
      endDate: "Jul 2022",
      summary: [
        "Built Moodle-based e-learning platforms hosted on AWS servers.",
        "Developed an online game with real-time analytics for RAP organization.",
        "Implemented cybersecurity best practices for client applications."
      ],
    },
  ],
  projects: [
    {
      name: "Moodle AWS Deployment",
      summary: "Implemented AWS servers with Moodle platform for small business e-learning websites.",
      image: "/moodle.png",
    },
    {
      name: "Online Game Real-Time Analytics",
      summary:
        "Developed an online game for RAP organization, capturing real-time metrics for clients.",
      image: "/rap-game.png",
    },
    {
      name: "Zoleo / ElastTech Services",
      summary:
        "Managed AWS and Azure infrastructure, CI/CD pipelines, security, and performance for a large-scale web project.",
      image: "/zoleo.png",
    },
  ],
  about: {
    description: `
      I am Hanna Chajtur, an experienced **DevOps Engineer with 7+ years** in designing and managing secure, scalable, and cost-efficient cloud infrastructures.
      
      My expertise spans **AWS (7 years), Azure (3 years), Terraform, ECS/EKS, Docker, Kubernetes, CI/CD pipelines, cloud security, and Linux-based environments**. 
      I thrive in fast-paced environments, managing multiple projects simultaneously while ensuring high-quality delivery and client satisfaction.

      Bilingual in English and Spanish, I combine strong communication skills with deep technical expertise.
    `,
    image: "/hanna-big.jpg",
  },
};