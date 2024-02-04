"use client";

import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "@/components/ui";
import Description from "@/components/editor/Description";
import { AnswerList } from "@/components/questions/AnswerList";
import Link from "next/link";
import { Quiz } from "@/types";
import Footer from "@/components/layout/Footer";
import { getShareAnswerURL } from "@/utils/url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Client(props: { quiz: Quiz }) {
  const { quiz } = props;

  return (
    <>
      <div className="flex h-[calc(100vh_-_var(--nav-top-offset))] max-w-screen-lg flex-col gap-4 p-4">
        <div className="relative flex w-full justify-between">
          <div className="flex items-center">
            <Breadcrumb separator="/">
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href="/quizzes">
                  Quizzes
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href={`/quizzes/${quiz.path}`}>{quiz.info["en"]?.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              onClick={() => {
                const URL = getShareAnswerURL({ challenge: quiz });

                if (URL !== "") {
                  window.open(URL, "_blank")?.focus();
                }
              }}
            >
              Share Solution
            </Button>
          </div>
        </div>
        <div className="min-h-0 w-full flex-grow">
          <Card className="h-full">
            <Tabs defaultValue="description" className="h-full">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="solutions">Submissions</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="overflow-y-auto">
                <Description challenge={quiz} />
              </TabsContent>
              <TabsContent value="solutions">
                <AnswerList challenge={quiz} />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}