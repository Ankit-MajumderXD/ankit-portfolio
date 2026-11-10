import type { ReactNode } from "react";
import { PROJECT_ACCENT } from "../../data/caseStudies";

type CaseStudyLayoutProps = {
  projectId: string;
  children: ReactNode;
};

// Page shell for every case study: follows the site theme and scopes the
// project's accent colour (text-project, bg-project-soft) to the page.
export default function CaseStudyLayout({ projectId, children }: CaseStudyLayoutProps) {
  return (
    <div data-project={PROJECT_ACCENT[projectId]} className="bg-canvas text-fg">
      {children}
    </div>
  );
}
