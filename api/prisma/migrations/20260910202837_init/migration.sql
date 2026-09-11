-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "title_fa" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "description_fa" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "challenges" JSONB NOT NULL,
    "tech_stack" TEXT[],
    "order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill_categories" (
    "id" TEXT NOT NULL,
    "name_fa" TEXT NOT NULL,
    "name_en" TEXT NOT NULL,
    "icon_color" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "skill_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level_percent" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resume_experiences" (
    "id" TEXT NOT NULL,
    "title_fa" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "description_fa" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "resume_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resume_skill_groups" (
    "id" TEXT NOT NULL,
    "category_name_fa" TEXT NOT NULL,
    "category_name_en" TEXT NOT NULL,
    "skills" JSONB NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "resume_skill_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_messages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resume_meta" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "summary_fa" TEXT NOT NULL,
    "summary_en" TEXT NOT NULL,
    "headline_fa" TEXT NOT NULL,
    "headline_en" TEXT NOT NULL,
    "location_fa" TEXT NOT NULL,
    "location_en" TEXT NOT NULL,

    CONSTRAINT "resume_meta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "skill_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
