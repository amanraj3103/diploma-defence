"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { allTopics, getRandomTopicIds } from "@/data/topics";
import { Topic } from "@/data/types";
import { getQuestionTitle } from "@/data/question-bank";

interface PracticeSessionProps {
  initialTopicIds?: number[];
}

export function PracticeSession({ initialTopicIds = [] }: PracticeSessionProps) {
  const topics = useMemo(() => {
    if (initialTopicIds.length === 3) {
      return initialTopicIds
        .map((id) => allTopics.find((topic) => topic.id === id))
        .filter((topic): topic is Topic => Boolean(topic));
    }

    const fallbackIds = getRandomTopicIds(3);
    return fallbackIds
      .map((id) => allTopics.find((topic) => topic.id === id))
      .filter((topic): topic is Topic => Boolean(topic));
  }, [initialTopicIds]);

  const [minutesPerTopic, setMinutesPerTopic] = useState(5);
  const [topicIndex, setTopicIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(5 * 60);
  const [running, setRunning] = useState(false);

  const currentTopic = topics[topicIndex];

  const applyTimer = (minutes: number) => {
    setMinutesPerTopic(minutes);
    setSecondsLeft(minutes * 60);
    setRunning(false);
  };

  const startPause = () => {
    setRunning((value) => !value);
  };

  const resetCurrent = () => {
    setSecondsLeft(minutesPerTopic * 60);
    setRunning(false);
  };

  const nextTopic = () => {
    if (topicIndex < topics.length - 1) {
      setTopicIndex((value) => value + 1);
      setSecondsLeft(minutesPerTopic * 60);
      setRunning(false);
    }
  };

  useEffect(() => {
    if (!running) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((value) => {
        if (value <= 1) {
          setRunning(false);
          return 0;
        }
        return value - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [running, secondsLeft]);

  if (!currentTopic) {
    return (
      <main className="min-h-screen bg-slate-50 p-6 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <p>Unable to load practice topics.</p>
          <Link href="/topic/1" className="mt-4 inline-block underline">
            Back to topics
          </Link>
        </div>
      </main>
    );
  }

  const minute = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const second = String(secondsLeft % 60).padStart(2, "0");
  const currentTopicTitle = getQuestionTitle(currentTopic.id) ?? currentTopic.title;

  return (
    <main className="min-h-screen bg-slate-50 p-3 text-slate-900 sm:p-4 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-5xl space-y-4">
        <header className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-sm text-slate-500">Random Topic Practice</p>
              <h1 className="text-lg font-bold sm:text-xl">Defence Simulation</h1>
            </div>
            <div className="flex w-full flex-wrap gap-2 sm:w-auto">
              <Link
                href={`/topic/${currentTopic.id}`}
                className="rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-700"
              >
                Open Topic
              </Link>
              <Link
                href="/topic/1"
                className="rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-700"
              >
                Back to Topics
              </Link>
            </div>
          </div>
        </header>

        <section className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium">Timer:</span>
            <button
              type="button"
              onClick={() => applyTimer(5)}
              className={`rounded px-3 py-1.5 text-sm ${
                minutesPerTopic === 5
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "border border-slate-300 dark:border-slate-700"
              }`}
            >
              5 min
            </button>
            <button
              type="button"
              onClick={() => applyTimer(7)}
              className={`rounded px-3 py-1.5 text-sm ${
                minutesPerTopic === 7
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "border border-slate-300 dark:border-slate-700"
              }`}
            >
              7 min
            </button>
          </div>

          <div className="mb-3 text-sm text-slate-600 dark:text-slate-300">
            Topic {topicIndex + 1} of {topics.length}
          </div>

          <h2 className="break-words text-xl font-bold sm:text-2xl">
            {currentTopic.id}. {currentTopicTitle}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{currentTopic.domain}</p>

          <div className="mt-4 rounded-lg bg-slate-900 p-4 text-center text-white dark:bg-slate-100 dark:text-slate-900">
            <p className="text-sm">Time Left</p>
            <p className="text-3xl font-bold sm:text-4xl">
              {minute}:{second}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={startPause}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900"
            >
              {running ? "Pause" : "Start"}
            </button>
            <button
              type="button"
              onClick={resetCurrent}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm dark:border-slate-700"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={nextTopic}
              disabled={topicIndex >= topics.length - 1}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-slate-700"
            >
              Next Topic
            </button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Speaking Structure
            </h3>
            <ul className="list-inside list-disc space-y-2 text-sm">
              <li>Intro (30-45 sec): {currentTopic.defenceAnswer.intro}</li>
              <li>
                Core (3-4 min): Explain concepts in 3-5 bullet points from this
                topic.
              </li>
              <li>
                Example (1-2 min): {currentTopic.defenceAnswer.exampleApplication}
              </li>
              <li>Conclusion (30 sec): {currentTopic.defenceAnswer.conclusion}</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Quick Viva Prompts
            </h3>
            <ul className="list-inside list-disc space-y-2 text-sm">
              {currentTopic.vivaQuestions.map((item) => (
                <li key={item.question}>
                  {item.question} <span className="text-slate-500">({item.hint})</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
