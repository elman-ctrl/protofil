-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "demo_url" TEXT,
ADD COLUMN     "repo_url" TEXT;

-- CreateTable
CREATE TABLE "site_content" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "hero" JSONB NOT NULL,
    "about" JSONB NOT NULL,
    "learning_path" JSONB NOT NULL,
    "stats" JSONB NOT NULL,

    CONSTRAINT "site_content_pkey" PRIMARY KEY ("id")
);
