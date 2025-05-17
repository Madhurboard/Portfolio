import { Download } from "react-feather";

export default function DownloadResume() {
  return (
    <div className="container pt-40">
      <div className="px-8 pb-8 border-2 border-blue-550 rounded-3xl">
        <p className="inline-flex items-center px-4 text-lg font-bold -translate-y-4 bg-white text-blue-550 transform-gpu">
          <Download size={24} className="mr-2" />
          Check Out My Resume
        </p>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4">Get to Know More About Me</h2>
          <p className="text-center text-gray-600 mb-6">Click below to view or download my latest resume in PDF format from Google Drive.</p>
          <a
            className="px-8 py-2 text-sm text-center text-white transition-colors border rounded-full bg-blue-550 border-blue-550 hover:border-blue-700 hover:bg-blue-700"
            href="https://docs.google.com/document/d/19K5l8Tm1AOFa5HRZGA3txem6s8xiOZ9RIZ6A3kSYR_U/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
