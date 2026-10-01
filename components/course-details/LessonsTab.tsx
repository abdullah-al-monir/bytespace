import { body, h3 } from "@/components/course-details/AboutTab";
import { VideoCameraIcon } from "@/components/course-details/DetailIcons";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { CourseDetails } from "@/lib/course-details";

export function LessonsTab({ details }: { details: CourseDetails }) {
  return (
    <div className="pb-16 lg:pb-21">
      <h2 className={`${h3} mt-10`}>Explore the Modules</h2>
      <p className={`${body} mt-6.5`}>{details.modulesIntro}</p>

      <h3 className={`${h3} mt-5.5`}>Lesson List</h3>
      <ul className="mt-5.5 space-y-5.25">
        {details.modules.map((m) => (
          <li key={m.title} className="flex items-center gap-3.5">
            <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[20px] bg-lime text-ink">
              <VideoCameraIcon className="h-5.5 w-7" />
            </span>
            <div className={body}>
              <p className="text-ink">{m.title}</p>
              <p>{m.description}</p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className={`${h3} mt-5.5`}>Lesson Content</h3>
      <p className={`${body} mt-6.5`}>{details.lessonContent}</p>

      <h3 className={`${h3} mt-5.5`}>Lesson Progress Tracking</h3>
      <p className={`${body} mt-6.5`}>{details.progressText}</p>

      <div className="mt-5.5 rounded-2xl border border-line px-4.75 pb-3.75 pt-3.5">
        <p className="text-[14px] leading-4.5 text-ink">Learning Progress</p>
        <p className="mt-1.5 text-[40px] font-semibold leading-11 text-ink">
          {details.progress}%
        </p>
        <ProgressBar value={details.progress} className="mt-2.25" />
      </div>
    </div>
  );
}
