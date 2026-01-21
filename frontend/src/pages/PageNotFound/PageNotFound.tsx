import {
  DocumentIcon,
  ActionButton,
  Feedback,
  HelpfulLinks,
} from "./components";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-2xl">
        <DocumentIcon />
        <Feedback />
        <ActionButton />
        <HelpfulLinks />
      </div>
    </div>
  );
}
