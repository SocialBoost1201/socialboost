import { PageLayout } from "@/components/layout/PageLayout";
import { FeedbackClient } from "./FeedbackClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロジェクト完了アンケート | SocialBoost",
  description: "SocialBoostでプロジェクトにご協力いただいたお客様向けのフィードバックフォームです。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function FeedbackPage() {
  return (
    <PageLayout>
      <FeedbackClient />
    </PageLayout>
  );
}
