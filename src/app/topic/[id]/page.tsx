import { TopicWorkspace } from "@/components/topic-workspace";
import { getTopicById } from "@/data/topics";
import { notFound } from "next/navigation";

interface TopicPageProps {
  params: Promise<{ id: string }>;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { id } = await params;
  const topicId = Number.parseInt(id, 10);

  if (Number.isNaN(topicId) || !getTopicById(topicId)) {
    notFound();
  }

  return <TopicWorkspace topicId={topicId} />;
}
