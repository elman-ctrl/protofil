import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.skill.deleteMany();
  await prisma.skillCategory.deleteMany();
  await prisma.project.deleteMany();
  await prisma.resumeExperience.deleteMany();
  await prisma.resumeSkillGroup.deleteMany();
  await prisma.contactMessage.deleteMany();
  await prisma.resumeMeta.deleteMany();

  await prisma.resumeMeta.create({
    data: {
      id: 'default',
      summaryFa:
        'مهندس شبکه که از طریق ساخت زیرساخت واقعی یاد می‌گیرد. تمرکز روی MikroTik، Linux server administration و DevOps tooling.',
      summaryEn:
        'Network engineer who learns by building real infrastructure. Focus on MikroTik, Linux server administration, and DevOps tooling.',
      headlineFa: 'المان فتوحی',
      headlineEn: 'Elman Fotouhi',
      locationFa: 'مهندسی شبکه · DevOps · تبریز',
      locationEn: 'Network Engineering · DevOps · Tabriz',
    },
  });

  await prisma.resumeExperience.create({
    data: {
      titleFa: 'فریلنسر مستقل — زیرساخت و DevOps',
      titleEn: 'Independent Freelancer — Infrastructure & DevOps',
      descriptionFa:
        'ساخت و دیپلوی زیرساخت خوداستقرار (self-hosted) روی VPS برای پروژه‌های شخصی و مشتریان.',
      descriptionEn:
        'Building and deploying self-hosted infrastructure on VPS for personal and client projects.',
      order: 1,
    },
  });

  const skillGroups = [
    {
      categoryNameFa: 'شبکه و MikroTik',
      categoryNameEn: 'Networking & MikroTik',
      skills: [
        'MikroTik RouterOS / CHR',
        'L2TP Failover Routing',
        'WireGuard',
        'GRE (Nested)',
        'Policy-Based Routing',
        'OpenVPN + RADIUS',
      ],
      order: 1,
    },
    {
      categoryNameFa: 'Docker',
      categoryNameEn: 'Docker',
      skills: [
        'Docker & Docker Compose',
        'Multi-stage Builds',
        'Coolify Deployment',
        'Multi-service Containerization',
      ],
      order: 2,
    },
    {
      categoryNameFa: 'سرور و لینوکس',
      categoryNameEn: 'Servers & Linux',
      skills: [
        'Ubuntu 24 Admin',
        'Postfix / Dovecot',
        'OpenDKIM / SpamAssassin',
        'Fail2Ban / MariaDB',
      ],
      order: 3,
    },
    {
      categoryNameFa: 'CI/CD و اتوماسیون',
      categoryNameEn: 'CI/CD & Automation',
      skills: [
        'GitHub Actions',
        'Automated SSH Deploy',
        'Git',
        'Prometheus / Grafana',
      ],
      order: 4,
    },
    {
      categoryNameFa: 'ردیابی خطا و نوتیفیکیشن',
      categoryNameEn: 'Error Tracking & Alerting',
      skills: [
        'n8n Workflow Automation',
        'Bugsink',
        'ntfy',
        'REST API Integration',
      ],
      order: 5,
    },
    {
      categoryNameFa: 'ابزارهای تکمیلی',
      categoryNameEn: 'Additional Tools',
      skills: [
        'Cloudflare DNS',
        'Python Automation',
        'Technical Docs (EN/FA)',
      ],
      order: 6,
    },
  ];

  for (const group of skillGroups) {
    await prisma.resumeSkillGroup.create({ data: group });
  }

  const categories = [
    {
      nameFa: 'شبکه و MikroTik',
      nameEn: 'Networking & MikroTik',
      iconColor: '#BC7139',
      order: 1,
      skills: [
        { name: 'MikroTik RouterOS / CHR', levelPercent: 85, order: 1 },
        { name: 'L2TP Routing & Failover', levelPercent: 85, order: 2 },
        { name: 'WireGuard + Policy Routing', levelPercent: 90, order: 3 },
        { name: 'GRE Tunneling (Nested)', levelPercent: 88, order: 4 },
        { name: 'OpenVPN + RADIUS', levelPercent: 80, order: 5 },
        { name: 'IPsec Site-to-Site', levelPercent: 85, order: 6 },
        { name: 'EoIP Concepts', levelPercent: 45, order: 7 },
      ],
    },
    {
      nameFa: 'Docker',
      nameEn: 'Docker',
      iconColor: '#2496ED',
      order: 2,
      skills: [
        { name: 'Docker & Docker Compose', levelPercent: 80, order: 1 },
        { name: 'Multi-stage Builds', levelPercent: 75, order: 2 },
        { name: 'Stack Deployment via Coolify', levelPercent: 70, order: 3 },
        { name: 'Multi-service Containerization', levelPercent: 70, order: 4 },
      ],
    },
    {
      nameFa: 'سرور و لینوکس',
      nameEn: 'Servers & Linux',
      iconColor: '#4F8C74',
      order: 3,
      skills: [
        { name: 'Ubuntu 24 Admin', levelPercent: 80, order: 1 },
        { name: 'Postfix / Dovecot', levelPercent: 85, order: 2 },
        { name: 'OpenDKIM / SpamAssassin', levelPercent: 85, order: 3 },
        { name: 'Fail2Ban / MariaDB', levelPercent: 85, order: 4 },
      ],
    },
    {
      nameFa: 'CI/CD و اتوماسیون',
      nameEn: 'CI/CD & Automation',
      iconColor: '#C9A227',
      order: 4,
      skills: [
        { name: 'GitHub Actions CI/CD', levelPercent: 80, order: 1 },
        { name: 'Automated SSH Deploy', levelPercent: 80, order: 2 },
        { name: 'Git', levelPercent: 80, order: 3 },
        { name: 'Prometheus / Grafana', levelPercent: 70, order: 4 },
      ],
    },
    {
      nameFa: 'ردیابی خطا و نوتیفیکیشن',
      nameEn: 'Error Tracking & Alerting',
      iconColor: '#BC7139',
      order: 5,
      skills: [
        { name: 'n8n Workflow Automation', levelPercent: 70, order: 1 },
        { name: 'Bugsink Error Tracking', levelPercent: 65, order: 2 },
        { name: 'ntfy Push Notifications', levelPercent: 65, order: 3 },
        { name: 'REST API Integration', levelPercent: 70, order: 4 },
      ],
    },
    {
      nameFa: 'ابزارهای تکمیلی',
      nameEn: 'Additional Tools',
      iconColor: '#7E948C',
      order: 6,
      skills: [
        { name: 'Cloudflare DNS', levelPercent: 80, order: 1 },
        { name: 'Python Automation', levelPercent: 80, order: 2 },
        { name: 'Technical Docs (EN/FA)', levelPercent: 80, order: 3 },
      ],
    },
  ];

  for (const cat of categories) {
    const { skills, ...rest } = cat;
    await prisma.skillCategory.create({
      data: {
        ...rest,
        skills: { create: skills },
      },
    });
  }

  const projects = [
    {
      titleFa: 'زیرساخت میل‌سرور dabriz.com',
      titleEn: 'Mail Server Infrastructure — dabriz.com',
      descriptionFa: 'راه‌اندازی کامل سرویس ایمیل روی سرور اوبونتو در Hetzner.',
      descriptionEn:
        'Full production email service deployed on an Ubuntu server at Hetzner.',
      features: {
        fa: [
          'Postfix، Dovecot و Roundcube برای ارسال/دریافت و وب‌میل',
          'OpenDKIM، SpamAssassin و Fail2Ban برای امنیت',
          'رکوردهای SPF, DKIM, DMARC در Cloudflare',
        ],
        en: [
          'Postfix, Dovecot and Roundcube for send/receive and webmail',
          'OpenDKIM, SpamAssassin and Fail2Ban for security',
          'SPF, DKIM, DMARC records in Cloudflare',
        ],
      },
      challenges: {
        fa: [
          'اشغال پورت ۸۰/۴۴۳ توسط Docker → دریافت SSL از طریق DNS Challenge',
          'سازگاری Dovecot با نسخه ۲.۴ و Roundcube با PHP 8.5',
        ],
        en: [
          'Ports 80/443 occupied by Docker → obtained SSL via DNS challenge',
          'Dovecot v2.4 syntax and Roundcube compatibility with PHP 8.5',
        ],
      },
      techStack: [
        'Postfix',
        'Dovecot',
        'Roundcube',
        'OpenDKIM',
        'MariaDB',
        'Cloudflare DNS',
      ],
      order: 1,
    },
    {
      titleFa: 'آزمایشگاه تانل IPsec Site-to-Site',
      titleEn: 'IPsec Site-to-Site Tunnel Lab',
      descriptionFa: 'تانل امن بین دو دستگاه MikroTik CHR مستقل.',
      descriptionEn:
        'Secure tunnel between two independent MikroTik CHR instances.',
      features: {
        fa: [
          'پیکربندی مرحله‌به‌مرحله IKE Phase 1 و Phase 2',
          'مستندسازی هم‌زمان با WinBox و RouterOS CLI',
        ],
        en: [
          'Step-by-step IKE Phase 1 and Phase 2 configuration',
          'Parallel documentation via WinBox and RouterOS CLI',
        ],
      },
      challenges: {
        fa: [
          'ایزوله‌سازی محیط آزمایشی از شبکه اصلی برای جلوگیری از قطعی',
        ],
        en: [
          'Isolating the lab environment from the main network to prevent outages',
        ],
      },
      techStack: ['MikroTik CHR', 'IPsec', 'WinBox', 'RouterOS CLI'],
      order: 2,
    },
    {
      titleFa: 'راهنمای آموزشی فارسی MikroTik CHR',
      titleEn: 'Persian MikroTik CHR Training Guide',
      descriptionFa: 'سند PDF جامع فارسی شامل ۳۱ مبحث شبکه و VPN.',
      descriptionEn:
        'Comprehensive 31-topic Persian PDF guide covering networking and VPN fundamentals.',
      features: {
        fa: [
          'پوشش کامل از سطح مبتدی تا پیشرفته',
          'طراحی راست‌به‌چپ با تایپوگرافی فارسی مناسب',
        ],
        en: [
          'Full coverage from beginner to advanced level',
          'Right-to-left layout with proper Persian typography',
        ],
      },
      challenges: {
        fa: [
          'رندر ناقص متن فارسی در wkhtmltopdf → مهاجرت به WeasyPrint',
        ],
        en: [
          'Broken Persian text rendering in wkhtmltopdf → migrated to WeasyPrint',
        ],
      },
      techStack: ['WeasyPrint', 'Python', 'RTL Rendering'],
      order: 3,
    },
    {
      titleFa: 'معماری روتینگ و VPN چندلایه MikroTik',
      titleEn: 'Multi-Router MikroTik Routing & VPN Architecture',
      descriptionFa:
        'روتینگ فیل‌اُور و دسترسی VPN بین یک روتر فیزیکی hAP lite (پشت NAT) و یک سرور MikroTik مجازی ریموت.',
      descriptionEn:
        'Failover routing and VPN access between a physical hAP lite router (behind NAT) and a remote virtual MikroTik server.',
      features: {
        fa: [
          'اینترنت اصلی از LAN4 با DHCP client، تانل L2TP به‌عنوان بک‌آپ با مدیریت distance',
          'wg-server1/wg-server2 با policy routing برای هدایت ترافیک موبایل',
          'Split routing ایران/خارج بر اساس لیست ۱۹۲۷ رنج آی‌پی ایرانی',
          'OpenVPN با User Manager و RADIUS accounting، محدود به آی‌پی‌های ایرانی',
        ],
        en: [
          'Primary internet on LAN4 via DHCP client, L2TP tunnel as failover with distance-based routing',
          'wg-server1/wg-server2 with policy routing to direct mobile traffic',
          'Iran/abroad split routing using a ~1,927-range Iranian IP address list',
          'OpenVPN with User Manager and RADIUS accounting, restricted to Iranian IPs',
        ],
      },
      challenges: {
        fa: [
          'عدم وجود IP عمومی روی hAP lite → تانل GRE تودرتوی L2TP',
          'محدودسازی دسترسی مدیریتی روی پورت‌های 8291/22/8728 فقط برای IPهای مشخص',
        ],
        en: [
          'No public IP on hAP lite → nested GRE tunnel inside L2TP',
          'Restricted admin access on ports 8291/22/8728 to specific IPs only',
        ],
      },
      techStack: [
        'MikroTik RouterOS',
        'L2TP',
        'WireGuard',
        'GRE',
        'Policy Routing',
        'OpenVPN',
        'RADIUS',
      ],
      order: 4,
    },
    {
      titleFa: 'استک ردیابی خطا — Bugsink + n8n + ntfy',
      titleEn: 'Error Tracking Stack — Bugsink + n8n + ntfy',
      descriptionFa:
        'استک self-hosted روی Coolify که وقتی کاربر به خطا برمی‌خوره، تیم dev دقیقاً می‌فهمه کاربر داشت چیکار می‌کرد.',
      descriptionEn:
        'A self-hosted stack on Coolify that tells the team exactly what the user was doing when an error hit.',
      features: {
        fa: [
          'جریان n8n: Webhook → Switch → HTTP Request به ntfy',
          'نوتیفیکیشن شامل severity، نوع خطا، اقدام کاربر و زمینه',
          'تست end-to-end موفق روی موبایل',
        ],
        en: [
          'n8n flow: Webhook → Switch → HTTP Request to ntfy',
          'Notification includes severity, exception type, user action, and context',
          'Successful end-to-end test received on mobile',
        ],
      },
      challenges: {
        fa: [
          'فرمت Slack وبهوک Bugsink context را نمی‌فرستاد → استخراج مستقیم از API',
        ],
        en: [
          'Bugsink Slack webhook dropped custom context → pulled data directly from the Bugsink API',
        ],
      },
      techStack: [
        'Bugsink',
        'n8n',
        'ntfy',
        'Coolify',
        'Postgres',
        'REST API',
      ],
      order: 5,
    },
    {
      titleFa: 'اپلیکیشن Dockerized با پایپلاین CI/CD و مانیتورینگ',
      titleEn: 'Dockerized App with CI/CD Pipeline & Monitoring',
      descriptionFa:
        'یک اپلیکیشن Node.js/Express با Docker چندمرحله‌ای، پایپلاین CI/CD و استک کامل مانیتورینگ.',
      descriptionEn:
        'A Node.js/Express app with multi-stage Docker, a CI/CD pipeline, and a full monitoring stack.',
      features: {
        fa: [
          'بیلد چندمرحله‌ای Docker برای Node.js/Express',
          'GitHub Actions CI/CD با دیپلوی خودکار SSH روی VPS Hetzner',
          'استک مانیتورینگ: Prometheus، Grafana، Node Exporter، cAdvisor',
        ],
        en: [
          'Multi-stage Docker build for Node.js/Express',
          'GitHub Actions CI/CD with automated SSH deploy to a Hetzner VPS',
          'Monitoring stack: Prometheus, Grafana, Node Exporter, cAdvisor',
        ],
      },
      challenges: {
        fa: ['سخت‌سازی فایروال UFW در کنار دیپلوی خودکار'],
        en: ['UFW firewall hardening alongside automated deployment'],
      },
      techStack: [
        'Docker',
        'Docker Compose',
        'GitHub Actions',
        'Prometheus',
        'Grafana',
        'UFW',
      ],
      order: 6,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  console.log('Seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
