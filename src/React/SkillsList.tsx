import { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill-rule="evenodd"
        d="M5 3a2 2 0 0 0-2 2v5h18V5a2 2 0 0 0-2-2H5ZM3 14v-2h18v2a2 2 0 0 1-2 2h-6v3h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3H5a2 2 0 0 1-2-2Z"
        clip-rule="evenodd"
      />
    </svg>
  ),
  "Backend Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill-rule="evenodd"
        d="M4 5.786C4 4.809 4.786 4 5.778 4h12.444C19.214 4 20 4.81 20 5.786V15H4V5.786ZM12 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8.276 6.31a1 1 0 0 1 1.414-.034l2.625 2.5a1 1 0 0 1 0 1.448l-2.625 2.5a1 1 0 1 1-1.38-1.448L10.175 9.5 8.31 7.724a1 1 0 0 1-.034-1.414Z"
        clip-rule="evenodd"
      />
      <path d="M2 17v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1H2Z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Landing pages and business websites",
    ],
    "Backend Development": [
      "RESTful APIs with Spring Boot",
      "Deployment and hosting",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="pt-3 text-left md:pt-9">
      <h2 className="text-3xl font-semibold text-[var(--white)] md:mb-6 md:text-4xl">
        What I do?
      </h2>
      <ul className="mt-4 space-y-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="w-full cursor-pointer overflow-hidden rounded-2xl border border-[var(--white-icon-tr)] bg-[#1414149c] text-left transition-all hover:bg-opacity-80 md:w-[400px]"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex flex-grow items-center justify-between gap-2">
                  <div className="min-w-0 max-w-[200px] overflow-hidden md:max-w-none">
                    <span className="block truncate text-lg text-[var(--white)]">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={`h-6 w-6 flex-shrink-0 transform text-[var(--white)] transition-transform ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222l4.95 4.95Z" />
                  </svg>
                </div>
              </div>

              <div
                className={`px-4 transition-all duration-300 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-sm text-[var(--white-icon)]">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <div className="pl-3">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
