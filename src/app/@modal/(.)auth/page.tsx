import AuthModal from "@/components/AuthModal";

export default function AuthModalRoute() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <AuthModal />
    </div>
  );
}
