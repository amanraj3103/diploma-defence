"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { allTopics, getRandomTopicIds } from "@/data/topics";
import { DOMAINS } from "@/data/types";
import { getQuestionTitle } from "@/data/question-bank";

type StudyMode = "beginner" | "exam" | "quick";
type TabKey = "overview" | "defence" | "diagrams" | "viva";

interface TopicWorkspaceProps {
  topicId: number;
}

const tabs: { key: TabKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "defence", label: "5-7 Minute Answer" },
  { key: "diagrams", label: "Diagrams" },
  { key: "viva", label: "Viva Questions" },
];

export function TopicWorkspace({ topicId }: TopicWorkspaceProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [studyMode, setStudyMode] = useState<StudyMode>("exam");
  const [search, setSearch] = useState("");
  const [domainFilter, setDomainFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(true);

  const topic = allTopics.find((item) => item.id === topicId) ?? allTopics[0];

  const filteredTopics = useMemo(() => {
    const query = search.trim().toLowerCase();
    return allTopics.filter((item) => {
      const displayTitle = getQuestionTitle(item.id) ?? item.title;
      const matchesDomain =
        domainFilter === "All" || item.domain === domainFilter;
      const matchesSearch =
        !query ||
        displayTitle.toLowerCase().includes(query) ||
        item.domain.toLowerCase().includes(query);
      return matchesDomain && matchesSearch;
    });
  }, [search, domainFilter]);

  const topicTitle = getQuestionTitle(topic.id) ?? topic.title;

  const handleRandomPractice = () => {
    const ids = getRandomTopicIds(3).join(",");
    router.push(`/practice?topics=${ids}`);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto flex max-w-[1600px] gap-4 p-4">
          <aside className="h-[calc(100vh-2rem)] w-80 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-slate-200 p-3 dark:border-slate-800">
              <h1 className="text-lg font-semibold">Defence Prep Assistant</h1>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                90 Topics • Viva-focused
              </p>
            </div>

            <div className="space-y-2 border-b border-slate-200 p-3 dark:border-slate-800">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search topics..."
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-500 dark:border-slate-700 dark:bg-slate-950"
              />
              <select
                value={domainFilter}
                onChange={(event) => setDomainFilter(event.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-500 dark:border-slate-700 dark:bg-slate-950"
              >
                <option value="All">All Domains</option>
                {DOMAINS.map((domain) => (
                  <option key={domain.name} value={domain.name}>
                    {domain.icon} {domain.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="h-[calc(100%-190px)] overflow-y-auto p-2">
              {filteredTopics.map((item) => (
                <Link
                  key={item.id}
                  href={`/topic/${item.id}`}
                  className={`mb-1 block rounded-lg p-2 text-sm transition ${
                    item.id === topic.id
                      ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="font-medium">
                    {item.id}. {getQuestionTitle(item.id) ?? item.title}
                  </div>
                  <div
                    className={`text-xs ${
                      item.id === topic.id
                        ? "text-slate-200 dark:text-slate-700"
                        : "text-slate-500"
                    }`}
                  >
                    {item.domain}
                  </div>
                </Link>
              ))}
            </div>
          </aside>

          <main className="min-h-[calc(100vh-2rem)] flex-1 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <header className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 dark:border-slate-800">
              <div>
                <p className="text-sm text-slate-500">{topic.domain}</p>
                <h2 className="text-2xl font-bold">
                  {topic.id}. {topicTitle}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setDarkMode((value) => !value)}
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-700"
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
                <button
                  type="button"
                  onClick={handleRandomPractice}
                  className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900"
                >
                  Pick 3 Random Topics
                </button>
              </div>
            </header>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Mode:</span>
              <ModeButton
                active={studyMode === "beginner"}
                label="Beginner"
                onClick={() => setStudyMode("beginner")}
              />
              <ModeButton
                active={studyMode === "exam"}
                label="Exam-Oriented"
                onClick={() => setStudyMode("exam")}
              />
              <ModeButton
                active={studyMode === "quick"}
                label="Quick Revision"
                onClick={() => setStudyMode("quick")}
              />
            </div>

            <div className="mb-4 flex flex-wrap gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-md px-3 py-2 text-sm ${
                    activeTab === tab.key
                      ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                      : "border border-slate-300 dark:border-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <section className="space-y-4">
                <Panel title="Definition">
                  <p>{topic.definition}</p>
                </Panel>

                {studyMode === "quick" ? (
                  <>
                    <Panel title="Key Terms">
                      <ul className="list-inside list-disc space-y-1">
                        {topic.keyTerms.map((term) => (
                          <li key={term}>{term}</li>
                        ))}
                      </ul>
                    </Panel>
                    <Panel title="Quick Speaking Flow">
                      <ul className="list-inside list-disc space-y-1">
                        <li>Start with one-line definition.</li>
                        <li>Explain 3 core concepts in sequence.</li>
                        <li>Give one practical example.</li>
                        <li>Close with advantage + limitation.</li>
                      </ul>
                    </Panel>
                  </>
                ) : (
                  <>
                    <Panel title="Key Concepts">
                      <ul className="list-inside list-disc space-y-1">
                        {(studyMode === "beginner"
                          ? topic.keyConcepts.slice(0, 4)
                          : topic.keyConcepts
                        ).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Panel>

                    <Panel title="Simple Examples">
                      <ul className="list-inside list-disc space-y-1">
                        {topic.examples.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Panel>

                    <Panel title="Real-world Applications">
                      <ul className="list-inside list-disc space-y-1">
                        {topic.realWorldApplications.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </Panel>

                    <div className="grid gap-4 md:grid-cols-2">
                      <Panel title="Advantages">
                        <ul className="list-inside list-disc space-y-1">
                          {topic.advantages.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </Panel>
                      <Panel title="Limitations">
                        <ul className="list-inside list-disc space-y-1">
                          {topic.limitations.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </Panel>
                    </div>
                  </>
                )}
              </section>
            )}

            {activeTab === "defence" && (
              <section className="space-y-4">
                <Panel title="Intro (30-45 sec)">
                  <p>{topic.defenceAnswer.intro}</p>
                </Panel>
                <Panel title="Core Explanation (3-4 min)">
                  <ul className="list-inside list-disc space-y-2">
                    {topic.defenceAnswer.coreExplanation.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Panel>
                <Panel title="Example / Application (1-2 min)">
                  <p>{topic.defenceAnswer.exampleApplication}</p>
                </Panel>
                <Panel title="Conclusion (30 sec)">
                  <p>{topic.defenceAnswer.conclusion}</p>
                </Panel>
                <Panel title="Say It Like This In Viva">
                  <ul className="list-inside list-disc space-y-1">
                    {topic.speakingTips.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Panel>
              </section>
            )}

            {activeTab === "diagrams" && (
              <section className="space-y-4">
                <Panel title="Concept Flow">
                  <ol className="list-inside list-decimal space-y-2">
                    {topic.keyConcepts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </Panel>
                <Panel title="Diagram Explanation Tip">
                  <p>
                    In viva, point to each block in order: definition, working,
                    example, and practical use. Keep transitions short and
                    clear.
                  </p>
                </Panel>
              </section>
            )}

            {activeTab === "viva" && (
              <section className="space-y-4">
                <Panel title="Common Viva Questions">
                  <div className="space-y-3">
                    {topic.vivaQuestions.map((item) => (
                      <div
                        key={item.question}
                        className="rounded-md border border-slate-200 p-3 dark:border-slate-700"
                      >
                        <p className="font-medium">{item.question}</p>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          Hint: {item.hint}
                        </p>
                      </div>
                    ))}
                  </div>
                </Panel>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function ModeButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm ${
        active
          ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
          : "border border-slate-300 dark:border-slate-700"
      }`}
    >
      {label}
    </button>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
        {title}
      </h3>
      <div className="space-y-2 text-sm leading-6">{children}</div>
    </div>
  );
}
