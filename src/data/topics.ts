import { Topic } from "./types";
import { osTopics } from "./topics-os";
import { programmingTopics } from "./topics-programming";
import { webTopics } from "./topics-web";
import { networkingTopics } from "./topics-networking";
import { databaseTopics } from "./topics-database";
import { seTopics } from "./topics-se";
import { aiTopics } from "./topics-ai";
import { securityTopics } from "./topics-security";

export const allTopics: Topic[] = [
  ...osTopics,
  ...programmingTopics,
  ...webTopics,
  ...networkingTopics,
  ...databaseTopics,
  ...seTopics,
  ...aiTopics,
  ...securityTopics,
].sort((a, b) => a.id - b.id);

export const topicCount = allTopics.length;

export const topicMap = new Map<number, Topic>(
  allTopics.map((topic) => [topic.id, topic]),
);

export function getTopicById(id: number): Topic | undefined {
  return topicMap.get(id);
}

export function getRandomTopicIds(count: number): number[] {
  const ids = allTopics.map((topic) => topic.id);
  for (let i = ids.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids.slice(0, Math.max(0, Math.min(count, ids.length)));
}
