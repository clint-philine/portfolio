import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="relative z-10">
        <Compass className="mx-auto h-10 w-10 text-accent" />
        <h1 className="mt-6 font-heading text-display-lg font-semibold text-primary dark:text-white">
          404
        </h1>
        <p className="mt-3 text-lg font-medium text-primary dark:text-white">
          This page hasn't been drafted yet.
        </p>
        <p className="mt-2 max-w-sm mx-auto text-sm text-secondary dark:text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Button asChild variant="accent" className="mt-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
