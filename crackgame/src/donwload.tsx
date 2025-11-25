// DownloadsPage.tsx
import React from "react";
import SearchBar from "./searchbar";

const DownloadsPage: React.FC = () => {
  const downloadSections = [
    {
      id: 1,
      mainTitle: "Raft2:Online",
      icon: "./src/image/game.png",
      sections: [
        {
          type: "description",
          content:
            "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
        },
        {
          type: "download",
          title: "Download",
          description:
            "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
          link: "Lorem ipsum is a dummy or placeholder text commonly used",
        },
      ],
    },
    {
      id: 2,
      mainTitle: "Schedule1",
      icon: "./src/image/game.png",
      sections: [
        {
          type: "description",
          content:
            "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
        },
        {
          type: "download",
          title: "Download",
          description:
            "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
          link: "Lorem ipsum is a dummy or placeholder text commonly used",
        },
      ],
    },
  ];

  return (
    <div className="ml-40 flex-1 p-8 bg-[#111315] min-h-screen">
      <div className="mb-6 max-w-4xl">
        <SearchBar />
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-[Poppins,sans-serif] font-bold text-white mb-2">
          Downloads
        </h1>
        <p className="text-[#D9D9D9] font-[Poppins,sans-serif]">
          Access your downloaded content and resources
        </p>
      </div>

      <div className="space-y-6 max-w-[1250px]">
        {downloadSections.map((section, index) => (
          <div
            key={section.id}
            className="bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]"
          >
            <div className="flex p-6 items-start justify-between gap-6">
              {/* Kiri — Icon Game */}
              <div className="flex-shrink-0">
                <img
                  src={section.icon}
                  alt={section.mainTitle}
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>

              {/* Tengah — Semua konten dalam satu div flex column */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Main Title dan Description dalam satu baris */}
                <div className="flex justify-between items-start gap-6">
                  {/* Main Title dan Description */}
                  <div className="flex-1 max-w-[320px] ml-2">
                    <h2 className="text-[23px] font-[Poppins,sans-serif] font-bold text-white mb-3">
                      {section.mainTitle}
                    </h2>
                    <p className="text-[#D9D9D9] max-w-[300px] font-[Poppins,sans-serif] text-[12px] leading-relaxed">
                      {
                        section.sections.find((s) => s.type === "description")
                          ?.content
                      }
                    </p>
                  </div>

                  {/* Download Section */}
                  <div className="flex-1">
                    <h3 className="text-lg font-[Poppins,sans-serif] font-semibold text-white mb-2">
                      {
                        section.sections.find((s) => s.type === "download")
                          ?.title
                      }
                    </h3>
                    <p className="text-[#D9D9D9] font-[Poppins,sans-serif] text-[12px] leading-relaxed mb-3">
                      {
                        section.sections.find((s) => s.type === "download")
                          ?.description
                      }
                    </p>

                    <span className="text-[#6085CF] font-[Poppins,sans-serif] text-[12px]">
                      {
                        section.sections.find((s) => s.type === "download")
                          ?.link
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* Kanan — Icon Download */}
              <div className="flex-shrink-0 flex items-center mt-9 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white opacity-70 hover:opacity-100 cursor-pointer transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0l-4-4m4 4l4-4m4 7H4"
                  />
                </svg>
              </div>
            </div>

            {/* Divider antara main sections */}
            {index < downloadSections.length - 1 && (
              <div className="border-t border-[#2A2A2A]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;
