import { PracticeSession } from "@/components/practice-session";

interface PracticePageProps {
  searchParams: Promise<{ topics?: string }>;
}

export default async function PracticePage({ searchParams }: PracticePageProps) {
  const params = await searchParams;
  const ids = (params.topics ?? "")
    .split(",")
    .map((item) => Number.parseInt(item, 10))
    .filter((item) => !Number.isNaN(item));

  return <PracticeSession initialTopicIds={ids} />;
}
