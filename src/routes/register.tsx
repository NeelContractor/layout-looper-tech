import { createFileRoute } from "@tanstack/react-router";
import DummyRegisterPage from "@/components/sections/DummyRegister";

const title = "Register — SuperTalks";
const description = "Create your SuperTalks account and choose a plan.";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DummyRegisterPage,
});
