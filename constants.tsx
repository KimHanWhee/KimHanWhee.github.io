import {
  Server,
  Database,
  Globe,
  Code,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
} from "lucide-react";
import {
  Project,
  SkillCategory,
  EducationItem,
  NavItem,
  BlogPost,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Education", path: "/education" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const KEY_METRICS = [
  {
    label: "Monthly Traffic",
    value: "3억+",
    suffix: "건",
    description: "안정적인 대용량 트래픽 처리",
  },
  {
    label: "Enterprise Clients",
    value: "50+",
    suffix: "개사",
    description: "주요 대기업 및 금융사",
  },
  {
    label: "Uptime",
    value: "99.9",
    suffix: "%",
    description: "무중단 배포 및 운영",
  },
  {
    label: "Experience",
    value: "5+",
    suffix: "Years",
    description: "백엔드 엔지니어링 경력",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "standard-networks",
    title: "스탠다드네트웍스",
    role: "전송 개발팀",
    period: "2023.07 - 2025.12",
    description: "대용량 메시지 발송 플랫폼 기획/개발 및 운영",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Redis",
      "RabbitMQ",
      "R2DBC",
      "Netflix Eureka",
      "WebFlux",
    ],
    keyAchievements: [
      "월 평균 7천만 건에서 최대 3억 건에 이르는 메시지 데이터 처리",
      "MSA(Microservices Architecture) 설계를 통한 시스템 결합도 최소화 및 확장성있는 인프라 구축",
      "약 50개 고객사에 직접 배포되어 안정적으로 운영 중인 Agent 프로그램 개발 및 운영",
      "메시지 검칙 프로세스 개발. KISA(한국인터넷진흥원) 및 내부 정책 준수로 스팸 신고율 50% 이상 감소 및 발송 신뢰도 향상",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: CoffeeIcon },
      { name: "HTML/CSS", icon: Layers },
      { name: "JS(ES6)", icon: Server },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Spring boot", icon: Database },
      { name: "WebFlux", icon: Cpu },
      { name: "Netty", icon: Globe },
      { name: "JPA", icon: Globe },
      { name: "mybatis", icon: Globe },
      { name: "R2DBC", icon: Globe },
      { name: "React & Redux", icon: Globe },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Infrastructure & Databases",
    items: [
      { name: "RabbitMQ", icon: ShieldCheck },
      { name: "Redis", icon: Terminal },
      { name: "mySQL", icon: Code },
      { name: "Oracle", icon: Code },
      { name: "maria", icon: Code },
      { name: "Linux", icon: Code },
    ],
  },
  {
    category: "Tools & Collaboration",
    items: [
      { name: "VSCode", icon: ShieldCheck },
      { name: "IntelliJ", icon: Terminal },
      { name: "eclipse", icon: Code },
      { name: "Git/GithubDesktop", icon: Code },
      { name: "Notion", icon: Code },
      { name: "Slack", icon: Code },
      { name: "Jira", icon: Code },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "서울사이버대학교",
    link: "https://www.iscu.ac.kr",
    degree: "인공지능학과",
    period: "2026.03 ~ 재학 중",
    details: [],
    category: "Education",
  },
  {
    institution: "Docker 클라우드 컨데이너 기반 아키텍처 이해와 실습",
    link: "https://edu.ktdsuniversity.com",
    degree:
      "kt University에서 진행한 Docker 클라우드 컨테이너 기반 아키텍처 교육 과정",
    period: "2024.10 ~ 2024.10",
    details: [
      "Docker와 Docker 컴포넌트 이해",
      "Docker 이미지와 컨테이너 설정",
      "Dockerfile 로 서버 구축하기",
      "Docker 이미지 공유",
      "Container 통합 관리",
    ],
    category: "Education",
  },
  {
    institution: "빅데이터 기반 지능형SW 및 MLOps 개발자 양성과정",
    link: "https://playdata.io/",
    degree:
      "엔코아 아카데미(Encore Academy)에서 진행한 빅데이터 기반 개발자 양성 과정",
    period: "2022.11 ~ 2023.5",
    details: [
      "마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력",
      "마이크로 서비스 개발을 위한 DB설계 능력",
    ],
    category: "Education",
  },
  {
    institution: "La Piscine",
    link: "https://42seoul.kr/seoul42/main/view",
    degree:
      "이노베이션 아카데미(Innovation Academy)에서 진행한 자기주도학습 기반의 알고리즘 문제 풀이 과정",
    period: "2022.8 ~ 2022.9",
    details: [
      "알고리즘 문제 해결 능력",
      "서로간의 코드 설명 및 코드 리뷰로 의사소통 능력 향상",
    ],
    category: "Education",
  },
  {
    institution: "클라우드 기반의 MSA 스페셜리스트 주니어 개발자 양성 과정",
    link: "https://sesac.seoul.kr/course/active/detail.do",
    degree:
      "디지털 전환(Digital Transformation)시대의 핵심 클라우드 전문 인재 양성 교육 과정",
    period: "2021.11 ~ 2022.5",
    details: [
      "클라우드 인프라 구축 능력",
      "마이크로 서비스 개발을 위한 프론트엔드, 백엔드 개발 능력",
      "클라우드 네이티브에 대한 이해와 마이크로 서비스 개발 및 관리할 수 있는 능력",
    ],
    category: "Education",
  },
  {
    institution: "정보처리기능사",
    degree: "한국산업인력공단",
    period: "2022.07.01",
    details: ["국가기술자격증 취득"],
    category: "Certification",
  },
];

// Helper icon component
function CoffeeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}
